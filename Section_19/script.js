let maximum = parseInt(prompt("Enter a maximun number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === "q")
    break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("Congrants! You Win!!")
    console.log(`YOU GOT IT! It took you ${attempts} guess`);
}