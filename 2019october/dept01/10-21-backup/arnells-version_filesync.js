


const fs = require('fs');
var data = fs.readFileSync('load_dept_names.txt', 'utf8');
data = data.replace(/\(|\)|\'|\;/g, "").split('\n')
data.shift();
var container = [];
for(let i=0; i < data.length; i++) {
	var x = data[i].split(',');
	//var result1 = new Array(x.split(','))
	
	container[i] = x
	container[i].pop();
	
	//console.log(result1)	
	

	



}
//var i = 0
//while(i < container.length)


console.log(container);
//console.log(result1);







 






const fs1 = require('fs');
var data1 = fs1.readFileSync('load_dept_emp.txt', 'utf8');
data1 = data1.replace(/\(|\)|\'|\;/g, "").replace(/^\s*\n/gm, "").split('\n');

data1.shift();

data1.pop();
var container1 = [];
for(let i=0; i < data1.length; i++) {
	var x = data1[i].split(',');
	//var result1 = new Array(x);
	
	container1[i] = x
	
	//container1[0][i].length -1 != '';
	container1[i].pop();
	//console.log(result1)	
	
	
	



}














































































//var departmentEmployee3D = [];
//var departments = [];

/*for(var i = 0; i < container.length; i++) {

	departments = container[i][0]
		



}
*/


/*for(var i = 0; i < container.length; i++) {

		//departmentEmployee3D.push([container[i]]);
		departmentEmployee3D.push([]);
				}
		for(var i = 0; i < container1.length; i++) {
		//var f = container1[i][1].substr(-1);
		//departmentEmployee3D[f - 1].push(container1[i]);		

			
		
								


						 				
								
	}					

//console.log(result)
//console.log(container)
console.log(container[0][1]);

*/












var departmentEmployee3D = [];





for(var i = 0; i < container.length; i++) {

		//departmentEmployee3D.push([container[i]]);
		departmentEmployee3D.push([]);
				}
		for(var i = 0; i < container1.length; i++) { //
			for(var j = 0; j < container.length; j++) { // j = 0

				if(container1[i][1] == container[j][0]) {
					departmentEmployee3D[j].push(container1[i])
					
						}
					}	
			
				}					











//console.log(result)
//console.log(container)
console.log(departmentEmployee3D);





