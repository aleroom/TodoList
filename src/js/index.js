import "./modal.js";
// import { todoArray } from "./arrays.js";
// import { doingArray } from "./arrays.js";
// import { doneArray } from "./arrays.js";

// localStorage.setItem('todoArray', JSON.stringify(todoArray));
// localStorage.setItem('doingArray', JSON.stringify(doingArray));
// localStorage.setItem('doneArray', JSON.stringify(doneArray));

// let todoArr = JSON.parse(localStorage.getItem('todoArray'));
// let doingArr = JSON.parse(localStorage.getItem('doingArray'));
// let doneArr = JSON.parse(localStorage.getItem('doneArray'));

// document.querySelector(".button").addEventListener("click", function () {
//     let taskname = document.createElement(".task_name").value;
//     let message = document.querySelector(".message_input").value;
//     let deadLine = document.querySelector(".deadline_input").value;
//     let performer = document.querySelector(".performer_input").value;
  
//     let task = new Task(taskname, message, deadLine, performer)
  
//     todoArr.push(task);
//     clearInputFields();
// }); 
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
const button = document.querySelector('.button');
let i = 0;

let todoArray = []; 
button.addEventListener('click', (e) => {
    todoArray.push(input.value)
    console.log(todoArray) 
    if(input.value === '') return
    createDeleteElements(input.value)
    
})

function createDeleteElements(value) {
    i++ 
    const li = document.createElement('li');
    const btnX = document.createElement('button');
    li.className = 'li';
    li.textContent = value;
    
    btnX.className = 'btn';
    btnX.textContent = "X";
    li.appendChild(btnX);
    result.appendChild(li)
}




const addToJson = () => {
    let str = JSON.stringify(todoArray);
    localStorage.setItem('data', str);
    
} 
btn.addEventListener('click', addToJson);



const getData = () => {
    let from = localStorage.getItem('data');
    let dataFrom = JSON.parse(from);
    if(dataFrom) {
        sortItem(dataFrom)
    } else {
        li.innerHTML = " ";
    }
}

    

const sortItem = (dataFrom) => {
    dataFrom.forEach((e) => {
        li.textContent += `${e} `;
    })
}


btn.addEventListener('click', getData)

const removeData = () => {
    localStorage.removeItem('data');
    getData();
}


    //remove todo
    btn.addEventListener('click', (e) => {
        i-- ;
        total.textContent = i
        result.removeChild(li) 
             
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')       
    })

    total.textContent = i
    result.appendChild(li)

  



