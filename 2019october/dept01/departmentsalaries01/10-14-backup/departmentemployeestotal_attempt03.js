var filesys = require("fs");
//file system method call back funciton

// 1.

var departmentNames = "";
function deptnames() {
  
  departmentNames = filesys.readFileSync("load_dept_names.txt", "utf8");
  // filesys.readFile("load_dept_names.txt", "utf8", function(err, data) {
    // if (err) throw err;
    departmentNames = departmentNames.replace(/\(|\'|\)/g, "");
    departmentNames = departmentNames.split("\n");

    for (var i = 0; i < departmentNames.length; i++) {
      departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
      departmentNames[i] = departmentNames[i].split(",");
    }
    departmentNames.shift();
    console.log(departmentNames);
  }
var departmentEmp = "";
function deptemp() {

departmentEmp = filesys.readFileSync('load_dept_emp.txt', 'utf8');
departmentEmp = departmentEmp.replace(/INSERT INTO `dept_emp` VALUES |\(|\)|\'/g, "").replace(/^\s*/gm, "").split('\n');

for(let i=0; i < departmentEmp.length; i++){
	departmentEmp[i] = departmentEmp[i].substring(0, departmentEmp[i].length - 1);
	departmentEmp[i] = departmentEmp[i].split(',');
}
departmentEmp.pop();






//console.log(departmentEmp);



}

departmentEmployees3d = []

for (let i=0; i < departmentNames.length; i++){


departmentEmployees3d[i].push([]);





} 
deptnames();
deptemp();


console.log(departmentEmployees3d);





//deptnames();
//deptemp();
