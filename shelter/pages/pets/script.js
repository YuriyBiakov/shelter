'use strict';
console.log('Hi');

const burger = document.querySelector('.burger-icon');
const navigation = document.querySelector('.header-ul');
const overlay = document.querySelector('.overlay');
const doc = document.querySelector('html');

burger.addEventListener('click', () => {
    console.log('click!');
    if (navigation.classList.contains('header-ul-open')) {
        navigation.classList.remove('header-ul-open');
        overlay.classList.remove('overlay-open');
        doc.classList.remove('scroll-lock');
        burger.classList.remove('openned');
    }
    else{
        navigation.classList.add('header-ul-open');
        overlay.classList.add('overlay-open');
        doc.classList.add('scroll-lock');
        burger.classList.add('openned');
    }
});

navigation.addEventListener('click', (event) => {
    if (event.target.classList.contains('header-li-link')) {
        navigation.classList.remove('header-ul-open');
        overlay.classList.remove('overlay-open');
        doc.classList.remove('scroll-lock');
        burger.classList.remove('openned');
    }
});

overlay.addEventListener('click', () => {
    navigation.classList.remove('header-ul-open');
    overlay.classList.remove('overlay-open');
    doc.classList.remove('scroll-lock');
    burger.classList.remove('openned');
});