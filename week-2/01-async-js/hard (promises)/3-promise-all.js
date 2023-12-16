/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

async function calculateTime(t1, t2, t3) {
    let start = Date.now(); // Get the current time in milliseconds
    //console.log(start);
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);

    let end = Date.now(); // Get the current time in milliseconds after all promises are resolved
    //console.log(end);
    let timePassed = end - start;

    return timePassed; // Return the time in milliseconds
}

// console.log("Before calling calculateTime");

// calculateTime(1, 2, 3);

// console.log("After calling calculateTime");

module.exports = calculateTime;
