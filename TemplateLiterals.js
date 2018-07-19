// ES5
var controller = "Home";
var view = 'index';

var url = "http://localhost/" + controller + "/" + view;

console.log(url)

// ES6
//let controller = "Home";
//let view = 'index';

//let url = `http://localhost/${controller}/${view}`;

//console.log(url)

// ES6 - Associating a Tag with the template
//let upper = function (strings, ...values) {
//    let result = "";
//    for (var i = 0; i < strings.length; i++) {
//        result += strings[i];
//        if (i < values.length) {
//            result += values[i];
//        }
//    }
//    return result.toUpperCase();
//};

//var x = 1;
//var y = 3;
//var result = upper `${x} + ${y} is ${x+y}`;

//console.log(result)

