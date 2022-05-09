// JavaScript source code
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(5));


//To see time complexisty

//performance.now(); will show me the number of milliseconds since the documnet was created. millisecond is: one thousands of a second.
var t1 = performance.now();
addUpTo(1000000000); //ad up to a billion
var t2 = performance.now(); //check performance again
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`); //We divide by 1000 because performance.now() is in milliseconds and we want to work in seconds

//=========================================================================//

function addUpToBetter(n) {
    return n * (n + 1) / 2;
}

console.log(addUpToBetter(5));


//To see time complexisty

//performance.now(); will show me the number of milliseconds since the documnet was created. millisecond is: one thousands of a second.
var t1 = performance.now();
addUpToBetter(1000000000); //ad up to a billion
var t2 = performance.now(); //check performance again after calling the function
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`); //We divide by 1000 because performance.now() is in milliseconds and we want to work in seconds
