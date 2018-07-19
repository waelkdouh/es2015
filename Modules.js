// ES5 IIFE
//(function (target) {
//    var privateDoWork = function (name) {
//        return name + " is working";
//    }

//    var Employee = function(name) {
//        this.name = name;
//    }

//    Employee.prototype = {
//        doWork: function () {
//            return privateDoWork(this.name);
//        }
//    }

//    target.Employee = Employee;

//}(window));

//var employee = new Employee("John");
//console.log(employee.name);

//ES6
//import {Employee,myfunction} from "/scripts/Employee.js"; // This is object desctructuring
//let employee = new Employee("John");
//console.log(employee.doWork());

//ES6 --Using Default with a single Export
//import Employee from "/scripts/EmployeeWithOneExport.js";
//let employee = new Employee("John");
//console.log(employee.doWork());

//ES6 -- Multiple Exports
//import {Employee,log,defaultRaise,modelEmployee} from "/scripts/Employee.js"; // This is object desctructuring
//log(modelEmployee)

//ES6 -- Multiple Exports to be referenced as one object
//import * as m from "/scripts/Employee.js";
//m.log(m.modelEmployee);
//let employee = new m.Employee("John");
//console.log(employee.doWork());
