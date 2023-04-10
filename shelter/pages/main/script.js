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

//создаем массив индексов - ключей к массиву объектов

let indexArray = [0,1,2,3,4,5,6,7];
let currentCards = [];
let prevCards = [];
let renderIndexes = [];
let prevStep = '';

// функция - перемешать массив
function sortArrayIndexes(){
indexArray.sort(() => Math.random() - 0.5);
}

// функция получить массив для рендера
function getRenderIndexes() {
    renderIndexes = [];
    let i = 0;
    while (renderIndexes.length < 3) {
        if (currentCards.findIndex((val) => val === indexArray[i]) !== -1){
            i ++;
        }
        else 
        {renderIndexes.push(indexArray[i]);
        i++;
        }
    }
}

function renderCards() {
    const petsSliderCards = document.querySelector('.pets-section-slider-cards');
    let length = renderIndexes.length;
    for (let i = 0; i < length;  i++){
    petsSliderCards.append(getCard(renderIndexes[i]));
    }
    currentCards = renderIndexes;
}
sortArrayIndexes();
getRenderIndexes();
renderCards();

const rightButton = document.querySelector('.psb-right');
const leftButton = document.querySelector('.psb-left');

rightButton.addEventListener('click', () => {
    const petsSliderCards = document.querySelector('.pets-section-slider-cards');
    removeChildren(petsSliderCards);

    if (prevStep === 'left') {
        renderIndexes = prevCards;
    }
    else {
        sortArrayIndexes();
        getRenderIndexes();
    }
    prevCards = currentCards;
    renderCards();
    prevStep = 'right';
});

leftButton.addEventListener('click', () => {
    const petsSliderCards = document.querySelector('.pets-section-slider-cards');
    removeChildren(petsSliderCards);

    if (prevStep === 'right') {
        renderIndexes = prevCards;
    }
    else {
        sortArrayIndexes();
        getRenderIndexes();
    }

    prevCards = currentCards;
    renderCards();
    prevStep = 'left';
});

// Console
// console.log('Результаты самопроверки Shelter-part 2:  100  из 100 баллов.\n\n- Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14, при ширине экрана 768px: +14, при ширине экрана 320px: +14 \n- Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6, при ширине экрана 768px: +6, при ширине экрана 320px: +6 \n- Ни на одном из разрешений до 320px (вкл) не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n- Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции  +8\n- При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4 Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется\n- Верстка обеих страниц валидная: +8')
// console.log(' ');
console.log("Привет! Спасибо за проверку \n Результат самопроверки: + 88 баллов  Реализованы:\n - Бургер (+26) \n - Слайдер без плавности (36 - 4 = + 32) \n - Пагинация без плавности и без соблюдения требований по количеству страниц при уменьшении масштаба  (36 - 4 -2  = + 30)");
