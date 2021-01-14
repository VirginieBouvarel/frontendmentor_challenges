"use strict";

  
const container = document.querySelector('.container');
const card = document.querySelector('.card');


container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

container.addEventListener('mousemove', (event) => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 10;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transition = 'all .5s ease';
    card.style.transform = 'rotate(0)';

});