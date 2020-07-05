// Name: Darius Rain				  Title: Homework2		Date-Sent: Oct. 14, 2019    --->   Due-Date: Oct. 14, 2019
//					(Employee Population Per Department) 



const fs = require('fs');
var data = fs.readFileSync('load_dept_names.txt', 'utf8');
data = data.replace(/\(|\)|\'|\;/g, "").split('\n')
data.shift();
var departmentNames = [];
for(let i=0; i < data.length; i++) {
	var x = data[i].split(',');
	//var result1 = new Array(x.split(','))
	
	
	if(i < data.length - 1) {	
	departmentNames[i] = x
	departmentNames[i].pop();
	} else {

		departmentNames[i] = x

		}


}

//console.log(departmentNames);

const fileSystem = require('fs');
var saldata = fileSystem.readFileSync('load_salaries.txt', 'utf8');
saldata = saldata.replace(/"VALUES "/, '\n').replace(/\(|\)|\'/g, "").split('\n');
saldata.shift();
var deptsalaries = [];

for(let i=0; i < saldata.length; i++) {

	var x = saldata[i].split(',');
	
	deptsalaries[i] = x;
	deptsalaries[i].pop();	


}


const fileFoo = require('fs');
var empdata = fileFoo.readFileSync('load_dept_emp.txt', 'utf-8').replace(/"VALUES "/, '\n').replace(/\(|\'|\),|\)/g, "").replace(/^\s*\n/gm, "").split('\n');
empdata.shift();
var deptemp = [];
var y = empdata.length;

for(let i=0; i < empdata.length; i++) {

	var x = empdata[i].split(',');

	deptemp[i] = x
	deptemp[i].pop() 
	


}
deptemp.pop();





var newArr = [];

for(let i = 0; i < departmentNames.length; i++) {

		newArr.push(departmentNames[i])



	}


//console.log();


for(let i = 0; i < deptsalaries.length; i++) {
  for(let j = 0; j < deptemp.length; j++) {
    if(deptsalaries[i][0] == deptemp[j][0]) {
      for(let k=0; k < newArr.length; k++) {
        if(deptemp[j][1] == newArr[k][0]) {
		newArr[k].push(deptsalaries[i][1])

					}
				}
			}
		}
	}
//console.log(departmentNames);
var _cache = [];
var z = newArr.length
for(let i=0; i < z; i++) {
	_cache[i] = 0;
		}
	
for(let i=0; i < newArr.length; i++) {
  for(let j=2; j < newArr[i].length; j++) {
   
      
	_cache[i] += parseInt(newArr[i][j])	

}
}


const fsnew = require('fs');
var data = fsnew.readFileSync('load_dept_names.txt', 'utf8');
data = data.replace(/\(|\)|\'|\;/g, "").split('\n')
data.shift();
var departmentNamesNew = [];
for(let i=0; i < data.length; i++) {
	var x = data[i].split(',');
	//var result1 = new Array(x.split(','))
	
	
	if(i < data.length - 1) {	
	departmentNamesNew[i] = x
	departmentNamesNew[i].pop();
	} else {

		departmentNamesNew[i] = x

		}


}

//console.log(departmentNamesNew);



for(let i=0; i < _cache.length; i++){
	console.log(`Department ID: ${departmentNamesNew[i][0]} \n DepartmentName: ${departmentNamesNew[i][1]} \n Salaries Total: ${_cache[i]} \n `)
			}



//Most complex code i ever wrote. WITH NO HELP BUT MY OWN HEAD. 	


	
//console.log(departmentNames);














