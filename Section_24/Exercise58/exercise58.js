//100 Buttons Insanity
//Create 100 new buttons elements
//Each buttons must have some text
//Each button must be appnended inside the container div
const div = document.querySelector('#container');

for(let i = 0; i < 100; i++) {

    let buttons = document.createElement('button');

    buttons.innerText = "hey!";

    div.appendChild(buttons);

}
