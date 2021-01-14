"use strict";

const items = document.querySelectorAll('.list__item');


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        document.querySelector('.open').classList.remove('open');
        items[i].classList.add('open');
    });
}


 