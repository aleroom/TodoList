const form = document.querySelector('.todoForm');
const taskList = document.querySelector('.taskList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskname = document.querySelector('#name').value;
    const dev = document.querySelector('#dev').value;
    const deadline = document.querySelector('#start').value;
    const todoTaskClose = document.createElement('button');
        todoTaskClose.classList.add('todoTaskClose');
        todoTaskClose.innerHTML = '&times;';
    const todoTaskInDoing = document.createElement('button');
        todoTaskInDoing.classList.add('todoTaskInDoing');
        todoTaskInDoing.textContent = 'next'; 


    

    const todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');
    todoItem.innerHTML = `
        <p>${taskname}</p>
        <p>${dev}</p>
        <p>${deadline}</p>
        <button>${todoTaskClose}</button>
        <button>${todoTaskInDoing}</button>
        

    `
    taskList.appendChild(todoItem);

    form.reset();
})
let buttonClose = document.querySelectorAll('.todoTaskClose');
buttonClose.forEach((button) => button.addEventListener('click', () => button.parentNode.remove()));
    // buttonClose.addEventListener('click', () => {
    //     const deleteTodoItem = buttonClose.parentNode;
    //     deleteTodoItem.remove()
    //     })
    
    
