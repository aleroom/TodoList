// Получаем ссылки на необходимые элементы
let modal = document.getElementById("modal");
const button = document.querySelector('.button');
let span = document.getElementsByClassName("close-button")[0];
let submit = document.querySelector('#submit');

// Открываем модальное окно при нажатии на кнопку
button.addEventListener('click', () => {
  modal.style.display = "block";
})

// Закрываем модальное окно при нажатии на крестик
span.addEventListener("click", () => {
  modal.style.display = "none";
})

submit.addEventListener('click', () => {
  modal.style.display = "none";
})

// Закрываем модальное окно при нажатии вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

window.addEventListener('click', () => {
  if(event.target == modal) {
    modal.style.display = "none";
  }
})

