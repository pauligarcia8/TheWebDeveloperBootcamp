let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean litter box'];

while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('*******')
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter a index to delete:')); 
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknow index')
        }
    }
    input = prompt('What would you like to do?');
}
console.log('OK, you quit the app!')