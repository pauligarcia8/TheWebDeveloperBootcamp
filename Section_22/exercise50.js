// Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers. If the array contain all even numbers, return true. Otherwise, return false. 
function allEvens (arr) {
    return arr.every(num => num % 2 === 0);
}