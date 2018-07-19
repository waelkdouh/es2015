//ES6 - Chain Promises

getOrder(1).then(function (order) {
    return getUser(order.userId);
}).then(function (user) {
    return getCompany(user.companyId);
}).then(function (company) {
    console.log(company.name);
}).catch(function (error) {
    // handle error
});

function getOrder(orderId) {
    return new Promise(function (resolve, reject) {
        resolve({ userId: 26 });
    });
}

function getUser(userId) {
    return new Promise(function (resolve, reject) {
        resolve({ companyId: 1 });
    });
}

function getCompany(companyId) {
    return new Promise(function (resolve, reject) {
        resolve({ name: 'Contoso' });
    });
}

//ES6 - Parallelize Promises
//let courseIds = [28, 26, 14];
//let promises = [];
//for (let i = 0; i < courseIds.length; i++) {
//    promises.push(getCourse(courseIds[i]));
//}

//Promise.all(promises).then(function (values) {
//    console.log(values.length)
//    console.log(values[0].name)
//    console.log(values[1].name)
//    console.log(values[2].name)
//});


//function getCourse(courseId) {
//    let courses = {
//        28: {name: "Intro to ES6"},
//        26: {name: "Intro to C#"},
//        14: {name: "Intro to JavaScript"}
//    }
//    return new Promise(function(resolve, reject) {
//        resolve(courses[courseId]);
//    });
//}

