function loadDept() {
  var fsys = require("fs");

  fsys.readFile("load_dept_names.txt", "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data);
    var newData = data.replace(/\(|\'|\)/g, "");
    newData = newData.split("\n");

    for (var i = 0; i < newData.length; i++) {
      newData[i].substring(0, newData[i].length - 1);
    }
    newData = console.log(newData[0]);
  });
}

loadDept();
