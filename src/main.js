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
/* harmony import */ var _trainings_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings/matrix */ "./src/assets/js/trainings/matrix.js");
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
    (0,_trainings_matrix__WEBPACK_IMPORTED_MODULE_2__.startGame)(_objectSpread(_objectSpread({}, game), {}, {
      level: _trainings_matrix__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel[selectedGameLevel].levelName],
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

  var game = (0,_trainings_matrix__WEBPACK_IMPORTED_MODULE_2__.initGame)(_trainings_matrix__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy.levelName], trainingCard, trainingInfo); // start training

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
    rules: '<p>В клетчатом поле на некоторое время подсветятся зеленым цветом квадратики, расположение которых нужно запомнить.</p><p>Далее квадратики станут одного цвета, нужно за определенное время успеть нажать на те квадратики, которые были подсвечены зеленым цветом, в любом порядке.</p><p>Если выбранный квадратик окажется неверным, то он подсветится красным цветом.</p><p>Игра продолжается, пока не закончилось время таймера.</p>'
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
    description: 'Тренажер для развития образного мышления'
  }]
}];

/***/ }),

/***/ "./src/assets/js/trainings/matrix.js":
/*!*******************************************!*\
  !*** ./src/assets/js/trainings/matrix.js ***!
  \*******************************************/
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
  answersCount: 5,
  delay: 3
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium,
  termsCount: 5,
  answersCount: 7,
  delay: 4
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard,
  termsCount: 6,
  answersCount: 9,
  delay: 5
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
  var answers = Array(answersCount).fill(1);
  var matrixArr = (0,_utils_matrix__WEBPACK_IMPORTED_MODULE_4__.makeMatrix)(termsCount, answers);
  return (0,_utils_matrix__WEBPACK_IMPORTED_MODULE_4__.shuffleMatrix)(matrixArr);
}

function initAnswers(matrix, successHandler, failHandler) {
  var matrixContainer = document.createElement('div');
  matrixContainer.classList.add('training__matrix');
  matrixContainer.style.gridTemplateColumns = "repeat(".concat(matrix.size, ", 1fr)");
  matrix.store.forEach(function (item) {
    var matrixItem = document.createElement('div');
    matrixItem.classList.add('training__matrix__item', 'training__matrix__item_white');
    matrixItem.dataset.id = item;
    matrixItem.onclick = item === 1 ? successHandler : failHandler;
    matrixContainer.appendChild(matrixItem);
  });
  return matrixContainer;
}

function initMatrix(matrix) {
  var matrixContainer = document.createElement('div');
  matrixContainer.classList.add('training__matrix');
  matrixContainer.style.gridTemplateColumns = "repeat(".concat(matrix.size, ", 1fr)");
  matrix.store.forEach(function (item) {
    var matrixItem = document.createElement('div');
    matrixItem.classList.add('training__matrix__item');
    matrixItem.classList.add(item === 1 ? 'training__matrix__item_green' : 'training__matrix__item_white');
    matrixItem.dataset.id = item;
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
  container.innerHTML = ''; // init matrix square container

  var matrixSquare = initMatrix(matrix);
  container.appendChild(matrixSquare);
  displayScore(gameObj.score);

  var newGameState = _objectSpread({}, gameObj);

  var attemptCount = 0;

  var successHandler = function successHandler(e) {
    newGameState.score += 1;
    attemptCount += 1;
    e.target.classList.add('training__matrix__item_green');
    e.target.onclick = null;
    displayScore(newGameState.score);
    var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

    if (audioAllowing) {
      audioSound('right-answer');
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

  var failHandler = function failHandler(e) {
    newGameState.score -= 1;
    attemptCount += 1;
    e.target.classList.add('training__matrix__item_red');
    e.target.onclick = null;
    displayScore(newGameState.score);
    var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

    if (audioAllowing) {
      audioSound('wrong-answer');
    }

    if (attemptCount === level.answersCount) {
      setTimeout(function () {
        var newExample = generateMatrix(level);
        renderMatrix(_objectSpread(_objectSpread({}, newGameState), {}, {
          matrix: newExample
        }));
      }, 500);
    }
  };

  var answers = initAnswers(matrix, successHandler, failHandler);
  setTimeout(function () {
    container.innerHTML = '';
    container.appendChild(answers);
  }, level.delay * 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVscEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aW1lci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdXRpbHMvbWF0cml4LmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbml0QXVkaW8iLCJhdWRpb0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJpZ2h0QW5zd2VyQXVkaW8iLCJzZXRBdHRyaWJ1dGUiLCJkYXRhc2V0IiwibmFtZSIsImFwcGVuZENoaWxkIiwid3JvbmdBbnN3ZXJBdWRpbyIsInRpbWVvdXRBdWRpbyIsImNsb3NlVHJhaW5pbmdIYW5kbGVyIiwicGFnZUNvbnRlbnQiLCJpbml0U2VjdGlvbiIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzb3VuZFRyYWluaW5nSGFuZGxlciIsImUiLCJhdWRpb0FsbG93aW5nIiwiZ2V0R2FtZUF1ZGlvU3RhdHVzIiwiYnV0dG9uU291bmQiLCJ0YXJnZXQiLCJzZXRHYW1lQXVkaW9TdGF0dXMiLCJjbG9zZU92ZXJsYXlIYW5kbGVyIiwib3ZlcmxheUNvbnRhaW5lciIsImluaXRIZWxwQnV0dG9ucyIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b25FeGl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbkluZm8iLCJvdmVybGF5IiwicmVtb3ZlIiwiaW5pdE92ZXJsYXkiLCJjb250ZW50Iiwib3ZlcmxheUNvbnRlbnQiLCJpbm5lckhUTUwiLCJidXR0b25PdmVybGF5Iiwic3RhdHVzIiwic3RhcnQiLCJwYXVzZSIsInRpbWVvdXQiLCJnZXRMZWZ0VGltZSIsInRpbWUiLCJiZWdpblRpbWUiLCJkaWZmIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJlbmRlclRpbWVyIiwidGltZXJTdGF0ZSIsImNvbnRhaW5lciIsInRpbWVySXRlbSIsInRpbWVyIiwibmV4dFRpY2siLCJ0aW1lclN0YXR1cyIsImVuZEhhbmRsZXIiLCJpc0VuZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzdGFydFRpbWVyIiwibmV3U3RhdGUiLCJwYXVzZVRpbWVyIiwiZ2FtZUxldmVsIiwiZWFzeSIsImxldmVsTmFtZSIsImR1cmF0aW9uIiwibWVkaXVtIiwiaGFyZCIsImdhbWVTdGF0dXMiLCJpbml0Iiwic3RvcCIsImdhbWVBdWRpbyIsImF1ZGlvIiwiYXVkaW9TdGF0dXMiLCJpbml0SGVhZGVyIiwiaW5pdE1haW5QYWdlIiwiaW5pdEZvb3RlciIsInRvZ2dsZU1lbnUiLCJhY3RpdmVNZW51SXRlbSIsInBhZ2VGb290ZXIiLCJib2R5IiwicGFnZUluZm9Db250YWluZXIiLCJwYWdlTG9nb0NvbnRhaW5lciIsInBhZ2VIZWFkZXIiLCJuYXZNZW51IiwiaW5pdE1lbnUiLCJuYXZNb2JpbGVNZW51IiwiY29udGFpbnMiLCJwYWdlQ29udGFpbmVyIiwicGFnZUhlYWRpbmciLCJwYWdlU3ViSGVhZGluZyIsImJ1dHRvbkxvZ2luIiwicmVnaXN0ZXJMb2dpbiIsIm1lbnVJdGVtcyIsIm1haW4iLCJ0cmFpbmluZyIsInN0YXRpc3RpYyIsImNsaWNrSGFuZGxlciIsInNlY3Rpb25OYW1lIiwic2VjdGlvbiIsInNldEFjdGl2ZVBhZ2VOYW1lIiwibW9iaWxlIiwibWVudVRvZ2dsZSIsIm1lbnVJY29uIiwiYWN0aXZlUGFnZU5hbWUiLCJnZXRBY3RpdmVQYWdlTmFtZSIsIm1lbnVMaXN0IiwibWVudUNvbnRhaW5lciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsIm1lbnVJdGVtIiwibWVudUl0ZW1JY29uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZW51SXRlbUxpbmsiLCJjYXJkc0VsZW1lbnRzIiwiaW5pdFN1YlNlY3Rpb24iLCJjYXJkc0NvbnRhaW5lciIsInJlcGxhY2VXaXRoIiwidHJhaW5pbmdUeXBlcyIsInR5cGVLZXkiLCJ0eXBlTmFtZSIsImNhcmRJdGVtIiwiY2FyZEltYWdlIiwiY2FyZE5hbWUiLCJzdWJTZWN0aW9uS2V5IiwidHJhaW5pbmdLZXkiLCJjdXJyZW50VGFyZ2V0IiwiaW5pdFRyYWluaW5nIiwiZ2V0U2VjdGlvbkRhdGFCeU5hbWUiLCJzdWJTZWN0aW9uTmFtZSIsInN1YlNlY3Rpb24iLCJ2YWx1ZXMiLCJ0cmFpbmluZ3NJdGVtcyIsImZpbmQiLCJ0cmFpbmluZ3MiLCJyb3RhdGVDYXJkIiwidGFyZ2V0Q2FyZE5hbWUiLCJjYXJkIiwidGFyZ2V0Q2FyZEJsb2NrIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZUNvbnRlbnQiLCJjdXJyZW50QmxvY2siLCJuZXdCbG9jayIsInBhcmVudEJsb2NrIiwicHJlcGVuZCIsImluaXRTdWJTZWN0aW9uSGVhZGluZyIsInNlY3Rpb25IZWFkaW5nIiwiaW5pdFRyYWluQ2FyZHMiLCJjYXJkQmxvY2siLCJrZXkiLCJjYXJkTGluayIsImltYWdlIiwiY2FyZENvbnRlbnQiLCJjYXJkUm90YXRlQnV0dG9uIiwiY2FyZEJhY2tJdGVtIiwiY2FyZEJhY2tEZXNjciIsImRlc2NyaXB0aW9uIiwiY2FyZEJhY2tDb250ZW50IiwiY2FyZEJhY2tOYW1lIiwic2VjdGlvbkhlYWRlciIsInNlY3Rpb25IZWFkaW5nQ29udGFpbmVyIiwidHJhaW5pbmdJbmZvIiwiaW5pdFN0YXJ0VHJhaW5pbmciLCJnYW1lIiwic3RhcnRUcmFpbmluZ0NvbnRhaW5lciIsImxldmVsU2VsZWN0Q29udGFpbmVyIiwibGV2ZWxTZWxlY3RMYWJlbCIsImxldmVsU2VsZWN0IiwibWFwIiwib3B0aW9uIiwic3RhcnRCdXR0b24iLCJzZWxlY3RlZEdhbWVMZXZlbCIsInZhbHVlIiwic3RhcnRHYW1lIiwibGV2ZWwiLCJnYW1lTGV2ZWxJbmZvIiwic3ViU2VjdGlvblRyYWluaW5nIiwidHJhaW5pbmdDb250YWluZXIiLCJ0cmFpbmluZ0NhcmQiLCJiZyIsImluaXRHYW1lIiwic3RhcnRUcmFpbmluZyIsInN0YXRlIiwic2V0QWN0aXZlTWVudUl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUJhY2tncm91bmQiLCJvdmVybGF5UGFnZSIsInRleHRNZW51SWNvbiIsIm1lbnVJdGVtSWNvbnMiLCJpbmNsdWRlcyIsImxpbmsiLCJydWxlcyIsInRlcm1zQ291bnQiLCJhbnN3ZXJzQ291bnQiLCJkZWxheSIsImF1ZGlvU291bmQiLCJhdWRpb05hbWUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJnZW5lcmF0ZU1hdHJpeCIsImFuc3dlcnMiLCJBcnJheSIsImZpbGwiLCJtYXRyaXhBcnIiLCJtYWtlTWF0cml4Iiwic2h1ZmZsZU1hdHJpeCIsImluaXRBbnN3ZXJzIiwibWF0cml4Iiwic3VjY2Vzc0hhbmRsZXIiLCJmYWlsSGFuZGxlciIsIm1hdHJpeENvbnRhaW5lciIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzaXplIiwic3RvcmUiLCJtYXRyaXhJdGVtIiwiaWQiLCJvbmNsaWNrIiwiaW5pdE1hdHJpeCIsImRpc3BsYXlTY29yZSIsInNjb3JlSXRlbSIsInJlbmRlck1hdHJpeCIsImdhbWVPYmoiLCJtYXRyaXhTcXVhcmUiLCJzY29yZSIsIm5ld0dhbWVTdGF0ZSIsImF0dGVtcHRDb3VudCIsIm5ld01hdHJpeCIsIm5ld0V4YW1wbGUiLCJyZW5kZXJJbmZvIiwiZ2FtZVN0YXRlIiwiaW5mb0NvbnRhaW5lciIsImdhbWVDb250YWluZXIiLCJsZXZlbEl0ZW0iLCJ0aW1lckNvbnRhaW5lciIsInN0b3BHYW1lIiwiZmluaXNoVHJhaW5pbmdDb250YWluZXIiLCJmaW5pc2hTY29yZSIsImZpbmlzaEJ1dHRvbiIsInJlbmRlckdhbWUiLCJyZXN1bHQiLCJpbml0VmFsdWUiLCJuZXdBcnIiLCJsZW5ndGgiLCJjb25jYXQiLCJnZXRD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RFksQ0FDckJLLElBRHFCO0FBRXBDQyxPQUFLLENBQUNtQyxJQUFOLENBQVc7QUFBQSxXQUFNOU0sSUFBSSxDQUFDK00sTUFBTCxLQUFnQixHQUF0QjtBQUFBLEdBQVg7QUFDQSxTQUFPO0FBQUVwQyxTQUFLLEVBQUxBLEtBQUY7QUFBU0QsUUFBSSxFQUFKQTtBQUFULEdBQVA7QUFDRCxDOzs7Ozs7VUN2QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXVkaW8oKSB7XHJcbiAgY29uc3QgYXVkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhdWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYXVkaW8nKTtcclxuXHJcbiAgLy8gaW5pdCByaWdodCBhbnN3ZXIgY2xpY2sgYXVkaW9cclxuICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICByaWdodEFuc3dlckF1ZGlvLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvX19pdGVtJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby9hbnN3ZXJfcmlnaHQubXAzJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5kYXRhc2V0Lm5hbWUgPSAncmlnaHQtYW5zd2VyJztcclxuICBhdWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEFuc3dlckF1ZGlvKTtcclxuXHJcbiAgLy8gaW5pdCB3cm9uZyBjbGljayBhdWRpb1xyXG4gIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHdyb25nQW5zd2VyQXVkaW8uY2xhc3NMaXN0LmFkZCgnYXVkaW9fX2l0ZW0nKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2F1ZGlvL2Fuc3dlcl93cm9uZy5tcDMnKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLmRhdGFzZXQubmFtZSA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyb25nQW5zd2VyQXVkaW8pO1xyXG5cclxuICAvLyBpbml0IHRpbWVvdXQgYXVkaW9cclxuICBjb25zdCB0aW1lb3V0QXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHRpbWVvdXRBdWRpby5jbGFzc0xpc3QuYWRkKCdhdWRpb19faXRlbScpO1xyXG4gIHRpbWVvdXRBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby90aW1lb3V0Lm1wMycpO1xyXG4gIHRpbWVvdXRBdWRpby5kYXRhc2V0Lm5hbWUgPSAndGltZW91dCc7XHJcbiAgYXVkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZW91dEF1ZGlvKTtcclxuXHJcbiAgcmV0dXJuIGF1ZGlvQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuLi9pbml0U2VjdGlvbic7XHJcbmltcG9ydCB7IGdldEdhbWVBdWRpb1N0YXR1cywgc2V0R2FtZUF1ZGlvU3RhdHVzIH0gZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VUcmFpbmluZ0hhbmRsZXIoKSB7XHJcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbigndHJhaW5pbmdzJyk7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc291bmRUcmFpbmluZ0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgc2V0R2FtZUF1ZGlvU3RhdHVzKGZhbHNlKTtcclxuICAgIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV9vZmYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRHYW1lQXVkaW9TdGF0dXModHJ1ZSk7XHJcbiAgICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfdXAnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5SGFuZGxlcigpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWxwQnV0dG9ucygpIHtcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9ucycpO1xyXG5cclxuICAvLyBpbml0IGV4aXQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25FeGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uRXhpdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutC+0L3Rh9C40YLRjCDRgtGA0LXQvdC40YDQvtCy0LrRgycpO1xyXG4gIGJ1dHRvbkV4aXQudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xyXG4gIGJ1dHRvbkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRyYWluaW5nSGFuZGxlcik7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25FeGl0KTtcclxuXHJcbiAgLy8gaW5pdCBzb3VuZCBidXR0b25cclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25Tb3VuZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvblNvdW5kLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JLQutC70Y7Rh9C40YLRjC/QstGL0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcclxuICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfb2ZmJztcclxuICBidXR0b25Tb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvdW5kVHJhaW5pbmdIYW5kbGVyKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblNvdW5kKTtcclxuXHJcbiAgLy8gaW5pdCBpbmZvIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uSW5mby5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbkluZm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICfQn9GA0L7Rh9C40YLQsNGC0Ywg0L/RgNCw0LLQuNC70LAnKTtcclxuICBidXR0b25JbmZvLnRleHRDb250ZW50ID0gJ2hlbHBfb3V0bGluZSc7XHJcbiAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25JbmZvKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3ZlcmxheShjb250ZW50KSB7XHJcbiAgY29uc3Qgb3ZlcmxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX292ZXJsYXknLCAnb3ZlcmxheScsICdoaWRkZW4nKTtcclxuXHJcbiAgLy8gaW5pdCBvdmVybGF5IGNvbnRlbnRcclxuICBjb25zdCBvdmVybGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlfX2NvbnRlbnQnKTtcclxuICBvdmVybGF5Q29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUNvbnRlbnQpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXkgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutGA0YvRgtGMJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS50ZXh0Q29udGVudCA9ICdjbG9zZSc7XHJcbiAgYnV0dG9uT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheUhhbmRsZXIpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT3ZlcmxheSk7XHJcblxyXG4gIHJldHVybiBvdmVybGF5Q29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHN0YXR1cyA9IHtcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBwYXVzZTogJ3BhdXNlJyxcclxufTtcclxubGV0IHRpbWVvdXQ7XHJcblxyXG5mdW5jdGlvbiBnZXRMZWZ0VGltZSh7IHRpbWUsIGJlZ2luVGltZSB9KSB7XHJcbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBiZWdpblRpbWU7XHJcbiAgcmV0dXJuIHRpbWUgLSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGltZXIodGltZXJTdGF0ZSkge1xyXG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aW1lclN0YXRlO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gaW5pdCB0aW1lciBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRpbWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVySXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fdGltZXInLCAndGltZXInKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lclxyXG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXJfX2l0ZW0nKTtcclxuICB0aW1lci50ZXh0Q29udGVudCA9IGdldExlZnRUaW1lKHRpbWVyU3RhdGUpO1xyXG4gIHRpbWVySXRlbS5hcHBlbmRDaGlsZCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRUaWNrKHRpbWVyU3RhdGUpIHtcclxuICBjb25zdCB7IHN0YXR1czogdGltZXJTdGF0dXMsIGVuZEhhbmRsZXIgfSA9IHRpbWVyU3RhdGU7XHJcbiAgY29uc3QgaXNFbmQgPSBnZXRMZWZ0VGltZSh0aW1lclN0YXRlKSA8IDA7XHJcbiAgaWYgKGlzRW5kKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBpZiAoZW5kSGFuZGxlcikge1xyXG4gICAgICBlbmRIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0aW1lclN0YXR1cyA9PT0gc3RhdHVzLnN0YXJ0KSB7XHJcbiAgICByZW5kZXJUaW1lcih0aW1lclN0YXRlKTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgbmV4dFRpY2sodGltZXJTdGF0ZSk7IH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VGltZXIodGltZSwgY29udGFpbmVyLCBlbmRIYW5kbGVyKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICB0aW1lLFxyXG4gICAgY29udGFpbmVyLFxyXG4gICAgYmVnaW5UaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMuc3RhcnQsXHJcbiAgICBlbmRIYW5kbGVyLFxyXG4gIH07XHJcbiAgbmV4dFRpY2sobmV3U3RhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VUaW1lcih0aW1lclN0YXRlKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi50aW1lclN0YXRlLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMucGF1c2UsXHJcbiAgICB0aW1lOiBEYXRlLm5vdygpIC0gdGltZXJTdGF0ZS5iZWdpblRpbWUsXHJcbiAgfTtcclxuICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgcmVuZGVyVGltZXIobmV3U3RhdGUpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lTGV2ZWwgPSB7XHJcbiAgZWFzeToge1xyXG4gICAgbGV2ZWxOYW1lOiAnZWFzeScsXHJcbiAgICBuYW1lOiAn0LvQtdCz0LrQuNC5JyxcclxuICAgIGR1cmF0aW9uOiAzMCxcclxuICB9LFxyXG4gIG1lZGl1bToge1xyXG4gICAgbGV2ZWxOYW1lOiAnbWVkaXVtJyxcclxuICAgIG5hbWU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBkdXJhdGlvbjogNTAsXHJcbiAgfSxcclxuICBoYXJkOiB7XHJcbiAgICBsZXZlbE5hbWU6ICdoYXJkJyxcclxuICAgIG5hbWU6ICfRgtGP0LbQtdC70YvQuScsXHJcbiAgICBkdXJhdGlvbjogNDUsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU3RhdHVzID0ge1xyXG4gIGluaXQ6ICdpbml0JyxcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBzdG9wOiAnc3RvcCcsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lQXVkaW8gPSB7XHJcbiAgYXVkaW86IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdhbWVBdWRpb1N0YXR1cyhhdWRpb1N0YXR1cykge1xyXG4gIGdhbWVBdWRpby5hdWRpbyA9IGF1ZGlvU3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZUF1ZGlvU3RhdHVzKCkge1xyXG4gIHJldHVybiBnYW1lQXVkaW8uYXVkaW87XHJcbn1cclxuIiwiaW1wb3J0IGluaXRIZWFkZXIgZnJvbSAnLi9pbml0SGVhZGVyJztcclxuaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0Rm9vdGVyIGZyb20gJy4vaW5pdEZvb3Rlcic7XHJcbmltcG9ydCB7IHRvZ2dsZU1lbnUsIGFjdGl2ZU1lbnVJdGVtIH0gZnJvbSAnLi90b2dnbGVNZW51JztcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRIZWFkZXIoKTtcclxuXHJcbi8vIGluaXQgbWFpbiBwYWdlXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxubWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRNYWluUGFnZSgpKTtcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRGb290ZXIoKTtcclxuXHJcbi8vIG9wZW4gYW5kIGNsb3NlIG1vYmlsZSBtZW51XHJcbnRvZ2dsZU1lbnUoKTtcclxuXHJcbi8vIGFjdGl2ZSBkZXNrdG9wIG1lbnUgaXRlbVxyXG5hY3RpdmVNZW51SXRlbSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Rm9vdGVyKCkge1xyXG4gIC8vIGluaXQgZm9vdGVyXHJcbiAgY29uc3QgcGFnZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIHBhZ2VGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicsICdmb290ZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VGb290ZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBhdXRob3IgaW5mb1xyXG4gIGNvbnN0IHBhZ2VJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19pbmZvJyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuaW5uZXJIVE1MID0gJzIwMjAgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ydXNha292YS1seXVkbWlsYVwiIHRhcmdldD1cIl9ibGFua1wiPlJ1c2Frb3ZhIEx5dWRtaWxhPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zbmFpcHAxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+WXVyeSBIYWx1c2hrbzwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUluZm9Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBsb2dvXHJcbiAgY29uc3QgcGFnZUxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2xvZ28nKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltZy9yc19zY2hvb2xfbG9nby5zdmdcIiBhbHQ9XCJSUyBTY2hvb2xcIj48L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VMb2dvQ29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1lbnUgZnJvbSAnLi9pbml0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gIC8vIGluaXQgaGVhZGVyXHJcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XHJcblxyXG4gIC8vIGluc2VydCBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNZW51ID0gaW5pdE1lbnUoKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xyXG5cclxuICAvLyBpbnNlcnQgbW9iaWxlIG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1vYmlsZU1lbnUgPSBpbml0TWVudSh0cnVlKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1vYmlsZU1lbnUpO1xyXG5cclxuICAvLyBpbml0IG1haW4gY29udGFpbmVyXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWFpblBhZ2UoKSB7XHJcbiAgLy8gcmVtb3ZlIGNsYXNzIG9mIHN1YnNlY3Rpb25cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IHBhZ2UgY29udGFpbmVyXHJcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250YWluZXInKTtcclxuXHJcbiAgLy8gaW5pdCBoMVxyXG4gIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBwYWdlSGVhZGluZy50ZXh0Q29udGVudCA9ICdTbWFydCBLaWRzJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBoMlxyXG4gIGNvbnN0IHBhZ2VTdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwYWdlU3ViSGVhZGluZy50ZXh0Q29udGVudCA9ICfQotGA0LXQvdCw0LbQtdGA0Ysg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L/QsNC80Y/RgtC4LCDQstC90LjQvNCw0L3QuNGPLCDQu9C+0LPQuNC60Lgg0Lgg0LzRi9GI0LvQtdC90LjRjyc7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlU3ViSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbG9naW4gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1sb2dpbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi50ZXh0Q29udGVudCA9ICfQotGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Mb2dpbik7XHJcblxyXG4gIC8vIGluaXQgcmVnaXN0ZXIgYnV0dG9uXHJcbiAgY29uc3QgcmVnaXN0ZXJMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tcmVnaXN0ZXInKTtcclxuICByZWdpc3RlckxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLnRleHRDb250ZW50ID0gJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWdpc3RlckxvZ2luKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuL2luaXRTZWN0aW9uJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUsIGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbi8vIGltcG9ydCBpbml0U3RhdGlzdGljUGFnZSBmcm9tICcuL3N0YXRpc3RpY1BhZ2UnO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gIG1haW46ICfQk9C70LDQstC90LDRjycsXHJcbiAgdHJhaW5pbmc6ICfQotGA0LXQvdCw0LbQtdGA0YsnLFxyXG4gIHN0YXRpc3RpYzogJ9Ch0YLQsNGC0LjRgdGC0LjQutCwJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgbGV0IHBhZ2VDb250ZW50O1xyXG5cclxuICBpZiAoc2VjdGlvbk5hbWUgPT09ICdtYWluJykge1xyXG4gICAgcGFnZUNvbnRlbnQgPSBpbml0TWFpblBhZ2UoKTtcclxuICB9IGVsc2UgaWYgKHNlY3Rpb25OYW1lID09PSAnc3RhdGlzdGljJykge1xyXG4gICAgLy8gcGFnZUNvbnRlbnQgPSBpbml0U3RhdGlzdGljUGFnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRTZWN0aW9uKHNlY3Rpb25OYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XHJcblxyXG4gIHNldEFjdGl2ZVBhZ2VOYW1lKHNlY3Rpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1lbnUobW9iaWxlID0gZmFsc2UpIHtcclxuICAvLyBpbml0IG5hdiBtZW51XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicsICduYXZiYXItZXhwYW5kLWxnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICAvLyBpbml0IG1lbnUgdG9nZ2xlXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RvZ2dsZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcclxuXHJcbiAgICAvLyBpbml0IG1lbnUgaWNvblxyXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pY29uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBtZW51IGxpc3RcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51X19saXN0Jyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaW5pdCBtZW51IGNvbnRhaW5lclxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsICduYXZiYXItY29sbGFwc2UnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLW5hdicsICdtci1hdXRvJyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1lbnVJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbVxyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xyXG4gICAgaWYgKCFtb2JpbGUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG1lbnVJdGVtLmRhdGFzZXQubmFtZSA9IGl0ZW07XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcblxyXG4gICAgaWYgKG1vYmlsZSkge1xyXG4gICAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGljb25cclxuICAgICAgY29uc3QgbWVudUl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBtZW51SXRlbUljb24uY2xhc3NMaXN0LmFkZCgnbGlua19faWNvbicpO1xyXG4gICAgICBtZW51SXRlbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9pY29ucy9pY29uLSR7aXRlbX0ucG5nXCIpYDtcclxuICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JY29uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGxpbmtcclxuICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG1lbnVJdGVtTGluay5jbGFzc0xpc3QuYWRkKG1vYmlsZSA/ICdtZW51X19saW5rJyA6ICduYXYtbGluaycpO1xyXG4gICAgbWVudUl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtpdGVtfWApO1xyXG4gICAgbWVudUl0ZW1MaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGl0ZW07XHJcbiAgICBtZW51SXRlbUxpbmsudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaXRlbV07XHJcbiAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1MaW5rKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5hdk1lbnU7XHJcbn1cclxuIiwiLy8gaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IGluaXRTdWJTZWN0aW9uIGZyb20gJy4vaW5pdFN1YlNlY3Rpb24nO1xyXG5pbXBvcnQgeyB0cmFpbmluZ1R5cGVzIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gaW5pdFN1YlNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aChjYXJkc0VsZW1lbnRzKTtcclxuXHJcbiAgLy8gc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U2VjdGlvbigpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIHRyYWluaW5nVHlwZXMuZm9yRWFjaCgoeyB0eXBlS2V5LCB0eXBlTmFtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgaW1hZ2VcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgY2FyZEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvYmcvYmctJHt0eXBlS2V5fS5qcGdcIilgO1xyXG4gICAgY2FyZEltYWdlLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdHlwZU5hbWU7XHJcbiAgICBjYXJkTmFtZS5kYXRhc2V0LnNlY3Rpb24gPSB0eXBlS2V5O1xyXG4gICAgY2FyZE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRUcmFpbmluZyBmcm9tICcuL2luaXRUcmFpbmluZyc7XHJcbmltcG9ydCB7IHRyYWluaW5nVHlwZXMsIHRyYWluaW5nc0l0ZW1zIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG4vLyBpbXBvcnQgeyBzYXZlUmVzdWx0IH0gZnJvbSAnLi9zdGF0aXN0aWMnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUsIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjb25zdCB0cmFpbmluZ0tleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyYWluaW5nO1xyXG4gIGNvbnN0IHRyYWluaW5nID0gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KTtcclxuXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJyk7XHJcbiAgY2FyZHNDb250YWluZXIucmVwbGFjZVdpdGgodHJhaW5pbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHN1YlNlY3Rpb24gPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25OYW1lKTtcclxuICByZXR1cm4gc3ViU2VjdGlvbi50cmFpbmluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUNhcmQoZSkge1xyXG4gIGNvbnN0IHRhcmdldENhcmROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2FyZDtcclxuICBjb25zdCB0YXJnZXRDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZHMtJHt0YXJnZXRDYXJkTmFtZX1gKTtcclxuXHJcbiAgdGFyZ2V0Q2FyZEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19ibG9ja19ob3ZlcicpO1xyXG5cclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChjdXJyZW50QmxvY2ssIG5ld0Jsb2NrLCBwYXJlbnRCbG9jaykge1xyXG4gIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgIGN1cnJlbnRCbG9jay5yZXBsYWNlV2l0aChuZXdCbG9jayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudEJsb2NrLnByZXBlbmQobmV3QmxvY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25LZXkgPSAnJykge1xyXG4gIC8vIGluaXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9faGVhZGluZycpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uTmFtZSA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdUeXBlcykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25LZXksXHJcbiAgKTtcclxuXHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBzdWJTZWN0aW9uTmFtZS50eXBlTmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzLCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY2FyZHNFbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAvLyBpbml0IGJsb2NrIGZvciBjYXJkc1xyXG4gICAgY29uc3QgY2FyZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmxvY2suY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2Jsb2NrJywgYGNhcmRzLSR7Y2FyZC5rZXl9YCk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQmxvY2spO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBsaW5rXHJcbiAgICBjb25zdCBjYXJkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNhcmRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpbmsnKTtcclxuICAgIGNhcmRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtjYXJkLmtleX1gKTtcclxuICAgIGNhcmRCbG9jay5hcHBlbmRDaGlsZChjYXJkTGluayk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGl0ZW1cclxuICAgIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScsICdjYXJkc19fZnJvbnQnKTtcclxuICAgIGNhcmRJdGVtLmRhdGFzZXQudHJhaW5pbmcgPSBjYXJkLmtleTtcclxuICAgIGNhcmRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY2xpY2tIYW5kbGVyKGUsIHN1YlNlY3Rpb25LZXkpO1xyXG4gICAgICAvLyBzYXZlUmVzdWx0KGNhcmQud29yZCwgJ3RyYWluZWQnKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZExpbmsuYXBwZW5kQ2hpbGQoY2FyZEl0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBpbWFnZVxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1nJyk7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzLyR7Y2FyZC5pbWFnZX1cIilgO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgY29udGVudFxyXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gY2FyZC5uYW1lO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCByb3RhdGUgYnV0dG9uXHJcbiAgICBjb25zdCBjYXJkUm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b24nLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uZGF0YXNldC5jYXJkID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ3JvdGF0ZV9sZWZ0JztcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVDYXJkKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmRSb3RhdGVCdXR0b24pO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIGl0ZW1cclxuICAgIGNvbnN0IGNhcmRCYWNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJywgJ2NhcmRzX19iYWNrJyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uZGF0YXNldC5jYXJkID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkQmFja0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZEJsb2NrLmFwcGVuZENoaWxkKGNhcmRCYWNrSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IGNhcmRCYWNrRGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrRGVzY3IuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZGVzY3InKTtcclxuICAgIGNhcmRCYWNrRGVzY3IudGV4dENvbnRlbnQgPSBjYXJkLmRlc2NyaXB0aW9uO1xyXG4gICAgY2FyZEJhY2tJdGVtLmFwcGVuZENoaWxkKGNhcmRCYWNrRGVzY3IpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQmFja0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19jb250ZW50Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tDb250ZW50KTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkQmFja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkQmFja05hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQmFja0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZEJhY2tOYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb24oc3ViU2VjdGlvbk5hbWUpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBzZXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25OYW1lKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJywgJ2NhcmRzJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGdldCBpbmZvIGZvciBjYXJkc1xyXG4gIGNvbnN0IGNhcmRzRWxlbWVudHMgPSBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSk7XHJcblxyXG4gIC8vIGluaXQgY2FyZHNcclxuICBpbml0VHJhaW5DYXJkcyhjYXJkc0NvbnRhaW5lciwgY2FyZHNFbGVtZW50cywgc3ViU2VjdGlvbk5hbWUpO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbmltcG9ydCB7IGdhbWVMZXZlbCB9IGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IGluaXRHYW1lLCBzdGFydEdhbWUsIGdhbWVMZXZlbEluZm8gfSBmcm9tICcuL3RyYWluaW5ncy9tYXRyaXgnO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5hcHBlbmRDaGlsZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSB0cmFpbmluZ0luZm8ubmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdGFydFRyYWluaW5nKHRyYWluaW5nSW5mbywgZ2FtZSkge1xyXG4gIC8vIGluaXQgc3RhcnQgdHJhaW5pbmcgY29udGFpbmVyXHJcbiAgY29uc3Qgc3RhcnRUcmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3N0YXJ0Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHA+JHt0cmFpbmluZ0luZm8uZGVzY3JpcHRpb259PC9wPmA7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3QgY29udGFpbmVyXHJcbiAgY29uc3QgbGV2ZWxTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbFNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc2VsZWN0Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbFNlbGVjdENvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3QgbGFiZWxcclxuICBjb25zdCBsZXZlbFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGV2ZWxTZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICfQktGL0LHQtdGA0LjRgtC1INGD0YDQvtCy0LXQvdGMOic7XHJcbiAgbGV2ZWxTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3RMYWJlbCk7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3RcclxuICBjb25zdCBsZXZlbFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIGxldmVsU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsU2VsZWN0KTtcclxuXHJcbiAgLy8gaW5pdCBzZWxlY3Qgb3B0aW9uc1xyXG4gIE9iamVjdC5rZXlzKGdhbWVMZXZlbCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSk7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBnYW1lTGV2ZWxbaXRlbV0ubmFtZTtcclxuICAgIGxldmVsU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxuICB9KTtcclxuXHJcbiAgLy8gaW5pdCBzdGFydCB0cmFpbmluZyBidXR0b25cclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19idXR0b24nLCAnYnRuJyk7XHJcbiAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5wbGF5X2NpcmNsZV9vdXRsaW5lPC9pPtCd0LDRh9Cw0YLRjCc7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEdhbWVMZXZlbCA9IGxldmVsU2VsZWN0LnZhbHVlO1xyXG4gICAgc3RhcnRHYW1lKHtcclxuICAgICAgLi4uZ2FtZSxcclxuICAgICAgbGV2ZWw6IGdhbWVMZXZlbEluZm9bZ2FtZUxldmVsW3NlbGVjdGVkR2FtZUxldmVsXS5sZXZlbE5hbWVdLFxyXG4gICAgICBkdXJhdGlvbjogZ2FtZUxldmVsW3NlbGVjdGVkR2FtZUxldmVsXS5kdXJhdGlvbixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xyXG5cclxuICByZXR1cm4gc3RhcnRUcmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uVHJhaW5pbmcgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBjb25zdCB0cmFpbmluZ0luZm8gPSBPYmplY3QudmFsdWVzKHN1YlNlY3Rpb25UcmFpbmluZy50cmFpbmluZ3MpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IHRyYWluaW5nS2V5LFxyXG4gICk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmcnLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjYXJkXHJcbiAgY29uc3QgdHJhaW5pbmdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDYXJkLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19jYXJkJywgJ2NhcmRzX19pdGVtJywgdHJhaW5pbmdJbmZvLmtleSk7XHJcbiAgdHJhaW5pbmdDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke3RyYWluaW5nSW5mby5iZ31cIilgO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIC8vIGluaXQgZ2FtZVxyXG4gIGNvbnN0IGdhbWUgPSBpbml0R2FtZShnYW1lTGV2ZWxJbmZvW2dhbWVMZXZlbC5lYXN5LmxldmVsTmFtZV0sIHRyYWluaW5nQ2FyZCwgdHJhaW5pbmdJbmZvKTtcclxuXHJcbiAgLy8gc3RhcnQgdHJhaW5pbmdcclxuICBjb25zdCBzdGFydFRyYWluaW5nID0gaW5pdFN0YXJ0VHJhaW5pbmcodHJhaW5pbmdJbmZvLCBnYW1lKTtcclxuICBjb25zdCBzdGFydFRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19zdGFydCcpO1xyXG4gIHJlcGxhY2VDb250ZW50KHN0YXJ0VHJhaW5pbmdDb250YWluZXIsIHN0YXJ0VHJhaW5pbmcsIHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIHJldHVybiB0cmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG4iLCJjb25zdCBzdGF0ZSA9IHtcclxuICBhY3RpdmVQYWdlTmFtZTogJ21haW4nLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2VOYW1lKG5hbWUpIHtcclxuICBzdGF0ZS5hY3RpdmVQYWdlTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQYWdlTmFtZSgpIHtcclxuICByZXR1cm4gc3RhdGUuYWN0aXZlUGFnZU5hbWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKV07XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXQubmFtZSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faWNvbicpO1xyXG5cclxuICBjb25zdCBtZW51QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21lbnVfb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBvdmVybGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5UGFnZSk7XHJcblxyXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHRNZW51SWNvbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSB0ZXh0TWVudUljb24gPT09ICdtZW51JyA/ICdjbG9zZScgOiAnbWVudSc7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1JY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua19faWNvbicpXTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAobWVudUljb24udGV4dENvbnRlbnQgPT09ICdjbG9zZSdcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVCYWNrZ3JvdW5kXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51SWNvblxyXG4gICAgICAmJiAhbWVudUl0ZW1JY29ucy5pbmNsdWRlcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBtZW51TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRyYWluaW5nVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0eXBlTmFtZTogJ9Cf0LDQvNGP0YLRjCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHR5cGVOYW1lOiAn0JLQvdC40LzQsNC90LjQtScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHlwZU5hbWU6ICfQm9C+0LPQuNC60LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHR5cGVOYW1lOiAn0JzRi9GI0LvQtdC90LjQtScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFpbmluZ3NJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4JyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LnBuZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbWVtb3J5L2JnL21lbW9yeS5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QkiDQutC70LXRgtGH0LDRgtC+0Lwg0L/QvtC70LUg0L3QsCDQvdC10LrQvtGC0L7RgNC+0LUg0LLRgNC10LzRjyDQv9C+0LTRgdCy0LXRgtGP0YLRgdGPINC30LXQu9C10L3Ri9C8INGG0LLQtdGC0L7QvCDQutCy0LDQtNGA0LDRgtC40LrQuCwg0YDQsNGB0L/QvtC70L7QttC10L3QuNC1INC60L7RgtC+0YDRi9GFINC90YPQttC90L4g0LfQsNC/0L7QvNC90LjRgtGMLjwvcD48cD7QlNCw0LvQtdC1INC60LLQsNC00YDQsNGC0LjQutC4INGB0YLQsNC90YPRgiDQvtC00L3QvtCz0L4g0YbQstC10YLQsCwg0L3Rg9C20L3QviDQt9CwINC+0L/RgNC10LTQtdC70LXQvdC90L7QtSDQstGA0LXQvNGPINGD0YHQv9C10YLRjCDQvdCw0LbQsNGC0Ywg0L3QsCDRgtC1INC60LLQsNC00YDQsNGC0LjQutC4LCDQutC+0YLQvtGA0YvQtSDQsdGL0LvQuCDQv9C+0LTRgdCy0LXRh9C10L3RiyDQt9C10LvQtdC90YvQvCDRhtCy0LXRgtC+0LwsINCyINC70Y7QsdC+0Lwg0L/QvtGA0Y/QtNC60LUuPC9wPjxwPtCV0YHQu9C4INCy0YvQsdGA0LDQvdC90YvQuSDQutCy0LDQtNGA0LDRgtC40Log0L7QutCw0LbQtdGC0YHRjyDQvdC10LLQtdGA0L3Ri9C8LCDRgtC+INC+0L0g0L/QvtC00YHQstC10YLQuNGC0YHRjyDQutGA0LDRgdC90YvQvCDRhtCy0LXRgtC+0LwuPC9wPjxwPtCY0LPRgNCwINC/0YDQvtC00L7Qu9C20LDQtdGC0YHRjywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2NsaWNrJyxcclxuICAgICAgICBuYW1lOiAn0JrQu9C40Lot0JrQu9C40LonLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2F0dGVudGlvbi9jbGljay5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQstC90LjQvNCw0L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdhZGRpdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LvQvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL2FkZGl0aW9uLnBuZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbG9naWMvYmcvbG9naWMuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LvQvtCz0LjQutC4JyxcclxuICAgICAgICBydWxlczogJzxwPtCd0LXQvtCx0YXQvtC00LjQvNC+INCyINGD0LzQtSDRgdC70L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdzdWJ0cmFjdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9CS0YvRh9C40YLQsNC90LjQtScsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbG9naWMvc3VidHJhY3Rpb24ucG5nJyxcclxuICAgICAgICBiZzogJ2ltZy9sb2dpYy9iZy9sb2dpYy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0J3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YPQvNC1INCy0YvRh9C10YHRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ211bHRpcGxpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAn0KPQvNC90L7QttC10L3QuNC1JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9sb2dpYy9tdWx0aXBsaWNhdGlvbi5wbmcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2xvZ2ljLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC70L7Qs9C40LrQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QndC10L7QsdGF0L7QtNC40LzQviDQsiDRg9C80LUg0L/QtdGA0LXQvNC90L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAndW5pa3VtJyxcclxuICAgICAgICBuYW1lOiAn0KPQvdC40LrRg9C8JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy90aGlua2luZy91bmlrdW0uanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7Qs9C+INC80YvRiNC70LXQvdC40Y8nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBnYW1lU3RhdHVzLCBnZXRHYW1lQXVkaW9TdGF0dXMsIGdhbWVMZXZlbCB9IGZyb20gJy4uL2dhbWUnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aW1lcic7XHJcbmltcG9ydCB7IGluaXRIZWxwQnV0dG9ucywgaW5pdE92ZXJsYXksIGNsb3NlVHJhaW5pbmdIYW5kbGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWxwQnV0dG9ucyc7XHJcbmltcG9ydCBpbml0QXVkaW8gZnJvbSAnLi4vY29tcG9uZW50cy9hdWRpbyc7XHJcbmltcG9ydCB7IG1ha2VNYXRyaXgsIHNodWZmbGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVMZXZlbEluZm8gPSB7XHJcbiAgW2dhbWVMZXZlbC5lYXN5LmxldmVsTmFtZV06IHtcclxuICAgIGdhbWVMZXZlbDogZ2FtZUxldmVsLmVhc3ksXHJcbiAgICB0ZXJtc0NvdW50OiA0LFxyXG4gICAgYW5zd2Vyc0NvdW50OiA1LFxyXG4gICAgZGVsYXk6IDMsXHJcbiAgfSxcclxuICBbZ2FtZUxldmVsLm1lZGl1bS5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5tZWRpdW0sXHJcbiAgICB0ZXJtc0NvdW50OiA1LFxyXG4gICAgYW5zd2Vyc0NvdW50OiA3LFxyXG4gICAgZGVsYXk6IDQsXHJcbiAgfSxcclxuICBbZ2FtZUxldmVsLmhhcmQubGV2ZWxOYW1lXToge1xyXG4gICAgZ2FtZUxldmVsOiBnYW1lTGV2ZWwuaGFyZCxcclxuICAgIHRlcm1zQ291bnQ6IDYsXHJcbiAgICBhbnN3ZXJzQ291bnQ6IDksXHJcbiAgICBkZWxheTogNSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYXVkaW9Tb3VuZChhdWRpb05hbWUpIHtcclxuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEtbmFtZT1cIiR7YXVkaW9OYW1lfVwiXWApO1xyXG4gIGlmIChhdWRpbykge1xyXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNYXRyaXgoeyB0ZXJtc0NvdW50LCBhbnN3ZXJzQ291bnQgfSkge1xyXG4gIGNvbnN0IGFuc3dlcnMgPSBBcnJheShhbnN3ZXJzQ291bnQpLmZpbGwoMSk7XHJcbiAgY29uc3QgbWF0cml4QXJyID0gbWFrZU1hdHJpeCh0ZXJtc0NvdW50LCBhbnN3ZXJzKTtcclxuICByZXR1cm4gc2h1ZmZsZU1hdHJpeChtYXRyaXhBcnIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QW5zd2VycyhtYXRyaXgsIHN1Y2Nlc3NIYW5kbGVyLCBmYWlsSGFuZGxlcikge1xyXG4gIGNvbnN0IG1hdHJpeENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1hdHJpeENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbWF0cml4Jyk7XHJcbiAgbWF0cml4Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7bWF0cml4LnNpemV9LCAxZnIpYDtcclxuXHJcbiAgbWF0cml4LnN0b3JlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG1hdHJpeEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1hdHJpeEl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX21hdHJpeF9faXRlbScsICd0cmFpbmluZ19fbWF0cml4X19pdGVtX3doaXRlJyk7XHJcbiAgICBtYXRyaXhJdGVtLmRhdGFzZXQuaWQgPSBpdGVtO1xyXG4gICAgbWF0cml4SXRlbS5vbmNsaWNrID0gaXRlbSA9PT0gMSA/IHN1Y2Nlc3NIYW5kbGVyIDogZmFpbEhhbmRsZXI7XHJcbiAgICBtYXRyaXhDb250YWluZXIuYXBwZW5kQ2hpbGQobWF0cml4SXRlbSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtYXRyaXhDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRNYXRyaXgobWF0cml4KSB7XHJcbiAgY29uc3QgbWF0cml4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWF0cml4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19tYXRyaXgnKTtcclxuICBtYXRyaXhDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHttYXRyaXguc2l6ZX0sIDFmcilgO1xyXG5cclxuICBtYXRyaXguc3RvcmUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbWF0cml4SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWF0cml4SXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbWF0cml4X19pdGVtJyk7XHJcbiAgICBtYXRyaXhJdGVtLmNsYXNzTGlzdC5hZGQoaXRlbSA9PT0gMSA/ICd0cmFpbmluZ19fbWF0cml4X19pdGVtX2dyZWVuJyA6ICd0cmFpbmluZ19fbWF0cml4X19pdGVtX3doaXRlJyk7XHJcbiAgICBtYXRyaXhJdGVtLmRhdGFzZXQuaWQgPSBpdGVtO1xyXG4gICAgbWF0cml4Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hdHJpeEl0ZW0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWF0cml4Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2NvcmUodmFsdWUpIHtcclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX2l0ZW0nKTtcclxuICBzY29yZUl0ZW0udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWF0cml4KGdhbWVPYmopIHtcclxuICBjb25zdCB7IGNvbnRhaW5lciwgbWF0cml4LCBsZXZlbCB9ID0gZ2FtZU9iajtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIC8vIGluaXQgbWF0cml4IHNxdWFyZSBjb250YWluZXJcclxuICBjb25zdCBtYXRyaXhTcXVhcmUgPSBpbml0TWF0cml4KG1hdHJpeCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hdHJpeFNxdWFyZSk7XHJcblxyXG4gIGRpc3BsYXlTY29yZShnYW1lT2JqLnNjb3JlKTtcclxuXHJcbiAgY29uc3QgbmV3R2FtZVN0YXRlID0geyAuLi5nYW1lT2JqIH07XHJcbiAgbGV0IGF0dGVtcHRDb3VudCA9IDA7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIG5ld0dhbWVTdGF0ZS5zY29yZSArPSAxO1xyXG4gICAgYXR0ZW1wdENvdW50ICs9IDE7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbWF0cml4X19pdGVtX2dyZWVuJyk7XHJcbiAgICBlLnRhcmdldC5vbmNsaWNrID0gbnVsbDtcclxuXHJcbiAgICBkaXNwbGF5U2NvcmUobmV3R2FtZVN0YXRlLnNjb3JlKTtcclxuXHJcbiAgICBjb25zdCBhdWRpb0FsbG93aW5nID0gZ2V0R2FtZUF1ZGlvU3RhdHVzKCk7XHJcbiAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICBhdWRpb1NvdW5kKCdyaWdodC1hbnN3ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXR0ZW1wdENvdW50ID09PSBsZXZlbC5hbnN3ZXJzQ291bnQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TWF0cml4ID0gZ2VuZXJhdGVNYXRyaXgobGV2ZWwpO1xyXG4gICAgICAgIHJlbmRlck1hdHJpeCh7IC4uLm5ld0dhbWVTdGF0ZSwgbWF0cml4OiBuZXdNYXRyaXggfSk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmFpbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgbmV3R2FtZVN0YXRlLnNjb3JlIC09IDE7XHJcbiAgICBhdHRlbXB0Q291bnQgKz0gMTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19tYXRyaXhfX2l0ZW1fcmVkJyk7XHJcbiAgICBlLnRhcmdldC5vbmNsaWNrID0gbnVsbDtcclxuXHJcbiAgICBkaXNwbGF5U2NvcmUobmV3R2FtZVN0YXRlLnNjb3JlKTtcclxuXHJcbiAgICBjb25zdCBhdWRpb0FsbG93aW5nID0gZ2V0R2FtZUF1ZGlvU3RhdHVzKCk7XHJcbiAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICBhdWRpb1NvdW5kKCd3cm9uZy1hbnN3ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXR0ZW1wdENvdW50ID09PSBsZXZlbC5hbnN3ZXJzQ291bnQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RXhhbXBsZSA9IGdlbmVyYXRlTWF0cml4KGxldmVsKTtcclxuICAgICAgICByZW5kZXJNYXRyaXgoeyAuLi5uZXdHYW1lU3RhdGUsIG1hdHJpeDogbmV3RXhhbXBsZSB9KTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhbnN3ZXJzID0gaW5pdEFuc3dlcnMobWF0cml4LCBzdWNjZXNzSGFuZGxlciwgZmFpbEhhbmRsZXIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFuc3dlcnMpO1xyXG4gIH0sIGxldmVsLmRlbGF5ICogMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckluZm8oZ2FtZVN0YXRlKSB7XHJcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2luZm8nKTtcclxuICBnYW1lU3RhdGUuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsZXZlbCBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IGxldmVsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldmVsSXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbGV2ZWwnKTtcclxuICBsZXZlbEl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuPtCj0YDQvtCy0LXQvdGMOjwvc3Bhbj4gJHtnYW1lU3RhdGUubGV2ZWwuZ2FtZUxldmVsLm5hbWV9YDtcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsSXRlbSk7XHJcblxyXG4gIC8vIGluaXQgdGltZXIgaW5mbyBjb250YWluZXJcclxuICBjb25zdCB0aW1lckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aW1lckl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3RpbWVyJywgJ3RpbWVyJyk7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lckl0ZW0pO1xyXG5cclxuICAvLyBpbml0IHNjb3JlIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2NvcmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19zY29yZScpO1xyXG4gIHNjb3JlSXRlbS5pbm5lckhUTUwgPSAnPHNwYW4+0J7Rh9C60Lg6PC9zcGFuPiA8c3BhbiBjbGFzcz1cInNjb3JlX19pdGVtXCI+MDwvc3Bhbj4nO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVJdGVtKTtcclxuXHJcbiAgcmV0dXJuIHsgdGltZXJDb250YWluZXI6IHRpbWVySXRlbSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wR2FtZShnYW1lU3RhdGUpIHtcclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX2l0ZW0nKTtcclxuICBjb25zdCBzY29yZSA9IHNjb3JlSXRlbS50ZXh0Q29udGVudDtcclxuICBjb25zdCB7IGdhbWVDb250YWluZXIgfSA9IGdhbWVTdGF0ZTtcclxuXHJcbiAgLy8gaW5pdCBmaW5pc2ggdHJhaW5pbmcgY29udGFpbmVyXHJcbiAgY29uc3QgZmluaXNoVHJhaW5pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fZmluaXNoJyk7XHJcblxyXG4gIC8vIGluaXQgZmluaXNoIHNjb3JlIGNvbnRhaW5lclxyXG4gIGNvbnN0IGZpbmlzaFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmluaXNoU2NvcmUuY2xhc3NMaXN0LmFkZCgnZmluaXNoX19zY29yZScpO1xyXG4gIGZpbmlzaFNjb3JlLmlubmVySFRNTCA9IGA8cD7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCOjwvcD48ZGl2PiR7c2NvcmV9PC9kaXY+YDtcclxuICBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5pc2hTY29yZSk7XHJcblxyXG4gIC8vIGluaXQgZmluaXNoIHRyYWluaW5nIGJ1dHRvblxyXG4gIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9uJywgJ2J0bicpO1xyXG4gIGZpbmlzaEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPtCS0YvQudGC0LgnO1xyXG4gIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVHJhaW5pbmdIYW5kbGVyKTtcclxuICBmaW5pc2hUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xyXG5cclxuICBnYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5pc2hUcmFpbmluZ0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckdhbWUoZ2FtZVN0YXRlKSB7XHJcbiAgY29uc3QgeyBzdGF0dXMsIGdhbWVDb250YWluZXIsIHRyYWluaW5nSW5mbyB9ID0gZ2FtZVN0YXRlO1xyXG4gIGlmIChzdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgIGdhbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCByZXN1bHQgPSByZW5kZXJJbmZvKGdhbWVTdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgbWF0cml4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYXRyaXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2dhbWUnKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobWF0cml4Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gaW5pdEhlbHBCdXR0b25zKCk7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlDb250YWluZXIgPSBpbml0T3ZlcmxheSh0cmFpbmluZ0luZm8ucnVsZXMpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5Q29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBpbml0IGF1ZGlvXHJcbiAgICBjb25zdCBhdWRpbyA9IGluaXRBdWRpbygpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhdWRpbyk7XHJcblxyXG4gICAgc3RhcnRUaW1lcihnYW1lU3RhdGUuZHVyYXRpb24sIHJlc3VsdC50aW1lckNvbnRhaW5lciwgKCkgPT4geyBzdG9wR2FtZShnYW1lU3RhdGUpOyB9KTtcclxuICAgIHJlbmRlck1hdHJpeCh7IC4uLmdhbWVTdGF0ZSwgY29udGFpbmVyOiBtYXRyaXhDb250YWluZXIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUobGV2ZWwsIGdhbWVDb250YWluZXIsIHRyYWluaW5nSW5mbywgZHVyYXRpb24gPSA2MCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzY29yZTogMCxcclxuICAgIGxldmVsLFxyXG4gICAgc3RhdHVzOiBnYW1lU3RhdHVzLmluaXQsXHJcbiAgICBnYW1lQ29udGFpbmVyLFxyXG4gICAgbWF0cml4OiB7fSxcclxuICAgIGR1cmF0aW9uLFxyXG4gICAgdHJhaW5pbmdJbmZvLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoZ2FtZU9iaikge1xyXG4gIGNvbnN0IG1hdHJpeCA9IGdlbmVyYXRlTWF0cml4KGdhbWVPYmoubGV2ZWwpO1xyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiwgc3RhdHVzOiBnYW1lU3RhdHVzLnN0YXJ0LCBtYXRyaXggfTtcclxuICByZW5kZXJHYW1lKG5ld0dhbWVTdGF0ZSk7XHJcblxyXG4gIHJldHVybiBuZXdHYW1lU3RhdGU7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYXRyaXgoc2l6ZSwgaW5pdFZhbHVlID0gW10pIHtcclxuICBjb25zdCBuZXdBcnIgPSBBcnJheShzaXplICoqIDIgLSBpbml0VmFsdWUubGVuZ3RoKS5maWxsKDApO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdG9yZTogaW5pdFZhbHVlLmNvbmNhdChuZXdBcnIpLFxyXG4gICAgc2l6ZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbChtYXRyaXgsIHgsIHkpIHtcclxuICBjb25zdCB7IHN0b3JlLCBzaXplIH0gPSBtYXRyaXg7XHJcbiAgcmV0dXJuIHN0b3JlW3ggKyB5ICogc2l6ZV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDZWxsKG1hdHJpeCwgdmFsdWUsIHgsIHkpIHtcclxuICBjb25zdCB7IHN0b3JlLCBzaXplIH0gPSBtYXRyaXg7XHJcbiAgc3RvcmVbeCArIHkgKiBzaXplXSA9IHZhbHVlO1xyXG4gIHJldHVybiB7IHN0b3JlLCBzaXplIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlTWF0cml4KG1hdHJpeCkge1xyXG4gIGNvbnN0IHsgc3RvcmUsIHNpemUgfSA9IG1hdHJpeDtcclxuICBzdG9yZS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gIHJldHVybiB7IHN0b3JlLCBzaXplIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==