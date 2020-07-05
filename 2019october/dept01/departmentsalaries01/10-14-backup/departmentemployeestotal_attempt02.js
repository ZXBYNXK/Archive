/*
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


*/


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

// 2.
function deptemp() {
  var dtEmpData =  filesys.readFileSync("load_dept_emp.txt", "utf8");
//   filesys.readFile("load_dept_emp.txt", "utf8", function(err, data) {
//     if (err) throw err;

    dtEmpData = dtEmpData.replace("INSERT INTO `dept_emp` VALUES ", "");
    var dtEmpData = dtEmpData.replace(/\(|\'|\)/g, "");
    var tempDepartmentEmployee = dtEmpData.split("\n");

    // console.log(dtEmpData);

    for (i = 0; i < tempDepartmentEmployee.length; i++) {

        tempDepartmentEmployee[i] = tempDepartmentEmployee[i].substring(0, tempDepartmentEmployee[i].length - 1).split(",");

      if (tempDepartmentEmployee[i] == "") {  
        
          tempDepartmentEmployee.splice(i, 1);
          i--;
      }

    }
console.log(departmentNames.length);
    var departmentEmployee3D = [];

    for (var i = 0; i < departmentNames.length; i++) {
      departmentEmployee3D.push([]);
    }

    for (var i = 0; i < tempDepartmentEmployee.length; i++) {
      // [ '10001', 'd005', '1986-06-26', '9999-01-01' ]

    }

    
    
// 2. Process Second File - load_dept_emp.txt
// var deptEmployeesArray [[10017, '1993-08-03']], [], [10005, '1989-09-12'], [], [], []

// a. create a report that contains: deptID, DeptName: Total#EmpInDept
// b. utilize data from two files (deptnames + deptempl)
// c. DeptArray = 2D, sorted by DeptID
// d. DeptEmplArray3D = 3D, sorted by DeptID """subarray"""
// d.1. DeptEmplyArray3D shall have the following form:
//      DeptEmplyArray3D = [ [ [ '10017', 'd001', '1993-08-03', '9999-01-01' ], [ '10043', 'd001', '1993-08-03', '9999-01-01' ] ], [   ],  [[ '10005', 'd003', '1989-09-12', '9999-01-01' ], [ '10013', 'd003', '1985-10-20', '9999-01-01' ]   ]]
// i.e. DeptEmplyArray3D[0] = [ [ '10017', 'd001', '1993-08-03', '9999-01-01' ], [ '10043', 'd001', '1993-08-03', '9999-01-01' ] ]
// e. create empty DeptEmplyArray3D = [];
// iterate through DeptEmplyArray and calculate the number of instances where DeptEmplyArray[i][1] is the same.  Find the corresponding dept id name in the deptnames array and console log the results.


    // for (var i = 0; i < tempDepartmentEmployee.length; i++) {
    //     console.log("temp:", tempDepartmentEmployee[i][1]);

    // }
  
    console.log(tempDepartmentEmployee);
    console.log(departmentEmployee3D);
    // console.groupEnd("DeptEMP");
}

deptnames();
deptemp();
