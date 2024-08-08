import { upcomingArray } from "./arrays";
import { doneArray } from "./arrays";

localStorage.setItem('upcomingArray', JSON.stringify(upcomingArray));
localStorage.setItem('doneArray', JSON.stringify(doneArray));

let upcomingArray = JSON.parse(localStorage.getItem('upcomingArray'));
let doneArray = JSON.parse(localStorage.getItem('doneArray'));

const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const done = document.querySelector|('#done');
const total = document.querySelector('#total');
let i = 0;

btn.addEventListener('click', (e) => {
    

    // result.innerHTML += `<li>${input.value}</li>`;
    if(input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})


function createDeleteElements(value) {
    i++ 
    const li = document.createElement('li')
    const btn = document.createElement('button');
    const btn2 = document.createElement('button2');
    

    li.className = 'li';
    li.textContent = value;

    
    btn.className = 'btn';
    btn.textContent = "X";

    btn2.className = 'btn2';
    btn2.textContent = "=>";
    li.appendChild(btn);
    li.appendChild(btn2)

    //remove todo
    for(let j = 0; j < btn.length; j++) {
        btn[j].addEventListener('click', (e) => {
            console.log(e.target)
        })
    }
    // btn.addEventListener('click', (e) => {
    //     i-- ;
    //     total.textContent = i
    //     result.removeChild(li) 
             
    // })

    li.addEventListener('click', e => {
        li.classList.toggle('li-active')       
    })

    total.textContent = i
    result.appendChild(li)

    btn2.addEventListener('click', (e) => {
        done.removeChild(li) 
    })
}

    



