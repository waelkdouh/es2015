// ES5
function myfunction(value) {
    // `value` is falsey, which includes `undefined` and `null`
    // (and `""`, and `0`, and `NaN`, and [of course] `false`)
    value = value || "Default Value";
    console.log('Thanks for passing this value: ' + value)
}

// ES6
//function myfunction(value = "Default Value") {
//    console.log('Thanks for passing this value: ' + value)
//}

myfunction();

// ES6
//let doWork = function(url,{data:theData = 'John' , cache: theCache = false}){
//                return theData ;
//             };


//let result = doWork("api/test", { cache: true});

//console.log('Here is the data provided: ' + result);

