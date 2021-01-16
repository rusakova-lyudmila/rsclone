/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initHeader */ "./src/assets/js/initHeader.js");
/* harmony import */ var _initMainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initMainPage */ "./src/assets/js/initMainPage.js");
/* harmony import */ var _initFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initFooter */ "./src/assets/js/initFooter.js");
/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleMenu */ "./src/assets/js/toggleMenu.js");
;


 // init header

(0,_initHeader__WEBPACK_IMPORTED_MODULE_0__.default)(); // init main page

var mainContainer = document.querySelector('.main-container');
mainContainer.textContent = '';
mainContainer.appendChild((0,_initMainPage__WEBPACK_IMPORTED_MODULE_1__.default)()); // init header

(0,_initFooter__WEBPACK_IMPORTED_MODULE_2__.default)(); // open and close mobile menu

(0,_toggleMenu__WEBPACK_IMPORTED_MODULE_3__.toggleMenu)(); // active desktop menu item

(0,_toggleMenu__WEBPACK_IMPORTED_MODULE_3__.activeMenuItem)();

/***/ }),

/***/ "./src/assets/js/initFooter.js":
/*!*************************************!*\
  !*** ./src/assets/js/initFooter.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initFooter
/* harmony export */ });
function initFooter() {
  // init footer
  var pageFooter = document.createElement('footer');
  pageFooter.classList.add('footer-container', 'footer');
  document.body.appendChild(pageFooter); // init footer author info

  var pageInfoContainer = document.createElement('div');
  pageInfoContainer.classList.add('footer__info');
  pageInfoContainer.innerHTML = '2020 © <a href="https://github.com/rusakova-lyudmila" target="_blank">Rusakova Lyudmila</a>, <a href="https://github.com/snaipp1" target="_blank">Yury Halushko</a>';
  pageFooter.appendChild(pageInfoContainer); // init footer logo

  var pageLogoContainer = document.createElement('div');
  pageLogoContainer.classList.add('footer__logo');
  pageLogoContainer.innerHTML = '<a href="https://rs.school/js/" target="_blank"><img src="assets/img/rs_school_logo.svg" alt="RS School"></a>';
  pageFooter.appendChild(pageLogoContainer);
}

/***/ }),

/***/ "./src/assets/js/initHeader.js":
/*!*************************************!*\
  !*** ./src/assets/js/initHeader.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initHeader
/* harmony export */ });
/* harmony import */ var _initMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMenu */ "./src/assets/js/initMenu.js");
;
function initHeader() {
  // init header
  var pageHeader = document.createElement('header');
  pageHeader.classList.add('header-container');
  document.body.appendChild(pageHeader); // insert nav menu to header

  var navMenu = (0,_initMenu__WEBPACK_IMPORTED_MODULE_0__.default)();
  pageHeader.appendChild(navMenu); // insert mobile nav menu to header

  var navMobileMenu = (0,_initMenu__WEBPACK_IMPORTED_MODULE_0__.default)(true);
  pageHeader.appendChild(navMobileMenu); // init main container

  var mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  document.body.appendChild(mainContainer);
}

/***/ }),

/***/ "./src/assets/js/initMainPage.js":
/*!***************************************!*\
  !*** ./src/assets/js/initMainPage.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initMainPage
/* harmony export */ });
function initMainPage() {
  // remove class of subsection
  var mainContainer = document.querySelector('.main-container');

  if (mainContainer.classList.contains('subsection-container')) {
    mainContainer.classList.remove('subsection-container');
  } // init page container


  var pageContainer = document.createElement('div');
  pageContainer.classList.add('page-container'); // init h1

  var pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Smart Kids';
  pageContainer.appendChild(pageHeading); // init h2

  var pageSubHeading = document.createElement('h2');
  pageSubHeading.textContent = 'Тренажеры для развития памяти, внимания, логики и мышления';
  pageContainer.appendChild(pageSubHeading); // init buttons container

  var buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  pageContainer.appendChild(buttonsContainer); // init login button

  var buttonLogin = document.createElement('button');
  buttonLogin.classList.add('btn', 'btn-lg', 'btn-login');
  buttonLogin.setAttribute('type', 'button');
  buttonLogin.textContent = 'Тренироваться';
  buttonsContainer.appendChild(buttonLogin); // init register button

  var registerLogin = document.createElement('button');
  registerLogin.classList.add('btn', 'btn-lg', 'btn-register');
  registerLogin.setAttribute('type', 'button');
  registerLogin.textContent = 'Зарегистрироваться';
  buttonsContainer.appendChild(registerLogin);
  return pageContainer;
}

/***/ }),

/***/ "./src/assets/js/initMenu.js":
/*!***********************************!*\
  !*** ./src/assets/js/initMenu.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initMenu
/* harmony export */ });
/* harmony import */ var _initMainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMainPage */ "./src/assets/js/initMainPage.js");
/* harmony import */ var _initSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initSection */ "./src/assets/js/initSection.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/assets/js/state.js");
;

 // import initStatisticPage from './statisticPage';

var menuItems = {
  main: 'Главная',
  training: 'Тренажеры',
  statistic: 'Статистика'
};

function clickHandler(e) {
  var sectionName = e.target.dataset.section;
  var pageContent;

  if (sectionName === 'main') {
    pageContent = (0,_initMainPage__WEBPACK_IMPORTED_MODULE_0__.default)();
  } else if (sectionName === 'statistic') {// pageContent = initStatisticPage();
  } else {
    pageContent = (0,_initSection__WEBPACK_IMPORTED_MODULE_1__.default)(sectionName);
  }

  var mainContainer = document.querySelector('.main-container');
  mainContainer.textContent = '';
  mainContainer.appendChild(pageContent);
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.setActivePageName)(sectionName);
}

function initMenu() {
  var mobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  // init nav menu
  var navMenu = document.createElement('nav');

  if (mobile) {
    navMenu.classList.add('menu');
  } else {
    navMenu.classList.add('navbar', 'navbar-expand-lg');
  }

  if (mobile) {
    // init menu toggle
    var menuToggle = document.createElement('div');
    menuToggle.classList.add('menu__toggle');
    navMenu.appendChild(menuToggle); // init menu icon

    var menuIcon = document.createElement('i');
    menuIcon.classList.add('menu__icon', 'material-icons');
    menuIcon.textContent = 'menu';
    menuToggle.appendChild(menuIcon);
  } // init menu list


  var activePageName = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getActivePageName)();
  var menuList = document.createElement('ul');

  if (mobile) {
    menuList.classList.add('menu__list');
    navMenu.appendChild(menuList);
  } else {
    // init menu container
    var menuContainer = document.createElement('div');
    menuContainer.classList.add('collapse', 'navbar-collapse');
    navMenu.appendChild(menuContainer);
    menuList.classList.add('navbar-nav', 'mr-auto');
    menuContainer.appendChild(menuList);
  }

  Object.keys(menuItems).forEach(function (item) {
    // init menu list item
    var menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');

    if (!mobile) {
      menuItem.classList.add('nav-item');
    }

    if (item === activePageName) {
      menuItem.classList.add('menu__item_active');
    }

    menuItem.dataset.name = item;
    menuList.appendChild(menuItem);

    if (mobile) {
      // init menu list item icon
      var menuItemIcon = document.createElement('i');
      menuItemIcon.classList.add('link__icon');
      menuItemIcon.style.backgroundImage = "url(\"./assets/img/icons/icon-".concat(item, ".png\")");
      menuItem.appendChild(menuItemIcon);
    } // init menu list item link


    var menuItemLink = document.createElement('a');
    menuItemLink.classList.add(mobile ? 'menu__link' : 'nav-link');
    menuItemLink.setAttribute('href', "#".concat(item));
    menuItemLink.dataset.section = item;
    menuItemLink.textContent = menuItems[item];
    menuItemLink.addEventListener('click', clickHandler);
    menuItem.appendChild(menuItemLink);
  });
  return navMenu;
}

/***/ }),

/***/ "./src/assets/js/initSection.js":
/*!**************************************!*\
  !*** ./src/assets/js/initSection.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initSection
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/assets/js/state.js");
/* harmony import */ var _initSubSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initSubSection */ "./src/assets/js/initSubSection.js");
/* harmony import */ var _trainings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings */ "./src/assets/js/trainings.js");
;



function clickHandler(e) {
  var sectionName = e.target.dataset.section;
  var cardsElements = (0,_initSubSection__WEBPACK_IMPORTED_MODULE_1__.default)(sectionName);
  var cardsContainer = document.querySelector('.cards-container');
  cardsContainer.replaceWith(cardsElements);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setActivePageName)(sectionName);
}

function initSection() {
  // remove class of subsection
  var mainContainer = document.querySelector('.main-container');

  if (mainContainer.classList.contains('subsection-container')) {
    mainContainer.classList.remove('subsection-container');
  } // init cards container


  var cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container', 'cards'); // init cards

  _trainings__WEBPACK_IMPORTED_MODULE_2__.trainingTypes.forEach(function (_ref) {
    var typeKey = _ref.typeKey,
        typeName = _ref.typeName;
    var cardItem = document.createElement('div');
    cardItem.classList.add('cards__item');
    cardsContainer.appendChild(cardItem); // init card image

    var cardImage = document.createElement('div');
    cardImage.classList.add('card__img');
    cardImage.style.backgroundImage = "url(\"./assets/img/bg/bg-".concat(typeKey, ".jpg\")");
    cardImage.dataset.section = typeKey;
    cardImage.addEventListener('click', clickHandler);
    cardItem.appendChild(cardImage); // init card name

    var cardName = document.createElement('div');
    cardName.classList.add('card__name');
    cardName.textContent = typeName;
    cardName.dataset.section = typeKey;
    cardName.addEventListener('click', clickHandler);
    cardItem.appendChild(cardName);
  });
  return cardsContainer;
}

/***/ }),

/***/ "./src/assets/js/initSubSection.js":
/*!*****************************************!*\
  !*** ./src/assets/js/initSubSection.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initSubSubSection
/* harmony export */ });
/* harmony import */ var _trainings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings */ "./src/assets/js/trainings.js");
; // import { saveResult } from './statistic';

function getSectionDataByName(subSectionName) {
  var subSection = Object.values(_trainings__WEBPACK_IMPORTED_MODULE_0__.trainingsItems).find(function (item) {
    return item.typeKey === subSectionName;
  });
  return subSection.trainings;
}

function rotateCard(e) {
  var targetCardName = e.currentTarget.dataset.card;
  var targetCardBlock = document.querySelector(".cards-".concat(targetCardName));
  targetCardBlock.classList.toggle('cards__block_hover');
  e.stopPropagation();
}

function replaceContent(currentBlock, newBlock, parentBlock) {
  if (currentBlock) {
    currentBlock.replaceWith(newBlock);
  } else {
    parentBlock.prepend(newBlock);
  }
}

function initSubSectionHeading() {
  var subSectionKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  // init section header
  var sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  var subSectionName = Object.values(_trainings__WEBPACK_IMPORTED_MODULE_0__.trainingTypes).find(function (item) {
    return item.typeKey === subSectionKey;
  });
  sectionHeading.textContent = subSectionName.typeName;
  return sectionHeading;
}

function initTrainCards(cardsContainer, cardsElements) {
  cardsElements.forEach(function (card) {
    // init block for cards
    var cardBlock = document.createElement('div');
    cardBlock.classList.add('cards__block', "cards-".concat(card.key));
    cardsContainer.appendChild(cardBlock); // init front card item

    var cardItem = document.createElement('div');
    cardItem.classList.add('cards__item', 'cards__front');
    cardItem.addEventListener('click', function () {// saveResult(card.word, 'trained');
    });
    cardBlock.appendChild(cardItem); // init front card image

    var cardImage = document.createElement('div');
    cardImage.classList.add('card__img');
    cardImage.style.backgroundImage = "url(\"./assets/".concat(card.image, "\")");
    cardItem.appendChild(cardImage); // init front card content

    var cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
    cardItem.appendChild(cardContent); // init front card name

    var cardName = document.createElement('div');
    cardName.classList.add('card__name');
    cardName.textContent = card.name;
    cardContent.appendChild(cardName); // init front card rotate button

    var cardRotateButton = document.createElement('i');
    cardRotateButton.classList.add('card__button', 'material-icons');
    cardRotateButton.dataset.card = card.key;
    cardRotateButton.textContent = 'rotate_left';
    cardRotateButton.addEventListener('click', rotateCard);
    cardContent.appendChild(cardRotateButton); // init back card item

    var cardBackItem = document.createElement('div');
    cardBackItem.classList.add('cards__item', 'cards__back');
    cardBackItem.dataset.card = card.key;
    cardBackItem.addEventListener('mouseleave', rotateCard);
    cardBlock.appendChild(cardBackItem); // init back card description

    var cardBackDescr = document.createElement('div');
    cardBackDescr.classList.add('card__descr');
    cardBackDescr.textContent = card.description;
    cardBackItem.appendChild(cardBackDescr); // init back card name

    var cardBackName = document.createElement('div');
    cardBackName.classList.add('card__name');
    cardBackName.textContent = card.name;
    cardBackItem.appendChild(cardBackName);
  });
}

function initSubSubSection(subSectionName) {
  var mainContainer = document.querySelector('.main-container');
  mainContainer.classList.add('subsection-container'); // set section header

  var sectionHeader = initSubSectionHeading(subSectionName);
  var sectionHeadingContainer = document.querySelector('.section__heading');
  replaceContent(sectionHeadingContainer, sectionHeader, mainContainer); // init cards container

  var cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container', 'cards');
  mainContainer.appendChild(cardsContainer); // get info for cards

  var cardsElements = getSectionDataByName(subSectionName); // init cards

  initTrainCards(cardsContainer, cardsElements);
  return cardsContainer;
}

/***/ }),

/***/ "./src/assets/js/state.js":
/*!********************************!*\
  !*** ./src/assets/js/state.js ***!
  \********************************/
/*! namespace exports */
/*! export getActivePageName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setActivePageName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActivePageName": () => /* binding */ setActivePageName,
/* harmony export */   "getActivePageName": () => /* binding */ getActivePageName
/* harmony export */ });
var state = {
  activePageName: 'main'
};
function setActivePageName(name) {
  state.activePageName = name;
}
function getActivePageName() {
  return state.activePageName;
}

/***/ }),

/***/ "./src/assets/js/toggleMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/toggleMenu.js ***!
  \*************************************/
/*! namespace exports */
/*! export activeMenuItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleMenu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleMenu": () => /* binding */ toggleMenu,
/* harmony export */   "activeMenuItem": () => /* binding */ activeMenuItem
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/assets/js/state.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function setActiveMenuItem() {
  var activePageName = (0,_state__WEBPACK_IMPORTED_MODULE_0__.getActivePageName)();

  var menuItems = _toConsumableArray(document.querySelectorAll('.menu__item'));

  menuItems.forEach(function (item) {
    if (item.dataset.name === activePageName) {
      item.classList.add('menu__item_active');
    } else {
      item.classList.remove('menu__item_active');
    }
  });
}

function toggleMenu() {
  var menuList = document.querySelector('.menu__list');
  var menuIcon = document.querySelector('.menu__icon');
  var menuBackground = document.createElement('div');
  menuBackground.classList.add('menu_open');
  document.body.appendChild(menuBackground);
  var overlayPage = document.createElement('div');
  overlayPage.classList.add('overlay', 'hidden');
  document.body.appendChild(overlayPage);
  menuIcon.addEventListener('click', function (e) {
    menuList.classList.toggle('menu_transformed');
    menuBackground.classList.toggle('menu_transformed');
    overlayPage.classList.toggle('hidden');
    var textMenuIcon = e.target.textContent;
    e.target.textContent = textMenuIcon === 'menu' ? 'close' : 'menu';
    setActiveMenuItem();
  });

  var menuItemIcons = _toConsumableArray(document.querySelectorAll('.link__icon'));

  document.addEventListener('click', function (e) {
    if (menuIcon.textContent === 'close' && e.target !== menuBackground && e.target !== menuIcon && !menuItemIcons.includes(e.target)) {
      menuList.classList.remove('menu_transformed');
      menuBackground.classList.remove('menu_transformed');
      overlayPage.classList.add('hidden');
      menuIcon.textContent = 'menu';
    }
  });
}
function activeMenuItem() {
  var menuItems = document.querySelectorAll('.nav-link');
  menuItems.forEach(function (link) {
    link.addEventListener('click', function () {
      setActiveMenuItem();
    });
  });
}

/***/ }),

/***/ "./src/assets/js/trainings.js":
/*!************************************!*\
  !*** ./src/assets/js/trainings.js ***!
  \************************************/
/*! namespace exports */
/*! export trainingTypes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trainingsItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trainingTypes": () => /* binding */ trainingTypes,
/* harmony export */   "trainingsItems": () => /* binding */ trainingsItems
/* harmony export */ });
var trainingTypes = [{
  typeKey: 'memory',
  typeName: 'Память'
}, {
  typeKey: 'attention',
  typeName: 'Внимание'
}, {
  typeKey: 'logic',
  typeName: 'Логика'
}, {
  typeKey: 'thinking',
  typeName: 'Мышление'
}];
var trainingsItems = [{
  typeKey: 'memory',
  trainings: [{
    key: 'matrix',
    name: 'Матрицы памяти',
    image: 'img/memory/matrix.jpg',
    description: 'Тренажер для развития образной памяти'
  }, {
    key: 'matrix',
    name: 'Матрицы памяти',
    image: 'img/memory/matrix.jpg',
    description: 'Тренажер для развития образной памяти'
  }, {
    key: 'matrix',
    name: 'Матрицы памяти',
    image: 'img/memory/matrix.jpg',
    description: 'Тренажер для развития образной памяти'
  }, {
    key: 'matrix',
    name: 'Матрицы памяти',
    image: 'img/memory/matrix.jpg',
    description: 'Тренажер для развития образной памяти'
  }]
}, {
  typeKey: 'attention',
  trainings: [{
    key: 'click',
    name: 'Клик-Клик',
    image: 'img/attention/click.jpg',
    description: 'Тренажер для развития внимания'
  }]
}, {
  typeKey: 'logic',
  trainings: [{
    key: 'adding',
    name: 'Сложение',
    image: 'img/logic/adding.jpg',
    description: 'Тренажер для развития логики'
  }]
}, {
  typeKey: 'thinking',
  trainings: [{
    key: 'unikum',
    name: 'Уникум',
    image: 'img/thinking/unikum.jpg',
    description: 'Тренажер для развития образного мышления'
  }]
}];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/assets/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0Rm9vdGVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1haW5QYWdlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRNZW51LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRTZWN0aW9uLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRTdWJTZWN0aW9uLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbml0SGVhZGVyIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbml0TWFpblBhZ2UiLCJpbml0Rm9vdGVyIiwidG9nZ2xlTWVudSIsImFjdGl2ZU1lbnVJdGVtIiwicGFnZUZvb3RlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicGFnZUluZm9Db250YWluZXIiLCJpbm5lckhUTUwiLCJwYWdlTG9nb0NvbnRhaW5lciIsInBhZ2VIZWFkZXIiLCJuYXZNZW51IiwiaW5pdE1lbnUiLCJuYXZNb2JpbGVNZW51IiwiY29udGFpbnMiLCJyZW1vdmUiLCJwYWdlQ29udGFpbmVyIiwicGFnZUhlYWRpbmciLCJwYWdlU3ViSGVhZGluZyIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b25Mb2dpbiIsInNldEF0dHJpYnV0ZSIsInJlZ2lzdGVyTG9naW4iLCJtZW51SXRlbXMiLCJtYWluIiwidHJhaW5pbmciLCJzdGF0aXN0aWMiLCJjbGlja0hhbmRsZXIiLCJlIiwic2VjdGlvbk5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic2VjdGlvbiIsInBhZ2VDb250ZW50IiwiaW5pdFNlY3Rpb24iLCJzZXRBY3RpdmVQYWdlTmFtZSIsIm1vYmlsZSIsIm1lbnVUb2dnbGUiLCJtZW51SWNvbiIsImFjdGl2ZVBhZ2VOYW1lIiwiZ2V0QWN0aXZlUGFnZU5hbWUiLCJtZW51TGlzdCIsIm1lbnVDb250YWluZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJtZW51SXRlbSIsIm5hbWUiLCJtZW51SXRlbUljb24iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm1lbnVJdGVtTGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJkc0VsZW1lbnRzIiwiaW5pdFN1YlNlY3Rpb24iLCJjYXJkc0NvbnRhaW5lciIsInJlcGxhY2VXaXRoIiwidHJhaW5pbmdUeXBlcyIsInR5cGVLZXkiLCJ0eXBlTmFtZSIsImNhcmRJdGVtIiwiY2FyZEltYWdlIiwiY2FyZE5hbWUiLCJnZXRTZWN0aW9uRGF0YUJ5TmFtZSIsInN1YlNlY3Rpb25OYW1lIiwic3ViU2VjdGlvbiIsInZhbHVlcyIsInRyYWluaW5nc0l0ZW1zIiwiZmluZCIsInRyYWluaW5ncyIsInJvdGF0ZUNhcmQiLCJ0YXJnZXRDYXJkTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJjYXJkIiwidGFyZ2V0Q2FyZEJsb2NrIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZUNvbnRlbnQiLCJjdXJyZW50QmxvY2siLCJuZXdCbG9jayIsInBhcmVudEJsb2NrIiwicHJlcGVuZCIsImluaXRTdWJTZWN0aW9uSGVhZGluZyIsInN1YlNlY3Rpb25LZXkiLCJzZWN0aW9uSGVhZGluZyIsImluaXRUcmFpbkNhcmRzIiwiY2FyZEJsb2NrIiwia2V5IiwiaW1hZ2UiLCJjYXJkQ29udGVudCIsImNhcmRSb3RhdGVCdXR0b24iLCJjYXJkQmFja0l0ZW0iLCJjYXJkQmFja0Rlc2NyIiwiZGVzY3JpcHRpb24iLCJjYXJkQmFja05hbWUiLCJpbml0U3ViU3ViU2VjdGlvbiIsInNlY3Rpb25IZWFkZXIiLCJzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciIsInN0YXRlIiwic2V0QWN0aXZlTWVudUl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUJhY2tncm91bmQiLCJvdmVybGF5UGFnZSIsInRleHRNZW51SWNvbiIsIm1lbnVJdGVtSWNvbnMiLCJpbmNsdWRlcyIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBQSxvREFBVSxHLENBRVY7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQ0FGLGFBQWEsQ0FBQ0csV0FBZCxHQUE0QixFQUE1QjtBQUNBSCxhQUFhLENBQUNJLFdBQWQsQ0FBMEJDLHNEQUFZLEVBQXRDLEUsQ0FFQTs7QUFDQUMsb0RBQVUsRyxDQUVWOztBQUNBQyx1REFBVSxHLENBRVY7O0FBQ0FDLDJEQUFjLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQyxTQUFTRixVQUFULEdBQXNCO0FBQ25DO0FBQ0EsTUFBTUcsVUFBVSxHQUFHUixR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SyxFQUFFLHVCQUhUO0FBSUVLLGVBQVcsRUFBRTtBQUpmLEdBbkJTO0FBRmIsQ0FENEIsRUE4QjVCO0FBQ0VuQyxTQUFPLEVBQUUsV0FEWDtBQUVFVyxXQUFTLEVBQUUsQ0FDVDtBQUNFa0IsT0FBRyxFQUFFLE9BRFA7QUFFRXhDLFFBQUksRUFBRSxXQUZSO0FBR0V5QyxTQUFLLEVBQUUseUJBSFQ7QUFJRUssZUFBVyxFQUFFO0FBSmYsR0FEUztBQUZiLENBOUI0QixFQXlDNUI7QUFDRW5DLFNBQU8sRUFBRSxPQURYO0FBRUVXLFdBQVMsRUFBRSxDQUNUO0FBQ0VrQixPQUFHLEVBQUUsUUFEUDtBQUVFeEMsUUFBSSxFQUFFLFVBRlI7QUFHRXlDLFNBQUssRUFBRSxzQkFIVDtBQUlFSyxlQUFXLEVBQUU7QUFKZixHQURTO0FBRmIsQ0F6QzRCLEVBb0Q1QjtBQUNFbkMsU0FBTyxFQUFFLFVBRFg7QUFFRVcsV0FBUyxFQUFFLENBQ1Q7QUFDRWtCLE9BQUcsRUFBRSxRQURQO0FBRUV4QyxRQUFJLEVBQUUsUUFGUjtBQUdFeUMsU0FBSyxFQUFFLHlCQUhUO0FBSUVLLGVBQVcsRUFBRTtBQUpmLEdBRFM7QUFGYixDQXBENEIsQ0FBdkIsQzs7Ozs7O1VDbkJQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRIZWFkZXIgZnJvbSAnLi9pbml0SGVhZGVyJztcclxuaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0Rm9vdGVyIGZyb20gJy4vaW5pdEZvb3Rlcic7XHJcbmltcG9ydCB7IHRvZ2dsZU1lbnUsIGFjdGl2ZU1lbnVJdGVtIH0gZnJvbSAnLi90b2dnbGVNZW51JztcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRIZWFkZXIoKTtcclxuXHJcbi8vIGluaXQgbWFpbiBwYWdlXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxubWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRNYWluUGFnZSgpKTtcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRGb290ZXIoKTtcclxuXHJcbi8vIG9wZW4gYW5kIGNsb3NlIG1vYmlsZSBtZW51XHJcbnRvZ2dsZU1lbnUoKTtcclxuXHJcbi8vIGFjdGl2ZSBkZXNrdG9wIG1lbnUgaXRlbVxyXG5hY3RpdmVNZW51SXRlbSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Rm9vdGVyKCkge1xyXG4gIC8vIGluaXQgZm9vdGVyXHJcbiAgY29uc3QgcGFnZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIHBhZ2VGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicsICdmb290ZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VGb290ZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBhdXRob3IgaW5mb1xyXG4gIGNvbnN0IHBhZ2VJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19pbmZvJyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuaW5uZXJIVE1MID0gJzIwMjAgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ydXNha292YS1seXVkbWlsYVwiIHRhcmdldD1cIl9ibGFua1wiPlJ1c2Frb3ZhIEx5dWRtaWxhPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zbmFpcHAxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+WXVyeSBIYWx1c2hrbzwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUluZm9Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBsb2dvXHJcbiAgY29uc3QgcGFnZUxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2xvZ28nKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltZy9yc19zY2hvb2xfbG9nby5zdmdcIiBhbHQ9XCJSUyBTY2hvb2xcIj48L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VMb2dvQ29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1lbnUgZnJvbSAnLi9pbml0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gIC8vIGluaXQgaGVhZGVyXHJcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XHJcblxyXG4gIC8vIGluc2VydCBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNZW51ID0gaW5pdE1lbnUoKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xyXG5cclxuICAvLyBpbnNlcnQgbW9iaWxlIG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1vYmlsZU1lbnUgPSBpbml0TWVudSh0cnVlKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1vYmlsZU1lbnUpO1xyXG5cclxuICAvLyBpbml0IG1haW4gY29udGFpbmVyXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWFpblBhZ2UoKSB7XHJcbiAgLy8gcmVtb3ZlIGNsYXNzIG9mIHN1YnNlY3Rpb25cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IHBhZ2UgY29udGFpbmVyXHJcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250YWluZXInKTtcclxuXHJcbiAgLy8gaW5pdCBoMVxyXG4gIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBwYWdlSGVhZGluZy50ZXh0Q29udGVudCA9ICdTbWFydCBLaWRzJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBoMlxyXG4gIGNvbnN0IHBhZ2VTdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwYWdlU3ViSGVhZGluZy50ZXh0Q29udGVudCA9ICfQotGA0LXQvdCw0LbQtdGA0Ysg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L/QsNC80Y/RgtC4LCDQstC90LjQvNCw0L3QuNGPLCDQu9C+0LPQuNC60Lgg0Lgg0LzRi9GI0LvQtdC90LjRjyc7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlU3ViSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbG9naW4gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1sb2dpbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi50ZXh0Q29udGVudCA9ICfQotGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Mb2dpbik7XHJcblxyXG4gIC8vIGluaXQgcmVnaXN0ZXIgYnV0dG9uXHJcbiAgY29uc3QgcmVnaXN0ZXJMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tcmVnaXN0ZXInKTtcclxuICByZWdpc3RlckxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLnRleHRDb250ZW50ID0gJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWdpc3RlckxvZ2luKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuL2luaXRTZWN0aW9uJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUsIGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbi8vIGltcG9ydCBpbml0U3RhdGlzdGljUGFnZSBmcm9tICcuL3N0YXRpc3RpY1BhZ2UnO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gIG1haW46ICfQk9C70LDQstC90LDRjycsXHJcbiAgdHJhaW5pbmc6ICfQotGA0LXQvdCw0LbQtdGA0YsnLFxyXG4gIHN0YXRpc3RpYzogJ9Ch0YLQsNGC0LjRgdGC0LjQutCwJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgbGV0IHBhZ2VDb250ZW50O1xyXG5cclxuICBpZiAoc2VjdGlvbk5hbWUgPT09ICdtYWluJykge1xyXG4gICAgcGFnZUNvbnRlbnQgPSBpbml0TWFpblBhZ2UoKTtcclxuICB9IGVsc2UgaWYgKHNlY3Rpb25OYW1lID09PSAnc3RhdGlzdGljJykge1xyXG4gICAgLy8gcGFnZUNvbnRlbnQgPSBpbml0U3RhdGlzdGljUGFnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRTZWN0aW9uKHNlY3Rpb25OYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XHJcblxyXG4gIHNldEFjdGl2ZVBhZ2VOYW1lKHNlY3Rpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1lbnUobW9iaWxlID0gZmFsc2UpIHtcclxuICAvLyBpbml0IG5hdiBtZW51XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicsICduYXZiYXItZXhwYW5kLWxnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICAvLyBpbml0IG1lbnUgdG9nZ2xlXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RvZ2dsZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcclxuXHJcbiAgICAvLyBpbml0IG1lbnUgaWNvblxyXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pY29uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBtZW51IGxpc3RcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51X19saXN0Jyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaW5pdCBtZW51IGNvbnRhaW5lclxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsICduYXZiYXItY29sbGFwc2UnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLW5hdicsICdtci1hdXRvJyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1lbnVJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbVxyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xyXG4gICAgaWYgKCFtb2JpbGUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG1lbnVJdGVtLmRhdGFzZXQubmFtZSA9IGl0ZW07XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcblxyXG4gICAgaWYgKG1vYmlsZSkge1xyXG4gICAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGljb25cclxuICAgICAgY29uc3QgbWVudUl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBtZW51SXRlbUljb24uY2xhc3NMaXN0LmFkZCgnbGlua19faWNvbicpO1xyXG4gICAgICBtZW51SXRlbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9pY29ucy9pY29uLSR7aXRlbX0ucG5nXCIpYDtcclxuICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JY29uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGxpbmtcclxuICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG1lbnVJdGVtTGluay5jbGFzc0xpc3QuYWRkKG1vYmlsZSA/ICdtZW51X19saW5rJyA6ICduYXYtbGluaycpO1xyXG4gICAgbWVudUl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtpdGVtfWApO1xyXG4gICAgbWVudUl0ZW1MaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGl0ZW07XHJcbiAgICBtZW51SXRlbUxpbmsudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaXRlbV07XHJcbiAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1MaW5rKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5hdk1lbnU7XHJcbn1cclxuIiwiaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IGluaXRTdWJTZWN0aW9uIGZyb20gJy4vaW5pdFN1YlNlY3Rpb24nO1xyXG5pbXBvcnQgeyB0cmFpbmluZ1R5cGVzIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gaW5pdFN1YlNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aChjYXJkc0VsZW1lbnRzKTtcclxuXHJcbiAgc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U2VjdGlvbigpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIHRyYWluaW5nVHlwZXMuZm9yRWFjaCgoeyB0eXBlS2V5LCB0eXBlTmFtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgaW1hZ2VcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgY2FyZEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvYmcvYmctJHt0eXBlS2V5fS5qcGdcIilgO1xyXG4gICAgY2FyZEltYWdlLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdHlwZU5hbWU7XHJcbiAgICBjYXJkTmFtZS5kYXRhc2V0LnNlY3Rpb24gPSB0eXBlS2V5O1xyXG4gICAgY2FyZE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgdHJhaW5pbmdUeXBlcywgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbi8vIGltcG9ydCB7IHNhdmVSZXN1bHQgfSBmcm9tICcuL3N0YXRpc3RpYyc7XHJcblxyXG5mdW5jdGlvbiBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHN1YlNlY3Rpb24gPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25OYW1lKTtcclxuICByZXR1cm4gc3ViU2VjdGlvbi50cmFpbmluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUNhcmQoZSkge1xyXG4gIGNvbnN0IHRhcmdldENhcmROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2FyZDtcclxuICBjb25zdCB0YXJnZXRDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZHMtJHt0YXJnZXRDYXJkTmFtZX1gKTtcclxuXHJcbiAgdGFyZ2V0Q2FyZEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19ibG9ja19ob3ZlcicpO1xyXG5cclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChjdXJyZW50QmxvY2ssIG5ld0Jsb2NrLCBwYXJlbnRCbG9jaykge1xyXG4gIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgIGN1cnJlbnRCbG9jay5yZXBsYWNlV2l0aChuZXdCbG9jayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudEJsb2NrLnByZXBlbmQobmV3QmxvY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25LZXkgPSAnJykge1xyXG4gIC8vIGluaXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9faGVhZGluZycpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uTmFtZSA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdUeXBlcykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25LZXksXHJcbiAgKTtcclxuXHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBzdWJTZWN0aW9uTmFtZS50eXBlTmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzKSB7XHJcbiAgY2FyZHNFbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAvLyBpbml0IGJsb2NrIGZvciBjYXJkc1xyXG4gICAgY29uc3QgY2FyZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmxvY2suY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2Jsb2NrJywgYGNhcmRzLSR7Y2FyZC5rZXl9YCk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQmxvY2spO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBpdGVtXHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2Zyb250Jyk7XHJcbiAgICBjYXJkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gc2F2ZVJlc3VsdChjYXJkLndvcmQsICd0cmFpbmVkJyk7XHJcbiAgICB9KTtcclxuICAgIGNhcmRCbG9jay5hcHBlbmRDaGlsZChjYXJkSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGltYWdlXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvJHtjYXJkLmltYWdlfVwiKWA7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIHJvdGF0ZSBidXR0b25cclxuICAgIGNvbnN0IGNhcmRSb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbicsICdtYXRlcmlhbC1pY29ucycpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAncm90YXRlX2xlZnQnO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFJvdGF0ZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEJhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2JhY2snKTtcclxuICAgIGNhcmRCYWNrSXRlbS5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRCYWNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcm90YXRlQ2FyZCk7XHJcbiAgICBjYXJkQmxvY2suYXBwZW5kQ2hpbGQoY2FyZEJhY2tJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgY2FyZEJhY2tEZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci5jbGFzc0xpc3QuYWRkKCdjYXJkX19kZXNjcicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci50ZXh0Q29udGVudCA9IGNhcmQuZGVzY3JpcHRpb247XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tEZXNjcik7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZEJhY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja05hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZEJhY2tOYW1lLnRleHRDb250ZW50ID0gY2FyZC5uYW1lO1xyXG4gICAgY2FyZEJhY2tJdGVtLmFwcGVuZENoaWxkKGNhcmRCYWNrTmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTdWJTdWJTZWN0aW9uKHN1YlNlY3Rpb25OYW1lKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc2V0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGluaXRTdWJTZWN0aW9uSGVhZGluZyhzdWJTZWN0aW9uTmFtZSk7XHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faGVhZGluZycpO1xyXG4gIHJlcGxhY2VDb250ZW50KHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyLCBzZWN0aW9uSGVhZGVyLCBtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkcyBjb250YWluZXJcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicsICdjYXJkcycpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xyXG5cclxuICAvLyBnZXQgaW5mbyBmb3IgY2FyZHNcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gZ2V0U2VjdGlvbkRhdGFCeU5hbWUoc3ViU2VjdGlvbk5hbWUpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzXHJcbiAgaW5pdFRyYWluQ2FyZHMoY2FyZHNDb250YWluZXIsIGNhcmRzRWxlbWVudHMpO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiY29uc3Qgc3RhdGUgPSB7XHJcbiAgYWN0aXZlUGFnZU5hbWU6ICdtYWluJyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVQYWdlTmFtZShuYW1lKSB7XHJcbiAgc3RhdGUuYWN0aXZlUGFnZU5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlUGFnZU5hbWUoKSB7XHJcbiAgcmV0dXJuIHN0YXRlLmFjdGl2ZVBhZ2VOYW1lO1xyXG59XHJcbiIsImltcG9ydCB7IGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVNZW51SXRlbSgpIHtcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyldO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0Lm5hbWUgPT09IGFjdGl2ZVBhZ2VOYW1lKSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdCcpO1xyXG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2ljb24nKTtcclxuXHJcbiAgY29uc3QgbWVudUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51QmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdtZW51X29wZW4nKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3Qgb3ZlcmxheVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdmVybGF5UGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5JywgJ2hpZGRlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheVBhZ2UpO1xyXG5cclxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICBtZW51QmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICBvdmVybGF5UGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0TWVudUljb24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gdGV4dE1lbnVJY29uID09PSAnbWVudScgPyAnY2xvc2UnIDogJ21lbnUnO1xyXG5cclxuICAgIHNldEFjdGl2ZU1lbnVJdGVtKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtSWNvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmtfX2ljb24nKV07XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKG1lbnVJY29uLnRleHRDb250ZW50ID09PSAnY2xvc2UnXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51QmFja2dyb3VuZFxyXG4gICAgICAmJiBlLnRhcmdldCAhPT0gbWVudUljb25cclxuICAgICAgJiYgIW1lbnVJdGVtSWNvbnMuaW5jbHVkZXMoZS50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgbWVudUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgICBtZW51QmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgbWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVNZW51SXRlbSgpIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcclxuICBtZW51SXRlbXMuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCB0cmFpbmluZ1R5cGVzID0gW1xyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdtZW1vcnknLFxyXG4gICAgdHlwZU5hbWU6ICfQn9Cw0LzRj9GC0YwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0eXBlTmFtZTogJ9CS0L3QuNC80LDQvdC40LUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2xvZ2ljJyxcclxuICAgIHR5cGVOYW1lOiAn0JvQvtCz0LjQutCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICd0aGlua2luZycsXHJcbiAgICB0eXBlTmFtZTogJ9Cc0YvRiNC70LXQvdC40LUnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhaW5pbmdzSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeCcsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgnLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXguanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7QuSDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4JyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeCcsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2NsaWNrJyxcclxuICAgICAgICBuYW1lOiAn0JrQu9C40Lot0JrQu9C40LonLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2F0dGVudGlvbi9jbGljay5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQstC90LjQvNCw0L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdhZGRpbmcnLFxyXG4gICAgICAgIG5hbWU6ICfQodC70L7QttC10L3QuNC1JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9sb2dpYy9hZGRpbmcuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LvQvtCz0LjQutC4JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAndGhpbmtpbmcnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICd1bmlrdW0nLFxyXG4gICAgICAgIG5hbWU6ICfQo9C90LjQutGD0LwnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL3RoaW5raW5nL3VuaWt1bS5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtCz0L4g0LzRi9GI0LvQtdC90LjRjycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=