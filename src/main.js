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
/* harmony import */ var _trainings_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings/click */ "./src/assets/js/trainings/click.js");
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
    (0,_trainings_click__WEBPACK_IMPORTED_MODULE_2__.startGame)(_objectSpread(_objectSpread({}, game), {}, {
      level: _trainings_click__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel[selectedGameLevel].levelName],
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

  var game = (0,_trainings_click__WEBPACK_IMPORTED_MODULE_2__.initGame)(_trainings_click__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy.levelName], trainingCard, trainingInfo); // start training

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
    key: 'unikum',
    name: 'Уникум',
    image: 'img/thinking/unikum.jpg',
    bg: 'img/thinking/bg/thinking.jpg',
    description: 'Тренажер для развития образного мышления'
  }]
}];

/***/ }),

/***/ "./src/assets/js/trainings/click.js":
/*!******************************************!*\
  !*** ./src/assets/js/trainings/click.js ***!
  \******************************************/
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
/* harmony import */ var _utils_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/matrix */ "./src/assets/js/utils/matrix.js");
var _gameLevelInfo;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var gameLevelInfo = (_gameLevelInfo = {}, _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.easy.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.easy,
  termsCount: 4,
  answersCount: 12
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium,
  termsCount: 5,
  answersCount: 19
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard,
  termsCount: 6,
  answersCount: 27
}), _gameLevelInfo);

function audioSound(audioName) {
  var audio = document.querySelector("audio[data-name=\"".concat(audioName, "\"]"));

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function generateMatrix(_ref) {
  var termsCount = _ref.termsCount,
      answersCount = _ref.answersCount;
  var answers = Array(answersCount).fill(0).map(function (elem, index) {
    return index + 1;
  });
  var matrixArr = (0,_utils_matrix__WEBPACK_IMPORTED_MODULE_4__.makeMatrix)(termsCount, answers);
  return (0,_utils_matrix__WEBPACK_IMPORTED_MODULE_4__.shuffleMatrix)(matrixArr);
}

function initAnswers(matrix, clickHandler) {
  var matrixContainer = document.createElement('div');
  matrixContainer.classList.add('training__matrix');
  matrixContainer.style.gridTemplateColumns = "repeat(".concat(matrix.size, ", 1fr)");
  matrix.store.forEach(function (item) {
    var matrixItem = document.createElement('div');
    matrixItem.classList.add('training__matrix__item', 'training__matrix__item_white');
    matrixItem.textContent = item > 0 ? item : '';
    matrixItem.dataset.id = item;
    matrixItem.onclick = clickHandler;
    matrixContainer.appendChild(matrixItem);
  });
  return matrixContainer;
}

function displayScore(value) {
  var scoreItem = document.querySelector('.score__item');
  scoreItem.textContent = value;
}

function renderMatrix(gameObj) {
  var container = gameObj.container,
      matrix = gameObj.matrix,
      level = gameObj.level;
  displayScore(gameObj.score);

  var newGameState = _objectSpread({}, gameObj);

  var attemptCount = 0;

  var clickHandler = function clickHandler(e) {
    attemptCount += 1;

    if (attemptCount === +e.target.dataset.id) {
      newGameState.score += 1;
      e.target.classList.add('training__matrix__item_green');
      e.target.onclick = null;
      displayScore(newGameState.score);
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('right-answer');
      }
    } else {
      newGameState.score -= 1;
      e.target.classList.add('training__matrix__item_red');
      attemptCount = level.answersCount;

      var _audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (_audioAllowing) {
        audioSound('wrong-answer');
      }
    }

    if (attemptCount === level.answersCount) {
      setTimeout(function () {
        var newMatrix = generateMatrix(level);
        renderMatrix(_objectSpread(_objectSpread({}, newGameState), {}, {
          matrix: newMatrix
        }));
      }, 500);
    }
  };

  var answers = initAnswers(matrix, clickHandler);
  container.innerHTML = '';
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
    var matrixContainer = document.createElement('div');
    matrixContainer.classList.add('training__game');
    gameContainer.appendChild(matrixContainer);
    var buttonsContainer = (0,_components_helpButtons__WEBPACK_IMPORTED_MODULE_2__.initHelpButtons)();
    gameContainer.appendChild(buttonsContainer);
    var overlayContainer = (0,_components_helpButtons__WEBPACK_IMPORTED_MODULE_2__.initOverlay)(trainingInfo.rules);
    gameContainer.appendChild(overlayContainer); // init audio

    var audio = (0,_components_audio__WEBPACK_IMPORTED_MODULE_3__.default)();
    gameContainer.appendChild(audio);
    (0,_components_timer__WEBPACK_IMPORTED_MODULE_1__.startTimer)(gameState.duration, result.timerContainer, function () {
      stopGame(gameState);
    });
    renderMatrix(_objectSpread(_objectSpread({}, gameState), {}, {
      container: matrixContainer
    }));
  }
}

function initGame(level, gameContainer, trainingInfo) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 60;
  return {
    score: 0,
    level: level,
    status: _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.init,
    gameContainer: gameContainer,
    matrix: {},
    duration: duration,
    trainingInfo: trainingInfo
  };
}
function startGame(gameObj) {
  var matrix = generateMatrix(gameObj.level);

  var newGameState = _objectSpread(_objectSpread({}, gameObj), {}, {
    status: _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start,
    matrix: matrix
  });

  renderGame(newGameState);
  return newGameState;
}

/***/ }),

/***/ "./src/assets/js/utils/matrix.js":
/*!***************************************!*\
  !*** ./src/assets/js/utils/matrix.js ***!
  \***************************************/
/*! namespace exports */
/*! export getCell [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeMatrix [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setCell [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shuffleMatrix [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMatrix": () => /* binding */ makeMatrix,
/* harmony export */   "getCell": () => /* binding */ getCell,
/* harmony export */   "setCell": () => /* binding */ setCell,
/* harmony export */   "shuffleMatrix": () => /* binding */ shuffleMatrix
/* harmony export */ });
function makeMatrix(size) {
  var initValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newArr = Array(Math.pow(size, 2) - initValue.length).fill(0);
  return {
    store: initValue.concat(newArr),
    size: size
  };
}
function getCell(matrix, x, y) {
  var store = matrix.store,
      size = matrix.size;
  return store[x + y * size];
}
function setCell(matrix, value, x, y) {
  var store = matrix.store,
      size = matrix.size;
  store[x + y * size] = value;
  return {
    store: store,
    size: size
  };
}
function shuffleMatrix(matrix) {
  var store = matrix.store,
      size = matrix.size;
  store.sort(function () {
    return Math.random() - 0.5;
  });
  return {
    store: store,
    size: size
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVscEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aW1lci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9jbGljay5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy91dGlscy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImluaXRBdWRpbyIsImF1ZGlvQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmlnaHRBbnN3ZXJBdWRpbyIsInNldEF0dHJpYnV0ZSIsImRhdGFzZXQiLCJuYW1lIiwiYXBwZW5kQ2hpbGQiLCJ3cm9uZ0Fuc3dlckF1ZGlvIiwidGltZW91dEF1ZGlvIiwiY2xvc2VUcmFpbmluZ0hhbmRsZXIiLCJwYWdlQ29udGVudCIsImluaXRTZWN0aW9uIiwibWFpbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNvdW5kVHJhaW5pbmdIYW5kbGVyIiwiZSIsImF1ZGlvQWxsb3dpbmciLCJnZXRHYW1lQXVkaW9TdGF0dXMiLCJidXR0b25Tb3VuZCIsInRhcmdldCIsInNldEdhbWVBdWRpb1N0YXR1cyIsImNsb3NlT3ZlcmxheUhhbmRsZXIiLCJvdmVybGF5Q29udGFpbmVyIiwiaW5pdEhlbHBCdXR0b25zIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbkV4aXQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uSW5mbyIsIm92ZXJsYXkiLCJyZW1vdmUiLCJpbml0T3ZlcmxheSIsImNvbnRlbnQiLCJvdmVybGF5Q29udGVudCIsImlubmVySFRNTCIsImJ1dHRvbk92ZXJsYXkiLCJzdGF0dXMiLCJzdGFydCIsInBhdXNlIiwidGltZW91dCIsImdldExlZnRUaW1lIiwidGltZSIsImJlZ2luVGltZSIsImRpZmYiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmVuZGVyVGltZXIiLCJ0aW1lclN0YXRlIiwiY29udGFpbmVyIiwidGltZXJJdGVtIiwidGltZXIiLCJuZXh0VGljayIsInRpbWVyU3RhdHVzIiwiZW5kSGFuZGxlciIsImlzRW5kIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInN0YXJ0VGltZXIiLCJuZXdTdGF0ZSIsInBhdXNlVGltZXIiLCJnYW1lTGV2ZWwiLCJlYXN5IiwibGV2ZWxOYW1lIiwiZHVyYXRpb24iLCJtZWRpdW0iLCJoYXJkIiwiZ2FtZVN0YXR1cyIsImluaXQiLCJzdG9wIiwiZ2FtZUF1ZGlvIiwiYXVkaW8iLCJhdWRpb1N0YXR1cyIsImluaXRIZWFkZXIiLCJpbml0TWFpblBhZ2UiLCJpbml0Rm9vdGVyIiwidG9nZ2xlTWVudSIsImFjdGl2ZU1lbnVJdGVtIiwicGFnZUZvb3RlciIsImJvZHkiLCJwYWdlSW5mb0NvbnRhaW5lciIsInBhZ2VMb2dvQ29udGFpbmVyIiwicGFnZUhlYWRlciIsIm5hdk1lbnUiLCJpbml0TWVudSIsIm5hdk1vYmlsZU1lbnUiLCJjb250YWlucyIsInBhZ2VDb250YWluZXIiLCJwYWdlSGVhZGluZyIsInBhZ2VTdWJIZWFkaW5nIiwiYnV0dG9uTG9naW4iLCJyZWdpc3RlckxvZ2luIiwibWVudUl0ZW1zIiwibWFpbiIsInRyYWluaW5nIiwic3RhdGlzdGljIiwiY2xpY2tIYW5kbGVyIiwic2VjdGlvbk5hbWUiLCJzZWN0aW9uIiwic2V0QWN0aXZlUGFnZU5hbWUiLCJtb2JpbGUiLCJtZW51VG9nZ2xlIiwibWVudUljb24iLCJhY3RpdmVQYWdlTmFtZSIsImdldEFjdGl2ZVBhZ2VOYW1lIiwibWVudUxpc3QiLCJtZW51Q29udGFpbmVyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpdGVtIiwibWVudUl0ZW0iLCJtZW51SXRlbUljb24iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm1lbnVJdGVtTGluayIsImNhcmRzRWxlbWVudHMiLCJpbml0U3ViU2VjdGlvbiIsImNhcmRzQ29udGFpbmVyIiwicmVwbGFjZVdpdGgiLCJ0cmFpbmluZ1R5cGVzIiwidHlwZUtleSIsInR5cGVOYW1lIiwiY2FyZEl0ZW0iLCJjYXJkSW1hZ2UiLCJjYXJkTmFtZSIsInN1YlNlY3Rpb25LZXkiLCJ0cmFpbmluZ0tleSIsImN1cnJlbnRUYXJnZXQiLCJpbml0VHJhaW5pbmciLCJnZXRTZWN0aW9uRGF0YUJ5TmFtZSIsInN1YlNlY3Rpb25OYW1lIiwic3ViU2VjdGlvbiIsInZhbHVlcyIsInRyYWluaW5nc0l0ZW1zIiwiZmluZCIsInRyYWluaW5ncyIsInJvdGF0ZUNhcmQiLCJ0YXJnZXRDYXJkTmFtZSIsImNhcmQiLCJ0YXJnZXRDYXJkQmxvY2siLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlQ29udGVudCIsImN1cnJlbnRCbG9jayIsIm5ld0Jsb2NrIiwicGFyZW50QmxvY2siLCJwcmVwZW5kIiwiaW5pdFN1YlNlY3Rpb25IZWFkaW5nIiwic2VjdGlvbkhlYWRpbmciLCJpbml0VHJhaW5DYXJkcyIsImNhcmRCbG9jayIsImtleSIsImNhcmRMaW5rIiwiaW1hZ2UiLCJjYXJkQ29udGVudCIsImNhcmRSb3RhdGVCdXR0b24iLCJjYXJkQmFja0l0ZW0iLCJjYXJkQmFja0Rlc2NyIiwiZGVzY3JpcHRpb24iLCJjYXJkQmFja0NvbnRlbnQiLCJjYXJkQmFja05hbWUiLCJzZWN0aW9uSGVhZGVyIiwic2VjdGlvbkhlYWRpbmdDb250YWluZXIiLCJ0cmFpbmluZ0luZm8iLCJpbml0U3RhcnRUcmFpbmluZyIsImdhbWUiLCJzdGFydFRyYWluaW5nQ29udGFpbmVyIiwibGV2ZWxTZWxlY3RDb250YWluZXIiLCJsZXZlbFNlbGVjdExhYmVsIiwibGV2ZWxTZWxlY3QiLCJtYXAiLCJvcHRpb24iLCJzdGFydEJ1dHRvbiIsInNlbGVjdGVkR2FtZUxldmVsIiwidmFsdWUiLCJzdGFydEdhbWUiLCJsZXZlbCIsImdhbWVMZXZlbEluZm8iLCJzdWJTZWN0aW9uVHJhaW5pbmciLCJ0cmFpbmluZ0NvbnRhaW5lciIsInRyYWluaW5nQ2FyZCIsImJnIiwiaW5pdEdhbWUiLCJzdGFydFRyYWluaW5nIiwic3RhdGUiLCJzZXRBY3RpdmVNZW51SXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51QmFja2dyb3VuZCIsIm92ZXJsYXlQYWdlIiwidGV4dE1lbnVJY29uIiwibWVudUl0ZW1JY29ucyIsImluY2x1ZGVzIiwibGluayIsInJ1bGVzIiwidGVybXNDb3VudCIsImFuc3dlcnNDb3VudCIsImF1ZGlvU291bmQiLCJhdWRpb05hbWUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJnZW5lcmF0ZU1hdHJpeCIsImFuc3dlcnMiLCJBcnJheSIsImZpbGwiLCJlbGVtIiwiaW5kZXgiLCJtYXRyaXhBcnIiLCJtYWtlTWF0cml4Iiwic2h1ZmZsZU1hdHJpeCIsImluaXRBbnN3ZXJzIiwibWF0cml4IiwibWF0cml4Q29udGFpbmVyIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInNpemUiLCJzdG9yZSIsIm1hdHJpeEl0ZW0iLCJpZCIsIm9uY2xpY2siLCJkaXNwbGF5U2NvcmUiLCJzY29yZUl0ZW0iLCJyZW5kZXJNYXRyaXgiLCJnYW1lT2JqIiwic2NvcmUiLCJuZXdHYW1lU3RhdGUiLCJhdHRlbXB0Q291bnQiLCJuZXdNYXRyaXgiLCJyZW5kZXJJbmZvIiwiZ2FtZVN0YXRlIiwiaW5mb0NvbnRhaW5lciIsImdhbWVDb250YWluZXIiLCJsZXZlbEl0ZW0iLCJ0aW1lckNvbnRhaW5lciIsInN0b3BHYW1lIiwiZmluaXNoVHJhaW5pbmdDb250YWluZXIiLCJmaW5pc2hTY29yZSIsImZpbmlzaEJ1dHRvbiIsInJlbmRlckdhbWUiLCJyZXN1bHQiLCJpbml0VmFsdWUiLCJuZXdBcnIiLCJsZW5ndGgiLCJjb25jYXQiLCJnZXRDZWxsIiwieCIsInkiLCJzZXRDZWxsIiwic29ydCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QSxTQUFPO0FBQUVqQyxTQUFLLEVBQUxBLEtBQUY7QUFBU0QsUUFBSSxFQUFKQTtBQUFULEdBQVA7QUFDRCxDOzs7Ozs7VUN2QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXVkaW8oKSB7XHJcbiAgY29uc3QgYXVkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhdWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYXVkaW8nKTtcclxuXHJcbiAgLy8gaW5pdCByaWdodCBhbnN3ZXIgY2xpY2sgYXVkaW9cclxuICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICByaWdodEFuc3dlckF1ZGlvLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvX19pdGVtJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby9hbnN3ZXJfcmlnaHQubXAzJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5kYXRhc2V0Lm5hbWUgPSAncmlnaHQtYW5zd2VyJztcclxuICBhdWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEFuc3dlckF1ZGlvKTtcclxuXHJcbiAgLy8gaW5pdCB3cm9uZyBjbGljayBhdWRpb1xyXG4gIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHdyb25nQW5zd2VyQXVkaW8uY2xhc3NMaXN0LmFkZCgnYXVkaW9fX2l0ZW0nKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2F1ZGlvL2Fuc3dlcl93cm9uZy5tcDMnKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLmRhdGFzZXQubmFtZSA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyb25nQW5zd2VyQXVkaW8pO1xyXG5cclxuICAvLyBpbml0IHRpbWVvdXQgYXVkaW9cclxuICBjb25zdCB0aW1lb3V0QXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHRpbWVvdXRBdWRpby5jbGFzc0xpc3QuYWRkKCdhdWRpb19faXRlbScpO1xyXG4gIHRpbWVvdXRBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby90aW1lb3V0Lm1wMycpO1xyXG4gIHRpbWVvdXRBdWRpby5kYXRhc2V0Lm5hbWUgPSAndGltZW91dCc7XHJcbiAgYXVkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZW91dEF1ZGlvKTtcclxuXHJcbiAgcmV0dXJuIGF1ZGlvQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuLi9pbml0U2VjdGlvbic7XHJcbmltcG9ydCB7IGdldEdhbWVBdWRpb1N0YXR1cywgc2V0R2FtZUF1ZGlvU3RhdHVzIH0gZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VUcmFpbmluZ0hhbmRsZXIoKSB7XHJcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbigndHJhaW5pbmdzJyk7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc291bmRUcmFpbmluZ0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgc2V0R2FtZUF1ZGlvU3RhdHVzKGZhbHNlKTtcclxuICAgIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV9vZmYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRHYW1lQXVkaW9TdGF0dXModHJ1ZSk7XHJcbiAgICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfdXAnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5SGFuZGxlcigpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWxwQnV0dG9ucygpIHtcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9ucycpO1xyXG5cclxuICAvLyBpbml0IGV4aXQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25FeGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uRXhpdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutC+0L3Rh9C40YLRjCDRgtGA0LXQvdC40YDQvtCy0LrRgycpO1xyXG4gIGJ1dHRvbkV4aXQudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xyXG4gIGJ1dHRvbkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRyYWluaW5nSGFuZGxlcik7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25FeGl0KTtcclxuXHJcbiAgLy8gaW5pdCBzb3VuZCBidXR0b25cclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25Tb3VuZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvblNvdW5kLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JLQutC70Y7Rh9C40YLRjC/QstGL0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcclxuICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfb2ZmJztcclxuICBidXR0b25Tb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvdW5kVHJhaW5pbmdIYW5kbGVyKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblNvdW5kKTtcclxuXHJcbiAgLy8gaW5pdCBpbmZvIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uSW5mby5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbkluZm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICfQn9GA0L7Rh9C40YLQsNGC0Ywg0L/RgNCw0LLQuNC70LAnKTtcclxuICBidXR0b25JbmZvLnRleHRDb250ZW50ID0gJ2hlbHBfb3V0bGluZSc7XHJcbiAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25JbmZvKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3ZlcmxheShjb250ZW50KSB7XHJcbiAgY29uc3Qgb3ZlcmxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX292ZXJsYXknLCAnb3ZlcmxheScsICdoaWRkZW4nKTtcclxuXHJcbiAgLy8gaW5pdCBvdmVybGF5IGNvbnRlbnRcclxuICBjb25zdCBvdmVybGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlfX2NvbnRlbnQnKTtcclxuICBvdmVybGF5Q29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUNvbnRlbnQpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXkgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutGA0YvRgtGMJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS50ZXh0Q29udGVudCA9ICdjbG9zZSc7XHJcbiAgYnV0dG9uT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheUhhbmRsZXIpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT3ZlcmxheSk7XHJcblxyXG4gIHJldHVybiBvdmVybGF5Q29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHN0YXR1cyA9IHtcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBwYXVzZTogJ3BhdXNlJyxcclxufTtcclxubGV0IHRpbWVvdXQ7XHJcblxyXG5mdW5jdGlvbiBnZXRMZWZ0VGltZSh7IHRpbWUsIGJlZ2luVGltZSB9KSB7XHJcbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBiZWdpblRpbWU7XHJcbiAgcmV0dXJuIHRpbWUgLSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGltZXIodGltZXJTdGF0ZSkge1xyXG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aW1lclN0YXRlO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gaW5pdCB0aW1lciBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRpbWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVySXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fdGltZXInLCAndGltZXInKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lclxyXG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXJfX2l0ZW0nKTtcclxuICB0aW1lci50ZXh0Q29udGVudCA9IGdldExlZnRUaW1lKHRpbWVyU3RhdGUpO1xyXG4gIHRpbWVySXRlbS5hcHBlbmRDaGlsZCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRUaWNrKHRpbWVyU3RhdGUpIHtcclxuICBjb25zdCB7IHN0YXR1czogdGltZXJTdGF0dXMsIGVuZEhhbmRsZXIgfSA9IHRpbWVyU3RhdGU7XHJcbiAgY29uc3QgaXNFbmQgPSBnZXRMZWZ0VGltZSh0aW1lclN0YXRlKSA8IDA7XHJcbiAgaWYgKGlzRW5kKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBpZiAoZW5kSGFuZGxlcikge1xyXG4gICAgICBlbmRIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0aW1lclN0YXR1cyA9PT0gc3RhdHVzLnN0YXJ0KSB7XHJcbiAgICByZW5kZXJUaW1lcih0aW1lclN0YXRlKTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgbmV4dFRpY2sodGltZXJTdGF0ZSk7IH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VGltZXIodGltZSwgY29udGFpbmVyLCBlbmRIYW5kbGVyKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICB0aW1lLFxyXG4gICAgY29udGFpbmVyLFxyXG4gICAgYmVnaW5UaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMuc3RhcnQsXHJcbiAgICBlbmRIYW5kbGVyLFxyXG4gIH07XHJcbiAgbmV4dFRpY2sobmV3U3RhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VUaW1lcih0aW1lclN0YXRlKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi50aW1lclN0YXRlLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMucGF1c2UsXHJcbiAgICB0aW1lOiBEYXRlLm5vdygpIC0gdGltZXJTdGF0ZS5iZWdpblRpbWUsXHJcbiAgfTtcclxuICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgcmVuZGVyVGltZXIobmV3U3RhdGUpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lTGV2ZWwgPSB7XHJcbiAgZWFzeToge1xyXG4gICAgbGV2ZWxOYW1lOiAnZWFzeScsXHJcbiAgICBuYW1lOiAn0LvQtdCz0LrQuNC5JyxcclxuICAgIGR1cmF0aW9uOiAzMCxcclxuICB9LFxyXG4gIG1lZGl1bToge1xyXG4gICAgbGV2ZWxOYW1lOiAnbWVkaXVtJyxcclxuICAgIG5hbWU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBkdXJhdGlvbjogNTAsXHJcbiAgfSxcclxuICBoYXJkOiB7XHJcbiAgICBsZXZlbE5hbWU6ICdoYXJkJyxcclxuICAgIG5hbWU6ICfRgtGP0LbQtdC70YvQuScsXHJcbiAgICBkdXJhdGlvbjogNDUsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU3RhdHVzID0ge1xyXG4gIGluaXQ6ICdpbml0JyxcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBzdG9wOiAnc3RvcCcsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lQXVkaW8gPSB7XHJcbiAgYXVkaW86IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdhbWVBdWRpb1N0YXR1cyhhdWRpb1N0YXR1cykge1xyXG4gIGdhbWVBdWRpby5hdWRpbyA9IGF1ZGlvU3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZUF1ZGlvU3RhdHVzKCkge1xyXG4gIHJldHVybiBnYW1lQXVkaW8uYXVkaW87XHJcbn1cclxuIiwiaW1wb3J0IGluaXRIZWFkZXIgZnJvbSAnLi9pbml0SGVhZGVyJztcclxuaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0Rm9vdGVyIGZyb20gJy4vaW5pdEZvb3Rlcic7XHJcbmltcG9ydCB7IHRvZ2dsZU1lbnUsIGFjdGl2ZU1lbnVJdGVtIH0gZnJvbSAnLi90b2dnbGVNZW51JztcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRIZWFkZXIoKTtcclxuXHJcbi8vIGluaXQgbWFpbiBwYWdlXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxubWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRNYWluUGFnZSgpKTtcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRGb290ZXIoKTtcclxuXHJcbi8vIG9wZW4gYW5kIGNsb3NlIG1vYmlsZSBtZW51XHJcbnRvZ2dsZU1lbnUoKTtcclxuXHJcbi8vIGFjdGl2ZSBkZXNrdG9wIG1lbnUgaXRlbVxyXG5hY3RpdmVNZW51SXRlbSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Rm9vdGVyKCkge1xyXG4gIC8vIGluaXQgZm9vdGVyXHJcbiAgY29uc3QgcGFnZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIHBhZ2VGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicsICdmb290ZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VGb290ZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBhdXRob3IgaW5mb1xyXG4gIGNvbnN0IHBhZ2VJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19pbmZvJyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuaW5uZXJIVE1MID0gJzIwMjAgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ydXNha292YS1seXVkbWlsYVwiIHRhcmdldD1cIl9ibGFua1wiPlJ1c2Frb3ZhIEx5dWRtaWxhPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zbmFpcHAxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+WXVyeSBIYWx1c2hrbzwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUluZm9Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBsb2dvXHJcbiAgY29uc3QgcGFnZUxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2xvZ28nKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltZy9yc19zY2hvb2xfbG9nby5zdmdcIiBhbHQ9XCJSUyBTY2hvb2xcIj48L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VMb2dvQ29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1lbnUgZnJvbSAnLi9pbml0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gIC8vIGluaXQgaGVhZGVyXHJcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XHJcblxyXG4gIC8vIGluc2VydCBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNZW51ID0gaW5pdE1lbnUoKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xyXG5cclxuICAvLyBpbnNlcnQgbW9iaWxlIG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1vYmlsZU1lbnUgPSBpbml0TWVudSh0cnVlKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1vYmlsZU1lbnUpO1xyXG5cclxuICAvLyBpbml0IG1haW4gY29udGFpbmVyXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWFpblBhZ2UoKSB7XHJcbiAgLy8gcmVtb3ZlIGNsYXNzIG9mIHN1YnNlY3Rpb25cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IHBhZ2UgY29udGFpbmVyXHJcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250YWluZXInKTtcclxuXHJcbiAgLy8gaW5pdCBoMVxyXG4gIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBwYWdlSGVhZGluZy50ZXh0Q29udGVudCA9ICdTbWFydCBLaWRzJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBoMlxyXG4gIGNvbnN0IHBhZ2VTdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwYWdlU3ViSGVhZGluZy50ZXh0Q29udGVudCA9ICfQotGA0LXQvdCw0LbQtdGA0Ysg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L/QsNC80Y/RgtC4LCDQstC90LjQvNCw0L3QuNGPLCDQu9C+0LPQuNC60Lgg0Lgg0LzRi9GI0LvQtdC90LjRjyc7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlU3ViSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbG9naW4gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1sb2dpbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi50ZXh0Q29udGVudCA9ICfQotGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Mb2dpbik7XHJcblxyXG4gIC8vIGluaXQgcmVnaXN0ZXIgYnV0dG9uXHJcbiAgY29uc3QgcmVnaXN0ZXJMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tcmVnaXN0ZXInKTtcclxuICByZWdpc3RlckxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLnRleHRDb250ZW50ID0gJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWdpc3RlckxvZ2luKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuL2luaXRTZWN0aW9uJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUsIGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbi8vIGltcG9ydCBpbml0U3RhdGlzdGljUGFnZSBmcm9tICcuL3N0YXRpc3RpY1BhZ2UnO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gIG1haW46ICfQk9C70LDQstC90LDRjycsXHJcbiAgdHJhaW5pbmc6ICfQotGA0LXQvdCw0LbQtdGA0YsnLFxyXG4gIHN0YXRpc3RpYzogJ9Ch0YLQsNGC0LjRgdGC0LjQutCwJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgbGV0IHBhZ2VDb250ZW50O1xyXG5cclxuICBpZiAoc2VjdGlvbk5hbWUgPT09ICdtYWluJykge1xyXG4gICAgcGFnZUNvbnRlbnQgPSBpbml0TWFpblBhZ2UoKTtcclxuICB9IGVsc2UgaWYgKHNlY3Rpb25OYW1lID09PSAnc3RhdGlzdGljJykge1xyXG4gICAgLy8gcGFnZUNvbnRlbnQgPSBpbml0U3RhdGlzdGljUGFnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRTZWN0aW9uKHNlY3Rpb25OYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XHJcblxyXG4gIHNldEFjdGl2ZVBhZ2VOYW1lKHNlY3Rpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1lbnUobW9iaWxlID0gZmFsc2UpIHtcclxuICAvLyBpbml0IG5hdiBtZW51XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicsICduYXZiYXItZXhwYW5kLWxnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICAvLyBpbml0IG1lbnUgdG9nZ2xlXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RvZ2dsZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcclxuXHJcbiAgICAvLyBpbml0IG1lbnUgaWNvblxyXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pY29uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBtZW51IGxpc3RcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51X19saXN0Jyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaW5pdCBtZW51IGNvbnRhaW5lclxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsICduYXZiYXItY29sbGFwc2UnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLW5hdicsICdtci1hdXRvJyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1lbnVJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbVxyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xyXG4gICAgaWYgKCFtb2JpbGUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG1lbnVJdGVtLmRhdGFzZXQubmFtZSA9IGl0ZW07XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcblxyXG4gICAgaWYgKG1vYmlsZSkge1xyXG4gICAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGljb25cclxuICAgICAgY29uc3QgbWVudUl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBtZW51SXRlbUljb24uY2xhc3NMaXN0LmFkZCgnbGlua19faWNvbicpO1xyXG4gICAgICBtZW51SXRlbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9pY29ucy9pY29uLSR7aXRlbX0ucG5nXCIpYDtcclxuICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JY29uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGxpbmtcclxuICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG1lbnVJdGVtTGluay5jbGFzc0xpc3QuYWRkKG1vYmlsZSA/ICdtZW51X19saW5rJyA6ICduYXYtbGluaycpO1xyXG4gICAgbWVudUl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtpdGVtfWApO1xyXG4gICAgbWVudUl0ZW1MaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGl0ZW07XHJcbiAgICBtZW51SXRlbUxpbmsudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaXRlbV07XHJcbiAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1MaW5rKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5hdk1lbnU7XHJcbn1cclxuIiwiLy8gaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IGluaXRTdWJTZWN0aW9uIGZyb20gJy4vaW5pdFN1YlNlY3Rpb24nO1xyXG5pbXBvcnQgeyB0cmFpbmluZ1R5cGVzIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gaW5pdFN1YlNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aChjYXJkc0VsZW1lbnRzKTtcclxuXHJcbiAgLy8gc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U2VjdGlvbigpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIHRyYWluaW5nVHlwZXMuZm9yRWFjaCgoeyB0eXBlS2V5LCB0eXBlTmFtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgaW1hZ2VcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgY2FyZEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvYmcvYmctJHt0eXBlS2V5fS5qcGdcIilgO1xyXG4gICAgY2FyZEltYWdlLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdHlwZU5hbWU7XHJcbiAgICBjYXJkTmFtZS5kYXRhc2V0LnNlY3Rpb24gPSB0eXBlS2V5O1xyXG4gICAgY2FyZE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRUcmFpbmluZyBmcm9tICcuL2luaXRUcmFpbmluZyc7XHJcbmltcG9ydCB7IHRyYWluaW5nVHlwZXMsIHRyYWluaW5nc0l0ZW1zIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG4vLyBpbXBvcnQgeyBzYXZlUmVzdWx0IH0gZnJvbSAnLi9zdGF0aXN0aWMnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUsIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjb25zdCB0cmFpbmluZ0tleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyYWluaW5nO1xyXG4gIGNvbnN0IHRyYWluaW5nID0gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KTtcclxuXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJyk7XHJcbiAgY2FyZHNDb250YWluZXIucmVwbGFjZVdpdGgodHJhaW5pbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHN1YlNlY3Rpb24gPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25OYW1lKTtcclxuICByZXR1cm4gc3ViU2VjdGlvbi50cmFpbmluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUNhcmQoZSkge1xyXG4gIGNvbnN0IHRhcmdldENhcmROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2FyZDtcclxuICBjb25zdCB0YXJnZXRDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZHMtJHt0YXJnZXRDYXJkTmFtZX1gKTtcclxuXHJcbiAgdGFyZ2V0Q2FyZEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19ibG9ja19ob3ZlcicpO1xyXG5cclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChjdXJyZW50QmxvY2ssIG5ld0Jsb2NrLCBwYXJlbnRCbG9jaykge1xyXG4gIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgIGN1cnJlbnRCbG9jay5yZXBsYWNlV2l0aChuZXdCbG9jayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudEJsb2NrLnByZXBlbmQobmV3QmxvY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25LZXkgPSAnJykge1xyXG4gIC8vIGluaXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9faGVhZGluZycpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uTmFtZSA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdUeXBlcykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25LZXksXHJcbiAgKTtcclxuXHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBzdWJTZWN0aW9uTmFtZS50eXBlTmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzLCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY2FyZHNFbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAvLyBpbml0IGJsb2NrIGZvciBjYXJkc1xyXG4gICAgY29uc3QgY2FyZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmxvY2suY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2Jsb2NrJywgYGNhcmRzLSR7Y2FyZC5rZXl9YCk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQmxvY2spO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBsaW5rXHJcbiAgICBjb25zdCBjYXJkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNhcmRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpbmsnKTtcclxuICAgIGNhcmRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtjYXJkLmtleX1gKTtcclxuICAgIGNhcmRCbG9jay5hcHBlbmRDaGlsZChjYXJkTGluayk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGl0ZW1cclxuICAgIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScsICdjYXJkc19fZnJvbnQnKTtcclxuICAgIGNhcmRJdGVtLmRhdGFzZXQudHJhaW5pbmcgPSBjYXJkLmtleTtcclxuICAgIGNhcmRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY2xpY2tIYW5kbGVyKGUsIHN1YlNlY3Rpb25LZXkpO1xyXG4gICAgICAvLyBzYXZlUmVzdWx0KGNhcmQud29yZCwgJ3RyYWluZWQnKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZExpbmsuYXBwZW5kQ2hpbGQoY2FyZEl0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBpbWFnZVxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1nJyk7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzLyR7Y2FyZC5pbWFnZX1cIilgO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgY29udGVudFxyXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gY2FyZC5uYW1lO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCByb3RhdGUgYnV0dG9uXHJcbiAgICBjb25zdCBjYXJkUm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b24nLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uZGF0YXNldC5jYXJkID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ3JvdGF0ZV9sZWZ0JztcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVDYXJkKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmRSb3RhdGVCdXR0b24pO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIGl0ZW1cclxuICAgIGNvbnN0IGNhcmRCYWNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJywgJ2NhcmRzX19iYWNrJyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uZGF0YXNldC5jYXJkID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkQmFja0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZEJsb2NrLmFwcGVuZENoaWxkKGNhcmRCYWNrSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IGNhcmRCYWNrRGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrRGVzY3IuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZGVzY3InKTtcclxuICAgIGNhcmRCYWNrRGVzY3IudGV4dENvbnRlbnQgPSBjYXJkLmRlc2NyaXB0aW9uO1xyXG4gICAgY2FyZEJhY2tJdGVtLmFwcGVuZENoaWxkKGNhcmRCYWNrRGVzY3IpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQmFja0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19jb250ZW50Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tDb250ZW50KTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkQmFja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkQmFja05hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQmFja0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZEJhY2tOYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb24oc3ViU2VjdGlvbk5hbWUpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBzZXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25OYW1lKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJywgJ2NhcmRzJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGdldCBpbmZvIGZvciBjYXJkc1xyXG4gIGNvbnN0IGNhcmRzRWxlbWVudHMgPSBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSk7XHJcblxyXG4gIC8vIGluaXQgY2FyZHNcclxuICBpbml0VHJhaW5DYXJkcyhjYXJkc0NvbnRhaW5lciwgY2FyZHNFbGVtZW50cywgc3ViU2VjdGlvbk5hbWUpO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbmltcG9ydCB7IGdhbWVMZXZlbCB9IGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IGluaXRHYW1lLCBzdGFydEdhbWUsIGdhbWVMZXZlbEluZm8gfSBmcm9tICcuL3RyYWluaW5ncy9jbGljayc7XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChjdXJyZW50QmxvY2ssIG5ld0Jsb2NrLCBwYXJlbnRCbG9jaykge1xyXG4gIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgIGN1cnJlbnRCbG9jay5yZXBsYWNlV2l0aChuZXdCbG9jayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudEJsb2NrLmFwcGVuZENoaWxkKG5ld0Jsb2NrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdWJTZWN0aW9uSGVhZGluZyh0cmFpbmluZ0luZm8pIHtcclxuICAvLyBpbml0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHNlY3Rpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25fX2hlYWRpbmcnKTtcclxuICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IHRyYWluaW5nSW5mby5uYW1lO1xyXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN0YXJ0VHJhaW5pbmcodHJhaW5pbmdJbmZvLCBnYW1lKSB7XHJcbiAgLy8gaW5pdCBzdGFydCB0cmFpbmluZyBjb250YWluZXJcclxuICBjb25zdCBzdGFydFRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc3RhcnQnKTtcclxuICBzdGFydFRyYWluaW5nQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cD4ke3RyYWluaW5nSW5mby5kZXNjcmlwdGlvbn08L3A+YDtcclxuXHJcbiAgLy8gaW5pdCBsZXZlbCBnYW1lIHNlbGVjdCBjb250YWluZXJcclxuICBjb25zdCBsZXZlbFNlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldmVsU2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19zZWxlY3QnKTtcclxuICBzdGFydFRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsU2VsZWN0Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsZXZlbCBnYW1lIHNlbGVjdCBsYWJlbFxyXG4gIGNvbnN0IGxldmVsU2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbFNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ9CS0YvQsdC10YDQuNGC0LUg0YPRgNC+0LLQtdC90Yw6JztcclxuICBsZXZlbFNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbFNlbGVjdExhYmVsKTtcclxuXHJcbiAgLy8gaW5pdCBsZXZlbCBnYW1lIHNlbGVjdFxyXG4gIGNvbnN0IGxldmVsU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgbGV2ZWxTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3QpO1xyXG5cclxuICAvLyBpbml0IHNlbGVjdCBvcHRpb25zXHJcbiAgT2JqZWN0LmtleXMoZ2FtZUxldmVsKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdhbWVMZXZlbFtpdGVtXS5uYW1lO1xyXG4gICAgbGV2ZWxTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG4gIH0pO1xyXG5cclxuICAvLyBpbml0IHN0YXJ0IHRyYWluaW5nIGJ1dHRvblxyXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2J1dHRvbicsICdidG4nKTtcclxuICBzdGFydEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnBsYXlfY2lyY2xlX291dGxpbmU8L2k+0J3QsNGH0LDRgtGMJztcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkR2FtZUxldmVsID0gbGV2ZWxTZWxlY3QudmFsdWU7XHJcbiAgICBzdGFydEdhbWUoe1xyXG4gICAgICAuLi5nYW1lLFxyXG4gICAgICBsZXZlbDogZ2FtZUxldmVsSW5mb1tnYW1lTGV2ZWxbc2VsZWN0ZWRHYW1lTGV2ZWxdLmxldmVsTmFtZV0sXHJcbiAgICAgIGR1cmF0aW9uOiBnYW1lTGV2ZWxbc2VsZWN0ZWRHYW1lTGV2ZWxdLmR1cmF0aW9uLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBzdGFydFRyYWluaW5nQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0VHJhaW5pbmcodHJhaW5pbmdLZXksIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHN1YlNlY3Rpb25UcmFpbmluZyA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdzSXRlbXMpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS50eXBlS2V5ID09PSBzdWJTZWN0aW9uS2V5LFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRyYWluaW5nSW5mbyA9IE9iamVjdC52YWx1ZXMoc3ViU2VjdGlvblRyYWluaW5nLnRyYWluaW5ncykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLmtleSA9PT0gdHJhaW5pbmdLZXksXHJcbiAgKTtcclxuXHJcbiAgLy8gc2V0IHNlY3Rpb24gaGVhZGVyXHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGluaXRTdWJTZWN0aW9uSGVhZGluZyh0cmFpbmluZ0luZm8pO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2hlYWRpbmcnKTtcclxuICByZXBsYWNlQ29udGVudChzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciwgc2VjdGlvbkhlYWRlciwgbWFpbkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgdHJhaW5pbmcgY29udGFpbmVyXHJcbiAgY29uc3QgdHJhaW5pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0cmFpbmluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZycsICdjYXJkcycpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodHJhaW5pbmdDb250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IHRyYWluaW5nIGNhcmRcclxuICBjb25zdCB0cmFpbmluZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0cmFpbmluZ0NhcmQuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2NhcmQnLCAnY2FyZHNfX2l0ZW0nLCB0cmFpbmluZ0luZm8ua2V5KTtcclxuICB0cmFpbmluZ0NhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzLyR7dHJhaW5pbmdJbmZvLmJnfVwiKWA7XHJcbiAgdHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodHJhaW5pbmdDYXJkKTtcclxuXHJcbiAgLy8gaW5pdCBnYW1lXHJcbiAgY29uc3QgZ2FtZSA9IGluaXRHYW1lKGdhbWVMZXZlbEluZm9bZ2FtZUxldmVsLmVhc3kubGV2ZWxOYW1lXSwgdHJhaW5pbmdDYXJkLCB0cmFpbmluZ0luZm8pO1xyXG5cclxuICAvLyBzdGFydCB0cmFpbmluZ1xyXG4gIGNvbnN0IHN0YXJ0VHJhaW5pbmcgPSBpbml0U3RhcnRUcmFpbmluZyh0cmFpbmluZ0luZm8sIGdhbWUpO1xyXG4gIGNvbnN0IHN0YXJ0VHJhaW5pbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX3N0YXJ0Jyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc3RhcnRUcmFpbmluZ0NvbnRhaW5lciwgc3RhcnRUcmFpbmluZywgdHJhaW5pbmdDYXJkKTtcclxuXHJcbiAgcmV0dXJuIHRyYWluaW5nQ29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHN0YXRlID0ge1xyXG4gIGFjdGl2ZVBhZ2VOYW1lOiAnbWFpbicsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlUGFnZU5hbWUobmFtZSkge1xyXG4gIHN0YXRlLmFjdGl2ZVBhZ2VOYW1lID0gbmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVBhZ2VOYW1lKCkge1xyXG4gIHJldHVybiBzdGF0ZS5hY3RpdmVQYWdlTmFtZTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlTWVudUl0ZW0oKSB7XHJcbiAgY29uc3QgYWN0aXZlUGFnZU5hbWUgPSBnZXRBY3RpdmVQYWdlTmFtZSgpO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpXTtcclxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uZGF0YXNldC5uYW1lID09PSBhY3RpdmVQYWdlTmFtZSkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xpc3QnKTtcclxuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pY29uJyk7XHJcblxyXG4gIGNvbnN0IG1lbnVCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVudUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnbWVudV9vcGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51QmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IG92ZXJsYXlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScsICdoaWRkZW4nKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXlQYWdlKTtcclxuXHJcbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgbWVudUJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgY29uc3QgdGV4dE1lbnVJY29uID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IHRleHRNZW51SWNvbiA9PT0gJ21lbnUnID8gJ2Nsb3NlJyA6ICdtZW51JztcclxuXHJcbiAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51SXRlbUljb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rX19pY29uJyldO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChtZW51SWNvbi50ZXh0Q29udGVudCA9PT0gJ2Nsb3NlJ1xyXG4gICAgICAmJiBlLnRhcmdldCAhPT0gbWVudUJhY2tncm91bmRcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVJY29uXHJcbiAgICAgICYmICFtZW51SXRlbUljb25zLmluY2x1ZGVzKGUudGFyZ2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgbWVudUJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgICBvdmVybGF5UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIG1lbnVJY29uLnRleHRDb250ZW50ID0gJ21lbnUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlTWVudUl0ZW0oKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnVJdGVtKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgdHJhaW5pbmdUeXBlcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHR5cGVOYW1lOiAn0J/QsNC80Y/RgtGMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdhdHRlbnRpb24nLFxyXG4gICAgdHlwZU5hbWU6ICfQktC90LjQvNCw0L3QuNC1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdsb2dpYycsXHJcbiAgICB0eXBlTmFtZTogJ9Cb0L7Qs9C40LrQsCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAndGhpbmtpbmcnLFxyXG4gICAgdHlwZU5hbWU6ICfQnNGL0YjQu9C10L3QuNC1JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWluaW5nc0l0ZW1zID0gW1xyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdtZW1vcnknLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgnLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXgucG5nJyxcclxuICAgICAgICBiZzogJ2ltZy9tZW1vcnkvYmcvbWVtb3J5LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBydWxlczogJzxwPtCSINC60LvQtdGC0YfQsNGC0L7QvCDQv9C+0LvQtSDQvdCwINC90LXQutC+0YLQvtGA0L7QtSDQstGA0LXQvNGPINC/0L7QtNGB0LLQtdGC0Y/RgtGB0Y8g0LfQtdC70LXQvdGL0Lwg0YbQstC10YLQvtC8INC60LLQsNC00YDQsNGC0LjQutC4LCDRgNCw0YHQv9C+0LvQvtC20LXQvdC40LUg0LrQvtGC0L7RgNGL0YUg0L3Rg9C20L3QviDQt9Cw0L/QvtC80L3QuNGC0YwuPC9wPjxwPtCU0LDQu9C10LUg0LrQstCw0LTRgNCw0YLQuNC60Lgg0YHRgtCw0L3Rg9GCINC+0LTQvdC+0LPQviDRhtCy0LXRgtCwLCDQvdGD0LbQvdC+INC30LAg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC1INCy0YDQtdC80Y8g0YPRgdC/0LXRgtGMINC90LDQttCw0YLRjCDQvdCwINGC0LUg0LrQstCw0LTRgNCw0YLQuNC60LgsINC60L7RgtC+0YDRi9C1INCx0YvQu9C4INC/0L7QtNGB0LLQtdGH0LXQvdGLINC30LXQu9C10L3Ri9C8INGG0LLQtdGC0L7QvCwg0LIg0LvRjtCx0L7QvCDQv9C+0YDRj9C00LrQtS48L3A+PHA+0JXRgdC70Lgg0LLRi9Cx0YDQsNC90L3Ri9C5INC60LLQsNC00YDQsNGC0LjQuiDQvtC60LDQttC10YLRgdGPINC90LXQstC10YDQvdGL0LwsINGC0L4g0L7QvSDQv9C+0LTRgdCy0LXRgtC40YLRgdGPINC60YDQsNGB0L3Ri9C8INGG0LLQtdGC0L7QvC48L3A+PHA+0JjQs9GA0LAg0L/QvtCy0YLQvtGA0Y/QtdGC0YHRjywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2NsaWNrJyxcclxuICAgICAgICBuYW1lOiAn0JrQu9C40Lot0JrQu9C40LonLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2F0dGVudGlvbi9jbGljay5wbmcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2F0dGVudGlvbi9iZy9hdHRlbnRpb24uanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LLQvdC40LzQsNC90LjRjycsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QkiDQutC70LXRgtGH0LDRgtC+0Lwg0L/QvtC70LUg0L/QvtGP0LLRj9GC0YHRjyDRh9C40YHQu9CwLCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INC/0YDQvtC60LvQuNC60LDRgtGMICjQvdCw0LbQsNGC0YwpINC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRji48L3A+PC9wPjxwPtCY0LPRgNCwINC/0L7QstGC0L7RgNGP0LXRgtGB0Y8sINC/0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LjQu9C+0YHRjCDQstGA0LXQvNGPINGC0LDQudC80LXRgNCwLjwvcD4nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdsb2dpYycsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2FkZGl0aW9uJyxcclxuICAgICAgICBuYW1lOiAn0KHQu9C+0LbQtdC90LjQtScsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbG9naWMvYWRkaXRpb24ucG5nJyxcclxuICAgICAgICBiZzogJ2ltZy9sb2dpYy9iZy9sb2dpYy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0J3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YPQvNC1INGB0LvQvtC20LjRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ3N1YnRyYWN0aW9uJyxcclxuICAgICAgICBuYW1lOiAn0JLRi9GH0LjRgtCw0L3QuNC1JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9sb2dpYy9zdWJ0cmFjdGlvbi5wbmcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2xvZ2ljLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC70L7Qs9C40LrQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QndC10L7QsdGF0L7QtNC40LzQviDQsiDRg9C80LUg0LLRi9GH0LXRgdGC0Ywg0LLRgdC1INGH0LjRgdC70LAg0LIg0L/RgNC10LTQu9C+0LbQtdC90L3QvtC8INC/0YDQuNC80LXRgNC1INC4INC90LDQttCw0YLRjCDQvdCwINC60L3QvtC/0LrRgyDRgSDQv9GA0LDQstC40LvRjNC90YvQvCDQvtGC0LLQtdGC0L7QvC48L3A+PHA+0J3Rg9C20L3QviDRgNC10YjQsNGC0Ywg0L/RgNC40LzQtdGA0YssINC/0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LjQu9C+0YHRjCDQstGA0LXQvNGPINGC0LDQudC80LXRgNCwLjwvcD4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbXVsdGlwbGljYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICfQo9C80L3QvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL211bHRpcGxpY2F0aW9uLnBuZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbG9naWMvYmcvbG9naWMuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LvQvtCz0LjQutC4JyxcclxuICAgICAgICBydWxlczogJzxwPtCd0LXQvtCx0YXQvtC00LjQvNC+INCyINGD0LzQtSDQv9C10YDQtdC80L3QvtC20LjRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAndGhpbmtpbmcnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICd1bmlrdW0nLFxyXG4gICAgICAgIG5hbWU6ICfQo9C90LjQutGD0LwnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL3RoaW5raW5nL3VuaWt1bS5qcGcnLFxyXG4gICAgICAgIGJnOiAnaW1nL3RoaW5raW5nL2JnL3RoaW5raW5nLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0LPQviDQvNGL0YjQu9C10L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZ2FtZVN0YXR1cywgZ2V0R2FtZUF1ZGlvU3RhdHVzLCBnYW1lTGV2ZWwgfSBmcm9tICcuLi9nYW1lJztcclxuaW1wb3J0IHsgc3RhcnRUaW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGltZXInO1xyXG5pbXBvcnQgeyBpbml0SGVscEJ1dHRvbnMsIGluaXRPdmVybGF5LCBjbG9zZVRyYWluaW5nSGFuZGxlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVscEJ1dHRvbnMnO1xyXG5pbXBvcnQgaW5pdEF1ZGlvIGZyb20gJy4uL2NvbXBvbmVudHMvYXVkaW8nO1xyXG5pbXBvcnQgeyBtYWtlTWF0cml4LCBzaHVmZmxlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4JztcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lTGV2ZWxJbmZvID0ge1xyXG4gIFtnYW1lTGV2ZWwuZWFzeS5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5lYXN5LFxyXG4gICAgdGVybXNDb3VudDogNCxcclxuICAgIGFuc3dlcnNDb3VudDogMTIsXHJcbiAgfSxcclxuICBbZ2FtZUxldmVsLm1lZGl1bS5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5tZWRpdW0sXHJcbiAgICB0ZXJtc0NvdW50OiA1LFxyXG4gICAgYW5zd2Vyc0NvdW50OiAxOSxcclxuICB9LFxyXG4gIFtnYW1lTGV2ZWwuaGFyZC5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5oYXJkLFxyXG4gICAgdGVybXNDb3VudDogNixcclxuICAgIGFuc3dlcnNDb3VudDogMjcsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGF1ZGlvU291bmQoYXVkaW9OYW1lKSB7XHJcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLW5hbWU9XCIke2F1ZGlvTmFtZX1cIl1gKTtcclxuICBpZiAoYXVkaW8pIHtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTWF0cml4KHsgdGVybXNDb3VudCwgYW5zd2Vyc0NvdW50IH0pIHtcclxuICBjb25zdCBhbnN3ZXJzID0gQXJyYXkoYW5zd2Vyc0NvdW50KS5maWxsKDApLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4ICsgMSk7XHJcbiAgY29uc3QgbWF0cml4QXJyID0gbWFrZU1hdHJpeCh0ZXJtc0NvdW50LCBhbnN3ZXJzKTtcclxuICByZXR1cm4gc2h1ZmZsZU1hdHJpeChtYXRyaXhBcnIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QW5zd2VycyhtYXRyaXgsIGNsaWNrSGFuZGxlcikge1xyXG4gIGNvbnN0IG1hdHJpeENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1hdHJpeENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbWF0cml4Jyk7XHJcbiAgbWF0cml4Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7bWF0cml4LnNpemV9LCAxZnIpYDtcclxuXHJcbiAgbWF0cml4LnN0b3JlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG1hdHJpeEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1hdHJpeEl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX21hdHJpeF9faXRlbScsICd0cmFpbmluZ19fbWF0cml4X19pdGVtX3doaXRlJyk7XHJcbiAgICBtYXRyaXhJdGVtLnRleHRDb250ZW50ID0gaXRlbSA+IDAgPyBpdGVtIDogJyc7XHJcbiAgICBtYXRyaXhJdGVtLmRhdGFzZXQuaWQgPSBpdGVtO1xyXG4gICAgbWF0cml4SXRlbS5vbmNsaWNrID0gY2xpY2tIYW5kbGVyO1xyXG4gICAgbWF0cml4Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hdHJpeEl0ZW0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWF0cml4Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2NvcmUodmFsdWUpIHtcclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX2l0ZW0nKTtcclxuICBzY29yZUl0ZW0udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWF0cml4KGdhbWVPYmopIHtcclxuICBjb25zdCB7IGNvbnRhaW5lciwgbWF0cml4LCBsZXZlbCB9ID0gZ2FtZU9iajtcclxuICBkaXNwbGF5U2NvcmUoZ2FtZU9iai5zY29yZSk7XHJcblxyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiB9O1xyXG4gIGxldCBhdHRlbXB0Q291bnQgPSAwO1xyXG5cclxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgYXR0ZW1wdENvdW50ICs9IDE7XHJcbiAgICBpZiAoYXR0ZW1wdENvdW50ID09PSArZS50YXJnZXQuZGF0YXNldC5pZCkge1xyXG4gICAgICBuZXdHYW1lU3RhdGUuc2NvcmUgKz0gMTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX21hdHJpeF9faXRlbV9ncmVlbicpO1xyXG4gICAgICBlLnRhcmdldC5vbmNsaWNrID0gbnVsbDtcclxuXHJcbiAgICAgIGRpc3BsYXlTY29yZShuZXdHYW1lU3RhdGUuc2NvcmUpO1xyXG5cclxuICAgICAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gICAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICAgIGF1ZGlvU291bmQoJ3JpZ2h0LWFuc3dlcicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdHYW1lU3RhdGUuc2NvcmUgLT0gMTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX21hdHJpeF9faXRlbV9yZWQnKTtcclxuICAgICAgYXR0ZW1wdENvdW50ID0gbGV2ZWwuYW5zd2Vyc0NvdW50O1xyXG5cclxuICAgICAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gICAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICAgIGF1ZGlvU291bmQoJ3dyb25nLWFuc3dlcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF0dGVtcHRDb3VudCA9PT0gbGV2ZWwuYW5zd2Vyc0NvdW50KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IGdlbmVyYXRlTWF0cml4KGxldmVsKTtcclxuICAgICAgICByZW5kZXJNYXRyaXgoeyAuLi5uZXdHYW1lU3RhdGUsIG1hdHJpeDogbmV3TWF0cml4IH0pO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlcnMgPSBpbml0QW5zd2VycyhtYXRyaXgsIGNsaWNrSGFuZGxlcik7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhbnN3ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySW5mbyhnYW1lU3RhdGUpIHtcclxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19faW5mbycpO1xyXG4gIGdhbWVTdGF0ZS5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGxldmVsIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3QgbGV2ZWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGV2ZWxJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19sZXZlbCcpO1xyXG4gIGxldmVsSXRlbS5pbm5lckhUTUwgPSBgPHNwYW4+0KPRgNC+0LLQtdC90Yw6PC9zcGFuPiAke2dhbWVTdGF0ZS5sZXZlbC5nYW1lTGV2ZWwubmFtZX1gO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lciBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRpbWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVySXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fdGltZXInLCAndGltZXInKTtcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVySXRlbSk7XHJcblxyXG4gIC8vIGluaXQgc2NvcmUgaW5mbyBjb250YWluZXJcclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzY29yZUl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3Njb3JlJyk7XHJcbiAgc2NvcmVJdGVtLmlubmVySFRNTCA9ICc8c3Bhbj7QntGH0LrQuDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwic2NvcmVfX2l0ZW1cIj4wPC9zcGFuPic7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUl0ZW0pO1xyXG5cclxuICByZXR1cm4geyB0aW1lckNvbnRhaW5lcjogdGltZXJJdGVtIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BHYW1lKGdhbWVTdGF0ZSkge1xyXG4gIGNvbnN0IHNjb3JlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9faXRlbScpO1xyXG4gIGNvbnN0IHNjb3JlID0gc2NvcmVJdGVtLnRleHRDb250ZW50O1xyXG4gIGNvbnN0IHsgZ2FtZUNvbnRhaW5lciB9ID0gZ2FtZVN0YXRlO1xyXG5cclxuICAvLyBpbml0IGZpbmlzaCB0cmFpbmluZyBjb250YWluZXJcclxuICBjb25zdCBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZpbmlzaFRyYWluaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19maW5pc2gnKTtcclxuXHJcbiAgLy8gaW5pdCBmaW5pc2ggc2NvcmUgY29udGFpbmVyXHJcbiAgY29uc3QgZmluaXNoU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmaW5pc2hTY29yZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2hfX3Njb3JlJyk7XHJcbiAgZmluaXNoU2NvcmUuaW5uZXJIVE1MID0gYDxwPtCS0LDRiCDRgNC10LfRg9C70YzRgtCw0YI6PC9wPjxkaXY+JHtzY29yZX08L2Rpdj5gO1xyXG4gIGZpbmlzaFRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmlzaFNjb3JlKTtcclxuXHJcbiAgLy8gaW5pdCBmaW5pc2ggdHJhaW5pbmcgYnV0dG9uXHJcbiAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZmluaXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19idXR0b24nLCAnYnRuJyk7XHJcbiAgZmluaXNoQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+0JLRi9C50YLQuCc7XHJcbiAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUcmFpbmluZ0hhbmRsZXIpO1xyXG4gIGZpbmlzaFRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmlzaEJ1dHRvbik7XHJcblxyXG4gIGdhbWVDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmlzaFRyYWluaW5nQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR2FtZShnYW1lU3RhdGUpIHtcclxuICBjb25zdCB7IHN0YXR1cywgZ2FtZUNvbnRhaW5lciwgdHJhaW5pbmdJbmZvIH0gPSBnYW1lU3RhdGU7XHJcbiAgaWYgKHN0YXR1cyA9PT0gZ2FtZVN0YXR1cy5zdGFydCkge1xyXG4gICAgZ2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHJlc3VsdCA9IHJlbmRlckluZm8oZ2FtZVN0YXRlKTtcclxuXHJcbiAgICBjb25zdCBtYXRyaXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1hdHJpeENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fZ2FtZScpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXRyaXhDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBpbml0SGVscEJ1dHRvbnMoKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbnRhaW5lciA9IGluaXRPdmVybGF5KHRyYWluaW5nSW5mby5ydWxlcyk7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJsYXlDb250YWluZXIpO1xyXG5cclxuICAgIC8vIGluaXQgYXVkaW9cclxuICAgIGNvbnN0IGF1ZGlvID0gaW5pdEF1ZGlvKCk7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGF1ZGlvKTtcclxuXHJcbiAgICBzdGFydFRpbWVyKGdhbWVTdGF0ZS5kdXJhdGlvbiwgcmVzdWx0LnRpbWVyQ29udGFpbmVyLCAoKSA9PiB7IHN0b3BHYW1lKGdhbWVTdGF0ZSk7IH0pO1xyXG4gICAgcmVuZGVyTWF0cml4KHsgLi4uZ2FtZVN0YXRlLCBjb250YWluZXI6IG1hdHJpeENvbnRhaW5lciB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZShsZXZlbCwgZ2FtZUNvbnRhaW5lciwgdHJhaW5pbmdJbmZvLCBkdXJhdGlvbiA9IDYwKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNjb3JlOiAwLFxyXG4gICAgbGV2ZWwsXHJcbiAgICBzdGF0dXM6IGdhbWVTdGF0dXMuaW5pdCxcclxuICAgIGdhbWVDb250YWluZXIsXHJcbiAgICBtYXRyaXg6IHt9LFxyXG4gICAgZHVyYXRpb24sXHJcbiAgICB0cmFpbmluZ0luZm8sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShnYW1lT2JqKSB7XHJcbiAgY29uc3QgbWF0cml4ID0gZ2VuZXJhdGVNYXRyaXgoZ2FtZU9iai5sZXZlbCk7XHJcbiAgY29uc3QgbmV3R2FtZVN0YXRlID0geyAuLi5nYW1lT2JqLCBzdGF0dXM6IGdhbWVTdGF0dXMuc3RhcnQsIG1hdHJpeCB9O1xyXG4gIHJlbmRlckdhbWUobmV3R2FtZVN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIG5ld0dhbWVTdGF0ZTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZU1hdHJpeChzaXplLCBpbml0VmFsdWUgPSBbXSkge1xyXG4gIGNvbnN0IG5ld0FyciA9IEFycmF5KHNpemUgKiogMiAtIGluaXRWYWx1ZS5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0b3JlOiBpbml0VmFsdWUuY29uY2F0KG5ld0FyciksXHJcbiAgICBzaXplLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZWxsKG1hdHJpeCwgeCwgeSkge1xyXG4gIGNvbnN0IHsgc3RvcmUsIHNpemUgfSA9IG1hdHJpeDtcclxuICByZXR1cm4gc3RvcmVbeCArIHkgKiBzaXplXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENlbGwobWF0cml4LCB2YWx1ZSwgeCwgeSkge1xyXG4gIGNvbnN0IHsgc3RvcmUsIHNpemUgfSA9IG1hdHJpeDtcclxuICBzdG9yZVt4ICsgeSAqIHNpemVdID0gdmFsdWU7XHJcbiAgcmV0dXJuIHsgc3RvcmUsIHNpemUgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVNYXRyaXgobWF0cml4KSB7XHJcbiAgY29uc3QgeyBzdG9yZSwgc2l6ZSB9ID0gbWF0cml4O1xyXG4gIHN0b3JlLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgcmV0dXJuIHsgc3RvcmUsIHNpemUgfTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hc3NldHMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9