/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/game.js":
/*!*******************************!*\
  !*** ./src/assets/js/game.js ***!
  \*******************************/
/*! namespace exports */
/*! export gameLevel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gameStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLevel": () => /* binding */ gameLevel,
/* harmony export */   "gameStatus": () => /* binding */ gameStatus
/* harmony export */ });
var gameLevel = {
  easy: {
    name: 'легкий',
    duration: 60
  },
  medium: {
    name: 'средний',
    duration: 50
  },
  hard: {
    name: 'тяжелый',
    duration: 45
  }
};
var gameStatus = {
  init: 'init',
  start: 'start',
  stop: 'stop'
};

/***/ }),

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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/assets/js/game.js");
/* harmony import */ var _trainings_addition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings/addition */ "./src/assets/js/trainings/addition.js");
;



function closeOverlayHandler() {
  var overlayContainer = document.querySelector('.training__overlay');
  overlayContainer.classList.add('hidden');
}

function replaceContent(currentBlock, newBlock, parentBlock) {
  if (currentBlock) {
    currentBlock.replaceWith(newBlock);
  } else {
    parentBlock.appendChild(newBlock);
  }
}

function initSubSectionHeading(trainingInfo) {
  // init section header
  var sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  sectionHeading.textContent = trainingInfo.name;
  return sectionHeading;
}

function initInfoContainer(level, time, score) {
  var infoContainer = document.createElement('div');
  infoContainer.classList.add('training__info'); // init level info container

  var levelItem = document.createElement('div');
  levelItem.classList.add('training__level');
  levelItem.innerHTML = "<span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C:</span> ".concat(level.name);
  infoContainer.appendChild(levelItem); // init timer info container

  var timerItem = document.createElement('div');
  timerItem.classList.add('training__timer', 'timer');
  infoContainer.appendChild(timerItem); // init timer

  var timer = document.createElement('div');
  timer.classList.add('timer__item');
  timer.textContent = time;
  timerItem.appendChild(timer); // init score info container

  var scoreItem = document.createElement('div');
  scoreItem.classList.add('training__score');
  scoreItem.innerHTML = "<span>\u041E\u0447\u043A\u0438:</span> ".concat(score);
  infoContainer.appendChild(scoreItem);
  return infoContainer;
}

function initHelpButtons() {
  var buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('training__buttons'); // init exit button

  var buttonExit = document.createElement('i');
  buttonExit.classList.add('material-icons');
  buttonExit.setAttribute('title', 'Закончить тренировку');
  buttonExit.textContent = 'close';
  buttonExit.addEventListener('click', function () {});
  buttonsContainer.appendChild(buttonExit); // init sound button

  var buttonSound = document.createElement('i');
  buttonSound.classList.add('material-icons');
  buttonExit.setAttribute('title', 'Включить/выключить звук');
  buttonSound.textContent = 'volume_off';
  buttonSound.addEventListener('click', function () {});
  buttonsContainer.appendChild(buttonSound); // init info button

  var buttonInfo = document.createElement('i');
  buttonInfo.classList.add('material-icons');
  buttonExit.setAttribute('title', 'Прочитать правила');
  buttonInfo.textContent = 'help_outline';
  buttonInfo.addEventListener('click', function () {
    var overlay = document.querySelector('.training__overlay');
    overlay.classList.remove('hidden');
  });
  buttonsContainer.appendChild(buttonInfo);
  return buttonsContainer;
}

function initOverlay(content) {
  var overlayContainer = document.createElement('div');
  overlayContainer.classList.add('training__overlay', 'overlay', 'hidden'); // init overlay content

  var overlayContent = document.createElement('div');
  overlayContent.classList.add('overlay__content');
  overlayContent.innerHTML = content;
  overlayContainer.appendChild(overlayContent); // init overlay button

  var buttonOverlay = document.createElement('i');
  buttonOverlay.classList.add('material-icons');
  buttonOverlay.setAttribute('title', 'Закрыть');
  buttonOverlay.textContent = 'close';
  buttonOverlay.addEventListener('click', closeOverlayHandler);
  overlayContainer.appendChild(buttonOverlay);
  return overlayContainer;
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
  trainingContainer.appendChild(trainingCard); // init level, timer and score info container

  var info = initInfoContainer(_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy, _game__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy.duration, 0);
  var infoContainer = document.querySelector('.training__info');
  replaceContent(infoContainer, info, trainingCard); // init game container

  var gameContainer = document.createElement('div');
  gameContainer.classList.add('training__game');
  trainingCard.appendChild(gameContainer); // init game

  var game = (0,_trainings_addition__WEBPACK_IMPORTED_MODULE_2__.initGame)(_trainings_addition__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo.easy, gameContainer); // start game

  (0,_trainings_addition__WEBPACK_IMPORTED_MODULE_2__.startGame)(game); // init help buttons container

  var buttons = initHelpButtons();
  var buttonsContainer = document.querySelector('.training__buttons');
  replaceContent(buttonsContainer, buttons, trainingCard); // init overlay

  var overlay = initOverlay(trainingInfo.rules);
  var overlayContainer = document.querySelector('.training__overlay');
  replaceContent(overlayContainer, overlay, trainingCard);
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
    description: 'Тренажер для развития логики',
    rules: '<p>Необходимо в уме сложить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
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
/*! export gameLevelInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export startGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLevelInfo": () => /* binding */ gameLevelInfo,
/* harmony export */   "initGame": () => /* binding */ initGame,
/* harmony export */   "startGame": () => /* binding */ startGame
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/assets/js/game.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var gameLevelInfo = {
  easy: {
    termsCount: 2,
    maxTerm: 20,
    answersCount: 3
  },
  medium: {
    termsCount: 3,
    maxTerm: 40,
    answersCount: 4
  },
  hard: {
    termsCount: 4,
    maxTerm: 60,
    answersCount: 5
  }
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

function initQuestion(question) {
  var questionContainer = document.createElement('div');
  questionContainer.classList.add('adding__question');
  questionContainer.textContent = question;
  return questionContainer;
}

function initAnswers(example, successHandler, failHandler) {
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

function renderExample(gameObj, example) {
  var container = gameObj.container,
      level = gameObj.level;
  container.innerHTML = ''; // init question(example to sum) container

  var question = initQuestion(example.question);
  container.appendChild(question); // init answer buttons container

  var newGameState = _objectSpread({}, gameObj);

  var successHandler = function successHandler() {
    newGameState.score += 1;

    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(level);
      renderExample(newGameState, newExample);
    }
  };

  var failHandler = function failHandler() {
    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(gameObj.level);
      renderExample(newGameState, newExample);
    }
  };

  var answers = initAnswers(example, successHandler, failHandler);
  container.appendChild(answers);
}

function initGame(level, container) {
  return {
    score: 0,
    level: level,
    status: _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.init,
    container: container
  };
}
function startGame(gameObj) {
  var example = generateExample(gameObj.level);

  var newGameState = _objectSpread(_objectSpread({}, gameObj), {}, {
    status: _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9hZGRpdGlvbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZ2FtZUxldmVsIiwiZWFzeSIsIm5hbWUiLCJkdXJhdGlvbiIsIm1lZGl1bSIsImhhcmQiLCJnYW1lU3RhdHVzIiwiaW5pdCIsInN0YXJ0Iiwic3RvcCIsImluaXRIZWFkZXIiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImluaXRNYWluUGFnZSIsImluaXRGb290ZXIiLCJ0b2dnbGVNZW51IiwiYWN0aXZlTWVudUl0ZW0iLCJwYWdlRm9vdGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJwYWdlSW5mb0NvbnRhaW5lciIsImlubmVySFRNTCIsInBhZ2VMb2dvQ29udGFpbmVyIiwicGFnZUhlYWRlciIsIm5hdk1lbnUiLCJpbml0TWVudSIsIm5hdk1vYmlsZU1lbnUiLCJjb250YWlucyIsInJlbW92ZSIsInBhZ2VDb250YWluZXIiLCJwYWdlSGVhZGluZyIsInBhZ2VTdWJIZWFkaW5nIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbkxvZ2luIiwic2V0QXR0cmlidXRlIiwicmVnaXN0ZXJMb2dpbiIsIm1lbnVJdGVtcyIsIm1haW4iLCJ0cmFpbmluZyIsInN0YXRpc3RpYyIsImNsaWNrSGFuZGxlciIsImUiLCJzZWN0aW9uTmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJzZWN0aW9uIiwicGFnZUNvbnRlbnQiLCJpbml0U2VjdGlvbiIsInNldEFjdGl2ZVBhZ2VOYW1lIiwibW9iaWxlIiwibWVudVRvZ2dsZSIsIm1lbnVJY29uIiwiYWN0aXZlUGFnZU5hbWUiLCJnZXRBY3RpdmVQYWdlTmFtZSIsIm1lbnVMaXN0IiwibWVudUNvbnRhaW5lciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsIm1lbnVJdGVtIiwibWVudUl0ZW1JY29uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZW51SXRlbUxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FyZHNFbGVtZW50cyIsImluaXRTdWJTZWN0aW9uIiwiY2FyZHNDb250YWluZXIiLCJyZXBsYWNlV2l0aCIsInRyYWluaW5nVHlwZXMiLCJ0eXBlS2V5IiwidHlwZU5hbWUiLCJjYXJkSXRlbSIsImNhcmRJbWFnZSIsImNhcmROYW1lIiwic3ViU2VjdGlvbktleSIsInRyYWluaW5nS2V5IiwiY3VycmVudFRhcmdldCIsImluaXRUcmFpbmluZyIsImdldFNlY3Rpb25EYXRhQnlOYW1lIiwic3ViU2VjdGlvbk5hbWUiLCJzdWJTZWN0aW9uIiwidmFsdWVzIiwidHJhaW5pbmdzSXRlbXMiLCJmaW5kIiwidHJhaW5pbmdzIiwicm90YXRlQ2FyZCIsInRhcmdldENhcmROYW1lIiwiY2FyZCIsInRhcmdldENhcmRCbG9jayIsInRvZ2dsZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlcGxhY2VDb250ZW50IiwiY3VycmVudEJsb2NrIiwibmV3QmxvY2siLCJwYXJlbnRCbG9jayIsInByZXBlbmQiLCJpbml0U3ViU2VjdGlvbkhlYWRpbmciLCJzZWN0aW9uSGVhZGluZyIsImluaXRUcmFpbkNhcmRzIiwiY2FyZEJsb2NrIiwia2V5IiwiY2FyZExpbmsiLCJpbWFnZSIsImNhcmRDb250ZW50IiwiY2FyZFJvdGF0ZUJ1dHRvbiIsImNhcmRCYWNrSXRlbSIsImNhcmRCYWNrRGVzY3IiLCJkZXNjcmlwdGlvbiIsImNhcmRCYWNrQ29udGVudCIsImNhcmRCYWNrTmFtZSIsInNlY3Rpb25IZWFkZXIiLCJzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciIsImNsb3NlT3ZlcmxheUhhbmRsZXIiLCJvdmVybGF5Q29udGFpbmVyIiwidHJhaW5pbmdJbmZvIiwiaW5pdEluZm9Db250YWluZXIiLCJsZXZlbCIsInRpbWUiLCJzY29yZSIsImluZm9Db250YWluZXIiLCJsZXZlbEl0ZW0iLCJ0aW1lckl0ZW0iLCJ0aW1lciIsInNjb3JlSXRlbSIsImluaXRIZWxwQnV0dG9ucyIsImJ1dHRvbkV4aXQiLCJidXR0b25Tb3VuZCIsImJ1dHRvbkluZm8iLCJvdmVybGF5IiwiaW5pdE92ZXJsYXkiLCJjb250ZW50Iiwib3ZlcmxheUNvbnRlbnQiLCJidXR0b25PdmVybGF5Iiwic3ViU2VjdGlvblRyYWluaW5nIiwidHJhaW5pbmdDb250YWluZXIiLCJ0cmFpbmluZ0NhcmQiLCJiZyIsImluZm8iLCJnYW1lQ29udGFpbmVyIiwiZ2FtZSIsImluaXRHYW1lIiwiZ2FtZUxldmVsSW5mbyIsInN0YXJ0R2FtZSIsImJ1dHRvbnMiLCJydWxlcyIsInN0YXRlIiwic2V0QWN0aXZlTWVudUl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUJhY2tncm91bmQiLCJvdmVybGF5UGFnZSIsInRleHRNZW51SWNvbiIsIm1lbnVJdGVtSWNvbnMiLCJpbmNsdWRlcyIsImxpbmsiLCJ0ZXJtc0NvdW50IiwibWF4VGVybSIsImFuc3dlcnNDb3VudCIsIm1peEFuc3dlcnMiLCJhcnIiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImdldEFuc3dlcnMiLCJjb3JyZWN0QW5zd2VyIiwiYW5zd2VycyIsImxlbmd0aCIsIm5leHRBbnN3ZXIiLCJyb3VuZCIsInB1c2giLCJnZW5lcmF0ZUV4YW1wbGUiLCJ0ZXJtcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInJlZHVjZSIsInN1bSIsInRlcm0iLCJxdWVzdGlvbiIsImpvaW4iLCJpbml0UXVlc3Rpb24iLCJxdWVzdGlvbkNvbnRhaW5lciIsImluaXRBbnN3ZXJzIiwiZXhhbXBsZSIsInN1Y2Nlc3NIYW5kbGVyIiwiZmFpbEhhbmRsZXIiLCJhbnN3ZXJzQ29udGFpbmVyIiwiYW5zd2VyIiwiYnV0dG9uIiwicmVuZGVyRXhhbXBsZSIsImdhbWVPYmoiLCJjb250YWluZXIiLCJuZXdHYW1lU3RhdGUiLCJzdGF0dXMiLCJuZXdFeGFtcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFNBQVMsR0FBRztBQUN2QkMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFB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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdhbWVMZXZlbCA9IHtcclxuICBlYXN5OiB7XHJcbiAgICBuYW1lOiAn0LvQtdCz0LrQuNC5JyxcclxuICAgIGR1cmF0aW9uOiA2MCxcclxuICB9LFxyXG4gIG1lZGl1bToge1xyXG4gICAgbmFtZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGR1cmF0aW9uOiA1MCxcclxuICB9LFxyXG4gIGhhcmQ6IHtcclxuICAgIG5hbWU6ICfRgtGP0LbQtdC70YvQuScsXHJcbiAgICBkdXJhdGlvbjogNDUsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU3RhdHVzID0ge1xyXG4gIGluaXQ6ICdpbml0JyxcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBzdG9wOiAnc3RvcCcsXHJcbn07XHJcbiIsImltcG9ydCBpbml0SGVhZGVyIGZyb20gJy4vaW5pdEhlYWRlcic7XHJcbmltcG9ydCBpbml0TWFpblBhZ2UgZnJvbSAnLi9pbml0TWFpblBhZ2UnO1xyXG5pbXBvcnQgaW5pdEZvb3RlciBmcm9tICcuL2luaXRGb290ZXInO1xyXG5pbXBvcnQgeyB0b2dnbGVNZW51LCBhY3RpdmVNZW51SXRlbSB9IGZyb20gJy4vdG9nZ2xlTWVudSc7XHJcblxyXG4vLyBpbml0IGhlYWRlclxyXG5pbml0SGVhZGVyKCk7XHJcblxyXG4vLyBpbml0IG1haW4gcGFnZVxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbm1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbml0TWFpblBhZ2UoKSk7XHJcblxyXG4vLyBpbml0IGhlYWRlclxyXG5pbml0Rm9vdGVyKCk7XHJcblxyXG4vLyBvcGVuIGFuZCBjbG9zZSBtb2JpbGUgbWVudVxyXG50b2dnbGVNZW51KCk7XHJcblxyXG4vLyBhY3RpdmUgZGVza3RvcCBtZW51IGl0ZW1cclxuYWN0aXZlTWVudUl0ZW0oKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEZvb3RlcigpIHtcclxuICAvLyBpbml0IGZvb3RlclxyXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBwYWdlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInLCAnZm9vdGVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlRm9vdGVyKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXIgYXV0aG9yIGluZm9cclxuICBjb25zdCBwYWdlSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9faW5mbycpO1xyXG4gIHBhZ2VJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcyMDIwIMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnVzYWtvdmEtbHl1ZG1pbGFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5SdXNha292YSBMeXVkbWlsYTwvYT4sIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc25haXBwMVwiIHRhcmdldD1cIl9ibGFua1wiPll1cnkgSGFsdXNoa288L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VJbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXIgbG9nb1xyXG4gIGNvbnN0IHBhZ2VMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19sb2dvJyk7XHJcbiAgcGFnZUxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cImFzc2V0cy9pbWcvcnNfc2Nob29sX2xvZ28uc3ZnXCIgYWx0PVwiUlMgU2Nob29sXCI+PC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlTG9nb0NvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRNZW51IGZyb20gJy4vaW5pdE1lbnUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcclxuICAvLyBpbml0IGhlYWRlclxyXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xyXG5cclxuICAvLyBpbnNlcnQgbmF2IG1lbnUgdG8gaGVhZGVyXHJcbiAgY29uc3QgbmF2TWVudSA9IGluaXRNZW51KCk7XHJcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChuYXZNZW51KTtcclxuXHJcbiAgLy8gaW5zZXJ0IG1vYmlsZSBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNb2JpbGVNZW51ID0gaW5pdE1lbnUodHJ1ZSk7XHJcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChuYXZNb2JpbGVNZW51KTtcclxuXHJcbiAgLy8gaW5pdCBtYWluIGNvbnRhaW5lclxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1haW5QYWdlKCkge1xyXG4gIC8vIHJlbW92ZSBjbGFzcyBvZiBzdWJzZWN0aW9uXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3Vic2VjdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBwYWdlIGNvbnRhaW5lclxyXG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIGluaXQgaDFcclxuICBjb25zdCBwYWdlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcGFnZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnU21hcnQgS2lkcyc7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgaDJcclxuICBjb25zdCBwYWdlU3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgcGFnZVN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSAn0KLRgNC10L3QsNC20LXRgNGLINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC/0LDQvNGP0YLQuCwg0LLQvdC40LzQsNC90LjRjywg0LvQvtCz0LjQutC4INC4INC80YvRiNC70LXQvdC40Y8nO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVN1YkhlYWRpbmcpO1xyXG5cclxuICAvLyBpbml0IGJ1dHRvbnMgY29udGFpbmVyXHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGxvZ2luIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tbG9naW4nKTtcclxuICBidXR0b25Mb2dpbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgYnV0dG9uTG9naW4udGV4dENvbnRlbnQgPSAn0KLRgNC10L3QuNGA0L7QstCw0YLRjNGB0Y8nO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTG9naW4pO1xyXG5cclxuICAvLyBpbml0IHJlZ2lzdGVyIGJ1dHRvblxyXG4gIGNvbnN0IHJlZ2lzdGVyTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnLCAnYnRuLXJlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi50ZXh0Q29udGVudCA9ICfQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8nO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVnaXN0ZXJMb2dpbik7XHJcblxyXG4gIHJldHVybiBwYWdlQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0TWFpblBhZ2UgZnJvbSAnLi9pbml0TWFpblBhZ2UnO1xyXG5pbXBvcnQgaW5pdFNlY3Rpb24gZnJvbSAnLi9pbml0U2VjdGlvbic7XHJcbmltcG9ydCB7IHNldEFjdGl2ZVBhZ2VOYW1lLCBnZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG4vLyBpbXBvcnQgaW5pdFN0YXRpc3RpY1BhZ2UgZnJvbSAnLi9zdGF0aXN0aWNQYWdlJztcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IHtcclxuICBtYWluOiAn0JPQu9Cw0LLQvdCw0Y8nLFxyXG4gIHRyYWluaW5nOiAn0KLRgNC10L3QsNC20LXRgNGLJyxcclxuICBzdGF0aXN0aWM6ICfQodGC0LDRgtC40YHRgtC40LrQsCcsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uO1xyXG4gIGxldCBwYWdlQ29udGVudDtcclxuXHJcbiAgaWYgKHNlY3Rpb25OYW1lID09PSAnbWFpbicpIHtcclxuICAgIHBhZ2VDb250ZW50ID0gaW5pdE1haW5QYWdlKCk7XHJcbiAgfSBlbHNlIGlmIChzZWN0aW9uTmFtZSA9PT0gJ3N0YXRpc3RpYycpIHtcclxuICAgIC8vIHBhZ2VDb250ZW50ID0gaW5pdFN0YXRpc3RpY1BhZ2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbihzZWN0aW9uTmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xyXG5cclxuICBzZXRBY3RpdmVQYWdlTmFtZShzZWN0aW9uTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNZW51KG1vYmlsZSA9IGZhbHNlKSB7XHJcbiAgLy8gaW5pdCBuYXYgbWVudVxyXG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCAnbmF2YmFyLWV4cGFuZC1sZycpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgLy8gaW5pdCBtZW51IHRvZ2dsZVxyXG4gICAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtZW51X190b2dnbGUnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZSk7XHJcblxyXG4gICAgLy8gaW5pdCBtZW51IGljb25cclxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZCgnbWVudV9faWNvbicsICdtYXRlcmlhbC1pY29ucycpO1xyXG4gICAgbWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSc7XHJcbiAgICBtZW51VG9nZ2xlLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgbWVudSBsaXN0XHJcbiAgY29uc3QgYWN0aXZlUGFnZU5hbWUgPSBnZXRBY3RpdmVQYWdlTmFtZSgpO1xyXG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbWVudV9fbGlzdCcpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGluaXQgbWVudSBjb250YWluZXJcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnLCAnbmF2YmFyLWNvbGxhcHNlJyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhci1uYXYnLCAnbXItYXV0bycpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhtZW51SXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW1cclxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcclxuICAgIGlmICghbW9iaWxlKSB7XHJcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGl0ZW0gPT09IGFjdGl2ZVBhZ2VOYW1lKSB7XHJcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBtZW51SXRlbS5kYXRhc2V0Lm5hbWUgPSBpdGVtO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG5cclxuICAgIGlmIChtb2JpbGUpIHtcclxuICAgICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbSBpY29uXHJcbiAgICAgIGNvbnN0IG1lbnVJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgbWVudUl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2ljb24nKTtcclxuICAgICAgbWVudUl0ZW1JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbi0ke2l0ZW19LnBuZ1wiKWA7XHJcbiAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbSBsaW5rXHJcbiAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51SXRlbUxpbmsuY2xhc3NMaXN0LmFkZChtb2JpbGUgPyAnbWVudV9fbGluaycgOiAnbmF2LWxpbmsnKTtcclxuICAgIG1lbnVJdGVtTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aXRlbX1gKTtcclxuICAgIG1lbnVJdGVtTGluay5kYXRhc2V0LnNlY3Rpb24gPSBpdGVtO1xyXG4gICAgbWVudUl0ZW1MaW5rLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2l0ZW1dO1xyXG4gICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtTGluayk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuYXZNZW51O1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IHNldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCBpbml0U3ViU2VjdGlvbiBmcm9tICcuL2luaXRTdWJTZWN0aW9uJztcclxuaW1wb3J0IHsgdHJhaW5pbmdUeXBlcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgY29uc3QgY2FyZHNFbGVtZW50cyA9IGluaXRTdWJTZWN0aW9uKHNlY3Rpb25OYW1lKTtcclxuXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJyk7XHJcbiAgY2FyZHNDb250YWluZXIucmVwbGFjZVdpdGgoY2FyZHNFbGVtZW50cyk7XHJcblxyXG4gIC8vIHNldEFjdGl2ZVBhZ2VOYW1lKHNlY3Rpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFNlY3Rpb24oKSB7XHJcbiAgLy8gcmVtb3ZlIGNsYXNzIG9mIHN1YnNlY3Rpb25cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IGNhcmRzIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJywgJ2NhcmRzJyk7XHJcblxyXG4gIC8vIGluaXQgY2FyZHNcclxuICB0cmFpbmluZ1R5cGVzLmZvckVhY2goKHsgdHlwZUtleSwgdHlwZU5hbWUgfSkgPT4ge1xyXG4gICAgY29uc3QgY2FyZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJyk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBjYXJkIGltYWdlXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvaW1nL2JnL2JnLSR7dHlwZUtleX0uanBnXCIpYDtcclxuICAgIGNhcmRJbWFnZS5kYXRhc2V0LnNlY3Rpb24gPSB0eXBlS2V5O1xyXG4gICAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XHJcblxyXG4gICAgLy8gaW5pdCBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IHR5cGVOYW1lO1xyXG4gICAgY2FyZE5hbWUuZGF0YXNldC5zZWN0aW9uID0gdHlwZUtleTtcclxuICAgIGNhcmROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0VHJhaW5pbmcgZnJvbSAnLi9pbml0VHJhaW5pbmcnO1xyXG5pbXBvcnQgeyB0cmFpbmluZ1R5cGVzLCB0cmFpbmluZ3NJdGVtcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuLy8gaW1wb3J0IHsgc2F2ZVJlc3VsdCB9IGZyb20gJy4vc3RhdGlzdGljJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlLCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgdHJhaW5pbmdLZXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50cmFpbmluZztcclxuICBjb25zdCB0cmFpbmluZyA9IGluaXRUcmFpbmluZyh0cmFpbmluZ0tleSwgc3ViU2VjdGlvbktleSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLnJlcGxhY2VXaXRoKHRyYWluaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VjdGlvbkRhdGFCeU5hbWUoc3ViU2VjdGlvbk5hbWUpIHtcclxuICBjb25zdCBzdWJTZWN0aW9uID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ3NJdGVtcykuZmluZCgoaXRlbSkgPT4gaXRlbS50eXBlS2V5ID09PSBzdWJTZWN0aW9uTmFtZSk7XHJcbiAgcmV0dXJuIHN1YlNlY3Rpb24udHJhaW5pbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGVDYXJkKGUpIHtcclxuICBjb25zdCB0YXJnZXRDYXJkTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNhcmQ7XHJcbiAgY29uc3QgdGFyZ2V0Q2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRzLSR7dGFyZ2V0Q2FyZE5hbWV9YCk7XHJcblxyXG4gIHRhcmdldENhcmRCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkc19fYmxvY2tfaG92ZXInKTtcclxuXHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5wcmVwZW5kKG5ld0Jsb2NrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uSGVhZGluZyhzdWJTZWN0aW9uS2V5ID0gJycpIHtcclxuICAvLyBpbml0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHNlY3Rpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX2hlYWRpbmcnKTtcclxuXHJcbiAgY29uc3Qgc3ViU2VjdGlvbk5hbWUgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nVHlwZXMpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS50eXBlS2V5ID09PSBzdWJTZWN0aW9uS2V5LFxyXG4gICk7XHJcblxyXG4gIHNlY3Rpb25IZWFkaW5nLnRleHRDb250ZW50ID0gc3ViU2VjdGlvbk5hbWUudHlwZU5hbWU7XHJcbiAgcmV0dXJuIHNlY3Rpb25IZWFkaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VHJhaW5DYXJkcyhjYXJkc0NvbnRhaW5lciwgY2FyZHNFbGVtZW50cywgc3ViU2VjdGlvbktleSkge1xyXG4gIGNhcmRzRWxlbWVudHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgLy8gaW5pdCBibG9jayBmb3IgY2FyZHNcclxuICAgIGNvbnN0IGNhcmRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19ibG9jaycsIGBjYXJkcy0ke2NhcmQua2V5fWApO1xyXG4gICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEJsb2NrKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgbGlua1xyXG4gICAgY29uc3QgY2FyZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjYXJkTGluay5jbGFzc0xpc3QuYWRkKCdjYXJkX19saW5rJyk7XHJcbiAgICBjYXJkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7Y2FyZC5rZXl9YCk7XHJcbiAgICBjYXJkQmxvY2suYXBwZW5kQ2hpbGQoY2FyZExpbmspO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBpdGVtXHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2Zyb250Jyk7XHJcbiAgICBjYXJkSXRlbS5kYXRhc2V0LnRyYWluaW5nID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNsaWNrSGFuZGxlcihlLCBzdWJTZWN0aW9uS2V5KTtcclxuICAgICAgLy8gc2F2ZVJlc3VsdChjYXJkLndvcmQsICd0cmFpbmVkJyk7XHJcbiAgICB9KTtcclxuICAgIGNhcmRMaW5rLmFwcGVuZENoaWxkKGNhcmRJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgaW1hZ2VcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgY2FyZEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke2NhcmQuaW1hZ2V9XCIpYDtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGNvbnRlbnRcclxuICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19jb250ZW50Jyk7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgcm90YXRlIGJ1dHRvblxyXG4gICAgY29uc3QgY2FyZFJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmRhdGFzZXQuY2FyZCA9IGNhcmQua2V5O1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdyb3RhdGVfbGVmdCc7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQ2FyZCk7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkUm90YXRlQnV0dG9uKTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBpdGVtXHJcbiAgICBjb25zdCBjYXJkQmFja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScsICdjYXJkc19fYmFjaycpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmRhdGFzZXQuY2FyZCA9IGNhcmQua2V5O1xyXG4gICAgY2FyZEJhY2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByb3RhdGVDYXJkKTtcclxuICAgIGNhcmRCbG9jay5hcHBlbmRDaGlsZChjYXJkQmFja0l0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIGRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBjYXJkQmFja0Rlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0Rlc2NyLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2Rlc2NyJyk7XHJcbiAgICBjYXJkQmFja0Rlc2NyLnRleHRDb250ZW50ID0gY2FyZC5kZXNjcmlwdGlvbjtcclxuICAgIGNhcmRCYWNrSXRlbS5hcHBlbmRDaGlsZChjYXJkQmFja0Rlc2NyKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgY29udGVudFxyXG4gICAgY29uc3QgY2FyZEJhY2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmFwcGVuZENoaWxkKGNhcmRCYWNrQ29udGVudCk7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZEJhY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja05hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZEJhY2tOYW1lLnRleHRDb250ZW50ID0gY2FyZC5uYW1lO1xyXG4gICAgY2FyZEJhY2tDb250ZW50LmFwcGVuZENoaWxkKGNhcmRCYWNrTmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uKHN1YlNlY3Rpb25OYW1lKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc2V0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGluaXRTdWJTZWN0aW9uSGVhZGluZyhzdWJTZWN0aW9uTmFtZSk7XHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faGVhZGluZycpO1xyXG4gIHJlcGxhY2VDb250ZW50KHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyLCBzZWN0aW9uSGVhZGVyLCBtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkcyBjb250YWluZXJcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicsICdjYXJkcycpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xyXG5cclxuICAvLyBnZXQgaW5mbyBmb3IgY2FyZHNcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gZ2V0U2VjdGlvbkRhdGFCeU5hbWUoc3ViU2VjdGlvbk5hbWUpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzXHJcbiAgaW5pdFRyYWluQ2FyZHMoY2FyZHNDb250YWluZXIsIGNhcmRzRWxlbWVudHMsIHN1YlNlY3Rpb25OYW1lKTtcclxuXHJcbiAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IHRyYWluaW5nc0l0ZW1zIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG5pbXBvcnQgeyBnYW1lTGV2ZWwgfSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgeyBpbml0R2FtZSwgc3RhcnRHYW1lLCBnYW1lTGV2ZWxJbmZvIH0gZnJvbSAnLi90cmFpbmluZ3MvYWRkaXRpb24nO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5SGFuZGxlcigpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5hcHBlbmRDaGlsZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSB0cmFpbmluZ0luZm8ubmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRJbmZvQ29udGFpbmVyKGxldmVsLCB0aW1lLCBzY29yZSkge1xyXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19pbmZvJyk7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgaW5mbyBjb250YWluZXJcclxuICBjb25zdCBsZXZlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbEl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2xldmVsJyk7XHJcbiAgbGV2ZWxJdGVtLmlubmVySFRNTCA9IGA8c3Bhbj7Qo9GA0L7QstC10L3RjDo8L3NwYW4+ICR7bGV2ZWwubmFtZX1gO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lciBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRpbWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVySXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fdGltZXInLCAndGltZXInKTtcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVySXRlbSk7XHJcblxyXG4gIC8vIGluaXQgdGltZXJcclxuICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVyX19pdGVtJyk7XHJcbiAgdGltZXIudGV4dENvbnRlbnQgPSB0aW1lO1xyXG4gIHRpbWVySXRlbS5hcHBlbmRDaGlsZCh0aW1lcik7XHJcblxyXG4gIC8vIGluaXQgc2NvcmUgaW5mbyBjb250YWluZXJcclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzY29yZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3Njb3JlJyk7XHJcbiAgc2NvcmVJdGVtLmlubmVySFRNTCA9IGA8c3Bhbj7QntGH0LrQuDo8L3NwYW4+ICR7c2NvcmV9YDtcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlSXRlbSk7XHJcblxyXG4gIHJldHVybiBpbmZvQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0SGVscEJ1dHRvbnMoKSB7XHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2J1dHRvbnMnKTtcclxuXHJcbiAgLy8gaW5pdCBleGl0IGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uRXhpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbkV4aXQuc2V0QXR0cmlidXRlKCd0aXRsZScsICfQl9Cw0LrQvtC90YfQuNGC0Ywg0YLRgNC10L3QuNGA0L7QstC60YMnKTtcclxuICBidXR0b25FeGl0LnRleHRDb250ZW50ID0gJ2Nsb3NlJztcclxuICBidXR0b25FeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRXhpdCk7XHJcblxyXG4gIC8vIGluaXQgc291bmQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uU291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uU291bmQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBidXR0b25FeGl0LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JLQutC70Y7Rh9C40YLRjC/QstGL0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcclxuICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfb2ZmJztcclxuICBidXR0b25Tb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblNvdW5kKTtcclxuXHJcbiAgLy8gaW5pdCBpbmZvIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uSW5mby5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbkV4aXQuc2V0QXR0cmlidXRlKCd0aXRsZScsICfQn9GA0L7Rh9C40YLQsNGC0Ywg0L/RgNCw0LLQuNC70LAnKTtcclxuICBidXR0b25JbmZvLnRleHRDb250ZW50ID0gJ2hlbHBfb3V0bGluZSc7XHJcbiAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25JbmZvKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRPdmVybGF5KGNvbnRlbnQpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fb3ZlcmxheScsICdvdmVybGF5JywgJ2hpZGRlbicpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXkgY29udGVudFxyXG4gIGNvbnN0IG92ZXJsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3ZlcmxheUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheV9fY29udGVudCcpO1xyXG4gIG92ZXJsYXlDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5Q29udGVudCk7XHJcblxyXG4gIC8vIGluaXQgb3ZlcmxheSBidXR0b25cclxuICBjb25zdCBidXR0b25PdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGJ1dHRvbk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBidXR0b25PdmVybGF5LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JfQsNC60YDRi9GC0YwnKTtcclxuICBidXR0b25PdmVybGF5LnRleHRDb250ZW50ID0gJ2Nsb3NlJztcclxuICBidXR0b25PdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5SGFuZGxlcik7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25PdmVybGF5KTtcclxuXHJcbiAgcmV0dXJuIG92ZXJsYXlDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRUcmFpbmluZyh0cmFpbmluZ0tleSwgc3ViU2VjdGlvbktleSkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3Qgc3ViU2VjdGlvblRyYWluaW5nID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ3NJdGVtcykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25LZXksXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdHJhaW5pbmdJbmZvID0gT2JqZWN0LnZhbHVlcyhzdWJTZWN0aW9uVHJhaW5pbmcudHJhaW5pbmdzKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSB0cmFpbmluZ0tleSxcclxuICApO1xyXG5cclxuICAvLyBzZXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHRyYWluaW5nSW5mbyk7XHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faGVhZGluZycpO1xyXG4gIHJlcGxhY2VDb250ZW50KHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyLCBzZWN0aW9uSGVhZGVyLCBtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjb250YWluZXJcclxuICBjb25zdCB0cmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nJywgJ2NhcmRzJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFpbmluZ0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgdHJhaW5pbmcgY2FyZFxyXG4gIGNvbnN0IHRyYWluaW5nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRyYWluaW5nQ2FyZC5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fY2FyZCcsICdjYXJkc19faXRlbScsIHRyYWluaW5nSW5mby5rZXkpO1xyXG4gIHRyYWluaW5nQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvJHt0cmFpbmluZ0luZm8uYmd9XCIpYDtcclxuICB0cmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFpbmluZ0NhcmQpO1xyXG5cclxuICAvLyBpbml0IGxldmVsLCB0aW1lciBhbmQgc2NvcmUgaW5mbyBjb250YWluZXJcclxuICBjb25zdCBpbmZvID0gaW5pdEluZm9Db250YWluZXIoZ2FtZUxldmVsLmVhc3ksIGdhbWVMZXZlbC5lYXN5LmR1cmF0aW9uLCAwKTtcclxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19pbmZvJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoaW5mb0NvbnRhaW5lciwgaW5mbywgdHJhaW5pbmdDYXJkKTtcclxuXHJcbiAgLy8gaW5pdCBnYW1lIGNvbnRhaW5lclxyXG4gIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19nYW1lJyk7XHJcbiAgdHJhaW5pbmdDYXJkLmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGdhbWVcclxuICBjb25zdCBnYW1lID0gaW5pdEdhbWUoZ2FtZUxldmVsSW5mby5lYXN5LCBnYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gc3RhcnQgZ2FtZVxyXG4gIHN0YXJ0R2FtZShnYW1lKTtcclxuXHJcbiAgLy8gaW5pdCBoZWxwIGJ1dHRvbnMgY29udGFpbmVyXHJcbiAgY29uc3QgYnV0dG9ucyA9IGluaXRIZWxwQnV0dG9ucygpO1xyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX2J1dHRvbnMnKTtcclxuICByZXBsYWNlQ29udGVudChidXR0b25zQ29udGFpbmVyLCBidXR0b25zLCB0cmFpbmluZ0NhcmQpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXlcclxuICBjb25zdCBvdmVybGF5ID0gaW5pdE92ZXJsYXkodHJhaW5pbmdJbmZvLnJ1bGVzKTtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQob3ZlcmxheUNvbnRhaW5lciwgb3ZlcmxheSwgdHJhaW5pbmdDYXJkKTtcclxuXHJcbiAgcmV0dXJuIHRyYWluaW5nQ29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHN0YXRlID0ge1xyXG4gIGFjdGl2ZVBhZ2VOYW1lOiAnbWFpbicsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlUGFnZU5hbWUobmFtZSkge1xyXG4gIHN0YXRlLmFjdGl2ZVBhZ2VOYW1lID0gbmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVBhZ2VOYW1lKCkge1xyXG4gIHJldHVybiBzdGF0ZS5hY3RpdmVQYWdlTmFtZTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlTWVudUl0ZW0oKSB7XHJcbiAgY29uc3QgYWN0aXZlUGFnZU5hbWUgPSBnZXRBY3RpdmVQYWdlTmFtZSgpO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpXTtcclxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uZGF0YXNldC5uYW1lID09PSBhY3RpdmVQYWdlTmFtZSkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xpc3QnKTtcclxuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pY29uJyk7XHJcblxyXG4gIGNvbnN0IG1lbnVCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVudUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnbWVudV9vcGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51QmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IG92ZXJsYXlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScsICdoaWRkZW4nKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXlQYWdlKTtcclxuXHJcbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgbWVudUJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgY29uc3QgdGV4dE1lbnVJY29uID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IHRleHRNZW51SWNvbiA9PT0gJ21lbnUnID8gJ2Nsb3NlJyA6ICdtZW51JztcclxuXHJcbiAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51SXRlbUljb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rX19pY29uJyldO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChtZW51SWNvbi50ZXh0Q29udGVudCA9PT0gJ2Nsb3NlJ1xyXG4gICAgICAmJiBlLnRhcmdldCAhPT0gbWVudUJhY2tncm91bmRcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVJY29uXHJcbiAgICAgICYmICFtZW51SXRlbUljb25zLmluY2x1ZGVzKGUudGFyZ2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgbWVudUJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgICBvdmVybGF5UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIG1lbnVJY29uLnRleHRDb250ZW50ID0gJ21lbnUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlTWVudUl0ZW0oKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnVJdGVtKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgdHJhaW5pbmdUeXBlcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHR5cGVOYW1lOiAn0J/QsNC80Y/RgtGMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdhdHRlbnRpb24nLFxyXG4gICAgdHlwZU5hbWU6ICfQktC90LjQvNCw0L3QuNC1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdsb2dpYycsXHJcbiAgICB0eXBlTmFtZTogJ9Cb0L7Qs9C40LrQsCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAndGhpbmtpbmcnLFxyXG4gICAgdHlwZU5hbWU6ICfQnNGL0YjQu9C10L3QuNC1JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWluaW5nc0l0ZW1zID0gW1xyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdtZW1vcnknLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgnLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXguanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7QuSDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4MScsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgyJyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeDMnLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXguanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7QuSDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdhdHRlbnRpb24nLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdjbGljaycsXHJcbiAgICAgICAgbmFtZTogJ9Ca0LvQuNC6LdCa0LvQuNC6JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9hdHRlbnRpb24vY2xpY2suanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LLQvdC40LzQsNC90LjRjycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2xvZ2ljJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnYWRkaW5nJyxcclxuICAgICAgICBuYW1lOiAn0KHQu9C+0LbQtdC90LjQtScsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbG9naWMvYWRkaW5nLmpwZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbG9naWMvYmcvYWRkaW5nLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC70L7Qs9C40LrQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QndC10L7QsdGF0L7QtNC40LzQviDQsiDRg9C80LUg0YHQu9C+0LbQuNGC0Ywg0LLRgdC1INGH0LjRgdC70LAg0LIg0L/RgNC10LTQu9C+0LbQtdC90L3QvtC8INC/0YDQuNC80LXRgNC1INC4INC90LDQttCw0YLRjCDQvdCwINC60L3QvtC/0LrRgyDRgSDQv9GA0LDQstC40LvRjNC90YvQvCDQvtGC0LLQtdGC0L7QvC48L3A+PHA+0J3Rg9C20L3QviDRgNC10YjQsNGC0Ywg0L/RgNC40LzQtdGA0YssINC/0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LjQu9C+0YHRjCDQstGA0LXQvNGPINGC0LDQudC80LXRgNCwLjwvcD4nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICd0aGlua2luZycsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ3VuaWt1bScsXHJcbiAgICAgICAgbmFtZTogJ9Cj0L3QuNC60YPQvCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvdGhpbmtpbmcvdW5pa3VtLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0LPQviDQvNGL0YjQu9C10L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZ2FtZVN0YXR1cyB9IGZyb20gJy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVMZXZlbEluZm8gPSB7XHJcbiAgZWFzeToge1xyXG4gICAgdGVybXNDb3VudDogMixcclxuICAgIG1heFRlcm06IDIwLFxyXG4gICAgYW5zd2Vyc0NvdW50OiAzLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICB0ZXJtc0NvdW50OiAzLFxyXG4gICAgbWF4VGVybTogNDAsXHJcbiAgICBhbnN3ZXJzQ291bnQ6IDQsXHJcbiAgfSxcclxuICBoYXJkOiB7XHJcbiAgICB0ZXJtc0NvdW50OiA0LFxyXG4gICAgbWF4VGVybTogNjAsXHJcbiAgICBhbnN3ZXJzQ291bnQ6IDUsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1peEFuc3dlcnMoYXJyKSB7XHJcbiAgcmV0dXJuIFsuLi5hcnJdLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuc3dlcnMoY29ycmVjdEFuc3dlciwgbWF4VGVybSwgYW5zd2Vyc0NvdW50KSB7XHJcbiAgY29uc3QgYW5zd2VycyA9IFtjb3JyZWN0QW5zd2VyXTtcclxuICB3aGlsZSAoYW5zd2Vycy5sZW5ndGggPCBhbnN3ZXJzQ291bnQpIHtcclxuICAgIGNvbnN0IG5leHRBbnN3ZXIgPSBjb3JyZWN0QW5zd2VyICsgTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhUZXJtICogMC41KTtcclxuICAgIGlmICghYW5zd2Vycy5pbmNsdWRlcyhuZXh0QW5zd2VyKSkge1xyXG4gICAgICBhbnN3ZXJzLnB1c2gobmV4dEFuc3dlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtaXhBbnN3ZXJzKGFuc3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUV4YW1wbGUoeyB0ZXJtc0NvdW50LCBtYXhUZXJtLCBhbnN3ZXJzQ291bnQgfSkge1xyXG4gIGNvbnN0IHRlcm1zID0gQXJyYXkodGVybXNDb3VudCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4VGVybSkgKyAxKTtcclxuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gdGVybXMucmVkdWNlKChzdW0sIHRlcm0pID0+IHN1bSArIHRlcm0pO1xyXG4gIGNvbnN0IGFuc3dlcnMgPSBnZXRBbnN3ZXJzKGNvcnJlY3RBbnN3ZXIsIG1heFRlcm0sIGFuc3dlcnNDb3VudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdGlvbjogdGVybXMuam9pbignICsgJyksXHJcbiAgICBjb3JyZWN0QW5zd2VyLFxyXG4gICAgYW5zd2VycyxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UXVlc3Rpb24ocXVlc3Rpb24pIHtcclxuICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHF1ZXN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZGluZ19fcXVlc3Rpb24nKTtcclxuICBxdWVzdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IHF1ZXN0aW9uO1xyXG4gIHJldHVybiBxdWVzdGlvbkNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEFuc3dlcnMoZXhhbXBsZSwgc3VjY2Vzc0hhbmRsZXIsIGZhaWxIYW5kbGVyKSB7XHJcbiAgY29uc3QgYW5zd2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFuc3dlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkaW5nX19hbnN3ZXJzJyk7XHJcblxyXG4gIGV4YW1wbGUuYW5zd2Vycy5mb3JFYWNoKChhbnN3ZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFuc3dlcjtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4YW1wbGUuY29ycmVjdEFuc3dlciA9PT0gYW5zd2VyXHJcbiAgICAgID8gc3VjY2Vzc0hhbmRsZXJcclxuICAgICAgOiBmYWlsSGFuZGxlcik7XHJcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhbnN3ZXJzQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeGFtcGxlKGdhbWVPYmosIGV4YW1wbGUpIHtcclxuICBjb25zdCB7IGNvbnRhaW5lciwgbGV2ZWwgfSA9IGdhbWVPYmo7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBpbml0IHF1ZXN0aW9uKGV4YW1wbGUgdG8gc3VtKSBjb250YWluZXJcclxuICBjb25zdCBxdWVzdGlvbiA9IGluaXRRdWVzdGlvbihleGFtcGxlLnF1ZXN0aW9uKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb24pO1xyXG5cclxuICAvLyBpbml0IGFuc3dlciBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiB9O1xyXG5cclxuICBjb25zdCBzdWNjZXNzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIG5ld0dhbWVTdGF0ZS5zY29yZSArPSAxO1xyXG4gICAgaWYgKG5ld0dhbWVTdGF0ZS5zdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgICAgY29uc3QgbmV3RXhhbXBsZSA9IGdlbmVyYXRlRXhhbXBsZShsZXZlbCk7XHJcbiAgICAgIHJlbmRlckV4YW1wbGUobmV3R2FtZVN0YXRlLCBuZXdFeGFtcGxlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmYWlsSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmIChuZXdHYW1lU3RhdGUuc3RhdHVzID09PSBnYW1lU3RhdHVzLnN0YXJ0KSB7XHJcbiAgICAgIGNvbnN0IG5ld0V4YW1wbGUgPSBnZW5lcmF0ZUV4YW1wbGUoZ2FtZU9iai5sZXZlbCk7XHJcbiAgICAgIHJlbmRlckV4YW1wbGUobmV3R2FtZVN0YXRlLCBuZXdFeGFtcGxlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhbnN3ZXJzID0gaW5pdEFuc3dlcnMoZXhhbXBsZSwgc3VjY2Vzc0hhbmRsZXIsIGZhaWxIYW5kbGVyKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYW5zd2Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZShsZXZlbCwgY29udGFpbmVyKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNjb3JlOiAwLFxyXG4gICAgbGV2ZWwsXHJcbiAgICBzdGF0dXM6IGdhbWVTdGF0dXMuaW5pdCxcclxuICAgIGNvbnRhaW5lcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKGdhbWVPYmopIHtcclxuICBjb25zdCBleGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGdhbWVPYmoubGV2ZWwpO1xyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiwgc3RhdHVzOiBnYW1lU3RhdHVzLnN0YXJ0IH07XHJcbiAgcmVuZGVyRXhhbXBsZShuZXdHYW1lU3RhdGUsIGV4YW1wbGUpO1xyXG5cclxuICByZXR1cm4gbmV3R2FtZVN0YXRlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=