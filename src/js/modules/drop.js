const drop = () => {
    // drag * срабатывают на элементе, который перетаскивают из DOM
    // dragend * срабатывают на элементе, который перетаскивают из DOM
    // dragexit * срабатывают на элементе, который перетаскивают из DOM
    // dragstart * срабатывают на элементе, который перетаскивают из DOM

    // dragenter - возникает когда перертаскивают ОБЪЕКТ над DROP AREA
    // dragleave - когда перертаскивают ОБЪЕКТ за пределы DROP AREA
    // dragover - ОБЪЕКТ зависает над DROP AREA
    // drop - ОБЪЕКТ отправлен в DROP AREA

    const fileInputs = document.querySelectorAll('[name="upload"]');

    // Перебераем массив событий для уменьшения строк кода
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(item => {
            item.addEventListener(eventName, preventDefaults, false);
        });
    });

    // Когда наводим на область и двигаем мышкой
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(item => {
            item.addEventListener(eventName, () => highlight(item), false);
        });
    });

    // Когда выводим из области
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(item => {
            item.addEventListener(eventName, () => unHighlight(item), false);
        });
    });

    fileInputs.forEach(item => {
        item.addEventListener('drop', (event) => {
            // Взяли файлы из dataTransfer.files и поместили их в item.files
            // item.files - метод доступа к файлам в инпуте
            // event.dataTransfer.files - метод модификации файлов из импута
            // dataTransfer.files это и есть объект с файлом из компьютера
            item.files = event.dataTransfer.files;

            // Проверяем длину названия помещаемого файла
            let dots;
            const strName = item.files[0].name.split('.');
            strName[0].length > 6 ? dots = '...' : dots = '.';
            const outName = strName[0].substring(0, 6) + dots + strName[strName.length-1];

            // Размещаем название в верстку
            item.previousElementSibling.textContent = outName;
        });
    });

    // Технические
    // Отмена стандартного поведения браузера
    function preventDefaults (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Подсветим область для отправки
    function highlight (item) {
        item.closest('.file_upload').style.border = '1px solid #c51abb';
        item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
    }

    // Снимаем подсветку область для отправки
    function unHighlight (item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = 'transparent';
    }
};

export default drop;