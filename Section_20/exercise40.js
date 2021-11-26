// Las Element Exercise
// Write a function called lastElement wich accepts a single array argument. The function should return the last element of the array (without removing the element) If the array is empty the function should return null.
function lastElement (e) {
    if (e.length === 0) {
        return null;
    }
    else {
        return e[e.length - 1];
    }
}