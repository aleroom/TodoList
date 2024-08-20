// Получаем ссылки на необходимые элементы
let modal = document.getElementById("modal");
const button = document.querySelector('.button');
let span = document.getElementsByClassName("close-button")[0];

// Открываем модальное окно при нажатии на кнопку
button.onclick = function() {
  modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на крестик
span.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модальное окно при нажатии вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}