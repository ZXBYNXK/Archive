var filesys = require("fs");
var departmentEmployees;
var departmentNames;
var departmentEmployee3d;
//1. load dept names.txt 

function deptNamesSync(){
    departmentNames = filesys.readFileSync("load_dept_names.txt", 'utf8');
    
    departmentNames = departmentNames.replace(/\(|\'|\)/g, "").replace(/'INSERT INTO `departments` VALUES'/g, "").split("\n");
   

    for (var i = 0; i < departmentNames.length; i++) {
      departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
      departmentNames[i] = departmentNames[i].split(",");
    }

departmentNames.shift();
//console.log(departmentNames);
   
    

}

//2. load deptemp.txt


function deptartmentEmployeesSync() {
 departmentEmployees = filesys.readFileSync("load_dept_emp.txt", "utf8");
departmentEmployees = departmentEmployees.replace(/\(|\)|\'/g, "").replace('INSERT INTO `dept_emp` VALUES', "").replace(/^\s*/gm, "").split('\n');

for(let i=0; i < departmentEmployees.length; i++) {

departmentEmployees[i] = departmentEmployees[i].substring(0, departmentEmployees[i].length - 1);
departmentEmployees[i] = departmentEmployees[i].split(',');



}
departmentEmployees.pop();
departmentEmployee3d = [];
for(let i=0; i < departmentNames.length; i++){

	departmentEmployee3d.push([departmentNames[i][0]])


}

var correctIndex;
for(let i=0; i < departmentEmployee3d.length; i++){
  for(let j=0; j < departmentEmployees.length; j++){
    if(departmentEmployee3d[i][0] == departmentEmployees[j][1]){
	departmentEmployee3d[i].push(departmentEmployees[j])
			
		}
	}
}

for(let i=0; i < departmentEmployee3d.length; i++){
  departmentEmployee3d[i] = departmentEmployee3d[i].length -1


}

for(let i=0; i < departmentNames.length; i++){

	console.log(`(ID/Name): ${departmentNames[i][0]}, ${departmentNames[i][1]} \n Total Employees: ${departmentEmployee3d[i]}\n`)

}
	


}
deptNamesSync();
deptartmentEmployeesSync();






