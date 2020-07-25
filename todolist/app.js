//selector
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filteroption = document.querySelector('.filter-todo');

//Event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filteroption.addEventListener('click', filterTodo);

//functions
function addTodo(event){
    
    event.preventDefault();  //prevent form from submitting!
    //CREATe <div>
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Create check button
    const completebtn = document.createElement('button');
    completebtn.innerHTML = '<i class ="fas fa-check"></i>';
    completebtn.classList.add('checkmark');
    todoDiv.appendChild(completebtn);
     //Create delete button
     const deletebtn = document.createElement('button');
     deletebtn.innerHTML = '<i class ="fas fa-trash"></i>';
     deletebtn.classList.add('trash');
     todoDiv.appendChild(deletebtn);

     //Attach to the ul
     todoList.appendChild(todoDiv);
     //clear todoInput value
    todoInput.value = "";
}


//DELETE
function deleteCheck(event){
    const target = event.target;
    console.log(target);

    //Delete todo
    if(target.classList[0]==='trash'){
        const removeitem = target.parentElement;
        removeitem.classList.toggle('fall');
        removeitem.addEventListener('transitionend', function(){
            removeitem.remove();
        })

    }

    //CHECK MARK
    if(target.classList[0] === 'checkmark'){
        const checkitem = target.parentElement;
        checkitem.classList.toggle('completed');

    }
}

