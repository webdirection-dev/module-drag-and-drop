import {postData} from "../services/requests";

const forms = (calcState) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');

    // Контент оповещений об отправки
    const message = {
        loading: 'Loading...',
        success: 'Thank you.',
        error: 'Error!',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    // Пути серверов куда будем отправлять данные
    const pathServer = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    // Очистить форму
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    // Загрузка фото
    upload.forEach(item =>{
        item.addEventListener('input', () => {
            console.log(item.files[0]);

            // Проверяем длину названия помещаемого файла
            let dots;
            const strName = item.files[0].name.split('.');
            strName[0].length > 6 ? dots = '...' : dots = '.';
            const outName = strName[0].substring(0, 6) + dots + strName[strName.length-1];

            // Размещаем название в верстку
            item.previousElementSibling.textContent = outName;
        });
    });

    // Отправка форм
    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault(); // отменяем перезагрузку браузера после отправки формы

            let statusMessage = document.createElement('div'); // создаем новый элемент верстки
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage); // Внедряем новый элемент в вёрстку

            //Скрываем форму для показа картинки о статусах отправки
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            // Отображаем картинку о статусе отправки
            let statusImg = document.createElement('img');
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            // Отображаем текстовое сообщение о статусе отправки
            let txtMessage = document.createElement('div');
            txtMessage.textContent = message.loading;
            statusImg.classList.add('animated', 'fadeInUp');
            statusImg.setAttribute('src', message.spinner);
            statusMessage.appendChild(txtMessage);

            // Отправка данных
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in calcState) {
                    formData.append(key, calcState[key]);
                }
            }

            let api;

            // метод находит соответсвия по заданному аргументу
                item.closest('.popup-design') || item.classList.contains('calc_form') ? api = pathServer.designer : api = pathServer.question;
            // Принудительно меняю сервер для картинок на сервер с вопросами т.к. хочу отправить селекты со свойствами картины
            if (item.getAttribute('data-calc') === 'end') api = pathServer.question;
                console.log(api);

            postData(api, formData)
                .then(result => {
                    console.log(result);
                    statusImg.setAttribute('src', message.ok);
                    txtMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    txtMessage.textContent = message.error;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusImg.remove();
                        txtMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove( 'fadeOutUp');
                        item.classList.add( 'fadeInUp');
                    }, 5000);
                })
        });
    });
};

export default forms;