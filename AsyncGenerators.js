// ES5 asynchronous code
// Note: The pause messages will be printed after the 'start', 'middle', and 'end'
//       since it is an asyn operation
console.log('start');
pause(500);
console.log('middle');
pause(500);
console.log('end');

function pause(delay) {
    setTimeout(function () {
        console.log('paused for ' + delay + 'ms');
    }, delay);
}

// ES5 asynchronous code - Done Correctly
//console.log('start');
//pause(500, function () {
//    console.log('middle');
//    pause(500, function () {
//        console.log('end');
//    });
//});

//function pause(delay, cb) {
//    setTimeout(function () {
//        console.log('paused for ' + delay + 'ms');
//        cb();
//    }, delay);
//}

//ES6
// this is a reusable generator iterator
//(function() {
//    var sequence;
//    var run = function(generator){
//        sequence = generator();
//        var next = sequence.next();
//    };

//    function resume() {
//        sequence.next();
//    }

//    function fail(reason) {
//        sequence.throw(reason); // sequence supports a throw method which will make it look as if the yield threw the exception
//    }

//    window.async = {
//        run: run,
//        resume: resume,
//        fail: fail
//    }
//}());


//function pause(delay) {
//    setTimeout(function() {
//        console.log('paused');
//        async.resume()
//    }, delay);
//}


//function* main() {
//    console.log('start');
//    yield pause(500);
//    console.log('middle');
//    yield pause(500);
//    console.log('end');
//}

//async.run(main);

//ES6 - Leveraging data from an asynchronous call. In the previous example the setTimeout was not
//      returning any data

//(function() {
//    var sequence;
//    var run = function(generator){
//        sequence = generator();
//        var next = sequence.next();
//    };

//    function resume(value) {
//        sequence.next(value);
//    }

//    function fail(reason) {
//        sequence.throw(reason); // sequence supports a throw method which will make it look as if the yield threw the exception
//    }

//    window.async = {
//        run: run,
//        resume: resume,
//        fail: fail
//    }
//}());

//function getStockPrice() {
//    // Here you would probably make a call to the server using something like jquery ajax
//    setTimeout(function(){
//        console.log('Price Fetched');
//        async.resume(50);
//    },300);
//}

//function executeTrade() {
//    setTimeout(function() {
//        console.log('Trade completed');
//        async.resume();
//    }, 300);
//}


//function* main() {
//    var price = yield getStockPrice(); // generators can return data when yielding
//    if(price > 45) {
//        yield executeTrade();
//    } else {
//        console.log('trade not made');
//    }
//}

//async.run(main);

