//Darius Rain
//DeptV2
//Date: 11/29/19

const departmentsGlobal = {
  information: {
    program: "Departnement Report",
    version: "2",
    date: "11-29-19",
    school: "CareerDevs",
    contact: "raindarius@gmail.com",
  },
  program: {
    allDataArrayOfObjects: [],
    backup: [],
    departmentsArray: [],
    salaryArray: [],
    employeeArray: [],
    departmentEmpArray: [],
    methods: {
      sortConfigureFiles: function () {
        const fs = require("fs"),
          salariesOriginal = fs.readFileSync("./load_salaries.txt", "utf8"),
          employeesOriginal = fs.readFileSync("./load_employee.txt", "utf8"),
          departmentEmployeesInfoOriginal = fs.readFileSync(
            "./load_dept_emp.txt",
            "utf8"
          );
        console.log(salariesOriginal);
        //console.log(employeesOringinal)
        //console.log(departmentEmployeeaInfoOriginal)
        console.log("Test");
      },
    },
  },
};
departmentsGlobal.program.methods.sortConfigureFiles();
