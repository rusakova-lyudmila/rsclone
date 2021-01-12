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
/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ "./src/assets/js/initPage.js");
/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleMenu */ "./src/assets/js/toggleMenu.js");
;
 // init main page

(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.default)(); // open and close nav menu

(0,_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();

/***/ }),

/***/ "./src/assets/js/initMenu.js":
/*!***********************************!*\
  !*** ./src/assets/js/initMenu.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initMenu
/* harmony export */ });
var menuItems = {
  main: 'Главная',
  training: 'Тренажеры',
  statistic: 'Статистика'
};
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
  // const activePageName = getActivePageName();


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
    menuItem.classList.add(mobile ? 'menu__item' : 'nav-item');
    /* if (item === activePageName) {
      menuItem.classList.add('menu__item_active');
    } */

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
    menuItemLink.textContent = menuItems[item]; // menuItemLink.addEventListener('click', clickHandler);

    menuItem.appendChild(menuItemLink);
  });
  return navMenu;
}

/***/ }),

/***/ "./src/assets/js/initPage.js":
/*!***********************************!*\
  !*** ./src/assets/js/initPage.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initPage
/* harmony export */ });
/* harmony import */ var _initMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMenu */ "./src/assets/js/initMenu.js");
;
function initPage() {
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
  document.body.appendChild(mainContainer); // init h1

  var pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Smart Kids';
  mainContainer.appendChild(pageHeading); // init h2

  var pageSubHeading = document.createElement('h2');
  pageSubHeading.textContent = 'Тренажеры для развития памяти, внимания, логики и мышления';
  mainContainer.appendChild(pageSubHeading); // init buttons container

  var buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  mainContainer.appendChild(buttonsContainer); // init login button

  var buttonLogin = document.createElement('button');
  buttonLogin.classList.add('btn', 'btn-lg', 'btn-login');
  buttonLogin.setAttribute('type', 'button');
  buttonLogin.textContent = 'Тренироваться';
  buttonsContainer.appendChild(buttonLogin); // init register button

  var registerLogin = document.createElement('button');
  registerLogin.classList.add('btn', 'btn-lg', 'btn-register');
  registerLogin.setAttribute('type', 'button');
  registerLogin.textContent = 'Зарегистрироваться';
  buttonsContainer.appendChild(registerLogin); // init footer

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

/***/ "./src/assets/js/toggleMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/toggleMenu.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toggleMenu
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import { getActivePageName } from './state';
function setActiveMenuItem() {
  var activePageName = getActivePageName();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0TWVudS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0UGFnZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy90b2dnbGVNZW51LmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbml0UGFnZSIsInRvZ2dsZU1lbnUiLCJtZW51SXRlbXMiLCJtYWluIiwidHJhaW5pbmciLCJzdGF0aXN0aWMiLCJpbml0TWVudSIsIm1vYmlsZSIsIm5hdk1lbnUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZW51VG9nZ2xlIiwiYXBwZW5kQ2hpbGQiLCJtZW51SWNvbiIsInRleHRDb250ZW50IiwibWVudUxpc3QiLCJtZW51Q29udGFpbmVyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpdGVtIiwibWVudUl0ZW0iLCJkYXRhc2V0IiwibmFtZSIsIm1lbnVJdGVtSWNvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibWVudUl0ZW1MaW5rIiwic2V0QXR0cmlidXRlIiwic2VjdGlvbiIsInBhZ2VIZWFkZXIiLCJib2R5IiwibmF2TW9iaWxlTWVudSIsIm1haW5Db250YWluZXIiLCJwYWdlSGVhZGluZyIsInBhZ2VTdWJIZWFkaW5nIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbkxvZ2luIiwicmVnaXN0ZXJMb2dpbiIsInBhZ2VGb290ZXIiLCJwYWdlSW5mb0NvbnRhaW5lciIsImlubmVySFRNTCIsInBhZ2VMb2dvQ29udGFpbmVyIiwic2V0QWN0aXZlTWVudUl0ZW0iLCJhY3RpdmVQYWdlTmFtZSIsImdldEFjdGl2ZVBhZ2VOYW1lIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51QmFja2dyb3VuZCIsIm92ZXJsYXlQYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGUiLCJ0ZXh0TWVudUljb24iLCJ0YXJnZXQiLCJtZW51SXRlbUljb25zIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBQSxrREFBUSxHLENBRVI7O0FBQ0FDLG9EQUFVLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BWLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsTUFBSSxFQUFFLFNBRFU7QUFFaEJDLFVBQVEsRUFBRSxXQUZNO0FBR2hCQyxXQUFTLEVBQUU7QUFISyxDQUFsQjtBQU1lLFNBQVNDLFFBQVQsR0FBa0M7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTztBQUMvQztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCOztBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNWQyxXQUFPLENBQUNHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xKLFdBQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0Msa0JBQWhDO0FBQ0Q7O0FBRUQsTUFBSUwsTUFBSixFQUFZO0FBQ1Y7QUFDQSxRQUFNTSxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBRyxjQUFVLENBQUNGLFNB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QWhDO0FBQ0FHLGlCQUFXLENBQUN6QyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUVBRyxjQUFRLENBQUNDLFdBQVQsR0FBdUIsTUFBdkI7QUFDRDtBQUNGLEdBWkQ7QUFhRCxDOzs7Ozs7VUNuREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdFBhZ2UgZnJvbSAnLi9pbml0UGFnZSc7XHJcbmltcG9ydCB0b2dnbGVNZW51IGZyb20gJy4vdG9nZ2xlTWVudSc7XHJcblxyXG4vLyBpbml0IG1haW4gcGFnZVxyXG5pbml0UGFnZSgpO1xyXG5cclxuLy8gb3BlbiBhbmQgY2xvc2UgbmF2IG1lbnVcclxudG9nZ2xlTWVudSgpO1xyXG4iLCJjb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgbWFpbjogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICB0cmFpbmluZzogJ9Ci0YDQtdC90LDQttC10YDRiycsXHJcbiAgc3RhdGlzdGljOiAn0KHRgtCw0YLQuNGB0YLQuNC60LAnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1lbnUobW9iaWxlID0gZmFsc2UpIHtcclxuICAvLyBpbml0IG5hdiBtZW51XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicsICduYXZiYXItZXhwYW5kLWxnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICAvLyBpbml0IG1lbnUgdG9nZ2xlXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RvZ2dsZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcclxuXHJcbiAgICAvLyBpbml0IG1lbnUgaWNvblxyXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pY29uJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdCBtZW51IGxpc3RcclxuICAvLyBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGlmIChtb2JpbGUpIHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QnKTtcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpbml0IG1lbnUgY29udGFpbmVyXHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJywgJ25hdmJhci1jb2xsYXBzZScpO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2JywgJ21yLWF1dG8nKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWVudUl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyBpbml0IG1lbnUgbGlzdCBpdGVtXHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKG1vYmlsZSA/ICdtZW51X19pdGVtJyA6ICduYXYtaXRlbScpO1xyXG4gICAgLyogaWYgKGl0ZW0gPT09IGFjdGl2ZVBhZ2VOYW1lKSB7XHJcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9ICovXHJcbiAgICBtZW51SXRlbS5kYXRhc2V0Lm5hbWUgPSBpdGVtO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG5cclxuICAgIGlmIChtb2JpbGUpIHtcclxuICAgICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbSBpY29uXHJcbiAgICAgIGNvbnN0IG1lbnVJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgbWVudUl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2ljb24nKTtcclxuICAgICAgbWVudUl0ZW1JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbi0ke2l0ZW19LnBuZ1wiKWA7XHJcbiAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5pdCBtZW51IGxpc3QgaXRlbSBsaW5rXHJcbiAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51SXRlbUxpbmsuY2xhc3NMaXN0LmFkZChtb2JpbGUgPyAnbWVudV9fbGluaycgOiAnbmF2LWxpbmsnKTtcclxuICAgIG1lbnVJdGVtTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aXRlbX1gKTtcclxuICAgIG1lbnVJdGVtTGluay5kYXRhc2V0LnNlY3Rpb24gPSBpdGVtO1xyXG4gICAgbWVudUl0ZW1MaW5rLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2l0ZW1dO1xyXG4gICAgLy8gbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtTGluayk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuYXZNZW51O1xyXG59XHJcbiIsImltcG9ydCBpbml0TWVudSBmcm9tICcuL2luaXRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRQYWdlKCkge1xyXG4gIC8vIGluaXQgaGVhZGVyXHJcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XHJcblxyXG4gIC8vIGluc2VydCBuYXYgbWVudSB0byBoZWFkZXJcclxuICBjb25zdCBuYXZNZW51ID0gaW5pdE1lbnUoKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xyXG5cclxuICAvLyBpbnNlcnQgbW9iaWxlIG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIGNvbnN0IG5hdk1vYmlsZU1lbnUgPSBpbml0TWVudSh0cnVlKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdk1vYmlsZU1lbnUpO1xyXG5cclxuICAvLyBpbml0IG1haW4gY29udGFpbmVyXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBoMVxyXG4gIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBwYWdlSGVhZGluZy50ZXh0Q29udGVudCA9ICdTbWFydCBLaWRzJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBoMlxyXG4gIGNvbnN0IHBhZ2VTdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwYWdlU3ViSGVhZGluZy50ZXh0Q29udGVudCA9ICfQotGA0LXQvdCw0LbQtdGA0Ysg0LTQu9GPINGA0LDQt9Cy0LjRgtC40Y8g0L/QsNC80Y/RgtC4LCDQstC90LjQvNCw0L3QuNGPLCDQu9C+0LPQuNC60Lgg0Lgg0LzRi9GI0LvQtdC90LjRjyc7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlU3ViSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgYnV0dG9ucyBjb250YWluZXJcclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgbG9naW4gYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1sb2dpbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBidXR0b25Mb2dpbi50ZXh0Q29udGVudCA9ICfQotGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Mb2dpbik7XHJcblxyXG4gIC8vIGluaXQgcmVnaXN0ZXIgYnV0dG9uXHJcbiAgY29uc3QgcmVnaXN0ZXJMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1sZycsICdidG4tcmVnaXN0ZXInKTtcclxuICByZWdpc3RlckxvZ2luLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICByZWdpc3RlckxvZ2luLnRleHRDb250ZW50ID0gJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWdpc3RlckxvZ2luKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXJcclxuICBjb25zdCBwYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgcGFnZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJywgJ2Zvb3RlcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUZvb3Rlcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGF1dGhvciBpbmZvXHJcbiAgY29uc3QgcGFnZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2luZm8nKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnMjAyMCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3J1c2Frb3ZhLWx5dWRtaWxhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UnVzYWtvdmEgTHl1ZG1pbGE8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NuYWlwcDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ZdXJ5IEhhbHVzaGtvPC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlSW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGxvZ29cclxuICBjb25zdCBwYWdlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fbG9nbycpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL3JzX3NjaG9vbF9sb2dvLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiPjwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUxvZ29Db250YWluZXIpO1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IGdldEFjdGl2ZVBhZ2VOYW1lIH0gZnJvbSAnLi9zdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVNZW51SXRlbSgpIHtcclxuICBjb25zdCBhY3RpdmVQYWdlTmFtZSA9IGdldEFjdGl2ZVBhZ2VOYW1lKCk7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyldO1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0Lm5hbWUgPT09IGFjdGl2ZVBhZ2VOYW1lKSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faWNvbicpO1xyXG5cclxuICBjb25zdCBtZW51QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21lbnVfb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBvdmVybGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknLCAnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5UGFnZSk7XHJcblxyXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgIG92ZXJsYXlQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHRNZW51SWNvbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSB0ZXh0TWVudUljb24gPT09ICdtZW51JyA/ICdjbG9zZScgOiAnbWVudSc7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudUl0ZW0oKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1JY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua19faWNvbicpXTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAobWVudUljb24udGV4dENvbnRlbnQgPT09ICdjbG9zZSdcclxuICAgICAgJiYgZS50YXJnZXQgIT09IG1lbnVCYWNrZ3JvdW5kXHJcbiAgICAgICYmIGUudGFyZ2V0ICE9PSBtZW51SWNvblxyXG4gICAgICAmJiAhbWVudUl0ZW1JY29ucy5pbmNsdWRlcyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBtZW51TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X3RyYW5zZm9ybWVkJyk7XHJcbiAgICAgIG1lbnVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfdHJhbnNmb3JtZWQnKTtcclxuICAgICAgb3ZlcmxheVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hc3NldHMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9