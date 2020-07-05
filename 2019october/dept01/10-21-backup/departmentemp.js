// my version
function deptemp2() {
var fileFoo = require('fs');
        //1. load_dept_names.txt
        fileFoo.readFile('load_dept_emp.txt', 'utf-8', function(error, fileData) {
        if (error) throw(error);
        var newFileData = fileData.replace(/\(|\'|\),|\)/g, "").replace(/^\s*\n/gm, "") //replacing all context i want with '|' charachter.
        var newArrayFileData = newFileData.split("\n"); // Creats an array based of a charachter in a string.
	
        newArrayFileData.shift();
	var pv = 0;
        var departmentEmp = [];

        for(var i = 0; i < newArrayFileData.length; i++){
                departmentEmp.push(newArrayFileData[i].split(','))
	
		for(var x=0; x < departmentEmp[i].length; x++){

			departmentEmp.push(newArrayFileData[x].split(','))

			}
	}
	//	departmentNames != undefined;
	//	newArray = Array();	
		departmentEmp.pop();
		
		console.log(departmentEmp);


});
}



// Gabe's version

function deptemp1(){
	var filesys = require('fs')
  filesys.readFile('load_dept_emp.txt','utf8', function(err, data) {
      if (err) throw err;
      
      var dtEmpData = data.replace("INSERT INTO `dept_emp` VALUES ","").replace(/\(/g, "").replace(/\'\)/g, "").replace(/\,\'/g, ",").replace(/'/g, "");
      var dtEmpArr = dtEmpData.split('\n');
     
      
       
      
     
      
      for(i = 0; i < dtEmpArr.length ; i++){
    
          dtEmpArr[i] = dtEmpArr[i].substring(0, dtEmpArr[i].length -1 ).split(',');
       if(dtEmpArr[i] == ""){
         dtEmpArr.splice(i, 1);
      		i--;
       }

      }

	console.log(dtEmpArr);
     	
      //console.groupEnd("DeptEMP");
  }); 
}

function loadDeptNames(){

var fileFoo = require('fs');
	//1. load_dept_names.txt
	fileFoo.readFile('load_dept_names.txt', 'utf-8', function(error, fileData) {
	if (error) throw(error);
	var newFileData = fileData.replace(/\(|\'|\),|\)/g, "") //replacing all context i want with '|' charachter.
	var newArrayFileData = newFileData.split("\n"); // Creats an array based of a charachter in a string.
	
	newArrayFileData.shift();
	
	var departmentNames = [];
	
	for(var i = 0; i < newArrayFileData.length; i++){
		departmentNames.push(newArrayFileData[i].split(','))


			}

	console.log(departmentNames)
	
	


});
}

deptemp2();

//loadDeptNames();



