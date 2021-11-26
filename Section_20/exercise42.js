// Sum Array Exercise
// Write a function called sumArray wich accepts a single argument: an array of numbers. It should return the sum of all the numbers in the array.
function sumArray(e) {
    let sum = 0;
    
    for (let i = 0; i < e.length; i++) {
        sum += e[i];
    }
    return sum;
}