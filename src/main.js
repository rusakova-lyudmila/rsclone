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
; // init main page

(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.default)();

/***/ }),

/***/ "./src/assets/js/initPage.js":
/*!***********************************!*\
  !*** ./src/assets/js/initPage.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initPage
/* harmony export */ });
function initPage() {
  // init header
  var pageHeader = document.createElement('header');
  pageHeader.classList.add('header-container');
  document.body.appendChild(pageHeader); // insert nav menu to header

  /* const navMenu = initMenu();
  pageHeader.appendChild(navMenu); */
  // init main container

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0UGFnZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiaW5pdFBhZ2UiLCJwYWdlSGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwibWFpbkNvbnRhaW5lciIsInBhZ2VIZWFkaW5nIiwidGV4dENvbnRlbnQiLCJwYWdlU3ViSGVhZGluZyIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b25Mb2dpbiIsInNldEF0dHJpYnV0ZSIsInJlZ2lzdGVyTG9naW4iLCJwYWdlRm9vdGVyIiwicGFnZUluZm9Db250YWluZXIiLCJpbm5lckhUTUwiLCJwYWdlTG9nb0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQyxDQUVBOztBQUNBQSxrREFBUSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQkFBekI7QUFDQUgsVUFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJOLFVBQTFCLEVBSmlDLENBTWpDOztBQUNBO0FBQ0Y7QUFFRTs7QUFDQSxNQUFNTyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUF0QjtBQUNBSyxlQUFhLENBQUNKLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUE1QjtBQUNBSCxVQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkMsYUFBMUIsRUFiaUMsQ0FlakM7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQU0sYUFBVyxDQUFDQyxXQUFaLEdBQTBCLFlBQTFCO0FBQ0FGLGVBQWEsQ0FBQ0QsV0FBZCxDQUEwQkUsV0FBMUIsRUFsQmlDLENBb0JqQzs7QUFDQSxNQUFNRSxjQUFjLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUF2QjtBQUNBUSxnQkFBYyxDQUFDRCxXQUFmLEdBQTZCLDREQUE3QjtBQUNBRixlQUFhLENBQUNELFdBQWQsQ0FBMEJJLGNBQTFCLEVBdkJpQyxDQXlCakM7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtBQUNBUyxrQkFBZ0IsQ0FBQ1IsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLG1CQUEvQjtBQUNBRyxlQUFhLENBQUNELFdBQWQsQ0FBMEJLLGdCQUExQixFQTVCaUMsQ0E4QmpDOztBQUNBLE1BQU1DLFdBQVcsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0FVLGFBQVcsQ0FBQ1QsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsS0FBMUIsRUFBaUMsUUFBakMsRUFBMkMsV0FBM0M7QUFDQVEsYUFBVyxDQUFDQyxZQUFaLENBQXlCLE1BQXpCLEVBQWlDLFFBQWpDO0FBQ0FELGFBQVcsQ0FBQ0gsV0FBWixHQUEwQixlQUExQjtBQUNBRSxrQkFBZ0IsQ0FBQ0wsV0FBakIsQ0FBNkJNLFdBQTdCLEVBbkNpQyxDQXFDakM7O0FBQ0EsTUFBTUUsYUFBYSxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdEI7QUFDQVksZUFBYSxDQUFDWCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixLQUE1QixFQUFtQyxRQUFuQyxFQUE2QyxjQUE3QztBQUNBVSxlQUFhLENBQUNELFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsUUFBbkM7QUFDQUMsZUFBYSxDQUFDTCxXQUFkLEdBQTRCLG9CQUE1QjtBQUNBRSxrQkFBZ0IsQ0FBQ0wsV0FBakIsQ0FBNkJRLGFBQTdCLEVBMUNpQyxDQTRDakM7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbkI7QUFDQWEsWUFBVSxDQUFDWixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQkFBekIsRUFBNkMsUUFBN0M7QUFDQUgsVUFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJTLFVBQTFCLEVBL0NpQyxDQWlEakM7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUExQjtBQUNBYyxtQkFBaUIsQ0FBQ2IsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLGNBQWhDO0FBQ0FZLG1CQUFpQixDQUFDQyxTQUFsQixHQUE4QixxS0FBOUI7QUFDQUYsWUFBVSxDQUFDVCxXQUFYLENBQXVCVSxpQkFBdkIsRUFyRGlDLENBdURqQzs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUExQjtBQUNBZ0IsbUJBQWlCLENBQUNmLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxjQUFoQztBQUNBYyxtQkFBaUIsQ0FBQ0QsU0FBbEIsR0FBOEIsK0dBQTlCO0FBQ0FGLFlBQVUsQ0FBQ1QsV0FBWCxDQUF1QlksaUJBQXZCO0FBQ0QsQzs7Ozs7O1VDNUREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRQYWdlIGZyb20gJy4vaW5pdFBhZ2UnO1xyXG5cclxuLy8gaW5pdCBtYWluIHBhZ2VcclxuaW5pdFBhZ2UoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XHJcbiAgLy8gaW5pdCBoZWFkZXJcclxuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcclxuXHJcbiAgLy8gaW5zZXJ0IG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIC8qIGNvbnN0IG5hdk1lbnUgPSBpbml0TWVudSgpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7ICovXHJcblxyXG4gIC8vIGluaXQgbWFpbiBjb250YWluZXJcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG5cclxuICAvLyBpbml0IGgxXHJcbiAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ1NtYXJ0IEtpZHMnO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xyXG5cclxuICAvLyBpbml0IGgyXHJcbiAgY29uc3QgcGFnZVN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHBhZ2VTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LDQttC10YDRiyDQtNC70Y8g0YDQsNC30LLQuNGC0LjRjyDQv9Cw0LzRj9GC0LgsINCy0L3QuNC80LDQvdC40Y8sINC70L7Qs9C40LrQuCDQuCDQvNGL0YjQu9C10L3QuNGPJztcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VTdWJIZWFkaW5nKTtcclxuXHJcbiAgLy8gaW5pdCBidXR0b25zIGNvbnRhaW5lclxyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBsb2dpbiBidXR0b25cclxuICBjb25zdCBidXR0b25Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tbGcnLCAnYnRuLWxvZ2luJyk7XHJcbiAgYnV0dG9uTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkxvZ2luLnRleHRDb250ZW50ID0gJ9Ci0YDQtdC90LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkxvZ2luKTtcclxuXHJcbiAgLy8gaW5pdCByZWdpc3RlciBidXR0b25cclxuICBjb25zdCByZWdpc3RlckxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVnaXN0ZXJMb2dpbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWxnJywgJ2J0bi1yZWdpc3RlcicpO1xyXG4gIHJlZ2lzdGVyTG9naW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIHJlZ2lzdGVyTG9naW4udGV4dENvbnRlbnQgPSAn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZ2lzdGVyTG9naW4pO1xyXG5cclxuICAvLyBpbml0IGZvb3RlclxyXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBwYWdlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInLCAnZm9vdGVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlRm9vdGVyKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXIgYXV0aG9yIGluZm9cclxuICBjb25zdCBwYWdlSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9faW5mbycpO1xyXG4gIHBhZ2VJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcyMDIwIMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnVzYWtvdmEtbHl1ZG1pbGFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5SdXNha292YSBMeXVkbWlsYTwvYT4sIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc25haXBwMVwiIHRhcmdldD1cIl9ibGFua1wiPll1cnkgSGFsdXNoa288L2E+JztcclxuICBwYWdlRm9vdGVyLmFwcGVuZENoaWxkKHBhZ2VJbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5pdCBmb290ZXIgbG9nb1xyXG4gIGNvbnN0IHBhZ2VMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19sb2dvJyk7XHJcbiAgcGFnZUxvZ29Db250YWluZXIuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cImFzc2V0cy9pbWcvcnNfc2Nob29sX2xvZ28uc3ZnXCIgYWx0PVwiUlMgU2Nob29sXCI+PC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlTG9nb0NvbnRhaW5lcik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==