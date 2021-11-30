# Section 22: Callbacks and Arrays Methods
### Array Methods (allows to pass a function as an argument)
- Foreach: Accepts a callback function. Calls the function once per element in the array.
- Map: Creates a new array with the results of calling a callback on every element in the array. 
- Filter: Creates a new array with all elements that pass the test implemented by the provided function.
- Every/Some: **Every** tests wheter alla elements in the array  pass the provided function. It return a Boolean Value, and **Some** returns true if ANY of the array elements pass the test function.
- Reduce: Executes a reducer function on each element of the array resulting in a single value.
### Arrow Fuctions 
Its a newer sytactically compact alternative to a regular function expression.  
const add = function(x,y) {  
    return x + y;  
}
**Arrow function**  
const add = (x, y) => {  
    return x + y;   
} 