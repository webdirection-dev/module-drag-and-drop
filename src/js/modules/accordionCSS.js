const accordionCSS = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(item => {
        item.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(item => {
        item.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });
};

export default accordionCSS;