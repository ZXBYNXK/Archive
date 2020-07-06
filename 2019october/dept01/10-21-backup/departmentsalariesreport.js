// 		Dept Assignment 			Name: Darius Rain 		Cohort: 9

function loadDeptNames() {
  var fileFoo = require("fs");
  //1. load_dept_names.txt
  fileFoo.readFile("load_dept_names.txt", "utf-8", function (error, fileData) {
    if (error) throw error;
    var newFileData = fileData.replace(/\(|\'|\),|\)/g, ""); //replacing all context i want with '|' charachter.
    var newArrayFileData = newFileData.split("\n"); // Creats an array based of a charachter in a string.

    newArrayFileData.shift();

    var departmentNames = [];

    for (var i = 0; i < newArrayFileData.length; i++) {
      departmentNames.push(newArrayFileData[i].split(","));
    }

    console.log(departmentNames);
  });
}
function loadDeptEmp() {
  var fileFoo = require("fs");
  //2. load_dept_emp.txt
  fileFoo.readFile("load_dept_emp.txt", "utf-8", function (error, fileData) {
    if (error) throw error;
    var newFileData = fileData.replace(/\(|\'|\),|\)/g, ""); //replacing all context i want with '|' charachter.
    var newArrayFileData = newFileData.split("\n"); // Creats an array based of a charachter in a string.

    newArrayFileData.shift();

    var departmentEmp = [];

    for (var i = 0; i < newArrayFileData.length; i++) {
      departmentEmp.push(newArrayFileData[i].split(","));
    }
    departmentEmp.pop();
    departmentEmp.pop();
    console.log(departmentEmp);
  });
}
function loadSal() {
  var fileFoo = require("fs");
  //3. load_dept_salaries.txt
  fileFoo.readFile("load_salaries.txt", "utf-8", function (error, fileData) {
    if (error) throw error;
    var newFileData = fileData.replace(/\(|\'|\),|\)/g, ""); //replacing all context i want with '|' charachter.
    var newArrayFileData = newFileData.split("\n"); // Creats an array based of a charachter in a string.

    newArrayFileData.shift();

    var departmentSal = [];

    for (var i = 0; i < newArrayFileData.length; i++) {
      departmentSal.push(newArrayFileData[i].split(","));
    }

    console.log(departmentSal);
  });
}
loadDeptNames();
loadDeptEmp();
loadSal();
