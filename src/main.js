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
/*! export getGameAudioStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setGameAudioStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLevel": () => /* binding */ gameLevel,
/* harmony export */   "gameStatus": () => /* binding */ gameStatus,
/* harmony export */   "setGameAudioStatus": () => /* binding */ setGameAudioStatus,
/* harmony export */   "getGameAudioStatus": () => /* binding */ getGameAudioStatus
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
var gameAudio = {
  audio: false
};
function setGameAudioStatus(audioStatus) {
  gameAudio.audio = audioStatus;
}
function getGameAudioStatus() {
  return gameAudio.audio;
}

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
/* harmony import */ var _initSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initSection */ "./src/assets/js/initSection.js");
;




function closeTrainingHandler() {
  var pageContent = (0,_initSection__WEBPACK_IMPORTED_MODULE_3__.default)('trainings');
  var mainContainer = document.querySelector('.main-container');
  mainContainer.textContent = '';
  mainContainer.appendChild(pageContent);
}

function closeOverlayHandler() {
  var overlayContainer = document.querySelector('.training__overlay');
  overlayContainer.classList.add('hidden');
}

function soundTrainingHandler(e) {
  var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_1__.getGameAudioStatus)();
  var buttonSound = e.target;
  console.log(audioAllowing);
  console.log(e.target);

  if (audioAllowing) {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.setGameAudioStatus)(false);
    buttonSound.textContent = 'volume_off';
  } else {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.setGameAudioStatus)(true);
    buttonSound.textContent = 'volume_up';
  }
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
  scoreItem.innerHTML = "<span>\u041E\u0447\u043A\u0438:</span> <span class=\"score__item\">".concat(score, "</span>");
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
  buttonExit.addEventListener('click', closeTrainingHandler);
  buttonsContainer.appendChild(buttonExit); // init sound button

  var buttonSound = document.createElement('i');
  buttonSound.classList.add('material-icons');
  buttonSound.setAttribute('title', 'Включить/выключить звук');
  buttonSound.textContent = 'volume_off';
  buttonSound.addEventListener('click', soundTrainingHandler);
  buttonsContainer.appendChild(buttonSound); // init info button

  var buttonInfo = document.createElement('i');
  buttonInfo.classList.add('material-icons');
  buttonInfo.setAttribute('title', 'Прочитать правила');
  buttonInfo.textContent = 'help_outline';
  buttonInfo.addEventListener('click', function () {
    var overlay = document.querySelector('.training__overlay');
    overlay.classList.remove('hidden');
  });
  buttonsContainer.appendChild(buttonInfo);
  return buttonsContainer;
}

function initAudio() {
  var audioContainer = document.createElement('div');
  audioContainer.classList.add('training__audio'); // init right answer click audio

  var rightAnswerAudio = document.createElement('audio');
  rightAnswerAudio.classList.add('audio__item');
  rightAnswerAudio.setAttribute('src', './assets/audio/answer_right.mp3');
  rightAnswerAudio.dataset.name = 'right-answer';
  audioContainer.appendChild(rightAnswerAudio); // init wrong click audio

  var wrongAnswerAudio = document.createElement('audio');
  wrongAnswerAudio.classList.add('audio__item');
  wrongAnswerAudio.setAttribute('src', './assets/audio/answer_wrong.mp3');
  wrongAnswerAudio.dataset.name = 'wrong-answer';
  audioContainer.appendChild(wrongAnswerAudio); // init timeout audio

  var timeoutAudio = document.createElement('audio');
  timeoutAudio.classList.add('audio__item');
  timeoutAudio.setAttribute('src', './assets/audio/timeout.mp3');
  timeoutAudio.dataset.name = 'timeout';
  audioContainer.appendChild(timeoutAudio);
  return audioContainer;
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
  replaceContent(overlayContainer, overlay, trainingCard); // init audio

  var audio = initAudio();
  var audioContainer = document.querySelector('.training__audio');
  replaceContent(audioContainer, audio, trainingCard);
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

function audioSound(audioName) {
  var audio = document.querySelector("audio[data-name=\"".concat(audioName, "\"]"));

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

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
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('right-answer');
      }

      var scoreItem = document.querySelector('.score__item');
      scoreItem.textContent = newGameState.score;
    }
  };

  var failHandler = function failHandler() {
    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(gameObj.level);
      renderExample(newGameState, newExample);
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('wrong-answer');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9hZGRpdGlvbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZ2FtZUxldmVsIiwiZWFzeSIsIm5hbWUiLCJkdXJhdGlvbiIsIm1lZGl1bSIsImhhcmQiLCJnYW1lU3RhdHVzIiwiaW5pdCIsInN0YXJ0Iiwic3RvcCIsImdhbWVBdWRpbyIsImF1ZGlvIiwic2V0R2FtZUF1ZGlvU3RhdHVzIiwiYXVkaW9TdGF0dXMiLCJnZXRHYW1lQXVkaW9TdGF0dXMiLCJpbml0SGVhZGVyIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbml0TWFpblBhZ2UiLCJpbml0Rm9vdGVyIiwidG9nZ2xlTWVudSIsImFjdGl2ZU1lbnVJdGVtIiwicGFnZUZvb3RlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicGFnZUluZm9Db250YWluZXIiLCJpbm5lckhUTUwiLCJwYWdlTG9nb0NvbnRhaW5lciIsInBhZ2VIZWFkZXIiLCJuYXZNZW51IiwiaW5pdE1lbnUiLCJuYXZNb2JpbGVNZW51IiwiY29udGFpbnMiLCJyZW1vdmUiLCJwYWdlQ29udGFpbmVyIiwicGFnZUhlYWRpbmciLCJwYWdlU3ViSGVhZGluZyIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b25Mb2dpbiIsInNldEF0dHJpYnV0ZSIsInJlZ2lzdGVyTG9naW4iLCJtZW51SXRlbXMiLCJtYWluIiwidHJhaW5pbmciLCJzdGF0aXN0aWMiLCJjbGlja0hhbmRsZXIiLCJlIiwic2VjdGlvbk5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic2VjdGlvbiIsInBhZ2VDb250ZW50IiwiaW5pdFNlY3Rpb24iLCJzZXRBY3RpdmVQYWdlTmFtZSIsIm1vYmlsZSIsIm1lbnVUb2dnbGUiLCJtZW51SWNvbiIsImFjdGl2ZVBhZ2VOYW1lIiwiZ2V0QWN0aXZlUGFnZU5hbWUiLCJtZW51TGlzdCIsIm1lbnVDb250YWluZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJtZW51SXRlbSIsIm1lbnVJdGVtSWNvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibWVudUl0ZW1MaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcmRzRWxlbWVudHMiLCJpbml0U3ViU2VjdGlvbiIsImNhcmRzQ29udGFpbmVyIiwicmVwbGFjZVdpdGgiLCJ0cmFpbmluZ1R5cGVzIiwidHlwZUtleSIsInR5cGVOYW1lIiwiY2FyZEl0ZW0iLCJjYXJkSW1hZ2UiLCJjYXJkTmFtZSIsInN1YlNlY3Rpb25LZXkiLCJ0cmFpbmluZ0tleSIsImN1cnJlbnRUYXJnZXQiLCJpbml0VHJhaW5pbmciLCJnZXRTZWN0aW9uRGF0YUJ5TmFtZSIsInN1YlNlY3Rpb25OYW1lIiwic3ViU2VjdGlvbiIsInZhbHVlcyIsInRyYWluaW5nc0l0ZW1zIiwiZmluZCIsInRyYWluaW5ncyIsInJvdGF0ZUNhcmQiLCJ0YXJnZXRDYXJkTmFtZSIsImNhcmQiLCJ0YXJnZXRDYXJkQmxvY2siLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlQ29udGVudCIsImN1cnJlbnRCbG9jayIsIm5ld0Jsb2NrIiwicGFyZW50QmxvY2siLCJwcmVwZW5kIiwiaW5pdFN1YlNlY3Rpb25IZWFkaW5nIiwic2VjdGlvbkhlYWRpbmciLCJpbml0VHJhaW5DYXJkcyIsImNhcmRCbG9jayIsImtleSIsImNhcmRMaW5rIiwiaW1hZ2UiLCJjYXJkQ29udGVudCIsImNhcmRSb3RhdGVCdXR0b24iLCJjYXJkQmFja0l0ZW0iLCJjYXJkQmFja0Rlc2NyIiwiZGVzY3JpcHRpb24iLCJjYXJkQmFja0NvbnRlbnQiLCJjYXJkQmFja05hbWUiLCJzZWN0aW9uSGVhZGVyIiwic2VjdGlvbkhlYWRpbmdDb250YWluZXIiLCJjbG9zZVRyYWluaW5nSGFuZGxlciIsImNsb3NlT3ZlcmxheUhhbmRsZXIiLCJvdmVybGF5Q29udGFpbmVyIiwic291bmRUcmFpbmluZ0hhbmRsZXIiLCJhdWRpb0FsbG93aW5nIiwiYnV0dG9uU291bmQiLCJjb25zb2xlIiwibG9nIiwidHJhaW5pbmdJbmZvIiwiaW5pdEluZm9Db250YWluZXIiLCJsZXZlbCIsInRpbWUiLCJzY29yZSIsImluZm9Db250YWluZXIiLCJsZXZlbEl0ZW0iLCJ0aW1lckl0ZW0iLCJ0aW1lciIsInNjb3JlSXRlbSIsImluaXRIZWxwQnV0dG9ucyIsImJ1dHRvbkV4aXQiLCJidXR0b25JbmZvIiwib3ZlcmxheSIsImluaXRBdWRpbyIsImF1ZGlvQ29udGFpbmVyIiwicmlnaHRBbnN3ZXJBdWRpbyIsIndyb25nQW5zd2VyQXVkaW8iLCJ0aW1lb3V0QXVkaW8iLCJpbml0T3ZlcmxheSIsImNvbnRlbnQiLCJvdmVybGF5Q29udGVudCIsImJ1dHRvbk92ZXJsYXkiLCJzdWJTZWN0aW9uVHJhaW5pbmciLCJ0cmFpbmluZ0NvbnRhaW5lciIsInRyYWluaW5nQ2FyZCIsImJnIiwiaW5mbyIsImdhbWVDb250YWluZXIiLCJnYW1lIiwiaW5pdEdhbWUiLCJnYW1lTGV2ZWxJbmZvIiwic3RhcnRHYW1lIiwiYnV0dG9ucyIsInJ1bGVzIiwic3RhdGUiLCJzZXRBY3RpdmVNZW51SXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51QmFja2dyb3VuZCIsIm92ZXJsYXlQYWdlIiwidGV4dE1lbnVJY29uIiwibWVudUl0ZW1JY29ucyIsImluY2x1ZGVzIiwibGluayIsInRlcm1zQ291bnQiLCJtYXhUZXJtIiwiYW5zd2Vyc0NvdW50IiwiYXVkaW9Tb3VuZCIsImF1ZGlvTmFtZSIsImN1cnJlbnRUaW1lIiwicGxheSIsIm1peEFuc3dlcnMiLCJhcnIiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImdldEFuc3dlcnMiLCJjb3JyZWN0QW5zd2VyIiwiYW5zd2VycyIsImxlbmd0aCIsIm5leHRBbnN3ZXIiLCJyb3VuZCIsInB1c2giLCJnZW5lcmF0ZUV4YW1wbGUiLCJ0ZXJtcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInJlZHVjZSIsInN1bSIsInRlcm0iLCJxdWVzdGlvbiIsImpvaW4iLCJpbml0UXVlc3Rpb24iLCJxdWVzdGlvbkNvbnRhaW5lciIsImluaXRBbnN3ZXJzIiwiZXhhbXBsZSIsInN1Y2Nlc3NIYW5kbGVyIiwiZmFpbEhhbmRsZXIiLCJhbnN3ZXJzQ29udGFpbmVyIiwiYW5zd2VyIiwiYnV0dG9uIiwicmVuZGVyRXhhbXBsZSIsImdhbWVPYmoiLCJjb250YWluZXIiLCJuZXdHYW1lU3RhdGUiLCJzdGF0dXMiLCJuZXdFeGFtcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQUc7QUFDdkJDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUUsUUFERjtBQUVKQyxZQUFRLEVBQUU7QUFGTixHQURpQjtBQUt2QkMsUUFBTSxFQUFFO0FBQ05GLFFBQUksRUFBRSxTQURBO0FBRU5DLFlBQVEsRUFBRTtBQUZKLEdBTGU7QUFTdkJFLE1BQUksRUFBRTtBQUNKSCxRQUFJLEVBQUUsU0FERjtBQUVKQyxZQUFRLEVBQUU7QUFGTjtBQVRpQixDQUFsQjtBQWVBLElBQU1HLFVBQVUsR0FBRztBQUN4QkMsTUFBSSxFQUFFLE1BRGtCO0FBRXhCQyxPQUFLLEVBQUUsT0FGaUI7QUFHeEJDLE1BQUksRUFBRTtBQUhrQixDQUFuQjtBQU1QLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFO0FBRFMsQ0FBbEI7QUFJTyxTQUFTQyxrQkFBVCxDQUE0QkMsV0FBNUIsRUFBeUM7QUFDOUNILFdBQVMsQ0FBQ0MsS0FBVixHQUFrQkUsV0FBbEI7QUFDRDtBQUVNLFNBQVNDLGtCQUFULEdBQThCO0FBQ25DLFNBQU9KLFNBQVMsQ0FBQ0MsS0FBakI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFDQTtBQUNBO0NBR0E7O0FBQ0FJLG9EQUFVLEcsQ0FFVjs7QUFDQSxJQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFDQUYsYUFBYSxDQUFDRyxXQUFkLEdBQTRCLEVBQTVCO0FBQ0FILGFBQWEsQ0FB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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnYW1lTGV2ZWwgPSB7XHJcbiAgZWFzeToge1xyXG4gICAgbmFtZTogJ9C70LXQs9C60LjQuScsXHJcbiAgICBkdXJhdGlvbjogNjAsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIG5hbWU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBkdXJhdGlvbjogNTAsXHJcbiAgfSxcclxuICBoYXJkOiB7XHJcbiAgICBuYW1lOiAn0YLRj9C20LXQu9GL0LknLFxyXG4gICAgZHVyYXRpb246IDQ1LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVN0YXR1cyA9IHtcclxuICBpbml0OiAnaW5pdCcsXHJcbiAgc3RhcnQ6ICdzdGFydCcsXHJcbiAgc3RvcDogJ3N0b3AnLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZUF1ZGlvID0ge1xyXG4gIGF1ZGlvOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRHYW1lQXVkaW9TdGF0dXMoYXVkaW9TdGF0dXMpIHtcclxuICBnYW1lQXVkaW8uYXVkaW8gPSBhdWRpb1N0YXR1cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVBdWRpb1N0YXR1cygpIHtcclxuICByZXR1cm4gZ2FtZUF1ZGlvLmF1ZGlvO1xyXG59XHJcbiIsImltcG9ydCBpbml0SGVhZGVyIGZyb20gJy4vaW5pdEhlYWRlcic7XHJcbmltcG9ydCBpbml0TWFpblBhZ2UgZnJvbSAnLi9pbml0TWFpblBhZ2UnO1xyXG5pbXBvcnQgaW5pdEZvb3RlciBmcm9tICcuL2luaXRGb290ZXInO1xyXG5pbXBvcnQgeyB0b2dnbGVNZW51LCBhY3RpdmVNZW51SXRlbSB9IGZyb20gJy4vdG9nZ2xlTWVudSc7XHJcblxyXG4vLyBpbml0IGhlYWRlclxyXG5pbml0SGVhZGVyKCk7XHJcblxyXG4vLyBpbml0IG1haW4gcGFnZVxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbm1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbml0TWFpblBhZ2UoKSk7XHJcblxyXG4vLyBpbml0IGhlYWRlclxyXG5pbml0Rm9vdGVyKCk7XHJcblxyXG4vLyBvcGVuIGFuZCBjbG9zZSBtb2JpbGUgbWVudVxyXG50b2dnbGVNZW51KCk7XHJcblxyXG4vLyBhY3RpdmUgZGVza3RvcCBtZW51IGl0ZW1cclxuYWN0aXZlTWVudUl0ZW0oKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEZvb3RlcigpIHtcclxuICAvLyBpbml0IGZvb3RlclxyXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBwYWdlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInLCAnZm9vdGVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlRm9vdGVyKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXIgYXV0aG9yIGluZm9cclxuICBjb25zdCBwYWdlSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9faW5mbycpO1xyXG4gIHBhZ2VJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcyMDIwIMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnVzYWtvdmEtbHl1ZG1pbGFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5SdXNha292YSBMeXVkbWlsYTwvYT4sIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc25haXBwMVwiIHRhcmdldD1cIl9ibGFua1wiPll1cnkgSGFsdXNoa288L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VJbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXIgbG9nb1xyXG4gIGNvbnN0IHBhZ2VMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19sb2dvJyk7XHJcbiAgcGFnZUxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cImFzc2V0cy9pbWcvcnNfc2Nob29sX2xvZ28uc3ZnXCIgYWx0PVwiUlMgU2Nob29sXCI+PC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlTG9nb0NvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRNZW51IGZyb20gJy4vaW5pdE1lbnUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcclxuICAvLyBpbml0IGhlYWRlclxyXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xyXG5cclxuICAvLyBpbnNlcnQgbmF2IG1lbnUgdG8gaGVhZGVyXHJcbiAgY29uc3QgbmF2TWVudSA9IGluaXRNZW51KCk7XHJcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChuYXZNZW51KTtcclxuXHJcbiAgLy8gaW5zZXJ0IG1vYmlsZSBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNb2JpbGVNZW51ID0gaW5pdE1lbnUodHJ1ZSk7XHJcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChuYXZNb2JpbGVNZW51KTtcclxuXHJcbiAgLy8gaW5pdCBtYWluIGNvbnRhaW5lclxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1haW5QYWdlKCkge1xyXG4gIC8vIHJlbW92ZSBjbGFzcyBvZiBzdWJzZWN0aW9uXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3Vic2VjdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBwYWdlIGNvbnRhaW5lclxyXG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIGluaXQgaDFcclxuICBjb25zdCBwYWdlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcGFnZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnU21hcnQgS2lkcyc7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgaDJcclxuICBjb25zdCBwYWdlU3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgcGFnZVN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSAn0KLRgNC10L3QsNC20LXRgNGLINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC/0LDQvNGP0YLQuCwg0LLQvdC40LzQsNC90LjRjywg0LvQvtCz0LjQutC4INC4INC80YvRiNC70LXQvdC40Y8nO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVN1YkhlYWRpbmcpO1xyXG5cclxuICAvLyBpbml0IGJ1dHRvbnMgY29udGFpbmVyXHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGxvZ2luIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tbG9naW4nKTtcclxuICBidXR0b25Mb2dpbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgYnV0dG9uTG9naW4udGV4dENvbnRlbnQgPSAn0KLRgNC10L3QuNGA0L7QstCw0YLRjNGB0Y8nO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTG9naW4pO1xyXG5cclxuICAvLyBpbml0IHJlZ2lzdGVyIGJ1dHRvblxyXG4gIGNvbnN0IHJlZ2lzdGVyTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnLCAnYnRuLXJlZ2lzdGVyJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi50ZXh0Q29udGVudCA9ICfQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8nO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVnaXN0ZXJMb2dpbik7XHJcblxyXG4gIHJldHVybiBwYWdlQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0TWFpblBhZ2UgZnJvbSAnLi9pbml0TWFpblBhZ2UnO1xyXG5pbXBvcnQgaW5pdFNlY3Rpb24gZnJvbSAnLi9pbml0U2VjdGlvbic7XHJcbmltcG9ydCB7IHNldEFjdGl2ZVBhZ2VOYW1lLCBnZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG4vLyBpbXBvcnQgaW5pdFN0YXRpc3RpY1BhZ2UgZnJvbSAnLi9zdGF0aXN0aWNQYWdlJztcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IHtcclxuICBtYWluOiAn0JPQu9Cw0LLQvdCw0Y8nLFxyXG4gIHRyYWluaW5nOiAn0KLRgNC10L3QsNC20LXRgNGLJyxcclxuICBzdGF0aXN0aWM6ICfQodGC0LDRgtC40YHRgtC40LrQsCcsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uO1xyXG4gIGxldCBwYWdlQ29udGVudDtcclxuXHJcbiAgaWYgKHNlY3Rpb25OYW1lID09PSAnbWFpbicpIHtcclxuICAgIHBhZ2VDb250ZW50ID0gaW5pdE1haW5QYWdlKCk7XHJcbiAgfSBlbHNlIGlmIChzZWN0aW9uTmFtZSA9PT0gJ3N0YXRpc3RpYycpIHtcclxuICAgIC8vIHBhZ2VDb250ZW50ID0gaW5pdFN0YXRpc3RpY1BhZ2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbihzZWN0aW9uTmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xyXG5cclxuICBzZXRBY3RpdmVQYWdlTmFtZShzZWN0aW9uTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNZW51KG1vYmlsZSA9IGZhbHNlKSB7XHJcbiAgLy8gaW5pdCBuYXYgbWVudVxyXG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCAnbmF2YmFyLWV4cGFuZC1sZycpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgLy8gaW5pdCBtZW51IHRvZ2dsZVxyXG4gICAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtZW51X190b2dnbGUnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZSk7XHJcblxyXG4gICAgLy8gaW5pdCBtZW51IGljb25cclxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZCgnbWVudV9faWNvbicsICdtYXRlcmlhbC1pY29ucycpO1xyXG4gICAgbWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSc7XHJcbiAgICBtZW51VG9nZ2xlLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgbWVudSBsaXN0XHJcbiAgY29uc3QgYWN0aXZlUGFnZU5hbWUgPSBnZXRBY3RpdmVQYWdlTmFtZSgpO1xyXG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbWVudV9fbGlzdCcpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGluaXQgbWVudSBjb250YWluZXJcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnLCAnbmF2YmFyLWNvbGxhcHNlJyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhci1uYXYnLCAnbXItYXV0bycpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhtZW51SXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW1cclxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcclxuICAgIGlmICghbW9iaWxlKSB7XHJcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGl0ZW0gPT09IGFjdGl2ZVBhZ2VOYW1lKSB7XHJcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBtZW51SXRlbS5kYXRhc2V0Lm5hbWUgPSBpdGVtO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG5cclxuICAgIGlmIChtb2JpbGUpIHtcclxuICAgICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbSBpY29uXHJcbiAgICAgIGNvbnN0IG1lbnVJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgbWVudUl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2ljb24nKTtcclxuICAgICAgbWVudUl0ZW1JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbi0ke2l0ZW19LnBuZ1wiKWA7XHJcbiAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbSBsaW5rXHJcbiAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51SXRlbUxpbmsuY2xhc3NMaXN0LmFkZChtb2JpbGUgPyAnbWVudV9fbGluaycgOiAnbmF2LWxpbmsnKTtcclxuICAgIG1lbnVJdGVtTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aXRlbX1gKTtcclxuICAgIG1lbnVJdGVtTGluay5kYXRhc2V0LnNlY3Rpb24gPSBpdGVtO1xyXG4gICAgbWVudUl0ZW1MaW5rLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2l0ZW1dO1xyXG4gICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtTGluayk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuYXZNZW51O1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IHNldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCBpbml0U3ViU2VjdGlvbiBmcm9tICcuL2luaXRTdWJTZWN0aW9uJztcclxuaW1wb3J0IHsgdHJhaW5pbmdUeXBlcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgY29uc3QgY2FyZHNFbGVtZW50cyA9IGluaXRTdWJTZWN0aW9uKHNlY3Rpb25OYW1lKTtcclxuXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJyk7XHJcbiAgY2FyZHNDb250YWluZXIucmVwbGFjZVdpdGgoY2FyZHNFbGVtZW50cyk7XHJcblxyXG4gIC8vIHNldEFjdGl2ZVBhZ2VOYW1lKHNlY3Rpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFNlY3Rpb24oKSB7XHJcbiAgLy8gcmVtb3ZlIGNsYXNzIG9mIHN1YnNlY3Rpb25cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IGNhcmRzIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJywgJ2NhcmRzJyk7XHJcblxyXG4gIC8vIGluaXQgY2FyZHNcclxuICB0cmFpbmluZ1R5cGVzLmZvckVhY2goKHsgdHlwZUtleSwgdHlwZU5hbWUgfSkgPT4ge1xyXG4gICAgY29uc3QgY2FyZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJyk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBjYXJkIGltYWdlXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvaW1nL2JnL2JnLSR7dHlwZUtleX0uanBnXCIpYDtcclxuICAgIGNhcmRJbWFnZS5kYXRhc2V0LnNlY3Rpb24gPSB0eXBlS2V5O1xyXG4gICAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XHJcblxyXG4gICAgLy8gaW5pdCBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IHR5cGVOYW1lO1xyXG4gICAgY2FyZE5hbWUuZGF0YXNldC5zZWN0aW9uID0gdHlwZUtleTtcclxuICAgIGNhcmROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0VHJhaW5pbmcgZnJvbSAnLi9pbml0VHJhaW5pbmcnO1xyXG5pbXBvcnQgeyB0cmFpbmluZ1R5cGVzLCB0cmFpbmluZ3NJdGVtcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuLy8gaW1wb3J0IHsgc2F2ZVJlc3VsdCB9IGZyb20gJy4vc3RhdGlzdGljJztcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlLCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgdHJhaW5pbmdLZXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50cmFpbmluZztcclxuICBjb25zdCB0cmFpbmluZyA9IGluaXRUcmFpbmluZyh0cmFpbmluZ0tleSwgc3ViU2VjdGlvbktleSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLnJlcGxhY2VXaXRoKHRyYWluaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VjdGlvbkRhdGFCeU5hbWUoc3ViU2VjdGlvbk5hbWUpIHtcclxuICBjb25zdCBzdWJTZWN0aW9uID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ3NJdGVtcykuZmluZCgoaXRlbSkgPT4gaXRlbS50eXBlS2V5ID09PSBzdWJTZWN0aW9uTmFtZSk7XHJcbiAgcmV0dXJuIHN1YlNlY3Rpb24udHJhaW5pbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGVDYXJkKGUpIHtcclxuICBjb25zdCB0YXJnZXRDYXJkTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNhcmQ7XHJcbiAgY29uc3QgdGFyZ2V0Q2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRzLSR7dGFyZ2V0Q2FyZE5hbWV9YCk7XHJcblxyXG4gIHRhcmdldENhcmRCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkc19fYmxvY2tfaG92ZXInKTtcclxuXHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5wcmVwZW5kKG5ld0Jsb2NrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uSGVhZGluZyhzdWJTZWN0aW9uS2V5ID0gJycpIHtcclxuICAvLyBpbml0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHNlY3Rpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX2hlYWRpbmcnKTtcclxuXHJcbiAgY29uc3Qgc3ViU2VjdGlvbk5hbWUgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nVHlwZXMpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS50eXBlS2V5ID09PSBzdWJTZWN0aW9uS2V5LFxyXG4gICk7XHJcblxyXG4gIHNlY3Rpb25IZWFkaW5nLnRleHRDb250ZW50ID0gc3ViU2VjdGlvbk5hbWUudHlwZU5hbWU7XHJcbiAgcmV0dXJuIHNlY3Rpb25IZWFkaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VHJhaW5DYXJkcyhjYXJkc0NvbnRhaW5lciwgY2FyZHNFbGVtZW50cywgc3ViU2VjdGlvbktleSkge1xyXG4gIGNhcmRzRWxlbWVudHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgLy8gaW5pdCBibG9jayBmb3IgY2FyZHNcclxuICAgIGNvbnN0IGNhcmRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19ibG9jaycsIGBjYXJkcy0ke2NhcmQua2V5fWApO1xyXG4gICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEJsb2NrKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgbGlua1xyXG4gICAgY29uc3QgY2FyZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjYXJkTGluay5jbGFzc0xpc3QuYWRkKCdjYXJkX19saW5rJyk7XHJcbiAgICBjYXJkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7Y2FyZC5rZXl9YCk7XHJcbiAgICBjYXJkQmxvY2suYXBwZW5kQ2hpbGQoY2FyZExpbmspO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBpdGVtXHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2Zyb250Jyk7XHJcbiAgICBjYXJkSXRlbS5kYXRhc2V0LnRyYWluaW5nID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNsaWNrSGFuZGxlcihlLCBzdWJTZWN0aW9uS2V5KTtcclxuICAgICAgLy8gc2F2ZVJlc3VsdChjYXJkLndvcmQsICd0cmFpbmVkJyk7XHJcbiAgICB9KTtcclxuICAgIGNhcmRMaW5rLmFwcGVuZENoaWxkKGNhcmRJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgaW1hZ2VcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgY2FyZEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke2NhcmQuaW1hZ2V9XCIpYDtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGNvbnRlbnRcclxuICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19jb250ZW50Jyk7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgcm90YXRlIGJ1dHRvblxyXG4gICAgY29uc3QgY2FyZFJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmRhdGFzZXQuY2FyZCA9IGNhcmQua2V5O1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdyb3RhdGVfbGVmdCc7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQ2FyZCk7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkUm90YXRlQnV0dG9uKTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBpdGVtXHJcbiAgICBjb25zdCBjYXJkQmFja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScsICdjYXJkc19fYmFjaycpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmRhdGFzZXQuY2FyZCA9IGNhcmQua2V5O1xyXG4gICAgY2FyZEJhY2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByb3RhdGVDYXJkKTtcclxuICAgIGNhcmRCbG9jay5hcHBlbmRDaGlsZChjYXJkQmFja0l0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIGRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBjYXJkQmFja0Rlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0Rlc2NyLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2Rlc2NyJyk7XHJcbiAgICBjYXJkQmFja0Rlc2NyLnRleHRDb250ZW50ID0gY2FyZC5kZXNjcmlwdGlvbjtcclxuICAgIGNhcmRCYWNrSXRlbS5hcHBlbmRDaGlsZChjYXJkQmFja0Rlc2NyKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgY29udGVudFxyXG4gICAgY29uc3QgY2FyZEJhY2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmFwcGVuZENoaWxkKGNhcmRCYWNrQ29udGVudCk7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZEJhY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja05hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZEJhY2tOYW1lLnRleHRDb250ZW50ID0gY2FyZC5uYW1lO1xyXG4gICAgY2FyZEJhY2tDb250ZW50LmFwcGVuZENoaWxkKGNhcmRCYWNrTmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uKHN1YlNlY3Rpb25OYW1lKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc2V0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGluaXRTdWJTZWN0aW9uSGVhZGluZyhzdWJTZWN0aW9uTmFtZSk7XHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faGVhZGluZycpO1xyXG4gIHJlcGxhY2VDb250ZW50KHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyLCBzZWN0aW9uSGVhZGVyLCBtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkcyBjb250YWluZXJcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicsICdjYXJkcycpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xyXG5cclxuICAvLyBnZXQgaW5mbyBmb3IgY2FyZHNcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gZ2V0U2VjdGlvbkRhdGFCeU5hbWUoc3ViU2VjdGlvbk5hbWUpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzXHJcbiAgaW5pdFRyYWluQ2FyZHMoY2FyZHNDb250YWluZXIsIGNhcmRzRWxlbWVudHMsIHN1YlNlY3Rpb25OYW1lKTtcclxuXHJcbiAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IHRyYWluaW5nc0l0ZW1zIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG5pbXBvcnQgeyBnYW1lTGV2ZWwsIGdldEdhbWVBdWRpb1N0YXR1cywgc2V0R2FtZUF1ZGlvU3RhdHVzIH0gZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgaW5pdEdhbWUsIHN0YXJ0R2FtZSwgZ2FtZUxldmVsSW5mbyB9IGZyb20gJy4vdHJhaW5pbmdzL2FkZGl0aW9uJztcclxuaW1wb3J0IGluaXRTZWN0aW9uIGZyb20gJy4vaW5pdFNlY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VUcmFpbmluZ0hhbmRsZXIoKSB7XHJcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbigndHJhaW5pbmdzJyk7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5SGFuZGxlcigpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc291bmRUcmFpbmluZ0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGUudGFyZ2V0O1xyXG5cclxuICBjb25zb2xlLmxvZyhhdWRpb0FsbG93aW5nKTtcclxuICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcblxyXG4gIGlmIChhdWRpb0FsbG93aW5nKSB7XHJcbiAgICBzZXRHYW1lQXVkaW9TdGF0dXMoZmFsc2UpO1xyXG4gICAgYnV0dG9uU291bmQudGV4dENvbnRlbnQgPSAndm9sdW1lX29mZic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldEdhbWVBdWRpb1N0YXR1cyh0cnVlKTtcclxuICAgIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV91cCc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChjdXJyZW50QmxvY2ssIG5ld0Jsb2NrLCBwYXJlbnRCbG9jaykge1xyXG4gIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgIGN1cnJlbnRCbG9jay5yZXBsYWNlV2l0aChuZXdCbG9jayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudEJsb2NrLmFwcGVuZENoaWxkKG5ld0Jsb2NrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uSGVhZGluZyh0cmFpbmluZ0luZm8pIHtcclxuICAvLyBpbml0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHNlY3Rpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX2hlYWRpbmcnKTtcclxuICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IHRyYWluaW5nSW5mby5uYW1lO1xyXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEluZm9Db250YWluZXIobGV2ZWwsIHRpbWUsIHNjb3JlKSB7XHJcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2luZm8nKTtcclxuXHJcbiAgLy8gaW5pdCBsZXZlbCBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IGxldmVsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldmVsSXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbGV2ZWwnKTtcclxuICBsZXZlbEl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuPtCj0YDQvtCy0LXQvdGMOjwvc3Bhbj4gJHtsZXZlbC5uYW1lfWA7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbEl0ZW0pO1xyXG5cclxuICAvLyBpbml0IHRpbWVyIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3QgdGltZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX190aW1lcicsICd0aW1lcicpO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lclxyXG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXJfX2l0ZW0nKTtcclxuICB0aW1lci50ZXh0Q29udGVudCA9IHRpbWU7XHJcbiAgdGltZXJJdGVtLmFwcGVuZENoaWxkKHRpbWVyKTtcclxuXHJcbiAgLy8gaW5pdCBzY29yZSBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHNjb3JlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNjb3JlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc2NvcmUnKTtcclxuICBzY29yZUl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuPtCe0YfQutC4Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzY29yZV9faXRlbVwiPiR7c2NvcmV9PC9zcGFuPmA7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUl0ZW0pO1xyXG5cclxuICByZXR1cm4gaW5mb0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhlbHBCdXR0b25zKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19idXR0b25zJyk7XHJcblxyXG4gIC8vIGluaXQgZXhpdCBidXR0b25cclxuICBjb25zdCBidXR0b25FeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGJ1dHRvbkV4aXQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBidXR0b25FeGl0LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JfQsNC60L7QvdGH0LjRgtGMINGC0YDQtdC90LjRgNC+0LLQutGDJyk7XHJcbiAgYnV0dG9uRXhpdC50ZXh0Q29udGVudCA9ICdjbG9zZSc7XHJcbiAgYnV0dG9uRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVHJhaW5pbmdIYW5kbGVyKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkV4aXQpO1xyXG5cclxuICAvLyBpbml0IHNvdW5kIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvblNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGJ1dHRvblNvdW5kLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uU291bmQuc2V0QXR0cmlidXRlKCd0aXRsZScsICfQktC60LvRjtGH0LjRgtGML9Cy0YvQutC70Y7Rh9C40YLRjCDQt9Cy0YPQuicpO1xyXG4gIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV9vZmYnO1xyXG4gIGJ1dHRvblNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc291bmRUcmFpbmluZ0hhbmRsZXIpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uU291bmQpO1xyXG5cclxuICAvLyBpbml0IGluZm8gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25JbmZvLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uSW5mby5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9Cf0YDQvtGH0LjRgtCw0YLRjCDQv9GA0LDQstC40LvQsCcpO1xyXG4gIGJ1dHRvbkluZm8udGV4dENvbnRlbnQgPSAnaGVscF9vdXRsaW5lJztcclxuICBidXR0b25JbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbmluZ19fb3ZlcmxheScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICB9KTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkluZm8pO1xyXG5cclxuICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEF1ZGlvKCkge1xyXG4gIGNvbnN0IGF1ZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXVkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2F1ZGlvJyk7XHJcblxyXG4gIC8vIGluaXQgcmlnaHQgYW5zd2VyIGNsaWNrIGF1ZGlvXHJcbiAgY29uc3QgcmlnaHRBbnN3ZXJBdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5jbGFzc0xpc3QuYWRkKCdhdWRpb19faXRlbScpO1xyXG4gIHJpZ2h0QW5zd2VyQXVkaW8uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYXVkaW8vYW5zd2VyX3JpZ2h0Lm1wMycpO1xyXG4gIHJpZ2h0QW5zd2VyQXVkaW8uZGF0YXNldC5uYW1lID0gJ3JpZ2h0LWFuc3dlcic7XHJcbiAgYXVkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRBbnN3ZXJBdWRpbyk7XHJcblxyXG4gIC8vIGluaXQgd3JvbmcgY2xpY2sgYXVkaW9cclxuICBjb25zdCB3cm9uZ0Fuc3dlckF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvX19pdGVtJyk7XHJcbiAgd3JvbmdBbnN3ZXJBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby9hbnN3ZXJfd3JvbmcubXAzJyk7XHJcbiAgd3JvbmdBbnN3ZXJBdWRpby5kYXRhc2V0Lm5hbWUgPSAnd3JvbmctYW5zd2VyJztcclxuICBhdWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3cm9uZ0Fuc3dlckF1ZGlvKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lb3V0IGF1ZGlvXHJcbiAgY29uc3QgdGltZW91dEF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICB0aW1lb3V0QXVkaW8uY2xhc3NMaXN0LmFkZCgnYXVkaW9fX2l0ZW0nKTtcclxuICB0aW1lb3V0QXVkaW8uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYXVkaW8vdGltZW91dC5tcDMnKTtcclxuICB0aW1lb3V0QXVkaW8uZGF0YXNldC5uYW1lID0gJ3RpbWVvdXQnO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVvdXRBdWRpbyk7XHJcblxyXG4gIHJldHVybiBhdWRpb0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE92ZXJsYXkoY29udGVudCkge1xyXG4gIGNvbnN0IG92ZXJsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdmVybGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19vdmVybGF5JywgJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcblxyXG4gIC8vIGluaXQgb3ZlcmxheSBjb250ZW50XHJcbiAgY29uc3Qgb3ZlcmxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdmVybGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5X19jb250ZW50Jyk7XHJcbiAgb3ZlcmxheUNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICBvdmVybGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJsYXlDb250ZW50KTtcclxuXHJcbiAgLy8gaW5pdCBvdmVybGF5IGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbk92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbk92ZXJsYXkuc2V0QXR0cmlidXRlKCd0aXRsZScsICfQl9Cw0LrRgNGL0YLRjCcpO1xyXG4gIGJ1dHRvbk92ZXJsYXkudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xyXG4gIGJ1dHRvbk92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXlIYW5kbGVyKTtcclxuICBvdmVybGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk92ZXJsYXkpO1xyXG5cclxuICByZXR1cm4gb3ZlcmxheUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uVHJhaW5pbmcgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBjb25zdCB0cmFpbmluZ0luZm8gPSBPYmplY3QudmFsdWVzKHN1YlNlY3Rpb25UcmFpbmluZy50cmFpbmluZ3MpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IHRyYWluaW5nS2V5LFxyXG4gICk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmcnLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjYXJkXHJcbiAgY29uc3QgdHJhaW5pbmdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDYXJkLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19jYXJkJywgJ2NhcmRzX19pdGVtJywgdHJhaW5pbmdJbmZvLmtleSk7XHJcbiAgdHJhaW5pbmdDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke3RyYWluaW5nSW5mby5iZ31cIilgO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwsIHRpbWVyIGFuZCBzY29yZSBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IGluZm8gPSBpbml0SW5mb0NvbnRhaW5lcihnYW1lTGV2ZWwuZWFzeSwgZ2FtZUxldmVsLmVhc3kuZHVyYXRpb24sIDApO1xyXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX2luZm8nKTtcclxuICByZXBsYWNlQ29udGVudChpbmZvQ29udGFpbmVyLCBpbmZvLCB0cmFpbmluZ0NhcmQpO1xyXG5cclxuICAvLyBpbml0IGdhbWUgY29udGFpbmVyXHJcbiAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2dhbWUnKTtcclxuICB0cmFpbmluZ0NhcmQuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgZ2FtZVxyXG4gIGNvbnN0IGdhbWUgPSBpbml0R2FtZShnYW1lTGV2ZWxJbmZvLmVhc3ksIGdhbWVDb250YWluZXIpO1xyXG5cclxuICAvLyBzdGFydCBnYW1lXHJcbiAgc3RhcnRHYW1lKGdhbWUpO1xyXG5cclxuICAvLyBpbml0IGhlbHAgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBidXR0b25zID0gaW5pdEhlbHBCdXR0b25zKCk7XHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbmluZ19fYnV0dG9ucycpO1xyXG4gIHJlcGxhY2VDb250ZW50KGJ1dHRvbnNDb250YWluZXIsIGJ1dHRvbnMsIHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIC8vIGluaXQgb3ZlcmxheVxyXG4gIGNvbnN0IG92ZXJsYXkgPSBpbml0T3ZlcmxheSh0cmFpbmluZ0luZm8ucnVsZXMpO1xyXG4gIGNvbnN0IG92ZXJsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICByZXBsYWNlQ29udGVudChvdmVybGF5Q29udGFpbmVyLCBvdmVybGF5LCB0cmFpbmluZ0NhcmQpO1xyXG5cclxuICAvLyBpbml0IGF1ZGlvXHJcbiAgY29uc3QgYXVkaW8gPSBpbml0QXVkaW8oKTtcclxuICBjb25zdCBhdWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbmluZ19fYXVkaW8nKTtcclxuICByZXBsYWNlQ29udGVudChhdWRpb0NvbnRhaW5lciwgYXVkaW8sIHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIHJldHVybiB0cmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG4iLCJjb25zdCBzdGF0ZSA9IHtcclxuICBhY3RpdmVQYWdlTmFtZTogJ21haW4nLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2VOYW1lKG5hbWUpIHtcclxuICBzdGF0ZS5hY3RpdmVQYWdlTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQYWdlTmFtZSgpIHtcclxuICByZXR1cm4gc3RhdGUuYWN0aXZlUGFnZU5hbWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKV07XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXQubmFtZSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faWNvbicpO1xyXG5cclxuICBjb25zdCBtZW51QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21lbnVfb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBvdmVybGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5UGFnZSk7XHJcblxyXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHRNZW51SWNvbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSB0ZXh0TWVudUljb24gPT09ICdtZW51JyA/ICdjbG9zZScgOiAnbWVudSc7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1JY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua19faWNvbicpXTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAobWVudUljb24udGV4dENvbnRlbnQgPT09ICdjbG9zZSdcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVCYWNrZ3JvdW5kXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51SWNvblxyXG4gICAgICAmJiAhbWVudUl0ZW1JY29ucy5pbmNsdWRlcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBtZW51TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRyYWluaW5nVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0eXBlTmFtZTogJ9Cf0LDQvNGP0YLRjCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHR5cGVOYW1lOiAn0JLQvdC40LzQsNC90LjQtScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHlwZU5hbWU6ICfQm9C+0LPQuNC60LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHR5cGVOYW1lOiAn0JzRi9GI0LvQtdC90LjQtScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFpbmluZ3NJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4JyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeDEnLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXguanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7QuSDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4MicsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgzJyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnY2xpY2snLFxyXG4gICAgICAgIG5hbWU6ICfQmtC70LjQui3QmtC70LjQuicsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvYXR0ZW50aW9uL2NsaWNrLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINCy0L3QuNC80LDQvdC40Y8nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdsb2dpYycsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2FkZGluZycsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LvQvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL2FkZGluZy5qcGcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2FkZGluZy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0J3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YPQvNC1INGB0LvQvtC20LjRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAndGhpbmtpbmcnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICd1bmlrdW0nLFxyXG4gICAgICAgIG5hbWU6ICfQo9C90LjQutGD0LwnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL3RoaW5raW5nL3VuaWt1bS5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtCz0L4g0LzRi9GI0LvQtdC90LjRjycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IGdhbWVTdGF0dXMsIGdldEdhbWVBdWRpb1N0YXR1cyB9IGZyb20gJy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVMZXZlbEluZm8gPSB7XHJcbiAgZWFzeToge1xyXG4gICAgdGVybXNDb3VudDogMixcclxuICAgIG1heFRlcm06IDIwLFxyXG4gICAgYW5zd2Vyc0NvdW50OiAzLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICB0ZXJtc0NvdW50OiAzLFxyXG4gICAgbWF4VGVybTogNDAsXHJcbiAgICBhbnN3ZXJzQ291bnQ6IDQsXHJcbiAgfSxcclxuICBoYXJkOiB7XHJcbiAgICB0ZXJtc0NvdW50OiA0LFxyXG4gICAgbWF4VGVybTogNjAsXHJcbiAgICBhbnN3ZXJzQ291bnQ6IDUsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGF1ZGlvU291bmQoYXVkaW9OYW1lKSB7XHJcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLW5hbWU9XCIke2F1ZGlvTmFtZX1cIl1gKTtcclxuICBpZiAoYXVkaW8pIHtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1peEFuc3dlcnMoYXJyKSB7XHJcbiAgcmV0dXJuIFsuLi5hcnJdLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuc3dlcnMoY29ycmVjdEFuc3dlciwgbWF4VGVybSwgYW5zd2Vyc0NvdW50KSB7XHJcbiAgY29uc3QgYW5zd2VycyA9IFtjb3JyZWN0QW5zd2VyXTtcclxuICB3aGlsZSAoYW5zd2Vycy5sZW5ndGggPCBhbnN3ZXJzQ291bnQpIHtcclxuICAgIGNvbnN0IG5leHRBbnN3ZXIgPSBjb3JyZWN0QW5zd2VyICsgTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhUZXJtICogMC41KTtcclxuICAgIGlmICghYW5zd2Vycy5pbmNsdWRlcyhuZXh0QW5zd2VyKSkge1xyXG4gICAgICBhbnN3ZXJzLnB1c2gobmV4dEFuc3dlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtaXhBbnN3ZXJzKGFuc3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUV4YW1wbGUoeyB0ZXJtc0NvdW50LCBtYXhUZXJtLCBhbnN3ZXJzQ291bnQgfSkge1xyXG4gIGNvbnN0IHRlcm1zID0gQXJyYXkodGVybXNDb3VudCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4VGVybSkgKyAxKTtcclxuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gdGVybXMucmVkdWNlKChzdW0sIHRlcm0pID0+IHN1bSArIHRlcm0pO1xyXG4gIGNvbnN0IGFuc3dlcnMgPSBnZXRBbnN3ZXJzKGNvcnJlY3RBbnN3ZXIsIG1heFRlcm0sIGFuc3dlcnNDb3VudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdGlvbjogdGVybXMuam9pbignICsgJyksXHJcbiAgICBjb3JyZWN0QW5zd2VyLFxyXG4gICAgYW5zd2VycyxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UXVlc3Rpb24ocXVlc3Rpb24pIHtcclxuICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHF1ZXN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZGluZ19fcXVlc3Rpb24nKTtcclxuICBxdWVzdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IHF1ZXN0aW9uO1xyXG4gIHJldHVybiBxdWVzdGlvbkNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEFuc3dlcnMoZXhhbXBsZSwgc3VjY2Vzc0hhbmRsZXIsIGZhaWxIYW5kbGVyKSB7XHJcbiAgY29uc3QgYW5zd2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFuc3dlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkaW5nX19hbnN3ZXJzJyk7XHJcblxyXG4gIGV4YW1wbGUuYW5zd2Vycy5mb3JFYWNoKChhbnN3ZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFuc3dlcjtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4YW1wbGUuY29ycmVjdEFuc3dlciA9PT0gYW5zd2VyXHJcbiAgICAgID8gc3VjY2Vzc0hhbmRsZXJcclxuICAgICAgOiBmYWlsSGFuZGxlcik7XHJcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhbnN3ZXJzQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeGFtcGxlKGdhbWVPYmosIGV4YW1wbGUpIHtcclxuICBjb25zdCB7IGNvbnRhaW5lciwgbGV2ZWwgfSA9IGdhbWVPYmo7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBpbml0IHF1ZXN0aW9uKGV4YW1wbGUgdG8gc3VtKSBjb250YWluZXJcclxuICBjb25zdCBxdWVzdGlvbiA9IGluaXRRdWVzdGlvbihleGFtcGxlLnF1ZXN0aW9uKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb24pO1xyXG5cclxuICAvLyBpbml0IGFuc3dlciBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiB9O1xyXG5cclxuICBjb25zdCBzdWNjZXNzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIG5ld0dhbWVTdGF0ZS5zY29yZSArPSAxO1xyXG4gICAgaWYgKG5ld0dhbWVTdGF0ZS5zdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgICAgY29uc3QgbmV3RXhhbXBsZSA9IGdlbmVyYXRlRXhhbXBsZShsZXZlbCk7XHJcbiAgICAgIHJlbmRlckV4YW1wbGUobmV3R2FtZVN0YXRlLCBuZXdFeGFtcGxlKTtcclxuXHJcbiAgICAgIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICAgICAgaWYgKGF1ZGlvQWxsb3dpbmcpIHtcclxuICAgICAgICBhdWRpb1NvdW5kKCdyaWdodC1hbnN3ZXInKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX19pdGVtJyk7XHJcbiAgICAgIHNjb3JlSXRlbS50ZXh0Q29udGVudCA9IG5ld0dhbWVTdGF0ZS5zY29yZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmYWlsSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmIChuZXdHYW1lU3RhdGUuc3RhdHVzID09PSBnYW1lU3RhdHVzLnN0YXJ0KSB7XHJcbiAgICAgIGNvbnN0IG5ld0V4YW1wbGUgPSBnZW5lcmF0ZUV4YW1wbGUoZ2FtZU9iai5sZXZlbCk7XHJcbiAgICAgIHJlbmRlckV4YW1wbGUobmV3R2FtZVN0YXRlLCBuZXdFeGFtcGxlKTtcclxuXHJcbiAgICAgIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICAgICAgaWYgKGF1ZGlvQWxsb3dpbmcpIHtcclxuICAgICAgICBhdWRpb1NvdW5kKCd3cm9uZy1hbnN3ZXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlcnMgPSBpbml0QW5zd2VycyhleGFtcGxlLCBzdWNjZXNzSGFuZGxlciwgZmFpbEhhbmRsZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhbnN3ZXJzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHYW1lKGxldmVsLCBjb250YWluZXIpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2NvcmU6IDAsXHJcbiAgICBsZXZlbCxcclxuICAgIHN0YXR1czogZ2FtZVN0YXR1cy5pbml0LFxyXG4gICAgY29udGFpbmVyLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoZ2FtZU9iaikge1xyXG4gIGNvbnN0IGV4YW1wbGUgPSBnZW5lcmF0ZUV4YW1wbGUoZ2FtZU9iai5sZXZlbCk7XHJcbiAgY29uc3QgbmV3R2FtZVN0YXRlID0geyAuLi5nYW1lT2JqLCBzdGF0dXM6IGdhbWVTdGF0dXMuc3RhcnQgfTtcclxuICByZW5kZXJFeGFtcGxlKG5ld0dhbWVTdGF0ZSwgZXhhbXBsZSk7XHJcblxyXG4gIHJldHVybiBuZXdHYW1lU3RhdGU7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==