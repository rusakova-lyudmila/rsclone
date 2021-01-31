/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/components/audio.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/audio.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initAudio
/* harmony export */ });
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

/***/ }),

/***/ "./src/assets/js/components/helpButtons.js":
/*!*************************************************!*\
  !*** ./src/assets/js/components/helpButtons.js ***!
  \*************************************************/
/*! namespace exports */
/*! export closeTrainingHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initHelpButtons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initOverlay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTrainingHandler": () => /* binding */ closeTrainingHandler,
/* harmony export */   "initHelpButtons": () => /* binding */ initHelpButtons,
/* harmony export */   "initOverlay": () => /* binding */ initOverlay
/* harmony export */ });
/* harmony import */ var _initSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initSection */ "./src/assets/js/initSection.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/assets/js/game.js");
;

function closeTrainingHandler() {
  var pageContent = (0,_initSection__WEBPACK_IMPORTED_MODULE_0__.default)('trainings');
  var mainContainer = document.querySelector('.main-container');
  mainContainer.textContent = '';
  mainContainer.appendChild(pageContent);
}

function soundTrainingHandler(e) {
  var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_1__.getGameAudioStatus)();
  var buttonSound = e.target;

  if (audioAllowing) {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.setGameAudioStatus)(false);
    buttonSound.textContent = 'volume_off';
  } else {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.setGameAudioStatus)(true);
    buttonSound.textContent = 'volume_up';
  }
}

function closeOverlayHandler() {
  var overlayContainer = document.querySelector('.training__overlay');
  overlayContainer.classList.add('hidden');
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

/***/ }),

/***/ "./src/assets/js/components/timer.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/timer.js ***!
  \*******************************************/
/*! namespace exports */
/*! export pauseTimer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export startTimer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startTimer": () => /* binding */ startTimer,
/* harmony export */   "pauseTimer": () => /* binding */ pauseTimer
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var status = {
  start: 'start',
  pause: 'pause'
};
var timeout;

function getLeftTime(_ref) {
  var time = _ref.time,
      beginTime = _ref.beginTime;
  var diff = Date.now() - beginTime;
  return time - Math.floor(diff / 1000);
}

function renderTimer(timerState) {
  var container = timerState.container;
  container.innerHTML = ''; // init timer info container

  var timerItem = document.createElement('div');
  timerItem.classList.add('training__timer', 'timer');
  container.appendChild(timerItem); // init timer

  var timer = document.createElement('div');
  timer.classList.add('timer__item');
  timer.textContent = getLeftTime(timerState);
  timerItem.appendChild(timer);
}

function nextTick(timerState) {
  var timerStatus = timerState.status,
      endHandler = timerState.endHandler;
  var isEnd = getLeftTime(timerState) < 0;

  if (isEnd) {
    clearTimeout(timeout);

    if (endHandler) {
      endHandler();
    }
  } else if (timerStatus === status.start) {
    renderTimer(timerState);
    timeout = setTimeout(function () {
      nextTick(timerState);
    }, 1000);
  }
}

function startTimer(time, container, endHandler) {
  var newState = {
    time: time,
    container: container,
    beginTime: Date.now(),
    status: status.start,
    endHandler: endHandler
  };
  nextTick(newState);
}
function pauseTimer(timerState) {
  var newState = _objectSpread(_objectSpread({}, timerState), {}, {
    status: status.pause,
    time: Date.now() - timerState.beginTime
  });

  clearTimeout(timeout);
  renderTimer(newState);
}

/***/ }),

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
    levelName: 'easy',
    name: 'легкий',
    duration: 30
  },
  medium: {
    levelName: 'medium',
    name: 'средний',
    duration: 50
  },
  hard: {
    levelName: 'hard',
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
/* harmony import */ var _trainings_comparison__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings/comparison */ "./src/assets/js/trainings/comparison.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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

function initStartTraining(trainingInfo, game) {
  // init start training container
  var startTrainingContainer = document.createElement('div');
  startTrainingContainer.classList.add('training__start');
  startTrainingContainer.innerHTML = "<p>".concat(trainingInfo.description, "</p>"); // init level game select container

  var levelSelectContainer = document.createElement('div');
  levelSelectContainer.classList.add('training__select');
  startTrainingContainer.appendChild(levelSelectContainer); // init level game select label

  var levelSelectLabel = document.createElement('div');
  levelSelectLabel.textContent = 'Выберите уровень:';
  levelSelectContainer.appendChild(levelSelectLabel); // init level game select

  var levelSelect = document.createElement('select');
  levelSelectContainer.appendChild(levelSelect); // init select options

  Object.keys(_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel).map(function (item) {
    var option = document.createElement('option');
    option.setAttribute('value', item);
    option.textContent = _game__WEBPACK_IMPORTED_MODULE_1__.gameLevel[item].name;
    levelSelect.appendChild(option);
    return option;
  }); // init start training button

  var startButton = document.createElement('button');
  startButton.classList.add('training__button', 'btn');
  startButton.innerHTML = '<i class="material-icons">play_circle_outline</i>Начать';
  startButton.addEventListener('click', function () {
    var selectedGameLevel = levelSelect.value;
    (0,_trainings_comparison__WEBPACK_IMPORTED_MODULE_2__.startGame)(_objectSpread(_objectSpread({}, game), {}, {
      level: _trainings_comparison__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel[selectedGameLevel].levelName],
      duration: _game__WEBPACK_IMPORTED_MODULE_1__.gameLevel[selectedGameLevel].duration
    }));
  });
  startTrainingContainer.appendChild(startButton);
  return startTrainingContainer;
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

  var game = (0,_trainings_comparison__WEBPACK_IMPORTED_MODULE_2__.initGame)(_trainings_comparison__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy.levelName], trainingCard, trainingInfo); // start training

  var startTraining = initStartTraining(trainingInfo, game);
  var startTrainingContainer = document.querySelector('.training__start');
  replaceContent(startTrainingContainer, startTraining, trainingCard);
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
    image: 'img/memory/matrix.png',
    bg: 'img/memory/bg/memory.jpg',
    description: 'Тренажер для развития образной памяти',
    rules: '<p>В клетчатом поле на некоторое время подсветятся зеленым цветом квадратики, расположение которых нужно запомнить.</p><p>Далее квадратики станут одного цвета, нужно за определенное время успеть нажать на те квадратики, которые были подсвечены зеленым цветом, в любом порядке.</p><p>Если выбранный квадратик окажется неверным, то он подсветится красным цветом.</p><p>Игра повторяется, пока не закончилось время таймера.</p>'
  }]
}, {
  typeKey: 'attention',
  trainings: [{
    key: 'click',
    name: 'Клик-Клик',
    image: 'img/attention/click.png',
    bg: 'img/attention/bg/attention.jpg',
    description: 'Тренажер для развития внимания',
    rules: '<p>В клетчатом поле появятся числа, которые нужно прокликать (нажать) по возрастанию.</p></p><p>Игра повторяется, пока не закончилось время таймера.</p>'
  }]
}, {
  typeKey: 'logic',
  trainings: [{
    key: 'addition',
    name: 'Сложение',
    image: 'img/logic/addition.png',
    bg: 'img/logic/bg/logic.jpg',
    description: 'Тренажер для развития логики',
    rules: '<p>Необходимо в уме сложить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
  }, {
    key: 'subtraction',
    name: 'Вычитание',
    image: 'img/logic/subtraction.png',
    bg: 'img/logic/bg/logic.jpg',
    description: 'Тренажер для развития логики',
    rules: '<p>Необходимо в уме вычесть все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
  }, {
    key: 'multiplication',
    name: 'Умножение',
    image: 'img/logic/multiplication.png',
    bg: 'img/logic/bg/logic.jpg',
    description: 'Тренажер для развития логики',
    rules: '<p>Необходимо в уме перемножить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
  }]
}, {
  typeKey: 'thinking',
  trainings: [{
    key: 'comparison',
    name: 'Пространственное сравнение',
    image: 'img/thinking/comparison.png',
    bg: 'img/thinking/bg/thinking.jpg',
    description: 'Тренажер для развития образного мышления',
    rules: '<p>Необходимо запомнить в каком месте расположен закрашенный кружок, если при смене кружков закрашенный кружок останется на свем месте, то нужно нажать на кнопку "Да", иначе - "Нет".</p><p>Если вы ответили верно, то поле вокруг кружков подсветится зеленым цветом, иначе - красным.</p><p>Смена кружков происходит, пока не закончилось время таймера.</p>'
  }]
}];

/***/ }),

/***/ "./src/assets/js/trainings/comparison.js":
/*!***********************************************!*\
  !*** ./src/assets/js/trainings/comparison.js ***!
  \***********************************************/
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
/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/timer */ "./src/assets/js/components/timer.js");
/* harmony import */ var _components_helpButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/helpButtons */ "./src/assets/js/components/helpButtons.js");
/* harmony import */ var _components_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/audio */ "./src/assets/js/components/audio.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var gameLevelInfo = _defineProperty({}, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.easy.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.easy,
  variantCount: 4
});

function audioSound(audioName) {
  var audio = document.querySelector("audio[data-name=\"".concat(audioName, "\"]"));

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function generateExample(_ref, previousQuestion) {
  var variantCount = _ref.variantCount;
  var question = Math.random() > 0.7 ? previousQuestion : Math.floor(Math.random() * variantCount);
  var correctAnswer = previousQuestion === question ? 'Да' : 'Нет';
  var answers = ['Да', 'Нет'];
  return {
    question: question,
    correctAnswer: correctAnswer,
    answers: answers
  };
}

function initQuestion(question) {
  var questionContainer = document.createElement('div');
  questionContainer.classList.add('training__question');
  var canvasContainer = document.createElement('canvas');
  canvasContainer.classList.add('training__canvas');
  canvasContainer.setAttribute('width', '300px');
  canvasContainer.setAttribute('height', '180px');
  var circleCoordinates = [[75, 40], [225, 40], [75, 140], [225, 140]];
  var canvasContent = canvasContainer.getContext('2d');
  canvasContent.strokeStyle = '#2c80a5';
  canvasContent.lineWidth = 5;
  circleCoordinates.forEach(function (_ref2, ind) {
    var _ref3 = _slicedToArray(_ref2, 2),
        x = _ref3[0],
        y = _ref3[1];

    canvasContent.beginPath();
    canvasContent.fillStyle = ind === question ? '#2c80a5' : '#fff';
    canvasContent.arc(x, y, 35, 0, Math.PI * 2, true);
    canvasContent.fill();
    canvasContent.closePath();
    canvasContent.stroke();
  });
  questionContainer.appendChild(canvasContainer);
  return questionContainer;
}

function initAnswers(example, successHandler, failHandler) {
  var answersContainer = document.createElement('div');
  answersContainer.classList.add('training__answers');
  example.answers.forEach(function (answer) {
    var button = document.createElement('button');
    button.classList.add('btn', 'btn-lg');
    button.textContent = answer;
    button.addEventListener('click', example.correctAnswer === answer ? successHandler : failHandler);
    answersContainer.appendChild(button);
  });
  return answersContainer;
}

function renderExample(gameObj) {
  var firstRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var container = gameObj.container,
      level = gameObj.level,
      example = gameObj.example;
  container.innerHTML = ''; // init question container

  var question = initQuestion(example.question);
  container.appendChild(question);
  var scoreItem = document.querySelector('.score__item');
  scoreItem.textContent = gameObj.score; // init answer buttons container

  var newGameState = _objectSpread({}, gameObj);

  var successHandler = function successHandler() {
    newGameState.score += 1;

    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(level, gameObj.example.question);
      renderExample(_objectSpread(_objectSpread({}, newGameState), {}, {
        example: newExample
      }));
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('right-answer');
      }

      container.classList.add('comparison_right');
      setTimeout(function () {
        container.classList.remove('comparison_right');
      }, 1000);
    }
  };

  var failHandler = function failHandler() {
    newGameState.score -= 1;

    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(level, gameObj.example.question);
      renderExample(_objectSpread(_objectSpread({}, newGameState), {}, {
        example: newExample
      }));
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('wrong-answer');
      }

      container.classList.add('comparison_wrong');
      setTimeout(function () {
        container.classList.remove('comparison_wrong');
      }, 1000);
    }
  };

  var answers = firstRender ? initAnswers(example, function () {}, function () {}) : initAnswers(example, successHandler, failHandler);
  container.appendChild(answers);
}

function renderInfo(gameState) {
  var infoContainer = document.createElement('div');
  infoContainer.classList.add('training__info');
  gameState.gameContainer.appendChild(infoContainer); // init level info container

  var levelItem = document.createElement('div');
  levelItem.classList.add('training__level');
  levelItem.innerHTML = "<span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C:</span> ".concat(gameState.level.gameLevel.name);
  infoContainer.appendChild(levelItem); // init timer info container

  var timerItem = document.createElement('div');
  timerItem.classList.add('training__timer', 'timer');
  infoContainer.appendChild(timerItem); // init score info container

  var scoreItem = document.createElement('div');
  scoreItem.classList.add('training__score');
  scoreItem.innerHTML = '<span>Очки:</span> <span class="score__item">0</span>';
  infoContainer.appendChild(scoreItem);
  return {
    timerContainer: timerItem
  };
}

function stopGame(gameState) {
  var scoreItem = document.querySelector('.score__item');
  var score = scoreItem.textContent;
  var gameContainer = gameState.gameContainer; // init finish training container

  var finishTrainingContainer = document.createElement('div');
  finishTrainingContainer.classList.add('training__finish'); // init finish score container

  var finishScore = document.createElement('div');
  finishScore.classList.add('finish__score');
  finishScore.innerHTML = "<p>\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:</p><div>".concat(score, "</div>");
  finishTrainingContainer.appendChild(finishScore); // init finish training button

  var finishButton = document.createElement('button');
  finishButton.classList.add('training__button', 'btn');
  finishButton.innerHTML = '<i class="material-icons">close</i>Выйти';
  finishButton.addEventListener('click', _components_helpButtons__WEBPACK_IMPORTED_MODULE_2__.closeTrainingHandler);
  finishTrainingContainer.appendChild(finishButton);
  gameContainer.textContent = '';
  gameContainer.appendChild(finishTrainingContainer);
}

function renderGame(gameState) {
  var status = gameState.status,
      gameContainer = gameState.gameContainer,
      trainingInfo = gameState.trainingInfo;

  if (status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
    gameContainer.innerHTML = '';
    var result = renderInfo(gameState);
    var exampleContainer = document.createElement('div');
    exampleContainer.classList.add('training__game');
    gameContainer.appendChild(exampleContainer);
    var buttonsContainer = (0,_components_helpButtons__WEBPACK_IMPORTED_MODULE_2__.initHelpButtons)();
    gameContainer.appendChild(buttonsContainer);
    var overlayContainer = (0,_components_helpButtons__WEBPACK_IMPORTED_MODULE_2__.initOverlay)(trainingInfo.rules);
    gameContainer.appendChild(overlayContainer); // init audio

    var audio = (0,_components_audio__WEBPACK_IMPORTED_MODULE_3__.default)();
    gameContainer.appendChild(audio);
    (0,_components_timer__WEBPACK_IMPORTED_MODULE_1__.startTimer)(gameState.duration, result.timerContainer, function () {
      stopGame(gameState);
    });
    renderExample(_objectSpread(_objectSpread({}, gameState), {}, {
      container: exampleContainer
    }), true);
    setTimeout(function () {
      var newExample = generateExample(gameState.level, gameState.example.question);
      renderExample(_objectSpread(_objectSpread({}, gameState), {}, {
        container: exampleContainer,
        example: newExample
      }));
    }, 2000);
  }
}

function initGame(level, gameContainer, trainingInfo) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 60;
  return {
    score: 0,
    level: level,
    status: _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.init,
    gameContainer: gameContainer,
    example: {},
    duration: duration,
    trainingInfo: trainingInfo
  };
}
function startGame(gameObj) {
  var example = generateExample(gameObj.level, 0);

  var newGameState = _objectSpread(_objectSpread({}, gameObj), {}, {
    status: _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start,
    example: example
  });

  renderGame(newGameState);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVscEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aW1lci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9jb21wYXJpc29uLmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbml0QXVkaW8iLCJhdWRpb0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJpZ2h0QW5zd2VyQXVkaW8iLCJzZXRBdHRyaWJ1dGUiLCJkYXRhc2V0IiwibmFtZSIsImFwcGVuZENoaWxkIiwid3JvbmdBbnN3ZXJBdWRpbyIsInRpbWVvdXRBdWRpbyIsImNsb3NlVHJhaW5pbmdIYW5kbGVyIiwicGFnZUNvbnRlbnQiLCJpbml0U2VjdGlvbiIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzb3VuZFRyYWluaW5nSGFuZGxlciIsImUiLCJhdWRpb0FsbG93aW5nIiwiZ2V0R2FtZUF1ZGlvU3RhdHVzIiwiYnV0dG9uU291bmQiLCJ0YXJnZXQiLCJzZXRHYW1lQXVkaW9TdGF0dXMiLCJjbG9zZU92ZXJsYXlIYW5kbGVyIiwib3ZlcmxheUNvbnRhaW5lciIsImluaXRIZWxwQnV0dG9ucyIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b25FeGl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbkluZm8iLCJvdmVybGF5IiwicmVtb3ZlIiwiaW5pdE92ZXJsYXkiLCJjb250ZW50Iiwib3ZlcmxheUNvbnRlbnQiLCJpbm5lckhUTUwiLCJidXR0b25PdmVybGF5Iiwic3RhdHVzIiwic3RhcnQiLCJwYXVzZSIsInRpbWVvdXQiLCJnZXRMZWZ0VGltZSIsInRpbWUiLCJiZWdpblRpbWUiLCJkaWZmIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJlbmRlclRpbWVyIiwidGltZXJTdGF0ZSIsImNvbnRhaW5lciIsInRpbWVySXRlbSIsInRpbWVyIiwibmV4dFRpY2siLCJ0aW1lclN0YXR1cyIsImVuZEhhbmRsZXIiLCJpc0VuZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzdGFydFRpbWVyIiwibmV3U3RhdGUiLCJwYXVzZVRpbWVyIiwiZ2FtZUxldmVsIiwiZWFzeSIsImxldmVsTmFtZSIsImR1cmF0aW9uIiwibWVkaXVtIiwiaGFyZCIsImdhbWVTdGF0dXMiLCJpbml0Iiwic3RvcCIsImdhbWVBdWRpbyIsImF1ZGlvIiwiYXVkaW9TdGF0dXMiLCJpbml0SGVhZGVyIiwiaW5pdE1haW5QYWdlIiwiaW5pdEZvb3RlciIsInRvZ2dsZU1lbnUiLCJhY3RpdmVNZW51SXRlbSIsInBhZ2VGb290ZXIiLCJib2R5IiwicGFnZUluZm9Db250YWluZXIiLCJwYWdlTG9nb0NvbnRhaW5lciIsInBhZ2VIZWFkZXIiLCJuYXZNZW51IiwiaW5pdE1lbnUiLCJuYXZNb2JpbGVNZW51IiwiY29udGFpbnMiLCJwYWdlQ29udGFpbmVyIiwicGFnZUhlYWRpbmciLCJwYWdlU3ViSGVhZGluZyIsImJ1dHRvbkxvZ2luIiwicmVnaXN0ZXJMb2dpbiIsIm1lbnVJdGVtcyIsIm1haW4iLCJ0cmFpbmluZyIsInN0YXRpc3RpYyIsImNsaWNrSGFuZGxlciIsInNlY3Rpb25OYW1lIiwic2VjdGlvbiIsInNldEFjdGl2ZVBhZ2VOYW1lIiwibW9iaWxlIiwibWVudVRvZ2dsZSIsIm1lbnVJY29uIiwiYWN0aXZlUGFnZU5hbWUiLCJnZXRBY3RpdmVQYWdlTmFtZSIsIm1lbnVMaXN0IiwibWVudUNvbnRhaW5lciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsIm1lbnVJdGVtIiwibWVudUl0ZW1JY29uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZW51SXRlbUxpbmsiLCJjYXJkc0VsZW1lbnRzIiwiaW5pdFN1YlNlY3Rpb24iLCJjYXJkc0NvbnRhaW5lciIsInJlcGxhY2VXaXRoIiwidHJhaW5pbmdUeXBlcyIsInR5cGVLZXkiLCJ0eXBlTmFtZSIsImNhcmRJdGVtIiwiY2FyZEltYWdlIiwiY2FyZE5hbWUiLCJzdWJTZWN0aW9uS2V5IiwidHJhaW5pbmdLZXkiLCJjdXJyZW50VGFyZ2V0IiwiaW5pdFRyYWluaW5nIiwiZ2V0U2VjdGlvbkRhdGFCeU5hbWUiLCJzdWJTZWN0aW9uTmFtZSIsInN1YlNlY3Rpb24iLCJ2YWx1ZXMiLCJ0cmFpbmluZ3NJdGVtcyIsImZpbmQiLCJ0cmFpbmluZ3MiLCJyb3RhdGVDYXJkIiwidGFyZ2V0Q2FyZE5hbWUiLCJjYXJkIiwidGFyZ2V0Q2FyZEJsb2NrIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZUNvbnRlbnQiLCJjdXJyZW50QmxvY2siLCJuZXdCbG9jayIsInBhcmVudEJsb2NrIiwicHJlcGVuZCIsImluaXRTdWJTZWN0aW9uSGVhZGluZyIsInNlY3Rpb25IZWFkaW5nIiwiaW5pdFRyYWluQ2FyZHMiLCJjYXJkQmxvY2siLCJrZXkiLCJjYXJkTGluayIsImltYWdlIiwiY2FyZENvbnRlbnQiLCJjYXJkUm90YXRlQnV0dG9uIiwiY2FyZEJhY2tJdGVtIiwiY2FyZEJhY2tEZXNjciIsImRlc2NyaXB0aW9uIiwiY2FyZEJhY2tDb250ZW50IiwiY2FyZEJhY2tOYW1lIiwic2VjdGlvbkhlYWRlciIsInNlY3Rpb25IZWFkaW5nQ29udGFpbmVyIiwidHJhaW5pbmdJbmZvIiwiaW5pdFN0YXJ0VHJhaW5pbmciLCJnYW1lIiwic3RhcnRUcmFpbmluZ0NvbnRhaW5lciIsImxldmVsU2VsZWN0Q29udGFpbmVyIiwibGV2ZWxTZWxlY3RMYWJlbCIsImxldmVsU2VsZWN0IiwibWFwIiwib3B0aW9uIiwic3RhcnRCdXR0b24iLCJzZWxlY3RlZEdhbWVMZXZlbCIsInZhbHVlIiwic3RhcnRHYW1lIiwibGV2ZWwiLCJnYW1lTGV2ZWxJbmZvIiwic3ViU2VjdGlvblRyYWluaW5nIiwidHJhaW5pbmdDb250YWluZXIiLCJ0cmFpbmluZ0NhcmQiLCJiZyIsImluaXRHYW1lIiwic3RhcnRUcmFpbmluZyIsInN0YXRlIiwic2V0QWN0aXZlTWVudUl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUJhY2tncm91bmQiLCJvdmVybGF5UGFnZSIsInRleHRNZW51SWNvbiIsIm1lbnVJdGVtSWNvbnMiLCJpbmNsdWRlcyIsImxpbmsiLCJydWxlcyIsInZhcmlhbnRDb3VudCIsImF1ZGlvU291bmQiLCJhdWRpb05hbWUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJnZW5lcmF0ZUV4YW1wbGUiLCJwcmV2aW91c1F1ZXN0aW9uIiwicXVlc3Rpb24iLCJyYW5kb20iLCJjb3JyZWN0QW5zd2VyIiwiYW5zd2VycyIsImluaXRRdWVzdGlvbiIsInF1ZXN0aW9uQ29udGFpbmVyIiwiY2FudmFzQ29udGFpbmVyIiwiY2lyY2xlQ29vcmRpbmF0ZXMiLCJjYW52YXNDb250ZW50IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiaW5kIiwieCIsInkiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJpbml0QW5zd2VycyIsImV4YW1wbGUiLCJzdWNjZXNzSGFuZGxlciIsImZhaWxIYW5kbGVyIiwiYW5zd2Vyc0NvbnRhaW5lciIsImFuc3dlciIsImJ1dHRvbiIsInJlbmRlckV4YW1wbGUiLCJnYW1lT2JqIiwiZmlyc3RSZW5kZXIiLCJzY29yZUl0ZW0iLCJzY29yZSIsIm5ld0dhbWVTdGF0ZSIsIm5ld0V4YW1wbGUiLCJyZW5kZXJJbmZvIiwiZ2FtZVN0YXRlIiwiaW5mb0NvbnRhaW5lciIsImdhbWVDb250YWluZXIiLCJsZXZlbEl0ZW0iLCJ0aW1lckNvbnRhaW5lciIsInN0b3BHYW1lIiwiZmluaXNoVHJhaW5pbmdDb250YWluZXIiLCJmaW5pc2hTY29yZSIsImZpbmlzaEJ1dHRvbiIsInJlbmRlckdhbWUiLCJyZXN1bHQiLCJleGFtcGxl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N0UsWUFBeEMsRUFBcUU7QUFBQSxNQUFmcEcsUUFBZSx1RUFBSixFQUFJO0FBQzFFLFNBQU87QUFDTDJLLFNBQUssRUFBRSxDQURGO0FBRUwxRCxTQUFLLEVBQUxBLEtBRks7QUFHTDlJLFVBQU0sRUFBRWdDLGtEQUhIO0FBSUw4SyxpQkFBYSxFQUFiQSxhQUpLO0FBS0xoQixXQUFPLEVBQUUsRUFMSjtBQU1MakssWUFBUSxFQUFSQSxRQU5LO0FBT0xvRyxnQkFBWSxFQUFaQTtBQVBLLEdBQVA7QUFTRDtBQUVNLFNBQVNZLFNBQVQsQ0FBbUJ3RCxPQUFuQixFQUE0QjtBQUNqQyxNQUFNUCxPQUFPLEdBQUd6QixlQUFlLENBQUNnQyxPQUFPLENBQUN2RCxLQUFULEVBQWdCLENBQWhCLENBQS9COztBQUNBLE1BQU0yRCxZQUFZLG1DQUFRSixPQUFSO0FBQWlCck0sVUFBTSxFQUFFZ0MsbURBQXpCO0FBQTJDOEosV0FBTyxFQUFQQTtBQUEzQyxJQUFsQjs7QUFDQXVCLFlBQVUsQ0FBQ1osWUFBRCxDQUFWO0FBRUEsU0FBT0EsWUFBUDtBQUNELEM7Ozs7OztVQzdPRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRBdWRpbygpIHtcclxuICBjb25zdCBhdWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19hdWRpbycpO1xyXG5cclxuICAvLyBpbml0IHJpZ2h0IGFuc3dlciBjbGljayBhdWRpb1xyXG4gIGNvbnN0IHJpZ2h0QW5zd2VyQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHJpZ2h0QW5zd2VyQXVkaW8uY2xhc3NMaXN0LmFkZCgnYXVkaW9fX2l0ZW0nKTtcclxuICByaWdodEFuc3dlckF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2F1ZGlvL2Fuc3dlcl9yaWdodC5tcDMnKTtcclxuICByaWdodEFuc3dlckF1ZGlvLmRhdGFzZXQubmFtZSA9ICdyaWdodC1hbnN3ZXInO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QW5zd2VyQXVkaW8pO1xyXG5cclxuICAvLyBpbml0IHdyb25nIGNsaWNrIGF1ZGlvXHJcbiAgY29uc3Qgd3JvbmdBbnN3ZXJBdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgd3JvbmdBbnN3ZXJBdWRpby5jbGFzc0xpc3QuYWRkKCdhdWRpb19faXRlbScpO1xyXG4gIHdyb25nQW5zd2VyQXVkaW8uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYXVkaW8vYW5zd2VyX3dyb25nLm1wMycpO1xyXG4gIHdyb25nQW5zd2VyQXVkaW8uZGF0YXNldC5uYW1lID0gJ3dyb25nLWFuc3dlcic7XHJcbiAgYXVkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQod3JvbmdBbnN3ZXJBdWRpbyk7XHJcblxyXG4gIC8vIGluaXQgdGltZW91dCBhdWRpb1xyXG4gIGNvbnN0IHRpbWVvdXRBdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgdGltZW91dEF1ZGlvLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvX19pdGVtJyk7XHJcbiAgdGltZW91dEF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2F1ZGlvL3RpbWVvdXQubXAzJyk7XHJcbiAgdGltZW91dEF1ZGlvLmRhdGFzZXQubmFtZSA9ICd0aW1lb3V0JztcclxuICBhdWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lb3V0QXVkaW8pO1xyXG5cclxuICByZXR1cm4gYXVkaW9Db250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRTZWN0aW9uIGZyb20gJy4uL2luaXRTZWN0aW9uJztcclxuaW1wb3J0IHsgZ2V0R2FtZUF1ZGlvU3RhdHVzLCBzZXRHYW1lQXVkaW9TdGF0dXMgfSBmcm9tICcuLi9nYW1lJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVRyYWluaW5nSGFuZGxlcigpIHtcclxuICBjb25zdCBwYWdlQ29udGVudCA9IGluaXRTZWN0aW9uKCd0cmFpbmluZ3MnKTtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3VuZFRyYWluaW5nSGFuZGxlcihlKSB7XHJcbiAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gIGNvbnN0IGJ1dHRvblNvdW5kID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmIChhdWRpb0FsbG93aW5nKSB7XHJcbiAgICBzZXRHYW1lQXVkaW9TdGF0dXMoZmFsc2UpO1xyXG4gICAgYnV0dG9uU291bmQudGV4dENvbnRlbnQgPSAndm9sdW1lX29mZic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldEdhbWVBdWRpb1N0YXR1cyh0cnVlKTtcclxuICAgIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV91cCc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXlIYW5kbGVyKCkge1xyXG4gIGNvbnN0IG92ZXJsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICBvdmVybGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhlbHBCdXR0b25zKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19idXR0b25zJyk7XHJcblxyXG4gIC8vIGluaXQgZXhpdCBidXR0b25cclxuICBjb25zdCBidXR0b25FeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGJ1dHRvbkV4aXQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBidXR0b25FeGl0LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JfQsNC60L7QvdGH0LjRgtGMINGC0YDQtdC90LjRgNC+0LLQutGDJyk7XHJcbiAgYnV0dG9uRXhpdC50ZXh0Q29udGVudCA9ICdjbG9zZSc7XHJcbiAgYnV0dG9uRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVHJhaW5pbmdIYW5kbGVyKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkV4aXQpO1xyXG5cclxuICAvLyBpbml0IHNvdW5kIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvblNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGJ1dHRvblNvdW5kLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uU291bmQuc2V0QXR0cmlidXRlKCd0aXRsZScsICfQktC60LvRjtGH0LjRgtGML9Cy0YvQutC70Y7Rh9C40YLRjCDQt9Cy0YPQuicpO1xyXG4gIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV9vZmYnO1xyXG4gIGJ1dHRvblNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc291bmRUcmFpbmluZ0hhbmRsZXIpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uU291bmQpO1xyXG5cclxuICAvLyBpbml0IGluZm8gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25JbmZvLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uSW5mby5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9Cf0YDQvtGH0LjRgtCw0YLRjCDQv9GA0LDQstC40LvQsCcpO1xyXG4gIGJ1dHRvbkluZm8udGV4dENvbnRlbnQgPSAnaGVscF9vdXRsaW5lJztcclxuICBidXR0b25JbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbmluZ19fb3ZlcmxheScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICB9KTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkluZm8pO1xyXG5cclxuICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPdmVybGF5KGNvbnRlbnQpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fb3ZlcmxheScsICdvdmVybGF5JywgJ2hpZGRlbicpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXkgY29udGVudFxyXG4gIGNvbnN0IG92ZXJsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3ZlcmxheUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheV9fY29udGVudCcpO1xyXG4gIG92ZXJsYXlDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5Q29udGVudCk7XHJcblxyXG4gIC8vIGluaXQgb3ZlcmxheSBidXR0b25cclxuICBjb25zdCBidXR0b25PdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGJ1dHRvbk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBidXR0b25PdmVybGF5LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JfQsNC60YDRi9GC0YwnKTtcclxuICBidXR0b25PdmVybGF5LnRleHRDb250ZW50ID0gJ2Nsb3NlJztcclxuICBidXR0b25PdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5SGFuZGxlcik7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25PdmVybGF5KTtcclxuXHJcbiAgcmV0dXJuIG92ZXJsYXlDb250YWluZXI7XHJcbn1cclxuIiwiY29uc3Qgc3RhdHVzID0ge1xyXG4gIHN0YXJ0OiAnc3RhcnQnLFxyXG4gIHBhdXNlOiAncGF1c2UnLFxyXG59O1xyXG5sZXQgdGltZW91dDtcclxuXHJcbmZ1bmN0aW9uIGdldExlZnRUaW1lKHsgdGltZSwgYmVnaW5UaW1lIH0pIHtcclxuICBjb25zdCBkaWZmID0gRGF0ZS5ub3coKSAtIGJlZ2luVGltZTtcclxuICByZXR1cm4gdGltZSAtIE1hdGguZmxvb3IoZGlmZiAvIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUaW1lcih0aW1lclN0YXRlKSB7XHJcbiAgY29uc3QgeyBjb250YWluZXIgfSA9IHRpbWVyU3RhdGU7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBpbml0IHRpbWVyIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3QgdGltZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX190aW1lcicsICd0aW1lcicpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lckl0ZW0pO1xyXG5cclxuICAvLyBpbml0IHRpbWVyXHJcbiAgY29uc3QgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aW1lci5jbGFzc0xpc3QuYWRkKCd0aW1lcl9faXRlbScpO1xyXG4gIHRpbWVyLnRleHRDb250ZW50ID0gZ2V0TGVmdFRpbWUodGltZXJTdGF0ZSk7XHJcbiAgdGltZXJJdGVtLmFwcGVuZENoaWxkKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFRpY2sodGltZXJTdGF0ZSkge1xyXG4gIGNvbnN0IHsgc3RhdHVzOiB0aW1lclN0YXR1cywgZW5kSGFuZGxlciB9ID0gdGltZXJTdGF0ZTtcclxuICBjb25zdCBpc0VuZCA9IGdldExlZnRUaW1lKHRpbWVyU3RhdGUpIDwgMDtcclxuICBpZiAoaXNFbmQpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIGlmIChlbmRIYW5kbGVyKSB7XHJcbiAgICAgIGVuZEhhbmRsZXIoKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHRpbWVyU3RhdHVzID09PSBzdGF0dXMuc3RhcnQpIHtcclxuICAgIHJlbmRlclRpbWVyKHRpbWVyU3RhdGUpO1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4geyBuZXh0VGljayh0aW1lclN0YXRlKTsgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUaW1lcih0aW1lLCBjb250YWluZXIsIGVuZEhhbmRsZXIpIHtcclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIHRpbWUsXHJcbiAgICBjb250YWluZXIsXHJcbiAgICBiZWdpblRpbWU6IERhdGUubm93KCksXHJcbiAgICBzdGF0dXM6IHN0YXR1cy5zdGFydCxcclxuICAgIGVuZEhhbmRsZXIsXHJcbiAgfTtcclxuICBuZXh0VGljayhuZXdTdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXVzZVRpbWVyKHRpbWVyU3RhdGUpIHtcclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnRpbWVyU3RhdGUsXHJcbiAgICBzdGF0dXM6IHN0YXR1cy5wYXVzZSxcclxuICAgIHRpbWU6IERhdGUubm93KCkgLSB0aW1lclN0YXRlLmJlZ2luVGltZSxcclxuICB9O1xyXG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICByZW5kZXJUaW1lcihuZXdTdGF0ZSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVMZXZlbCA9IHtcclxuICBlYXN5OiB7XHJcbiAgICBsZXZlbE5hbWU6ICdlYXN5JyxcclxuICAgIG5hbWU6ICfQu9C10LPQutC40LknLFxyXG4gICAgZHVyYXRpb246IDMwLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICBsZXZlbE5hbWU6ICdtZWRpdW0nLFxyXG4gICAgbmFtZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGR1cmF0aW9uOiA1MCxcclxuICB9LFxyXG4gIGhhcmQ6IHtcclxuICAgIGxldmVsTmFtZTogJ2hhcmQnLFxyXG4gICAgbmFtZTogJ9GC0Y/QttC10LvRi9C5JyxcclxuICAgIGR1cmF0aW9uOiA0NSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVTdGF0dXMgPSB7XHJcbiAgaW5pdDogJ2luaXQnLFxyXG4gIHN0YXJ0OiAnc3RhcnQnLFxyXG4gIHN0b3A6ICdzdG9wJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVBdWRpbyA9IHtcclxuICBhdWRpbzogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0R2FtZUF1ZGlvU3RhdHVzKGF1ZGlvU3RhdHVzKSB7XHJcbiAgZ2FtZUF1ZGlvLmF1ZGlvID0gYXVkaW9TdGF0dXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lQXVkaW9TdGF0dXMoKSB7XHJcbiAgcmV0dXJuIGdhbWVBdWRpby5hdWRpbztcclxufVxyXG4iLCJpbXBvcnQgaW5pdEhlYWRlciBmcm9tICcuL2luaXRIZWFkZXInO1xyXG5pbXBvcnQgaW5pdE1haW5QYWdlIGZyb20gJy4vaW5pdE1haW5QYWdlJztcclxuaW1wb3J0IGluaXRGb290ZXIgZnJvbSAnLi9pbml0Rm9vdGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTWVudSwgYWN0aXZlTWVudUl0ZW0gfSBmcm9tICcuL3RvZ2dsZU1lbnUnO1xyXG5cclxuLy8gaW5pdCBoZWFkZXJcclxuaW5pdEhlYWRlcigpO1xyXG5cclxuLy8gaW5pdCBtYWluIHBhZ2VcclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5tYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5pdE1haW5QYWdlKCkpO1xyXG5cclxuLy8gaW5pdCBoZWFkZXJcclxuaW5pdEZvb3RlcigpO1xyXG5cclxuLy8gb3BlbiBhbmQgY2xvc2UgbW9iaWxlIG1lbnVcclxudG9nZ2xlTWVudSgpO1xyXG5cclxuLy8gYWN0aXZlIGRlc2t0b3AgbWVudSBpdGVtXHJcbmFjdGl2ZU1lbnVJdGVtKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRGb290ZXIoKSB7XHJcbiAgLy8gaW5pdCBmb290ZXJcclxuICBjb25zdCBwYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgcGFnZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJywgJ2Zvb3RlcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUZvb3Rlcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGF1dGhvciBpbmZvXHJcbiAgY29uc3QgcGFnZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2luZm8nKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnMjAyMCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3J1c2Frb3ZhLWx5dWRtaWxhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UnVzYWtvdmEgTHl1ZG1pbGE8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NuYWlwcDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ZdXJ5IEhhbHVzaGtvPC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlSW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGxvZ29cclxuICBjb25zdCBwYWdlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fbG9nbycpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL3JzX3NjaG9vbF9sb2dvLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiPjwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUxvZ29Db250YWluZXIpO1xyXG59XHJcbiIsImltcG9ydCBpbml0TWVudSBmcm9tICcuL2luaXRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgLy8gaW5pdCBoZWFkZXJcclxuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcclxuXHJcbiAgLy8gaW5zZXJ0IG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1lbnUgPSBpbml0TWVudSgpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7XHJcblxyXG4gIC8vIGluc2VydCBtb2JpbGUgbmF2IG1lbnUgdG8gaGVhZGVyXHJcbiAgY29uc3QgbmF2TW9iaWxlTWVudSA9IGluaXRNZW51KHRydWUpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TW9iaWxlTWVudSk7XHJcblxyXG4gIC8vIGluaXQgbWFpbiBjb250YWluZXJcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNYWluUGFnZSgpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgcGFnZSBjb250YWluZXJcclxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBpbml0IGgxXHJcbiAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ1NtYXJ0IEtpZHMnO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xyXG5cclxuICAvLyBpbml0IGgyXHJcbiAgY29uc3QgcGFnZVN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHBhZ2VTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LDQttC10YDRiyDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQv9Cw0LzRj9GC0LgsINCy0L3QuNC80LDQvdC40Y8sINC70L7Qs9C40LrQuCDQuCDQvNGL0YjQu9C10L3QuNGPJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VTdWJIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsb2dpbiBidXR0b25cclxuICBjb25zdCBidXR0b25Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnLCAnYnRuLWxvZ2luJyk7XHJcbiAgYnV0dG9uTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkxvZ2luKTtcclxuXHJcbiAgLy8gaW5pdCByZWdpc3RlciBidXR0b25cclxuICBjb25zdCByZWdpc3RlckxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1yZWdpc3RlcicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4udGV4dENvbnRlbnQgPSAn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZ2lzdGVyTG9naW4pO1xyXG5cclxuICByZXR1cm4gcGFnZUNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1haW5QYWdlIGZyb20gJy4vaW5pdE1haW5QYWdlJztcclxuaW1wb3J0IGluaXRTZWN0aW9uIGZyb20gJy4vaW5pdFNlY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVQYWdlTmFtZSwgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuLy8gaW1wb3J0IGluaXRTdGF0aXN0aWNQYWdlIGZyb20gJy4vc3RhdGlzdGljUGFnZSc7XHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgbWFpbjogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICB0cmFpbmluZzogJ9Ci0YDQtdC90LDQttC10YDRiycsXHJcbiAgc3RhdGlzdGljOiAn0KHRgtCw0YLQuNGB0YLQuNC60LAnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBsZXQgcGFnZUNvbnRlbnQ7XHJcblxyXG4gIGlmIChzZWN0aW9uTmFtZSA9PT0gJ21haW4nKSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRNYWluUGFnZSgpO1xyXG4gIH0gZWxzZSBpZiAoc2VjdGlvbk5hbWUgPT09ICdzdGF0aXN0aWMnKSB7XHJcbiAgICAvLyBwYWdlQ29udGVudCA9IGluaXRTdGF0aXN0aWNQYWdlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2VDb250ZW50ID0gaW5pdFNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxuXHJcbiAgc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWVudShtb2JpbGUgPSBmYWxzZSkge1xyXG4gIC8vIGluaXQgbmF2IG1lbnVcclxuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJywgJ25hdmJhci1leHBhbmQtbGcnKTtcclxuICB9XHJcblxyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIC8vIGluaXQgbWVudSB0b2dnbGVcclxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LmFkZCgnbWVudV9fdG9nZ2xlJyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVUb2dnbGUpO1xyXG5cclxuICAgIC8vIGluaXQgbWVudSBpY29uXHJcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2ljb24nLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIG1lbnVJY29uLnRleHRDb250ZW50ID0gJ21lbnUnO1xyXG4gICAgbWVudVRvZ2dsZS5hcHBlbmRDaGlsZChtZW51SWNvbik7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IG1lbnUgbGlzdFxyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpbml0IG1lbnUgY29udGFpbmVyXHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJywgJ25hdmJhci1jb2xsYXBzZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2JywgJ21yLWF1dG8nKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWVudUl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtXHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtJyk7XHJcbiAgICBpZiAoIW1vYmlsZSkge1xyXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtID09PSBhY3RpdmVQYWdlTmFtZSkge1xyXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbWVudUl0ZW0uZGF0YXNldC5uYW1lID0gaXRlbTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuXHJcbiAgICBpZiAobW9iaWxlKSB7XHJcbiAgICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW0gaWNvblxyXG4gICAgICBjb25zdCBtZW51SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIG1lbnVJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKCdsaW5rX19pY29uJyk7XHJcbiAgICAgIG1lbnVJdGVtSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvaW1nL2ljb25zL2ljb24tJHtpdGVtfS5wbmdcIilgO1xyXG4gICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW0gbGlua1xyXG4gICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWVudUl0ZW1MaW5rLmNsYXNzTGlzdC5hZGQobW9iaWxlID8gJ21lbnVfX2xpbmsnIDogJ25hdi1saW5rJyk7XHJcbiAgICBtZW51SXRlbUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2l0ZW19YCk7XHJcbiAgICBtZW51SXRlbUxpbmsuZGF0YXNldC5zZWN0aW9uID0gaXRlbTtcclxuICAgIG1lbnVJdGVtTGluay50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpdGVtXTtcclxuICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUxpbmspO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmF2TWVudTtcclxufVxyXG4iLCIvLyBpbXBvcnQgeyBzZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgaW5pdFN1YlNlY3Rpb24gZnJvbSAnLi9pbml0U3ViU2VjdGlvbic7XHJcbmltcG9ydCB7IHRyYWluaW5nVHlwZXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uO1xyXG4gIGNvbnN0IGNhcmRzRWxlbWVudHMgPSBpbml0U3ViU2VjdGlvbihzZWN0aW9uTmFtZSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLnJlcGxhY2VXaXRoKGNhcmRzRWxlbWVudHMpO1xyXG5cclxuICAvLyBzZXRBY3RpdmVQYWdlTmFtZShzZWN0aW9uTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTZWN0aW9uKCkge1xyXG4gIC8vIHJlbW92ZSBjbGFzcyBvZiBzdWJzZWN0aW9uXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3Vic2VjdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBjYXJkcyBjb250YWluZXJcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicsICdjYXJkcycpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzXHJcbiAgdHJhaW5pbmdUeXBlcy5mb3JFYWNoKCh7IHR5cGVLZXksIHR5cGVOYW1lIH0pID0+IHtcclxuICAgIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScpO1xyXG4gICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEl0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgY2FyZCBpbWFnZVxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1nJyk7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9iZy9iZy0ke3R5cGVLZXl9LmpwZ1wiKWA7XHJcbiAgICBjYXJkSW1hZ2UuZGF0YXNldC5zZWN0aW9uID0gdHlwZUtleTtcclxuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSB0eXBlTmFtZTtcclxuICAgIGNhcmROYW1lLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgaW5pdFRyYWluaW5nIGZyb20gJy4vaW5pdFRyYWluaW5nJztcclxuaW1wb3J0IHsgdHJhaW5pbmdUeXBlcywgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbi8vIGltcG9ydCB7IHNhdmVSZXN1bHQgfSBmcm9tICcuL3N0YXRpc3RpYyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSwgc3ViU2VjdGlvbktleSkge1xyXG4gIGNvbnN0IHRyYWluaW5nS2V5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHJhaW5pbmc7XHJcbiAgY29uc3QgdHJhaW5pbmcgPSBpbml0VHJhaW5pbmcodHJhaW5pbmdLZXksIHN1YlNlY3Rpb25LZXkpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aCh0cmFpbmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25EYXRhQnlOYW1lKHN1YlNlY3Rpb25OYW1lKSB7XHJcbiAgY29uc3Qgc3ViU2VjdGlvbiA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdzSXRlbXMpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbk5hbWUpO1xyXG4gIHJldHVybiBzdWJTZWN0aW9uLnRyYWluaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlQ2FyZChlKSB7XHJcbiAgY29uc3QgdGFyZ2V0Q2FyZE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJkO1xyXG4gIGNvbnN0IHRhcmdldENhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcy0ke3RhcmdldENhcmROYW1lfWApO1xyXG5cclxuICB0YXJnZXRDYXJkQmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2Jsb2NrX2hvdmVyJyk7XHJcblxyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VDb250ZW50KGN1cnJlbnRCbG9jaywgbmV3QmxvY2ssIHBhcmVudEJsb2NrKSB7XHJcbiAgaWYgKGN1cnJlbnRCbG9jaykge1xyXG4gICAgY3VycmVudEJsb2NrLnJlcGxhY2VXaXRoKG5ld0Jsb2NrKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50QmxvY2sucHJlcGVuZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcoc3ViU2VjdGlvbktleSA9ICcnKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcblxyXG4gIGNvbnN0IHN1YlNlY3Rpb25OYW1lID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ1R5cGVzKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IHN1YlNlY3Rpb25OYW1lLnR5cGVOYW1lO1xyXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRyYWluQ2FyZHMoY2FyZHNDb250YWluZXIsIGNhcmRzRWxlbWVudHMsIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjYXJkc0VsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIC8vIGluaXQgYmxvY2sgZm9yIGNhcmRzXHJcbiAgICBjb25zdCBjYXJkQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCbG9jay5jbGFzc0xpc3QuYWRkKCdjYXJkc19fYmxvY2snLCBgY2FyZHMtJHtjYXJkLmtleX1gKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRCbG9jayk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGxpbmtcclxuICAgIGNvbnN0IGNhcmRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY2FyZExpbmsuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbGluaycpO1xyXG4gICAgY2FyZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2NhcmQua2V5fWApO1xyXG4gICAgY2FyZEJsb2NrLmFwcGVuZENoaWxkKGNhcmRMaW5rKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJywgJ2NhcmRzX19mcm9udCcpO1xyXG4gICAgY2FyZEl0ZW0uZGF0YXNldC50cmFpbmluZyA9IGNhcmQua2V5O1xyXG4gICAgY2FyZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjbGlja0hhbmRsZXIoZSwgc3ViU2VjdGlvbktleSk7XHJcbiAgICAgIC8vIHNhdmVSZXN1bHQoY2FyZC53b3JkLCAndHJhaW5lZCcpO1xyXG4gICAgfSk7XHJcbiAgICBjYXJkTGluay5hcHBlbmRDaGlsZChjYXJkSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGltYWdlXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvJHtjYXJkLmltYWdlfVwiKWA7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIHJvdGF0ZSBidXR0b25cclxuICAgIGNvbnN0IGNhcmRSb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbicsICdtYXRlcmlhbC1pY29ucycpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAncm90YXRlX2xlZnQnO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFJvdGF0ZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEJhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2JhY2snKTtcclxuICAgIGNhcmRCYWNrSXRlbS5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRCYWNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcm90YXRlQ2FyZCk7XHJcbiAgICBjYXJkQmxvY2suYXBwZW5kQ2hpbGQoY2FyZEJhY2tJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgY2FyZEJhY2tEZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci5jbGFzc0xpc3QuYWRkKCdjYXJkX19kZXNjcicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci50ZXh0Q29udGVudCA9IGNhcmQuZGVzY3JpcHRpb247XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tEZXNjcik7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGNvbnRlbnRcclxuICAgIGNvbnN0IGNhcmRCYWNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKTtcclxuICAgIGNhcmRCYWNrSXRlbS5hcHBlbmRDaGlsZChjYXJkQmFja0NvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmRCYWNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmRCYWNrTmFtZS50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcclxuICAgIGNhcmRCYWNrQ29udGVudC5hcHBlbmRDaGlsZChjYXJkQmFja05hbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U3ViU2VjdGlvbihzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcoc3ViU2VjdGlvbk5hbWUpO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2hlYWRpbmcnKTtcclxuICByZXBsYWNlQ29udGVudChzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciwgc2VjdGlvbkhlYWRlciwgbWFpbkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gZ2V0IGluZm8gZm9yIGNhcmRzXHJcbiAgY29uc3QgY2FyZHNFbGVtZW50cyA9IGdldFNlY3Rpb25EYXRhQnlOYW1lKHN1YlNlY3Rpb25OYW1lKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzLCBzdWJTZWN0aW9uTmFtZSk7XHJcblxyXG4gIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyB0cmFpbmluZ3NJdGVtcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuaW1wb3J0IHsgZ2FtZUxldmVsIH0gZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgaW5pdEdhbWUsIHN0YXJ0R2FtZSwgZ2FtZUxldmVsSW5mbyB9IGZyb20gJy4vdHJhaW5pbmdzL2NvbXBhcmlzb24nO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5hcHBlbmRDaGlsZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSB0cmFpbmluZ0luZm8ubmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdGFydFRyYWluaW5nKHRyYWluaW5nSW5mbywgZ2FtZSkge1xyXG4gIC8vIGluaXQgc3RhcnQgdHJhaW5pbmcgY29udGFpbmVyXHJcbiAgY29uc3Qgc3RhcnRUcmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3N0YXJ0Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHA+JHt0cmFpbmluZ0luZm8uZGVzY3JpcHRpb259PC9wPmA7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3QgY29udGFpbmVyXHJcbiAgY29uc3QgbGV2ZWxTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbFNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc2VsZWN0Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbFNlbGVjdENvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3QgbGFiZWxcclxuICBjb25zdCBsZXZlbFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGV2ZWxTZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICfQktGL0LHQtdGA0LjRgtC1INGD0YDQvtCy0LXQvdGMOic7XHJcbiAgbGV2ZWxTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3RMYWJlbCk7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3RcclxuICBjb25zdCBsZXZlbFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIGxldmVsU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsU2VsZWN0KTtcclxuXHJcbiAgLy8gaW5pdCBzZWxlY3Qgb3B0aW9uc1xyXG4gIE9iamVjdC5rZXlzKGdhbWVMZXZlbCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSk7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBnYW1lTGV2ZWxbaXRlbV0ubmFtZTtcclxuICAgIGxldmVsU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxuICB9KTtcclxuXHJcbiAgLy8gaW5pdCBzdGFydCB0cmFpbmluZyBidXR0b25cclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19idXR0b24nLCAnYnRuJyk7XHJcbiAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5wbGF5X2NpcmNsZV9vdXRsaW5lPC9pPtCd0LDRh9Cw0YLRjCc7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEdhbWVMZXZlbCA9IGxldmVsU2VsZWN0LnZhbHVlO1xyXG4gICAgc3RhcnRHYW1lKHtcclxuICAgICAgLi4uZ2FtZSxcclxuICAgICAgbGV2ZWw6IGdhbWVMZXZlbEluZm9bZ2FtZUxldmVsW3NlbGVjdGVkR2FtZUxldmVsXS5sZXZlbE5hbWVdLFxyXG4gICAgICBkdXJhdGlvbjogZ2FtZUxldmVsW3NlbGVjdGVkR2FtZUxldmVsXS5kdXJhdGlvbixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xyXG5cclxuICByZXR1cm4gc3RhcnRUcmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uVHJhaW5pbmcgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBjb25zdCB0cmFpbmluZ0luZm8gPSBPYmplY3QudmFsdWVzKHN1YlNlY3Rpb25UcmFpbmluZy50cmFpbmluZ3MpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IHRyYWluaW5nS2V5LFxyXG4gICk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmcnLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjYXJkXHJcbiAgY29uc3QgdHJhaW5pbmdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDYXJkLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19jYXJkJywgJ2NhcmRzX19pdGVtJywgdHJhaW5pbmdJbmZvLmtleSk7XHJcbiAgdHJhaW5pbmdDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke3RyYWluaW5nSW5mby5iZ31cIilgO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIC8vIGluaXQgZ2FtZVxyXG4gIGNvbnN0IGdhbWUgPSBpbml0R2FtZShnYW1lTGV2ZWxJbmZvW2dhbWVMZXZlbC5lYXN5LmxldmVsTmFtZV0sIHRyYWluaW5nQ2FyZCwgdHJhaW5pbmdJbmZvKTtcclxuXHJcbiAgLy8gc3RhcnQgdHJhaW5pbmdcclxuICBjb25zdCBzdGFydFRyYWluaW5nID0gaW5pdFN0YXJ0VHJhaW5pbmcodHJhaW5pbmdJbmZvLCBnYW1lKTtcclxuICBjb25zdCBzdGFydFRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19zdGFydCcpO1xyXG4gIHJlcGxhY2VDb250ZW50KHN0YXJ0VHJhaW5pbmdDb250YWluZXIsIHN0YXJ0VHJhaW5pbmcsIHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIHJldHVybiB0cmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG4iLCJjb25zdCBzdGF0ZSA9IHtcclxuICBhY3RpdmVQYWdlTmFtZTogJ21haW4nLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2VOYW1lKG5hbWUpIHtcclxuICBzdGF0ZS5hY3RpdmVQYWdlTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQYWdlTmFtZSgpIHtcclxuICByZXR1cm4gc3RhdGUuYWN0aXZlUGFnZU5hbWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKV07XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXQubmFtZSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faWNvbicpO1xyXG5cclxuICBjb25zdCBtZW51QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21lbnVfb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBvdmVybGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5UGFnZSk7XHJcblxyXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHRNZW51SWNvbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSB0ZXh0TWVudUljb24gPT09ICdtZW51JyA/ICdjbG9zZScgOiAnbWVudSc7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1JY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua19faWNvbicpXTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAobWVudUljb24udGV4dENvbnRlbnQgPT09ICdjbG9zZSdcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVCYWNrZ3JvdW5kXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51SWNvblxyXG4gICAgICAmJiAhbWVudUl0ZW1JY29ucy5pbmNsdWRlcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBtZW51TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRyYWluaW5nVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0eXBlTmFtZTogJ9Cf0LDQvNGP0YLRjCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHR5cGVOYW1lOiAn0JLQvdC40LzQsNC90LjQtScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHlwZU5hbWU6ICfQm9C+0LPQuNC60LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHR5cGVOYW1lOiAn0JzRi9GI0LvQtdC90LjQtScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFpbmluZ3NJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4JyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LnBuZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbWVtb3J5L2JnL21lbW9yeS5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QkiDQutC70LXRgtGH0LDRgtC+0Lwg0L/QvtC70LUg0L3QsCDQvdC10LrQvtGC0L7RgNC+0LUg0LLRgNC10LzRjyDQv9C+0LTRgdCy0LXRgtGP0YLRgdGPINC30LXQu9C10L3Ri9C8INGG0LLQtdGC0L7QvCDQutCy0LDQtNGA0LDRgtC40LrQuCwg0YDQsNGB0L/QvtC70L7QttC10L3QuNC1INC60L7RgtC+0YDRi9GFINC90YPQttC90L4g0LfQsNC/0L7QvNC90LjRgtGMLjwvcD48cD7QlNCw0LvQtdC1INC60LLQsNC00YDQsNGC0LjQutC4INGB0YLQsNC90YPRgiDQvtC00L3QvtCz0L4g0YbQstC10YLQsCwg0L3Rg9C20L3QviDQt9CwINC+0L/RgNC10LTQtdC70LXQvdC90L7QtSDQstGA0LXQvNGPINGD0YHQv9C10YLRjCDQvdCw0LbQsNGC0Ywg0L3QsCDRgtC1INC60LLQsNC00YDQsNGC0LjQutC4LCDQutC+0YLQvtGA0YvQtSDQsdGL0LvQuCDQv9C+0LTRgdCy0LXRh9C10L3RiyDQt9C10LvQtdC90YvQvCDRhtCy0LXRgtC+0LwsINCyINC70Y7QsdC+0Lwg0L/QvtGA0Y/QtNC60LUuPC9wPjxwPtCV0YHQu9C4INCy0YvQsdGA0LDQvdC90YvQuSDQutCy0LDQtNGA0LDRgtC40Log0L7QutCw0LbQtdGC0YHRjyDQvdC10LLQtdGA0L3Ri9C8LCDRgtC+INC+0L0g0L/QvtC00YHQstC10YLQuNGC0YHRjyDQutGA0LDRgdC90YvQvCDRhtCy0LXRgtC+0LwuPC9wPjxwPtCY0LPRgNCwINC/0L7QstGC0L7RgNGP0LXRgtGB0Y8sINC/0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LjQu9C+0YHRjCDQstGA0LXQvNGPINGC0LDQudC80LXRgNCwLjwvcD4nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdhdHRlbnRpb24nLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdjbGljaycsXHJcbiAgICAgICAgbmFtZTogJ9Ca0LvQuNC6LdCa0LvQuNC6JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9hdHRlbnRpb24vY2xpY2sucG5nJyxcclxuICAgICAgICBiZzogJ2ltZy9hdHRlbnRpb24vYmcvYXR0ZW50aW9uLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINCy0L3QuNC80LDQvdC40Y8nLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0JIg0LrQu9C10YLRh9Cw0YLQvtC8INC/0L7Qu9C1INC/0L7Rj9Cy0Y/RgtGB0Y8g0YfQuNGB0LvQsCwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQv9GA0L7QutC70LjQutCw0YLRjCAo0L3QsNC20LDRgtGMKSDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y4uPC9wPjwvcD48cD7QmNCz0YDQsCDQv9C+0LLRgtC+0YDRj9C10YLRgdGPLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdhZGRpdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LvQvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL2FkZGl0aW9uLnBuZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbG9naWMvYmcvbG9naWMuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LvQvtCz0LjQutC4JyxcclxuICAgICAgICBydWxlczogJzxwPtCd0LXQvtCx0YXQvtC00LjQvNC+INCyINGD0LzQtSDRgdC70L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdzdWJ0cmFjdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9CS0YvRh9C40YLQsNC90LjQtScsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbG9naWMvc3VidHJhY3Rpb24ucG5nJyxcclxuICAgICAgICBiZzogJ2ltZy9sb2dpYy9iZy9sb2dpYy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0J3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YPQvNC1INCy0YvRh9C10YHRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ211bHRpcGxpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAn0KPQvNC90L7QttC10L3QuNC1JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9sb2dpYy9tdWx0aXBsaWNhdGlvbi5wbmcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2xvZ2ljLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC70L7Qs9C40LrQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QndC10L7QsdGF0L7QtNC40LzQviDQsiDRg9C80LUg0L/QtdGA0LXQvNC90L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnY29tcGFyaXNvbicsXHJcbiAgICAgICAgbmFtZTogJ9Cf0YDQvtGB0YLRgNCw0L3RgdGC0LLQtdC90L3QvtC1INGB0YDQsNCy0L3QtdC90LjQtScsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvdGhpbmtpbmcvY29tcGFyaXNvbi5wbmcnLFxyXG4gICAgICAgIGJnOiAnaW1nL3RoaW5raW5nL2JnL3RoaW5raW5nLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0LPQviDQvNGL0YjQu9C10L3QuNGPJyxcclxuICAgICAgICBydWxlczogJzxwPtCd0LXQvtCx0YXQvtC00LjQvNC+INC30LDQv9C+0LzQvdC40YLRjCDQsiDQutCw0LrQvtC8INC80LXRgdGC0LUg0YDQsNGB0L/QvtC70L7QttC10L0g0LfQsNC60YDQsNGI0LXQvdC90YvQuSDQutGA0YPQttC+0LosINC10YHQu9C4INC/0YDQuCDRgdC80LXQvdC1INC60YDRg9C20LrQvtCyINC30LDQutGA0LDRiNC10L3QvdGL0Lkg0LrRgNGD0LbQvtC6INC+0YHRgtCw0L3QtdGC0YHRjyDQvdCwINGB0LLQtdC8INC80LXRgdGC0LUsINGC0L4g0L3Rg9C20L3QviDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMgXCLQlNCwXCIsINC40L3QsNGH0LUgLSBcItCd0LXRglwiLjwvcD48cD7QldGB0LvQuCDQstGLINC+0YLQstC10YLQuNC70Lgg0LLQtdGA0L3Qviwg0YLQviDQv9C+0LvQtSDQstC+0LrRgNGD0LMg0LrRgNGD0LbQutC+0LIg0L/QvtC00YHQstC10YLQuNGC0YHRjyDQt9C10LvQtdC90YvQvCDRhtCy0LXRgtC+0LwsINC40L3QsNGH0LUgLSDQutGA0LDRgdC90YvQvC48L3A+PHA+0KHQvNC10L3QsCDQutGA0YPQttC60L7QsiDQv9GA0L7QuNGB0YXQvtC00LjRgiwg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IGdhbWVTdGF0dXMsIGdldEdhbWVBdWRpb1N0YXR1cywgZ2FtZUxldmVsIH0gZnJvbSAnLi4vZ2FtZSc7XHJcbmltcG9ydCB7IHN0YXJ0VGltZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3RpbWVyJztcclxuaW1wb3J0IHsgaW5pdEhlbHBCdXR0b25zLCBpbml0T3ZlcmxheSwgY2xvc2VUcmFpbmluZ0hhbmRsZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlbHBCdXR0b25zJztcclxuaW1wb3J0IGluaXRBdWRpbyBmcm9tICcuLi9jb21wb25lbnRzL2F1ZGlvJztcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lTGV2ZWxJbmZvID0ge1xyXG4gIFtnYW1lTGV2ZWwuZWFzeS5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5lYXN5LFxyXG4gICAgdmFyaWFudENvdW50OiA0LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhdWRpb1NvdW5kKGF1ZGlvTmFtZSkge1xyXG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1uYW1lPVwiJHthdWRpb05hbWV9XCJdYCk7XHJcbiAgaWYgKGF1ZGlvKSB7XHJcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUV4YW1wbGUoeyB2YXJpYW50Q291bnQgfSwgcHJldmlvdXNRdWVzdGlvbikge1xyXG4gIGNvbnN0IHF1ZXN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuN1xyXG4gICAgPyBwcmV2aW91c1F1ZXN0aW9uXHJcbiAgICA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhcmlhbnRDb3VudCk7XHJcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IHByZXZpb3VzUXVlc3Rpb24gPT09IHF1ZXN0aW9uID8gJ9CU0LAnIDogJ9Cd0LXRgic7XHJcbiAgY29uc3QgYW5zd2VycyA9IFsn0JTQsCcsICfQndC10YInXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0aW9uLFxyXG4gICAgY29ycmVjdEFuc3dlcixcclxuICAgIGFuc3dlcnMsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFF1ZXN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBxdWVzdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fcXVlc3Rpb24nKTtcclxuXHJcbiAgY29uc3QgY2FudmFzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgY2FudmFzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19jYW52YXMnKTtcclxuICBjYW52YXNDb250YWluZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMDBweCcpO1xyXG4gIGNhbnZhc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxODBweCcpO1xyXG4gIGNvbnN0IGNpcmNsZUNvb3JkaW5hdGVzID0gW1xyXG4gICAgWzc1LCA0MF0sXHJcbiAgICBbMjI1LCA0MF0sXHJcbiAgICBbNzUsIDE0MF0sXHJcbiAgICBbMjI1LCAxNDBdLFxyXG4gIF07XHJcbiAgY29uc3QgY2FudmFzQ29udGVudCA9IGNhbnZhc0NvbnRhaW5lci5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGNhbnZhc0NvbnRlbnQuc3Ryb2tlU3R5bGUgPSAnIzJjODBhNSc7XHJcbiAgY2FudmFzQ29udGVudC5saW5lV2lkdGggPSA1O1xyXG5cclxuICBjaXJjbGVDb29yZGluYXRlcy5mb3JFYWNoKChbeCwgeV0sIGluZCkgPT4ge1xyXG4gICAgY2FudmFzQ29udGVudC5iZWdpblBhdGgoKTtcclxuICAgIGNhbnZhc0NvbnRlbnQuZmlsbFN0eWxlID0gaW5kID09PSBxdWVzdGlvbiA/ICcjMmM4MGE1JyA6ICcjZmZmJztcclxuICAgIGNhbnZhc0NvbnRlbnQuYXJjKHgsIHksIDM1LCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICBjYW52YXNDb250ZW50LmZpbGwoKTtcclxuICAgIGNhbnZhc0NvbnRlbnQuY2xvc2VQYXRoKCk7XHJcbiAgICBjYW52YXNDb250ZW50LnN0cm9rZSgpO1xyXG4gIH0pO1xyXG5cclxuICBxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gcXVlc3Rpb25Db250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRBbnN3ZXJzKGV4YW1wbGUsIHN1Y2Nlc3NIYW5kbGVyLCBmYWlsSGFuZGxlcikge1xyXG4gIGNvbnN0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhbnN3ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19hbnN3ZXJzJyk7XHJcblxyXG4gIGV4YW1wbGUuYW5zd2Vycy5mb3JFYWNoKChhbnN3ZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFuc3dlcjtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4YW1wbGUuY29ycmVjdEFuc3dlciA9PT0gYW5zd2VyXHJcbiAgICAgID8gc3VjY2Vzc0hhbmRsZXJcclxuICAgICAgOiBmYWlsSGFuZGxlcik7XHJcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhbnN3ZXJzQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeGFtcGxlKGdhbWVPYmosIGZpcnN0UmVuZGVyID0gZmFsc2UpIHtcclxuICBjb25zdCB7IGNvbnRhaW5lciwgbGV2ZWwsIGV4YW1wbGUgfSA9IGdhbWVPYmo7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBpbml0IHF1ZXN0aW9uIGNvbnRhaW5lclxyXG4gIGNvbnN0IHF1ZXN0aW9uID0gaW5pdFF1ZXN0aW9uKGV4YW1wbGUucXVlc3Rpb24pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbik7XHJcblxyXG4gIGNvbnN0IHNjb3JlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9faXRlbScpO1xyXG4gIHNjb3JlSXRlbS50ZXh0Q29udGVudCA9IGdhbWVPYmouc2NvcmU7XHJcblxyXG4gIC8vIGluaXQgYW5zd2VyIGJ1dHRvbnMgY29udGFpbmVyXHJcbiAgY29uc3QgbmV3R2FtZVN0YXRlID0geyAuLi5nYW1lT2JqIH07XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbmV3R2FtZVN0YXRlLnNjb3JlICs9IDE7XHJcbiAgICBpZiAobmV3R2FtZVN0YXRlLnN0YXR1cyA9PT0gZ2FtZVN0YXR1cy5zdGFydCkge1xyXG4gICAgICBjb25zdCBuZXdFeGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGxldmVsLCBnYW1lT2JqLmV4YW1wbGUucXVlc3Rpb24pO1xyXG4gICAgICByZW5kZXJFeGFtcGxlKHsgLi4ubmV3R2FtZVN0YXRlLCBleGFtcGxlOiBuZXdFeGFtcGxlIH0pO1xyXG5cclxuICAgICAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gICAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICAgIGF1ZGlvU291bmQoJ3JpZ2h0LWFuc3dlcicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGFyaXNvbl9yaWdodCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGFyaXNvbl9yaWdodCcpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmYWlsSGFuZGxlciA9ICgpID0+IHtcclxuICAgIG5ld0dhbWVTdGF0ZS5zY29yZSAtPSAxO1xyXG4gICAgaWYgKG5ld0dhbWVTdGF0ZS5zdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgICAgY29uc3QgbmV3RXhhbXBsZSA9IGdlbmVyYXRlRXhhbXBsZShsZXZlbCwgZ2FtZU9iai5leGFtcGxlLnF1ZXN0aW9uKTtcclxuICAgICAgcmVuZGVyRXhhbXBsZSh7IC4uLm5ld0dhbWVTdGF0ZSwgZXhhbXBsZTogbmV3RXhhbXBsZSB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICAgICAgaWYgKGF1ZGlvQWxsb3dpbmcpIHtcclxuICAgICAgICBhdWRpb1NvdW5kKCd3cm9uZy1hbnN3ZXInKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBhcmlzb25fd3JvbmcnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBhcmlzb25fd3JvbmcnKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VycyA9IGZpcnN0UmVuZGVyXHJcbiAgICA/IGluaXRBbnN3ZXJzKGV4YW1wbGUsICgpID0+IHt9LCAoKSA9PiB7fSlcclxuICAgIDogaW5pdEFuc3dlcnMoZXhhbXBsZSwgc3VjY2Vzc0hhbmRsZXIsIGZhaWxIYW5kbGVyKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYW5zd2Vycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckluZm8oZ2FtZVN0YXRlKSB7XHJcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2luZm8nKTtcclxuICBnYW1lU3RhdGUuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsZXZlbCBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IGxldmVsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldmVsSXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbGV2ZWwnKTtcclxuICBsZXZlbEl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuPtCj0YDQvtCy0LXQvdGMOjwvc3Bhbj4gJHtnYW1lU3RhdGUubGV2ZWwuZ2FtZUxldmVsLm5hbWV9YDtcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsSXRlbSk7XHJcblxyXG4gIC8vIGluaXQgdGltZXIgaW5mbyBjb250YWluZXJcclxuICBjb25zdCB0aW1lckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aW1lckl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3RpbWVyJywgJ3RpbWVyJyk7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lckl0ZW0pO1xyXG5cclxuICAvLyBpbml0IHNjb3JlIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2NvcmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19zY29yZScpO1xyXG4gIHNjb3JlSXRlbS5pbm5lckhUTUwgPSAnPHNwYW4+0J7Rh9C60Lg6PC9zcGFuPiA8c3BhbiBjbGFzcz1cInNjb3JlX19pdGVtXCI+MDwvc3Bhbj4nO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVJdGVtKTtcclxuXHJcbiAgcmV0dXJuIHsgdGltZXJDb250YWluZXI6IHRpbWVySXRlbSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wR2FtZShnYW1lU3RhdGUpIHtcclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX2l0ZW0nKTtcclxuICBjb25zdCBzY29yZSA9IHNjb3JlSXRlbS50ZXh0Q29udGVudDtcclxuICBjb25zdCB7IGdhbWVDb250YWluZXIgfSA9IGdhbWVTdGF0ZTtcclxuXHJcbiAgLy8gaW5pdCBmaW5pc2ggdHJhaW5pbmcgY29udGFpbmVyXHJcbiAgY29uc3QgZmluaXNoVHJhaW5pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fZmluaXNoJyk7XHJcblxyXG4gIC8vIGluaXQgZmluaXNoIHNjb3JlIGNvbnRhaW5lclxyXG4gIGNvbnN0IGZpbmlzaFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmluaXNoU2NvcmUuY2xhc3NMaXN0LmFkZCgnZmluaXNoX19zY29yZScpO1xyXG4gIGZpbmlzaFNjb3JlLmlubmVySFRNTCA9IGA8cD7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCOjwvcD48ZGl2PiR7c2NvcmV9PC9kaXY+YDtcclxuICBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5pc2hTY29yZSk7XHJcblxyXG4gIC8vIGluaXQgZmluaXNoIHRyYWluaW5nIGJ1dHRvblxyXG4gIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9uJywgJ2J0bicpO1xyXG4gIGZpbmlzaEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPtCS0YvQudGC0LgnO1xyXG4gIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVHJhaW5pbmdIYW5kbGVyKTtcclxuICBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xyXG5cclxuICBnYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5pc2hUcmFpbmluZ0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckdhbWUoZ2FtZVN0YXRlKSB7XHJcbiAgY29uc3QgeyBzdGF0dXMsIGdhbWVDb250YWluZXIsIHRyYWluaW5nSW5mbyB9ID0gZ2FtZVN0YXRlO1xyXG4gIGlmIChzdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgIGdhbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCByZXN1bHQgPSByZW5kZXJJbmZvKGdhbWVTdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgZXhhbXBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZXhhbXBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fZ2FtZScpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChleGFtcGxlQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gaW5pdEhlbHBCdXR0b25zKCk7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlDb250YWluZXIgPSBpbml0T3ZlcmxheSh0cmFpbmluZ0luZm8ucnVsZXMpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5Q29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBpbml0IGF1ZGlvXHJcbiAgICBjb25zdCBhdWRpbyA9IGluaXRBdWRpbygpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhdWRpbyk7XHJcblxyXG4gICAgc3RhcnRUaW1lcihnYW1lU3RhdGUuZHVyYXRpb24sIHJlc3VsdC50aW1lckNvbnRhaW5lciwgKCkgPT4geyBzdG9wR2FtZShnYW1lU3RhdGUpOyB9KTtcclxuICAgIHJlbmRlckV4YW1wbGUoeyAuLi5nYW1lU3RhdGUsIGNvbnRhaW5lcjogZXhhbXBsZUNvbnRhaW5lciB9LCB0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdFeGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGdhbWVTdGF0ZS5sZXZlbCwgZ2FtZVN0YXRlLmV4YW1wbGUucXVlc3Rpb24pO1xyXG4gICAgICByZW5kZXJFeGFtcGxlKHsgLi4uZ2FtZVN0YXRlLCBjb250YWluZXI6IGV4YW1wbGVDb250YWluZXIsIGV4YW1wbGU6IG5ld0V4YW1wbGUgfSk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZShsZXZlbCwgZ2FtZUNvbnRhaW5lciwgdHJhaW5pbmdJbmZvLCBkdXJhdGlvbiA9IDYwKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNjb3JlOiAwLFxyXG4gICAgbGV2ZWwsXHJcbiAgICBzdGF0dXM6IGdhbWVTdGF0dXMuaW5pdCxcclxuICAgIGdhbWVDb250YWluZXIsXHJcbiAgICBleGFtcGxlOiB7fSxcclxuICAgIGR1cmF0aW9uLFxyXG4gICAgdHJhaW5pbmdJbmZvLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoZ2FtZU9iaikge1xyXG4gIGNvbnN0IGV4YW1wbGUgPSBnZW5lcmF0ZUV4YW1wbGUoZ2FtZU9iai5sZXZlbCwgMCk7XHJcbiAgY29uc3QgbmV3R2FtZVN0YXRlID0geyAuLi5nYW1lT2JqLCBzdGF0dXM6IGdhbWVTdGF0dXMuc3RhcnQsIGV4YW1wbGUgfTtcclxuICByZW5kZXJHYW1lKG5ld0dhbWVTdGF0ZSk7XHJcblxyXG4gIHJldHVybiBuZXdHYW1lU3RhdGU7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==