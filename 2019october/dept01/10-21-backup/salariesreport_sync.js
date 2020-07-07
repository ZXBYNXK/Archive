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
//console.log(saldata);
for (let i = 0; i < saldata.length; i++) {
  var x = saldata[i].split(",");

  deptsalaries[i] = x;
  deptsalaries[i].pop();
}

//console.log(deptsalaries[0][1]);

var fileFoo = require("fs");
//1. load_dept_names.txt
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

var newArr = [];

for (let i = 0; i < deptemp.length; i++) {
  for (let j = 0; j < saldata.length; j++) {
    if (deptemp[i][0] == saldata[j][0]) {
      newArr[i] = newArr[i].push(deptemp[i]);
      newArr[i] = newArr[i].push(deptemp[j]);
      newArr[i] = newArr[i].push(saldata[j]);
    } else {
    }
  }
}

console.log(newArr);

//console.log(deptemp[0][1])

/*var sumsal = [];
for(let i = 0; i < deptsalaries.length; i++) {
	sumsal.push([])
	
		for(let k = 0; k < deptsalaries.length; k++) {
			
			for(let j = 0; j < deptemp.length; j++)
			if(deptsalaries[i][0] == deptemp[j][0]) {
					
				sumsal[i][0] = deptsalaries[k][0];
				
				sumsal[i][1] = deptemp[j][1];
				sumsal[i].push(deptsalaries[j][1])	
								
					} 
				
				}



}
console.log(sumsal)



	
	
	


*/

//console.log(deptsalaries);
