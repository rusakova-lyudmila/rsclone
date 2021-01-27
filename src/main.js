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
    duration: 6
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
/* harmony import */ var _trainings_subtraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings/subtraction */ "./src/assets/js/trainings/subtraction.js");
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
    (0,_trainings_subtraction__WEBPACK_IMPORTED_MODULE_2__.startGame)(_objectSpread(_objectSpread({}, game), {}, {
      level: _trainings_subtraction__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel[selectedGameLevel].levelName],
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

  var game = (0,_trainings_subtraction__WEBPACK_IMPORTED_MODULE_2__.initGame)(_trainings_subtraction__WEBPACK_IMPORTED_MODULE_2__.gameLevelInfo[_game__WEBPACK_IMPORTED_MODULE_1__.gameLevel.easy.levelName], trainingCard, trainingInfo); // start training

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
    key: 'addition',
    name: 'Сложение',
    image: 'img/logic/adding.jpg',
    bg: 'img/logic/bg/adding.jpg',
    description: 'Тренажер для развития логики',
    rules: '<p>Необходимо в уме сложить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
  }, {
    key: 'subtraction',
    name: 'Вычитание',
    image: 'img/logic/adding.jpg',
    bg: 'img/logic/bg/adding.jpg',
    description: 'Тренажер для развития логики',
    rules: '<p>Необходимо в уме вычесть все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
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

/***/ "./src/assets/js/trainings/subtraction.js":
/*!************************************************!*\
  !*** ./src/assets/js/trainings/subtraction.js ***!
  \************************************************/
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
var _gameLevelInfo;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var gameLevelInfo = (_gameLevelInfo = {}, _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.easy.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.easy,
  termsCount: 2,
  maxTerm: 20,
  answersCount: 3
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium,
  termsCount: 3,
  maxTerm: 40,
  answersCount: 4
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard,
  termsCount: 4,
  maxTerm: 60,
  answersCount: 5
}), _gameLevelInfo);

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
    var nextAnswer = Math.abs(correctAnswer + Math.round((Math.random() - 0.5) * maxTerm * 0.5));

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
  var sub = terms.reduce(function (diff, term) {
    return diff - term;
  });
  var correctAnswer = Math.abs(sub);
  terms[0] += correctAnswer * 2;
  var answers = getAnswers(correctAnswer, maxTerm, answersCount);
  return {
    question: terms.join(' - '),
    correctAnswer: correctAnswer,
    answers: answers
  };
}

function initQuestion(question) {
  var questionContainer = document.createElement('div');
  questionContainer.classList.add('training__question');
  questionContainer.textContent = question;
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
  var container = gameObj.container,
      level = gameObj.level,
      example = gameObj.example;
  container.innerHTML = ''; // init question(example to sum) container

  var question = initQuestion(example.question);
  container.appendChild(question);
  var scoreItem = document.querySelector('.score__item');
  scoreItem.textContent = gameObj.score; // init answer buttons container

  var newGameState = _objectSpread({}, gameObj);

  var successHandler = function successHandler() {
    newGameState.score += 1;

    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(level);
      renderExample(_objectSpread(_objectSpread({}, newGameState), {}, {
        example: newExample
      }));
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('right-answer');
      }
    }
  };

  var failHandler = function failHandler() {
    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateExample(gameObj.level);
      renderExample(_objectSpread(_objectSpread({}, newGameState), {}, {
        example: newExample
      }));
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('wrong-answer');
      }
    }
  };

  var answers = initAnswers(example, successHandler, failHandler);
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
    example: {},
    duration: duration,
    trainingInfo: trainingInfo
  };
}
function startGame(gameObj) {
  var example = generateExample(gameObj.level);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVscEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aW1lci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9zdWJ0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiaW5pdEF1ZGlvIiwiYXVkaW9Db250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyaWdodEFuc3dlckF1ZGlvIiwic2V0QXR0cmlidXRlIiwiZGF0YXNldCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsIndyb25nQW5zd2VyQXVkaW8iLCJ0aW1lb3V0QXVkaW8iLCJjbG9zZVRyYWluaW5nSGFuZGxlciIsInBhZ2VDb250ZW50IiwiaW5pdFNlY3Rpb24iLCJtYWluQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic291bmRUcmFpbmluZ0hhbmRsZXIiLCJlIiwiYXVkaW9BbGxvd2luZyIsImdldEdhbWVBdWRpb1N0YXR1cyIsImJ1dHRvblNvdW5kIiwidGFyZ2V0Iiwic2V0R2FtZUF1ZGlvU3RhdHVzIiwiY2xvc2VPdmVybGF5SGFuZGxlciIsIm92ZXJsYXlDb250YWluZXIiLCJpbml0SGVscEJ1dHRvbnMiLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uRXhpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXR0b25JbmZvIiwib3ZlcmxheSIsInJlbW92ZSIsImluaXRPdmVybGF5IiwiY29udGVudCIsIm92ZXJsYXlDb250ZW50IiwiaW5uZXJIVE1MIiwiYnV0dG9uT3ZlcmxheSIsInN0YXR1cyIsInN0YXJ0IiwicGF1c2UiLCJ0aW1lb3V0IiwiZ2V0TGVmdFRpbWUiLCJ0aW1lIiwiYmVnaW5UaW1lIiwiZGlmZiIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyZW5kZXJUaW1lciIsInRpbWVyU3RhdGUiLCJjb250YWluZXIiLCJ0aW1lckl0ZW0iLCJ0aW1lciIsIm5leHRUaWNrIiwidGltZXJTdGF0dXMiLCJlbmRIYW5kbGVyIiwiaXNFbmQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic3RhcnRUaW1lciIsIm5ld1N0YXRlIiwicGF1c2VUaW1lciIsImdhbWVMZXZlbCIsImVhc3kiLCJsZXZlbE5hbWUiLCJkdXJhdGlvbiIsIm1lZGl1bSIsImhhcmQiLCJnYW1lU3RhdHVzIiwiaW5pdCIsInN0b3AiLCJnYW1lQXVkaW8iLCJhdWRpbyIsImF1ZGlvU3RhdHVzIiwiaW5pdEhlYWRlciIsImluaXRNYWluUGFnZSIsImluaXRGb290ZXIiLCJ0b2dnbGVNZW51IiwiYWN0aXZlTWVudUl0ZW0iLCJwYWdlRm9vdGVyIiwiYm9keSIsInBhZ2VJbmZvQ29udGFpbmVyIiwicGFnZUxvZ29Db250YWluZXIiLCJwYWdlSGVhZGVyIiwibmF2TWVudSIsImluaXRNZW51IiwibmF2TW9iaWxlTWVudSIsImNvbnRhaW5zIiwicGFnZUNvbnRhaW5lciIsInBhZ2VIZWFkaW5nIiwicGFnZVN1YkhlYWRpbmciLCJidXR0b25Mb2dpbiIsInJlZ2lzdGVyTG9naW4iLCJtZW51SXRlbXMiLCJtYWluIiwidHJhaW5pbmciLCJzdGF0aXN0aWMiLCJjbGlja0hhbmRsZXIiLCJzZWN0aW9uTmFtZSIsInNlY3Rpb24iLCJzZXRBY3RpdmVQYWdlTmFtZSIsIm1vYmlsZSIsIm1lbnVUb2dnbGUiLCJtZW51SWNvbiIsImFjdGl2ZVBhZ2VOYW1lIiwiZ2V0QWN0aXZlUGFnZU5hbWUiLCJtZW51TGlzdCIsIm1lbnVDb250YWluZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJtZW51SXRlbSIsIm1lbnVJdGVtSWNvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibWVudUl0ZW1MaW5rIiwiY2FyZHNFbGVtZW50cyIsImluaXRTdWJTZWN0aW9uIiwiY2FyZHNDb250YWluZXIiLCJyZXBsYWNlV2l0aCIsInRyYWluaW5nVHlwZXMiLCJ0eXBlS2V5IiwidHlwZU5hbWUiLCJjYXJkSXRlbSIsImNhcmRJbWFnZSIsImNhcmROYW1lIiwic3ViU2VjdGlvbktleSIsInRyYWluaW5nS2V5IiwiY3VycmVudFRhcmdldCIsImluaXRUcmFpbmluZyIsImdldFNlY3Rpb25EYXRhQnlOYW1lIiwic3ViU2VjdGlvbk5hbWUiLCJzdWJTZWN0aW9uIiwidmFsdWVzIiwidHJhaW5pbmdzSXRlbXMiLCJmaW5kIiwidHJhaW5pbmdzIiwicm90YXRlQ2FyZCIsInRhcmdldENhcmROYW1lIiwiY2FyZCIsInRhcmdldENhcmRCbG9jayIsInRvZ2dsZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlcGxhY2VDb250ZW50IiwiY3VycmVudEJsb2NrIiwibmV3QmxvY2siLCJwYXJlbnRCbG9jayIsInByZXBlbmQiLCJpbml0U3ViU2VjdGlvbkhlYWRpbmciLCJzZWN0aW9uSGVhZGluZyIsImluaXRUcmFpbkNhcmRzIiwiY2FyZEJsb2NrIiwia2V5IiwiY2FyZExpbmsiLCJpbWFnZSIsImNhcmRDb250ZW50IiwiY2FyZFJvdGF0ZUJ1dHRvbiIsImNhcmRCYWNrSXRlbSIsImNhcmRCYWNrRGVzY3IiLCJkZXNjcmlwdGlvbiIsImNhcmRCYWNrQ29udGVudCIsImNhcmRCYWNrTmFtZSIsInNlY3Rpb25IZWFkZXIiLCJzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciIsInRyYWluaW5nSW5mbyIsImluaXRTdGFydFRyYWluaW5nIiwiZ2FtZSIsInN0YXJ0VHJhaW5pbmdDb250YWluZXIiLCJsZXZlbFNlbGVjdENvbnRhaW5lciIsImxldmVsU2VsZWN0TGFiZWwiLCJsZXZlbFNlbGVjdCIsIm1hcCIsIm9wdGlvbiIsInN0YXJ0QnV0dG9uIiwic2VsZWN0ZWRHYW1lTGV2ZWwiLCJ2YWx1ZSIsInN0YXJ0R2FtZSIsImxldmVsIiwiZ2FtZUxldmVsSW5mbyIsInN1YlNlY3Rpb25UcmFpbmluZyIsInRyYWluaW5nQ29udGFpbmVyIiwidHJhaW5pbmdDYXJkIiwiYmciLCJpbml0R2FtZSIsInN0YXJ0VHJhaW5pbmciLCJzdGF0ZSIsInNldEFjdGl2ZU1lbnVJdGVtIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVCYWNrZ3JvdW5kIiwib3ZlcmxheVBhZ2UiLCJ0ZXh0TWVudUljb24iLCJtZW51SXRlbUljb25zIiwiaW5jbHVkZXMiLCJsaW5rIiwicnVsZXMiLCJ0ZXJtc0NvdW50IiwibWF4VGVybSIsImFuc3dlcnNDb3VudCIsImF1ZGlvU291bmQiLCJhdWRpb05hbWUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJtaXhBbnN3ZXJzIiwiYXJyIiwic29ydCIsInJhbmRvbSIsImdldEFuc3dlcnMiLCJjb3JyZWN0QW5zd2VyIiwiYW5zd2VycyIsImxlbmd0aCIsIm5leHRBbnN3ZXIiLCJhYnMiLCJyb3VuZCIsInB1c2giLCJnZW5lcmF0ZUV4YW1wbGUiLCJ0ZXJtcyIsIkFycmF5IiwiZmlsbCIsInN1YiIsInJlZHVjZSIsInRlcm0iLCJxdWVzdGlvbiIsImpvaW4iLCJpbml0UXVlc3Rpb24iLCJxdWVzdGlvbkNvbnRhaW5lciIsImluaXRBbnN3ZXJzIiwiZXhhbXBsZSIsInN1Y2Nlc3NIYW5kbGVyIiwiZmFpbEhhbmRsZXIiLCJhbnN3ZXJzQ29udGFpbmVyIiwiYW5zd2VyIiwiYnV0dG9uIiwicmVuZGVyRXhhbXBsZSIsImdhbWVPYmoiLCJzY29yZUl0ZW0iLCJzY29yZSIsIm5ld0dhbWVTdGF0ZSIsIm5ld0V4YW1wbGUiLCJyZW5kZXJJbmZvIiwiZ2FtZVN0YXRlIiwiaW5mb0NvbnRhaW5lciIsImdhbWVDb250YWluZXIiLCJsZXZlbEl0ZW0iLCJ0aW1lckNvbnRhaW5lciIsInN0b3BHYW1lIiwiZmluaXNoVHJhaW5pbmdDb250YWluZXIiLCJmaW5pc2hTY29yZSIsImZpbmlzaEJ1dHRvbiIsInJlbmRlckdhbWUiLCJyZXN1bHQiLCJleGFtcGxlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXVkaW8oKSB7XHJcbiAgY29uc3QgYXVkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhdWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYXVkaW8nKTtcclxuXHJcbiAgLy8gaW5pdCByaWdodCBhbnN3ZXIgY2xpY2sgYXVkaW9cclxuICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICByaWdodEFuc3dlckF1ZGlvLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvX19pdGVtJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby9hbnN3ZXJfcmlnaHQubXAzJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5kYXRhc2V0Lm5hbWUgPSAncmlnaHQtYW5zd2VyJztcclxuICBhdWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEFuc3dlckF1ZGlvKTtcclxuXHJcbiAgLy8gaW5pdCB3cm9uZyBjbGljayBhdWRpb1xyXG4gIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHdyb25nQW5zd2VyQXVkaW8uY2xhc3NMaXN0LmFkZCgnYXVkaW9fX2l0ZW0nKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2F1ZGlvL2Fuc3dlcl93cm9uZy5tcDMnKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLmRhdGFzZXQubmFtZSA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyb25nQW5zd2VyQXVkaW8pO1xyXG5cclxuICAvLyBpbml0IHRpbWVvdXQgYXVkaW9cclxuICBjb25zdCB0aW1lb3V0QXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHRpbWVvdXRBdWRpby5jbGFzc0xpc3QuYWRkKCdhdWRpb19faXRlbScpO1xyXG4gIHRpbWVvdXRBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby90aW1lb3V0Lm1wMycpO1xyXG4gIHRpbWVvdXRBdWRpby5kYXRhc2V0Lm5hbWUgPSAndGltZW91dCc7XHJcbiAgYXVkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZW91dEF1ZGlvKTtcclxuXHJcbiAgcmV0dXJuIGF1ZGlvQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuLi9pbml0U2VjdGlvbic7XHJcbmltcG9ydCB7IGdldEdhbWVBdWRpb1N0YXR1cywgc2V0R2FtZUF1ZGlvU3RhdHVzIH0gZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VUcmFpbmluZ0hhbmRsZXIoKSB7XHJcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbigndHJhaW5pbmdzJyk7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc291bmRUcmFpbmluZ0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgc2V0R2FtZUF1ZGlvU3RhdHVzKGZhbHNlKTtcclxuICAgIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV9vZmYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRHYW1lQXVkaW9TdGF0dXModHJ1ZSk7XHJcbiAgICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfdXAnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5SGFuZGxlcigpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWxwQnV0dG9ucygpIHtcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9ucycpO1xyXG5cclxuICAvLyBpbml0IGV4aXQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25FeGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uRXhpdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutC+0L3Rh9C40YLRjCDRgtGA0LXQvdC40YDQvtCy0LrRgycpO1xyXG4gIGJ1dHRvbkV4aXQudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xyXG4gIGJ1dHRvbkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRyYWluaW5nSGFuZGxlcik7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25FeGl0KTtcclxuXHJcbiAgLy8gaW5pdCBzb3VuZCBidXR0b25cclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25Tb3VuZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvblNvdW5kLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JLQutC70Y7Rh9C40YLRjC/QstGL0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcclxuICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfb2ZmJztcclxuICBidXR0b25Tb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvdW5kVHJhaW5pbmdIYW5kbGVyKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblNvdW5kKTtcclxuXHJcbiAgLy8gaW5pdCBpbmZvIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uSW5mby5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbkluZm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICfQn9GA0L7Rh9C40YLQsNGC0Ywg0L/RgNCw0LLQuNC70LAnKTtcclxuICBidXR0b25JbmZvLnRleHRDb250ZW50ID0gJ2hlbHBfb3V0bGluZSc7XHJcbiAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25JbmZvKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3ZlcmxheShjb250ZW50KSB7XHJcbiAgY29uc3Qgb3ZlcmxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX292ZXJsYXknLCAnb3ZlcmxheScsICdoaWRkZW4nKTtcclxuXHJcbiAgLy8gaW5pdCBvdmVybGF5IGNvbnRlbnRcclxuICBjb25zdCBvdmVybGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlfX2NvbnRlbnQnKTtcclxuICBvdmVybGF5Q29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUNvbnRlbnQpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXkgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutGA0YvRgtGMJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS50ZXh0Q29udGVudCA9ICdjbG9zZSc7XHJcbiAgYnV0dG9uT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheUhhbmRsZXIpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT3ZlcmxheSk7XHJcblxyXG4gIHJldHVybiBvdmVybGF5Q29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHN0YXR1cyA9IHtcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBwYXVzZTogJ3BhdXNlJyxcclxufTtcclxubGV0IHRpbWVvdXQ7XHJcblxyXG5mdW5jdGlvbiBnZXRMZWZ0VGltZSh7IHRpbWUsIGJlZ2luVGltZSB9KSB7XHJcbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBiZWdpblRpbWU7XHJcbiAgcmV0dXJuIHRpbWUgLSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGltZXIodGltZXJTdGF0ZSkge1xyXG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aW1lclN0YXRlO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gaW5pdCB0aW1lciBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRpbWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVySXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fdGltZXInLCAndGltZXInKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lclxyXG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXJfX2l0ZW0nKTtcclxuICB0aW1lci50ZXh0Q29udGVudCA9IGdldExlZnRUaW1lKHRpbWVyU3RhdGUpO1xyXG4gIHRpbWVySXRlbS5hcHBlbmRDaGlsZCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRUaWNrKHRpbWVyU3RhdGUpIHtcclxuICBjb25zdCB7IHN0YXR1czogdGltZXJTdGF0dXMsIGVuZEhhbmRsZXIgfSA9IHRpbWVyU3RhdGU7XHJcbiAgY29uc3QgaXNFbmQgPSBnZXRMZWZ0VGltZSh0aW1lclN0YXRlKSA8IDA7XHJcbiAgaWYgKGlzRW5kKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBpZiAoZW5kSGFuZGxlcikge1xyXG4gICAgICBlbmRIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0aW1lclN0YXR1cyA9PT0gc3RhdHVzLnN0YXJ0KSB7XHJcbiAgICByZW5kZXJUaW1lcih0aW1lclN0YXRlKTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgbmV4dFRpY2sodGltZXJTdGF0ZSk7IH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VGltZXIodGltZSwgY29udGFpbmVyLCBlbmRIYW5kbGVyKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICB0aW1lLFxyXG4gICAgY29udGFpbmVyLFxyXG4gICAgYmVnaW5UaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMuc3RhcnQsXHJcbiAgICBlbmRIYW5kbGVyLFxyXG4gIH07XHJcbiAgbmV4dFRpY2sobmV3U3RhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VUaW1lcih0aW1lclN0YXRlKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi50aW1lclN0YXRlLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMucGF1c2UsXHJcbiAgICB0aW1lOiBEYXRlLm5vdygpIC0gdGltZXJTdGF0ZS5iZWdpblRpbWUsXHJcbiAgfTtcclxuICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgcmVuZGVyVGltZXIobmV3U3RhdGUpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lTGV2ZWwgPSB7XHJcbiAgZWFzeToge1xyXG4gICAgbGV2ZWxOYW1lOiAnZWFzeScsXHJcbiAgICBuYW1lOiAn0LvQtdCz0LrQuNC5JyxcclxuICAgIGR1cmF0aW9uOiA2LFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICBsZXZlbE5hbWU6ICdtZWRpdW0nLFxyXG4gICAgbmFtZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGR1cmF0aW9uOiA1MCxcclxuICB9LFxyXG4gIGhhcmQ6IHtcclxuICAgIGxldmVsTmFtZTogJ2hhcmQnLFxyXG4gICAgbmFtZTogJ9GC0Y/QttC10LvRi9C5JyxcclxuICAgIGR1cmF0aW9uOiA0NSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVTdGF0dXMgPSB7XHJcbiAgaW5pdDogJ2luaXQnLFxyXG4gIHN0YXJ0OiAnc3RhcnQnLFxyXG4gIHN0b3A6ICdzdG9wJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVBdWRpbyA9IHtcclxuICBhdWRpbzogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0R2FtZUF1ZGlvU3RhdHVzKGF1ZGlvU3RhdHVzKSB7XHJcbiAgZ2FtZUF1ZGlvLmF1ZGlvID0gYXVkaW9TdGF0dXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lQXVkaW9TdGF0dXMoKSB7XHJcbiAgcmV0dXJuIGdhbWVBdWRpby5hdWRpbztcclxufVxyXG4iLCJpbXBvcnQgaW5pdEhlYWRlciBmcm9tICcuL2luaXRIZWFkZXInO1xyXG5pbXBvcnQgaW5pdE1haW5QYWdlIGZyb20gJy4vaW5pdE1haW5QYWdlJztcclxuaW1wb3J0IGluaXRGb290ZXIgZnJvbSAnLi9pbml0Rm9vdGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTWVudSwgYWN0aXZlTWVudUl0ZW0gfSBmcm9tICcuL3RvZ2dsZU1lbnUnO1xyXG5cclxuLy8gaW5pdCBoZWFkZXJcclxuaW5pdEhlYWRlcigpO1xyXG5cclxuLy8gaW5pdCBtYWluIHBhZ2VcclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5tYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5pdE1haW5QYWdlKCkpO1xyXG5cclxuLy8gaW5pdCBoZWFkZXJcclxuaW5pdEZvb3RlcigpO1xyXG5cclxuLy8gb3BlbiBhbmQgY2xvc2UgbW9iaWxlIG1lbnVcclxudG9nZ2xlTWVudSgpO1xyXG5cclxuLy8gYWN0aXZlIGRlc2t0b3AgbWVudSBpdGVtXHJcbmFjdGl2ZU1lbnVJdGVtKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRGb290ZXIoKSB7XHJcbiAgLy8gaW5pdCBmb290ZXJcclxuICBjb25zdCBwYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgcGFnZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJywgJ2Zvb3RlcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUZvb3Rlcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGF1dGhvciBpbmZvXHJcbiAgY29uc3QgcGFnZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2luZm8nKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnMjAyMCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3J1c2Frb3ZhLWx5dWRtaWxhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UnVzYWtvdmEgTHl1ZG1pbGE8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NuYWlwcDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ZdXJ5IEhhbHVzaGtvPC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlSW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGxvZ29cclxuICBjb25zdCBwYWdlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fbG9nbycpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL3JzX3NjaG9vbF9sb2dvLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiPjwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUxvZ29Db250YWluZXIpO1xyXG59XHJcbiIsImltcG9ydCBpbml0TWVudSBmcm9tICcuL2luaXRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgLy8gaW5pdCBoZWFkZXJcclxuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcclxuXHJcbiAgLy8gaW5zZXJ0IG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1lbnUgPSBpbml0TWVudSgpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7XHJcblxyXG4gIC8vIGluc2VydCBtb2JpbGUgbmF2IG1lbnUgdG8gaGVhZGVyXHJcbiAgY29uc3QgbmF2TW9iaWxlTWVudSA9IGluaXRNZW51KHRydWUpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TW9iaWxlTWVudSk7XHJcblxyXG4gIC8vIGluaXQgbWFpbiBjb250YWluZXJcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNYWluUGFnZSgpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgcGFnZSBjb250YWluZXJcclxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBpbml0IGgxXHJcbiAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ1NtYXJ0IEtpZHMnO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xyXG5cclxuICAvLyBpbml0IGgyXHJcbiAgY29uc3QgcGFnZVN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHBhZ2VTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LDQttC10YDRiyDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQv9Cw0LzRj9GC0LgsINCy0L3QuNC80LDQvdC40Y8sINC70L7Qs9C40LrQuCDQuCDQvNGL0YjQu9C10L3QuNGPJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VTdWJIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsb2dpbiBidXR0b25cclxuICBjb25zdCBidXR0b25Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnLCAnYnRuLWxvZ2luJyk7XHJcbiAgYnV0dG9uTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkxvZ2luKTtcclxuXHJcbiAgLy8gaW5pdCByZWdpc3RlciBidXR0b25cclxuICBjb25zdCByZWdpc3RlckxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1yZWdpc3RlcicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4udGV4dENvbnRlbnQgPSAn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZ2lzdGVyTG9naW4pO1xyXG5cclxuICByZXR1cm4gcGFnZUNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1haW5QYWdlIGZyb20gJy4vaW5pdE1haW5QYWdlJztcclxuaW1wb3J0IGluaXRTZWN0aW9uIGZyb20gJy4vaW5pdFNlY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVQYWdlTmFtZSwgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuLy8gaW1wb3J0IGluaXRTdGF0aXN0aWNQYWdlIGZyb20gJy4vc3RhdGlzdGljUGFnZSc7XHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgbWFpbjogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICB0cmFpbmluZzogJ9Ci0YDQtdC90LDQttC10YDRiycsXHJcbiAgc3RhdGlzdGljOiAn0KHRgtCw0YLQuNGB0YLQuNC60LAnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBsZXQgcGFnZUNvbnRlbnQ7XHJcblxyXG4gIGlmIChzZWN0aW9uTmFtZSA9PT0gJ21haW4nKSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRNYWluUGFnZSgpO1xyXG4gIH0gZWxzZSBpZiAoc2VjdGlvbk5hbWUgPT09ICdzdGF0aXN0aWMnKSB7XHJcbiAgICAvLyBwYWdlQ29udGVudCA9IGluaXRTdGF0aXN0aWNQYWdlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2VDb250ZW50ID0gaW5pdFNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxuXHJcbiAgc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWVudShtb2JpbGUgPSBmYWxzZSkge1xyXG4gIC8vIGluaXQgbmF2IG1lbnVcclxuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJywgJ25hdmJhci1leHBhbmQtbGcnKTtcclxuICB9XHJcblxyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIC8vIGluaXQgbWVudSB0b2dnbGVcclxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LmFkZCgnbWVudV9fdG9nZ2xlJyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVUb2dnbGUpO1xyXG5cclxuICAgIC8vIGluaXQgbWVudSBpY29uXHJcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2ljb24nLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIG1lbnVJY29uLnRleHRDb250ZW50ID0gJ21lbnUnO1xyXG4gICAgbWVudVRvZ2dsZS5hcHBlbmRDaGlsZChtZW51SWNvbik7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IG1lbnUgbGlzdFxyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpbml0IG1lbnUgY29udGFpbmVyXHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJywgJ25hdmJhci1jb2xsYXBzZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2JywgJ21yLWF1dG8nKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWVudUl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtXHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtJyk7XHJcbiAgICBpZiAoIW1vYmlsZSkge1xyXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtID09PSBhY3RpdmVQYWdlTmFtZSkge1xyXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbWVudUl0ZW0uZGF0YXNldC5uYW1lID0gaXRlbTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuXHJcbiAgICBpZiAobW9iaWxlKSB7XHJcbiAgICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW0gaWNvblxyXG4gICAgICBjb25zdCBtZW51SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIG1lbnVJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKCdsaW5rX19pY29uJyk7XHJcbiAgICAgIG1lbnVJdGVtSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvaW1nL2ljb25zL2ljb24tJHtpdGVtfS5wbmdcIilgO1xyXG4gICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXQgbWVudSBsaXN0IGl0ZW0gbGlua1xyXG4gICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWVudUl0ZW1MaW5rLmNsYXNzTGlzdC5hZGQobW9iaWxlID8gJ21lbnVfX2xpbmsnIDogJ25hdi1saW5rJyk7XHJcbiAgICBtZW51SXRlbUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2l0ZW19YCk7XHJcbiAgICBtZW51SXRlbUxpbmsuZGF0YXNldC5zZWN0aW9uID0gaXRlbTtcclxuICAgIG1lbnVJdGVtTGluay50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpdGVtXTtcclxuICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUxpbmspO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmF2TWVudTtcclxufVxyXG4iLCIvLyBpbXBvcnQgeyBzZXRBY3RpdmVQYWdlTmFtZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgaW5pdFN1YlNlY3Rpb24gZnJvbSAnLi9pbml0U3ViU2VjdGlvbic7XHJcbmltcG9ydCB7IHRyYWluaW5nVHlwZXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uO1xyXG4gIGNvbnN0IGNhcmRzRWxlbWVudHMgPSBpbml0U3ViU2VjdGlvbihzZWN0aW9uTmFtZSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLnJlcGxhY2VXaXRoKGNhcmRzRWxlbWVudHMpO1xyXG5cclxuICAvLyBzZXRBY3RpdmVQYWdlTmFtZShzZWN0aW9uTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTZWN0aW9uKCkge1xyXG4gIC8vIHJlbW92ZSBjbGFzcyBvZiBzdWJzZWN0aW9uXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3Vic2VjdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBjYXJkcyBjb250YWluZXJcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicsICdjYXJkcycpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzXHJcbiAgdHJhaW5pbmdUeXBlcy5mb3JFYWNoKCh7IHR5cGVLZXksIHR5cGVOYW1lIH0pID0+IHtcclxuICAgIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScpO1xyXG4gICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEl0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgY2FyZCBpbWFnZVxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1nJyk7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9iZy9iZy0ke3R5cGVLZXl9LmpwZ1wiKWA7XHJcbiAgICBjYXJkSW1hZ2UuZGF0YXNldC5zZWN0aW9uID0gdHlwZUtleTtcclxuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSB0eXBlTmFtZTtcclxuICAgIGNhcmROYW1lLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgaW5pdFRyYWluaW5nIGZyb20gJy4vaW5pdFRyYWluaW5nJztcclxuaW1wb3J0IHsgdHJhaW5pbmdUeXBlcywgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbi8vIGltcG9ydCB7IHNhdmVSZXN1bHQgfSBmcm9tICcuL3N0YXRpc3RpYyc7XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSwgc3ViU2VjdGlvbktleSkge1xyXG4gIGNvbnN0IHRyYWluaW5nS2V5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHJhaW5pbmc7XHJcbiAgY29uc3QgdHJhaW5pbmcgPSBpbml0VHJhaW5pbmcodHJhaW5pbmdLZXksIHN1YlNlY3Rpb25LZXkpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aCh0cmFpbmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25EYXRhQnlOYW1lKHN1YlNlY3Rpb25OYW1lKSB7XHJcbiAgY29uc3Qgc3ViU2VjdGlvbiA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdzSXRlbXMpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbk5hbWUpO1xyXG4gIHJldHVybiBzdWJTZWN0aW9uLnRyYWluaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlQ2FyZChlKSB7XHJcbiAgY29uc3QgdGFyZ2V0Q2FyZE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJkO1xyXG4gIGNvbnN0IHRhcmdldENhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcy0ke3RhcmdldENhcmROYW1lfWApO1xyXG5cclxuICB0YXJnZXRDYXJkQmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2Jsb2NrX2hvdmVyJyk7XHJcblxyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VDb250ZW50KGN1cnJlbnRCbG9jaywgbmV3QmxvY2ssIHBhcmVudEJsb2NrKSB7XHJcbiAgaWYgKGN1cnJlbnRCbG9jaykge1xyXG4gICAgY3VycmVudEJsb2NrLnJlcGxhY2VXaXRoKG5ld0Jsb2NrKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50QmxvY2sucHJlcGVuZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcoc3ViU2VjdGlvbktleSA9ICcnKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcblxyXG4gIGNvbnN0IHN1YlNlY3Rpb25OYW1lID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ1R5cGVzKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IHN1YlNlY3Rpb25OYW1lLnR5cGVOYW1lO1xyXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRyYWluQ2FyZHMoY2FyZHNDb250YWluZXIsIGNhcmRzRWxlbWVudHMsIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjYXJkc0VsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIC8vIGluaXQgYmxvY2sgZm9yIGNhcmRzXHJcbiAgICBjb25zdCBjYXJkQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCbG9jay5jbGFzc0xpc3QuYWRkKCdjYXJkc19fYmxvY2snLCBgY2FyZHMtJHtjYXJkLmtleX1gKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRCbG9jayk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGxpbmtcclxuICAgIGNvbnN0IGNhcmRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY2FyZExpbmsuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbGluaycpO1xyXG4gICAgY2FyZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2NhcmQua2V5fWApO1xyXG4gICAgY2FyZEJsb2NrLmFwcGVuZENoaWxkKGNhcmRMaW5rKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJywgJ2NhcmRzX19mcm9udCcpO1xyXG4gICAgY2FyZEl0ZW0uZGF0YXNldC50cmFpbmluZyA9IGNhcmQua2V5O1xyXG4gICAgY2FyZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjbGlja0hhbmRsZXIoZSwgc3ViU2VjdGlvbktleSk7XHJcbiAgICAgIC8vIHNhdmVSZXN1bHQoY2FyZC53b3JkLCAndHJhaW5lZCcpO1xyXG4gICAgfSk7XHJcbiAgICBjYXJkTGluay5hcHBlbmRDaGlsZChjYXJkSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGltYWdlXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pbWcnKTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvJHtjYXJkLmltYWdlfVwiKWA7XHJcbiAgICBjYXJkSXRlbS5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbmFtZScpO1xyXG4gICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIHJvdGF0ZSBidXR0b25cclxuICAgIGNvbnN0IGNhcmRSb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbicsICdtYXRlcmlhbC1pY29ucycpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAncm90YXRlX2xlZnQnO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFJvdGF0ZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgaXRlbVxyXG4gICAgY29uc3QgY2FyZEJhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nLCAnY2FyZHNfX2JhY2snKTtcclxuICAgIGNhcmRCYWNrSXRlbS5kYXRhc2V0LmNhcmQgPSBjYXJkLmtleTtcclxuICAgIGNhcmRCYWNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcm90YXRlQ2FyZCk7XHJcbiAgICBjYXJkQmxvY2suYXBwZW5kQ2hpbGQoY2FyZEJhY2tJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgY2FyZEJhY2tEZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci5jbGFzc0xpc3QuYWRkKCdjYXJkX19kZXNjcicpO1xyXG4gICAgY2FyZEJhY2tEZXNjci50ZXh0Q29udGVudCA9IGNhcmQuZGVzY3JpcHRpb247XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tEZXNjcik7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGNvbnRlbnRcclxuICAgIGNvbnN0IGNhcmRCYWNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKTtcclxuICAgIGNhcmRCYWNrSXRlbS5hcHBlbmRDaGlsZChjYXJkQmFja0NvbnRlbnQpO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIG5hbWVcclxuICAgIGNvbnN0IGNhcmRCYWNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmRCYWNrTmFtZS50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcclxuICAgIGNhcmRCYWNrQ29udGVudC5hcHBlbmRDaGlsZChjYXJkQmFja05hbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U3ViU2VjdGlvbihzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcoc3ViU2VjdGlvbk5hbWUpO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2hlYWRpbmcnKTtcclxuICByZXBsYWNlQ29udGVudChzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciwgc2VjdGlvbkhlYWRlciwgbWFpbkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gZ2V0IGluZm8gZm9yIGNhcmRzXHJcbiAgY29uc3QgY2FyZHNFbGVtZW50cyA9IGdldFNlY3Rpb25EYXRhQnlOYW1lKHN1YlNlY3Rpb25OYW1lKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzLCBzdWJTZWN0aW9uTmFtZSk7XHJcblxyXG4gIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyB0cmFpbmluZ3NJdGVtcyB9IGZyb20gJy4vdHJhaW5pbmdzJztcclxuaW1wb3J0IHsgZ2FtZUxldmVsIH0gZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgaW5pdEdhbWUsIHN0YXJ0R2FtZSwgZ2FtZUxldmVsSW5mbyB9IGZyb20gJy4vdHJhaW5pbmdzL3N1YnRyYWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VDb250ZW50KGN1cnJlbnRCbG9jaywgbmV3QmxvY2ssIHBhcmVudEJsb2NrKSB7XHJcbiAgaWYgKGN1cnJlbnRCbG9jaykge1xyXG4gICAgY3VycmVudEJsb2NrLnJlcGxhY2VXaXRoKG5ld0Jsb2NrKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50QmxvY2suYXBwZW5kQ2hpbGQobmV3QmxvY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHRyYWluaW5nSW5mbykge1xyXG4gIC8vIGluaXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9faGVhZGluZycpO1xyXG4gIHNlY3Rpb25IZWFkaW5nLnRleHRDb250ZW50ID0gdHJhaW5pbmdJbmZvLm5hbWU7XHJcbiAgcmV0dXJuIHNlY3Rpb25IZWFkaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhcnRUcmFpbmluZyh0cmFpbmluZ0luZm8sIGdhbWUpIHtcclxuICAvLyBpbml0IHN0YXJ0IHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IHN0YXJ0VHJhaW5pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzdGFydFRyYWluaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19zdGFydCcpO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuaW5uZXJIVE1MID0gYDxwPiR7dHJhaW5pbmdJbmZvLmRlc2NyaXB0aW9ufTwvcD5gO1xyXG5cclxuICAvLyBpbml0IGxldmVsIGdhbWUgc2VsZWN0IGNvbnRhaW5lclxyXG4gIGNvbnN0IGxldmVsU2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGV2ZWxTZWxlY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3NlbGVjdCcpO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3RDb250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGxldmVsIGdhbWUgc2VsZWN0IGxhYmVsXHJcbiAgY29uc3QgbGV2ZWxTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldmVsU2VsZWN0TGFiZWwudGV4dENvbnRlbnQgPSAn0JLRi9Cx0LXRgNC40YLQtSDRg9GA0L7QstC10L3RjDonO1xyXG4gIGxldmVsU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsU2VsZWN0TGFiZWwpO1xyXG5cclxuICAvLyBpbml0IGxldmVsIGdhbWUgc2VsZWN0XHJcbiAgY29uc3QgbGV2ZWxTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBsZXZlbFNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbFNlbGVjdCk7XHJcblxyXG4gIC8vIGluaXQgc2VsZWN0IG9wdGlvbnNcclxuICBPYmplY3Qua2V5cyhnYW1lTGV2ZWwpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW0pO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZ2FtZUxldmVsW2l0ZW1dLm5hbWU7XHJcbiAgICBsZXZlbFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBvcHRpb247XHJcbiAgfSk7XHJcblxyXG4gIC8vIGluaXQgc3RhcnQgdHJhaW5pbmcgYnV0dG9uXHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9uJywgJ2J0bicpO1xyXG4gIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cGxheV9jaXJjbGVfb3V0bGluZTwvaT7QndCw0YfQsNGC0YwnO1xyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRHYW1lTGV2ZWwgPSBsZXZlbFNlbGVjdC52YWx1ZTtcclxuICAgIHN0YXJ0R2FtZSh7XHJcbiAgICAgIC4uLmdhbWUsXHJcbiAgICAgIGxldmVsOiBnYW1lTGV2ZWxJbmZvW2dhbWVMZXZlbFtzZWxlY3RlZEdhbWVMZXZlbF0ubGV2ZWxOYW1lXSxcclxuICAgICAgZHVyYXRpb246IGdhbWVMZXZlbFtzZWxlY3RlZEdhbWVMZXZlbF0uZHVyYXRpb24sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICBzdGFydFRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHN0YXJ0VHJhaW5pbmdDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRUcmFpbmluZyh0cmFpbmluZ0tleSwgc3ViU2VjdGlvbktleSkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3Qgc3ViU2VjdGlvblRyYWluaW5nID0gT2JqZWN0LnZhbHVlcyh0cmFpbmluZ3NJdGVtcykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25LZXksXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdHJhaW5pbmdJbmZvID0gT2JqZWN0LnZhbHVlcyhzdWJTZWN0aW9uVHJhaW5pbmcudHJhaW5pbmdzKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSB0cmFpbmluZ0tleSxcclxuICApO1xyXG5cclxuICAvLyBzZXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHRyYWluaW5nSW5mbyk7XHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faGVhZGluZycpO1xyXG4gIHJlcGxhY2VDb250ZW50KHNlY3Rpb25IZWFkaW5nQ29udGFpbmVyLCBzZWN0aW9uSGVhZGVyLCBtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjb250YWluZXJcclxuICBjb25zdCB0cmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nJywgJ2NhcmRzJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFpbmluZ0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgdHJhaW5pbmcgY2FyZFxyXG4gIGNvbnN0IHRyYWluaW5nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRyYWluaW5nQ2FyZC5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fY2FyZCcsICdjYXJkc19faXRlbScsIHRyYWluaW5nSW5mby5rZXkpO1xyXG4gIHRyYWluaW5nQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9hc3NldHMvJHt0cmFpbmluZ0luZm8uYmd9XCIpYDtcclxuICB0cmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFpbmluZ0NhcmQpO1xyXG5cclxuICAvLyBpbml0IGdhbWVcclxuICBjb25zdCBnYW1lID0gaW5pdEdhbWUoZ2FtZUxldmVsSW5mb1tnYW1lTGV2ZWwuZWFzeS5sZXZlbE5hbWVdLCB0cmFpbmluZ0NhcmQsIHRyYWluaW5nSW5mbyk7XHJcblxyXG4gIC8vIHN0YXJ0IHRyYWluaW5nXHJcbiAgY29uc3Qgc3RhcnRUcmFpbmluZyA9IGluaXRTdGFydFRyYWluaW5nKHRyYWluaW5nSW5mbywgZ2FtZSk7XHJcbiAgY29uc3Qgc3RhcnRUcmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbmluZ19fc3RhcnQnKTtcclxuICByZXBsYWNlQ29udGVudChzdGFydFRyYWluaW5nQ29udGFpbmVyLCBzdGFydFRyYWluaW5nLCB0cmFpbmluZ0NhcmQpO1xyXG5cclxuICByZXR1cm4gdHJhaW5pbmdDb250YWluZXI7XHJcbn1cclxuIiwiY29uc3Qgc3RhdGUgPSB7XHJcbiAgYWN0aXZlUGFnZU5hbWU6ICdtYWluJyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVQYWdlTmFtZShuYW1lKSB7XHJcbiAgc3RhdGUuYWN0aXZlUGFnZU5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlUGFnZU5hbWUoKSB7XHJcbiAgcmV0dXJuIHN0YXRlLmFjdGl2ZVBhZ2VOYW1lO1xyXG59XHJcbiIsImltcG9ydCB7IGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVNZW51SXRlbSgpIHtcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyldO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0Lm5hbWUgPT09IGFjdGl2ZVBhZ2VOYW1lKSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdCcpO1xyXG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2ljb24nKTtcclxuXHJcbiAgY29uc3QgbWVudUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51QmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdtZW51X29wZW4nKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3Qgb3ZlcmxheVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdmVybGF5UGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5JywgJ2hpZGRlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheVBhZ2UpO1xyXG5cclxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICBtZW51QmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICBvdmVybGF5UGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0TWVudUljb24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gdGV4dE1lbnVJY29uID09PSAnbWVudScgPyAnY2xvc2UnIDogJ21lbnUnO1xyXG5cclxuICAgIHNldEFjdGl2ZU1lbnVJdGVtKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtSWNvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmtfX2ljb24nKV07XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKG1lbnVJY29uLnRleHRDb250ZW50ID09PSAnY2xvc2UnXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51QmFja2dyb3VuZFxyXG4gICAgICAmJiBlLnRhcmdldCAhPT0gbWVudUljb25cclxuICAgICAgJiYgIW1lbnVJdGVtSWNvbnMuaW5jbHVkZXMoZS50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgbWVudUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV90cmFuc2Zvcm1lZCcpO1xyXG4gICAgICBtZW51QmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgbWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVNZW51SXRlbSgpIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcclxuICBtZW51SXRlbXMuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCB0cmFpbmluZ1R5cGVzID0gW1xyXG4gIHtcclxuICAgIHR5cGVLZXk6ICdtZW1vcnknLFxyXG4gICAgdHlwZU5hbWU6ICfQn9Cw0LzRj9GC0YwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0eXBlTmFtZTogJ9CS0L3QuNC80LDQvdC40LUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2xvZ2ljJyxcclxuICAgIHR5cGVOYW1lOiAn0JvQvtCz0LjQutCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGVLZXk6ICd0aGlua2luZycsXHJcbiAgICB0eXBlTmFtZTogJ9Cc0YvRiNC70LXQvdC40LUnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhaW5pbmdzSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeCcsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdtYXRyaXgxJyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvdC+0Lkg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ21hdHJpeDInLFxyXG4gICAgICAgIG5hbWU6ICfQnNCw0YLRgNC40YbRiyDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL21lbW9yeS9tYXRyaXguanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7QuSDQv9Cw0LzRj9GC0LgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4MycsXHJcbiAgICAgICAgbmFtZTogJ9Cc0LDRgtGA0LjRhtGLINC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbWVtb3J5L21hdHJpeC5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2NsaWNrJyxcclxuICAgICAgICBuYW1lOiAn0JrQu9C40Lot0JrQu9C40LonLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2F0dGVudGlvbi9jbGljay5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQstC90LjQvNCw0L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdhZGRpdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LvQvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL2FkZGluZy5qcGcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2FkZGluZy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0J3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YPQvNC1INGB0LvQvtC20LjRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ3N1YnRyYWN0aW9uJyxcclxuICAgICAgICBuYW1lOiAn0JLRi9GH0LjRgtCw0L3QuNC1JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9sb2dpYy9hZGRpbmcuanBnJyxcclxuICAgICAgICBiZzogJ2ltZy9sb2dpYy9iZy9hZGRpbmcuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LvQvtCz0LjQutC4JyxcclxuICAgICAgICBydWxlczogJzxwPtCd0LXQvtCx0YXQvtC00LjQvNC+INCyINGD0LzQtSDQstGL0YfQtdGB0YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAndW5pa3VtJyxcclxuICAgICAgICBuYW1lOiAn0KPQvdC40LrRg9C8JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy90aGlua2luZy91bmlrdW0uanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7Qs9C+INC80YvRiNC70LXQvdC40Y8nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBnYW1lU3RhdHVzLCBnZXRHYW1lQXVkaW9TdGF0dXMsIGdhbWVMZXZlbCB9IGZyb20gJy4uL2dhbWUnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aW1lcic7XHJcbmltcG9ydCB7IGluaXRIZWxwQnV0dG9ucywgaW5pdE92ZXJsYXksIGNsb3NlVHJhaW5pbmdIYW5kbGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWxwQnV0dG9ucyc7XHJcbmltcG9ydCBpbml0QXVkaW8gZnJvbSAnLi4vY29tcG9uZW50cy9hdWRpbyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUxldmVsSW5mbyA9IHtcclxuICBbZ2FtZUxldmVsLmVhc3kubGV2ZWxOYW1lXToge1xyXG4gICAgZ2FtZUxldmVsOiBnYW1lTGV2ZWwuZWFzeSxcclxuICAgIHRlcm1zQ291bnQ6IDIsXHJcbiAgICBtYXhUZXJtOiAyMCxcclxuICAgIGFuc3dlcnNDb3VudDogMyxcclxuICB9LFxyXG4gIFtnYW1lTGV2ZWwubWVkaXVtLmxldmVsTmFtZV06IHtcclxuICAgIGdhbWVMZXZlbDogZ2FtZUxldmVsLm1lZGl1bSxcclxuICAgIHRlcm1zQ291bnQ6IDMsXHJcbiAgICBtYXhUZXJtOiA0MCxcclxuICAgIGFuc3dlcnNDb3VudDogNCxcclxuICB9LFxyXG4gIFtnYW1lTGV2ZWwuaGFyZC5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5oYXJkLFxyXG4gICAgdGVybXNDb3VudDogNCxcclxuICAgIG1heFRlcm06IDYwLFxyXG4gICAgYW5zd2Vyc0NvdW50OiA1LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhdWRpb1NvdW5kKGF1ZGlvTmFtZSkge1xyXG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1uYW1lPVwiJHthdWRpb05hbWV9XCJdYCk7XHJcbiAgaWYgKGF1ZGlvKSB7XHJcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaXhBbnN3ZXJzKGFycikge1xyXG4gIHJldHVybiBbLi4uYXJyXS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbnN3ZXJzKGNvcnJlY3RBbnN3ZXIsIG1heFRlcm0sIGFuc3dlcnNDb3VudCkge1xyXG4gIGNvbnN0IGFuc3dlcnMgPSBbY29ycmVjdEFuc3dlcl07XHJcbiAgd2hpbGUgKGFuc3dlcnMubGVuZ3RoIDwgYW5zd2Vyc0NvdW50KSB7XHJcbiAgICBjb25zdCBuZXh0QW5zd2VyID0gTWF0aC5hYnMoY29ycmVjdEFuc3dlciArIE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4VGVybSAqIDAuNSkpO1xyXG4gICAgaWYgKCFhbnN3ZXJzLmluY2x1ZGVzKG5leHRBbnN3ZXIpKSB7XHJcbiAgICAgIGFuc3dlcnMucHVzaChuZXh0QW5zd2VyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1peEFuc3dlcnMoYW5zd2Vycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRXhhbXBsZSh7IHRlcm1zQ291bnQsIG1heFRlcm0sIGFuc3dlcnNDb3VudCB9KSB7XHJcbiAgY29uc3QgdGVybXMgPSBBcnJheSh0ZXJtc0NvdW50KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXhUZXJtKSArIDEpO1xyXG4gIGNvbnN0IHN1YiA9IHRlcm1zLnJlZHVjZSgoZGlmZiwgdGVybSkgPT4gZGlmZiAtIHRlcm0pO1xyXG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBNYXRoLmFicyhzdWIpO1xyXG4gIHRlcm1zWzBdICs9IGNvcnJlY3RBbnN3ZXIgKiAyO1xyXG4gIGNvbnN0IGFuc3dlcnMgPSBnZXRBbnN3ZXJzKGNvcnJlY3RBbnN3ZXIsIG1heFRlcm0sIGFuc3dlcnNDb3VudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdGlvbjogdGVybXMuam9pbignIC0gJyksXHJcbiAgICBjb3JyZWN0QW5zd2VyLFxyXG4gICAgYW5zd2VycyxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UXVlc3Rpb24ocXVlc3Rpb24pIHtcclxuICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHF1ZXN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19xdWVzdGlvbicpO1xyXG4gIHF1ZXN0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gcXVlc3Rpb247XHJcbiAgcmV0dXJuIHF1ZXN0aW9uQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QW5zd2VycyhleGFtcGxlLCBzdWNjZXNzSGFuZGxlciwgZmFpbEhhbmRsZXIpIHtcclxuICBjb25zdCBhbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYW5zd2Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYW5zd2VycycpO1xyXG5cclxuICBleGFtcGxlLmFuc3dlcnMuZm9yRWFjaCgoYW5zd2VyKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhbnN3ZXI7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGFtcGxlLmNvcnJlY3RBbnN3ZXIgPT09IGFuc3dlclxyXG4gICAgICA/IHN1Y2Nlc3NIYW5kbGVyXHJcbiAgICAgIDogZmFpbEhhbmRsZXIpO1xyXG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYW5zd2Vyc0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXhhbXBsZShnYW1lT2JqKSB7XHJcbiAgY29uc3QgeyBjb250YWluZXIsIGxldmVsLCBleGFtcGxlIH0gPSBnYW1lT2JqO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gaW5pdCBxdWVzdGlvbihleGFtcGxlIHRvIHN1bSkgY29udGFpbmVyXHJcbiAgY29uc3QgcXVlc3Rpb24gPSBpbml0UXVlc3Rpb24oZXhhbXBsZS5xdWVzdGlvbik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uKTtcclxuXHJcbiAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX19pdGVtJyk7XHJcbiAgc2NvcmVJdGVtLnRleHRDb250ZW50ID0gZ2FtZU9iai5zY29yZTtcclxuXHJcbiAgLy8gaW5pdCBhbnN3ZXIgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBuZXdHYW1lU3RhdGUgPSB7IC4uLmdhbWVPYmogfTtcclxuXHJcbiAgY29uc3Qgc3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBuZXdHYW1lU3RhdGUuc2NvcmUgKz0gMTtcclxuICAgIGlmIChuZXdHYW1lU3RhdGUuc3RhdHVzID09PSBnYW1lU3RhdHVzLnN0YXJ0KSB7XHJcbiAgICAgIGNvbnN0IG5ld0V4YW1wbGUgPSBnZW5lcmF0ZUV4YW1wbGUobGV2ZWwpO1xyXG4gICAgICByZW5kZXJFeGFtcGxlKHsgLi4ubmV3R2FtZVN0YXRlLCBleGFtcGxlOiBuZXdFeGFtcGxlIH0pO1xyXG5cclxuICAgICAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gICAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICAgIGF1ZGlvU291bmQoJ3JpZ2h0LWFuc3dlcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmFpbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3R2FtZVN0YXRlLnN0YXR1cyA9PT0gZ2FtZVN0YXR1cy5zdGFydCkge1xyXG4gICAgICBjb25zdCBuZXdFeGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGdhbWVPYmoubGV2ZWwpO1xyXG4gICAgICByZW5kZXJFeGFtcGxlKHsgLi4ubmV3R2FtZVN0YXRlLCBleGFtcGxlOiBuZXdFeGFtcGxlIH0pO1xyXG5cclxuICAgICAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gICAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICAgIGF1ZGlvU291bmQoJ3dyb25nLWFuc3dlcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VycyA9IGluaXRBbnN3ZXJzKGV4YW1wbGUsIHN1Y2Nlc3NIYW5kbGVyLCBmYWlsSGFuZGxlcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFuc3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJJbmZvKGdhbWVTdGF0ZSkge1xyXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19pbmZvJyk7XHJcbiAgZ2FtZVN0YXRlLmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgaW5mbyBjb250YWluZXJcclxuICBjb25zdCBsZXZlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbEl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2xldmVsJyk7XHJcbiAgbGV2ZWxJdGVtLmlubmVySFRNTCA9IGA8c3Bhbj7Qo9GA0L7QstC10L3RjDo8L3NwYW4+ICR7Z2FtZVN0YXRlLmxldmVsLmdhbWVMZXZlbC5uYW1lfWA7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbEl0ZW0pO1xyXG5cclxuICAvLyBpbml0IHRpbWVyIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3QgdGltZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX190aW1lcicsICd0aW1lcicpO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCBzY29yZSBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHNjb3JlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNjb3JlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc2NvcmUnKTtcclxuICBzY29yZUl0ZW0uaW5uZXJIVE1MID0gJzxzcGFuPtCe0YfQutC4Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzY29yZV9faXRlbVwiPjA8L3NwYW4+JztcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlSXRlbSk7XHJcblxyXG4gIHJldHVybiB7IHRpbWVyQ29udGFpbmVyOiB0aW1lckl0ZW0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcEdhbWUoZ2FtZVN0YXRlKSB7XHJcbiAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX19pdGVtJyk7XHJcbiAgY29uc3Qgc2NvcmUgPSBzY29yZUl0ZW0udGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgeyBnYW1lQ29udGFpbmVyIH0gPSBnYW1lU3RhdGU7XHJcblxyXG4gIC8vIGluaXQgZmluaXNoIHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IGZpbmlzaFRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmluaXNoVHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2ZpbmlzaCcpO1xyXG5cclxuICAvLyBpbml0IGZpbmlzaCBzY29yZSBjb250YWluZXJcclxuICBjb25zdCBmaW5pc2hTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZpbmlzaFNjb3JlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaF9fc2NvcmUnKTtcclxuICBmaW5pc2hTY29yZS5pbm5lckhUTUwgPSBgPHA+0JLQsNGIINGA0LXQt9GD0LvRjNGC0LDRgjo8L3A+PGRpdj4ke3Njb3JlfTwvZGl2PmA7XHJcbiAgZmluaXNoVHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluaXNoU2NvcmUpO1xyXG5cclxuICAvLyBpbml0IGZpbmlzaCB0cmFpbmluZyBidXR0b25cclxuICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBmaW5pc2hCdXR0b24uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2J1dHRvbicsICdidG4nKTtcclxuICBmaW5pc2hCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT7QktGL0LnRgtC4JztcclxuICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRyYWluaW5nSGFuZGxlcik7XHJcbiAgZmluaXNoVHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluaXNoQnV0dG9uKTtcclxuXHJcbiAgZ2FtZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluaXNoVHJhaW5pbmdDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJHYW1lKGdhbWVTdGF0ZSkge1xyXG4gIGNvbnN0IHsgc3RhdHVzLCBnYW1lQ29udGFpbmVyLCB0cmFpbmluZ0luZm8gfSA9IGdhbWVTdGF0ZTtcclxuICBpZiAoc3RhdHVzID09PSBnYW1lU3RhdHVzLnN0YXJ0KSB7XHJcbiAgICBnYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcmVuZGVySW5mbyhnYW1lU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IGV4YW1wbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGV4YW1wbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2dhbWUnKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhhbXBsZUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGluaXRIZWxwQnV0dG9ucygpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gaW5pdE92ZXJsYXkodHJhaW5pbmdJbmZvLnJ1bGVzKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gaW5pdCBhdWRpb1xyXG4gICAgY29uc3QgYXVkaW8gPSBpbml0QXVkaW8oKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXVkaW8pO1xyXG5cclxuICAgIHN0YXJ0VGltZXIoZ2FtZVN0YXRlLmR1cmF0aW9uLCByZXN1bHQudGltZXJDb250YWluZXIsICgpID0+IHsgc3RvcEdhbWUoZ2FtZVN0YXRlKTsgfSk7XHJcbiAgICByZW5kZXJFeGFtcGxlKHsgLi4uZ2FtZVN0YXRlLCBjb250YWluZXI6IGV4YW1wbGVDb250YWluZXIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUobGV2ZWwsIGdhbWVDb250YWluZXIsIHRyYWluaW5nSW5mbywgZHVyYXRpb24gPSA2MCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzY29yZTogMCxcclxuICAgIGxldmVsLFxyXG4gICAgc3RhdHVzOiBnYW1lU3RhdHVzLmluaXQsXHJcbiAgICBnYW1lQ29udGFpbmVyLFxyXG4gICAgZXhhbXBsZToge30sXHJcbiAgICBkdXJhdGlvbixcclxuICAgIHRyYWluaW5nSW5mbyxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKGdhbWVPYmopIHtcclxuICBjb25zdCBleGFtcGxlID0gZ2VuZXJhdGVFeGFtcGxlKGdhbWVPYmoubGV2ZWwpO1xyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiwgc3RhdHVzOiBnYW1lU3RhdHVzLnN0YXJ0LCBleGFtcGxlIH07XHJcbiAgcmVuZGVyR2FtZShuZXdHYW1lU3RhdGUpO1xyXG5cclxuICByZXR1cm4gbmV3R2FtZVN0YXRlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=