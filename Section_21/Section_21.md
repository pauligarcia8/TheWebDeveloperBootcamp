# Section 21: Leveling up our Functions
## Scope (Variable 'Visibility')
The location where a variable is defined dictates **where we have access to that variable**. If we put a variable inside a function, or global, or nested..all those inpacts where we can use that variable on.
## Functions Expressions.
We can declarate a variable and assigne a function. In this case, the function would not have a name because it is contained in a variable.   
const add = function (x,y) {  
    console.log(x + y);  
}  
## Higher order Functions
Functions that operate on/with other functions. They can: 
- Accept other functions as arguments
- Return a function.
## 'This' in Methods
### Use the keyword ***THIS*** to access other properties on the same object
