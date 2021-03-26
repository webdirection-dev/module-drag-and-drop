const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(item => {
        item.addEventListener('keypress', function (event) {
            if (event.key.match(/[^а-яё 0-9]/ig)) {
                event.preventDefault();
            }
        });
    });
};

export default checkTextInputs;