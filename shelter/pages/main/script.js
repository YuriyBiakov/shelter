'use strict';
// BURGER

const burger = document.querySelector('.burger-icon');
const navigation = document.querySelector('.header-ul');
const overlay = document.querySelector('.overlay');
const doc = document.querySelector('html');

burger.addEventListener('click', () => {
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

// Slider

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
    cardImg.setAttribute('h4', `${cards[cardIndex].name} photo`);
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

let isActive = 0;

function isActiveUp() {
    isActive += 3;
    if (isActive > 6) isActive = 0;
}

function isActiveDown() {
    isActive -= 3;
    if (isActive < 0) isActive = 6;
}


function renderCards(numbers, isActive) {
    const petsSliderCards = document.querySelector('.pets-section-slider-cards');
    for (let i = isActive, step = 1; step <= 3; step++, i++){
    petsSliderCards.append(getCard(numbers[i]));
    if (i === 7) i = -1;
    console.log(isActive);
    }
}

const indexArray = [0,1,2,3,4,5,6,7].sort(() => Math.random() - 0.5);

renderCards(indexArray, isActive);

const rightButton = document.querySelector('.psb-right');
const leftButton = document.querySelector('.psb-left');

rightButton.addEventListener('click', () => {
    isActiveUp();
    const petsSliderCards = document.querySelector('.pets-section-slider-cards');
    removeChildren(petsSliderCards);
    renderCards(indexArray, isActive);
});

leftButton.addEventListener('click', () => {
    isActiveDown();
    const petsSliderCards = document.querySelector('.pets-section-slider-cards');
    removeChildren(petsSliderCards);
    renderCards(indexArray, isActive);
});

// Console
// console.log('Результаты самопроверки Shelter-part 2:  100  из 100 баллов.\n\n- Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14, при ширине экрана 768px: +14, при ширине экрана 320px: +14 \n- Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6, при ширине экрана 768px: +6, при ширине экрана 320px: +6 \n- Ни на одном из разрешений до 320px (вкл) не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n- Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции  +8\n- При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4 Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется\n- Верстка обеих страниц валидная: +8')
// console.log(' ');
