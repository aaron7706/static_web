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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.bundle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement$1 = obj => {
    if (!obj || typeof obj !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  const getElement = obj => {
    if (isElement$1(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return document.querySelector(obj);
    }

    return null;
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement$1(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };

  const isVisible = element => {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  const reflow = element => {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
  };

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          DOMContentLoadedCallbacks.forEach(callback => callback());
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }

          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const elementMap = new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.1.1';

  class BaseComponent {
    constructor(element) {
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
      });
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */


    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  const NAME$d = 'alert';
  const DATA_KEY$c = 'bs.alert';
  const EVENT_KEY$c = `.${DATA_KEY$c}`;
  const EVENT_CLOSE = `close${EVENT_KEY$c}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$d;
    } // Public


    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$c = 'button';
  const DATA_KEY$b = 'bs.button';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$7 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$c;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },

    offset(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    },

    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }

  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const NODE_TEXT = 3;
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    }

  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$b = 'carousel';
  const DATA_KEY$a = 'bs.carousel';
  const EVENT_KEY$a = `.${DATA_KEY$a}`;
  const DATA_API_KEY$6 = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const SWIPE_THRESHOLD = 40;
  const Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  const DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
  const EVENT_SLID = `slid${EVENT_KEY$a}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SELECTOR_ACTIVE$1 = '.active';
  const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_INDICATOR = '[data-bs-target]';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent);

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$a;
    }

    static get NAME() {
      return NAME$b;
    } // Public


    next() {
      this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

    pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }

    to(index) {
      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private


    _getConfig(config) {
      config = { ...Default$a,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$b, config, DefaultType$a);
      return config;
    }

    _handleSwipe() {
      const absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
        EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      const hasPointerPenTouch = event => {
        return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
      };

      const start = event => {
        if (hasPointerPenTouch(event)) {
          this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
      };

      const end = event => {
        if (hasPointerPenTouch(event)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }

        this._handleSwipe();

        if (this._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.pause();

          if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
          }

          this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
      }
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(direction);
      }
    }

    _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }

    _getItemByOrder(order, activeElement) {
      const isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }

    _triggerSlideEvent(relatedTarget, eventDirectionName) {
      const targetIndex = this._getItemIndex(relatedTarget);

      const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }

    _updateInterval() {
      const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }

    _slide(directionOrOrder, element) {
      const order = this._directionToOrder(directionOrOrder);

      const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeElementIndex = this._getItemIndex(activeElement);

      const nextElement = element || this._getItemByOrder(order, activeElement);

      const nextElementIndex = this._getItemIndex(nextElement);

      const isCycling = Boolean(this._interval);
      const isNext = order === ORDER_NEXT;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      const eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      if (this._isSliding) {
        return;
      }

      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      const triggerSlidEvent = () => {
        EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          this._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }

    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static carouselInterface(element, config) {
      const data = Carousel.getOrCreateInstance(element, config);
      let {
        _config
      } = data;

      if (typeof config === 'object') {
        _config = { ..._config,
          ...config
        };
      }

      const action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError(`No method named "${action}"`);
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }

    static dataApiClickHandler(event) {
      const target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      const config = { ...Manipulator.getDataAttributes(target),
        ...Manipulator.getDataAttributes(this)
      };
      const slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
      }

      event.preventDefault();
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (let i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$a = 'collapse';
  const DATA_KEY$9 = 'bs.collapse';
  const EVENT_KEY$9 = `.${DATA_KEY$9}`;
  const DATA_API_KEY$5 = '.data-api';
  const Default$9 = {
    toggle: true,
    parent: null
  };
  const DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
  };
  const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._isTransitioning = false;
      this._config = this._getConfig(config);
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

        if (selector !== null && filterElement.length) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default$9;
    }

    static get NAME() {
      return NAME$a;
    } // Public


    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let actives = [];
      let activesData;

      if (this._config.parent) {
        const children = SelectorEngine.find(`.${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`, this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
      }

      const container = SelectorEngine.findOne(this._selector);

      if (actives.length) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      actives.forEach(elemActive => {
        if (container !== elemActive) {
          Collapse.getOrCreateInstance(elemActive, {
            toggle: false
          }).hide();
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$9, null);
        }
      });

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      const triggerArrayLength = this._triggerArray.length;

      for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private


    _getConfig(config) {
      config = { ...Default$9,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

      const children = SelectorEngine.find(`.${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
        const selected = getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      });
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      triggerArray.forEach(elem => {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const _config = {};

        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(element => {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);
  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  } // and applies them to the HTMLElements such as popper and arrow


  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var round$1 = Math.round;

  function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (isHTMLElement(element) && includeScale) {
      var offsetHeight = element.offsetHeight;
      var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
      // Fallback to 1 in case both values are `0`

      if (offsetWidth > 0) {
        scaleX = rect.width / offsetWidth || 1;
      }

      if (offsetHeight > 0) {
        scaleY = rect.height / offsetHeight || 1;
      }
    }

    return {
      width: round$1(rect.width / scaleX),
      height: round$1(rect.height / scaleY),
      top: round$1(rect.top / scaleY),
      right: round$1(rect.right / scaleX),
      bottom: round$1(rect.bottom / scaleY),
      left: round$1(rect.left / scaleX),
      x: round$1(rect.left / scaleX),
      y: round$1(rect.top / scaleY)
    };
  } // means it doesn't take into account transforms.


  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };
  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };

  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  } // of the `<html>` and `<body>` rect bounds if horizontally scrollable


  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }
  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */


  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    popperGenerator: popperGenerator,
    detectOverflow: detectOverflow,
    createPopperBase: createPopper$2,
    createPopper: createPopper,
    createPopperLite: createPopper$1,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    auto: auto,
    basePlacements: basePlacements,
    start: start,
    end: end,
    clippingParents: clippingParents,
    viewport: viewport,
    popper: popper,
    reference: reference,
    variationPlacements: variationPlacements,
    placements: placements,
    beforeRead: beforeRead,
    read: read,
    afterRead: afterRead,
    beforeMain: beforeMain,
    main: main,
    afterMain: afterMain,
    beforeWrite: beforeWrite,
    write: write,
    afterWrite: afterWrite,
    modifierPhases: modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  });
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$9 = 'dropdown';
  const DATA_KEY$8 = 'bs.dropdown';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$4 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const SPACE_KEY = 'Space';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
  const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_NAVBAR = 'navbar';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const Default$8 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  const DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get DefaultType() {
      return DefaultType$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (isDisabled(this._element) || this._isShown(this._menu)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        this._createPopper(parent);
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }

    hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }

    _getConfig(config) {
      config = { ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

      if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _createPopper(parent) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement$1(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
      this._popper = createPopper(referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$6);
    }

    _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }

    _getPlacement() {
      const parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

    static clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
      }

      const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._isShown()) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          const composedPath = event.composedPath();
          const isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }

    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

    static dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (event.key === ESCAPE_KEY$2) {
        instance.hide();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          instance.show();
        }

        instance._selectMenuItem(event);

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
      }
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProp, callback) {
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        this._saveInitialAttribute(element, styleProp);

        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }

    _saveInitialAttribute(element, styleProp) {
      const actualValue = element.style[styleProp];

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProp) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement$1(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }

    isOverflowing() {
      return this.getWidth() > 0;
    }

  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  const Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  const DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  const NAME$8 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;

  class Backdrop {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _getConfig(config) {
      config = { ...Default$7,
        ...(typeof config === 'object' ? config : {})
      }; // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      this._config.rootElement.append(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  const Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
  };
  const DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
  };
  const NAME$7 = 'focustrap';
  const DATA_KEY$7 = 'bs.focustrap';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';

  class FocusTrap {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    activate() {
      const {
        trapElement,
        autofocus
      } = this._config;

      if (this._isActive) {
        return;
      }

      if (autofocus) {
        trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$7);
    } // Private


    _handleFocusin(event) {
      const {
        target
      } = event;
      const {
        trapElement
      } = this._config;

      if (target === document || target === trapElement || trapElement.contains(target)) {
        return;
      }

      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }

    _getConfig(config) {
      config = { ...Default$6,
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }

  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  const NAME$6 = 'modal';
  const DATA_KEY$6 = 'bs.modal';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
    } // Getters


    static get Default() {
      return Default$5;
    }

    static get NAME() {
      return NAME$6;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      const isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
      [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _getConfig(config) {
      config = { ...Default$5,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();

      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }

    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      });
    }

    _showBackdrop(callback) {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const {
        classList,
        scrollHeight,
        style
      } = this._element;
      const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          this._queueCallback(() => {
            style.overflowY = '';
          }, this._dialog);
        }
      }, this._dialog);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    }); // avoid conflict when clicking moddal toggler while another one is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (allReadyOpen) {
      Modal.getInstance(allReadyOpen).hide();
    }

    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$5 = 'offcanvas';
  const DATA_KEY$5 = 'bs.offcanvas';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const ESCAPE_KEY = 'Escape';
  const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
  const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();

      this._addEventListeners();
    } // Getters


    static get NAME() {
      return NAME$5;
    }

    static get Default() {
      return Default$4;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$3);

      const completeCallBack = () => {
        if (!this._config.scroll) {
          this._focustrap.activate();
        }

        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      this._backdrop.hide();

      const completeCallback = () => {
        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._element.style.visibility = 'hidden';

        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default$4,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }

    _initializeBackDrop() {
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY) {
          this.hide();
        }
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
  enableDismissTrigger(Offcanvas);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const allowlistKeys = Object.keys(allowList);
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.remove();
        continue;
      }

      const attributeList = [].concat(...el.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(attr => {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  const NAME$4 = 'tooltip';
  const DATA_KEY$4 = 'bs.tooltip';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const CLASS_PREFIX$1 = 'bs-tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
  };
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const HOVER_STATE_SHOW = 'show';
  const HOVER_STATE_OUT = 'out';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element); // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this._config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default$3;
    }

    static get NAME() {
      return NAME$4;
    }

    static get Event() {
      return Event$2;
    }

    static get DefaultType() {
      return DefaultType$3;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      this._disposePopper();

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
      // This will be removed later in favor of a `setContent` method


      if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
        this._disposePopper();

        this.tip.remove();
        this.tip = null;
      }

      const tip = this.getTipElement();
      const tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      const attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      const {
        container
      } = this._config;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$2);

      const customClass = this._resolvePossibleFunction(this._config.customClass);

      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          this._leave(null, this);
        }
      };

      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);
    }

    hide() {
      if (!this._popper) {
        return;
      }

      const tip = this.getTipElement();

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (this._hoverState !== HOVER_STATE_SHOW) {
          tip.remove();
        }

        this._cleanTipClass();

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

        this._disposePopper();
      };

      const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }

    update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected


    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      const element = document.createElement('div');
      element.innerHTML = this._config.template;
      const tip = element.children[0];
      this.setContent(tip);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      this.tip = tip;
      return this.tip;
    }

    setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }

    _sanitizeAndSetContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);

      if (!content && templateElement) {
        templateElement.remove();
        return;
      } // we use append for html objects to maintain js events


      this.setElementContent(templateElement, content);
    }

    setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement$1(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.append(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    getTitle() {
      const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

      return this._resolvePossibleFunction(title);
    }

    updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private


    _initializeOnDelegatedTarget(event, context) {
      return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _resolvePossibleFunction(content) {
      return typeof content === 'function' ? content.call(this._element) : content;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
          if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
          }
        }
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
    }

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      triggers.forEach(trigger => {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
          EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
        }
      });

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._config.selector) {
        this._config = { ...this._config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }

    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }

    _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }

    _isWithActiveTrigger() {
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = { ...this.constructor.Default,
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`


      return config;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
      const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }

    _getBasicClassPrefix() {
      return CLASS_PREFIX$1;
    }

    _handlePopperPlacementChange(popperData) {
      const {
        state
      } = popperData;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    }

    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'popover';
  const DATA_KEY$3 = 'bs.popover';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const CLASS_PREFIX = 'bs-popover';
  const Default$2 = { ...Tooltip.Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(string|element|function)'
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
  };
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

    static get NAME() {
      return NAME$3;
    }

    static get Event() {
      return Event$1;
    }

    static get DefaultType() {
      return DefaultType$2;
    } // Overrides


    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

      this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    } // Private


    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    _getBasicClassPrefix() {
      return CLASS_PREFIX;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY$1 = '.data-api';
  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
  const SELECTOR_DROPDOWN$1 = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();

      this._process();
    } // Getters


    static get Default() {
      return Default$1;
    }

    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          const targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);

        this._targets.push(item[1]);
      });
    }

    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
      config.target = getElement(config.target) || document.documentElement;
      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;

      const scrollHeight = this._getScrollHeight();

      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }

    _activate(target) {
      this._activeTarget = target;

      this._clear();

      const queries = SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
      const link = SelectorEngine.findOne(queries.join(','), this._config.target);
      link.classList.add(CLASS_NAME_ACTIVE$1);

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_UL = ':scope > li > .active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$1;
    } // Public


    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      let previous;
      const target = getElementFromSelector(this._element);

      const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      const complete = () => {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: this._element
        });
        EventHandler.trigger(this._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private


    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      const complete = () => this._transitionComplete(element, active, callback);

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      let parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    const data = Tab.getOrCreateInstance(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


    static get DefaultType() {
      return DefaultType;
    }

    static get Default() {
      return Default;
    }

    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        this._element.classList.remove(CLASS_NAME_SHOWING);

        this._element.classList.remove(CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }

  enableDismissTrigger(Toast);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };
  return index_umd;
});

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_site_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/site-layout */ "./src/js/layout/site-layout.js");
/* harmony import */ var _layout_site_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/site-nav */ "./src/js/layout/site-nav.js");
/* harmony import */ var _vendors_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendors/gsap */ "./src/js/vendors/gsap.js");
/* harmony import */ var _vendors_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_gsap__WEBPACK_IMPORTED_MODULE_2__);
// Vendors
window.bootstrap = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js"); //import bootstrap from 'bootstrap';
// Site Layout


 // Vendors

 // Components
//import './components/components'

/***/ }),

/***/ "./src/js/layout/site-layout.js":
/*!**************************************!*\
  !*** ./src/js/layout/site-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


(function ($) {
  /**
  * Page load anim using CSS
  */
  $(window).on('load', function () {
    $("#page-load").fadeOut(200);
  });
})(jQuery);

/***/ }),

/***/ "./src/js/layout/site-nav.js":
/*!***********************************!*\
  !*** ./src/js/layout/site-nav.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


(function ($) {
  /**
  * Mobile Nav dropdown
  */
  $('.nav-toggler').click(function () {
    $(this).toggleClass('active');
    $(this).next('.nav-dropdown').toggleClass('show');
    $(this).parents('.site-wrap').parent('body').toggleClass('nav-active');
  });
  /**
  * Nav menu item with sub-menu class toggle 
  * sub-menu show/hide slide animation
  */

  $('.menu-item-has-children').click(function () {
    $(this).toggleClass('active');
    $(this).find('.sub-menu').toggleClass('show');
    $('.menu-item-has-children > a').removeAttr("href");
  });
  $(".menu-item-has-children").hover(function () {
    $(".sub-menu").slideToggle("", function () {// Animation complete.
    });
  });
  /**
  * Remove href from sub-menu-header
  * 
  */

  $('.sub-menu-header a').removeAttr('href');
  /**
  * Hide Show Header on Scroll
  */

  var lastScroll = 0; //$(window).scroll(function(){
  //var scroll = $(window).scrollTop();
  //if (scroll > lastScroll) {
  //$('.navbar-hs').css({
  //'transition': 'all .3s ease',
  //'transition-delay': '0.18s',
  //'transform': 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1)',
  //'will-change': 'all',
  //});                    
  //} else if (scroll < lastScroll) {
  //$('.navbar-hs').css({
  //'transition': 'all .3s ease',
  //'transform': 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',                               
  //});
  //}
  //lastScroll = scroll;
  //});

  /**
  * Add Class Header on Scroll
  */

  $(window).scroll(function () {
    var top_offset = $(window).scrollTop();
    $('#scrollTop').html(top_offset);

    if (top_offset == 0) {
      $('.navbar-hs').removeClass('on-scroll');
    } else {
      $('.navbar-hs').addClass('on-scroll');
    }
  });
})(jQuery); //alert("Hello! I am an alert box!!");

/***/ }),

/***/ "./src/js/vendors/gsap.js":
/*!********************************!*\
  !*** ./src/js/vendors/gsap.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var anim_parallax_assets = gsap.utils.toArray('.parallax');
anim_parallax_assets.forEach(function (anim_parallax_asset) {
  gsap.fromTo(anim_parallax_asset, {
    y: 200
  }, {
    y: -200,
    scrollTrigger: {
      trigger: anim_parallax_asset,
      //start: "100 bottom", // when the top of the trigger hits the top of the viewport
      //end: "+=1400", // end after scrolling 500px beyond the start
      scrub: .5
    }
  });
});
var anim_draw_me_blocks = gsap.utils.toArray('.draw_me');
anim_draw_me_blocks.forEach(function (anim_draw_me_block) {
  gsap.from(anim_draw_me_block, {
    duration: 1,
    ease: "power4.out",
    //stagger: 0.1, 
    drawSVG: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: anim_draw_me_block,
      start: "100 bottom",
      // when the top of the trigger hits the top of the viewport
      end: "+=400",
      // end after scrolling 500px beyond the start
      scrub: 0.1
    }
  });
});
var anim_draw_me_150_blocks = gsap.utils.toArray('.draw_me_150');
anim_draw_me_150_blocks.forEach(function (anim_draw_me_150_block) {
  gsap.from(anim_draw_me_150_block, {
    duration: 1,
    ease: "power4.out",
    //stagger: 0.1, 
    drawSVG: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: anim_draw_me_150_block,
      start: "150 bottom",
      // when the top of the trigger hits the top of the viewport
      end: "+=400",
      // end after scrolling 500px beyond the start
      scrub: 0.1
    }
  });
});
var anim_zoom_out_blocks = gsap.utils.toArray('.anim-zoom-out');
anim_zoom_out_blocks.forEach(function (anim_zoom_out_block) {
  gsap.from(anim_zoom_out_block, {
    duration: 3,
    ease: "power4.out",
    opacity: 0,
    scale: 1.5,
    scrollTrigger: {
      trigger: anim_zoom_out_block,
      start: "200 bottom",
      // when the top of the trigger hits the top of the viewport
      end: "+=500",
      // end after scrolling 500px beyond the start
      scrub: 1
    }
  });
});
var anim_fade_in_up_blocks = gsap.utils.toArray('.anim-fade-in-up');
anim_fade_in_up_blocks.forEach(function (anim_fade_in_up_block) {
  gsap.from(anim_fade_in_up_block, {
    duration: 3,
    ease: "power4.out",
    opacity: 0,
    y: 200,
    scrollTrigger: {
      trigger: anim_fade_in_up_block,
      start: "100 bottom",
      // when the top of the trigger hits the top of the viewport
      end: "+=400",
      // end after scrolling 500px beyond the start
      scrub: 1
    }
  });
});
var anim_fade_in_up_quicker_blocks = gsap.utils.toArray('.anim-fade-in-up-quicker');
anim_fade_in_up_quicker_blocks.forEach(function (anim_fade_in_up_quicker_block) {
  gsap.from(anim_fade_in_up_quicker_block, {
    duration: 3,
    ease: "power4.out",
    //opacity:0,
    y: 200,
    scrollTrigger: {
      trigger: anim_fade_in_up_quicker_block,
      start: "-=100 bottom",
      // when the top of the trigger hits the top of the viewport
      //end: "+=400", // end after scrolling 500px beyond the start
      scrub: 1
    }
  });
});
var anim_fade_in_left_blocks = gsap.utils.toArray('.anim-fade-in-left');
anim_fade_in_left_blocks.forEach(function (anim_fade_in_left_block) {
  gsap.from(anim_fade_in_left_block, {
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    scale: 1.15,
    x: -200,
    scrollTrigger: {
      trigger: anim_fade_in_left_block,
      start: "300 bottom",
      // when the top of the trigger hits the top of the viewport
      end: "+=500",
      // end after scrolling 500px beyond the start
      scrub: 1
    }
  });
});
var anim_fade_in_right_blocks = gsap.utils.toArray('.anim-fade-in-right');
anim_fade_in_right_blocks.forEach(function (anim_fade_in_right_block) {
  gsap.from(anim_fade_in_right_block, {
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    scale: 1.15,
    x: 200,
    scrollTrigger: {
      trigger: anim_fade_in_right_block,
      start: "300 bottom",
      // when the top of the trigger hits the top of the viewport
      end: "+=500",
      // end after scrolling 500px beyond the start
      scrub: 1
    }
  });
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antoniobragaalmeida/Documents/Websites/2022aristocrat.local/wp-content/themes/aristocrat-wpms/wp-content/themes/aristocrat-2021/src/js/bundle.js */"./src/js/bundle.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0VmFyaWF0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QWx0QXhpcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2ZvY3VzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9pbmRleC51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF5b3V0L3NpdGUtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXQvc2l0ZS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvcnMvZ3NhcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInRvVHlwZSIsIm9iaiIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiaHJlZkF0dHIiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkRlbGF5Iiwid2luZG93IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiaXNFbGVtZW50IiwiZ2V0RWxlbWVudCIsInR5cGVDaGVja0NvbmZpZyIsIk9iamVjdCIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsImNvbmZpZ1R5cGVzIiwidmFsdWUiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJjb21wb25lbnROYW1lIiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzRGlzYWJsZWQiLCJOb2RlIiwiZmluZFNoYWRvd1Jvb3QiLCJyb290Iiwibm9vcCIsInJlZmxvdyIsImdldGpRdWVyeSIsImpRdWVyeSIsIkRPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJjYWxsYmFjayIsImlzUlRMIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwicGx1Z2luIiwiJCIsIm5hbWUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJleGVjdXRlIiwiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImNhbGxlZCIsImhhbmRsZXIiLCJ0YXJnZXQiLCJ0cmFuc2l0aW9uRWxlbWVudCIsInNldFRpbWVvdXQiLCJnZXROZXh0QWN0aXZlRWxlbWVudCIsImluZGV4IiwibGlzdCIsImxpc3RMZW5ndGgiLCJzaG91bGRHZXROZXh0IiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsImN1c3RvbUV2ZW50c1JlZ2V4IiwibmF0aXZlRXZlbnRzIiwidWlkIiwiZ2V0VWlkRXZlbnQiLCJldmVudCIsIkV2ZW50SGFuZGxlciIsImZuIiwiZG9tRWxlbWVudHMiLCJpIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidWlkRXZlbnRMaXN0IiwibGVuIiwiZXZlbnRzIiwiZGVsZWdhdGlvbiIsIm9yaWdpbmFsSGFuZGxlciIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImlzTmF0aXZlIiwiZGVsZWdhdGlvbkZuIiwid3JhcEZuIiwibm9ybWFsaXplUGFyYW1zIiwiZ2V0RXZlbnQiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJmaW5kSGFuZGxlciIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJib290c3RyYXBIYW5kbGVyIiwiQm9vbGVhbiIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsInJlbW92ZUhhbmRsZXIiLCJvbiIsImFkZEhhbmRsZXIiLCJvbmUiLCJvZmYiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwiZWxlbWVudEV2ZW50IiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImpRdWVyeUV2ZW50IiwiY2FuY2VsYWJsZSIsImtleSIsImdldCIsImFyZ3MiLCJlbGVtZW50TWFwIiwic2V0IiwiaW5zdGFuY2VNYXAiLCJjb25zb2xlIiwiQXJyYXkiLCJyZW1vdmUiLCJWRVJTSU9OIiwiY29uc3RydWN0b3IiLCJEYXRhIiwiZGlzcG9zZSIsInByb3BlcnR5TmFtZSIsIl9xdWV1ZUNhbGxiYWNrIiwiaXNBbmltYXRlZCIsImdldEluc3RhbmNlIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsImVuYWJsZURpc21pc3NUcmlnZ2VyIiwibWV0aG9kIiwiY2xpY2tFdmVudCIsImNvbXBvbmVudCIsImluc3RhbmNlIiwiRVZFTlRfQ0xPU0UiLCJFVkVOVF9DTE9TRUQiLCJDTEFTU19OQU1FX0ZBREUiLCJDTEFTU19OQU1FX1NIT1ciLCJjbG9zZSIsImNsb3NlRXZlbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJqUXVlcnlJbnRlcmZhY2UiLCJkYXRhIiwiQWxlcnQiLCJEQVRBX0FQSV9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJ0b2dnbGUiLCJCdXR0b24iLCJidXR0b24iLCJ2YWwiLCJjaHIiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJub3JtYWxpemVEYXRhS2V5IiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInB1cmVLZXkiLCJub3JtYWxpemVEYXRhIiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIm9mZnNldCIsInJlY3QiLCJ0b3AiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJwb3NpdGlvbiIsIm9mZnNldExlZnQiLCJOT0RFX1RFWFQiLCJTZWxlY3RvckVuZ2luZSIsImZpbmQiLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJwcmV2IiwicHJldmlvdXMiLCJuZXh0IiwiZm9jdXNhYmxlQ2hpbGRyZW4iLCJmb2N1c2FibGVzIiwiZWwiLCJBUlJPV19MRUZUX0tFWSIsIkFSUk9XX1JJR0hUX0tFWSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJLRVlfVE9fRElSRUNUSU9OIiwiRVZFTlRfU0xJREUiLCJFVkVOVF9TTElEIiwiRVZFTlRfS0VZRE9XTiIsIkVWRU5UX01PVVNFRU5URVIiLCJFVkVOVF9NT1VTRUxFQVZFIiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9FTkQiLCJDTEFTU19OQU1FX1NUQVJUIiwiQ0xBU1NfTkFNRV9ORVhUIiwiQ0xBU1NfTkFNRV9QUkVWIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfQUNUSVZFX0lURU0iLCJTRUxFQ1RPUl9JVEVNIiwiU0VMRUNUT1JfSVRFTV9JTUciLCJTRUxFQ1RPUl9ORVhUX1BSRVYiLCJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwiU0VMRUNUT1JfSU5ESUNBVE9SIiwiU0VMRUNUT1JfREFUQV9TTElERSIsIlNFTEVDVE9SX0RBVEFfUklERSIsIlBPSU5URVJfVFlQRV9UT1VDSCIsIlBPSU5URVJfVFlQRV9QRU4iLCJuYXZpZ2F0b3IiLCJuZXh0V2hlblZpc2libGUiLCJjbGVhckludGVydmFsIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInRvIiwiYWN0aXZlSW5kZXgiLCJvcmRlciIsIl9nZXRDb25maWciLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJkaXJlY3Rpb24iLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsImhhc1BvaW50ZXJQZW5Ub3VjaCIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJlIiwiX2tleWRvd24iLCJfZ2V0SXRlbUluZGV4IiwiX2dldEl0ZW1CeU9yZGVyIiwiaXNOZXh0IiwiX3RyaWdnZXJTbGlkZUV2ZW50IiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJmcm9tIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJpbmRpY2F0b3JzIiwiX3VwZGF0ZUludGVydmFsIiwiZWxlbWVudEludGVydmFsIiwiX3NsaWRlIiwiYWN0aXZlRWxlbWVudCIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJldmVudERpcmVjdGlvbk5hbWUiLCJzbGlkZUV2ZW50IiwidHJpZ2dlclNsaWRFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJjb21wbGV0ZUNhbGxCYWNrIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJfb3JkZXJUb0RpcmVjdGlvbiIsImNhcm91c2VsSW50ZXJmYWNlIiwiQ2Fyb3VzZWwiLCJfY29uZmlnIiwiYWN0aW9uIiwiZGF0YUFwaUNsaWNrSGFuZGxlciIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJwYXJlbnQiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwiV0lEVEgiLCJIRUlHSFQiLCJTRUxFQ1RPUl9BQ1RJVkVTIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwic2hvdyIsImFjdGl2ZXMiLCJjb250YWluZXIiLCJ0ZW1wQWN0aXZlRGF0YSIsImFjdGl2ZXNEYXRhIiwiQ29sbGFwc2UiLCJzdGFydEV2ZW50IiwiZWxlbUFjdGl2ZSIsImRpbWVuc2lvbiIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJzY3JvbGxTaXplIiwiaGlkZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsIl9pc1Nob3duIiwiX2dldERpbWVuc2lvbiIsIl9pbml0aWFsaXplQ2hpbGRyZW4iLCJzZWxlY3RlZCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJ0cmlnZ2VyQXJyYXkiLCJzZWxlY3RvckVsZW1lbnRzIiwiZWZmZWN0Iiwicm91bmQiLCJtaW4iLCJtYXgiLCJtYXRoTWF4IiwibWF0aE1pbiIsImhhc2giLCJhbGxQbGFjZW1lbnRzIiwicGxhY2VtZW50cyIsImNyZWF0ZVBvcHBlciIsImRlZmF1bHRNb2RpZmllcnMiLCJwb3BwZXJPZmZzZXRzIiwiY29tcHV0ZVN0eWxlcyIsImFwcGx5U3R5bGVzIiwiZmxpcCIsInByZXZlbnRPdmVyZmxvdyIsImFycm93IiwiRVNDQVBFX0tFWSIsIlNQQUNFX0tFWSIsIlRBQl9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIlJFR0VYUF9LRVlET1dOIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9EUk9QVVAiLCJDTEFTU19OQU1FX0RST1BFTkQiLCJDTEFTU19OQU1FX0RST1BTVEFSVCIsIkNMQVNTX05BTUVfTkFWQkFSIiwiU0VMRUNUT1JfTUVOVSIsIlNFTEVDVE9SX05BVkJBUl9OQVYiLCJTRUxFQ1RPUl9WSVNJQkxFX0lURU1TIiwiUExBQ0VNRU5UX1RPUCIsIlBMQUNFTUVOVF9UT1BFTkQiLCJQTEFDRU1FTlRfQk9UVE9NIiwiUExBQ0VNRU5UX0JPVFRPTUVORCIsIlBMQUNFTUVOVF9SSUdIVCIsIlBMQUNFTUVOVF9MRUZUIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiYXV0b0Nsb3NlIiwiX2VsZW1lbnQiLCJzaG93RXZlbnQiLCJEcm9wZG93biIsInVwZGF0ZSIsIl9jb21wbGV0ZUhpZGUiLCJoaWRlRXZlbnQiLCJfY3JlYXRlUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsImlzRGlzcGxheVN0YXRpYyIsIm1vZGlmaWVyIiwiUG9wcGVyIiwiX2dldE1lbnVFbGVtZW50IiwiX2dldFBsYWNlbWVudCIsInBhcmVudERyb3Bkb3duIiwiaXNFbmQiLCJfZGV0ZWN0TmF2YmFyIiwiX2dldE9mZnNldCIsInBvcHBlckRhdGEiLCJfZ2V0UG9wcGVyQ29uZmlnIiwiZGVmYXVsdEJzUG9wcGVyQ29uZmlnIiwicGxhY2VtZW50IiwibW9kaWZpZXJzIiwib3B0aW9ucyIsImVuYWJsZWQiLCJfc2VsZWN0TWVudUl0ZW0iLCJpdGVtcyIsImNsZWFyTWVudXMiLCJ0b2dnbGVzIiwiY29udGV4dCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImdldFBhcmVudEZyb21FbGVtZW50IiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXNBY3RpdmUiLCJnZXRUb2dnbGVCdXR0b24iLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJnZXRXaWR0aCIsImRvY3VtZW50V2lkdGgiLCJ3aWR0aCIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9kaXNhYmxlT3ZlckZsb3ciLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJzY3JvbGxiYXJXaWR0aCIsIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwicmVzZXQiLCJfc2F2ZUluaXRpYWxBdHRyaWJ1dGUiLCJhY3R1YWxWYWx1ZSIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwiX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2siLCJjYWxsQmFjayIsImlzT3ZlcmZsb3dpbmciLCJjbGFzc05hbWUiLCJyb290RWxlbWVudCIsImNsaWNrQ2FsbGJhY2siLCJFVkVOVF9NT1VTRURPV04iLCJfZ2V0RWxlbWVudCIsImJhY2tkcm9wIiwiX2FwcGVuZCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwidHJhcEVsZW1lbnQiLCJhdXRvZm9jdXMiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfTkFWX0ZPUldBUkQiLCJUQUJfTkFWX0JBQ0tXQVJEIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiX2hhbmRsZUZvY3VzaW4iLCJlbGVtZW50cyIsIl9oYW5kbGVLZXlkb3duIiwiZm9jdXMiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJFVkVOVF9NT1VTRVVQX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiT1BFTl9TRUxFQ1RPUiIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zaG93RWxlbWVudCIsIm1vZGFsQm9keSIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9oaWRlTW9kYWwiLCJfc2hvd0JhY2tkcm9wIiwiX2lzQW5pbWF0ZWQiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsInN0eWxlIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xhc3NMaXN0IiwiX2FkanVzdERpYWxvZyIsImlzQm9keU92ZXJmbG93aW5nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJNb2RhbCIsImFsbFJlYWR5T3BlbiIsInNjcm9sbCIsIkNMQVNTX05BTUVfQkFDS0RST1AiLCJjb21wbGV0ZUNhbGxiYWNrIiwiT2ZmY2FudmFzIiwidXJpQXR0cnMiLCJBUklBX0FUVFJJQlVURV9QQVRURVJOIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJEZWZhdWx0QWxsb3dsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInVuc2FmZUh0bWwiLCJzYW5pdGl6ZUZuIiwiZG9tUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwiYWxsb3dsaXN0S2V5cyIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlcyIsImFsbG93TGlzdCIsIkNMQVNTX1BSRUZJWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJjdXN0b21DbGFzcyIsInNhbml0aXplIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJFdmVudCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJDTEFTU19OQU1FX01PREFMIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9NT0RBTCIsIkVWRU5UX01PREFMX0hJREUiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJ0aXAiLCJ0aXBJZCIsImF0dGFjaG1lbnQiLCJwcmV2SG92ZXJTdGF0ZSIsImlzV2l0aENvbnRlbnQiLCJnZXRUaXBFbGVtZW50Iiwic2V0Q29udGVudCIsIl9zYW5pdGl6ZUFuZFNldENvbnRlbnQiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJzYW5pdGl6ZUh0bWwiLCJnZXRUaXRsZSIsInVwZGF0ZUF0dGFjaG1lbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uIiwicGhhc2UiLCJvbkZpcnN0VXBkYXRlIiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsIl9nZXRBdHRhY2htZW50IiwiX3NldExpc3RlbmVycyIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwib3JpZ2luYWxUaXRsZVR5cGUiLCJfZW50ZXIiLCJfbGVhdmUiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsImRhdGFBdHRyaWJ1dGVzIiwiZGF0YUF0dHIiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJfY2xlYW5UaXBDbGFzcyIsImJhc2ljQ2xhc3NQcmVmaXhSZWdleCIsInRhYkNsYXNzIiwidG9rZW4iLCJ0Q2xhc3MiLCJfZ2V0QmFzaWNDbGFzc1ByZWZpeCIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJzdGF0ZSIsIl9kaXNwb3NlUG9wcGVyIiwiVG9vbHRpcCIsIlNFTEVDVE9SX1RJVExFIiwiU0VMRUNUT1JfQ09OVEVOVCIsIl9nZXRDb250ZW50IiwiUG9wb3ZlciIsIkVWRU5UX0FDVElWQVRFIiwiRVZFTlRfU0NST0xMIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwiU0VMRUNUT1JfREFUQV9TUFkiLCJTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIlNFTEVDVE9SX05BVl9JVEVNUyIsIlNFTEVDVE9SX0xJU1RfSVRFTVMiLCJTRUxFQ1RPUl9MSU5LX0lURU1TIiwiU0VMRUNUT1JfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJNRVRIT0RfT0ZGU0VUIiwiTUVUSE9EX1BPU0lUSU9OIiwicmVmcmVzaCIsImF1dG9NZXRob2QiLCJvZmZzZXRNZXRob2QiLCJvZmZzZXRCYXNlIiwidGFyZ2V0cyIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0QkNSIiwiaXRlbSIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwiX2dldE9mZnNldEhlaWdodCIsIl9wcm9jZXNzIiwic2Nyb2xsVG9wIiwibWF4U2Nyb2xsIiwiaXNBY3RpdmVUYXJnZXQiLCJfYWN0aXZhdGUiLCJxdWVyaWVzIiwibGluayIsImxpc3RHcm91cCIsIm5hdkl0ZW0iLCJfY2xlYXIiLCJub2RlIiwiU2Nyb2xsU3B5Iiwic3B5IiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VIiwiU0VMRUNUT1JfQUNUSVZFX1VMIiwiU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJhY3RpdmVFbGVtZW50cyIsImFjdGl2ZSIsImlzVHJhbnNpdGlvbmluZyIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd24iLCJUYWIiLCJFVkVOVF9NT1VTRU9WRVIiLCJFVkVOVF9NT1VTRU9VVCIsIkVWRU5UX0ZPQ1VTT1VUIiwiQ0xBU1NfTkFNRV9ISURFIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiYXV0b2hpZGUiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJfb25JbnRlcmFjdGlvbiIsIl9jbGVhclRpbWVvdXQiLCJUb2FzdCIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJmYWRlT3V0IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUF0dHIiLCJob3ZlciIsInNsaWRlVG9nZ2xlIiwibGFzdFNjcm9sbCIsInRvcF9vZmZzZXQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYW5pbV9wYXJhbGxheF9hc3NldHMiLCJnc2FwIiwidXRpbHMiLCJ0b0FycmF5IiwiZm9yRWFjaCIsImFuaW1fcGFyYWxsYXhfYXNzZXQiLCJmcm9tVG8iLCJ5Iiwic2Nyb2xsVHJpZ2dlciIsInNjcnViIiwiYW5pbV9kcmF3X21lX2Jsb2NrcyIsImFuaW1fZHJhd19tZV9ibG9jayIsImR1cmF0aW9uIiwiZWFzZSIsImRyYXdTVkciLCJvcGFjaXR5IiwiYW5pbV9kcmF3X21lXzE1MF9ibG9ja3MiLCJhbmltX2RyYXdfbWVfMTUwX2Jsb2NrIiwiYW5pbV96b29tX291dF9ibG9ja3MiLCJhbmltX3pvb21fb3V0X2Jsb2NrIiwic2NhbGUiLCJhbmltX2ZhZGVfaW5fdXBfYmxvY2tzIiwiYW5pbV9mYWRlX2luX3VwX2Jsb2NrIiwiYW5pbV9mYWRlX2luX3VwX3F1aWNrZXJfYmxvY2tzIiwiYW5pbV9mYWRlX2luX3VwX3F1aWNrZXJfYmxvY2siLCJhbmltX2ZhZGVfaW5fbGVmdF9ibG9ja3MiLCJhbmltX2ZhZGVfaW5fbGVmdF9ibG9jayIsIngiLCJhbmltX2ZhZGVfaW5fcmlnaHRfYmxvY2tzIiwiYW5pbV9mYWRlX2luX3JpZ2h0X2Jsb2NrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFn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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmogPT4ge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHIgfHwgKCFocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyID0gYCMke2hyZWZBdHRyLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqID0gb2JqWzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iai5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmIChpc0VsZW1lbnQob2JqKSkgeyAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICAgIHJldHVybiBvYmouanF1ZXJ5ID8gb2JqWzBdIDogb2JqXG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgJiYgb2JqLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmopXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCB0eXBlQ2hlY2tDb25maWcgPSAoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykgPT4ge1xuICBPYmplY3Qua2V5cyhjb25maWdUeXBlcykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlICYmIGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFpc0VsZW1lbnQoZWxlbWVudCkgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSdcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbi8qKlxuICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB2b2lkXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gKi9cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG59XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgY29uc3QgeyBqUXVlcnkgfSA9IHdpbmRvd1xuXG4gIGlmIChqUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIGpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSBjYWxsYmFjayA9PiB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG5cbiAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBsaXN0WyFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdC5sZW5ndGggLSAxIDogMF1cbiAgfVxuXG4gIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aFxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICBpc0VsZW1lbnQsXG4gIHR5cGVDaGVja0NvbmZpZyxcbiAgaXNWaXNpYmxlLFxuICBpc0Rpc2FibGVkLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgbm9vcCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIHJlZmxvdyxcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIGlzUlRMLFxuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGV4ZWN1dGVBZnRlclRyYW5zaXRpb25cbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5jb25zdCBjdXN0b21FdmVudHNSZWdleCA9IC9eKG1vdXNlZW50ZXJ8bW91c2VsZWF2ZSkvaVxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gZ2V0VWlkRXZlbnQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50XG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0YXJnZXRcblxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRvIHBsZWFzZSBFU0xpbnRcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICBjb25zdCB1aWRFdmVudExpc3QgPSBPYmplY3Qua2V5cyhldmVudHMpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHVpZEV2ZW50TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW3VpZEV2ZW50TGlzdFtpXV1cblxuICAgIGlmIChldmVudC5vcmlnaW5hbEhhbmRsZXIgPT09IGhhbmRsZXIgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBldmVudFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gIGNvbnN0IGRlbGVnYXRpb24gPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZydcbiAgY29uc3Qgb3JpZ2luYWxIYW5kbGVyID0gZGVsZWdhdGlvbiA/IGRlbGVnYXRpb25GbiA6IGhhbmRsZXJcblxuICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KVxuICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KVxuXG4gIGlmICghaXNOYXRpdmUpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudFxuICB9XG5cbiAgcmV0dXJuIFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF1cbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBvbmVPZmYpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaGFuZGxlcikge1xuICAgIGhhbmRsZXIgPSBkZWxlZ2F0aW9uRm5cbiAgICBkZWxlZ2F0aW9uRm4gPSBudWxsXG4gIH1cblxuICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICBpZiAoY3VzdG9tRXZlbnRzUmVnZXgudGVzdChvcmlnaW5hbFR5cGVFdmVudCkpIHtcbiAgICBjb25zdCB3cmFwRm4gPSBmbiA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlbGVnYXRpb25Gbikge1xuICAgICAgZGVsZWdhdGlvbkZuID0gd3JhcEZuKGRlbGVnYXRpb25GbilcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlciA9IHdyYXBGbihoYW5kbGVyKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGbikge1xuICAgIHByZXZpb3VzRm4ub25lT2ZmID0gcHJldmlvdXNGbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KG9yaWdpbmFsSGFuZGxlciwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGRlbGVnYXRpb24gP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbikgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlcilcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGxcbiAgZm4ub3JpZ2luYWxIYW5kbGVyID0gb3JpZ2luYWxIYW5kbGVyXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgZGVsZWdhdGlvbilcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChoYW5kbGVyS2V5ID0+IHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnRcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbEhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghZXZlbnRzIHx8ICFldmVudHNbdHlwZUV2ZW50XSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChlbGVtZW50RXZlbnQgPT4ge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goa2V5SGFuZGxlcnMgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc11cblxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG4gICAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICAgIGxldCBqUXVlcnlFdmVudFxuICAgIGxldCBidWJibGVzID0gdHJ1ZVxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWVcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG4gICAgbGV0IGV2dCA9IG51bGxcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgaWYgKGlzTmF0aXZlKSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gICAgICBldnQuaW5pdEV2ZW50KHR5cGVFdmVudCwgYnViYmxlcywgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgIGJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gbWVyZ2UgY3VzdG9tIGluZm9ybWF0aW9uIGluIG91ciBldmVudFxuICAgIGlmICh0eXBlb2YgYXJncyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2dCwga2V5LCB7XG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3Nba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiB0eXBlb2YgalF1ZXJ5RXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiBiYXNlLWNvbXBvbmVudC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQge1xuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLFxuICBnZXRFbGVtZW50XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjEuMSdcblxuY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIC8qKiBTdGF0aWMgKi9cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLCBpc0Rpc2FibGVkIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWBcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgIGluc3RhbmNlW21ldGhvZF0oKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlclxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKVxuXG4gICAgaWYgKGNsb3NlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRClcbiAgICB0aGlzLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBBbGVydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKEFsZXJ0LCAnY2xvc2UnKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQWxlcnQgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoYnV0dG9uKVxuXG4gIGRhdGEudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5CdXR0b24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWwgPT09IE51bWJlcih2YWwpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbClcbiAgfVxuXG4gIGlmICh2YWwgPT09ICcnIHx8IHZhbCA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgICAgfSlcblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfSxcblxuICBvZmZzZXQoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgIH1cbiAgfSxcblxuICBwb3NpdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGlzRGlzYWJsZWQsIGlzVmlzaWJsZSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbmNvbnN0IE5PREVfVEVYVCA9IDNcblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cblxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yICYmIGFuY2VzdG9yLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBhbmNlc3Rvci5ub2RlVHlwZSAhPT0gTk9ERV9URVhUKSB7XG4gICAgICBpZiAoYW5jZXN0b3IubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgfVxuXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywgJylcblxuICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogZmFsc2UsXG4gIHBhdXNlOiAnaG92ZXInLFxuICB3cmFwOiB0cnVlLFxuICB0b3VjaDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcDogJ2Jvb2xlYW4nLFxuICB0b3VjaDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gIFtBUlJPV19MRUZUX0tFWV06IERJUkVDVElPTl9SSUdIVCxcbiAgW0FSUk9XX1JJR0hUX0tFWV06IERJUkVDVElPTl9MRUZUXG59XG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUiA9ICdbZGF0YS1icy10YXJnZXRdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTkVYVF9QUkVWLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG5cbiAgY3ljbGUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID9cbiAgICAgIE9SREVSX05FWFQgOlxuICAgICAgT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiA+IDAgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVClcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsIGV2ZW50ID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsIGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGhhc1BvaW50ZXJQZW5Ub3VjaCA9IGV2ZW50ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9wb2ludGVyRXZlbnQgJiZcbiAgICAgICAgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSBldmVudCA9PiB7XG4gICAgICBpZiAoaGFzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAoaGFzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkuZm9yRWFjaChpdGVtSW1nID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpdGVtSW1nLCBFVkVOVF9EUkFHX1NUQVJULCBlID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XVxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbilcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgZWxlbWVudC5wYXJlbnROb2RlKSA6XG4gICAgICBbXVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlPcmRlcihvcmRlciwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgcmV0dXJuIGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2l0ZW1zLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpKVxuXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lORElDQVRPUiwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGluZGljYXRvcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyksIDEwKSA9PT0gdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpKSB7XG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgICAgIGluZGljYXRvcnNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb25Pck9yZGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbk9yT3JkZXIpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG4gICAgY29uc3QgZXZlbnREaXJlY3Rpb25OYW1lID0gdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlcilcblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgdHJpZ2dlclNsaWRFdmVudCA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNsaWRFdmVudCwgMClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgdHJpZ2dlclNsaWRFdmVudCgpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFbRElSRUNUSU9OX1JJR0hULCBESVJFQ1RJT05fTEVGVF0uaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvblxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoIVtPUkRFUl9ORVhULCBPUkRFUl9QUkVWXS5pbmNsdWRlcyhvcmRlcikpIHtcbiAgICAgIHJldHVybiBvcmRlclxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY2Fyb3VzZWxJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgbGV0IHsgX2NvbmZpZyB9ID0gZGF0YVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICBkYXRhLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRhcmdldCwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIENhcm91c2VsLmdldEluc3RhbmNlKHRhcmdldCkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBDYXJvdXNlbC5kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZShjYXJvdXNlbHNbaV0sIENhcm91c2VsLmdldEluc3RhbmNlKGNhcm91c2Vsc1tpXSkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5DYXJvdXNlbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZTogdHJ1ZSxcbiAgcGFyZW50OiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRoaXMuX2lzU2hvd24oKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXMgPSBbXVxuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChgLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX0gLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX1gLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgICAgYWN0aXZlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFUywgdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKGVsZW0gPT4gIWNoaWxkcmVuLmluY2x1ZGVzKGVsZW0pKSAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5fc2VsZWN0b3IpXG4gICAgaWYgKGFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0ZW1wQWN0aXZlRGF0YSA9IGFjdGl2ZXMuZmluZChlbGVtID0+IGNvbnRhaW5lciAhPT0gZWxlbSlcbiAgICAgIGFjdGl2ZXNEYXRhID0gdGVtcEFjdGl2ZURhdGEgPyBDb2xsYXBzZS5nZXRJbnN0YW5jZSh0ZW1wQWN0aXZlRGF0YSkgOiBudWxsXG5cbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGFjdGl2ZXMuZm9yRWFjaChlbGVtQWN0aXZlID0+IHtcbiAgICAgIGlmIChjb250YWluZXIgIT09IGVsZW1BY3RpdmUpIHtcbiAgICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtQWN0aXZlLCB7IHRvZ2dsZTogZmFsc2UgfSkuaGlkZSgpXG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgRGF0YS5zZXQoZWxlbUFjdGl2ZSwgREFUQV9LRVksIG51bGwpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgY29uc3QgZWxlbSA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcilcblxuICAgICAgaWYgKGVsZW0gJiYgIXRoaXMuX2lzU2hvd24oZWxlbSkpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YCwgdGhpcy5fY29uZmlnLnBhcmVudClcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbSA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbSkpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRyaWdnZXJBcnJheSwgaXNPcGVuKSB7XG4gICAgaWYgKCF0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfVxuXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgKGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG5cbiAgc2VsZWN0b3JFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgeyB0b2dnbGU6IGZhbHNlIH0pLnRvZ2dsZSgpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ29sbGFwc2UgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIGlmIChpc0hUTUxFbGVtZW50KGVsZW1lbnQpICYmIGluY2x1ZGVTY2FsZSkge1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoOyAvLyBEbyBub3QgYXR0ZW1wdCB0byBkaXZpZGUgYnkgMCwgb3RoZXJ3aXNlIHdlIGdldCBgSW5maW5pdHlgIGFzIHNjYWxlXG4gICAgLy8gRmFsbGJhY2sgdG8gMSBpbiBjYXNlIGJvdGggdmFsdWVzIGFyZSBgMGBcblxuICAgIGlmIChvZmZzZXRXaWR0aCA+IDApIHtcbiAgICAgIHNjYWxlWCA9IHJlY3Qud2lkdGggLyBvZmZzZXRXaWR0aCB8fCAxO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRIZWlnaHQgPiAwKSB7XG4gICAgICBzY2FsZVkgPSByZWN0LmhlaWdodCAvIG9mZnNldEhlaWdodCB8fCAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJvdW5kKHJlY3Qud2lkdGggLyBzY2FsZVgpLFxuICAgIGhlaWdodDogcm91bmQocmVjdC5oZWlnaHQgLyBzY2FsZVkpLFxuICAgIHRvcDogcm91bmQocmVjdC50b3AgLyBzY2FsZVkpLFxuICAgIHJpZ2h0OiByb3VuZChyZWN0LnJpZ2h0IC8gc2NhbGVYKSxcbiAgICBib3R0b206IHJvdW5kKHJlY3QuYm90dG9tIC8gc2NhbGVZKSxcbiAgICBsZWZ0OiByb3VuZChyZWN0LmxlZnQgLyBzY2FsZVgpLFxuICAgIHg6IHJvdW5kKHJlY3QubGVmdCAvIHNjYWxlWCksXG4gICAgeTogcm91bmQocmVjdC50b3AgLyBzY2FsZVkpXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB4IC09IG9mZnNldFBhcmVudFt3aWR0aFByb3BdIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNIVE1MRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF0aE1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByZWN0LndpZHRoIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICB2YXIgc2NhbGVZID0gcmVjdC5oZWlnaHQgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSID0gJ25hdmJhcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogWzAsIDJdLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZScsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBhdXRvQ2xvc2U6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bih0aGlzLl9tZW51KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIC8vIFRvdGFsbHkgZGlzYWJsZSBQb3BwZXIgZm9yIERyb3Bkb3ducyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdub25lJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlYXRlUG9wcGVyKHBhcmVudClcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICFwYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9uKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKHRoaXMuX21lbnUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbSwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIocGFyZW50KSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIGNvbnN0IGlzRGlzcGxheVN0YXRpYyA9IHBvcHBlckNvbmZpZy5tb2RpZmllcnMuZmluZChtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZXMnICYmIG1vZGlmaWVyLmVuYWJsZWQgPT09IGZhbHNlKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG5cbiAgICBpZiAoaXNEaXNwbGF5U3RhdGljKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJylcbiAgICB9XG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoaXNWaXNpYmxlKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlc1tpXSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQuX2lzU2hvd24oKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSA/XG4gICAgICBldmVudC5rZXkgPT09IFNQQUNFX0tFWSB8fCAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZICYmXG4gICAgICAoKGV2ZW50LmtleSAhPT0gQVJST1dfRE9XTl9LRVkgJiYgZXZlbnQua2V5ICE9PSBBUlJPV19VUF9LRVkpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX01FTlUpKSkgOlxuICAgICAgIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSB7XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3coKVxuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZKSB7XG4gICAgICBEcm9wZG93bi5jbGVhck1lbnVzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ecm9wZG93biB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGBcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdwYWRkaW5nUmlnaHQnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0JylcbiAgfVxuXG4gIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3ApIHtcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgY2FsbEJhY2soc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpLmZvckVhY2goY2FsbEJhY2spXG4gICAgfVxuICB9XG5cbiAgaXNPdmVyZmxvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZXhlY3V0ZSwgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCwgcmVmbG93LCB0eXBlQ2hlY2tDb25maWcgfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIHJvb3RFbGVtZW50OiAnYm9keScsIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgY2xpY2tDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNsYXNzIEJhY2tkcm9wIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyh0aGlzLl9nZXRFbGVtZW50KCkpXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZCh0aGlzLl9nZXRFbGVtZW50KCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZ2V0RWxlbWVudCgpLCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCB7IHR5cGVDaGVja0NvbmZpZyB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRyYXBFbGVtZW50OiBudWxsLCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxuICBhdXRvZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCcsXG4gIGF1dG9mb2N1czogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY2xhc3MgRm9jdXNUcmFwIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGxcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQsIGF1dG9mb2N1cyB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhdXRvZm9jdXMpIHtcbiAgICAgIHRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpXG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWVcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKFxuICAgICAgdGFyZ2V0ID09PSBkb2N1bWVudCB8fFxuICAgICAgdGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fFxuICAgICAgdHJhcEVsZW1lbnQuY29udGFpbnModGFyZ2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5mb2N1c2FibGVDaGlsZHJlbih0cmFwRWxlbWVudClcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRFxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcCdcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcubW9kYWwuc2hvdydcbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFNjcm9sbEJhckhlbHBlcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRVVQX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUylcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBbd2luZG93LCB0aGlzLl9kaWFsb2ddXG4gICAgICAuZm9yRWFjaChodG1sRWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGh0bWxFbGVtZW50LCBFVkVOVF9LRVkpKVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLCAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHRoaXMuX2FkanVzdERpYWxvZygpKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9zY3JvbGxCYXIucmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KGNhbGxiYWNrKVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBjbGFzc0xpc3QsIHNjcm9sbEhlaWdodCwgc3R5bGUgfSA9IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSBzY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICAvLyByZXR1cm4gaWYgdGhlIGZvbGxvd2luZyBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gaGFzbid0IHlldCBjb21wbGV0ZWRcbiAgICBpZiAoKCFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgc3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU1RBVElDKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICBzdHlsZS5vdmVyZmxvd1kgPSAnJ1xuICAgICAgICB9LCB0aGlzLl9kaWFsb2cpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fZGlhbG9nKVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKClcbiAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMFxuXG4gICAgaWYgKCghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCgpKSB8fCAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZyAmJiBpc1JUTCgpKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICgoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kZGFsIHRvZ2dsZXIgd2hpbGUgYW5vdGhlciBvbmUgaXMgb3BlblxuICBjb25zdCBhbGxSZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbGxSZWFkeU9wZW4pIHtcbiAgICBNb2RhbC5nZXRJbnN0YW5jZShhbGxSZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbClcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLk1vZGFsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnYm9vbGVhbicsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICBpc1Zpc2libGU6IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogKCkgPT4gdGhpcy5oaWRlKClcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFsbFJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFsbFJlYWR5T3BlbiAmJiBhbGxSZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbGxSZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikuZm9yRWFjaChlbCA9PiBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbCkuc2hvdygpKVxuKVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cnMuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0clJlZ2V4ID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChyZWdFeHBbaV0udGVzdChhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBhbGxvd2xpc3RLZXlzID0gT2JqZWN0LmtleXMoYWxsb3dMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghYWxsb3dsaXN0S2V5cy5pbmNsdWRlcyhlbE5hbWUpKSB7XG4gICAgICBlbC5yZW1vdmUoKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QsIHNhbml0aXplSHRtbCB9IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSlcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGh0bWw6IGZhbHNlLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIG9mZnNldDogWzAsIDBdLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUID0gJ291dCdcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcbmNvbnN0IFNFTEVDVE9SX01PREFMID0gYC4ke0NMQVNTX05BTUVfTU9EQUx9YFxuXG5jb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNJblRoZURvbSA9IHNoYWRvd1Jvb3QgPT09IG51bGwgP1xuICAgICAgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLl9lbGVtZW50KSA6XG4gICAgICBzaGFkb3dSb290LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEEgdHJpY2sgdG8gcmVjcmVhdGUgYSB0b29sdGlwIGluIGNhc2UgYSBuZXcgdGl0bGUgaXMgZ2l2ZW4gYnkgdXNpbmcgdGhlIE5PVCBkb2N1bWVudGVkIGBkYXRhLWJzLW9yaWdpbmFsLXRpdGxlYFxuICAgIC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGxhdGVyIGluIGZhdm9yIG9mIGEgYHNldENvbnRlbnRgIG1ldGhvZFxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLk5BTUUgPT09ICd0b29sdGlwJyAmJiB0aGlzLnRpcCAmJiB0aGlzLmdldFRpdGxlKCkgIT09IHRoaXMudGlwLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfVE9PTFRJUF9JTk5FUikuaW5uZXJIVE1MKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICAgIHRoaXMudGlwLnJlbW92ZSgpXG4gICAgICB0aGlzLnRpcCA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgdGhpcy5fY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5fZWxlbWVudCkgOlxuICAgICAgdGhpcy5fY29uZmlnLnBsYWNlbWVudFxuXG4gICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuX2NvbmZpZ1xuICAgIERhdGEuc2V0KHRpcCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCkpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjdXN0b21DbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICBpZiAoY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKC4uLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICB0aXAucmVtb3ZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcblxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIGlzQW5pbWF0ZWQpXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9jb25maWcudGVtcGxhdGVcblxuICAgIGNvbnN0IHRpcCA9IGVsZW1lbnQuY2hpbGRyZW5bMF1cbiAgICB0aGlzLnNldENvbnRlbnQodGlwKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy50aXAgPSB0aXBcbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQodGlwKSB7XG4gICAgdGhpcy5fc2FuaXRpemVBbmRTZXRDb250ZW50KHRpcCwgdGhpcy5nZXRUaXRsZSgpLCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSKVxuICB9XG5cbiAgX3Nhbml0aXplQW5kU2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSlcblxuICAgIGlmICghY29udGVudCAmJiB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQodGVtcGxhdGVFbGVtZW50LCBjb250ZW50KVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICBjb250ZW50ID0gZ2V0RWxlbWVudChjb250ZW50KVxuXG4gICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoY29udGVudC5wYXJlbnROb2RlICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50LnRleHRDb250ZW50XG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykgfHwgdGhpcy5fY29uZmlnLnRpdGxlXG5cbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGl0bGUpXG4gIH1cblxuICB1cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpIHtcbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuICdlbmQnXG4gICAgfVxuXG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuICdzdGFydCdcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNobWVudFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dCB8fCB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudCkge1xuICAgIHJldHVybiB0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnRlbnQuY2FsbCh0aGlzLl9lbGVtZW50KSA6IGNvbnRlbnRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb25DaGFuZ2UnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uRmlyc3RVcGRhdGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcHRpb25zLnBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5fZ2V0QmFzaWNDbGFzc1ByZWZpeCgpfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMudG9nZ2xlKGV2ZW50KSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fZW50ZXIoZXZlbnQpKVxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgIGNvbnN0IG9yaWdpbmFsVGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICh0aXRsZSB8fCBvcmlnaW5hbFRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUgfHwgJycpXG4gICAgICBpZiAodGl0bGUgJiYgIXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgJiYgIXRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dClcblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuX2NvbmZpZy5kZWxheSB8fCAhY29udGV4dC5fY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dClcblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX09VVFxuXG4gICAgaWYgKCFjb250ZXh0Ll9jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuX2NvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuX2NvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKS5mb3JFYWNoKGRhdGFBdHRyID0+IHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyKSkge1xuICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcuYWxsb3dMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLl9jb25maWdba2V5XSkge1xuICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuX2NvbmZpZ1trZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBiYXNpY0NsYXNzUHJlZml4UmVnZXggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke3RoaXMuX2dldEJhc2ljQ2xhc3NQcmVmaXgoKX1cXFxcUytgLCAnZycpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKGJhc2ljQ2xhc3NQcmVmaXhSZWdleClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgX2dldEJhc2ljQ2xhc3NQcmVmaXgoKSB7XG4gICAgcmV0dXJuIENMQVNTX1BSRUZJWFxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcG9wcGVyRGF0YVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50aXAgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChzdGF0ZS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVG9vbHRpcC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBvZmZzZXQ6IFswLCA4XSxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgY29udGVudDogJycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBzZXRDb250ZW50KHRpcCkge1xuICAgIHRoaXMuX3Nhbml0aXplQW5kU2V0Q29udGVudCh0aXAsIHRoaXMuZ2V0VGl0bGUoKSwgU0VMRUNUT1JfVElUTEUpXG4gICAgdGhpcy5fc2FuaXRpemVBbmRTZXRDb250ZW50KHRpcCwgdGhpcy5fZ2V0Q29udGVudCgpLCBTRUxFQ1RPUl9DT05URU5UKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudClcbiAgfVxuXG4gIF9nZXRCYXNpY0NsYXNzUHJlZml4KCkge1xuICAgIHJldHVybiBDTEFTU19QUkVGSVhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gUG9wb3Zlci5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuUG9wb3ZlciB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihQb3BvdmVyKVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMSk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IDEwLFxuICBtZXRob2Q6ICdhdXRvJyxcbiAgdGFyZ2V0OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnbnVtYmVyJyxcbiAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgdGFyZ2V0OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TQ1JPTEwgPSBgc2Nyb2xsJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9LCAuJHtDTEFTU19OQU1FX0RST1BET1dOX0lURU19YFxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDBcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9TQ1JPTEwsICgpID0+IHRoaXMuX3Byb2Nlc3MoKSlcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5fcHJvY2VzcygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID9cbiAgICAgIE1FVEhPRF9PRkZTRVQgOlxuICAgICAgTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgYXV0b01ldGhvZCA6XG4gICAgICB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBNRVRIT0RfUE9TSVRJT04gP1xuICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOlxuICAgICAgMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0xJTktfSVRFTVMsIHRoaXMuX2NvbmZpZy50YXJnZXQpXG5cbiAgICB0YXJnZXRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0U2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRhcmdldFNlbGVjdG9yKSA6IG51bGxcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIE1hbmlwdWxhdG9yW29mZnNldE1ldGhvZF0odGFyZ2V0KS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9LRVkpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIF9wcm9jZXNzKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG4gICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy5fY29uZmlnLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuX2dldE9mZnNldEhlaWdodCgpXG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9vZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8IHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gU0VMRUNUT1JfTElOS19JVEVNUy5zcGxpdCgnLCcpXG4gICAgICAubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfVtkYXRhLWJzLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSwke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYClcblxuICAgIGNvbnN0IGxpbmsgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHF1ZXJpZXMuam9pbignLCcpLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgbGluay5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLnBhcmVudHMobGluaywgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5mb3JFYWNoKGxpc3RHcm91cCA9PiB7XG4gICAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YClcbiAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcblxuICAgICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9OQVZfSVRFTVMpXG4gICAgICAgICAgICAuZm9yRWFjaChuYXZJdGVtID0+IHtcbiAgICAgICAgICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4obmF2SXRlbSwgU0VMRUNUT1JfTkFWX0xJTktTKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9MSU5LX0lURU1TLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSlcbiAgICAuZm9yRWFjaChzcHkgPT4gbmV3IFNjcm9sbFNweShzcHkpKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlNjcm9sbFNweSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9VTCA9ICc6c2NvcGUgPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc6c2NvcGUgPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gU2VsZWN0b3JFbmdpbmUuZmluZChpdGVtU2VsZWN0b3IsIGxpc3RFbGVtZW50KVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IHByZXZpb3VzID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICE9PSBudWxsICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFX1VMLCBjb250YWluZXIpIDpcbiAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKGNvbnRhaW5lciwgU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmIGFjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQsIGFjdGl2ZS5wYXJlbnROb2RlKVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICBkcm9wZG93bkNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgcmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUgPT09ICdMSScpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgZHJvcGRvd25FbGVtZW50KVxuICAgICAgICAgIC5mb3JFYWNoKGRyb3Bkb3duID0+IGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuICBkYXRhLnNob3coKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRhYiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJyAvLyBAZGVwcmVjYXRlZCAtIGtlcHQgaGVyZSBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICB9XG5cbiAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgIGNhc2UgJ2ZvY3Vzb3V0JzpcbiAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub2FzdCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4xKTogaW5kZXgudW1kLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vc3JjL2FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NyYy9idXR0b24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvY2Fyb3VzZWwnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9zcmMvY29sbGFwc2UnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9zcmMvZHJvcGRvd24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9zcmMvbW9kYWwnXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4vc3JjL29mZmNhbnZhcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vc3JjL3BvcG92ZXInXG5pbXBvcnQgU2Nyb2xsU3B5IGZyb20gJy4vc3JjL3Njcm9sbHNweSdcbmltcG9ydCBUYWIgZnJvbSAnLi9zcmMvdGFiJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vc3JjL3RvYXN0J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9zcmMvdG9vbHRpcCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBbGVydCxcbiAgQnV0dG9uLFxuICBDYXJvdXNlbCxcbiAgQ29sbGFwc2UsXG4gIERyb3Bkb3duLFxuICBNb2RhbCxcbiAgT2ZmY2FudmFzLFxuICBQb3BvdmVyLFxuICBTY3JvbGxTcHksXG4gIFRhYixcbiAgVG9hc3QsXG4gIFRvb2x0aXBcbn1cbiIsIi8vIFZlbmRvcnNcbndpbmRvdy5ib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLmpzJyk7XG4vL2ltcG9ydCBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwJztcblxuLy8gU2l0ZSBMYXlvdXRcbmltcG9ydCAnLi9sYXlvdXQvc2l0ZS1sYXlvdXQnXG5pbXBvcnQgJy4vbGF5b3V0L3NpdGUtbmF2J1xuXG4vLyBWZW5kb3JzXG5pbXBvcnQgJy4vdmVuZG9ycy9nc2FwJyAgXG5cbi8vIENvbXBvbmVudHNcbi8vaW1wb3J0ICcuL2NvbXBvbmVudHMvY29tcG9uZW50cyciLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4oZnVuY3Rpb24oJCkge1xuXG4gICAgLyoqXG4gICAgKiBQYWdlIGxvYWQgYW5pbSB1c2luZyBDU1NcbiAgICAqL1xuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiI3BhZ2UtbG9hZFwiKS5mYWRlT3V0KDIwMCk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuKGZ1bmN0aW9uKCQpIHtcblxuICAgIC8qKlxuICAgICogTW9iaWxlIE5hdiBkcm9wZG93blxuICAgICovXG4gICAgJCgnLm5hdi10b2dnbGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLm5leHQoJy5uYXYtZHJvcGRvd24nKS50b2dnbGVDbGFzcygnc2hvdycpOyAgICAgICAgXG4gICAgICAgICQodGhpcykucGFyZW50cygnLnNpdGUtd3JhcCcpLnBhcmVudCgnYm9keScpLnRvZ2dsZUNsYXNzKCduYXYtYWN0aXZlJyk7ICAgICAgICBcbiAgICB9KVxuXG4gICAgXG4gICAgLyoqXG4gICAgKiBOYXYgbWVudSBpdGVtIHdpdGggc3ViLW1lbnUgY2xhc3MgdG9nZ2xlIFxuICAgICogc3ViLW1lbnUgc2hvdy9oaWRlIHNsaWRlIGFuaW1hdGlvblxuICAgICovXG4gICAgJCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN1Yi1tZW51JykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgJCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJykucmVtb3ZlQXR0cihcImhyZWZcIik7ICAgICAgICBcbiAgICB9KVxuXG4gICAgJCggXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiICkuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAkKCBcIi5zdWItbWVudVwiICkuc2xpZGVUb2dnbGUoIFwiXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBBbmltYXRpb24gY29tcGxldGUuXG4gICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmUgaHJlZiBmcm9tIHN1Yi1tZW51LWhlYWRlclxuICAgICogXG4gICAgKi9cbiAgICAkKCcuc3ViLW1lbnUtaGVhZGVyIGEnKS5yZW1vdmVBdHRyKCdocmVmJyk7XG5cblxuICAgIC8qKlxuICAgICogSGlkZSBTaG93IEhlYWRlciBvbiBTY3JvbGxcbiAgICAqL1xuICAgIHZhciBsYXN0U2Nyb2xsID0gMDtcbiAgICAvLyQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgLy92YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2lmIChzY3JvbGwgPiBsYXN0U2Nyb2xsKSB7XG4gICAgICAgICAgICAvLyQoJy5uYXZiYXItaHMnKS5jc3Moe1xuICAgICAgICAgICAgICAgIC8vJ3RyYW5zaXRpb24nOiAnYWxsIC4zcyBlYXNlJyxcbiAgICAgICAgICAgICAgICAvLyd0cmFuc2l0aW9uLWRlbGF5JzogJzAuMThzJyxcbiAgICAgICAgICAgICAgICAvLyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMHB4LCAtMTAwJSwgMHB4KSBzY2FsZTNkKDEsIDEsIDEpJyxcbiAgICAgICAgICAgICAgICAvLyd3aWxsLWNoYW5nZSc6ICdhbGwnLFxuICAgICAgICAgICAgLy99KTsgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIC8vfSBlbHNlIGlmIChzY3JvbGwgPCBsYXN0U2Nyb2xsKSB7XG4gICAgICAgICAgICAvLyQoJy5uYXZiYXItaHMnKS5jc3Moe1xuICAgICAgICAgICAgICAgIC8vJ3RyYW5zaXRpb24nOiAnYWxsIC4zcyBlYXNlJyxcbiAgICAgICAgICAgICAgICAvLyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUzZCgxLCAxLCAxKScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy99KTtcbiAgICAgICAgLy99XG4gICAgLy9sYXN0U2Nyb2xsID0gc2Nyb2xsO1xuICAgIC8vfSk7XG5cbiAgICAvKipcbiAgICAqIEFkZCBDbGFzcyBIZWFkZXIgb24gU2Nyb2xsXG4gICAgKi9cbiAgICBcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9wX29mZnNldCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgJCgnI3Njcm9sbFRvcCcpLmh0bWwodG9wX29mZnNldCk7XG4gICAgICAgIGlmICh0b3Bfb2Zmc2V0ID09IDApIHtcbiAgICAgICAgICAgICQoJy5uYXZiYXItaHMnKS5yZW1vdmVDbGFzcygnb24tc2Nyb2xsJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5uYXZiYXItaHMnKS5hZGRDbGFzcygnb24tc2Nyb2xsJyk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcblxufShqUXVlcnkpKTtcblxuLy9hbGVydChcIkhlbGxvISBJIGFtIGFuIGFsZXJ0IGJveCEhXCIpOyAiLCJjb25zdCBhbmltX3BhcmFsbGF4X2Fzc2V0cyA9IGdzYXAudXRpbHMudG9BcnJheSgnLnBhcmFsbGF4Jyk7XG5hbmltX3BhcmFsbGF4X2Fzc2V0cy5mb3JFYWNoKGFuaW1fcGFyYWxsYXhfYXNzZXQgPT4ge1xuICBnc2FwLmZyb21UbyhhbmltX3BhcmFsbGF4X2Fzc2V0LCB7IFxuICAgIFxuICAgIHk6IDIwMCB9LCB7IHk6IC0yMDAsIFxuICAgIFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGFuaW1fcGFyYWxsYXhfYXNzZXQsXG4gICAgICAvL3N0YXJ0OiBcIjEwMCBib3R0b21cIiwgLy8gd2hlbiB0aGUgdG9wIG9mIHRoZSB0cmlnZ2VyIGhpdHMgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcbiAgICAgIC8vZW5kOiBcIis9MTQwMFwiLCAvLyBlbmQgYWZ0ZXIgc2Nyb2xsaW5nIDUwMHB4IGJleW9uZCB0aGUgc3RhcnRcbiAgICAgIHNjcnViOiAuNSxcbiAgICB9XG4gIH0pXG59KTtcblxuY29uc3QgYW5pbV9kcmF3X21lX2Jsb2NrcyA9IGdzYXAudXRpbHMudG9BcnJheSgnLmRyYXdfbWUnKTtcbmFuaW1fZHJhd19tZV9ibG9ja3MuZm9yRWFjaChhbmltX2RyYXdfbWVfYmxvY2sgPT4ge1xuICBnc2FwLmZyb20oYW5pbV9kcmF3X21lX2Jsb2NrLCB7ICAgICBcbiAgICBkdXJhdGlvbjoxLFxuICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIC8vc3RhZ2dlcjogMC4xLCBcbiAgICBkcmF3U1ZHOiAwLCBcbiAgICBvcGFjaXR5OjAsICAgICAgIFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGFuaW1fZHJhd19tZV9ibG9jayxcbiAgICAgIHN0YXJ0OiBcIjEwMCBib3R0b21cIiwgLy8gd2hlbiB0aGUgdG9wIG9mIHRoZSB0cmlnZ2VyIGhpdHMgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcbiAgICAgIGVuZDogXCIrPTQwMFwiLCAvLyBlbmQgYWZ0ZXIgc2Nyb2xsaW5nIDUwMHB4IGJleW9uZCB0aGUgc3RhcnRcbiAgICAgIHNjcnViOiAwLjEsXG4gICAgfVxuICB9KVxufSk7XG5cbmNvbnN0IGFuaW1fZHJhd19tZV8xNTBfYmxvY2tzID0gZ3NhcC51dGlscy50b0FycmF5KCcuZHJhd19tZV8xNTAnKTtcbmFuaW1fZHJhd19tZV8xNTBfYmxvY2tzLmZvckVhY2goYW5pbV9kcmF3X21lXzE1MF9ibG9jayA9PiB7XG4gIGdzYXAuZnJvbShhbmltX2RyYXdfbWVfMTUwX2Jsb2NrLCB7ICAgICBcbiAgICBkdXJhdGlvbjoxLFxuICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIC8vc3RhZ2dlcjogMC4xLCBcbiAgICBkcmF3U1ZHOiAwLCBcbiAgICBvcGFjaXR5OjAsICAgICAgIFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGFuaW1fZHJhd19tZV8xNTBfYmxvY2ssXG4gICAgICBzdGFydDogXCIxNTAgYm90dG9tXCIsIC8vIHdoZW4gdGhlIHRvcCBvZiB0aGUgdHJpZ2dlciBoaXRzIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0XG4gICAgICBlbmQ6IFwiKz00MDBcIiwgLy8gZW5kIGFmdGVyIHNjcm9sbGluZyA1MDBweCBiZXlvbmQgdGhlIHN0YXJ0XG4gICAgICBzY3J1YjogMC4xLFxuICAgIH1cbiAgfSlcbn0pO1xuXG5cbmNvbnN0IGFuaW1fem9vbV9vdXRfYmxvY2tzID0gZ3NhcC51dGlscy50b0FycmF5KCcuYW5pbS16b29tLW91dCcpO1xuYW5pbV96b29tX291dF9ibG9ja3MuZm9yRWFjaChhbmltX3pvb21fb3V0X2Jsb2NrID0+IHtcbiAgZ3NhcC5mcm9tKGFuaW1fem9vbV9vdXRfYmxvY2ssIHsgXG4gICAgZHVyYXRpb246IDMsXG4gICAgZWFzZTogXCJwb3dlcjQub3V0XCIsXG4gICAgb3BhY2l0eTowLFxuICAgIHNjYWxlOjEuNSxcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBhbmltX3pvb21fb3V0X2Jsb2NrLFxuICAgICAgc3RhcnQ6IFwiMjAwIGJvdHRvbVwiLCAvLyB3aGVuIHRoZSB0b3Agb2YgdGhlIHRyaWdnZXIgaGl0cyB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgZW5kOiBcIis9NTAwXCIsIC8vIGVuZCBhZnRlciBzY3JvbGxpbmcgNTAwcHggYmV5b25kIHRoZSBzdGFydFxuICAgICAgc2NydWI6IDEsXG4gICAgfVxuICB9KVxufSk7XG5cbmNvbnN0IGFuaW1fZmFkZV9pbl91cF9ibG9ja3MgPSBnc2FwLnV0aWxzLnRvQXJyYXkoJy5hbmltLWZhZGUtaW4tdXAnKTtcbmFuaW1fZmFkZV9pbl91cF9ibG9ja3MuZm9yRWFjaChhbmltX2ZhZGVfaW5fdXBfYmxvY2sgPT4ge1xuICBnc2FwLmZyb20oYW5pbV9mYWRlX2luX3VwX2Jsb2NrLCB7IFxuICAgIGR1cmF0aW9uOiAzLFxuICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIG9wYWNpdHk6MCxcbiAgICB5OjIwMCxcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBhbmltX2ZhZGVfaW5fdXBfYmxvY2ssXG4gICAgICBzdGFydDogXCIxMDAgYm90dG9tXCIsIC8vIHdoZW4gdGhlIHRvcCBvZiB0aGUgdHJpZ2dlciBoaXRzIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0XG4gICAgICBlbmQ6IFwiKz00MDBcIiwgLy8gZW5kIGFmdGVyIHNjcm9sbGluZyA1MDBweCBiZXlvbmQgdGhlIHN0YXJ0XG4gICAgICBzY3J1YjogMSxcbiAgICB9XG4gIH0pXG59KTtcblxuY29uc3QgYW5pbV9mYWRlX2luX3VwX3F1aWNrZXJfYmxvY2tzID0gZ3NhcC51dGlscy50b0FycmF5KCcuYW5pbS1mYWRlLWluLXVwLXF1aWNrZXInKTtcbmFuaW1fZmFkZV9pbl91cF9xdWlja2VyX2Jsb2Nrcy5mb3JFYWNoKGFuaW1fZmFkZV9pbl91cF9xdWlja2VyX2Jsb2NrID0+IHtcbiAgZ3NhcC5mcm9tKGFuaW1fZmFkZV9pbl91cF9xdWlja2VyX2Jsb2NrLCB7IFxuICAgIGR1cmF0aW9uOiAzLFxuICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIC8vb3BhY2l0eTowLFxuICAgIHk6MjAwLFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGFuaW1fZmFkZV9pbl91cF9xdWlja2VyX2Jsb2NrLFxuICAgICAgc3RhcnQ6IFwiLT0xMDAgYm90dG9tXCIsIC8vIHdoZW4gdGhlIHRvcCBvZiB0aGUgdHJpZ2dlciBoaXRzIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0XG4gICAgICAvL2VuZDogXCIrPTQwMFwiLCAvLyBlbmQgYWZ0ZXIgc2Nyb2xsaW5nIDUwMHB4IGJleW9uZCB0aGUgc3RhcnRcbiAgICAgIHNjcnViOiAxLFxuICAgIH1cbiAgfSlcbn0pO1xuXG5jb25zdCBhbmltX2ZhZGVfaW5fbGVmdF9ibG9ja3MgPSBnc2FwLnV0aWxzLnRvQXJyYXkoJy5hbmltLWZhZGUtaW4tbGVmdCcpO1xuYW5pbV9mYWRlX2luX2xlZnRfYmxvY2tzLmZvckVhY2goYW5pbV9mYWRlX2luX2xlZnRfYmxvY2sgPT4ge1xuICBnc2FwLmZyb20oYW5pbV9mYWRlX2luX2xlZnRfYmxvY2ssIHsgXG4gICAgZHVyYXRpb246IDIsXG4gICAgZWFzZTogXCJwb3dlcjQub3V0XCIsXG4gICAgb3BhY2l0eTowLFxuICAgIHNjYWxlOjEuMTUsXG4gICAgeDotMjAwLFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGFuaW1fZmFkZV9pbl9sZWZ0X2Jsb2NrLFxuICAgICAgc3RhcnQ6IFwiMzAwIGJvdHRvbVwiLCAvLyB3aGVuIHRoZSB0b3Agb2YgdGhlIHRyaWdnZXIgaGl0cyB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgZW5kOiBcIis9NTAwXCIsIC8vIGVuZCBhZnRlciBzY3JvbGxpbmcgNTAwcHggYmV5b25kIHRoZSBzdGFydFxuICAgICAgc2NydWI6IDEsXG4gICAgfVxuICB9KVxufSk7XG5cbmNvbnN0IGFuaW1fZmFkZV9pbl9yaWdodF9ibG9ja3MgPSBnc2FwLnV0aWxzLnRvQXJyYXkoJy5hbmltLWZhZGUtaW4tcmlnaHQnKTtcbmFuaW1fZmFkZV9pbl9yaWdodF9ibG9ja3MuZm9yRWFjaChhbmltX2ZhZGVfaW5fcmlnaHRfYmxvY2sgPT4ge1xuICBnc2FwLmZyb20oYW5pbV9mYWRlX2luX3JpZ2h0X2Jsb2NrLCB7IFxuICAgIGR1cmF0aW9uOiAyLFxuICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIG9wYWNpdHk6MCxcbiAgICBzY2FsZToxLjE1LFxuICAgIHg6MjAwLFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGFuaW1fZmFkZV9pbl9yaWdodF9ibG9jayxcbiAgICAgIHN0YXJ0OiBcIjMwMCBib3R0b21cIiwgLy8gd2hlbiB0aGUgdG9wIG9mIHRoZSB0cmlnZ2VyIGhpdHMgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcbiAgICAgIGVuZDogXCIrPTUwMFwiLCAvLyBlbmQgYWZ0ZXIgc2Nyb2xsaW5nIDUwMHB4IGJleW9uZCB0aGUgc3RhcnRcbiAgICAgIHNjcnViOiAxLFxuICAgIH1cbiAgfSlcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=