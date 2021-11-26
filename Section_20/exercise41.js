// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).
function capitalize (e) {
    let array = e[0].toUpperCase(); 
    let lower = e.slice(1).toLowerCase();
    const sum = array + lower;    
    return sum;
    }