// ES5
var add = (function (x, y) {
    var temp = x + y;
    return temp;
});
var square = (function (x) {
    return x * x;
});
var three = (function () {
    return 3;
});
console.log(square(add(2, three())));


// ES6
//let add = (x, y) => {
//    let temp = x + y;
//    return temp;
//};

//let square = x => x * x;
//let three = () => 3;

//console.log(square(add(2, three())));

// ES5 - Sum and Doubles of Numbers
//var numbers = [1, 2, 3, 4];
//var sum = 0;
//numbers.forEach((function (n) {
//    return sum += n;
//}));
//console.log(sum);

//var doubled = numbers.map((function (n) {
//    return n * 2;
//}));

//console.log(doubled);

// ES6 Sum and Doubles of Numbers
//var numbers = [1, 2, 3, 4];

//var sum = 0;
//numbers.forEach(n => sum += n);
//console.log(sum);

//var doubled = numbers.map(n => n * 2);
//console.log(doubled);


//// ES5 Scope Management failing
//function Test() {
//    this.name = "John";
//    setTimeout(function() {
//        alert('The name is: ' + this.name);
//    }, 1000);
//}

//// ES5 Scope Management fixed
//function Test() {
//    var self = this;
//    self.name = "John";
//    setTimeout(function () {
//        alert('The name is: ' + self.name);
//    }, 1000);
//}

//var test = new Test();


// ES6 Scope Management
//function Test() {
//    this.name = "John";
//    setTimeout(() => {
//        alert('The name is: ' + this.name);
//    }, 1000);
//}

//var test = new Test();

