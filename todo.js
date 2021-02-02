class Todo {

    createTask(input){

        let task = document.createElement('LI');

        let span = document.createElement('SPAN');

        let button = document.createElement('BUTTON');

        let taskTextNode = document.createTextNode(input);

        let buttonTextNode = document.createTextNode('X');

        button.appendChild(buttonTextNode);

        button.setAttribute('class', 'remove');

        span.appendChild(taskTextNode);

        task.appendChild(span);

        task.appendChild(button);

        return task ;

    }

}



let todo = new Todo();



let input = document.querySelector('#input');

let add = document.querySelector('#add');

let list = document.querySelector('#list')

let clear = document.querySelector('#clear');

let remove = document.querySelectorAll('.remove');





// adds task to the todo /////////////////////////////

add.addEventListener('click', (e) => {

    if(input.value === ''){

        input.value = "";

    }else{

        list.insertBefore(todo.createTask(input.value), list.children[0]);

        input.value = '';

    }

});



// removes tasks when the remove button is clicked//////

list.addEventListener('click', e => {

    if(e.target.className == 'remove'){

        let li = e.target.parentElement;

        li.parentElement.removeChild(li);

    }

});



// clears all task added to the todo//////////////////////

let clearAll = clear.addEventListener('click', (e) => {

    list.innerHTML = '';

});