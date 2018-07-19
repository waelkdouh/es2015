// ES6
class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (newValue) {
            this._name = newValue;
        }
    }
}

class Employee extends Person {

    constructor(title, name) {
        // if super is not used we would have had to use this._name which has two side effects
        //  1- Repeating the logic to set the name
        //  2- Loosing existing logic within the base constructor. e.g. validation code
        super(name);
        this._title = title;
    }

    get title() {
        return this._title;
    }

    doWork() {
        return `${this._name} is working`;
}
}

let e1 = new Employee("Developer", "John");
console.log(e1.name);
console.log(e1.title);

// ES6 - Use Super to Override a method
//class Person {
//    constructor(name) {
//        this.name = name;
//    }

//    get name() {
//        return this._name;
//    }

//    set name(newValue) {
//        if (newValue) {
//            this._name = newValue;
//        }
//    }
//    doWork() {

//        return "This is free";
//    }
//}

//class Employee extends Person {

//    constructor(title, name) {
//        // if super is not used we would have had to use this._name which has two side effects
//        //  1- Repeating the logic to set the name
//        //  2- Loosing existing logic within the base constructor. e.g. validation code
//        super(name);
//        this._title = title;
//    }

//    get title() {
//        return this._title;
//    }

//    doWork() {
//        return super.doWork();
//        // overriding
//        //return "This is Paid";
//    }
//}

//let e1 = new Employee("Developer", "John");
//let p1 = new Person("Person", "Bob");

//console.log(e1.name);
//console.log(e1.title);
//console.log(e1.doWork());

//console.log(p1.name);
//console.log(p1.doWork());

