const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

let todoArray = []; 
btn.addEventListener('click', (e) => {
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

  



