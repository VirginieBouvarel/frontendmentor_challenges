"use strict";

const items = document.querySelectorAll('.list__item');


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        for (let j = 0; j < items.length; j++) {
            items[j].classList.remove('open');
        }
        items[i].classList.add('open');
    });
}


 