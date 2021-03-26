const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');


    // Класс активности для меню панели навигации
    menu.addEventListener('click', (event) => {
        let target = event.target;

        activeBlocks(no, 'none');

        items.forEach(item => {
            if (target.classList.contains(item.getAttribute('data-mark'))) {
                markAll.forEach(i => {
                    activeBlocks(i, 'none');
                    if (i.classList.contains(item.getAttribute('data-mark'))) {
                        setTimeout(() => {
                            activeBlocks(i, 'block');
                        }, 0);
                    }
                });
            }

            if (target.classList.contains('grandmother') || target.classList.contains('granddad')) {
                markAll.forEach(mark => {
                    mark.style.display = 'none';
                    setTimeout(() => {
                        activeBlocks(no, 'block');
                    }, 0);
                });
            }
        });

        // Навешано ли событие click на элемент
        if (target && target.tagName === 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });

    // Технические функции
    function activeBlocks (elem, arg) {
        elem.style.display = arg;
        arg === 'none' ? elem.classList.remove('animated', 'fadeIn') : elem.classList.add('animated', 'fadeIn');
    }
};

export default filter;