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
    duration: 450
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
    image: 'img/memory/matrix.jpg',
    bg: 'img/memory/bg/memory.jpg',
    description: 'Тренажер для развития образной памяти',
    rules: '<p>Необходимо в уме перемножить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>'
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
  answersCount: 3
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.medium,
  termsCount: 5,
  answersCount: 5
}), _defineProperty(_gameLevelInfo, _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard.levelName, {
  gameLevel: _game__WEBPACK_IMPORTED_MODULE_0__.gameLevel.hard,
  termsCount: 6,
  answersCount: 7
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

  /* const terms = Array(termsCount).fill(0).map(() => Math.round(Math.random() * maxTerm) + 1);
  const correctAnswer = terms.reduce((sum, term) => sum + term);
  const answers = getAnswers(correctAnswer, maxTerm, answersCount);
    return {
    matrix: terms.join(' + '),
    correctAnswer,
    answers,
  }; */
  var matrixArr = (0,_utils_matrix__WEBPACK_IMPORTED_MODULE_4__.makeMatrix)(termsCount);
  return {
    matrix: matrixArr.store,
    size: matrixArr.size
  };
}

function initMatrix(matrix) {
  var matrixContainer = document.createElement('div');
  matrixContainer.classList.add('training__matrix');
  matrixContainer.style.gridTemplateColumns = "repeat(".concat(matrix.size, ", 1fr)");
  matrix.matrix.forEach(function (item) {
    var matrixItem = document.createElement('div');
    matrixItem.classList.add('training__matrix__item');
    matrixItem.textContent = item;
    matrixItem.dataset.id = item;
    matrixContainer.appendChild(matrixItem);
  });
  return matrixContainer;
}

function initAnswers(matrix, successHandler, failHandler) {
  var answersContainer = document.createElement('div');
  answersContainer.classList.add('training__answers');
  /* matrix.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-lg');
    button.textContent = answer;
    button.addEventListener('click', matrix.correctAnswer === answer
      ? successHandler
      : failHandler);
    answersContainer.appendChild(button);
  }); */

  return answersContainer;
}

function renderMatrix(gameObj) {
  var container = gameObj.container,
      level = gameObj.level,
      matrix = gameObj.matrix;
  container.innerHTML = ''; // init matrix square container

  var matrixSquare = initMatrix(matrix);
  container.appendChild(matrixSquare);
  var scoreItem = document.querySelector('.score__item');
  scoreItem.textContent = gameObj.score; // init answer buttons container

  var newGameState = _objectSpread({}, gameObj);

  var successHandler = function successHandler() {
    newGameState.score += 1;

    if (newGameState.status === _game__WEBPACK_IMPORTED_MODULE_0__.gameStatus.start) {
      var newExample = generateMatrix(level);
      renderMatrix(_objectSpread(_objectSpread({}, newGameState), {}, {
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
      var newExample = generateMatrix(gameObj.level);
      renderMatrix(_objectSpread(_objectSpread({}, newGameState), {}, {
        example: newExample
      }));
      var audioAllowing = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getGameAudioStatus)();

      if (audioAllowing) {
        audioSound('wrong-answer');
      }
    }
  };

  var answers = initAnswers(matrix, successHandler, failHandler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVscEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aW1lci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdE1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFN1YlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvaW5pdFRyYWluaW5nLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3N0YXRlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdHJhaW5pbmdzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvYXNzZXRzL2pzL3RyYWluaW5ncy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9hc3NldHMvanMvdXRpbHMvbWF0cml4LmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbml0QXVkaW8iLCJhdWRpb0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJpZ2h0QW5zd2VyQXVkaW8iLCJzZXRBdHRyaWJ1dGUiLCJkYXRhc2V0IiwibmFtZSIsImFwcGVuZENoaWxkIiwid3JvbmdBbnN3ZXJBdWRpbyIsInRpbWVvdXRBdWRpbyIsImNsb3NlVHJhaW5pbmdIYW5kbGVyIiwicGFnZUNvbnRlbnQiLCJpbml0U2VjdGlvbiIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzb3VuZFRyYWluaW5nSGFuZGxlciIsImUiLCJhdWRpb0FsbG93aW5nIiwiZ2V0R2FtZUF1ZGlvU3RhdHVzIiwiYnV0dG9uU291bmQiLCJ0YXJnZXQiLCJzZXRHYW1lQXVkaW9TdGF0dXMiLCJjbG9zZU92ZXJsYXlIYW5kbGVyIiwib3ZlcmxheUNvbnRhaW5lciIsImluaXRIZWxwQnV0dG9ucyIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b25FeGl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbkluZm8iLCJvdmVybGF5IiwicmVtb3ZlIiwiaW5pdE92ZXJsYXkiLCJjb250ZW50Iiwib3ZlcmxheUNvbnRlbnQiLCJpbm5lckhUTUwiLCJidXR0b25PdmVybGF5Iiwic3RhdHVzIiwic3RhcnQiLCJwYXVzZSIsInRpbWVvdXQiLCJnZXRMZWZ0VGltZSIsInRpbWUiLCJiZWdpblRpbWUiLCJkaWZmIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJlbmRlclRpbWVyIiwidGltZXJTdGF0ZSIsImNvbnRhaW5lciIsInRpbWVySXRlbSIsInRpbWVyIiwibmV4dFRpY2siLCJ0aW1lclN0YXR1cyIsImVuZEhhbmRsZXIiLCJpc0VuZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzdGFydFRpbWVyIiwibmV3U3RhdGUiLCJwYXVzZVRpbWVyIiwiZ2FtZUxldmVsIiwiZWFzeSIsImxldmVsTmFtZSIsImR1cmF0aW9uIiwibWVkaXVtIiwiaGFyZCIsImdhbWVTdGF0dXMiLCJpbml0Iiwic3RvcCIsImdhbWVBdWRpbyIsImF1ZGlvIiwiYXVkaW9TdGF0dXMiLCJpbml0SGVhZGVyIiwiaW5pdE1haW5QYWdlIiwiaW5pdEZvb3RlciIsInRvZ2dsZU1lbnUiLCJhY3RpdmVNZW51SXRlbSIsInBhZ2VGb290ZXIiLCJib2R5IiwicGFnZUluZm9Db250YWluZXIiLCJwYWdlTG9nb0NvbnRhaW5lciIsInBhZ2VIZWFkZXIiLCJuYXZNZW51IiwiaW5pdE1lbnUiLCJuYXZNb2JpbGVNZW51IiwiY29udGFpbnMiLCJwYWdlQ29udGFpbmVyIiwicGFnZUhlYWRpbmciLCJwYWdlU3ViSGVhZGluZyIsImJ1dHRvbkxvZ2luIiwicmVnaXN0ZXJMb2dpbiIsIm1lbnVJdGVtcyIsIm1haW4iLCJ0cmFpbmluZyIsInN0YXRpc3RpYyIsImNsaWNrSGFuZGxlciIsInNlY3Rpb25OYW1lIiwic2VjdGlvbiIsInNldEFjdGl2ZVBhZ2VOYW1lIiwibW9iaWxlIiwibWVudVRvZ2dsZSIsIm1lbnVJY29uIiwiYWN0aXZlUGFnZU5hbWUiLCJnZXRBY3RpdmVQYWdlTmFtZSIsIm1lbnVMaXN0IiwibWVudUNvbnRhaW5lciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsIm1lbnVJdGVtIiwibWVudUl0ZW1JY29uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZW51SXRlbUxpbmsiLCJjYXJkc0VsZW1lbnRzIiwiaW5pdFN1YlNlY3Rpb24iLCJjYXJkc0NvbnRhaW5lciIsInJlcGxhY2VXaXRoIiwidHJhaW5pbmdUeXBlcyIsInR5cGVLZXkiLCJ0eXBlTmFtZSIsImNhcmRJdGVtIiwiY2FyZEltYWdlIiwiY2FyZE5hbWUiLCJzdWJTZWN0aW9uS2V5IiwidHJhaW5pbmdLZXkiLCJjdXJyZW50VGFyZ2V0IiwiaW5pdFRyYWluaW5nIiwiZ2V0U2VjdGlvbkRhdGFCeU5hbWUiLCJzdWJTZWN0aW9uTmFtZSIsInN1YlNlY3Rpb24iLCJ2YWx1ZXMiLCJ0cmFpbmluZ3NJdGVtcyIsImZpbmQiLCJ0cmFpbmluZ3MiLCJyb3RhdGVDYXJkIiwidGFyZ2V0Q2FyZE5hbWUiLCJjYXJkIiwidGFyZ2V0Q2FyZEJsb2NrIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZUNvbnRlbnQiLCJjdXJyZW50QmxvY2siLCJuZXdCbG9jayIsInBhcmVudEJsb2NrIiwicHJlcGVuZCIsImluaXRTdWJTZWN0aW9uSGVhZGluZyIsInNlY3Rpb25IZWFkaW5nIiwiaW5pdFRyYWluQ2FyZHMiLCJjYXJkQmxvY2siLCJrZXkiLCJjYXJkTGluayIsImltYWdlIiwiY2FyZENvbnRlbnQiLCJjYXJkUm90YXRlQnV0dG9uIiwiY2FyZEJhY2tJdGVtIiwiY2FyZEJhY2tEZXNjciIsImRlc2NyaXB0aW9uIiwiY2FyZEJhY2tDb250ZW50IiwiY2FyZEJhY2tOYW1lIiwic2VjdGlvbkhlYWRlciIsInNlY3Rpb25IZWFkaW5nQ29udGFpbmVyIiwidHJhaW5pbmdJbmZvIiwiaW5pdFN0YXJ0VHJhaW5pbmciLCJnYW1lIiwic3RhcnRUcmFpbmluZ0NvbnRhaW5lciIsImxldmVsU2VsZWN0Q29udGFpbmVyIiwibGV2ZWxTZWxlY3RMYWJlbCIsImxldmVsU2VsZWN0IiwibWFwIiwib3B0aW9uIiwic3RhcnRCdXR0b24iLCJzZWxlY3RlZEdhbWVMZXZlbCIsInZhbHVlIiwic3RhcnRHYW1lIiwibGV2ZWwiLCJnYW1lTGV2ZWxJbmZvIiwic3ViU2VjdGlvblRyYWluaW5nIiwidHJhaW5pbmdDb250YWluZXIiLCJ0cmFpbmluZ0NhcmQiLCJiZyIsImluaXRHYW1lIiwic3RhcnRUcmFpbmluZyIsInN0YXRlIiwic2V0QWN0aXZlTWVudUl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUJhY2tncm91bmQiLCJvdmVybGF5UGFnZSIsInRleHRNZW51SWNvbiIsIm1lbnVJdGVtSWNvbnMiLCJpbmNsdWRlcyIsImxpbmsiLCJydWxlcyIsInRlcm1zQ291bnQiLCJhbnN3ZXJzQ291bnQiLCJhdWRpb1NvdW5kIiwiYXVkaW9OYW1lIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiZ2VuZXJhdGVNYXRyaXgiLCJtYXRyaXhBcnIiLCJtYWtlTWF0cml4IiwibWF0cml4Iiwic3RvcmUiLCJzaXplIiwiaW5pdE1hdHJpeCIsIm1hdHJpeENvbnRhaW5lciIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXRyaXhJdGVtIiwiaWQiLCJpbml0QW5zd2VycyIsInN1Y2Nlc3NIYW5kbGVyIiwiZmFpbEhhbmRsZXIiLCJhbnN3ZXJzQ29udGFpbmVyIiwicmVuZGVyTWF0cml4IiwiZ2FtZU9iaiIsIm1hdHJpeFNxdWFyZSIsInNjb3JlSXRlbSIsInNjb3JlIiwibmV3R2FtZVN0YXRlIiwibmV3RXhhbXBsZSIsImV4YW1wbGUiLCJhbnN3ZXJzIiwicmVuZGVySW5mbyIsImdhbWVTdGF0ZSIsImluZm9Db250YWluZXIiLCJnYW1lQ29udGFpbmVyIiwibGV2ZWxJdGVtIiwidGltZXJDb250YWluZXIiLCJzdG9wR2FtZSIsImZpbmlzaFRyYWluaW5nQ29udGFpbmVyIiwiZmluaXNoU2NvcmUiLCJmaW5pc2hCdXR0b24iLCJyZW5kZXJHYW1lIiwicmVzdWx0IiwiaW5pdFZhbHVlIiwibmV3QXJyIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwiY29uY2F0IiwiZ2V0Q2VsbCIsIngiLCJ5Iiwic2V0Q2VsbCIsInNodWZmbGVNYXRyaXgiLCJzb3J0Iiwi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Q0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXVkaW8oKSB7XHJcbiAgY29uc3QgYXVkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhdWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYXVkaW8nKTtcclxuXHJcbiAgLy8gaW5pdCByaWdodCBhbnN3ZXIgY2xpY2sgYXVkaW9cclxuICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICByaWdodEFuc3dlckF1ZGlvLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvX19pdGVtJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby9hbnN3ZXJfcmlnaHQubXAzJyk7XHJcbiAgcmlnaHRBbnN3ZXJBdWRpby5kYXRhc2V0Lm5hbWUgPSAncmlnaHQtYW5zd2VyJztcclxuICBhdWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEFuc3dlckF1ZGlvKTtcclxuXHJcbiAgLy8gaW5pdCB3cm9uZyBjbGljayBhdWRpb1xyXG4gIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHdyb25nQW5zd2VyQXVkaW8uY2xhc3NMaXN0LmFkZCgnYXVkaW9fX2l0ZW0nKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2F1ZGlvL2Fuc3dlcl93cm9uZy5tcDMnKTtcclxuICB3cm9uZ0Fuc3dlckF1ZGlvLmRhdGFzZXQubmFtZSA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gIGF1ZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyb25nQW5zd2VyQXVkaW8pO1xyXG5cclxuICAvLyBpbml0IHRpbWVvdXQgYXVkaW9cclxuICBjb25zdCB0aW1lb3V0QXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gIHRpbWVvdXRBdWRpby5jbGFzc0xpc3QuYWRkKCdhdWRpb19faXRlbScpO1xyXG4gIHRpbWVvdXRBdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9hdWRpby90aW1lb3V0Lm1wMycpO1xyXG4gIHRpbWVvdXRBdWRpby5kYXRhc2V0Lm5hbWUgPSAndGltZW91dCc7XHJcbiAgYXVkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZW91dEF1ZGlvKTtcclxuXHJcbiAgcmV0dXJuIGF1ZGlvQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuLi9pbml0U2VjdGlvbic7XHJcbmltcG9ydCB7IGdldEdhbWVBdWRpb1N0YXR1cywgc2V0R2FtZUF1ZGlvU3RhdHVzIH0gZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VUcmFpbmluZ0hhbmRsZXIoKSB7XHJcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBpbml0U2VjdGlvbigndHJhaW5pbmdzJyk7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc291bmRUcmFpbmluZ0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgc2V0R2FtZUF1ZGlvU3RhdHVzKGZhbHNlKTtcclxuICAgIGJ1dHRvblNvdW5kLnRleHRDb250ZW50ID0gJ3ZvbHVtZV9vZmYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRHYW1lQXVkaW9TdGF0dXModHJ1ZSk7XHJcbiAgICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfdXAnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5SGFuZGxlcigpIHtcclxuICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWxwQnV0dG9ucygpIHtcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYnV0dG9ucycpO1xyXG5cclxuICAvLyBpbml0IGV4aXQgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25FeGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uRXhpdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutC+0L3Rh9C40YLRjCDRgtGA0LXQvdC40YDQvtCy0LrRgycpO1xyXG4gIGJ1dHRvbkV4aXQudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xyXG4gIGJ1dHRvbkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRyYWluaW5nSGFuZGxlcik7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25FeGl0KTtcclxuXHJcbiAgLy8gaW5pdCBzb3VuZCBidXR0b25cclxuICBjb25zdCBidXR0b25Tb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25Tb3VuZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvblNvdW5kLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAn0JLQutC70Y7Rh9C40YLRjC/QstGL0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcclxuICBidXR0b25Tb3VuZC50ZXh0Q29udGVudCA9ICd2b2x1bWVfb2ZmJztcclxuICBidXR0b25Tb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvdW5kVHJhaW5pbmdIYW5kbGVyKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblNvdW5kKTtcclxuXHJcbiAgLy8gaW5pdCBpbmZvIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYnV0dG9uSW5mby5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIGJ1dHRvbkluZm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICfQn9GA0L7Rh9C40YLQsNGC0Ywg0L/RgNCw0LLQuNC70LAnKTtcclxuICBidXR0b25JbmZvLnRleHRDb250ZW50ID0gJ2hlbHBfb3V0bGluZSc7XHJcbiAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhaW5pbmdfX292ZXJsYXknKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25JbmZvKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3ZlcmxheShjb250ZW50KSB7XHJcbiAgY29uc3Qgb3ZlcmxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX292ZXJsYXknLCAnb3ZlcmxheScsICdoaWRkZW4nKTtcclxuXHJcbiAgLy8gaW5pdCBvdmVybGF5IGNvbnRlbnRcclxuICBjb25zdCBvdmVybGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlfX2NvbnRlbnQnKTtcclxuICBvdmVybGF5Q29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUNvbnRlbnQpO1xyXG5cclxuICAvLyBpbml0IG92ZXJsYXkgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBidXR0b25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ9CX0LDQutGA0YvRgtGMJyk7XHJcbiAgYnV0dG9uT3ZlcmxheS50ZXh0Q29udGVudCA9ICdjbG9zZSc7XHJcbiAgYnV0dG9uT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheUhhbmRsZXIpO1xyXG4gIG92ZXJsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT3ZlcmxheSk7XHJcblxyXG4gIHJldHVybiBvdmVybGF5Q29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHN0YXR1cyA9IHtcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBwYXVzZTogJ3BhdXNlJyxcclxufTtcclxubGV0IHRpbWVvdXQ7XHJcblxyXG5mdW5jdGlvbiBnZXRMZWZ0VGltZSh7IHRpbWUsIGJlZ2luVGltZSB9KSB7XHJcbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBiZWdpblRpbWU7XHJcbiAgcmV0dXJuIHRpbWUgLSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGltZXIodGltZXJTdGF0ZSkge1xyXG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aW1lclN0YXRlO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gaW5pdCB0aW1lciBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRpbWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpbWVySXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fdGltZXInLCAndGltZXInKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCB0aW1lclxyXG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXJfX2l0ZW0nKTtcclxuICB0aW1lci50ZXh0Q29udGVudCA9IGdldExlZnRUaW1lKHRpbWVyU3RhdGUpO1xyXG4gIHRpbWVySXRlbS5hcHBlbmRDaGlsZCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRUaWNrKHRpbWVyU3RhdGUpIHtcclxuICBjb25zdCB7IHN0YXR1czogdGltZXJTdGF0dXMsIGVuZEhhbmRsZXIgfSA9IHRpbWVyU3RhdGU7XHJcbiAgY29uc3QgaXNFbmQgPSBnZXRMZWZ0VGltZSh0aW1lclN0YXRlKSA8IDA7XHJcbiAgaWYgKGlzRW5kKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBpZiAoZW5kSGFuZGxlcikge1xyXG4gICAgICBlbmRIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0aW1lclN0YXR1cyA9PT0gc3RhdHVzLnN0YXJ0KSB7XHJcbiAgICByZW5kZXJUaW1lcih0aW1lclN0YXRlKTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgbmV4dFRpY2sodGltZXJTdGF0ZSk7IH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VGltZXIodGltZSwgY29udGFpbmVyLCBlbmRIYW5kbGVyKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICB0aW1lLFxyXG4gICAgY29udGFpbmVyLFxyXG4gICAgYmVnaW5UaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMuc3RhcnQsXHJcbiAgICBlbmRIYW5kbGVyLFxyXG4gIH07XHJcbiAgbmV4dFRpY2sobmV3U3RhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VUaW1lcih0aW1lclN0YXRlKSB7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi50aW1lclN0YXRlLFxyXG4gICAgc3RhdHVzOiBzdGF0dXMucGF1c2UsXHJcbiAgICB0aW1lOiBEYXRlLm5vdygpIC0gdGltZXJTdGF0ZS5iZWdpblRpbWUsXHJcbiAgfTtcclxuICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgcmVuZGVyVGltZXIobmV3U3RhdGUpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lTGV2ZWwgPSB7XHJcbiAgZWFzeToge1xyXG4gICAgbGV2ZWxOYW1lOiAnZWFzeScsXHJcbiAgICBuYW1lOiAn0LvQtdCz0LrQuNC5JyxcclxuICAgIGR1cmF0aW9uOiA2LFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICBsZXZlbE5hbWU6ICdtZWRpdW0nLFxyXG4gICAgbmFtZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGR1cmF0aW9uOiA1MCxcclxuICB9LFxyXG4gIGhhcmQ6IHtcclxuICAgIGxldmVsTmFtZTogJ2hhcmQnLFxyXG4gICAgbmFtZTogJ9GC0Y/QttC10LvRi9C5JyxcclxuICAgIGR1cmF0aW9uOiA0NTAsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU3RhdHVzID0ge1xyXG4gIGluaXQ6ICdpbml0JyxcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBzdG9wOiAnc3RvcCcsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lQXVkaW8gPSB7XHJcbiAgYXVkaW86IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdhbWVBdWRpb1N0YXR1cyhhdWRpb1N0YXR1cykge1xyXG4gIGdhbWVBdWRpby5hdWRpbyA9IGF1ZGlvU3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZUF1ZGlvU3RhdHVzKCkge1xyXG4gIHJldHVybiBnYW1lQXVkaW8uYXVkaW87XHJcbn1cclxuIiwiaW1wb3J0IGluaXRIZWFkZXIgZnJvbSAnLi9pbml0SGVhZGVyJztcclxuaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0Rm9vdGVyIGZyb20gJy4vaW5pdEZvb3Rlcic7XHJcbmltcG9ydCB7IHRvZ2dsZU1lbnUsIGFjdGl2ZU1lbnVJdGVtIH0gZnJvbSAnLi90b2dnbGVNZW51JztcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRIZWFkZXIoKTtcclxuXHJcbi8vIGluaXQgbWFpbiBwYWdlXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxubWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRNYWluUGFnZSgpKTtcclxuXHJcbi8vIGluaXQgaGVhZGVyXHJcbmluaXRGb290ZXIoKTtcclxuXHJcbi8vIG9wZW4gYW5kIGNsb3NlIG1vYmlsZSBtZW51XHJcbnRvZ2dsZU1lbnUoKTtcclxuXHJcbi8vIGFjdGl2ZSBkZXNrdG9wIG1lbnUgaXRlbVxyXG5hY3RpdmVNZW51SXRlbSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Rm9vdGVyKCkge1xyXG4gIC8vIGluaXQgZm9vdGVyXHJcbiAgY29uc3QgcGFnZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIHBhZ2VGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicsICdmb290ZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VGb290ZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBhdXRob3IgaW5mb1xyXG4gIGNvbnN0IHBhZ2VJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19pbmZvJyk7XHJcbiAgcGFnZUluZm9Db250YWluZXIuaW5uZXJIVE1MID0gJzIwMjAgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ydXNha292YS1seXVkbWlsYVwiIHRhcmdldD1cIl9ibGFua1wiPlJ1c2Frb3ZhIEx5dWRtaWxhPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zbmFpcHAxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+WXVyeSBIYWx1c2hrbzwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUluZm9Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGZvb3RlciBsb2dvXHJcbiAgY29uc3QgcGFnZUxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2xvZ28nKTtcclxuICBwYWdlTG9nb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltZy9yc19zY2hvb2xfbG9nby5zdmdcIiBhbHQ9XCJSUyBTY2hvb2xcIj48L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VMb2dvQ29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgaW5pdE1lbnUgZnJvbSAnLi9pbml0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gIC8vIGluaXQgaGVhZGVyXHJcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XHJcblxyXG4gIC8vIGluc2VydCBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNZW51ID0gaW5pdE1lbnUoKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xyXG5cclxuICAvLyBpbnNlcnQgbW9iaWxlIG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1vYmlsZU1lbnUgPSBpbml0TWVudSh0cnVlKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1vYmlsZU1lbnUpO1xyXG5cclxuICAvLyBpbml0IG1haW4gY29udGFpbmVyXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWFpblBhZ2UoKSB7XHJcbiAgLy8gcmVtb3ZlIGNsYXNzIG9mIHN1YnNlY3Rpb25cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N1YnNlY3Rpb24tY29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IHBhZ2UgY29udGFpbmVyXHJcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250YWluZXInKTtcclxuXHJcbiAgLy8gaW5pdCBoMVxyXG4gIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBwYWdlSGVhZGluZy50ZXh0Q29udGVudCA9ICdTbWFydCBLaWRzJztcclxuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBoMlxyXG4gIGNvbnN0IHBhZ2VTdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwYWdlU3ViSGVhZGluZy50ZXh0Q29udGVudCA9ICfQotGA0LXQvdCw0LbQtdGA0Ysg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L/QsNC80Y/RgtC4LCDQstC90LjQvNCw0L3QuNGPLCDQu9C+0LPQuNC60Lgg0Lgg0LzRi9GI0LvQtdC90LjRjyc7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlU3ViSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbG9naW4gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1sb2dpbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi50ZXh0Q29udGVudCA9ICfQotGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Mb2dpbik7XHJcblxyXG4gIC8vIGluaXQgcmVnaXN0ZXIgYnV0dG9uXHJcbiAgY29uc3QgcmVnaXN0ZXJMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tcmVnaXN0ZXInKTtcclxuICByZWdpc3RlckxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLnRleHRDb250ZW50ID0gJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWdpc3RlckxvZ2luKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRNYWluUGFnZSBmcm9tICcuL2luaXRNYWluUGFnZSc7XHJcbmltcG9ydCBpbml0U2VjdGlvbiBmcm9tICcuL2luaXRTZWN0aW9uJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUsIGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbi8vIGltcG9ydCBpbml0U3RhdGlzdGljUGFnZSBmcm9tICcuL3N0YXRpc3RpY1BhZ2UnO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gIG1haW46ICfQk9C70LDQstC90LDRjycsXHJcbiAgdHJhaW5pbmc6ICfQotGA0LXQvdCw0LbQtdGA0YsnLFxyXG4gIHN0YXRpc3RpYzogJ9Ch0YLQsNGC0LjRgdGC0LjQutCwJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgbGV0IHBhZ2VDb250ZW50O1xyXG5cclxuICBpZiAoc2VjdGlvbk5hbWUgPT09ICdtYWluJykge1xyXG4gICAgcGFnZUNvbnRlbnQgPSBpbml0TWFpblBhZ2UoKTtcclxuICB9IGVsc2UgaWYgKHNlY3Rpb25OYW1lID09PSAnc3RhdGlzdGljJykge1xyXG4gICAgLy8gcGFnZUNvbnRlbnQgPSBpbml0U3RhdGlzdGljUGFnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlQ29udGVudCA9IGluaXRTZWN0aW9uKHNlY3Rpb25OYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XHJcblxyXG4gIHNldEFjdGl2ZVBhZ2VOYW1lKHNlY3Rpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1lbnUobW9iaWxlID0gZmFsc2UpIHtcclxuICAvLyBpbml0IG5hdiBtZW51XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicsICduYXZiYXItZXhwYW5kLWxnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICAvLyBpbml0IG1lbnUgdG9nZ2xlXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RvZ2dsZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcclxuXHJcbiAgICAvLyBpbml0IG1lbnUgaWNvblxyXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pY29uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBtZW51IGxpc3RcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51X19saXN0Jyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaW5pdCBtZW51IGNvbnRhaW5lclxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsICduYXZiYXItY29sbGFwc2UnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLW5hdicsICdtci1hdXRvJyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1lbnVJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbVxyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xyXG4gICAgaWYgKCFtb2JpbGUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG1lbnVJdGVtLmRhdGFzZXQubmFtZSA9IGl0ZW07XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcblxyXG4gICAgaWYgKG1vYmlsZSkge1xyXG4gICAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGljb25cclxuICAgICAgY29uc3QgbWVudUl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBtZW51SXRlbUljb24uY2xhc3NMaXN0LmFkZCgnbGlua19faWNvbicpO1xyXG4gICAgICBtZW51SXRlbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzL2ltZy9pY29ucy9pY29uLSR7aXRlbX0ucG5nXCIpYDtcclxuICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JY29uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtIGxpbmtcclxuICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG1lbnVJdGVtTGluay5jbGFzc0xpc3QuYWRkKG1vYmlsZSA/ICdtZW51X19saW5rJyA6ICduYXYtbGluaycpO1xyXG4gICAgbWVudUl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtpdGVtfWApO1xyXG4gICAgbWVudUl0ZW1MaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGl0ZW07XHJcbiAgICBtZW51SXRlbUxpbmsudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaXRlbV07XHJcbiAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1MaW5rKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5hdk1lbnU7XHJcbn1cclxuIiwiLy8gaW1wb3J0IHsgc2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IGluaXRTdWJTZWN0aW9uIGZyb20gJy4vaW5pdFN1YlNlY3Rpb24nO1xyXG5pbXBvcnQgeyB0cmFpbmluZ1R5cGVzIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICBjb25zdCBjYXJkc0VsZW1lbnRzID0gaW5pdFN1YlNlY3Rpb24oc2VjdGlvbk5hbWUpO1xyXG5cclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkc0NvbnRhaW5lci5yZXBsYWNlV2l0aChjYXJkc0VsZW1lbnRzKTtcclxuXHJcbiAgLy8gc2V0QWN0aXZlUGFnZU5hbWUoc2VjdGlvbk5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U2VjdGlvbigpIHtcclxuICAvLyByZW1vdmUgY2xhc3Mgb2Ygc3Vic2VjdGlvblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N1YnNlY3Rpb24tY29udGFpbmVyJykpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3Vic2VjdGlvbi1jb250YWluZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGluaXQgY2FyZHMgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXInLCAnY2FyZHMnKTtcclxuXHJcbiAgLy8gaW5pdCBjYXJkc1xyXG4gIHRyYWluaW5nVHlwZXMuZm9yRWFjaCgoeyB0eXBlS2V5LCB0eXBlTmFtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2l0ZW0nKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRJdGVtKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgaW1hZ2VcclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgY2FyZEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvYmcvYmctJHt0eXBlS2V5fS5qcGdcIilgO1xyXG4gICAgY2FyZEltYWdlLmRhdGFzZXQuc2VjdGlvbiA9IHR5cGVLZXk7XHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdHlwZU5hbWU7XHJcbiAgICBjYXJkTmFtZS5kYXRhc2V0LnNlY3Rpb24gPSB0eXBlS2V5O1xyXG4gICAgY2FyZE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGluaXRUcmFpbmluZyBmcm9tICcuL2luaXRUcmFpbmluZyc7XHJcbmltcG9ydCB7IHRyYWluaW5nVHlwZXMsIHRyYWluaW5nc0l0ZW1zIH0gZnJvbSAnLi90cmFpbmluZ3MnO1xyXG4vLyBpbXBvcnQgeyBzYXZlUmVzdWx0IH0gZnJvbSAnLi9zdGF0aXN0aWMnO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUsIHN1YlNlY3Rpb25LZXkpIHtcclxuICBjb25zdCB0cmFpbmluZ0tleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyYWluaW5nO1xyXG4gIGNvbnN0IHRyYWluaW5nID0gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KTtcclxuXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJyk7XHJcbiAgY2FyZHNDb250YWluZXIucmVwbGFjZVdpdGgodHJhaW5pbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHN1YlNlY3Rpb24gPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25OYW1lKTtcclxuICByZXR1cm4gc3ViU2VjdGlvbi50cmFpbmluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUNhcmQoZSkge1xyXG4gIGNvbnN0IHRhcmdldENhcmROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2FyZDtcclxuICBjb25zdCB0YXJnZXRDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZHMtJHt0YXJnZXRDYXJkTmFtZX1gKTtcclxuXHJcbiAgdGFyZ2V0Q2FyZEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19ibG9ja19ob3ZlcicpO1xyXG5cclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChjdXJyZW50QmxvY2ssIG5ld0Jsb2NrLCBwYXJlbnRCbG9jaykge1xyXG4gIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgIGN1cnJlbnRCbG9jay5yZXBsYWNlV2l0aChuZXdCbG9jayk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudEJsb2NrLnByZXBlbmQobmV3QmxvY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25LZXkgPSAnJykge1xyXG4gIC8vIGluaXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbl9faGVhZGluZycpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uTmFtZSA9IE9iamVjdC52YWx1ZXModHJhaW5pbmdUeXBlcykuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGVLZXkgPT09IHN1YlNlY3Rpb25LZXksXHJcbiAgKTtcclxuXHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBzdWJTZWN0aW9uTmFtZS50eXBlTmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUcmFpbkNhcmRzKGNhcmRzQ29udGFpbmVyLCBjYXJkc0VsZW1lbnRzLCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY2FyZHNFbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAvLyBpbml0IGJsb2NrIGZvciBjYXJkc1xyXG4gICAgY29uc3QgY2FyZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQmxvY2suY2xhc3NMaXN0LmFkZCgnY2FyZHNfX2Jsb2NrJywgYGNhcmRzLSR7Y2FyZC5rZXl9YCk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQmxvY2spO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBsaW5rXHJcbiAgICBjb25zdCBjYXJkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNhcmRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpbmsnKTtcclxuICAgIGNhcmRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtjYXJkLmtleX1gKTtcclxuICAgIGNhcmRCbG9jay5hcHBlbmRDaGlsZChjYXJkTGluayk7XHJcblxyXG4gICAgLy8gaW5pdCBmcm9udCBjYXJkIGl0ZW1cclxuICAgIGNvbnN0IGNhcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkc19faXRlbScsICdjYXJkc19fZnJvbnQnKTtcclxuICAgIGNhcmRJdGVtLmRhdGFzZXQudHJhaW5pbmcgPSBjYXJkLmtleTtcclxuICAgIGNhcmRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY2xpY2tIYW5kbGVyKGUsIHN1YlNlY3Rpb25LZXkpO1xyXG4gICAgICAvLyBzYXZlUmVzdWx0KGNhcmQud29yZCwgJ3RyYWluZWQnKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZExpbmsuYXBwZW5kQ2hpbGQoY2FyZEl0ZW0pO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBpbWFnZVxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1nJyk7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vYXNzZXRzLyR7Y2FyZC5pbWFnZX1cIilgO1xyXG4gICAgY2FyZEl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgY29udGVudFxyXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKTtcclxuICAgIGNhcmRJdGVtLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcbiAgICAvLyBpbml0IGZyb250IGNhcmQgbmFtZVxyXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX25hbWUnKTtcclxuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gY2FyZC5uYW1lO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZE5hbWUpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCByb3RhdGUgYnV0dG9uXHJcbiAgICBjb25zdCBjYXJkUm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY2FyZFJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b24nLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uZGF0YXNldC5jYXJkID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkUm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ3JvdGF0ZV9sZWZ0JztcclxuICAgIGNhcmRSb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVDYXJkKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmRSb3RhdGVCdXR0b24pO1xyXG5cclxuICAgIC8vIGluaXQgYmFjayBjYXJkIGl0ZW1cclxuICAgIGNvbnN0IGNhcmRCYWNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJhY2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRzX19pdGVtJywgJ2NhcmRzX19iYWNrJyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uZGF0YXNldC5jYXJkID0gY2FyZC5rZXk7XHJcbiAgICBjYXJkQmFja0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJvdGF0ZUNhcmQpO1xyXG4gICAgY2FyZEJsb2NrLmFwcGVuZENoaWxkKGNhcmRCYWNrSXRlbSk7XHJcblxyXG4gICAgLy8gaW5pdCBiYWNrIGNhcmQgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IGNhcmRCYWNrRGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrRGVzY3IuY2xhc3NMaXN0LmFkZCgnY2FyZF9fZGVzY3InKTtcclxuICAgIGNhcmRCYWNrRGVzY3IudGV4dENvbnRlbnQgPSBjYXJkLmRlc2NyaXB0aW9uO1xyXG4gICAgY2FyZEJhY2tJdGVtLmFwcGVuZENoaWxkKGNhcmRCYWNrRGVzY3IpO1xyXG5cclxuICAgIC8vIGluaXQgZnJvbnQgY2FyZCBjb250ZW50XHJcbiAgICBjb25zdCBjYXJkQmFja0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19jb250ZW50Jyk7XHJcbiAgICBjYXJkQmFja0l0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJhY2tDb250ZW50KTtcclxuXHJcbiAgICAvLyBpbml0IGJhY2sgY2FyZCBuYW1lXHJcbiAgICBjb25zdCBjYXJkQmFja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCYWNrTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19uYW1lJyk7XHJcbiAgICBjYXJkQmFja05hbWUudGV4dENvbnRlbnQgPSBjYXJkLm5hbWU7XHJcbiAgICBjYXJkQmFja0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZEJhY2tOYW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFN1YlNlY3Rpb24oc3ViU2VjdGlvbk5hbWUpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJzZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBzZXQgc2VjdGlvbiBoZWFkZXJcclxuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gaW5pdFN1YlNlY3Rpb25IZWFkaW5nKHN1YlNlY3Rpb25OYW1lKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGNhcmRzIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJywgJ2NhcmRzJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGdldCBpbmZvIGZvciBjYXJkc1xyXG4gIGNvbnN0IGNhcmRzRWxlbWVudHMgPSBnZXRTZWN0aW9uRGF0YUJ5TmFtZShzdWJTZWN0aW9uTmFtZSk7XHJcblxyXG4gIC8vIGluaXQgY2FyZHNcclxuICBpbml0VHJhaW5DYXJkcyhjYXJkc0NvbnRhaW5lciwgY2FyZHNFbGVtZW50cywgc3ViU2VjdGlvbk5hbWUpO1xyXG5cclxuICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgdHJhaW5pbmdzSXRlbXMgfSBmcm9tICcuL3RyYWluaW5ncyc7XHJcbmltcG9ydCB7IGdhbWVMZXZlbCB9IGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IGluaXRHYW1lLCBzdGFydEdhbWUsIGdhbWVMZXZlbEluZm8gfSBmcm9tICcuL3RyYWluaW5ncy9tYXRyaXgnO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoY3VycmVudEJsb2NrLCBuZXdCbG9jaywgcGFyZW50QmxvY2spIHtcclxuICBpZiAoY3VycmVudEJsb2NrKSB7XHJcbiAgICBjdXJyZW50QmxvY2sucmVwbGFjZVdpdGgobmV3QmxvY2spO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRCbG9jay5hcHBlbmRDaGlsZChuZXdCbG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKSB7XHJcbiAgLy8gaW5pdCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBzZWN0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgc2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSB0cmFpbmluZ0luZm8ubmFtZTtcclxuICByZXR1cm4gc2VjdGlvbkhlYWRpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdGFydFRyYWluaW5nKHRyYWluaW5nSW5mbywgZ2FtZSkge1xyXG4gIC8vIGluaXQgc3RhcnQgdHJhaW5pbmcgY29udGFpbmVyXHJcbiAgY29uc3Qgc3RhcnRUcmFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX3N0YXJ0Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHA+JHt0cmFpbmluZ0luZm8uZGVzY3JpcHRpb259PC9wPmA7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3QgY29udGFpbmVyXHJcbiAgY29uc3QgbGV2ZWxTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbFNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc2VsZWN0Jyk7XHJcbiAgc3RhcnRUcmFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbFNlbGVjdENvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3QgbGFiZWxcclxuICBjb25zdCBsZXZlbFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGV2ZWxTZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICfQktGL0LHQtdGA0LjRgtC1INGD0YDQvtCy0LXQvdGMOic7XHJcbiAgbGV2ZWxTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3RMYWJlbCk7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgZ2FtZSBzZWxlY3RcclxuICBjb25zdCBsZXZlbFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIGxldmVsU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxldmVsU2VsZWN0KTtcclxuXHJcbiAgLy8gaW5pdCBzZWxlY3Qgb3B0aW9uc1xyXG4gIE9iamVjdC5rZXlzKGdhbWVMZXZlbCkubWFwKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSk7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBnYW1lTGV2ZWxbaXRlbV0ubmFtZTtcclxuICAgIGxldmVsU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxuICB9KTtcclxuXHJcbiAgLy8gaW5pdCBzdGFydCB0cmFpbmluZyBidXR0b25cclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19idXR0b24nLCAnYnRuJyk7XHJcbiAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5wbGF5X2NpcmNsZV9vdXRsaW5lPC9pPtCd0LDRh9Cw0YLRjCc7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEdhbWVMZXZlbCA9IGxldmVsU2VsZWN0LnZhbHVlO1xyXG4gICAgc3RhcnRHYW1lKHtcclxuICAgICAgLi4uZ2FtZSxcclxuICAgICAgbGV2ZWw6IGdhbWVMZXZlbEluZm9bZ2FtZUxldmVsW3NlbGVjdGVkR2FtZUxldmVsXS5sZXZlbE5hbWVdLFxyXG4gICAgICBkdXJhdGlvbjogZ2FtZUxldmVsW3NlbGVjdGVkR2FtZUxldmVsXS5kdXJhdGlvbixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHN0YXJ0VHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xyXG5cclxuICByZXR1cm4gc3RhcnRUcmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFRyYWluaW5nKHRyYWluaW5nS2V5LCBzdWJTZWN0aW9uS2V5KSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzdWJTZWN0aW9uVHJhaW5pbmcgPSBPYmplY3QudmFsdWVzKHRyYWluaW5nc0l0ZW1zKS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udHlwZUtleSA9PT0gc3ViU2VjdGlvbktleSxcclxuICApO1xyXG5cclxuICBjb25zdCB0cmFpbmluZ0luZm8gPSBPYmplY3QudmFsdWVzKHN1YlNlY3Rpb25UcmFpbmluZy50cmFpbmluZ3MpLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IHRyYWluaW5nS2V5LFxyXG4gICk7XHJcblxyXG4gIC8vIHNldCBzZWN0aW9uIGhlYWRlclxyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBpbml0U3ViU2VjdGlvbkhlYWRpbmcodHJhaW5pbmdJbmZvKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19oZWFkaW5nJyk7XHJcbiAgcmVwbGFjZUNvbnRlbnQoc2VjdGlvbkhlYWRpbmdDb250YWluZXIsIHNlY3Rpb25IZWFkZXIsIG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmcnLCAnY2FyZHMnKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCB0cmFpbmluZyBjYXJkXHJcbiAgY29uc3QgdHJhaW5pbmdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdHJhaW5pbmdDYXJkLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19jYXJkJywgJ2NhcmRzX19pdGVtJywgdHJhaW5pbmdJbmZvLmtleSk7XHJcbiAgdHJhaW5pbmdDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy8ke3RyYWluaW5nSW5mby5iZ31cIilgO1xyXG4gIHRyYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIC8vIGluaXQgZ2FtZVxyXG4gIGNvbnN0IGdhbWUgPSBpbml0R2FtZShnYW1lTGV2ZWxJbmZvW2dhbWVMZXZlbC5lYXN5LmxldmVsTmFtZV0sIHRyYWluaW5nQ2FyZCwgdHJhaW5pbmdJbmZvKTtcclxuXHJcbiAgLy8gc3RhcnQgdHJhaW5pbmdcclxuICBjb25zdCBzdGFydFRyYWluaW5nID0gaW5pdFN0YXJ0VHJhaW5pbmcodHJhaW5pbmdJbmZvLCBnYW1lKTtcclxuICBjb25zdCBzdGFydFRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWluaW5nX19zdGFydCcpO1xyXG4gIHJlcGxhY2VDb250ZW50KHN0YXJ0VHJhaW5pbmdDb250YWluZXIsIHN0YXJ0VHJhaW5pbmcsIHRyYWluaW5nQ2FyZCk7XHJcblxyXG4gIHJldHVybiB0cmFpbmluZ0NvbnRhaW5lcjtcclxufVxyXG4iLCJjb25zdCBzdGF0ZSA9IHtcclxuICBhY3RpdmVQYWdlTmFtZTogJ21haW4nLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2VOYW1lKG5hbWUpIHtcclxuICBzdGF0ZS5hY3RpdmVQYWdlTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQYWdlTmFtZSgpIHtcclxuICByZXR1cm4gc3RhdGUuYWN0aXZlUGFnZU5hbWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlUGFnZU5hbWUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IGFjdGl2ZVBhZ2VOYW1lID0gZ2V0QWN0aXZlUGFnZU5hbWUoKTtcclxuICBjb25zdCBtZW51SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKV07XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXQubmFtZSA9PT0gYWN0aXZlUGFnZU5hbWUpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faWNvbicpO1xyXG5cclxuICBjb25zdCBtZW51QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21lbnVfb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBvdmVybGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5UGFnZSk7XHJcblxyXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHRNZW51SWNvbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSB0ZXh0TWVudUljb24gPT09ICdtZW51JyA/ICdjbG9zZScgOiAnbWVudSc7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1JY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua19faWNvbicpXTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAobWVudUljb24udGV4dENvbnRlbnQgPT09ICdjbG9zZSdcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVCYWNrZ3JvdW5kXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51SWNvblxyXG4gICAgICAmJiAhbWVudUl0ZW1JY29ucy5pbmNsdWRlcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBtZW51TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNZW51SXRlbSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRyYWluaW5nVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ21lbW9yeScsXHJcbiAgICB0eXBlTmFtZTogJ9Cf0LDQvNGP0YLRjCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnYXR0ZW50aW9uJyxcclxuICAgIHR5cGVOYW1lOiAn0JLQvdC40LzQsNC90LjQtScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHlwZU5hbWU6ICfQm9C+0LPQuNC60LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHR5cGVOYW1lOiAn0JzRi9GI0LvQtdC90LjQtScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFpbmluZ3NJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbWVtb3J5JyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnbWF0cml4JyxcclxuICAgICAgICBuYW1lOiAn0JzQsNGC0YDQuNGG0Ysg0L/QsNC80Y/RgtC4JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9tZW1vcnkvbWF0cml4LmpwZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbWVtb3J5L2JnL21lbW9yeS5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L3QvtC5INC/0LDQvNGP0YLQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QndC10L7QsdGF0L7QtNC40LzQviDQsiDRg9C80LUg0L/QtdGA0LXQvNC90L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ2F0dGVudGlvbicsXHJcbiAgICB0cmFpbmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ2NsaWNrJyxcclxuICAgICAgICBuYW1lOiAn0JrQu9C40Lot0JrQu9C40LonLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2F0dGVudGlvbi9jbGljay5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQstC90LjQvNCw0L3QuNGPJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlS2V5OiAnbG9naWMnLFxyXG4gICAgdHJhaW5pbmdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdhZGRpdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LvQvtC20LXQvdC40LUnLFxyXG4gICAgICAgIGltYWdlOiAnaW1nL2xvZ2ljL2FkZGl0aW9uLnBuZycsXHJcbiAgICAgICAgYmc6ICdpbWcvbG9naWMvYmcvbG9naWMuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0LvQvtCz0LjQutC4JyxcclxuICAgICAgICBydWxlczogJzxwPtCd0LXQvtCx0YXQvtC00LjQvNC+INCyINGD0LzQtSDRgdC70L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICdzdWJ0cmFjdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ9CS0YvRh9C40YLQsNC90LjQtScsXHJcbiAgICAgICAgaW1hZ2U6ICdpbWcvbG9naWMvc3VidHJhY3Rpb24ucG5nJyxcclxuICAgICAgICBiZzogJ2ltZy9sb2dpYy9iZy9sb2dpYy5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC10L3QsNC20LXRgCDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQu9C+0LPQuNC60LgnLFxyXG4gICAgICAgIHJ1bGVzOiAnPHA+0J3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YPQvNC1INCy0YvRh9C10YHRgtGMINCy0YHQtSDRh9C40YHQu9CwINCyINC/0YDQtdC00LvQvtC20LXQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0LwuPC9wPjxwPtCd0YPQttC90L4g0YDQtdGI0LDRgtGMINC/0YDQuNC80LXRgNGLLCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvQvtGB0Ywg0LLRgNC10LzRjyDRgtCw0LnQvNC10YDQsC48L3A+JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ211bHRpcGxpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAn0KPQvNC90L7QttC10L3QuNC1JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy9sb2dpYy9tdWx0aXBsaWNhdGlvbi5wbmcnLFxyXG4gICAgICAgIGJnOiAnaW1nL2xvZ2ljL2JnL2xvZ2ljLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQotGA0LXQvdCw0LbQtdGAINC00LvRjyDRgNCw0LfQstC40YLQuNGPINC70L7Qs9C40LrQuCcsXHJcbiAgICAgICAgcnVsZXM6ICc8cD7QndC10L7QsdGF0L7QtNC40LzQviDQsiDRg9C80LUg0L/QtdGA0LXQvNC90L7QttC40YLRjCDQstGB0LUg0YfQuNGB0LvQsCDQsiDQv9GA0LXQtNC70L7QttC10L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDINGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8LjwvcD48cD7QndGD0LbQvdC+INGA0LXRiNCw0YLRjCDQv9GA0LjQvNC10YDRiywg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70L7RgdGMINCy0YDQtdC80Y8g0YLQsNC50LzQtdGA0LAuPC9wPicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZUtleTogJ3RoaW5raW5nJyxcclxuICAgIHRyYWluaW5nczogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAndW5pa3VtJyxcclxuICAgICAgICBuYW1lOiAn0KPQvdC40LrRg9C8JyxcclxuICAgICAgICBpbWFnZTogJ2ltZy90aGlua2luZy91bmlrdW0uanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQtdC90LDQttC10YAg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L7QsdGA0LDQt9C90L7Qs9C+INC80YvRiNC70LXQvdC40Y8nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBnYW1lU3RhdHVzLCBnZXRHYW1lQXVkaW9TdGF0dXMsIGdhbWVMZXZlbCB9IGZyb20gJy4uL2dhbWUnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aW1lcic7XHJcbmltcG9ydCB7IGluaXRIZWxwQnV0dG9ucywgaW5pdE92ZXJsYXksIGNsb3NlVHJhaW5pbmdIYW5kbGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWxwQnV0dG9ucyc7XHJcbmltcG9ydCBpbml0QXVkaW8gZnJvbSAnLi4vY29tcG9uZW50cy9hdWRpbyc7XHJcbmltcG9ydCB7IG1ha2VNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVMZXZlbEluZm8gPSB7XHJcbiAgW2dhbWVMZXZlbC5lYXN5LmxldmVsTmFtZV06IHtcclxuICAgIGdhbWVMZXZlbDogZ2FtZUxldmVsLmVhc3ksXHJcbiAgICB0ZXJtc0NvdW50OiA0LFxyXG4gICAgYW5zd2Vyc0NvdW50OiAzLFxyXG4gIH0sXHJcbiAgW2dhbWVMZXZlbC5tZWRpdW0ubGV2ZWxOYW1lXToge1xyXG4gICAgZ2FtZUxldmVsOiBnYW1lTGV2ZWwubWVkaXVtLFxyXG4gICAgdGVybXNDb3VudDogNSxcclxuICAgIGFuc3dlcnNDb3VudDogNSxcclxuICB9LFxyXG4gIFtnYW1lTGV2ZWwuaGFyZC5sZXZlbE5hbWVdOiB7XHJcbiAgICBnYW1lTGV2ZWw6IGdhbWVMZXZlbC5oYXJkLFxyXG4gICAgdGVybXNDb3VudDogNixcclxuICAgIGFuc3dlcnNDb3VudDogNyxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYXVkaW9Tb3VuZChhdWRpb05hbWUpIHtcclxuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEtbmFtZT1cIiR7YXVkaW9OYW1lfVwiXWApO1xyXG4gIGlmIChhdWRpbykge1xyXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNYXRyaXgoeyB0ZXJtc0NvdW50LCBhbnN3ZXJzQ291bnQgfSkge1xyXG4gIC8qIGNvbnN0IHRlcm1zID0gQXJyYXkodGVybXNDb3VudCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4VGVybSkgKyAxKTtcclxuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gdGVybXMucmVkdWNlKChzdW0sIHRlcm0pID0+IHN1bSArIHRlcm0pO1xyXG4gIGNvbnN0IGFuc3dlcnMgPSBnZXRBbnN3ZXJzKGNvcnJlY3RBbnN3ZXIsIG1heFRlcm0sIGFuc3dlcnNDb3VudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYXRyaXg6IHRlcm1zLmpvaW4oJyArICcpLFxyXG4gICAgY29ycmVjdEFuc3dlcixcclxuICAgIGFuc3dlcnMsXHJcbiAgfTsgKi9cclxuXHJcbiAgY29uc3QgbWF0cml4QXJyID0gbWFrZU1hdHJpeCh0ZXJtc0NvdW50KTtcclxuICByZXR1cm4ge1xyXG4gICAgbWF0cml4OiBtYXRyaXhBcnIuc3RvcmUsXHJcbiAgICBzaXplOiBtYXRyaXhBcnIuc2l6ZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TWF0cml4KG1hdHJpeCkge1xyXG4gIGNvbnN0IG1hdHJpeENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1hdHJpeENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fbWF0cml4Jyk7XHJcbiAgbWF0cml4Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7bWF0cml4LnNpemV9LCAxZnIpYDtcclxuXHJcbiAgbWF0cml4Lm1hdHJpeC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBtYXRyaXhJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYXRyaXhJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19tYXRyaXhfX2l0ZW0nKTtcclxuICAgIG1hdHJpeEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgbWF0cml4SXRlbS5kYXRhc2V0LmlkID0gaXRlbTtcclxuICAgIG1hdHJpeENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXRyaXhJdGVtKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1hdHJpeENvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEFuc3dlcnMobWF0cml4LCBzdWNjZXNzSGFuZGxlciwgZmFpbEhhbmRsZXIpIHtcclxuICBjb25zdCBhbnN3ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYW5zd2Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fYW5zd2VycycpO1xyXG5cclxuICAvKiBtYXRyaXguYW5zd2Vycy5mb3JFYWNoKChhbnN3ZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFuc3dlcjtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hdHJpeC5jb3JyZWN0QW5zd2VyID09PSBhbnN3ZXJcclxuICAgICAgPyBzdWNjZXNzSGFuZGxlclxyXG4gICAgICA6IGZhaWxIYW5kbGVyKTtcclxuICAgIGFuc3dlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICB9KTsgKi9cclxuXHJcbiAgcmV0dXJuIGFuc3dlcnNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1hdHJpeChnYW1lT2JqKSB7XHJcbiAgY29uc3QgeyBjb250YWluZXIsIGxldmVsLCBtYXRyaXggfSA9IGdhbWVPYmo7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBpbml0IG1hdHJpeCBzcXVhcmUgY29udGFpbmVyXHJcbiAgY29uc3QgbWF0cml4U3F1YXJlID0gaW5pdE1hdHJpeChtYXRyaXgpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXRyaXhTcXVhcmUpO1xyXG5cclxuICBjb25zdCBzY29yZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX2l0ZW0nKTtcclxuICBzY29yZUl0ZW0udGV4dENvbnRlbnQgPSBnYW1lT2JqLnNjb3JlO1xyXG5cclxuICAvLyBpbml0IGFuc3dlciBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uZ2FtZU9iaiB9O1xyXG5cclxuICBjb25zdCBzdWNjZXNzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIG5ld0dhbWVTdGF0ZS5zY29yZSArPSAxO1xyXG4gICAgaWYgKG5ld0dhbWVTdGF0ZS5zdGF0dXMgPT09IGdhbWVTdGF0dXMuc3RhcnQpIHtcclxuICAgICAgY29uc3QgbmV3RXhhbXBsZSA9IGdlbmVyYXRlTWF0cml4KGxldmVsKTtcclxuICAgICAgcmVuZGVyTWF0cml4KHsgLi4ubmV3R2FtZVN0YXRlLCBleGFtcGxlOiBuZXdFeGFtcGxlIH0pO1xyXG5cclxuICAgICAgY29uc3QgYXVkaW9BbGxvd2luZyA9IGdldEdhbWVBdWRpb1N0YXR1cygpO1xyXG4gICAgICBpZiAoYXVkaW9BbGxvd2luZykge1xyXG4gICAgICAgIGF1ZGlvU291bmQoJ3JpZ2h0LWFuc3dlcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmFpbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3R2FtZVN0YXRlLnN0YXR1cyA9PT0gZ2FtZVN0YXR1cy5zdGFydCkge1xyXG4gICAgICBjb25zdCBuZXdFeGFtcGxlID0gZ2VuZXJhdGVNYXRyaXgoZ2FtZU9iai5sZXZlbCk7XHJcbiAgICAgIHJlbmRlck1hdHJpeCh7IC4uLm5ld0dhbWVTdGF0ZSwgZXhhbXBsZTogbmV3RXhhbXBsZSB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGF1ZGlvQWxsb3dpbmcgPSBnZXRHYW1lQXVkaW9TdGF0dXMoKTtcclxuICAgICAgaWYgKGF1ZGlvQWxsb3dpbmcpIHtcclxuICAgICAgICBhdWRpb1NvdW5kKCd3cm9uZy1hbnN3ZXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlcnMgPSBpbml0QW5zd2VycyhtYXRyaXgsIHN1Y2Nlc3NIYW5kbGVyLCBmYWlsSGFuZGxlcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFuc3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJJbmZvKGdhbWVTdGF0ZSkge1xyXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19pbmZvJyk7XHJcbiAgZ2FtZVN0YXRlLmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbGV2ZWwgaW5mbyBjb250YWluZXJcclxuICBjb25zdCBsZXZlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXZlbEl0ZW0uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2xldmVsJyk7XHJcbiAgbGV2ZWxJdGVtLmlubmVySFRNTCA9IGA8c3Bhbj7Qo9GA0L7QstC10L3RjDo8L3NwYW4+ICR7Z2FtZVN0YXRlLmxldmVsLmdhbWVMZXZlbC5uYW1lfWA7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZXZlbEl0ZW0pO1xyXG5cclxuICAvLyBpbml0IHRpbWVyIGluZm8gY29udGFpbmVyXHJcbiAgY29uc3QgdGltZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGltZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX190aW1lcicsICd0aW1lcicpO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJJdGVtKTtcclxuXHJcbiAgLy8gaW5pdCBzY29yZSBpbmZvIGNvbnRhaW5lclxyXG4gIGNvbnN0IHNjb3JlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNjb3JlSXRlbS5jbGFzc0xpc3QuYWRkKCd0cmFpbmluZ19fc2NvcmUnKTtcclxuICBzY29yZUl0ZW0uaW5uZXJIVE1MID0gJzxzcGFuPtCe0YfQutC4Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzY29yZV9faXRlbVwiPjA8L3NwYW4+JztcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlSXRlbSk7XHJcblxyXG4gIHJldHVybiB7IHRpbWVyQ29udGFpbmVyOiB0aW1lckl0ZW0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcEdhbWUoZ2FtZVN0YXRlKSB7XHJcbiAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX19pdGVtJyk7XHJcbiAgY29uc3Qgc2NvcmUgPSBzY29yZUl0ZW0udGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgeyBnYW1lQ29udGFpbmVyIH0gPSBnYW1lU3RhdGU7XHJcblxyXG4gIC8vIGluaXQgZmluaXNoIHRyYWluaW5nIGNvbnRhaW5lclxyXG4gIGNvbnN0IGZpbmlzaFRyYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmluaXNoVHJhaW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2ZpbmlzaCcpO1xyXG5cclxuICAvLyBpbml0IGZpbmlzaCBzY29yZSBjb250YWluZXJcclxuICBjb25zdCBmaW5pc2hTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZpbmlzaFNjb3JlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaF9fc2NvcmUnKTtcclxuICBmaW5pc2hTY29yZS5pbm5lckhUTUwgPSBgPHA+0JLQsNGIINGA0LXQt9GD0LvRjNGC0LDRgjo8L3A+PGRpdj4ke3Njb3JlfTwvZGl2PmA7XHJcbiAgZmluaXNoVHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluaXNoU2NvcmUpO1xyXG5cclxuICAvLyBpbml0IGZpbmlzaCB0cmFpbmluZyBidXR0b25cclxuICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBmaW5pc2hCdXR0b24uY2xhc3NMaXN0LmFkZCgndHJhaW5pbmdfX2J1dHRvbicsICdidG4nKTtcclxuICBmaW5pc2hCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT7QktGL0LnRgtC4JztcclxuICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRyYWluaW5nSGFuZGxlcik7XHJcbiAgZmluaXNoVHJhaW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluaXNoQnV0dG9uKTtcclxuXHJcbiAgZ2FtZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluaXNoVHJhaW5pbmdDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJHYW1lKGdhbWVTdGF0ZSkge1xyXG4gIGNvbnN0IHsgc3RhdHVzLCBnYW1lQ29udGFpbmVyLCB0cmFpbmluZ0luZm8gfSA9IGdhbWVTdGF0ZTtcclxuICBpZiAoc3RhdHVzID09PSBnYW1lU3RhdHVzLnN0YXJ0KSB7XHJcbiAgICBnYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcmVuZGVySW5mbyhnYW1lU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IG1hdHJpeENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWF0cml4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYWluaW5nX19nYW1lJyk7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hdHJpeENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGluaXRIZWxwQnV0dG9ucygpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gaW5pdE92ZXJsYXkodHJhaW5pbmdJbmZvLnJ1bGVzKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheUNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gaW5pdCBhdWRpb1xyXG4gICAgY29uc3QgYXVkaW8gPSBpbml0QXVkaW8oKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXVkaW8pO1xyXG5cclxuICAgIHN0YXJ0VGltZXIoZ2FtZVN0YXRlLmR1cmF0aW9uLCByZXN1bHQudGltZXJDb250YWluZXIsICgpID0+IHsgc3RvcEdhbWUoZ2FtZVN0YXRlKTsgfSk7XHJcbiAgICByZW5kZXJNYXRyaXgoeyAuLi5nYW1lU3RhdGUsIGNvbnRhaW5lcjogbWF0cml4Q29udGFpbmVyIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHYW1lKGxldmVsLCBnYW1lQ29udGFpbmVyLCB0cmFpbmluZ0luZm8sIGR1cmF0aW9uID0gNjApIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2NvcmU6IDAsXHJcbiAgICBsZXZlbCxcclxuICAgIHN0YXR1czogZ2FtZVN0YXR1cy5pbml0LFxyXG4gICAgZ2FtZUNvbnRhaW5lcixcclxuICAgIG1hdHJpeDoge30sXHJcbiAgICBkdXJhdGlvbixcclxuICAgIHRyYWluaW5nSW5mbyxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKGdhbWVPYmopIHtcclxuICBjb25zdCBtYXRyaXggPSBnZW5lcmF0ZU1hdHJpeChnYW1lT2JqLmxldmVsKTtcclxuICBjb25zdCBuZXdHYW1lU3RhdGUgPSB7IC4uLmdhbWVPYmosIHN0YXR1czogZ2FtZVN0YXR1cy5zdGFydCwgbWF0cml4IH07XHJcbiAgcmVuZGVyR2FtZShuZXdHYW1lU3RhdGUpO1xyXG5cclxuICByZXR1cm4gbmV3R2FtZVN0YXRlO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBtYWtlTWF0cml4KHNpemUsIGluaXRWYWx1ZSA9IFtdKSB7XHJcbiAgY29uc3QgbmV3QXJyID0gQXJyYXkoc2l6ZSAqKiAyIC0gaW5pdFZhbHVlLmxlbmd0aCkuZmlsbCgwKTtcclxuICByZXR1cm4ge1xyXG4gICAgc3RvcmU6IGluaXRWYWx1ZS5jb25jYXQobmV3QXJyKSxcclxuICAgIHNpemUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGwobWF0cml4LCB4LCB5KSB7XHJcbiAgY29uc3QgeyBzdG9yZSwgc2l6ZSB9ID0gbWF0cml4O1xyXG4gIHJldHVybiBzdG9yZVt4ICsgeSAqIHNpemVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2VsbChtYXRyaXgsIHZhbHVlLCB4LCB5KSB7XHJcbiAgY29uc3QgeyBzdG9yZSwgc2l6ZSB9ID0gbWF0cml4O1xyXG4gIHN0b3JlW3ggKyB5ICogc2l6ZV0gPSB2YWx1ZTtcclxuICByZXR1cm4geyBzdG9yZSwgc2l6ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZU1hdHJpeChtYXRyaXgpIHtcclxuICBjb25zdCB7IHN0b3JlLCBzaXplIH0gPSBtYXRyaXg7XHJcbiAgc3RvcmUuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICByZXR1cm4geyBzdG9yZSwgc2l6ZSB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=