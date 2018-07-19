// ES5
var Person = function (name) {
    this.canTalk = true;
    this._name = name;
};

Person.prototype.greet = function () {
    if (this.canTalk) {
        console.log('Hi, I am ' + this._name);
    }
};

var aPerson = new Person("John");
aPerson.greet();


// ES6 -- Constructors and implicit prototype
//class Person {
//    // no function keyword required
//    constructor(name) {
//        this.canTalk = true;
//        this._name = name;
//    }

//    // no function keyword required
//    greet() {
//        if (this.canTalk) {
//            console.log('Hi, I am ' + this._name);
//        }
//    }
//}

//var aPerson = new Person("John");
//aPerson.greet();

//// greet is now added to the prototype object
//Person.prototype.greet.call(aPerson);

// ES5 - get and set
//function Person() {
//}

//Person.prototype = {
//    get FullName() {
//        return this.firstName + ' ' + this.lastName;
//    },
//    set FullName(name) {
//        var words = name.split(' ');
//        this.firstName = words[0] || '';
//        this.lastName = words[1] || '';
//    }
//};

//var aPerson = new Person();
//aPerson.FullName = 'John Smith';
//console.log(aPerson.firstName);
//console.log(aPerson.lastName)
//console.log(aPerson.FullName)


// ES5 - get and set with defineProperty
//function Person() {
//    Object.defineProperty(this, 'FullName', {
//        get: function () {
//            return this.firstName + ' ' + this.lastName;
//        },
//        set: function (val) {
//            var words = val.split(' ');
//            this.firstName = words[0] || '';
//            this.lastName = words[1] || '';
//        }
//    });
//};

//var aPerson = new Person();
//aPerson.FullName = 'John Smith';
//console.log(aPerson.firstName);
//console.log(aPerson.lastName)
//console.log(aPerson.FullName)

// ES6 -- get and set with ES6
//class Person {
//    constructor() {
//        // ...
//    }

//    get FullName() {
//        return `${this.firstName} ${this.lastName}`;
//    }

//    set FullName(name) {
//        var words = name.split(' ');
//        this.firstName = words[0] || '';
//        this.lastName = words[1] || '';
//    }
//}

//var aPerson = new Person();
//aPerson.FullName = 'John Smith';
//console.log(aPerson.firstName);
//console.log(aPerson.lastName)
//console.log(aPerson.FullName)