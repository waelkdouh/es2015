// example 1
function doWorkWithArray() {
    return [3,2]
}

let [x,y] = doWorkWithArray();
console.log(' The value of x is ' + x + ' and the value of y is ' + y);


// example 2
//function doWorkWithObject() {
//    return {
//        FirstName : 'John',
//        LastName: 'Doe',
//        Address: {
//            Street: "100 some street",
//            Zip: '75235'
//        }
//    }
//}

//let {FirstName:First, LastName:Last, Address:{Street:AStreet} } = doWorkWithObject();
// console.log('Hello ' + First + ' ' + Last + ' your street name is ' + AStreet);

//// If you are ok with using the default property names then you can use the following shortcut syntax
//let {FirstName, LastName, Address:{Street} } = doWorkWithObject();
//console.log('Hello ' + FirstName + ' ' + LastName + ' your street name is ' + Street);

// example 3
// let doWork = function(url, {data, cache, headers}){
//    return data;
// };

// let result = doWork("api/test", { data: "test", cache: false});

// console.log('Here is the data provided: ' + result);