let option = prompt(
    'What would you like to do?\n* new - Add new Todo\n* list - Show the all Todo list\n* delete - Remove Specific Todo\n* quit - Quit the app'
    );

const todos = [];

while(option !== 'quit' && option !== 'q'){
    if(option === 'list'){
        console.log('============================');
        if(todos.length !== 0){
            for(let i = 0; i < todos.length; i++){
                console.log(`${i+1} : ${todos[i]}`);
            }
        }else{
            console.log('No todo item saved!');
        }
        console.log('============================');
    }else if(option === 'new'){

        const new_todo = prompt('Enter the new todo');
        todos.push(new_todo);
        alert(`${new_todo} added to list!`);

    }else if(option === 'delete'){

        let index = parseInt(prompt('Enter the index to delete'));
        while(!index){
            index = parseInt(prompt('Enter valid index to delete'));
        }
        if(index < todos.length+1){
            let delete_item = todos[index-1];
            todos.splice(index-1, 1);
            alert(`${delete_item} is deleted!`);
        }else{
            alert('Invalid index');
        }
    }
    option = prompt(
        'What would you like to do?\n* new - Add new Todo\n* list - Show the all Todo list\n* delete - Remove Specific Todo\n* quit - Quit the app'
        );

}
alert('You quit the app')