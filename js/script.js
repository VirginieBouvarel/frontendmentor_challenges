"use strict";

const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
console.log(nav);

console.log(burger);

burger.addEventListener('click', toggleNav);


function toggleNav() {
    
    if (burger.getAttribute('src') === 'img/icon-hamburger.svg') {
        burger.setAttribute('src', 'img/icon-close.svg');
        nav.style.display = "block";
    }else {
        burger.setAttribute('src', 'img/icon-hamburger.svg');
        nav.style.display = "none";
    }
  
}