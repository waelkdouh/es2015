// ES5
// Define the Person constructor function
function Person() { }

Person.prototype.sayHello = function () {
    console.log('Hi, I am a Person');
};

// Define the Employee constructor function
function Employee() { }

// Inherit from Person
Employee.prototype = new Person();

// Correct the constructor pointer, because it points to Person
Employee.prototype.constructor = Employee;

// Replace the sayHello method (a polymorphism example)
Employee.prototype.sayHello = function () {
    console.log('Hi, I am an Employee');
}

var person = new Person();
person.sayHello();

var employee = new Employee();
employee.sayHello();


// ES6
//class Person {
//    constructor() {
//        // you can initialize data here
//    }

//    sayHello() {
//        console.log('Hi, I am a Person');
//    }

//}

//class Employee extends Person {
//    sayHello() {
//        console.log('Hi, I am an Employee');
//    }
//}


//let person = new Person();
//person.sayHello();

//let employee = new Employee();
//employee.sayHello();

