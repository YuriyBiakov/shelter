'use strict';
console.log('Hi');

//BURGER

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


//PAGINATION

//создаем массив индексов - ключей к массиву объектов и глобальную переменную страницы

let indexArray = [0,1,2,3,4,5,6,7];
let renderArray = [];
let page = 1;

const rightButton = document.querySelector('.right-btn');
const rightEndButton = document.querySelector('.right-end-btn');
const leftButton = document.querySelector('.left-btn');
const leftEndButton = document.querySelector('.left-end-btn');
const pageNumber = document.querySelector('.page-num');
console.log(pageNumber.innerHTML);


// функция - перемешать одномерный массив животных
function sortArrayIndexes(array){
    let result = Array.from(array);
    result.sort(() => Math.random() - 0.5);
    return result;
}

// функция получить массив для рендера
function getRenderArray() {
    for (let i = 0; i < 8; i++){
        let arr = sortArrayIndexes(indexArray);
        renderArray[i] = Array.from(arr);
    }
    console.log(renderArray);
}

/// ФУНКЦИИ РЕНДЕРА 

function createNode(tagName, className) {
    const node = document.createElement(tagName);
    node.setAttribute('class', className);
    return node;
};

function getCard(cardIndex) {
    const cardBlock = createNode('div', 'pets-card');
    const cardImg = createNode('img', '');
    const cardTitle = createNode('h4', 'pets-card-name');
    const cardButton = createNode('button', 'pets-card-btn');
    cardImg.setAttribute('src', cards[cardIndex].img);
    cardImg.setAttribute('alt', `${cards[cardIndex].name} photo`);
    cardTitle.innerHTML = cards[cardIndex].name;
    cardButton.innerHTML = 'Learn more';
    cardBlock.append(cardImg, cardTitle, cardButton);
    return cardBlock;
}

function removeChildren(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
    }
}

function renderCards() {
    const petsPaginationCards = document.querySelector('.of-pagination-cards');
    let renderIndexes = Array.from(renderArray[page - 1]);
    console.log('render indxs ');
    console.log(renderIndexes);
    let length = renderIndexes.length;
    for (let i = 0; i < length;  i++){
        let card = getCard(renderIndexes[i]);
        console.log(card);
        petsPaginationCards.append(card);
    }
}

rightButton.addEventListener('click', () => {
    if (page === 1){
        leftButton.setAttribute('class', 'ofpp-btn left-btn active');
        leftEndButton.setAttribute('class', 'ofpp-btn left-end-btn active');
}

    if (page < 6) {
    const petsPaginationCards = document.querySelector('.of-pagination-cards');
    removeChildren(petsPaginationCards);
    page++;
    renderCards();
    pageNumber.innerHTML = String(page);
}
    if (page === 6){
        rightButton.setAttribute('class', 'ofpp-btn right-btn inactive');
        rightEndButton.setAttribute('class', 'ofpp-btn right-end-btn inactive');
    }
});

rightEndButton.addEventListener('click', () => {
    if (page === 1){
        leftButton.setAttribute('class', 'ofpp-btn left-btn active');
        leftEndButton.setAttribute('class', 'ofpp-btn left-end-btn active');
}
    if (page < 6) {
    const petsPaginationCards = document.querySelector('.of-pagination-cards');
    removeChildren(petsPaginationCards);
    page = 6;
    renderCards();
    pageNumber.innerHTML = String(page);
    rightButton.setAttribute('class', 'ofpp-btn right-btn inactive');
    rightEndButton.setAttribute('class', 'ofpp-btn right-end-btn inactive');
    }
});

leftButton.addEventListener('click', () => {
    if (page === 6){
        rightButton.setAttribute('class', 'ofpp-btn right-btn active');
        rightEndButton.setAttribute('class', 'ofpp-btn right-end-btn active');
    }
    if (page > 1) { 
    const petsPaginationCards = document.querySelector('.of-pagination-cards');
    removeChildren(petsPaginationCards);
    page--;
    renderCards();
    pageNumber.innerHTML = String(page);
}
    if (page === 1){
        leftButton.setAttribute('class', 'ofpp-btn left-btn inactive');
        leftEndButton.setAttribute('class', 'ofpp-btn left-end-btn inactive');
}
});


leftEndButton.addEventListener('click', () => {
    if (page === 6){
        rightButton.setAttribute('class', 'ofpp-btn right-btn active');
        rightEndButton.setAttribute('class', 'ofpp-btn right-end-btn active');
    }

    if (page > 1) { 
    const petsPaginationCards = document.querySelector('.of-pagination-cards');
    removeChildren(petsPaginationCards);
    page = 1;
    renderCards();
    pageNumber.innerHTML = String(page);
    leftButton.setAttribute('class', 'ofpp-btn left-btn inactive');
    leftEndButton.setAttribute('class', 'ofpp-btn left-end-btn inactive');
}
});

// Вызовы 

// сортированный массив массивов индексов
getRenderArray();
renderCards();
