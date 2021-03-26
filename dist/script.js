/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_formsA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formsA */ "./src/js/modules/formsA.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordionJS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordionJS */ "./src/js/modules/accordionJS.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");
/* harmony import */ var _modules_changeCalcState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/changeCalcState */ "./src/js/modules/changeCalcState.js");





 // import showMoreStylesJSON from "./modules/showMoreStylesJSON";



 // import accordionCSS from "./modules/accordionCSS";






window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let calcState = {};
  Object(_modules_changeCalcState__WEBPACK_IMPORTED_MODULE_13__["default"])(calcState);
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])({
    slidesSelector: '.feedback-slider-item',
    direction: 'horizontal',
    prevBtnSelector: '.main-prev-btn',
    nextBtnSelector: '.main-next-btn'
  });
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])({
    slidesSelector: '.main-slider-item',
    direction: 'vertical'
  });
  Object(_modules_formsA__WEBPACK_IMPORTED_MODULE_2__["default"])(calcState);
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '.styles-2'); // Подгрузка блоков из HTML
  // showMoreStylesJSON('.button-styles', '#styles .row');  // Подгрузка блоков c JSON-сервера

  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])({
    size: '#size',
    material: '#material',
    options: '#options',
    promoCode: '.promocode',
    result: '.calc-price',
    promo: calcState
  });
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block'); // accordionCSS('.accordion-heading', '.accordion-block');  // Аккордион на CSS

  Object(_modules_accordionJS__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading'); // Аккордион на JS

  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger', '.burger-menu');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  Object(_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordionJS.js":
/*!***************************************!*\
  !*** ./src/js/modules/accordionJS.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordionJS = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll('#accordion div');
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
        btnClass.toggle('active-style');
        nextNode.classList.toggle('active-content');

        if (btnClass.contains('active-style')) {
          nextNode.style.maxHeight = nextNode.scrollHeight + 80 + 'px';
        } else {
          nextNode.style.maxHeight = '0px';
          hideElem(this, 'active-style');
        }
      }
    });
  }); // Техническая

  function hideElem(btn, arg) {
    btn.classList.remove(arg);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (accordionJS);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (burgerTrigger, menuSelector) => {
  const burgerElem = document.querySelector(burgerTrigger),
        menuElem = document.querySelector(menuSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display === 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else menuElem.style.display = 'none';
  }); // Скрываем меню при ресайзе

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) menuElem.style.display = 'none';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calculator = ({
  size,
  material,
  options,
  promoCode,
  result,
  promo
}) => {
  let sum = 0;
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promoCode),
        resultBlock = document.querySelector(result);

  const calcFunction = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value == '' || materialBlock.value == '') resultBlock.textContent = 'Выберите размер и материал.';else if (promoCodeBlock.value === 'IWANTPOPART') {
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

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/changeCalcState.js":
/*!*******************************************!*\
  !*** ./src/js/modules/changeCalcState.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const changeCalcState = state => {
  const sizePainting = document.querySelector('#size'),
        materialPainting = document.querySelector('#material'),
        optionsPainting = document.querySelector('#options'); // Получаем значения из data-size и value
  // dataSize.forEach(i => {
  //     console.log(i.dataset.size);
  //     console.log(i.value);
  // });

  function bindActionToElems(listener, elem, property, dataForState) {
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

/* harmony default export */ __webpack_exports__["default"] = (changeCalcState);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(item => {
    item.addEventListener('keypress', function (event) {
      if (event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const drop = () => {
  // drag * срабатывают на элементе, который перетаскивают из DOM
  // dragend * срабатывают на элементе, который перетаскивают из DOM
  // dragexit * срабатывают на элементе, который перетаскивают из DOM
  // dragstart * срабатывают на элементе, который перетаскивают из DOM
  // dragenter - возникает когда перертаскивают ОБЪЕКТ над DROP AREA
  // dragleave - когда перертаскивают ОБЪЕКТ за пределы DROP AREA
  // dragover - ОБЪЕКТ зависает над DROP AREA
  // drop - ОБЪЕКТ отправлен в DROP AREA
  const fileInputs = document.querySelectorAll('[name="upload"]'); // Перебераем массив событий для уменьшения строк кода

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(item => {
      item.addEventListener(eventName, preventDefaults, false);
    });
  }); // Когда наводим на область и двигаем мышкой

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(item => {
      item.addEventListener(eventName, () => highlight(item), false);
    });
  }); // Когда выводим из области

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(item => {
      item.addEventListener(eventName, () => unHighlight(item), false);
    });
  });
  fileInputs.forEach(item => {
    item.addEventListener('drop', event => {
      // Взяли файлы из dataTransfer.files и поместили их в item.files
      // item.files - метод доступа к файлам в инпуте
      // event.dataTransfer.files - метод модификации файлов из импута
      // dataTransfer.files это и есть объект с файлом из компьютера
      item.files = event.dataTransfer.files; // Проверяем длину названия помещаемого файла

      let dots;
      const strName = item.files[0].name.split('.');
      strName[0].length > 6 ? dots = '...' : dots = '.';
      const outName = strName[0].substring(0, 6) + dots + strName[strName.length - 1]; // Размещаем название в верстку

      item.previousElementSibling.textContent = outName;
    });
  }); // Технические
  // Отмена стандартного поведения браузера

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  } // Подсветим область для отправки


  function highlight(item) {
    item.closest('.file_upload').style.border = '1px solid #c51abb';
    item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
  } // Снимаем подсветку область для отправки


  function unHighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.backgroundColor = 'transparent';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no'); // Класс активности для меню панели навигации

  menu.addEventListener('click', event => {
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
    }); // Навешано ли событие click на элемент

    if (target && target.tagName === 'LI') {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  }); // Технические функции

  function activeBlocks(elem, arg) {
    elem.style.display = arg;
    arg === 'none' ? elem.classList.remove('animated', 'fadeIn') : elem.classList.add('animated', 'fadeIn');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/formsA.js":
/*!**********************************!*\
  !*** ./src/js/modules/formsA.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = calcState => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'); // Контент оповещений об отправки

  const message = {
    loading: 'Loading...',
    success: 'Thank you.',
    error: 'Error!',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }; // Пути серверов куда будем отправлять данные

  const pathServer = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }; // Очистить форму

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  }; // Загрузка фото


  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]); // Проверяем длину названия помещаемого файла

      let dots;
      const strName = item.files[0].name.split('.');
      strName[0].length > 6 ? dots = '...' : dots = '.';
      const outName = strName[0].substring(0, 6) + dots + strName[strName.length - 1]; // Размещаем название в верстку

      item.previousElementSibling.textContent = outName;
    });
  }); // Отправка форм

  form.forEach(item => {
    item.addEventListener('submit', event => {
      event.preventDefault(); // отменяем перезагрузку браузера после отправки формы

      let statusMessage = document.createElement('div'); // создаем новый элемент верстки

      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage); // Внедряем новый элемент в вёрстку
      //Скрываем форму для показа картинки о статусах отправки

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400); // Отображаем картинку о статусе отправки

      let statusImg = document.createElement('img');
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg); // Отображаем текстовое сообщение о статусе отправки

      let txtMessage = document.createElement('div');
      txtMessage.textContent = message.loading;
      statusImg.classList.add('animated', 'fadeInUp');
      statusImg.setAttribute('src', message.spinner);
      statusMessage.appendChild(txtMessage); // Отправка данных

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        for (let key in calcState) {
          formData.append(key, calcState[key]);
        }
      }

      let api; // метод находит соответсвия по заданному аргументу

      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = pathServer.designer : api = pathServer.question; // Принудительно меняю сервер для картинок на сервер с вопросами т.к. хочу отправить селекты со свойствами картины

      if (item.getAttribute('data-calc') === 'end') api = pathServer.question;
      console.log(api);
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(result => {
        console.log(result);
        statusImg.setAttribute('src', message.ok);
        txtMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        txtMessage.textContent = message.error;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusImg.remove();
          txtMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
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

  function masker(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (anySymbol) {
      return /[_\d]/.test(anySymbol) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : anySymbol;
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

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed = false,
      scroll = calcScroll();

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      // Проверям были ли запущенны другие модалки --->
      let detect; // в состоянии undefined что в булевом значении это false

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          detect = 'block';
        }
      }); //  <---
      // Если detect === false

      if (!detect) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  } // Определям долистали ли страницу до конца


  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  blocks.forEach(item => {
    item.addEventListener('mouseover', () => {
      showImg(item, -4, '-1.png', 'none');
    });
    item.addEventListener('mouseout', () => {
      showImg(item, -6, '.png', 'block');
    });
  }); // Техническая

  function showImg(block, slicer, adder, arg) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, slicer) + adder;
    block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
      item.style.display = arg;
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Анимация с использованием requestAnimationFrame
const scrolling = upSelector => {
  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.4;
  const upElem = document.querySelector(upSelector); // Скрыть/показать кнопку UP

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.remove('fadeOut');
      upElem.classList.add('animated', 'fadeIn');
    } else {
      upElem.classList.remove('fadeIn');
      upElem.classList.add('fadeOut');
    }
  });
  links.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) requestAnimationFrame(step);else location.hash = hash;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling); //  Анимация с использованием  Классического JS
// const scrolling = (upSelector) => {
//     const upElem = document.querySelector(upSelector),
//         element = document.documentElement,
//         body = document.body;
//
//     // Скрыть/показать кнопку UP
//     window.addEventListener('scroll', () => {
//         if (document.documentElement.scrollTop > 1650) {
//             upElem.classList.remove('fadeOut');
//             upElem.classList.add('animated', 'fadeIn');
//         } else {
//             upElem.classList.remove('fadeIn');
//             upElem.classList.add('fadeOut');
//         }
//     });
//
//     // Сколько нужно пролистать и как именно это сделат
//     const calcScroll = () => {
//         upElem.addEventListener('click', function (event) {
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop),
//                 hashElement = document.querySelector(this.hash),
//                 hashElementTop = 0;
//
//             // this.hash - это хэш-строка добовляемая к адресной строке браузера https://siteName/#up где #up это хэш
//             // В широком смысле это локальные ссылки внутри страницы
//             if (this.hash !== '') {
//                 // отменим стандартное поведение браузера
//                 event.preventDefault();
//
//                 while (hashElement.offsetParent) {
//                     hashElementTop += hashElement.offsetTop;
//                     hashElement = hashElement.offsetParent;
//                 }
//
//                 hashElementTop = Math.round(hashElementTop);
//                 smoothScroll(scrollTop, hashElementTop, this.hash);
//             }
//         });
//     };
//
//     const smoothScroll = (from, to, hash) => {
//         let timeInterval = 1,
//             prevScrollTop,
//             speed;
//
//         if (to > from) speed = 30;
//         else speed = -30;
//
//         let move = setInterval(function () {
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop);
//
//             if (
//                 prevScrollTop === scrollTop ||
//                 (to > from && scrollTop >= to) ||
//                 (to < from && scrollTop <= to)
//             ) {
//                 clearInterval(move);
//                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//             } else {
//                 body.scrollTop += speed;
//                 element.scrollTop += speed;
//                 prevScrollTop = scrollTop;
//             }
//         }, timeInterval);
//     };
//
//     calcScroll();
// };
//
// export default scrolling;

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = ({
  slidesSelector,
  direction,
  prevBtnSelector,
  nextBtnSelector
}) => {
  let slideIndex = 1,
      paused = false;
  const itemsSlider = document.querySelectorAll(slidesSelector);

  function showSlides(index) {
    if (index > itemsSlider.length) slideIndex = 1;
    if (index < 1) slideIndex = itemsSlider.length;
    itemsSlider.forEach(item => {
      item.style.display = 'none';
      item.classList.add('animated');
    });
    itemsSlider[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function changeSlides(index) {
    showSlides(slideIndex += index);
  } // Проверяем на ошибки. Если селекторы кнопок не были переданы, то ничего не сломается


  try {
    const prevBtn = document.querySelector(prevBtnSelector),
          nextBtn = document.querySelector(nextBtnSelector);
    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      itemsSlider[slideIndex - 1].classList.remove('slideInRight');
      itemsSlider[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      itemsSlider[slideIndex - 1].classList.remove('slideInLeft');
      itemsSlider[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}

  function activateAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(function () {
        changeSlides(1);
        itemsSlider[slideIndex - 1].classList.add('slideInDown');
      }, 10000);
    } else {
      paused = setInterval(function () {
        changeSlides(1);
        itemsSlider[slideIndex - 1].classList.add('slideInLeft');
        itemsSlider[slideIndex - 1].classList.add('slideInRight');
      }, 10000);
    }
  }

  activateAnimation(); // Находим родетеля слайдов для пазы нужного слайдера
  // Ставим на паузу auto change слайдера

  itemsSlider[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  }); // Снимаем с паузы auto change слайдера

  itemsSlider[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let result = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await result.text();
};

const getResource = async url => {
  let result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }

  return await result.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map