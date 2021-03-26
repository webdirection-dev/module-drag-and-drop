import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/formsA";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
// import showMoreStylesJSON from "./modules/showMoreStylesJSON";
import calculator from "./modules/calculator";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
// import accordionCSS from "./modules/accordionCSS";
import accordionJS from "./modules/accordionJS";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

import changeCalcState from "./modules/changeCalcState";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let calcState = {};
    changeCalcState(calcState);

    modals();
    sliders({
        slidesSelector: '.feedback-slider-item',
        direction: 'horizontal',
        prevBtnSelector: '.main-prev-btn',
        nextBtnSelector: '.main-next-btn',
    });
    sliders({
        slidesSelector: '.main-slider-item',
        direction: 'vertical',
    });
    forms(calcState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2');  // Подгрузка блоков из HTML
    // showMoreStylesJSON('.button-styles', '#styles .row');  // Подгрузка блоков c JSON-сервера
    calculator({
        size: '#size',
        material: '#material',
        options: '#options',
        promoCode: '.promocode',
        result: '.calc-price',
        promo: calcState,
    });
    filter();
    pictureSize('.sizes-block');
    // accordionCSS('.accordion-heading', '.accordion-block');  // Аккордион на CSS
    accordionJS('.accordion-heading');  // Аккордион на JS
    burger('.burger', '.burger-menu');
    scrolling('.pageup');
    drop();
});