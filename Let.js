'use strict'
var globalScope = 10;

function myfunction() {
    if (globalScope > 20) {
        var shouldBeBlockScope = 20;
        //let shouldBeBlockScope = 20;
    }

    shouldBeBlockScope = 5;
    console.log(shouldBeBlockScope);
}

myfunction();
console.log(globalScope);