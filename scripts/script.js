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

// Themes

let page = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('dark-theme');
  page.classList.toggle('light-theme');
};