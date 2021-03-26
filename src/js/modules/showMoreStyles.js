const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
        btn = document.querySelector(trigger);

    cards.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-mg', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        btn.remove();
    });
};

export default showMoreStyles;