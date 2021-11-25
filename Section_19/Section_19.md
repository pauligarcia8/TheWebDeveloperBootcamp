# Section 19: Repeating Stuff whit loops
## *Loops allow us to repeat code*
### **FOR LOOP** 
for (  
    [initialExpression];  
    [condition];  
    [incrementExpression]  
    )
### For loop syntax
for (let i = 0; i <= 10; i ++) {  
    console.log(i);  
    }  
**// 1,2,3,4,5,6,7,8,9,10**    

for (let i = 25; i>= 0; i -= 5) {  
    console.log(i);  
    }  
**// 25,20,15,10,5,0**  
for (let i = 1; i <= 10; i += 2) {  
    console.log(i);  
    }  
**// 1,3,5,7,9**
### For loops in Arrays
let animals = ['cat', 'dog', 'bird'];  
for (let i = 0; i < animals.length; i ++) {  
    console.log(animals[i]);  
    }
### **While Loops**
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
### Syntax
while (condition)  
  statement
### **For...of stament**
>  Creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.  

FOR EXAMPLE:  
const array1 = ['a', 'b', 'c'];  
  
for (const element of array1) {  
  console.log(element);  
}  

// expected output: "a"  
// expected output: "b"  
// expected output: "c"  