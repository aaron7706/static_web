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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/block_hero_video/block_hero_video.js":
/*!*********************************************************!*\
  !*** ./components/block_hero_video/block_hero_video.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


(function ($) {
  // Remove Video
  //if (window.matchMedia("(max-width: 768px)").matches) {
  //$('.block_hero_video-wrapper.has-video-mobile .video-desktop').remove();
  //}  
  //if (window.matchMedia("(min-width: 768px)").matches) {
  //$('.block_hero_video-wrapper.has-video-mobile .video-mobile').remove();
  //} 
  // Loop through Wrappers
  $(document).ready(function () {
    $(".block-shared-hero-video-container").each(function () {
      var wrapper = this;
      $(wrapper).find(".play-pause-buttons").on("click", function () {
        playPauseVideo(wrapper);
      });
    });
    $(".block-shared-hero-video-container").on("click", ".play-pause-buttons", function () {
      if ($(this).closest('.block-shared-hero-video-container').hasClass("active")) {
        $(this).closest('.block-shared-hero-video-container').removeClass("active");
      } else {
        $('.block-shared-hero-video-container').removeClass("active");
        $(this).closest('.block-shared-hero-video-container').addClass("active");
      }
    });
  }); // Play pause logic

  function playPauseVideo(video) {
    var active = false;

    if ($(video).hasClass("active")) {
      active = true;
    }

    var playButton = $(video).find(".video-play");
    var pauseButton = $(video).find(".video-pause");
    var player = new Vimeo.Player($(video).find(".vimeo-iframe-wrapper iframe"));

    if (active) {
      pauseVideo(player, playButton, pauseButton, video);
    } else {
      playVideo(player, playButton, pauseButton, video);
    }
  } // Trigger Play function


  function playVideo(player, playButton, pauseButton, video) {
    player.play();
  } // Trigger Pause function


  function pauseVideo(player, playButton, pauseButton, video) {
    player.pause();
  }
})(jQuery);

/***/ }),

/***/ 10:
/*!***************************************************************!*\
  !*** multi ./components/block_hero_video/block_hero_video.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antoniobragaalmeida/Documents/Websites/2022aristocrat.local/wp-content/themes/aristocrat-wpms/wp-content/themes/aristocrat-2021/components/block_hero_video/block_hero_video.js */"./components/block_hero_video/block_hero_video.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9ja19oZXJvX3ZpZGVvL2Jsb2NrX2hlcm9fdmlkZW8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwid3JhcHBlciIsImZpbmQiLCJvbiIsInBsYXlQYXVzZVZpZGVvIiwiY2xvc2VzdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInZpZGVvIiwiYWN0aXZlIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwicGxheWVyIiwiVmltZW8iLCJQbGF5ZXIiLCJwYXVzZVZpZGVvIiwicGxheVZpZGVvIiwicGxheSIsInBhdXNlIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOztBQUVDLFdBQVNBLENBQVQsRUFBWTtBQUVYO0FBQ0E7QUFDRztBQUNIO0FBRUE7QUFDRztBQUNIO0FBR0E7QUFDQUEsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCRixLQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q0csSUFBeEMsQ0FBNkMsWUFBWTtBQUN2RCxVQUFNQyxPQUFPLEdBQUcsSUFBaEI7QUFDQUosT0FBQyxDQUFDSSxPQUFELENBQUQsQ0FDR0MsSUFESCxDQUNRLHFCQURSLEVBRUdDLEVBRkgsQ0FFTSxPQUZOLEVBRWUsWUFBWTtBQUN2QkMsc0JBQWMsQ0FBQ0gsT0FBRCxDQUFkO0FBQ0QsT0FKSDtBQUtELEtBUEQ7QUFTQUosS0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NNLEVBQXhDLENBQTJDLE9BQTNDLEVBQW1ELHFCQUFuRCxFQUF5RSxZQUFXO0FBQ2xGLFVBQUlOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsT0FBUixDQUFnQixvQ0FBaEIsRUFBc0RDLFFBQXRELENBQStELFFBQS9ELENBQUosRUFBNkU7QUFDM0VULFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsT0FBUixDQUFnQixvQ0FBaEIsRUFBc0RFLFdBQXRELENBQWtFLFFBQWxFO0FBQ0QsT0FGRCxNQUVNO0FBQ0pWLFNBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDVSxXQUF4QyxDQUFvRCxRQUFwRDtBQUNBVixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLE9BQVIsQ0FBZ0Isb0NBQWhCLEVBQXNERyxRQUF0RCxDQUErRCxRQUEvRDtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBbEJELEVBYlcsQ0FrQ1g7O0FBQ0EsV0FBU0osY0FBVCxDQUF3QkssS0FBeEIsRUFBK0I7QUFDN0IsUUFBSUMsTUFBTSxHQUFHLEtBQWI7O0FBRUEsUUFBSWIsQ0FBQyxDQUFDWSxLQUFELENBQUQsQ0FBU0gsUUFBVCxDQUFrQixRQUFsQixDQUFKLEVBQWlDO0FBQy9CSSxZQUFNLEdBQUcsSUFBVDtBQUNEOztBQUVELFFBQU1DLFVBQVUsR0FBR2QsQ0FBQyxDQUFDWSxLQUFELENBQUQsQ0FBU1AsSUFBVCxDQUFjLGFBQWQsQ0FBbkI7QUFDQSxRQUFNVSxXQUFXLEdBQUdmLENBQUMsQ0FBQ1ksS0FBRCxDQUFELENBQVNQLElBQVQsQ0FBYyxjQUFkLENBQXBCO0FBQ0EsUUFBSVcsTUFBTSxHQUFHLElBQUlDLEtBQUssQ0FBQ0MsTUFBVixDQUFpQmxCLENBQUMsQ0FBQ1ksS0FBRCxDQUFELENBQVNQLElBQVQsQ0FBYyw4QkFBZCxDQUFqQixDQUFiOztBQUVBLFFBQUlRLE1BQUosRUFBWTtBQUNWTSxnQkFBVSxDQUFDSCxNQUFELEVBQVNGLFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDSCxLQUFsQyxDQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0xRLGVBQVMsQ0FBQ0osTUFBRCxFQUFTRixVQUFULEVBQXFCQyxXQUFyQixFQUFrQ0gsS0FBbEMsQ0FBVDtBQUNEO0FBQ0YsR0FuRFUsQ0FxRFg7OztBQUNBLFdBQVNRLFNBQVQsQ0FBbUJKLE1BQW5CLEVBQTJCRixVQUEzQixFQUF1Q0MsV0FBdkMsRUFBb0RILEtBQXBELEVBQTJEO0FBQ3pESSxVQUFNLENBQUNLLElBQVA7QUFDRCxHQXhEVSxDQTBEWDs7O0FBQ0EsV0FBU0YsVUFBVCxDQUFvQkgsTUFBcEIsRUFBNEJGLFVBQTVCLEVBQXdDQyxXQUF4QyxFQUFxREgsS0FBckQsRUFBNEQ7QUFDMURJLFVBQU0sQ0FBQ00sS0FBUDtBQUNEO0FBRUYsQ0EvREEsRUErRENDLE1BL0RELENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSx3QiIsImZpbGUiOiJibG9ja19oZXJvX3ZpZGVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbihmdW5jdGlvbigkKSB7XG5cbiAgLy8gUmVtb3ZlIFZpZGVvXG4gIC8vaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgLy8kKCcuYmxvY2tfaGVyb192aWRlby13cmFwcGVyLmhhcy12aWRlby1tb2JpbGUgLnZpZGVvLWRlc2t0b3AnKS5yZW1vdmUoKTtcbiAgLy99ICBcbiAgXG4gIC8vaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgLy8kKCcuYmxvY2tfaGVyb192aWRlby13cmFwcGVyLmhhcy12aWRlby1tb2JpbGUgLnZpZGVvLW1vYmlsZScpLnJlbW92ZSgpO1xuICAvL30gXG5cblxuICAvLyBMb29wIHRocm91Z2ggV3JhcHBlcnNcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoXCIuYmxvY2stc2hhcmVkLWhlcm8tdmlkZW8tY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXM7XG4gICAgICAkKHdyYXBwZXIpXG4gICAgICAgIC5maW5kKFwiLnBsYXktcGF1c2UtYnV0dG9uc1wiKVxuICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheVBhdXNlVmlkZW8od3JhcHBlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICAgICQoXCIuYmxvY2stc2hhcmVkLWhlcm8tdmlkZW8tY29udGFpbmVyXCIpLm9uKFwiY2xpY2tcIixcIi5wbGF5LXBhdXNlLWJ1dHRvbnNcIixmdW5jdGlvbigpIHtcbiAgICAgIGlmKCAkKHRoaXMpLmNsb3Nlc3QoJy5ibG9jay1zaGFyZWQtaGVyby12aWRlby1jb250YWluZXInKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7ICAgICAgICAgIFxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5ibG9jay1zaGFyZWQtaGVyby12aWRlby1jb250YWluZXInKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgJCgnLmJsb2NrLXNoYXJlZC1oZXJvLXZpZGVvLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5ibG9jay1zaGFyZWQtaGVyby12aWRlby1jb250YWluZXInKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuXG4gIC8vIFBsYXkgcGF1c2UgbG9naWNcbiAgZnVuY3Rpb24gcGxheVBhdXNlVmlkZW8odmlkZW8pIHtcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgXG4gICAgaWYgKCQodmlkZW8pLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICBhY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSAkKHZpZGVvKS5maW5kKFwiLnZpZGVvLXBsYXlcIik7ICBcbiAgICBjb25zdCBwYXVzZUJ1dHRvbiA9ICQodmlkZW8pLmZpbmQoXCIudmlkZW8tcGF1c2VcIik7XG4gICAgdmFyIHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoJCh2aWRlbykuZmluZChcIi52aW1lby1pZnJhbWUtd3JhcHBlciBpZnJhbWVcIikpO1xuXG4gICAgaWYgKGFjdGl2ZSkgeyAgICBcbiAgICAgIHBhdXNlVmlkZW8ocGxheWVyLCBwbGF5QnV0dG9uLCBwYXVzZUJ1dHRvbiwgdmlkZW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5VmlkZW8ocGxheWVyLCBwbGF5QnV0dG9uLCBwYXVzZUJ1dHRvbiwgdmlkZW8pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRyaWdnZXIgUGxheSBmdW5jdGlvblxuICBmdW5jdGlvbiBwbGF5VmlkZW8ocGxheWVyLCBwbGF5QnV0dG9uLCBwYXVzZUJ1dHRvbiwgdmlkZW8pIHtcbiAgICBwbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgLy8gVHJpZ2dlciBQYXVzZSBmdW5jdGlvblxuICBmdW5jdGlvbiBwYXVzZVZpZGVvKHBsYXllciwgcGxheUJ1dHRvbiwgcGF1c2VCdXR0b24sIHZpZGVvKSB7XG4gICAgcGxheWVyLnBhdXNlKCk7XG4gIH1cblxufShqUXVlcnkpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9