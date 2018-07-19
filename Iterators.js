//// ES5 - using a for loop
var sum = 0;
var numbers = [1, 2, 3, 4];

// for loop
sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

////ES5 - using for in
//sum = 0;
//var numbers = [1, 2, 3, 4];

//for (var i in numbers) {
//    sum += numbers[i];
//}
//console.log(sum);

////ES5 - Iterator API at a low level
//var sum = 0;
//var numbers = [1, 2, 3, 4];

////var iterator = numbers[Symbol.iterator]();
//var iterator = numbers.values();
//var next = iterator.next();
//while (!next.done) {
//    sum += next.value;
//    next = iterator.next();
//}
//console.log(sum);

//ES6 - A new construct that makes Iterator easy to read and use
//var sum = 0;
//var numbers = [1,2,3,4];

//for(var n of numbers){
//    sum += n;
//}
//console.log(sum);
