"use strict";

const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');


burger.addEventListener('click', toggleNav);


function toggleNav() {
    nav.classList.toggle('nav-mobile--show');
    
    if (burger.getAttribute('src') === 'img/icon-hamburger.svg') {
        burger.setAttribute('src', 'img/icon-close.svg');
    }else {
        burger.setAttribute('src', 'img/icon-hamburger.svg');
    }
  
}