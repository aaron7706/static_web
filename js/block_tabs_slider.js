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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/block_tabs_slider/block_tabs_slider.js":
/*!***********************************************************!*\
  !*** ./components/block_tabs_slider/block_tabs_slider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// block_tabs_slider.js
(function ($) {
  var names = [];
  $(".block_tabs_slider .swiper-slide").each(function (i) {
    names.push($(this).data("name"));
  });
  var mySwiper = new Swiper('.block_tabs_slider', {
    speed: 800,
    parallax: true,
    effect: "fade",
    //loop: true,      
    onProgress: 'move',
    centeredSlides: true,
    autoplay: {
      delay: 12000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.block_tabs_slider-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        console.log(index);
        return '<span class="' + className + '">' + names[index] + '</span>';
      }
    },
    navigation: {
      nextEl: '.block_tabs_slider-button-next',
      prevEl: '.block_tabs_slider-button-prev'
    },
    on: {
      init: function init() {
        $(".swiper-circle-prev").removeClass("animate");
        $(".swiper-circle-next").removeClass("animate");
        $(".swiper-circle-next").removeClass("active");
        $(".swiper-circle-prev").eq(0).addClass("animate");
        $(".swiper-circle-next").eq(0).addClass("animate");
        $(".swiper-circle-next").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        $(".swiper-circle-prev").removeClass("animate");
        $(".swiper-circle-next").removeClass("animate");
        $(".swiper-circle-next").removeClass("active");
        $(".swiper-circle-next").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        $(".swiper-circle-prev").eq(0).addClass("animate");
        $(".swiper-circle-next").eq(0).addClass("animate");
      }
    }
  });
})(jQuery);

/***/ }),

/***/ 17:
/*!*****************************************************************!*\
  !*** multi ./components/block_tabs_slider/block_tabs_slider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antoniobragaalmeida/Documents/Websites/2022aristocrat.local/wp-content/themes/aristocrat-wpms/wp-content/themes/aristocrat-2021/components/block_tabs_slider/block_tabs_slider.js */"./components/block_tabs_slider/block_tabs_slider.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9ja190YWJzX3NsaWRlci9ibG9ja190YWJzX3NsaWRlci5qcyJdLCJuYW1lcyI6WyIkIiwibmFtZXMiLCJlYWNoIiwiaSIsInB1c2giLCJkYXRhIiwibXlTd2lwZXIiLCJTd2lwZXIiLCJzcGVlZCIsInBhcmFsbGF4IiwiZWZmZWN0Iiwib25Qcm9ncmVzcyIsImNlbnRlcmVkU2xpZGVzIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm9uIiwiaW5pdCIsInJlbW92ZUNsYXNzIiwiZXEiLCJhZGRDbGFzcyIsInNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Iiwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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RUEwRENHLE1BMURELENBQUQsQyIsImZpbGUiOiJibG9ja190YWJzX3NsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCIvLyBibG9ja190YWJzX3NsaWRlci5qc1xuXG4oZnVuY3Rpb24oJCkge1xuXG4gIHZhciBuYW1lcyA9IFtdO1xuICAkKFwiLmJsb2NrX3RhYnNfc2xpZGVyIC5zd2lwZXItc2xpZGVcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBuYW1lcy5wdXNoKCQodGhpcykuZGF0YShcIm5hbWVcIikpO1xuICB9KTtcblxuICB2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyICgnLmJsb2NrX3RhYnNfc2xpZGVyJywge1xuXG4gICAgc3BlZWQ6IDgwMCxcbiAgICBwYXJhbGxheDogdHJ1ZSwgXG4gICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICAvL2xvb3A6IHRydWUsICAgICAgXG4gICAgb25Qcm9ncmVzczogJ21vdmUnLCAgXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAxMjAwMCxcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICB9LFxuICAgICAgICBcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5ibG9ja190YWJzX3NsaWRlci1wYWdpbmF0aW9uJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkgeyAgICAgICAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKG5hbWVzW2luZGV4XSkgKyAnPC9zcGFuPic7ICAgICAgICBcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5ibG9ja190YWJzX3NsaWRlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuYmxvY2tfdGFic19zbGlkZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG5cbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnN3aXBlci1jaXJjbGUtcHJldlwiKS5yZW1vdmVDbGFzcyhcImFuaW1hdGVcIik7XG4gICAgICAgICQoXCIuc3dpcGVyLWNpcmNsZS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiYW5pbWF0ZVwiKTtcbiAgICAgICAgJChcIi5zd2lwZXItY2lyY2xlLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCIuc3dpcGVyLWNpcmNsZS1wcmV2XCIpLmVxKDApLmFkZENsYXNzKFwiYW5pbWF0ZVwiKTtcbiAgICAgICAgJChcIi5zd2lwZXItY2lyY2xlLW5leHRcIikuZXEoMCkuYWRkQ2xhc3MoXCJhbmltYXRlXCIpO1xuICAgICAgICAkKFwiLnN3aXBlci1jaXJjbGUtbmV4dFwiKS5lcSgwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0sXG4gICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnN3aXBlci1jaXJjbGUtcHJldlwiKS5yZW1vdmVDbGFzcyhcImFuaW1hdGVcIik7XG4gICAgICAgICQoXCIuc3dpcGVyLWNpcmNsZS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiYW5pbWF0ZVwiKTtcbiAgICAgICAgJChcIi5zd2lwZXItY2lyY2xlLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCIuc3dpcGVyLWNpcmNsZS1uZXh0XCIpLmVxKDApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfSxcbiAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnN3aXBlci1jaXJjbGUtcHJldlwiKS5lcSgwKS5hZGRDbGFzcyhcImFuaW1hdGVcIik7XG4gICAgICAgICQoXCIuc3dpcGVyLWNpcmNsZS1uZXh0XCIpLmVxKDApLmFkZENsYXNzKFwiYW5pbWF0ZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSlcblxufShqUXVlcnkpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=