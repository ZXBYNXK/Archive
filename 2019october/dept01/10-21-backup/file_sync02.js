// Name: Darius Rain				  Title: Homework2		Date-Sent: Oct. 14, 2019    --->   Due-Date: Oct. 14, 2019
//					(Employee Population Per Department)

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

  //console.log(result1)
}

const fs1 = require("fs");
var data1 = fs1.readFileSync("load_dept_emp.txt", "utf8");
data1 = data1
  .replace(/\(|\)|\'|\;/g, "")
  .replace(/^\s*\n/gm, "")
  .split("\n");

data1.shift();

data1.pop();
var departmentEmployees = [];
for (let i = 0; i < data1.length; i++) {
  var x = data1[i].split(",");
  //var result1 = new Array(x);

  departmentEmployees[i] = x;

  //container1[0][i].length -1 != '';
  departmentEmployees[i].pop();
  //console.log(result1)
}

var departmentEmployee3D = [];

var departmentIdTemp = `Department ID:`;

var departmentNameTemp = `Department Name:`;

var population = `--Total Employees:`;

var departmentPop = departmentNames;

for (var i = 0; i < departmentNames.length; i++) {
  //departmentEmployee3D.push([container[i]]);
  departmentEmployee3D.push([]);
}
for (var i = 0; i < departmentEmployees.length; i++) {
  //
  for (var j = 0; j < departmentNames.length; j++) {
    // j = 0

    if (departmentEmployees[i][1] == departmentNames[j][0]) {
      departmentEmployee3D[j].push(departmentEmployees[i]);
    }
  }
}

var deptpop = () => {
  for (let i = 0; i < departmentNames.length; i++) {
    var populationCount = departmentEmployee3D[i].length;
    console.log(
      `${departmentIdTemp}`,
      departmentNames[i][0],
      "\n",
      `${departmentNameTemp}`,
      departmentNames[i][1],
      "\n",
      `${population}`,
      `${populationCount}`,
      "\n\n"
    );
  }
};
deptpop();
