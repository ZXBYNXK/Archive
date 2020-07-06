function sortFileProgram() {
  let load_salaries = fs.readFileSync("./load_salaries.txt", "utf8"),
    load_salaries_array = load_salaries
      .replace("INSERT INTO `salaries` VALUES ", "")
      .replace(/[A-Z|a-z|~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "")
      .replace(/\n/g, "")
      .split(","),
    load_dept_emp = fs.readFileSync("./load_dept_emp.txt", "utf8"),
    load_dept_emp_array = load_dept_emp
      .replace("INSERT INTO `dept_emp` VALUES ", "")
      .replace(/[~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "")
      .replace(/\n/g, "")
      .split(","),
    load_employee = fs.readFileSync("./load_employee.txt", "utf8"),
    load_employee_array = load_employee
      .replace("INSERT INTO `employees` VALUES ", "")
      .replace(/[~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "")
      .replace(/\n/g, "")
      .split(","),
    load_dept_names = fs.readFileSync("./load_dept_names.txt", "utf8"),
    load_dept_names_array = load_dept_names
      .replace("INSERT INTO `departments` VALUES ", "")
      .replace(/[~|!|@|#|%|^|&|*|(|)|'|.|?|>|<|||;|+|=|-|_]/g, "")
      .replace(/\n/g, "")
      .split(",");

  load_dept_emp_array.pop();
  load_employee_array.pop();
  load_salaries_array.pop();

  count = 0;
  load_dept_names_array.forEach((item) => {
    console.log(count, item);
    ++count;
  });
}
module.exports = sortFileProgram;
