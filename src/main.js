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
/* harmony import */ var _initSubSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initSubSection */ "./src/assets/js/initSubSection.js");
/* harmony import */ var _trainings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings */ "./src/assets/js/trainings.js");
// import { setActivePageName } from './state';
;


function clickHandler(e) {
  var sectionName = e.target.dataset.section;
  var cardsElements = (0,_initSubSection__WEBPACK_IMPORTED_MODULE_0__.default)(sectionName);
  var cardsContainer = document.querySelector('.cards-container');
  cardsContainer.replaceWith(cardsElements); // setActivePageName(sectionName);
}

function initSection() {
  // remove class of subsection
  var mainContainer = document.querySelector('.main-container');

  if (mainContainer.classList.contains('subsection-container')) {
    mainContainer.classList.remove('subsection-container');
  } // init cards container


  var cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container', 'cards'); // init cards

  _trainings__WEBPACK_IMPORTED_MODULE_1__.trainingTypes.forEach(function (_ref) {
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
/* harmony export */   "default": () => /* binding */ initSubSection
/* harmony export */ });
/* harmony import */ var _initTraining__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initTraining */ "./src/assets/js/initTraining.js");
/* harmony import */ var _trainings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings */ "./src/assets/js/trainings.js");
;
 // import { saveResult } from './statistic';

function clickHandler(e, subSectionKey) {
  var trainingKey = e.currentTarget.dataset.training;
  var training = (0,_initTraining__WEBPACK_IMPORTED_MODULE_0__.default)(trainingKey, subSectionKey);
  var cardsContainer = document.querySelector('.cards-container');
  cardsContainer.replaceWith(training);
}

function getSectionDataByName(subSectionName) {
  var subSection = Object.values(_trainings__WEBPACK_IMPORTED_MODULE_1__.trainingsItems).find(function (item) {
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
  var subSectionName = Object.values(_trainings__WEBPACK_IMPORTED_MODULE_1__.trainingTypes).find(function (item) {
    return item.typeKey === subSectionKey;
  });
  sectionHeading.textContent = subSectionName.typeName;
  return sectionHeading;
}

function initTrainCards(cardsContainer, cardsElements, subSectionKey) {
  cardsElements.forEach(function (card) {
    // init block for cards
    var cardBlock = document.createElement('div');
    cardBlock.classList.add('cards__block', "cards-".concat(card.key));
    cardsContainer.appendChild(cardBlock); // init front card link

    var cardLink = document.createElement('a');
    cardLink.classList.add('card__link');
    cardLink.setAttribute('href', "#".concat(card.key));
    cardBlock.appendChild(cardLink); // init front card item

    var cardItem = document.createElement('div');
    cardItem.classList.add('cards__item', 'cards__front');
    cardItem.dataset.training = card.key;
    cardItem.addEventListener('click', function (e) {
      clickHandler(e, subSectionKey); // saveResult(card.word, 'trained');
    });
    cardLink.appendChild(cardItem); // init front card image

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
    cardBackItem.appendChild(cardBackDescr); // init front card content

    var cardBackContent = document.createElement('div');
    cardBackContent.classList.add('card__content');
    cardBackItem.appendChild(cardBackContent); // init back card name

    var cardBackName = document.createElement('div');
    cardBackName.classList.add('card__name');
    cardBackName.textContent = card.name;
    cardBackContent.appendChild(cardBackName);
  });
}

function initSubSection(subSectionName) {
  var mainContainer = document.querySelector('.main-container');
  mainContainer.classList.add('subsection-container'); // set section header

  var sectionHeader = initSubSectionHeading(subSectionName);
  var sectionHeadingContainer = document.querySelector('.section__heading');
  replaceContent(sectionHeadingContainer, sectionHeader, mainContainer); // init cards container

  var cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container', 'cards');
  mainContainer.appendChild(cardsContainer); // get info for cards

  var cardsElements = getSectionDataByName(subSectionName); // init cards

  initTrainCards(cardsContainer, cardsElements, subSectionName);
  return cardsContainer;
}

/***/ }),

/***/ "./src/assets/js/initTraining.js":
/*!***************************************!*\
  !*** ./src/assets/js/initTraining.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initTraining
/* harmony export */ });
/* harmony import */ var _trainings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings */ "./src/assets/js/trainings.js");
/* harmony import */ var _trainings_addition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings/addition */ "./src/assets/js/trainings/addition.js");
;


function replaceContent(currentBlock, newBlock, parentBlock) {
  if (currentBlock) {
    currentBlock.replaceWith(newBlock);
  } else {
    parentBlock.prepend(newBlock);
  }
}

function initSubSectionHeading(trainingInfo) {
  // init section header
  var sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  sectionHeading.textContent = trainingInfo.name;
  return sectionHeading;
}

function initTraining(trainingKey, subSectionKey) {
  var mainContainer = document.querySelector('.main-container');
  var subSectionTraining = Object.values(_trainings__WEBPACK_IMPORTED_MODULE_0__.trainingsItems).find(function (item) {
    return item.typeKey === subSectionKey;
  });
  var trainingInfo = Object.values(subSectionTraining.trainings).find(function (item) {
    return item.key === trainingKey;
  }); // set section header

  var sectionHeader = initSubSectionHeading(trainingInfo);
  var sectionHeadingContainer = document.querySelector('.section__heading');
  replaceContent(sectionHeadingContainer, sectionHeader, mainContainer); // init training container

  var trainingContainer = document.createElement('div');
  trainingContainer.classList.add('training', 'cards');
  mainContainer.appendChild(trainingContainer); // init training card

  var trainingCard = document.createElement('div');
  trainingCard.classList.add('training__card', 'cards__item', trainingInfo.key);
  trainingCard.style.backgroundImage = "url(\"./assets/".concat(trainingInfo.bg, "\")");
  trainingContainer.appendChild(trainingCard); // init game

  var game = (0,_trainings_addition__WEBPACK_IMPORTED_MODULE_1__.initGame)(_trainings_addition__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy, 60, trainingCard);
  (0,_trainings_addition__WEBPACK_IMPORTED_MODULE_1__.startGame)(game);
  return trainingContainer;
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
    key: 'matrix1',
    name: 'Матрицы памяти',
    image: 'img/memory/matrix.jpg',
    description: 'Тренажер для развития образной памяти'
  }, {
    key: 'matrix2',
    name: 'Матрицы памяти',
    image: 'img/memory/matrix.jpg',
    description: 'Тренажер для развития образной памяти'
  }, {
    key: 'matrix3',
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
    bg: 'img/logic/bg/adding.jpg',
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

/***/ }),

/***/ "./src/assets/js/trainings/addition.js":
/*!*********************************************!*\
  !*** ./src/assets/js/trainings/addition.js ***!
  \*********************************************/
/*! namespace exports */
/*! export gameLevel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export startGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLevel": () => /* binding */ gameLevel,
/* harmony export */   "initGame": () => /* binding */ initGame,
/* harmony export */   "startGame": () => /* binding */ startGame
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var gameLevel = {
  easy: {
    termsCount: 2,
    maxTerm: 20,
    answersCount: 3
  },
  medium: {
    termsCount: 3,
    maxTerm: 50,
    answersCount: 5
  }
};
var gameStatus = {
  init: 'init',
  start: 'start',
  stop: 'stop'
};

function mixAnswers(arr) {
  return _toConsumableArray(arr).sort(function () {
    return Math.random() - 0.5;
  });
}

function getAnswers(correctAnswer, maxTerm, answersCount) {
  var answers = [correctAnswer];

  while (answers.length < answersCount) {
    var nextAnswer = correctAnswer + Math.round((Math.random() - 0.5) * maxTerm * 0.5);

    if (!answers.includes(nextAnswer)) {
      answers.push(nextAnswer);
    }
  }

  return mixAnswers(answers);
}

function generateExample(_ref) {
  var termsCount = _ref.termsCount,
      maxTerm = _ref.maxTerm,
      answersCount = _ref.answersCount;
  var terms = Array(termsCount).fill(0).map(function () {
    return Math.round(Math.random() * maxTerm) + 1;
  });
  var correctAnswer = terms.reduce(function (sum, term) {
    return sum + term;
  });
  var answers = getAnswers(correctAnswer, maxTerm, answersCount);
  return {
    question: terms.join(' + '),
    correctAnswer: correctAnswer,
    answers: answers
  };
}

function renderTimer(time) {
  var elem = document.createElement('div');
  elem.classList.add('adding__timer');
  elem.textContent = time;
  return elem;
}

function renderQuestion(question) {
  var elem = document.createElement('div');
  elem.classList.add('adding__question');
  elem.textContent = question;
  return elem;
}

function renderAnswers(example, successHandler, failHandler) {
  var answersContainer = document.createElement('div');
  answersContainer.classList.add('adding__answers');
  example.answers.forEach(function (answer) {
    var button = document.createElement('button');
    button.classList.add('btn', 'btn-lg');
    button.textContent = answer;
    button.addEventListener('click', example.correctAnswer === answer ? successHandler : failHandler);
    answersContainer.appendChild(button);
  });
  return answersContainer;
}

function renderHelpButtons() {
  var buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('adding__buttons'); // init exit button

  var buttonExit = document.createElement('button');
  buttonExit.classList.add('btn');
  buttonExit.textContent = 'Выйти';
  buttonExit.addEventListener('click', function () {});
  buttonsContainer.appendChild(buttonExit); // init sound button

  var buttonSound = document.createElement('button');
  buttonSound.classList.add('btn');
  buttonSound.textContent = 'Звук';
  buttonSound.addEventListener('click', function () {});
  buttonsContainer.appendChild(buttonSound); // init info button

  var buttonInfo = document.createElement('button');
  buttonInfo.classList.add('btn');
  buttonInfo.textContent = 'Инфо';
  buttonInfo.addEventListener('click', function () {});
  buttonsContainer.appendChild(buttonInfo);
  return buttonsContainer;
}

function renderExample(gameObj, example) {
  var container = gameObj.container,
      level = gameObj.level;
  container.innerHTML = '';
  var timer = renderTimer(gameObj.duration);
  container.appendChild(timer);
  var question = renderQuestion(example.question);
  container.appendChild(question);

  var newGameState = _objectSpread({}, gameObj);

  var successHandler = function successHandler() {
    newGameState.score += 1;

    if (newGameState.status === gameStatus.start) {
      var newExample = generateExample(level);
      renderExample(newGameState, newExample);
    }
  };

  var failHandler = function failHandler() {
    if (newGameState.status === gameStatus.start) {
      var newExample = generateExample(gameObj.level);
      renderExample(newGameState, newExample);
    }
  };

  var answers = renderAnswers(example, successHandler, failHandler);
  container.appendChild(answers);
  var buttons = renderHelpButtons();
  container.appendChild(buttons);
}

function initGame(level, duration, container) {
  return {
    score: 0,
    level: level,
    duration: duration,
    status: gameStatus.init,
    container: container
  };
}
function startGame(gameObj) {
  var example = generateExample(gameObj.level);

  var newGameState = _objectSpread(_objectSpread({}, gameObj), {}, {
    status: gameStatus.start
  });

  renderExample(newGameState, example);
  return newGameState;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0Rm9vdGVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1haW5QYWdlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRNZW51LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRTZWN0aW9uLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRTdWJTZWN0aW9uLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRUcmFpbmluZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy90b2dnbGVNZW51LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy90cmFpbmluZ3MvYWRkaXRpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImluaXRIZWFkZXIiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImluaXRNYWluUGFnZSIsImluaXRGb290ZXIiLCJ0b2dnbGVNZW51IiwiYWN0aXZlTWVudUl0ZW0iLCJwYWdlRm9vdGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJwYWdlSW5mb0NvbnRhaW5lciIsImlubmVySFRNTCIsInBhZ2VMb2dvQ29udGFpbmVyIiwicGFnZUhlYWRlciIsIm5hdk1lbnUiLCJpbml0TWVudSIsIm5hdk1vYmlsZU1lbnUiLCJjb250YWlucyIsInJlbW92ZSIsInBhZ2VDb250YWluZXIiLCJwYWdlSGVhZGluZyIsInBhZ2VTdWJIZWFkaW5nIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbkxvZ2luIiwic2V0QXR0cmlidXRlIiwicmVnaXN0ZXJMb2dpbiIsIm1lbnVJdGVtcyIsIm1haW4iLCJ0cmFpbmluZyIsInN0YXRpc3RpYyIsImNsaWNrSGFuZGxlciIsImUiLCJzZWN0aW9uTmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJzZWN0aW9uIiwicGFnZUNvbnRlbnQiLCJpbml0U2VjdGlvbiIsInNldEFjdGl2ZVBhZ2VOYW1lIiwibW9iaWxlIiwibWVudVRvZ2dsZSIsIm1lbnVJY29uIiwiYWN0aXZlUGFnZU5hbWUiLCJnZXRBY3RpdmVQYWdlTmFtZSIsIm1lbnVMaXN0IiwibWVudUNvbnRhaW5lciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsIm1lbnVJdGVtIiwibmFtZSIsIm1lbnVJdGVtSWNvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibWVudUl0ZW1MaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcmRzRWxlbWVudHMiLCJpbml0U3ViU2VjdGlvbiIsImNhcmRzQ29udGFpbmVyIiwicmVwbGFjZVdpdGgiLCJ0cmFpbmluZ1R5cGVzIiwidHlwZUtleSIsInR5cGVOYW1lIiwiY2FyZEl0ZW0iLCJjYXJkSW1hZ2UiLCJjYXJkTmFtZSIsInN1YlNlY3Rpb25LZXkiLCJ0cmFpbmluZ0tleSIsImN1cnJlbnRUYXJnZXQiLCJpbml0VHJhaW5pbmciLCJnZXRTZWN0aW9uRGF0YUJ5TmFtZSIsInN1YlNlY3Rpb25OYW1lIiwic3ViU2VjdGlvbiIsInZhbHVlcyIsInRyYWluaW5nc0l0ZW1zIiwiZmluZCIsInRyYWluaW5ncyIsInJvdGF0ZUNhcmQiLCJ0YXJnZXRDYXJkTmFtZSIsImNhcmQiLCJ0YXJnZXRDYXJkQmxvY2siLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlQ29udGVudCIsImN1cnJlbnRCbG9jayIsIm5ld0Jsb2NrIiwicGFyZW50QmxvY2siLCJwcmVwZW5kIiwiaW5pdFN1YlNlY3Rpb25IZWFkaW5nIiwic2VjdGlvbkhlYWRpbmciLCJpbml0VHJhaW5DYXJkcyIsImNhcmRCbG9jayIsImtleSIsImNhcmRMaW5rIiwiaW1hZ2UiLCJjYXJkQ29udGVudCIsImNhcmRSb3RhdGVCdXR0b24iLCJjYXJkQmFja0l0ZW0iLCJjYXJkQmFja0Rlc2NyIiwiZGVzY3JpcHRpb24iLCJjYXJkQmFja0NvbnRlbnQiLCJjYXJkQmFja05hbWUiLCJzZWN0aW9uSGVhZGVyIiwic2VjdGlvbkhlYWRpbmdDb250YWluZXIiLCJ0cmFpbmluZ0luZm8iLCJzdWJTZWN0aW9uVHJhaW5pbmciLCJ0cmFpbmluZ0NvbnRhaW5lciIsInRyYWluaW5nQ2FyZCIsImJnIiwiZ2FtZSIsImluaXRHYW1lIiwiZ2FtZUxldmVsIiwic3RhcnRHYW1lIiwic3RhdGUiLCJzZXRBY3RpdmVNZW51SXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51QmFja2dyb3VuZCIsIm92ZXJsYXlQYWdlIiwidGV4dE1lbnVJY29uIiwibWVudUl0ZW1JY29ucyIsImluY2x1ZGVzIiwibGluayIsImVhc3kiLCJ0ZXJtc0NvdW50IiwibWF4VGVybSIsImFuc3dlcnNDb3VudCIsIm1lZGl1bSIsImdhbWVTdGF0dXMiLCJpbml0Iiwic3RhcnQiLCJzdG9wIiwibWl4QW5zd2VycyIsImFyciIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiZ2V0QW5zd2VycyIsImNvcnJlY3RBbnN3ZXIiLCJhbnN3ZXJzIiwibGVuZ3RoIiwibmV4dEFuc3dlciIsInJvdW5kIiwicHVzaCIsImdlbmVyYXRlRXhhbXBsZSIsInRlcm1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwicmVkdWNlIiwic3VtIiwidGVybSIsInF1ZXN0aW9uIiwiam9pbiIsInJlbmRlclRpbWVyIiwidGltZSIsImVsZW0iLCJyZW5kZXJRdWVzdGlvbiIsInJlbmRlckFuc3dlcnMiLCJleGFtcGxlIiwic3VjY2Vzc0hhbmRsZXIiLCJmYWlsSGFuZGxlciIsImFuc3dlcnNDb250YWluZXIiLCJhbnN3ZXIiLCJidXR0b24iLCJyZW5kZXJIZWxwQnV0dG9ucyIsImJ1dHRvbkV4aXQiLCJidXR0b25Tb3VuZCIsImJ1dHRvbkluZm8iLCJyZW5kZXJFeGFtcGxlIiwiZ2FtZU9iaiIsImNvbnRhaW5lciIsImxldmVsIiwidGltZXIiLCJkdXJhdGlvbiIsIm5ld0dhbWVTdGF0ZSIsInNjb3JlIiwic3RhdHVzIiwibmV3RXhhbXBsZSIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBQSxvREFBVSxHLENBRVY7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQ0FGLGFBQWEsQ0FBQ0csV0FBZCxHQUE0QixFQUE1QjtBQUNBSCxhQUFhLENBQUNJLFdBQWQsQ0FBMEJDLHNEQUFZLEVBQXRDLEUsQ0FFQTs7QUFDQUMsb0RBQVUsRyxDQUVWOztBQUNBQyx1REFBVSxHLENBRVY7O0FBQ0FDLDJEQUFjLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQyxTQUFTRixVQUFULEdBQXNCO0FBQ25DO0FBQ0EsTUFBTUcsVUFBVSxHQUFHUixRQUFRLENBQUNTLGFBQVQsQ0FBdUIs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QzNLLFdBQVYsQ0FBc0IySSxPQUF0QjtBQUVBLE1BQU13QyxPQUFPLEdBQUdkLGlCQUFpQixFQUFqQztBQUNBTSxXQUFTLENBQUMzSyxXQUFWLENBQXNCbUwsT0FBdEI7QUFDRDs7QUFFTSxTQUFTcEUsUUFBVCxDQUFrQjZELEtBQWxCLEVBQXlCRSxRQUF6QixFQUFtQ0gsU0FBbkMsRUFBOEM7QUFDbkQsU0FBTztBQUNMSyxTQUFLLEVBQUUsQ0FERjtBQUVMSixTQUFLLEVBQUxBLEtBRks7QUFHTEUsWUFBUSxFQUFSQSxRQUhLO0FBSUxHLFVBQU0sRUFBRWpELFVBQVUsQ0FBQ0MsSUFKZDtBQUtMMEMsYUFBUyxFQUFUQTtBQUxLLEdBQVA7QUFPRDtBQUVNLFNBQVMxRCxTQUFULENBQW1CeUQsT0FBbkIsRUFBNEI7QUFDakMsTUFBTVgsT0FBTyxHQUFHZixlQUFlLENBQUMwQixPQUFPLENBQUNFLEtBQVQsQ0FBL0I7O0FBQ0EsTUFBTUcsWUFBWSxtQ0FBUUwsT0FBUjtBQUFpQk8sVUFBTSxFQUFFakQsVUFBVSxDQUFDRTtBQUFwQyxJQUFsQjs7QUFDQXVDLGVBQWEsQ0FBQ00sWUFBRCxFQUFlaEIsT0FBZixDQUFiO0FBRUEsU0FBT2dCLFlBQVA7QUFDRCxDOzs7Ozs7VUMzSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdEhlYWRlciBmcm9tICcuL2luaXRIZWFkZXInO1xyXG5pbXBvcnQgaW5pdE1haW5QYWdlIGZyb20gJy4vaW5pdE1haW5QYWdlJztcclxuaW1wb3J0IGluaXRGb290ZXIgZnJvbSAnLi9pbml0Rm9vdGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTWVudSwgYWN0aXZlTWVudUl0ZW0gfSBmcm9tICcuL3RvZ2dsZU1lbnUnO1xyXG5cclxuLy8gaW5pdCBoZWFkZXJcclxuaW5pdEhlYWRlcigpO1xyXG5cclxuLy8gaW5pdCBtYWluIHBhZ2VcclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5tYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5pdE1haW5QYWdlKCkpO1xyXG5cclxuLy8gaW5pdCBoZWFkZXJcclxuaW5pdEZvb3RlcigpO1xyXG5cclxuLy8gb3BlbiBhbmQgY2xvc2UgbW9iaWxlIG1lbnVcclxudG9nZ2xlTWVudSgpO1xyXG5cclxuLy8gYWN0aXZlIGRlc2t0b3AgbWVudSBpdGVtXHJcbmFjdGl2ZU1lbnVJdGVtKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRGb290ZXIoKSB7XHJcbiAgLy8gaW5pdCBmb290ZXJcclxuICBjb25zdCBwYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgcGFnZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJywgJ2Zvb3RlcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUZvb3Rlcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGF1dGhvciBpbmZvXHJcbiAgY29uc3QgcGFnZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2luZm8nKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnMjAyMCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3J1c2Frb3ZhLWx5dWRtaWxhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UnVzYWtvdmEgTHl1ZG1pbGE8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NuYWlwcDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ZdXJ5IEhhbHVzaGtvPC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlSW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGxvZ29cclxuICBjb25zdCBwYWdlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fbG9nbycpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL3JzX3NjaG9vbF9sb2dvLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiPjwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUxvZ29Db250YWluZXIpO1xyXG59XHJcbiIsImltcG9ydCBpbml0TWVudSBmcm9tICcuL2luaXRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgLy8gaW5pdCBoZWFkZXJcclxuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcclxuXHJcbiAgLy8gaW5zZXJ0IG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1lbnUgPSBpbml0TWVudSgpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7XHJcblxyXG4gIC8vIGluc2VydCBtb2JpbGUgbmF2IG1lbnUgdG8gaGVhZGVyXHJcbiAgY29uc3QgbmF2TW9iaWxlTWVudSA9IGluaXRNZW51KHRydWUpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TW9iaWxlTWVudSk7XHJcblxyXG4gIC8vIGluaXQgbWFpbiBjb250YWluZXJcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNYWluUGFnZSgpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgcGFnZSBjb250YWluZXJcclxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBpbml0IGgxXHJcbiAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ1NtYXJ0IEtpZHMnO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xyXG5cclxuICAvLyBpbml0IGgyXHJcbiAgY29uc3QgcGFnZVN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHBhZ2VTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LDQttC10YDRiyDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQv9Cw0LzRj9GC0LgsINCy0L3QuNC80LDQvdC40Y8sINC70L7Qs9C40LrQuCDQuCDQvNGL0YjQu9C10L3QuNGPJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VTdWJIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsb2dpbiBidXR0b25cclxuICBjb25zdCBidXR0b25Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnLCAnYnRuLWxvZ2luJyk7XHJcbiAgYnV0dG9uTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkxvZ2luKTtcclxuXHJcbiAgLy8gaW5pdCByZWdpc3RlciBidXR0b25cclxuICBjb25zdCByZWdpc3RlckxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1yZWdpc3RlcicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4udGV4dENvbnRlbnQgPSAn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZ2lzdGVyTG9naW4pO1xyXG5cclxuICByZXR1cm4gcGFnZUNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1haW5QYWdlIGZyb20gJy4vaW5pdE1haW5QYWdlJztcclxuaW1wb3J0IGluaXRTZWN0aW9uIGZyb20gJy4vaW5pdFNlY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVQYWdlTmFtZSwgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuLy8gaW1wb3J0IGluaXRTdGF0aXN0aWNQYWdlIGZyb20gJy4vc3RhdGlzdGljUGFnZSc7XHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgbWFpbjogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICB0cmFpbmluZzogJ9Ci0YDQtdC90LDQttC10YDRiycsXHJcbiAgc3RhdGlzdGljOiAn0KHRgtCw0YLQuNGB0YLQuNC60LAnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBsZXQgcGFnZUNvbnRlbnQ7XHJcblxyXG4gIGlmIChzZWN0aW9uTmFtZSA9PT0gJ21haW4nKSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRNYWluUGFnZSgpO1xyXG4gIH0gZWxzZSBpZiAoc2VjdGlvbk5hbWUgPT09ICdzdGF0aXN0aWMnKSB7XHJcbiAgICAvLyBwYWdlQ29udGVudCA9IGluaXRTdGF0aXN0aWNQYWdlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2VDb250ZW50ID0gaW5pdFNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxuXHJcbiAgc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWVudShtb2JpbGUgPSBmYWxzZSkge1xyXG4gIC8vIGluaXQgbmF2IG1lbnVcclxuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJywgJ25hdmJhci1leHBhbmQtbGcnKTtcclxuICB9XHJcblxyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIC8vIGluaXQgbWVudSB0b2dnbGVcclxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LmFkZCgnbWVudV9fdG9nZ2xlJyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVUb2dnbGUpO1xyXG5cclxuICAgIC8vIGluaXQgbWVudSBpY29uXHJcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2ljb24nLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIG1lbnVJY29uLnRleHRDb250ZW50ID0gJ21lbnUnO1xyXG4gICAgbWVudVRvZ2dsZS5hcHBlbmRDaGlsZChtZW51SWNvbik7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IG1lbnUgbGlzdFxyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpbml0IG1lbnUgY29udGFpbmVyXHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJywgJ25hdmJhci1jb2xsYXBzZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2JywgJ21yLWF1dG8nKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWVudUl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtXHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtJyk7XHJcbiAgICBpZiAoIW1vYmlsZSkge1xyXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtID09PSBhY3RpdmVQYWdlTmFtZSkge1xyXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbWVudUl0ZW0uZGF0YXNldC5uYW1lID0gaXRlbTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuXHJcbiAgICBpZiAobW9iaWxlKSB7XHJcbiAgICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW0gaWNvblxyXG4gICAgICBjb25zdCBtZW51SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIG1lbnVJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKCdsaW5rX19pY29uJyk7XHJcbiAgICAgIG1lbnVJdGVtSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvaW1nL2ljb25zL2ljb24tJHtpdGVtfS5wbmdcIilgO1xyXG4gICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW0gbGlua1xyXG4gICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWVudUl0ZW1MaW5rLmNsYXNzTGlzdC5hZGQobW9iaWxlID8gJ21lbnVfX2xpbmsnIDogJ25hdi1saW5rJyk7XHJcbiAgICBtZW51SXRlbUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2l0ZW19YCk7XHJcbiAgICBtZW51SXRlbUxpbmsuZGF0YXNldC5zZWN0aW9uID0gaXRlbTtcclxuICAgIG1lbnVJdGVtTGluay50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpdGVtXTtcclxuICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUxpbmspO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmF2TWVudTtcclxufVxyXG4iLCIvLyBpbXBvcnQgeyBzZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgaW5pdFN1YlNlY3Rpb24gZnJvbSAnLi9pbml0U3ViU2VjdGlvbic7XHJcbmltcG9ydCB7IHRyYWluaW5nVHlwZXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uO1xyXG4gIGNvbnN0IGNhcmRzRWxlbWVudHMgPSBpbml0U3ViU2VjdGlvbihzZWN0aW9uTmFtZSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLnJlcGxhY2VXaXRoKGNhcmRzRWxlbWVudHMpO1xyXG5cclxuICAvLyBzZXRBY3RpdmVQYWdlTmFtZShzZWN0aW9uTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTZWN0aW9uKCkge1xyXG4gIC8vIHJlbW92ZSBjbGFzcyBvZiBzdWJzZWN0aW9uXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3Vic2VjdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBjYXJkcyBjb250YWluZXJcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicsICdjYXJkcycpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzXHJcbiAgdHJhaW5pbmdUeXBlcy5mb3JFYWNoKCh7IHR5cGVLZXksIHR5cGVOYW1lIH0pID0+IHtcclxuICAgIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScpO1xyXG4gICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEl0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgY2FyZCBpbWFnZVxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1nJyk7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9iZy9iZy0ke3R5cGVLZXl9LmpwZ1wiKWA7XHJcbiAgICBjYXJkSW1hZ2UuZGF0YXNldC5zZWN0aW9uID0gdHlwZUtleTtcclxuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSB0eXBlTmFtZTtcclxuICAgIGNhcmROYW1lLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgaW5pdFRyYWluaW5nIGZyb20gJy4vaW5pdFRyYWluaW5nJztcclxuaW1wb3J0IHsgdHJhaW5pbmdUeXBlcywgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbi8vIGltcG9ydCB7IHNhdmVSZXN1bHQgfSBmcm9tICcuL3N0YXRpc3RpYyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSwgc3ViU2VjdGlvbktleSkge1xyXG4gIGNvbnN0IHRyYWluaW5nS2V5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHJhaW5pbmc7XHJcbiAgY29uc3QgdHJhaW5pbmcgPSBpbml0VHJhaW5pbmcodHJhaW5pbmdLZXksIHN1YlNlY3Rpb25LZXkpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aCh0cmFpbmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25EYXRhQnlOYW1lKHN1YlNlY3Rpb25OYW1lKSB7XHJcbiAgY29uc3Qgc3ViU2VjdGlvbiA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdzSXRlbXMpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbk5hbWUpO1xyXG4gIHJldHVybiBzdWJTZWN0aW9uLnRyYWluaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlQ2FyZChlKSB7XHJcbiAgY29uc3QgdGFyZ2V0Q2FyZE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJkO1xyXG4gIGNvbnN0IHRhcmdldENhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcy0ke3RhcmdldENhcmROYW1lfWApO1xyXG5cclxuICB0YXJnZXRDYXJkQmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2Jsb2NrX2hvdmVyJyk7XHJcblxyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VDb250ZW50KGN1cnJlbnRCbG9jaywgbmV3QmxvY2ssIHBhcmVudEJsb2NrKSB7XHJcbiAgaWYgKGN1cnJlbnRCbG9jaykge1xyXG4gICAgY3VycmVudEJsb2NrLnJlcGxhY2VXaXRoKG5ld0Jsb2NrKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50QmxvY2sucHJlcGVuZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcoc3ViU2VjdGlvbktleSA9ICcnKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcblxyXG4gIGNvbnN0IHN1YlNlY3Rpb25OYW1lID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ1R5cGVzKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IHN1YlNlY3Rpb25OYW1lLnR5cGVOYW1lO1xyXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRyYWluQ2FyZHMoY2FyZHNDb250YWluZXIsIGNhcmRzRWxlbWVudHMsIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjYXJkc0VsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIC8vIGluaXQgYmxvY2sgZm9yIGNhcmRzXHJcbiAgICBjb25zdCBjYXJkQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCbG9jay5jbGFzc0xpc3QuYWRkKCdjYXJkc19fYmxvY2snLCBgY2FyZHMtJHtjYXJkLmtleX1gKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRCbG9jayk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGxpbmtcclxuICAgIGNvbnN0IGNhcmRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY2FyZExpbmsuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbGluaycpO1xyXG4gICAgY2FyZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2NhcmQua2V5fWApO1xyXG4gICAgY2FyZEJsb2NrLmFwcGVuZENoaWxkKGNhcmRMaW5rKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJywgJ2NhcmRzX19mcm9udCcpO1xyXG4gICAgY2FyZEl0ZW0uZGF0YXNldC50cmFpbmluZyA9IGNhcmQua2V5O1xyXG4gICAgY2FyZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjbGlja0hhbmRsZXIoZSwgc3ViU2VjdGlvbktleSk7XHJcbiAgICAgIC8vIHNhdmVSZXN1bHQoY2FyZC53b3JkLCAndHJhaW5lZCcpO1xyXG4gICAgfSk7XHJcbiAgICBjYXJkTGluay5hcHBlbmRDaGlsZChjYXJkSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGltYWdlXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvJHtjYXJkLmltYWdlfVwiKWA7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIHJvdGF0ZSBidXR0b25cclxuICAgIGNvbnN0IGNhcmRSb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbicsICdtYXRlcmlhbC1pY29ucycpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAncm90YXRlX2xlZnQnO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFJvdGF0ZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEJhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2JhY2snKTtcclxuICAgIGNhcmRCYWNrSXRlbS5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRCYWNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcm90YXRlQ2FyZCk7XHJcbiAgICBjYXJkQmxvY2suYXBwZW5kQ2hpbGQoY2FyZEJhY2tJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgY2FyZEJhY2tEZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci5jbGFzc0xpc3QuYWRkKCdjYXJkX19kZXNjcicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci50ZXh0Q29udGVudCA9IGNhcmQuZGVzY3JpcHRpb247XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tEZXNjcik7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGNvbnRlbnRcclxuICAgIGNvbnN0IGNhcmRCYWNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKTtcclxuICAgIGNhcmRCYWNrSXRlbS5hcHBlbmRDaGlsZChjYXJkQmFja0NvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmRCYWNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmRCYWNrTmFtZS50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcclxuICAgIGNhcmRCYWNrQ29udGVudC5hcHBlbmRDaGlsZChjYXJkQmFja05hbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U3ViU2VjdGlvbihzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcoc3ViU2VjdGlvbk5hbWUpO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2hlYWRpbmcnKTtcclxuICByZXBsYWNlQ29udGVudChzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciwgc2VjdGlvbkhlYWRlciwgbWFpbkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gZ2V0IGluZm8gZm9yIGNhcmRzXHJcbiAgY29uc3QgY2FyZHNFbGVtZW50cyA9IGdldFNlY3Rpb25EYXRhQnlOYW1lKHN1YlNlY3Rpb25OYW1lKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzLCBzdWJTZWN0aW9uTmFtZSk7XHJcblxyXG4gIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyB0cmFpbmluZ3NJdGVtcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuaW1wb3J0IHsgaW5pdEdhbWUsIHN0YXJ0R2FtZSwgZ2FtZUxldmVsIH0gZnJvbSAnLi90cmFpbmluZ3MvYWRkaXRpb24nO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5wcmVwZW5kKG5ld0Jsb2NrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uSGVhZGluZyh0cmFpbmluZ0luZm8pIHtcclxuICAvLyBpbml0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHNlY3Rpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX2hlYWRpbmcnKTtcclxuICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IHRyYWluaW5nSW5mby5uYW1lO1xyXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uVHJhaW5pbmcgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBjb25zdCB0cmFpbmluZ0luZm8gPSBPYmplY3QudmFsdWVzKHN1YlNlY3Rpb25UcmFpbmluZy50cmFpbmluZ3MpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IHRyYWluaW5nS2V5LFxyXG4gICk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmcnLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjYXJkXHJcbiAgY29uc3QgdHJhaW5pbmdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDYXJkLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19jYXJkJywgJ2NhcmRzX19pdGVtJywgdHJhaW5pbmdJbmZvLmtleSk7XHJcbiAgdHJhaW5pbmdDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke3RyYWluaW5nSW5mby5iZ31cIilgO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIC8vIGluaXQgZ2FtZVxyXG4gIGNvbnN0IGdhbWUgPSBpbml0R2FtZShnYW1lTGV2ZWwuZWFzeSwgNjAsIHRyYWluaW5nQ2FyZCk7XHJcbiAgc3RhcnRHYW1lKGdhbWUpO1xyXG4gIHJldHVybiB0cmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG4iLCJjb25zdCBzdGF0ZSA9IHtcclxuICBhY3RpdmVQYWdlTmFtZTogJ21haW4nLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2VOYW1lKG5hbWUpIHtcclxuICBzdGF0ZS5hY3RpdmVQYWdlTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQYWdlTmFtZSgpIHtcclxuICByZXR1cm4gc3RhdGUuYWN0aXZlUGFnZU5hbWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKV07XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXQubmFtZSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faWNvbicpO1xyXG5cclxuICBjb25zdCBtZW51QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21lbnVfb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBvdmVybGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5UGFnZSk7XHJcblxyXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHRNZW51SWNvbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSB0ZXh0TWVudUljb24gPT09ICdtZW51JyA/ICdjbG9zZScgOiAnbWVudSc7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1JY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua19faWNvbicpXTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAobWVudUljb24udGV4dENvbnRlbnQgPT09ICdjbG9zZSdcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVCYWNrZ3JvdW5kXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51SWNvblxyXG4gICAgICAmJiAhbWVudUl0ZW1JY29ucy5pbmNsdWRlcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBtZW51TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRyYWluaW5nVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0eXBlTmFtZTogJ9Cf0LDQvNGP0YLRjCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHR5cGVOYW1lOiAn0JLQvdC40LzQsNC90LjQtScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHlwZU5hbWU6ICfQm9C+0LPQuNC60LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHR5cGVOYW1lOiAn0JzRi9GI0LvQtdC90LjQtScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFpbmluZ3NJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4JyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeDEnLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXguanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7QuSDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4MicsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgzJyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnY2xpY2snLFxyXG4gICAgICAgIG5hbWU6ICfQmtC70LjQui3QmtC70LjQuicsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvYXR0ZW50aW9uL2NsaWNrLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINCy0L3QuNC80LDQvdC40Y8nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdsb2dpYycsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2FkZGluZycsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LvQvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL2FkZGluZy5qcGcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2FkZGluZy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICd0aGlua2luZycsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ3VuaWt1bScsXHJcbiAgICAgICAgbmFtZTogJ9Cj0L3QuNC60YPQvCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvdGhpbmtpbmcvdW5pa3VtLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0LPQviDQvNGL0YjQu9C10L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVMZXZlbCA9IHtcclxuICBlYXN5OiB7XHJcbiAgICB0ZXJtc0NvdW50OiAyLFxyXG4gICAgbWF4VGVybTogMjAsXHJcbiAgICBhbnN3ZXJzQ291bnQ6IDMsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIHRlcm1zQ291bnQ6IDMsXHJcbiAgICBtYXhUZXJtOiA1MCxcclxuICAgIGFuc3dlcnNDb3VudDogNSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZVN0YXR1cyA9IHtcclxuICBpbml0OiAnaW5pdCcsXHJcbiAgc3RhcnQ6ICdzdGFydCcsXHJcbiAgc3RvcDogJ3N0b3AnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWl4QW5zd2VycyhhcnIpIHtcclxuICByZXR1cm4gWy4uLmFycl0uc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5zd2Vycyhjb3JyZWN0QW5zd2VyLCBtYXhUZXJtLCBhbnN3ZXJzQ291bnQpIHtcclxuICBjb25zdCBhbnN3ZXJzID0gW2NvcnJlY3RBbnN3ZXJdO1xyXG4gIHdoaWxlIChhbnN3ZXJzLmxlbmd0aCA8IGFuc3dlcnNDb3VudCkge1xyXG4gICAgY29uc3QgbmV4dEFuc3dlciA9IGNvcnJlY3RBbnN3ZXIgKyBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIG1heFRlcm0gKiAwLjUpO1xyXG4gICAgaWYgKCFhbnN3ZXJzLmluY2x1ZGVzKG5leHRBbnN3ZXIpKSB7XHJcbiAgICAgIGFuc3dlcnMucHVzaChuZXh0QW5zd2VyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1peEFuc3dlcnMoYW5zd2Vycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRXhhbXBsZSh7IHRlcm1zQ291bnQsIG1heFRlcm0sIGFuc3dlcnNDb3VudCB9KSB7XHJcbiAgY29uc3QgdGVybXMgPSBBcnJheSh0ZXJtc0NvdW50KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXhUZXJtKSArIDEpO1xyXG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSB0ZXJtcy5yZWR1Y2UoKHN1bSwgdGVybSkgPT4gc3VtICsgdGVybSk7XHJcbiAgY29uc3QgYW5zd2VycyA9IGdldEFuc3dlcnMoY29ycmVjdEFuc3dlciwgbWF4VGVybSwgYW5zd2Vyc0NvdW50KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0aW9uOiB0ZXJtcy5qb2luKCcgKyAnKSxcclxuICAgIGNvcnJlY3RBbnN3ZXIsXHJcbiAgICBhbnN3ZXJzLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRpbWVyKHRpbWUpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKCdhZGRpbmdfX3RpbWVyJyk7XHJcbiAgZWxlbS50ZXh0Q29udGVudCA9IHRpbWU7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclF1ZXN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnYWRkaW5nX19xdWVzdGlvbicpO1xyXG4gIGVsZW0udGV4dENvbnRlbnQgPSBxdWVzdGlvbjtcclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQW5zd2VycyhleGFtcGxlLCBzdWNjZXNzSGFuZGxlciwgZmFpbEhhbmRsZXIpIHtcclxuICBjb25zdCBhbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYW5zd2Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRpbmdfX2Fuc3dlcnMnKTtcclxuXHJcbiAgZXhhbXBsZS5hbnN3ZXJzLmZvckVhY2goKGFuc3dlcikgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYW5zd2VyO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhhbXBsZS5jb3JyZWN0QW5zd2VyID09PSBhbnN3ZXJcclxuICAgICAgPyBzdWNjZXNzSGFuZGxlclxyXG4gICAgICA6IGZhaWxIYW5kbGVyKTtcclxuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFuc3dlcnNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlbHBCdXR0b25zKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZGluZ19fYnV0dG9ucycpO1xyXG5cclxuICAvLyBpbml0IGV4aXQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkV4aXQuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYnV0dG9uRXhpdC50ZXh0Q29udGVudCA9ICfQktGL0LnRgtC4JztcclxuICBidXR0b25FeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRXhpdCk7XHJcblxyXG4gIC8vIGluaXQgc291bmQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uU291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b25Tb3VuZC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICfQl9Cy0YPQuic7XHJcbiAgYnV0dG9uU291bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Tb3VuZCk7XHJcblxyXG4gIC8vIGluaXQgaW5mbyBidXR0b25cclxuICBjb25zdCBidXR0b25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uSW5mby5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBidXR0b25JbmZvLnRleHRDb250ZW50ID0gJ9CY0L3RhNC+JztcclxuICBidXR0b25JbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uSW5mbyk7XHJcblxyXG4gIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeGFtcGxlKGdhbWVPYmosIGV4YW1wbGUpIHtcclxuICBjb25zdCB7IGNvbnRhaW5lciwgbGV2ZWwgfSA9IGdhbWVPYmo7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBjb25zdCB0aW1lciA9IHJlbmRlclRpbWVyKGdhbWVPYmouZHVyYXRpb24pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lcik7XHJcblxyXG4gIGNvbnN0IHF1ZXN0aW9uID0gcmVuZGVyUXVlc3Rpb24oZXhhbXBsZS5xdWVzdGlvbik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uKTtcclxuXHJcbiAgY29uc3QgbmV3R2FtZVN0YXRlID0geyAuLi5nYW1lT2JqIH07XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbmV3R2FtZVN0YXRlLnNjb3JlICs9IDE7XHJcbiAgICBpZiAobmV3R2FtZVN0YXRlLnN0YXR1cyA9PT0gZ2FtZVN0YXR1cy5zdGFydCkge1xyXG4gICAgICBjb25zdCBuZXdFeGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGxldmVsKTtcclxuICAgICAgcmVuZGVyRXhhbXBsZShuZXdHYW1lU3RhdGUsIG5ld0V4YW1wbGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZhaWxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKG5ld0dhbWVTdGF0ZS5zdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgICAgY29uc3QgbmV3RXhhbXBsZSA9IGdlbmVyYXRlRXhhbXBsZShnYW1lT2JqLmxldmVsKTtcclxuICAgICAgcmVuZGVyRXhhbXBsZShuZXdHYW1lU3RhdGUsIG5ld0V4YW1wbGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlcnMgPSByZW5kZXJBbnN3ZXJzKGV4YW1wbGUsIHN1Y2Nlc3NIYW5kbGVyLCBmYWlsSGFuZGxlcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFuc3dlcnMpO1xyXG5cclxuICBjb25zdCBidXR0b25zID0gcmVuZGVySGVscEJ1dHRvbnMoKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZShsZXZlbCwgZHVyYXRpb24sIGNvbnRhaW5lcikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzY29yZTogMCxcclxuICAgIGxldmVsLFxyXG4gICAgZHVyYXRpb24sXHJcbiAgICBzdGF0dXM6IGdhbWVTdGF0dXMuaW5pdCxcclxuICAgIGNvbnRhaW5lcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKGdhbWVPYmopIHtcclxuICBjb25zdCBleGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGdhbWVPYmoubGV2ZWwpO1xyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiwgc3RhdHVzOiBnYW1lU3RhdHVzLnN0YXJ0IH07XHJcbiAgcmVuZGVyRXhhbXBsZShuZXdHYW1lU3RhdGUsIGV4YW1wbGUpO1xyXG5cclxuICByZXR1cm4gbmV3R2FtZVN0YXRlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=