const deptNamesRenewFunc = () => {
  const fs = require("fs");
  var data = fs.readFileSync("load_dept_names.txt", "utf8");
  data = data.replace(/\(|\)|\'|\;/g, "").split("\n");
  data.shift();
  var container = [];
  for (let i = 0; i < data.length; i++) {
    var x = data[i];
    var result1 = new Array(x);

    container[i] = result1;

    //console.log(result1)
  }
  //var i = 0
  //while(i < container.length)

  console.log(container);
  //console.log(result1);
};

deptNamesRenewFunc();

const deptEmpRenewFunc = () => {
  const fs = require("fs");
  var data = fs.readFileSync("load_dept_emp.txt", "utf8");
  data = data
    .replace(/\(|\)|\'|\;/g, "")
    .replace(/^\s*\n/gm, "")
    .split("\n");
  data.shift();
  data.pop();
  var container = [];
  for (let i = 0; i < data.length; i++) {
    var x = data[i];
    var result1 = new Array(x);

    container[i] = result1;

    //console.log(result1)
  }
  //var i = 0
  //while(i < container.length)

  console.log(container);
  //console.log(result1);
};

deptEmpRenewFunc();

/*const fs = require('fs');
var data = fs.readFileSync('load_dept_names.txt', 'utf8');
data = data.replace(/\(|\)|\'|\;/g, "");
data = Array(data);
data.shift();

let num = 2 
console.log(data)

function chunk(data, num) {

	const chunked = [];
	for(let elem of data) {

		let last = chunked[chunked.length - 1];
		if(!last || last.length === num) {

			chunked.push([elem]);
				

		}else {

		last.push(elem);

		}
	}
	return chunked;


}



//chunk();





*/
