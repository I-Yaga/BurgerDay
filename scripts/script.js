// Smooth Scroll
      
const links = document.querySelectorAll(".banner-btn");

for (const link of links) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

// Button Up

window.onscroll = function(){scrollFunction()};

const upbuttons = document.querySelectorAll(".button-up");

for (const upbutton of upbuttons) {
    upbutton.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

function scrollFunction(){
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
}

 // Menu

 function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}

// Themes

let page = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('dark-theme');
  page.classList.toggle('light-theme');
};

// Модальное окно регистрации

// Получаем элементы
const modal = document.getElementById('myModal');
const openBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close-btn');

// Открытие модального окна
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
});

// Закрытие модального окна по клику на крестик
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // Задержка равна длительности анимации
});

// Закрытие модального окна по клику вне контента
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Задержка равна длительности анимации
  }
});

// Закрытие модального окна по нажатию клавиши Esc
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Задержка равна длительности анимации
  }
});