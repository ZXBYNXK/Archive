//Darius Rain
//DeptV2
//Date: 11/29/19

const departmentsGlobal = {   // <--- Created a GLOBAL OBJECT to keep everything in.
    information: {  //<--- Decided to put information about the program in its own OBJECT incase anyone sees it.
        program: 'Departnement Report', 
        version: '2',
        date: '11-29-19',
        school: 'CareerDevs',
        contact: 'raindarius@gmail.com'
     },
    program: {//<--- Going to store ALL PROGRAM DATA in this OBJECT
       all:[], //<-- This ARRAY will contain all information needed.
       backup:[],//<-- Made this just incase something happens, you never know.
       departmentsArray:[],//<-- This ARRAY will contain all the informatio about employee salaries
       salaryArray: [],
       employeeArray: [],
       departmentEmpArray: [],
       methods: {
            configureFiles: function(){
               const fs = require('fs'),
                salariesOriginal = fs.readFileSync('./load_salaries.txt', 'utf8'),
                employeesOriginal = fs.readFileSync('./load_employee.txt', 'utf8'),
                departmentEmployeesInfoOriginal = fs.readFileSync('./load_dept_emp.txt', 'utf8'),
                // takeDataSortIt(arguments) {
                 
                //  }
 
               //console.log(salariesOriginal);
               //console.log(employeesOringinal);
               //console.log(departmentEmployeeaInfoOriginal);
                   //onsole.log('Test')                                   
             }
        }
       },
       
      
}

departmentsGlobal.program.methods.sortConfigureFiles();
 /* 
--> Down here I call a CUSTOM METHOD to LAUNCH the program 
--> I Also run alot of tests down here as well.
--> I write it out this way becuase ONE I learn to get comfortable with objects and TWO I noticed it makes code easier to maintain, when written in an object oriented format.
*/
