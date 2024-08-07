import { upcomingArray } from "./arrays";
import { inWorkArray } from "./arrays";
import { doneArray } from "./arrays";

localStorage.setItem('upcomingArray', JSON.stringify(upcomingArray));
localStorage.setItem('inWorkArray', JSON.stringify(inWorkArray));
localStorage.setItem('doneArray', JSON.stringify(doneArray));

let upcomingArray = JSON.parse(localStorage.getItem('upcomingArray'));
let inWorkArray = JSON.parse(localStorage.getItem('inWorkArray'));
let doneArray = JSON.parse(localStorage.getItem('doneArray'));

const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

btn.addEventListener('click', (e) => {
    

    // result.innerHTML += `<li>${input.value}</li>`;
    if(input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})
saveHTMLtoLS() 

function createDeleteElements(value) {
    i++ 
    const li = document.createElement('li')
    const btn = document.createElement('button')
    

    li.className = 'li';
    li.textContent = value;

    
    btn.className = 'btn';
    btn.textContent = "X";
    li.appendChild(btn)

    //remove todo
    btn.addEventListener('click', (e) => {
        i-- ;
        total.textContent = i
        result.removeChild(li) 
             
    })

    li.addEventListener('click', e => {
        li.classList.toggle('li-active')       
    })

    total.textContent = i
    result.appendChild(li)
}



function saveHTMLtoLS() {
    localStorage.setItem('tasksHTML', li.innerHTML) 
}