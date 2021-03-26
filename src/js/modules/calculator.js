const calculator = ({size, material, options, promoCode, result, promo}) => {
    let sum = 0;
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promoCode),
        resultBlock = document.querySelector(result);

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') resultBlock.textContent = 'Выберите размер и материал.';
        else if (promoCodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
            promo['actionPromoCode'] = 'IWANTPOPART';
            console.log(promo);
        } else resultBlock.textContent = sum;
    };

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promoCodeBlock.addEventListener('input', calcFunction);
};

export default calculator;