const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

btn.addEventListener('click', (e) => {
    console.log(input.value)

    result.innerHTML += `<li>${input.value}</li>`;
    if(input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})

function createDeleteElements(value) {
    console.log(value)
}