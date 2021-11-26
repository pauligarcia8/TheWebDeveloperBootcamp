//Define a function called rant wich accepts a string argument called message. The function shoeul print out an uppercased version of message 3 times (with 3 separate calls to console.log).

function rant(message) {
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
}
rant('i hate beets');