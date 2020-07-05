var filesys = require("fs");
//file system method call back funciton

// 1. load_dept_names.txt

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

// 2. load_dept_emp.txt
var departmentEmployee3d = "";
function departmentEmp() {

    var empData = filesys.readFileSync('load_dept_emp.txt', 'utf8');
    empData = empData.replace(/INSERT INTO `dept_emp` VALUES |\(|\'|\)/g, "").split('\n');
    var newEmpData = [];

    for (let i = 0; i < empData.length; i++) {
        if (empData[i] != '' && empData[i].includes("9999")) {

            newEmpData.push(empData[i].split(','))

        }

    }

    console.log(newEmpData)
}
var newEmp3d = [];

for (var i = 0; i < departmentNames.length; i++) {

    newEmp3d.push([]);

}

deptnames();
departmentEmp();

console.log(newEmp3d)
