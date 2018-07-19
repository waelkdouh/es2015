// ES5
var sum = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

//var theSum = sum(1, 2, 3);
//console.log('Here is the Sum: ' + theSum)

// ES6
//let doWork = function (name, ...numbers) {
//    let result = 0;
//    numbers.forEach(function (n) {
//        result += n;
//    });
//    return result;
//};

//let result = doWork("John", 1, 2, 3);

//console.log('Here is the Sum: ' + result)

