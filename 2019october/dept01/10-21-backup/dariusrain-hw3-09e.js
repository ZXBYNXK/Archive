// Name: Darius Rain				  Title: Homework3		Date-Sent: Oct. 14, 2019    --->   Due-Date: Oct. 14, 2019
//					     (Salary Total Per Department)

const fs = require("fs");
var data = fs.readFileSync("load_dept_names.txt", "utf8");
data = data.replace(/\(|\)|\'|\;/g, "").split("\n");
data.shift();
var departmentNames = [];
for (let i = 0; i < data.length; i++) {
  var x = data[i].split(",");
  //var result1 = new Array(x.split(','))

  if (i < data.length - 1) {
    departmentNames[i] = x;
    departmentNames[i].pop();
  } else {
    departmentNames[i] = x;
  }
}

const fileSystem = require("fs");
var saldata = fileSystem.readFileSync("load_salaries.txt", "utf8");
saldata = saldata
  .replace(/"VALUES "/, "\n")
  .replace(/\(|\)|\'/g, "")
  .split("\n");
saldata.shift();
var deptsalaries = [];

for (let i = 0; i < saldata.length; i++) {
  var x = saldata[i].split(",");

  deptsalaries[i] = x;
  deptsalaries[i].pop();
}

const fileFoo = require("fs");
var empdata = fileFoo
  .readFileSync("load_dept_emp.txt", "utf-8")
  .replace(/"VALUES "/, "\n")
  .replace(/\(|\'|\),|\)/g, "")
  .replace(/^\s*\n/gm, "")
  .split("\n");
empdata.shift();
var deptemp = [];
var y = empdata.length;

for (let i = 0; i < empdata.length; i++) {
  var x = empdata[i].split(",");

  deptemp[i] = x;
  deptemp[i].pop();
}
deptemp.pop();

var _temp;
var newArr = [];
for (let i = 0; i < departmentNames.length; i++) {
  newArr.push([departmentNames[i][0]]);
}
//console.log(newArr);

for (let i = 0; i < deptsalaries.length; i++) {
  for (let j = 0; j < deptemp.length; j++) {
    if (deptsalaries[i][0] == deptemp[j][0]) {
      _temp = deptemp[j][1];
      for (let k = 0; k < newArr.length; k++) {
        if (_temp == newArr[k][0]) {
          newArr[k].push(deptsalaries[i][1]);
        }
      }
    }
  }
}
var _temp02 = 0;

for (let i = 0; i < newArr.length; i++) {
  for (let j = 1; j < newArr[i].length; j++) {
    if (j == 1) {
      _temp02 = parseInt(newArr[i][j]);
    } else {
      _temp02 += parseInt(newArr[i][j]);
    }
  }

  newArr[i].push(_temp02);
  console.log(
    `Dept. ID:  ${newArr[i][0]}\nDept. Name:  ${departmentNames[i][1]}\nTotalSalaries:  ${_temp02}\n\n`
  );
}

//console.log(_temp02)
//console.log(newArr)
