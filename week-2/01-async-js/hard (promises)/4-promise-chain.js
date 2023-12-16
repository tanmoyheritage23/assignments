/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function promiseResolvedAftertSeconds(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t*1000);
    });
}

function wait1(t) {
    return promiseResolvedAftertSeconds(t);
}

function wait2(t) {
    return promiseResolvedAftertSeconds(t);
}

function wait3(t) {
    return promiseResolvedAftertSeconds(t);
}

function calculateTime(t1, t2, t3) {
    let start = Date.now(); // Get the current time in milliseconds
    //console.log(start);
    return wait1(t1).then(() => {
        return wait2(t2);
    }).then(() => {
        return wait3(t3);
    }).then(() => {
        let end = Date.now(); // Get the current time in milliseconds after all promises are resolved
        //console.log(end);
        let timePassed = end - start;
        return timePassed; // Return the time in milliseconds
    });
}

// console.log("Before calling calculateTime");
// calculateTime(1, 2, 3);
// console.log("After calling calculateTime");

module.exports = calculateTime;
