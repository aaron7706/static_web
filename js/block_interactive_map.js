/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/block_interactive_map/block_interactive_map.js":
/*!*******************************************************************!*\
  !*** ./components/block_interactive_map/block_interactive_map.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// block_interactive_map.js


(function ($) {
  // Map Bootstrap tooltip setup
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  }); // Map toogle assets

  $(".map-location").on("click", function () {
    // Map pins class toggle
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".map-location").removeClass("active");
      $(this).addClass("active");
    } // Characters filter toggle


    var character_filter = $(this).attr("data-class");

    if ($("." + character_filter).hasClass("active")) {} else {
      $(".character-filter").removeClass("active");
      $("." + character_filter).addClass("active");
    }
  }); // Remove classes when click outside

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.map-location').length) {
      $(".map-location").removeClass("active");
      $(".character-filter").removeClass("active");
    }
  });
})(jQuery);

/***/ }),

/***/ 11:
/*!*************************************************************************!*\
  !*** multi ./components/block_interactive_map/block_interactive_map.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antoniobragaalmeida/Documents/Websites/2022aristocrat.local/wp-content/themes/aristocrat-wpms/wp-content/themes/aristocrat-2021/components/block_interactive_map/block_interactive_map.js */"./components/block_interactive_map/block_interactive_map.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9ja19pbnRlcmFjdGl2ZV9tYXAvYmxvY2tfaW50ZXJhY3RpdmVfbWFwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b29sdGlwTGlzdCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJib290c3RyYXAiLCJUb29sdGlwIiwicG9wb3ZlclRyaWdnZXJMaXN0IiwicG9wb3Zlckxpc3QiLCJwb3BvdmVyVHJpZ2dlckVsIiwiUG9wb3ZlciIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2hhcmFjdGVyX2ZpbHRlciIsImF0dHIiLCJldmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFFQyxXQUFTQSxDQUFULEVBQVk7QUFHWDtBQUNBLE1BQUlDLGtCQUFrQixHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLDRCQUExQixDQUFkLENBQXpCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHTCxrQkFBa0IsQ0FBQ00sR0FBbkIsQ0FBdUIsVUFBVUMsZ0JBQVYsRUFBNEI7QUFDbkUsV0FBTyxJQUFJQyxTQUFTLENBQUNDLE9BQWQsQ0FBc0JGLGdCQUF0QixDQUFQO0FBQ0QsR0FGaUIsQ0FBbEI7QUFJQSxNQUFJRyxrQkFBa0IsR0FBRyxHQUFHVCxLQUFILENBQVNDLElBQVQsQ0FBY0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiw0QkFBMUIsQ0FBZCxDQUF6QjtBQUNBLE1BQUlPLFdBQVcsR0FBR0Qsa0JBQWtCLENBQUNKLEdBQW5CLENBQXVCLFVBQVVNLGdCQUFWLEVBQTRCO0FBQ25FLFdBQU8sSUFBSUosU0FBUyxDQUFDSyxPQUFkLENBQXNCRCxnQkFBdEIsQ0FBUDtBQUNELEdBRmlCLENBQWxCLENBVlcsQ0FlWDs7QUFDQWIsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmUsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBOEIsWUFBVztBQUV2QztBQUNBLFFBQUdmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLFFBQVIsQ0FBaUIsUUFBakIsQ0FBSCxFQUE4QjtBQUM1QmhCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlCLFdBQVIsQ0FBb0IsUUFBcEI7QUFDRCxLQUZELE1BRU07QUFDSmpCLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpQixXQUFuQixDQUErQixRQUEvQjtBQUNBakIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsUUFBUixDQUFpQixRQUFqQjtBQUNELEtBUnNDLENBVXZDOzs7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBR25CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9CLElBQVIsQ0FBYSxZQUFiLENBQXZCOztBQUNBLFFBQUdwQixDQUFDLENBQUMsTUFBTW1CLGdCQUFQLENBQUQsQ0FBMEJILFFBQTFCLENBQW1DLFFBQW5DLENBQUgsRUFBZ0QsQ0FDL0MsQ0FERCxNQUNNO0FBQ0poQixPQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmlCLFdBQXZCLENBQW1DLFFBQW5DO0FBQ0FqQixPQUFDLENBQUMsTUFBTW1CLGdCQUFQLENBQUQsQ0FBMEJELFFBQTFCLENBQW1DLFFBQW5DO0FBQ0Q7QUFFRixHQWxCRCxFQWhCVyxDQXFDWDs7QUFDQWxCLEdBQUMsQ0FBQ0ksUUFBRCxDQUFELENBQVlXLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQVNNLEtBQVQsRUFBZ0I7QUFDdEMsUUFBSSxDQUFDckIsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDQyxNQUFQLENBQUQsQ0FBZ0JDLE9BQWhCLENBQXdCLGVBQXhCLEVBQXlDQyxNQUE5QyxFQUF1RDtBQUNyRHhCLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpQixXQUFuQixDQUErQixRQUEvQjtBQUNBakIsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJpQixXQUF2QixDQUFtQyxRQUFuQztBQUNEO0FBQ0YsR0FMRDtBQU9ELENBN0NBLEVBNkNDUSxNQTdDRCxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsd0IiLCJmaWxlIjoiYmxvY2tfaW50ZXJhY3RpdmVfbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcbiIsIi8vIGJsb2NrX2ludGVyYWN0aXZlX21hcC5qc1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4oZnVuY3Rpb24oJCkge1xuXG4gIFxuICAvLyBNYXAgQm9vdHN0cmFwIHRvb2x0aXAgc2V0dXBcbiAgdmFyIHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKVxuICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XG4gICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxuICB9KVxuXG4gIHZhciBwb3BvdmVyVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nKSlcbiAgdmFyIHBvcG92ZXJMaXN0ID0gcG9wb3ZlclRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAocG9wb3ZlclRyaWdnZXJFbCkge1xuICAgIHJldHVybiBuZXcgYm9vdHN0cmFwLlBvcG92ZXIocG9wb3ZlclRyaWdnZXJFbClcbiAgfSlcbiAgXG4gIFxuICAvLyBNYXAgdG9vZ2xlIGFzc2V0c1xuICAkKFwiLm1hcC1sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLy8gTWFwIHBpbnMgY2xhc3MgdG9nZ2xlXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7ICAgIFxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTsgICAgXG4gICAgfSBlbHNleyAgICBcbiAgICAgICQoXCIubWFwLWxvY2F0aW9uXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpOyAgICBcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICAgIFxuICAgIH1cblxuICAgIC8vIENoYXJhY3RlcnMgZmlsdGVyIHRvZ2dsZVxuICAgIHZhciBjaGFyYWN0ZXJfZmlsdGVyID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jbGFzc1wiKTtcbiAgICBpZigkKFwiLlwiICsgY2hhcmFjdGVyX2ZpbHRlcikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpeyAgICBcbiAgICB9IGVsc2V7ICAgIFxuICAgICAgJChcIi5jaGFyYWN0ZXItZmlsdGVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpOyAgICBcbiAgICAgICQoXCIuXCIgKyBjaGFyYWN0ZXJfZmlsdGVyKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgICAgXG4gICAgfVxuICAgIFxuICB9KTtcblxuICBcbiAgLy8gUmVtb3ZlIGNsYXNzZXMgd2hlbiBjbGljayBvdXRzaWRlXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCEkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm1hcC1sb2NhdGlvbicpLmxlbmd0aCkgIHtcbiAgICAgICQoXCIubWFwLWxvY2F0aW9uXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIi5jaGFyYWN0ZXItZmlsdGVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpOyAgICBcbiAgICB9XG4gIH0pO1xuXG59KGpRdWVyeSkpOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=