//ES6
var firstPromise = new Promise(function (resolve, reject) {
    resolve(3);
});

firstPromise.then(function (data) {
    console.log(data);
});

var secondPromise = new Promise(function (resolve, reject) {
    reject(Error('Something wrong happened!'));
});

secondPromise.then(function () {
    // excute success code here
}, function (error) {
    console.log(error.message);
});

//ES6 - If all we care about is taking action if the promised is failed,
//      we can use a different function instead of then
//var promise = new Promise(function (resolve, reject) {
//    reject(Error('Something wrong happened!'));
//});
//promise.catch(function (error) {
//    console.log(error.message);
//});

//ES6 - Resolving a promise with another promise
//var previousPromise = new Promise(function (resolve, reject) {
//    resolve(3);
//});

//var promise = new Promise(function (resolve, reject) {
//    resolve(previousPromise);
//});
//promise.then(function (data) {
//    console.log(data);
//}, function (error) {
//    console.log(error.message);
//});

// ES6 - Shortcut resolve method and error method
//var previousPromise = Promise.resolve(3);

//var promise = Promise.resolve(previousPromise);
//promise.then(function (data) {
//    console.log(data);

//});

//var promise = Promise.reject(Error('Something wrong happened!'));
//promise.catch(function (error) {
//    console.log(error.message);

//});

// ES6 - Callback methods are run in an asynchronous fashion
//var async = false;

//var promise = new Promise(function (resolve, reject) {
//    resolve();
//});

//promise.then(function () {
//    console.log(async);
//});

//async = true;

