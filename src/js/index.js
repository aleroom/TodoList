const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

let todoArray = []; 
btn.addEventListener('click', (e) => {
    todoArray.push(input.value)
    console.log(todoArray)
    // if(input.value === '') return
    // createDeleteElements(input.value)
    input.value = ''
})

const addToJson = () => {
    JSON.stringify(localStorage.setItem('data', todoArray));
    
} 
btn.addEventListener('click', addToJson);

const getData = () => {
    // let dataFrom = JSON.parse(localStorage.getItem('data'));
    let from = localStorage.getItem('data');
    let dataFrom = JSON.parse(from);
    if(dataFrom) {
        sortItem(dataFrom)
    } else {
        result.innerHTML = " ";
    }
}



const sortItem = (dataFrom) => {
    dataFrom.forEach((e) => {
        result.textContent += `${e} `;
    })
}


btn.addEventListener('click', getData)

const removeData = () => {
    localStorage.removeItem('data');
    getData();
}

// function createDeleteElements(value) {
//     i++ 
//     const li = document.createElement('li');
//     const btn = document.createElement('button');
//     li.className = 'li';
//     li.textContent = value;
    
//     btn.className = 'btn';
//     btn.textContent = "X";
//     li.appendChild(btn);
  

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

  



