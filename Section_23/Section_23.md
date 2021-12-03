# Section 23: Newer Javascript Features
### Default Params
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
### Spread Syntax
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.  
**Spread in functions Calls:** beign nums an array of nums. we can call Math.max(...nums) to separate with spaces individual numbers of an array. Also it can be done with and array separating each letter of the element.  
**Spread in array literal:** if we have 2 different arrays, we can create a new variable and spread an array into another.   
const cat = ['one', 'two, 'three'];  
const dog = ['four', ' five'];  
const animals = [...cat, ...dog]; we have then ['one', 'two, 'three', 'four', ' five'];  
**Spread with Object:** we can copy an object from another by using the ... and add a new key..If we have a key in common the second or last win by order.   
const animals = {...dog, ...cat, color: brown} we would added color as a new key.  
**Rest Parameter:** The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.  
function sum(...theArgs) {  
  return theArgs.reduce((previous, current) => {  
    return previous + current;  
  });  
}  

console.log(sum(1, 2, 3));  
// expected output: 6  

console.log(sum(1, 2, 3, 4));  
// expected output: 10  
**Destructiring Assigment:** The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
- Destructiring from array:
const scores = [10, 25, 36, 45, 96];  
const [gold, silver, bronze] = scores;   
// we are destrutiring the first three positions    
- Destructiring from objects:  
const runner = {  
    first: 'eliud',  
    last: 'kipchonge',
    country: 'kenya',
    title: 'elder of the order'
}  
const {first,last,country} = runner;  
- Destructiring params:   
function fullName (user) {  
    return `${user.firstName} ${user.lastName}`;  
}  
function fullName(user){  
    const {firstName, lastName} = user;  
    return `${firstName} ${lastName}`;  
}  
function fullName ({firstName, lastName}) {  
    return `${firstName} ${lastName`};  
}  