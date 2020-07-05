function loadSal(){
var fsys = require('fs');

fsys.readFile('load_salaries.txt', 'utf-8', function (err, data){
        if(err) throw(err);
        console.log(data);
        var newData = data.replace("INSERT INTO `salaries` VALUES", "").replace(/\(|\'|\)/g, "")
        newData = newData.split('\n');




        for(var i = 0; i < newData.length; i++){
                console.log(newData[i].substring(0, newData[i].length - 1));

        }
		console.log('\n\n\n', newData[0][1])

});

}
loadSal();
