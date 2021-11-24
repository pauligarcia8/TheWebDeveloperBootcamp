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