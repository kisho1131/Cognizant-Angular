"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(test) {
        this.employee = test;
    }
    return EmployeeTest;
}());
function display() {
    var test;
    test = { id: 1,
        name: "Hey", salary: 10000, permanent: true, department: { id: 1, name: "payroll" }, Skills: [{ id: 1, name: "Html" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]
    };
    var emp = new EmployeeTest(test);
    console.log(emp);
    document.getElementById('showData').innerHTML = JSON.stringify(emp);
    console.log("Success");
}
