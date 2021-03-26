const burger = (burgerTrigger, menuSelector) => {
    const burgerElem = document.querySelector(burgerTrigger),
        menuElem = document.querySelector(menuSelector);

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display === 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else menuElem.style.display = 'none';
    });

    // Скрываем меню при ресайзе
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) menuElem.style.display = 'none';
    });
};

export default burger;