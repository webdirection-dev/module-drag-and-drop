const accordionJS = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll('#accordion div')

    btns.forEach(item => {
        item.addEventListener('click', function () {
            const nextNode = this.nextElementSibling,
                btnClass = this.classList;

            if (btnClass.contains('active-style')) {
                btns.forEach(btn => {
                    hideElem(btn, 'active-style');
                });

                blocks.forEach(block => {
                    block.style.maxHeight = '0px';
                    hideElem(block, 'active-content');
                });
            } else {
                blocks.forEach(block => {
                    block.style.maxHeight = '0px';
                    hideElem(block, 'active-content');
                });

                btns.forEach(btn => {
                    hideElem(btn, 'active-style');
                });

                btnClass.toggle( 'active-style');
                nextNode.classList.toggle('active-content');

                if (btnClass.contains('active-style')) {
                    nextNode.style.maxHeight = nextNode.scrollHeight + 80 + 'px';
                } else {
                    nextNode.style.maxHeight = '0px';
                    hideElem(this, 'active-style');
                }
            }
        });
    });

    // Техническая
    function hideElem (btn, arg) {
        btn.classList.remove( arg);
    }
};

export default accordionJS;