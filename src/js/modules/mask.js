const mask = (selector) => {
    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveStart('character', pos);
            range.moveEnd('character', pos);
            range.select();
        }
    };

    function masker (event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (anySymbol) {
            return /[_\d]/.test(anySymbol) && i < val.length ? val.charAt(i++)
                : i >= val.length ? ''
                : anySymbol;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        item.addEventListener('input', masker);
        item.addEventListener('focus', masker);
        item.addEventListener('blur', masker);
    });
};

export default mask;