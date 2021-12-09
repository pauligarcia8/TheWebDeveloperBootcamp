# Section 27: Async Javascript
### Call Stack
The mechanism the JS interpreteer uses to keep track of its place in a script that calls multiple funcstions.
How JS "knows" what function is currently being run and what functions are called from within that function, etc.
**HOW IT WORKS**  
- When a script calls a function, the interpreteer adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumed excution where it left off in the last code listing.
### JS IS SINGLE THREADED
At any given point in time, that single JS thread is running at most one line of JS code.
When there are more than 1 one thing to do, the browser does the work. 
Browsers come with Web Apis that are able to handle certain task in the background (like maiking requests or setTimeout).  
The JS call stack recognizes these Web API functions and passes them of to the browser to take care of.  
Once the browser finishes those tasks, they return and are pushed into the stack as a callbak.  
### PROMISES
A promise is an object representing the eventual completion or failure of an asynchronus operation.
> A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
A Promise is in one of these states:

**pending:** initial state, neither fulfilled nor rejected.  
**fulfilled:** meaning that the operation was completed successfully.  
**rejected:** meaning that the operation failed.
A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

myPromise  
.then(handleResolvedA)  
.then(handleResolvedB)  
.then(handleResolvedC)  
.catch(handleRejectedAny);  
### The ASYNC keyword
- Async functions always return a promise
- If the function returns a value, the promise will be resolved with that value.
- If the function throws an exception, the promise will be rejected.
### The AWAIT keyword
- We can only use the await keyword inside of functions declared with async.
- Await will pause tha execution of the function, **waiting for a promise to be resolved**