const slider = ({slidesSelector, direction, prevBtnSelector, nextBtnSelector}) => {
    let slideIndex = 1,
        paused = false;

    const itemsSlider = document.querySelectorAll(slidesSelector);

    function showSlides(index) {
        if (index > itemsSlider.length) slideIndex = 1;
        if (index < 1) slideIndex = itemsSlider.length;

        itemsSlider.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated');
        });

        itemsSlider[slideIndex -1].style.display = 'block';
    }

    showSlides(slideIndex);

    function changeSlides(index) {
        showSlides(slideIndex += index);
    }

    // Проверяем на ошибки. Если селекторы кнопок не были переданы, то ничего не сломается
    try {
        const prevBtn = document.querySelector(prevBtnSelector),
            nextBtn = document.querySelector(nextBtnSelector);

        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            itemsSlider[slideIndex - 1].classList.remove('slideInRight');
            itemsSlider[slideIndex - 1].classList.add('slideInLeft');
        });

        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            itemsSlider[slideIndex - 1].classList.remove('slideInLeft');
            itemsSlider[slideIndex - 1].classList.add('slideInRight');
        });
    } catch (e){}

    function activateAnimation () {
        if (direction === 'vertical') {
            paused = setInterval(function () {
                changeSlides(1);
                itemsSlider[slideIndex - 1].classList.add('slideInDown');
            }, 10000);
        } else {
            paused = setInterval(function () {
                changeSlides(1);
                itemsSlider[slideIndex - 1].classList.add('slideInLeft');
                itemsSlider[slideIndex - 1].classList.add('slideInRight');
            }, 10000);
        }
    }

    activateAnimation();

    // Находим родетеля слайдов для пазы нужного слайдера
    // Ставим на паузу auto change слайдера
    itemsSlider[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused)
    });

    // Снимаем с паузы auto change слайдера
    itemsSlider[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default slider;