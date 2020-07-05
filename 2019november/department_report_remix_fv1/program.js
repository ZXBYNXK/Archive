
 const readline = require('readline'),
 rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 })


const globe = {
    info: {
        name:"Departments Program",
        madeBy:"Darius Rain",
        school:"CareerDevs Computer Science University",
        dateMade:"11/31/19",
        contact:"dariusrain.student@careerdevs.com"    
        },
    
    program: {
        upgradedEmployeeAccountsArray: [],
        departmentEmployees: [],
        departmentEmployeeStatus: [],
        departmentNames: [],
        departmentSalaries: [],
        templates: {
        departmentAllTemplate: {
            departmentName: null,
            employeesInDepartment: null,
            
        
        },
        departmentEmployeesTemplate: {
                    employeeId: null,
                    birthDate: null,
                    firstName: null,
                    lastName: null,
                    gender: null,
                    date2: null,
            },
        departmentEmployeeStatusTemplate: {
                    employeeId: null,
                    departmentId: null,
                    date1: null,
                    date2: null,
            },
        departmentNamesTemplate: {
                    departmentId: null,
                    departmentName: null,
            },
        departmentSalariesTemplate: {
                    employeeId: null,
                    salary: null,
                    startDate: null,
                    endDate: null,
            }       
        },
        methods: {
            sortEverything: function(){ 
            const fs = require('fs');

let load_salaries = fs.readFileSync('./load_salaries.txt', 'utf8'),

 load_salaries_array = load_salaries.replace("INSERT INTO `salaries` VALUES ","").replace(/[A-Z|a-z|~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "").replace(/\n/g, "").split(','),

 load_dept_emp = fs.readFileSync('./load_dept_emp.txt', 'utf8'),
 
 load_dept_emp_array = load_dept_emp.replace("INSERT INTO `dept_emp` VALUES ","").replace(/[~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "").replace(/\n/g, "").split(','),
 
 load_employee = fs.readFileSync('./load_employee.txt', 'utf8'),

 load_employee_array = load_employee.replace("INSERT INTO `employees` VALUES ","").replace(/[~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "").replace(/\n/g, "").split(','),
 
  load_dept_names = fs.readFileSync('./load_dept_names.txt', 'utf8'),
 
 load_dept_names_array = load_dept_names.replace("INSERT INTO `departments` VALUES ","").replace(/[~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "").replace(/\n/g, "").split(',');
 


 load_dept_emp_array.pop();
 load_employee_array.pop();
 load_salaries_array.pop();

            function sortSend(template, array, location){
            let templateKeys = Object.keys(template),
              width = templateKeys.length - 1,
              temporaryTemplate = {};
            for(let i = 0, j = 0; i < array.length; i++){
                if(j < width){
                    temporaryTemplate[templateKeys[j]] = array[i];
                    j+=1
                } else if(j === width) {
                    temporaryTemplate[templateKeys[j]] = array[i];
                    location.push(temporaryTemplate)
                    j = 0;
                    temporaryTemplate = {}
               
                } else {
                    console.log('Something is wrong!')
                }
                
            }
            
            }
            sortSend(globe.program.templates.departmentSalariesTemplate, load_salaries_array, globe.program.departmentSalaries);
            sortSend(globe.program.templates.departmentEmployeesTemplate, load_employee_array, globe.program.departmentEmployees);
            sortSend(globe.program.templates.departmentEmployeeStatusTemplate, load_dept_emp_array, globe.program.departmentEmployeeStatus);
            sortSend(globe.program.templates.departmentNamesTemplate, load_dept_names_array, globe.program.departmentNames);
            
            
            },
            addUpgradedAccounts: function(){
              let upgradeFinalAccount = {},
               currentEmployeesFilter = [];
               globe.program.departmentSalaries.forEach(object => {
                if(object.endDate.includes('9999')){
                    currentEmployeesFilter.push(object);
                }
               }) 
             currentEmployeesFilter.forEach(object => {
                collect(object)
             
             })
              
             function collect(objectValue) {
               let currentValueDeptEmployees,
                currentValueDeptEmp;
                globe.program.departmentEmployees.forEach(empObj => {
                        if(objectValue.employeeId === empObj.employeeId){
                            currentValueDeptEmployees = empObj 
                        }
                })
                globe.program.departmentEmployeeStatus.forEach(empStatusObj => {
                    if(objectValue.employeeId === empStatusObj.employeeId){
                        currentValueDeptEmp = empStatusObj
                        
                    }
                
                })
               upgradeFinalAccount.firstName = currentValueDeptEmployees.firstName;
               upgradeFinalAccount.lastName = currentValueDeptEmployees.lastName;
               upgradeFinalAccount.gender = currentValueDeptEmployees.gender;
               upgradeFinalAccount.birthDate = currentValueDeptEmployees.birthDate;
               upgradeFinalAccount.salary = objectValue.salary;
               upgradeFinalAccount.employeeId = currentValueDeptEmployees.employeeId;
               upgradeFinalAccount.departmentId = currentValueDeptEmp.departmentId;
               globe.program.upgradedEmployeeAccountsArray.push(upgradeFinalAccount);
               upgradeFinalAccount = {}
               
               
               
               
             }
             
             },
             displaySalariesTotalForDepartment: function(department) {
               let total = 0,
                capturedId,
                nameAnyway;
                console.log(`Searching ${department}...`)
                globe.program.departmentNames.forEach(object => {
                    if(department.toUpperCase() === object.departmentName.toUpperCase()){
                        captureId = object.departmentId;
                        nameAnyway = object.departmentName
                        return true
                    }
                })
                let count = 0;
                console.log(`Department: ${nameAnyway} | Department ID: ${captureId}`)
                console.log('Active employee list')
                console.log('============================================================================================')
                globe.program.upgradedEmployeeAccountsArray.forEach(object => {
                    if(captureId === object.departmentId){
                        ++count
                        console.log('')
                        console.log(`Employee: ${object.firstName} ${object.lastName} | Sex: ${object.gender}  | Salary:$${object.salary} | Employee ID: ${object.employeeId}`)
                        console.log('')
                        total+= parseFloat(object.salary)
                    }
                })
                console.log(`============================================================================================`)
                console.log(`Total salaries: $${parseFloat(total)} | Employee Population: ${count}`)
                console.log(`============================================================================================`) 
                console.log(' | |')
                console.log(' | |')
               
                globe.program.methods.runReadLineProgram()
            },
            displayAllEmployeesInDepartment: function(department) {
                let capturedId,
                 nameAnyway;
                 console.log(`Searching ${department}...`)
                 globe.program.departmentNames.forEach(object => {
                     if(department.toUpperCase() === object.departmentName.toUpperCase()){
                         captureId = object.departmentId;
                         nameAnyway = object.departmentName
                         return true
                     }
                 })
                 let count = 0;
                 console.log(`Department: ${nameAnyway} | Department ID: ${captureId}`)
                 console.log('Active employee list')
                 console.log('============================================================================================')
                 globe.program.upgradedEmployeeAccountsArray.forEach(object => {
                     if(captureId === object.departmentId){
                         ++count
                 console.log('--------------------------------------------------------------------------------------------')

                         console.log(`Employee: ${object.firstName} ${object.lastName} | Sex: ${object.gender} | Employee ID: ${object.employeeId}`)
                 console.log('---------------------------------------------------------------------------------------------')
                       
                     }
                 })
                 console.log(`============================================================================================`)
                 console.log(`Employee Population: ${count}`)
                 console.log(`============================================================================================`) 
                console.log(' | |')
                console.log(' | |')
              
                 globe.program.methods.runReadLineProgram()
             },
             searchEverything: function(input) {
                 let result = [];
            console.log('Active Employee Record Search Results...')
            console.log('========================================')
                 globe.program.upgradedEmployeeAccountsArray.forEach(object => {
                    if(object.firstName.includes(input) || object.lastName.includes(input) || object.gender.includes(input) || object.birthDate.includes(input) || 
                    object.salary.includes(input) || object.employeeId.includes(input) || object.employeeId.includes(input)){
                    
                        result.push(object)
                    }
                 })
                 console.log(result)
                 globe.program.methods.runReadLineProgram()
                },
                displaySalariesTotalForAllDepartments: function(){
                let result = 0;
                globe.program.upgradedEmployeeAccountsArray.forEach(object =>{
                    result += parseFloat(object.salary)
                })
                console.log(`All departments salaries total: $${result}`)
                console.log(' | |')
                console.log(' | |')
              
                globe.program.methods.runReadLineProgram()
            },
            runReadLineProgram: function(){
                console.log('(===)')
                console.log('(===)')
                console.log(' | |')
                console.log(' | |')
                console.log('Departments Report Classwork')
                console.log('School: CarrerDevs Computer Science Univeristy')
                console.log('Name: Darius Rain,')
                console.log(' ======================================================== ')
                console.log('|                    Departments:                        |')
                console.log('|                                                        |')
                console.log('| Marketing,           Finance,          Human Resources,|')
                console.log('|                                                        |')
                console.log('| Production,      Quality Managment,         Sales,     |')
                console.log('|                                                        |')
                console.log('|         Research,             Customer Service         |')
                console.log(' ========================================================')
                console.log('1: Display total of all department salaries together.')
                console.log('2: Display individual department salaries total.')
                console.log('3: Search employee records');
                console.log('4: Display employee list of department')
                console.log('5: Exit')
                console.log('__________________________________________________________')
                rl.question(``, function(input){
                    switch(parseInt(input)){
                        case 1:
                                globe.program.methods.displaySalariesTotalForAllDepartments();
                            break;
                        case 2:
                            console.log('Enter department name:')
                            rl.question(``, function(input){
                                globe.program.methods.displaySalariesTotalForDepartment(input)
                                
                            })
                            break;
                        case 3: 
                            console.log('Search employee information:')
                            rl.question(``, function(input){
                                globe.program.methods.searchEverything(input)
                              
                            })
                            break;
                        case 4:
                            console.log('Enter department name:')
                            rl.question(``, function(input){
                                globe.program.methods.displayAllEmployeesInDepartment(input)
                              
                            })
                            break;
                        case 5:
                            rl.close();
                            break;
                        default:
                                globe.program.methods.runReadLineProgram()
                                break;
                    }
                })
            }
    
    }

}
}

globe.program.methods.sortEverything();
globe.program.methods.addUpgradedAccounts();
globe.program.methods.runReadLineProgram();
