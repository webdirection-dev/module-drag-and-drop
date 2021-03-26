const changeCalcState = (state) => {
    const sizePainting = document.querySelector('#size'),
        materialPainting = document.querySelector('#material'),
        optionsPainting = document.querySelector('#options');

    // Получаем значения из data-size и value
    // dataSize.forEach(i => {
    //     console.log(i.dataset.size);
    //     console.log(i.value);
    // });

    function bindActionToElems (listener, elem, property, dataForState) {
        const dataSets = elem.querySelectorAll('option');

        elem.addEventListener(listener, () => {

            dataSets.forEach(item => {
                if (item.value === elem.value) {
                    state[property] = `${item.getAttribute(dataForState)} / ${elem.value}`;
                    console.log(state);
                }
            });
        });
    }

    bindActionToElems('change', sizePainting, 'size', 'data-size');
    bindActionToElems('change', materialPainting, 'material', 'data-material');
    bindActionToElems('change', optionsPainting, 'option', 'data-options');
};

export default changeCalcState;