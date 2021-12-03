# Section 25: The missing Piece - DOM Events
## **Events**
Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box. 
#### OnClick Property
There are two ways of using events. 
- By setting a function into a variable. 
const btn = querySelector('#btn')  
btn.onClick = function () {  
    console.log('You clicked me')
}  
- By setting a function that was already created
function scream(){  
    console.log('ahhh!');
}
btn.onmouseenter = scream;  
#### AddEventListener
> The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
**EX**  
const btn = querySelector('#btn');
btn.addEventListener('click', function(){
    console.log('You clicked me!')
})  
### Form Events
The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. 
Generally used for submit event.