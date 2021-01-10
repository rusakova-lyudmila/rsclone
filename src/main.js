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
  // init h1

  var pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Smart Kids';
  pageHeader.appendChild(pageHeading); // init header buttons

  var headerButtons = document.createElement('div');
  headerButtons.classList.add('header__buttons');
  pageHeader.appendChild(headerButtons); // init main container

  var mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  document.body.appendChild(mainContainer); // insert cards to main container

  /* const cardsContainer = initCards();
  mainContainer.appendChild(cardsContainer); */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Fzc2V0cy9qcy9pbml0UGFnZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiaW5pdFBhZ2UiLCJwYWdlSGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicGFnZUhlYWRpbmciLCJ0ZXh0Q29udGVudCIsImhlYWRlckJ1dHRvbnMiLCJtYWluQ29udGFpbmVyIiwicGFnZUZvb3RlciIsInBhZ2VJbmZvQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwicGFnZUxvZ29Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEMsQ0FFQTs7QUFDQUEsa0RBQVEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sU0FBU0EsUUFBVCxHQUFvQjtBQUNqQztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQW5CO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsa0JBQXpCO0FBQ0FILFVBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCTixVQUExQixFQUppQyxDQU1qQzs7QUFDQTtBQUNGO0FBRUU7O0FBQ0EsTUFBTU8sV0FBVyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQUssYUFBVyxDQUFDQyxXQUFaLEdBQTBCLFlBQTFCO0FBQ0FSLFlBQVUsQ0FBQ00sV0FBWCxDQUF1QkMsV0FBdkIsRUFiaUMsQ0FlakM7O0FBQ0EsTUFBTUUsYUFBYSxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDQU8sZUFBYSxDQUFDTixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixpQkFBNUI7QUFDQUosWUFBVSxDQUFDTSxXQUFYLENBQXVCRyxhQUF2QixFQWxCaUMsQ0FvQmpDOztBQUNBLE1BQU1DLGFBQWEsR0FBR1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FRLGVBQWEsQ0FBQ1AsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZ0JBQTVCO0FBQ0FILFVBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCSSxhQUExQixFQXZCaUMsQ0F5QmpDOztBQUNBO0FBQ0Y7QUFFRTs7QUFDQSxNQUFNQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFuQjtBQUNBUyxZQUFVLENBQUNSLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGtCQUF6QixFQUE2QyxRQUE3QztBQUNBSCxVQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkssVUFBMUIsRUFoQ2lDLENBa0NqQzs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTFCO0FBQ0FVLG1CQUFpQixDQUFDVCxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsY0FBaEM7QUFDQVEsbUJBQWlCLENBQUNDLFNBQWxCLEdBQThCLHFLQUE5QjtBQUNBRixZQUFVLENBQUNMLFdBQVgsQ0FBdUJNLGlCQUF2QixFQXRDaUMsQ0F3Q2pDOztBQUNBLE1BQU1FLGlCQUFpQixHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7QUFDQVksbUJBQWlCLENBQUNYLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxjQUFoQztBQUNBVSxtQkFBaUIsQ0FBQ0QsU0FBbEIsR0FBOEIsK0dBQTlCO0FBQ0FGLFlBQVUsQ0FBQ0wsV0FBWCxDQUF1QlEsaUJBQXZCO0FBQ0QsQzs7Ozs7O1VDN0NEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRQYWdlIGZyb20gJy4vaW5pdFBhZ2UnO1xyXG5cclxuLy8gaW5pdCBtYWluIHBhZ2VcclxuaW5pdFBhZ2UoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XHJcbiAgLy8gaW5pdCBoZWFkZXJcclxuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcclxuXHJcbiAgLy8gaW5zZXJ0IG5hdiBtZW51IHRvIGhlYWRlclxyXG4gIC8qIGNvbnN0IG5hdk1lbnUgPSBpbml0TWVudSgpO1xyXG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7ICovXHJcblxyXG4gIC8vIGluaXQgaDFcclxuICBjb25zdCBwYWdlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcGFnZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnU21hcnQgS2lkcyc7XHJcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChwYWdlSGVhZGluZyk7XHJcblxyXG4gIC8vIGluaXQgaGVhZGVyIGJ1dHRvbnNcclxuICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J1dHRvbnMnKTtcclxuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckJ1dHRvbnMpO1xyXG5cclxuICAvLyBpbml0IG1haW4gY29udGFpbmVyXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gaW5zZXJ0IGNhcmRzIHRvIG1haW4gY29udGFpbmVyXHJcbiAgLyogY29uc3QgY2FyZHNDb250YWluZXIgPSBpbml0Q2FyZHMoKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTsgKi9cclxuXHJcbiAgLy8gaW5pdCBmb290ZXJcclxuICBjb25zdCBwYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgcGFnZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJywgJ2Zvb3RlcicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUZvb3Rlcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGF1dGhvciBpbmZvXHJcbiAgY29uc3QgcGFnZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX2luZm8nKTtcclxuICBwYWdlSW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnMjAyMCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3J1c2Frb3ZhLWx5dWRtaWxhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UnVzYWtvdmEgTHl1ZG1pbGE8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NuYWlwcDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ZdXJ5IEhhbHVzaGtvPC9hPic7XHJcbiAgcGFnZUZvb3Rlci5hcHBlbmRDaGlsZChwYWdlSW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIGluaXQgZm9vdGVyIGxvZ29cclxuICBjb25zdCBwYWdlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fbG9nbycpO1xyXG4gIHBhZ2VMb2dvQ29udGFpbmVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL3JzX3NjaG9vbF9sb2dvLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiPjwvYT4nO1xyXG4gIHBhZ2VGb290ZXIuYXBwZW5kQ2hpbGQocGFnZUxvZ29Db250YWluZXIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=