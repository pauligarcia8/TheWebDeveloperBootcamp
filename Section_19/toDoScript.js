let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean litter box'];

while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
    }
    input = prompt('What would you like to do?');
}
console.log('OK, you quit the app!')