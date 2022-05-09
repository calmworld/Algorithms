// BIG O - Time Complexity

/*=========================================================================*/

/*


BIG O Definition:
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

f === function
(n) === input
n === output(runtime)

- f(n) could be linear (f(n) = n) <<-- as (n) scales, the runtime scales. <--> O(n)
- f(n) could be quadratic (f(n) = n^2) <<-- as (n) grows, the runtime squares. <--> O(n^2)
- f(n) could be constant (f(n) = 1) <<-- as (n) scales, the runtime remains constant. <--> O(1)
- f(n) could be something entirely different!


Big O Shorthands:
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop


*/

//////*Examples*//////

//Always 3 operations
//O(1)
function addUpTo(n) {
    return n * (n + 1) / 2;
}

//Number of operations is(eventually) bounded by a multiple of n(say, 10n)
//O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Number of operations is(eventually) bounded by a multiple of n(say, 10n)
//O(n)
function countUpAndDown(n) {
console.log("Going up!");
for (let i = 0; i < n; i++) {
    console.log(i);
}
console.log("At the top!\nGoing down...");
for (let j = n - 1; j >= 0; j--) {
    console.log(j);
}
console.log("Back down. Bye!");
}

//O(n) operation inside of an O(n) operation.
//O(n * n) = O(n^2)
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}


//Number of operations is(eventually) bounded by a multiple of n(say, 10n)
//O(n)
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}


//constatnt number of operations. As n grown, it doesn't matter because it will return only 5 at most.
//O(1)
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}


//Number of operations is(eventually) bounded by a multiple of n(say, 10n)
//O(n)
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

//O(n) operation inside of an O(n) operation.
//O(n * n) = O(n^2)
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}