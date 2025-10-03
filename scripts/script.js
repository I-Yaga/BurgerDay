// Плавная прокрутка из рекламного баннера к меню
      
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

// Кнопка вверх

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

 // Модальное меню на мобильных устройствах

 function openModal() {
    const div = document.createElement('div');
    document.getElementById("modal").style.left = "0px";
    document.body.classList.add('no-scroll');
    div.classList.add('menuLayout');
    document.body.appendChild(div);
}

function closeModal() {
    const div = document.querySelector('.menuLayout');
    document.getElementById("modal").style.left = "-1200px";
    document.body.classList.remove('no-scroll');
    div.parentNode.removeChild(div);
}

// Корзина

function openCartMenu() {
    const div = document.createElement('div');
    document.getElementById("cartMenu").style.right = "0px";
    document.body.classList.add('no-scroll');
    div.classList.add('menuLayout');
    document.body.appendChild(div);
}

function closeCartMenu() {
    const div = document.querySelector('.menuLayout');
    document.getElementById("cartMenu").style.right = "-100vw";
    document.body.classList.remove('no-scroll');
    div.parentNode.removeChild(div);
}