(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // ??????atob??????????????????????????????????????????`const Base64 = {atob};Base64.atob('xxxx')`??????????????????
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('?????????????????????????????????????????????????????????' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context????????????
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// ??????????????????
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime ??????????????? uni ???????????????????????????????????? uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // ???????????? $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // ?????????????????????????????????????????????????????????__id__???????????????????????????mp-weixin??????navigateTo???AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// ?????? api ???????????????
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue ??? false ???????????????????????????????????????????????????????????????????????????
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// ??????????????????
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// ???????????? key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}????????????????????? key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// ???????????? returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// ??????????????? api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// ?????? api ??????????????????
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// ?????? api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // ?????? Vue.prototype ???????????????
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"onStopService","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('?????? Vue ??? data ???????????????????????? data ???????????????????????? data ?????????????????? vm ??????????????????????????????????????????????????????', data);
      }
    }
  } else {
    try {
      // ??? data ?????????
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // ????????????????????? render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // ?????????????????????????????????????????????
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // ??????????????????????????? $slots ??? props??????????????? vueSlots ????????? $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO ???????????? mpvue ??? mp ??????
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for ???????????????????????????', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent ????????????????????? event ??????
  if (isCustom) {// ???????????????
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// ???????????????????????? event ??? detail ??????
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent ?????????????????????
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // ???????????? scoped slots ??????????????????????????????????????????
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('?????????????????????');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // ????????? web-view ?????? dataset ?????????
  if (!eventOpts) {
    return console.warn('?????????????????????');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao ?????????????????? scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // ??????????????????????????????????????????????????????????????????????????????
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // ???????????????????????????getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// ?????????????????????????????????????????????????????? onShow ??? onLaunch ??????
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// ?????? ???2.2.3 ????????????????????? 2.3.0 ??? nextTick ??????
          console.error('?????????????????????????????????????????? ?????????????????????-??????-????????????-????????????????????? ?????????`2.3.0`??????');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm ???????????? globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // ??????????????? globalData
  appOptions.globalData = vm.$options.globalData || {};
  // ??? methods ?????????????????? getApp() ???
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // ??????????????????(????????????:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // ??????????????????
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO ???????????? for ?????? scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail ?????????,value ?????????(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // ?????? multipleSlots ??????????????? bug??????????????????????????? ??? u-list?????????????????????
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // ??????????????????
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // ????????? vue ??????
        this.$vm = new VueComponent(options);

        // ??????$slots,$scopedSlots???????????????????????????$slots???
        initSlots(this.$vm, properties.vueSlots);

        // ???????????? setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // ????????? props ???????????? true????????????????????? false ????????? created,ready ??????, ??? attached ?????????
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // ?????? mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/*!******************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/static/iconfont/iconfont.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 13:
/*!****************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/utils/utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.toast = toast;function toast() {var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  uni.showToast({
    title: title,
    icon: icon });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 131:
/*!***************************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/components/uni-data-pickerview/uni-data-picker.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default2 = {
  props: {
    localdata: {
      type: [Array, Object],
      default: function _default() {
        return [];
      } },

    collection: {
      type: String,
      default: '' },

    action: {
      type: String,
      default: '' },

    field: {
      type: String,
      default: '' },

    orderby: {
      type: String,
      default: '' },

    where: {
      type: [String, Object],
      default: '' },

    pageData: {
      type: String,
      default: 'add' },

    pageCurrent: {
      type: Number,
      default: 1 },

    pageSize: {
      type: Number,
      default: 20 },

    getcount: {
      type: [Boolean, String],
      default: false },

    getone: {
      type: [Boolean, String],
      default: false },

    gettree: {
      type: [Boolean, String],
      default: false },

    manual: {
      type: Boolean,
      default: false },

    value: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      } },

    modelValue: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      } },

    preload: {
      type: Boolean,
      default: false },

    stepSearh: {
      type: Boolean,
      default: true },

    selfField: {
      type: String,
      default: '' },

    parentField: {
      type: String,
      default: '' },

    multiple: {
      type: Boolean,
      default: false },

    map: {
      type: Object,
      default: function _default() {
        return {
          text: "text",
          value: "value" };

      } } },


  data: function data() {
    return {
      loading: false,
      errorMessage: '',
      loadMore: {
        contentdown: '',
        contentrefresh: '',
        contentnomore: '' },

      dataList: [],
      selected: [],
      selectedIndex: 0,
      page: {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0 } };


  },
  computed: {
    isLocaldata: function isLocaldata() {
      return !this.collection.length;
    },
    postField: function postField() {
      var fields = [this.field];
      if (this.parentField) {
        fields.push("".concat(this.parentField, " as parent_value"));
      }
      return fields.join(',');
    },
    dataValue: function dataValue() {
      var isarr = Array.isArray(this.value) && this.value.length === 0;
      var isstr = typeof this.value === 'string' && !this.value;
      var isnum = typeof this.value === 'number' && !this.value;

      if (isarr || isstr || isnum) {
        return this.modelValue;
      }

      return this.value;
    } },

  created: function created() {var _this = this;
    this.$watch(function () {
      var al = [];
      ['pageCurrent',
      'pageSize',
      'value',
      'modelValue',
      'localdata',
      'collection',
      'action',
      'field',
      'orderby',
      'where',
      'getont',
      'getcount',
      'gettree'].
      forEach(function (key) {
        al.push(_this[key]);
      });
      return al;
    }, function (newValue, oldValue) {
      var needReset = false;
      for (var i = 2; i < newValue.length; i++) {
        if (newValue[i] != oldValue[i]) {
          needReset = true;
          break;
        }
      }
      if (newValue[0] != oldValue[0]) {
        _this.page.current = _this.pageCurrent;
      }
      _this.page.size = _this.pageSize;

      _this.onPropsChange();
    });
    this._treeData = [];
  },
  methods: {
    onPropsChange: function onPropsChange() {
      this._treeData = [];
    },
    getCommand: function getCommand() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      /* eslint-disable no-undef */
      var db = uniCloud.database();

      var action = options.action || this.action;
      if (action) {
        db = db.action(action);
      }

      var collection = options.collection || this.collection;
      db = db.collection(collection);

      var where = options.where || this.where;
      if (!(!where || !Object.keys(where).length)) {
        db = db.where(where);
      }

      var field = options.field || this.field;
      if (field) {
        db = db.field(field);
      }

      var orderby = options.orderby || this.orderby;
      if (orderby) {
        db = db.orderBy(orderby);
      }

      var current = options.pageCurrent !== undefined ? options.pageCurrent : this.page.current;
      var size = options.pageSize !== undefined ? options.pageSize : this.page.size;
      var getCount = options.getcount !== undefined ? options.getcount : this.getcount;
      var getTree = options.gettree !== undefined ? options.gettree : this.gettree;

      var getOptions = {
        getCount: getCount,
        getTree: getTree };

      if (options.getTreePath) {
        getOptions.getTreePath = options.getTreePath;
      }

      db = db.skip(size * (current - 1)).limit(size).get(getOptions);

      return db;
    },
    getNodeData: function getNodeData(callback) {var _this2 = this;
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        where: this._pathWhere() }).
      then(function (res) {
        _this2.loading = false;
        _this2.selected = res.result.data;
        callback && callback();
      }).catch(function (err) {
        _this2.loading = false;
        _this2.errorMessage = err;
      });
    },
    getTreePath: function getTreePath(callback) {var _this3 = this;
      if (this.loading) {
        return;
      }
      this.loading = true;

      this.getCommand({
        field: this.postField,
        getTreePath: {
          startWith: "".concat(this.selfField, "=='").concat(this.dataValue, "'") } }).

      then(function (res) {
        _this3.loading = false;
        var treePath = [];
        _this3._extractTreePath(res.result.data, treePath);
        _this3.selected = treePath;
        callback && callback();
      }).catch(function (err) {
        _this3.loading = false;
        _this3.errorMessage = err;
      });
    },
    loadData: function loadData() {var _this4 = this;
      if (this.isLocaldata) {
        this._processLocalData();
        return;
      }

      if (this.dataValue.length) {
        this._loadNodeData(function (data) {
          _this4._treeData = data;
          _this4._updateBindData();
          _this4._updateSelected();
        });
        return;
      }

      if (this.stepSearh) {
        this._loadNodeData(function (data) {
          _this4._treeData = data;
          _this4._updateBindData();
        });
      } else {
        this._loadAllData(function (data) {
          _this4._treeData = [];
          _this4._extractTree(data, _this4._treeData, null);
          _this4._updateBindData();
        });
      }
    },
    _loadAllData: function _loadAllData(callback) {var _this5 = this;
      if (this.loading) {
        return;
      }
      this.loading = true;

      this.getCommand({
        field: this.postField,
        gettree: true,
        startwith: "".concat(this.selfField, "=='").concat(this.dataValue, "'") }).
      then(function (res) {
        _this5.loading = false;
        callback(res.result.data);
        _this5.onDataChange();
      }).catch(function (err) {
        _this5.loading = false;
        _this5.errorMessage = err;
      });
    },
    _loadNodeData: function _loadNodeData(callback, pw) {var _this6 = this;
      if (this.loading) {
        return;
      }
      this.loading = true;

      this.getCommand({
        field: this.postField,
        where: pw || this._postWhere(),
        pageSize: 500 }).
      then(function (res) {
        _this6.loading = false;
        callback(res.result.data);
        _this6.onDataChange();
      }).catch(function (err) {
        _this6.loading = false;
        _this6.errorMessage = err;
      });
    },
    _pathWhere: function _pathWhere() {
      var result = [];
      var where_field = this._getParentNameByField();
      if (where_field) {
        result.push("".concat(where_field, " == '").concat(this.dataValue, "'"));
      }

      if (this.where) {
        return "(".concat(this.where, ") && (").concat(result.join(' || '), ")");
      }

      return result.join(' || ');
    },
    _postWhere: function _postWhere() {
      var result = [];
      var selected = this.selected;
      var parentField = this.parentField;
      if (parentField) {
        result.push("".concat(parentField, " == null || ").concat(parentField, " == \"\""));
      }
      if (selected.length) {
        for (var i = 0; i < selected.length - 1; i++) {
          result.push("".concat(parentField, " == '").concat(selected[i].value, "'"));
        }
      }

      var where = [];
      if (this.where) {
        where.push("(".concat(this.where, ")"));
      }
      if (result.length) {
        where.push("(".concat(result.join(' || '), ")"));
      }

      return where.join(' && ');
    },
    _nodeWhere: function _nodeWhere() {
      var result = [];
      var selected = this.selected;
      if (selected.length) {
        result.push("".concat(this.parentField, " == '").concat(selected[selected.length - 1].value, "'"));
      }

      if (this.where) {
        return "(".concat(this.where, ") && (").concat(result.join(' || '), ")");
      }

      return result.join(' || ');
    },
    _getParentNameByField: function _getParentNameByField() {
      var fields = this.field.split(',');
      var where_field = null;
      for (var i = 0; i < fields.length; i++) {
        var items = fields[i].split('as');
        if (items.length < 2) {
          continue;
        }
        if (items[1].trim() === 'value') {
          where_field = items[0].trim();
          break;
        }
      }
      return where_field;
    },
    _isTreeView: function _isTreeView() {
      return this.parentField && this.selfField;
    },
    _updateSelected: function _updateSelected() {
      var dl = this.dataList;
      var sl = this.selected;
      var textField = this.map.text;
      var valueField = this.map.value;
      for (var i = 0; i < sl.length; i++) {
        var value = sl[i].value;
        var dl2 = dl[i];
        for (var j = 0; j < dl2.length; j++) {
          var item2 = dl2[j];
          if (item2[valueField] === value) {
            sl[i].text = item2[textField];
            break;
          }
        }
      }
    },
    _updateBindData: function _updateBindData(node) {var _this$_filterData =



      this._filterData(this._treeData, this.selected),dataList = _this$_filterData.dataList,hasNodes = _this$_filterData.hasNodes;

      var isleaf = this._stepSearh === false && !hasNodes;

      if (node) {
        node.isleaf = isleaf;
      }

      this.dataList = dataList;
      this.selectedIndex = dataList.length - 1;

      if (!isleaf && this.selected.length < dataList.length) {
        this.selected.push({
          value: null,
          text: "?????????" });

      }

      return {
        isleaf: isleaf,
        hasNodes: hasNodes };

    },
    _filterData: function _filterData(data, paths) {
      var dataList = [];
      var hasNodes = true;

      dataList.push(data.filter(function (item) {
        return item.parent_value === null || item.parent_value === undefined || item.parent_value === '';
      }));
      for (var i = 0; i < paths.length; i++) {
        var value = paths[i].value;
        var nodes = data.filter(function (item) {
          return item.parent_value === value;
        });

        if (nodes.length) {
          dataList.push(nodes);
        } else {
          hasNodes = false;
        }
      }

      return {
        dataList: dataList,
        hasNodes: hasNodes };

    },
    _extractTree: function _extractTree(nodes, result, parent_value) {
      var list = result || [];
      var valueField = this.map.value;
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        var child = {};
        for (var key in node) {
          if (key !== 'children') {
            child[key] = node[key];
          }
        }
        if (parent_value !== null && parent_value !== undefined && parent_value !== '') {
          child.parent_value = parent_value;
        }
        result.push(child);

        var children = node.children;
        if (children) {
          this._extractTree(children, result, node[valueField]);
        }
      }
    },
    _extractTreePath: function _extractTreePath(nodes, result) {
      var list = result || [];
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        var child = {};
        for (var key in node) {
          if (key !== 'children') {
            child[key] = node[key];
          }
        }
        result.push(child);

        var children = node.children;
        if (children) {
          this._extractTreePath(children, result);
        }
      }
    },
    _findNodePath: function _findNodePath(key, nodes) {var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var textField = this.map.text;
      var valueField = this.map.value;
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var children = node.children;
        var text = node[textField];
        var value = node[valueField];

        path.push({
          value: value,
          text: text });


        if (value === key) {
          return path;
        }

        if (children) {
          var p = this._findNodePath(key, children, path);
          if (p.length) {
            return p;
          }
        }

        path.pop();
      }
      return [];
    },
    _processLocalData: function _processLocalData() {
      this._treeData = [];
      this._extractTree(this.localdata, this._treeData);

      var inputValue = this.dataValue;
      if (inputValue === undefined) {
        return;
      }

      if (Array.isArray(inputValue)) {
        inputValue = inputValue[inputValue.length - 1];
        if (typeof inputValue === 'object' && inputValue[this.map.value]) {
          inputValue = inputValue[this.map.value];
        }
      }

      this.selected = this._findNodePath(inputValue, this.localdata);
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 132)["default"]))

/***/ }),

/***/ 132:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 133));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e25) {throw _e25;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e26) {didErr = true;err = _e26;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, s) {return e(s = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && s.path);} }, s.exports), s.exports;}var n = s(function (e, t) {var s;e.exports = (s = s || function (e, t) {var s = Object.create || function () {function e() {}return function (t) {var s;return e.prototype = t, s = new e(), e.prototype = null, s;};}(),n = {},r = n.lib = {},o = r.Base = { extend: function extend(e) {var t = s(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, s) {e = this.words = e || [], this.sigBytes = s != t ? s : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,s = e.words,n = this.sigBytes,r = e.sigBytes;if (this.clamp(), n % 4) for (var o = 0; o < r; o++) {var i = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[n + o >>> 2] = s[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,s = this.sigBytes;t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var s, n = [], r = function r(t) {t = t;var s = 987654321,n = 4294967295;return function () {var r = ((s = 36969 * (65535 & s) + (s >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (s || e.random()));s = 987654071 * a(), n.push(4294967296 * a() | 0);}return new i.init(n, t);} }),a = n.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n += 2) {s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;}return new i.init(s, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push(String.fromCharCode(o));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n++) {s[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;}return new i.init(s, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var s = this._data,n = s.words,r = s.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(n, h);}var l = n.splice(0, c);s.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, s) {return new e.init(s).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, s) {return new d.HMAC.init(e, s).finalize(t);};} }), n.algo = {});return n;}(Math), s);}),r = (s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = 0; s < 16; s++) {var n = t + s,r = e[n];e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],S = e[t + 10],v = e[t + 11],T = e[t + 12],P = e[t + 13],A = e[t + 14],I = e[t + 15],b = o[0],E = o[1],O = o[2],U = o[3];b = u(b, E, O, U, i, 7, a[0]), U = u(U, b, E, O, c, 12, a[1]), O = u(O, U, b, E, f, 17, a[2]), E = u(E, O, U, b, p, 22, a[3]), b = u(b, E, O, U, g, 7, a[4]), U = u(U, b, E, O, m, 12, a[5]), O = u(O, U, b, E, y, 17, a[6]), E = u(E, O, U, b, _, 22, a[7]), b = u(b, E, O, U, w, 7, a[8]), U = u(U, b, E, O, k, 12, a[9]), O = u(O, U, b, E, S, 17, a[10]), E = u(E, O, U, b, v, 22, a[11]), b = u(b, E, O, U, T, 7, a[12]), U = u(U, b, E, O, P, 12, a[13]), O = u(O, U, b, E, A, 17, a[14]), b = h(b, E = u(E, O, U, b, I, 22, a[15]), O, U, c, 5, a[16]), U = h(U, b, E, O, y, 9, a[17]), O = h(O, U, b, E, v, 14, a[18]), E = h(E, O, U, b, i, 20, a[19]), b = h(b, E, O, U, m, 5, a[20]), U = h(U, b, E, O, S, 9, a[21]), O = h(O, U, b, E, I, 14, a[22]), E = h(E, O, U, b, g, 20, a[23]), b = h(b, E, O, U, k, 5, a[24]), U = h(U, b, E, O, A, 9, a[25]), O = h(O, U, b, E, p, 14, a[26]), E = h(E, O, U, b, w, 20, a[27]), b = h(b, E, O, U, P, 5, a[28]), U = h(U, b, E, O, f, 9, a[29]), O = h(O, U, b, E, _, 14, a[30]), b = l(b, E = h(E, O, U, b, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, b, E, O, w, 11, a[33]), O = l(O, U, b, E, v, 16, a[34]), E = l(E, O, U, b, A, 23, a[35]), b = l(b, E, O, U, c, 4, a[36]), U = l(U, b, E, O, g, 11, a[37]), O = l(O, U, b, E, _, 16, a[38]), E = l(E, O, U, b, S, 23, a[39]), b = l(b, E, O, U, P, 4, a[40]), U = l(U, b, E, O, i, 11, a[41]), O = l(O, U, b, E, p, 16, a[42]), E = l(E, O, U, b, y, 23, a[43]), b = l(b, E, O, U, k, 4, a[44]), U = l(U, b, E, O, T, 11, a[45]), O = l(O, U, b, E, I, 16, a[46]), b = d(b, E = l(E, O, U, b, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, b, E, O, _, 10, a[49]), O = d(O, U, b, E, A, 15, a[50]), E = d(E, O, U, b, m, 21, a[51]), b = d(b, E, O, U, T, 6, a[52]), U = d(U, b, E, O, p, 10, a[53]), O = d(O, U, b, E, S, 15, a[54]), E = d(E, O, U, b, c, 21, a[55]), b = d(b, E, O, U, w, 6, a[56]), U = d(U, b, E, O, I, 10, a[57]), O = d(O, U, b, E, y, 15, a[58]), E = d(E, O, U, b, P, 21, a[59]), b = d(b, E, O, U, g, 6, a[60]), U = d(U, b, E, O, v, 10, a[61]), O = d(O, U, b, E, f, 15, a[62]), E = d(E, O, U, b, k, 21, a[63]), o[0] = o[0] + b | 0, o[1] = o[1] + E | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;s[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(n / 4294967296),i = n;s[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (s.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, s, n, r, o, i) {var a = e + (t & s | ~t & n) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, s, n, r, o, i) {var a = e + (t & n | s & ~n) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, s, n, r, o, i) {var a = e + (t ^ s ^ n) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, s, n, r, o, i) {var a = e + (s ^ (t | ~n)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), s.MD5);}), s(function (e, t) {var s, r, o;e.exports = (r = (s = n).lib.Base, o = s.enc.Utf8, void (s.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var s = e.blockSize,n = 4 * s;t.sigBytes > n && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < s; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = n, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,s = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(s));} })));}), s(function (e, t) {e.exports = n.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "mp-weixin",l = c(undefined),d = c([]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 136).default || __webpack_require__(/*! uni-stat-config */ 136);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var s, n;return s = g, n = e, Object.prototype.hasOwnProperty.call(s, n) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (s) {y.indexOf(s) > -1 && function (e, t, s) {var n = _[e][t];n || (n = _[e][t] = []), -1 === n.indexOf(s) && "function" == typeof s && n.push(s);}(e, s, t[s]);});}function k(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (s) {y.indexOf(s) > -1 && function (e, t, s) {var n = _[e][t];if (!n) return;var r = n.indexOf(s);r > -1 && n.splice(r, 1);}(e, s, t[s]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, s) {return e.then(function () {return s(t);});}, Promise.resolve()) : Promise.resolve();}function v(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (s) {var _this2 = this;var n = "callFunction" === t && "DCloud-clientDB" === (s && s.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, s = s || {};var o = r.then(function () {return n ? Promise.resolve() : S(v(t, "invoke"), s);}).then(function () {return e.call(_this2, s);}).then(function (e) {return n ? Promise.resolve(e) : S(v(t, "success"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return n ? Promise.reject(e) : S(v(t, "fail"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(s.success || s.fail || s.complete)) return o;o.then(function (e) {s.success && s.success(e), s.complete && s.complete(e);}, function (e) {s.fail && s.fail(e), s.complete && s.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var P = /*#__PURE__*/function (_Error2) {_inherits(P, _Error2);var _super2 = _createSuper(P);function P(e) {var _this3;_classCallCheck(this, P);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return P;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "???????????????{param}", "uniCloud.uploadFile.fileError": "filePath??????File??????" }, "zh-Hant": { "uniCloud.init.paramRequired": "???????????????{param}", "uniCloud.uploadFile.fileError": "filePath??????File??????" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),A = _e3.t,I = _e3.setLocale,b = _e3.getLocale;function E() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId,t = _uni$getSystemInfoSyn.platform;return { PLATFORM: h, OS: t, APPID: p, LOCALE: b(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.14" };}var O = { sign: function sign(e, t) {var s = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (s = s + "&" + t + "=" + e[t]);}), s = s.slice(1), r(s, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (s, n) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("??????H5????????????uniCloud????????????????????????????????????????????????????????????????????????????????????????????????https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return n(new P({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return n(new P({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, s(r);} }));});} };var U = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var C = /*#__PURE__*/function () {function C(e) {_classCallCheck(this, C);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(A("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = U, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(C, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return O.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, s) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? s(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = O.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };return "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = O.sign(s, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: n };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, s) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", s(new P({ code: "AUTH_FAILED", message: "??????accessToken??????" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,s = _ref.name,n = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "??????????????????" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "??????????????????" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,s = _ref2$fileType === void 0 ? "image" : _ref2$fileType,n = _ref2.onUploadProgress,r = _ref2.config;if ("string" !== o(t)) throw new P({ code: "INVALID_PARAM", message: "cloudPath????????????????????????" });if (!(t = t.trim())) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath????????????" });if (/:\/\//.test(t)) throw new P({ code: "INVALID_PARAM", message: "cloudPath?????????" });var i = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: s };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: n }));}).then(function () {return _this7.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: c }) : n(new P({ code: "UPLOAD_FAILED", message: "??????????????????" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, s) {Array.isArray(e) && 0 !== e.length || s(new P({ code: "INVALID_PARAM", message: "fileList????????????????????????????????????" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return C;}();var x = { init: function init(e) {var t = new C(e),s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} },D = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var R;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(R || (R = {}));var q = function q() {};var F = function F() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, s) {e = function e(_e4, n) {return _e4 ? s(_e4) : t(n);};});return e.promise = t, e;};function L(e) {return void 0 === e;}function N(e) {return "[object Null]" === Object.prototype.toString.call(e);}var M;function $(e) {var t = (s = e, "[object Array]" === Object.prototype.toString.call(s) ? e : [e]);var s;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t2 = _e5.isMatch,_s = _e5.genAdapter,_n = _e5.runtime;if (_t2()) return { adapter: _s(), runtime: _n };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(M || (M = {}));var j = { adapter: null, runtime: void 0 },K = ["anonymousUuidKey"];var B = /*#__PURE__*/function (_q) {_inherits(B, _q);var _super3 = _createSuper(B);function B() {var _this8;_classCallCheck(this, B);_this8 = _super3.call(this), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});return _this8;}_createClass(B, [{ key: "setItem", value: function setItem(e, t) {j.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return j.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete j.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete j.adapter.root.tcbObject;} }]);return B;}(q);function H(e, t) {switch (e) {case "local":return t.localStorage || new B();case "none":return new B();default:return t.sessionStorage || new B();}}var W = /*#__PURE__*/function () {function W(e) {_classCallCheck(this, W);if (!this._storage) {this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);var _t3 = "access_token_".concat(e.env),_s2 = "access_token_expire_".concat(e.env),_n2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _s2, refreshTokenKey: _n2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(W, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var s = H(e, j.adapter);for (var _e6 in this.keys) {var _n3 = this.keys[_e6];if (t && K.includes(_e6)) continue;var _r2 = this._storage.getItem(_n3);L(_r2) || N(_r2) || (s.setItem(_n3, _r2), this._storage.removeItem(_n3));}this._storage = s;} }, { key: "setStore", value: function setStore(e, t, s) {if (!this._storage) return;var n = { version: s || "localCachev1", content: t },r = JSON.stringify(n);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var s = this._storage.getItem(e);if (!s) return "";if (s.indexOf(t) >= 0) {return JSON.parse(s).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return W;}();var z = {},V = {};function J(e) {return z[e];}var Y = function Y(e, t) {_classCallCheck(this, Y);this.data = t || null, this.name = e;};var X = /*#__PURE__*/function (_Y) {_inherits(X, _Y);var _super4 = _createSuper(X);function X(e, t) {var _this9;_classCallCheck(this, X);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return X;}(Y);var G = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, s) {s[e] = s[e] || [], s[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, s) {if (s && s[e]) {var _n4 = s[e].indexOf(t);-1 !== _n4 && s[e].splice(_n4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof X) return console.error(e.error), this;var s = "string" == typeof e ? new Y(e, t || {}) : e;var n = s.name;if (this._listens(n)) {s.target = this;var _e7 = this._listeners[n] ? _toConsumableArray(this._listeners[n]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, s);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function Q(e, t) {G.on(e, t);}function Z(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};G.fire(e, t);}function ee(e, t) {G.off(e, t);}var te = "loginStateChanged",se = "loginStateExpire",ne = "loginTypeChanged",re = "anonymousConverted",oe = "refreshAccessToken";var ie;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(ie || (ie = {}));var ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],ce = { "X-SDK-Version": "1.3.5" };function ue(e, t, s) {var n = e[t];e[t] = function (t) {var r = {},o = {};s.forEach(function (s) {var _s$call = s.call(e, t),n = _s$call.data,i = _s$call.headers;Object.assign(r, n), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), n.call(e, t);};}function he() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, ce), {}, { "x-seqid": e }) };}var le = /*#__PURE__*/function () {function le() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, le);var t;this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = J(this.config.env), this._localCache = (t = this.config.env, V[t]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);}_createClass(le, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, s, n, r, o, i, a, _e9, _e10, _t5, _n5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.refreshTokenKey, n = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(s);if (o) {_context5.next = 5;break;}throw new Error("?????????CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(n) === ie.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t5 = this._cache.getStore(s);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t5 });case 17:_n5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_n5.refresh_token), this._refreshAccessToken()));case 19:Z(se), this._cache.removeStore(s);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (Z(oe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(s), this._cache.setStore(s, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, s, n, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, s = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(s)) {_context6.next = 3;break;}throw new Error("refresh token??????????????????????????????");case 3:n = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(n, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!n || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: n, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, s) {var n, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:n = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === ae.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };s && s.onUploadProgress && (a.onUploadProgress = s.onUploadProgress);c = this._localCache.getStore(n);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var n = /\?/.test(t);var r = "";for (var _e14 in s) {"" === r ? !n && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(s[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(D, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(n, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,s,_s3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:s = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === s.data.code && -1 === ae.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_s3 = _context8.sent;if (!_s3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_s3.data.code, "] ").concat(_s3.data.message));case 12:return _context8.abrupt("return", _s3.data);case 13:if (!s.data.code) {_context8.next = 15;break;}throw new Error("[".concat(s.data.code, "] ").concat(s.data.message));case 15:return _context8.abrupt("return", s.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,s = _this$_cache$keys3.accessTokenExpireKey,n = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }]);return le;}();var de = {};function fe(e) {return de[e];}var pe = /*#__PURE__*/function () {function pe(e) {_classCallCheck(this, pe);this.config = e, this._cache = J(e.env), this._request = fe(e.env);}_createClass(pe, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,s = _this$_cache$keys4.accessTokenExpireKey,n = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,s = _this$_cache$keys5.accessTokenKey,n = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(s, e), this._cache.setStore(n, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return pe;}();var ge = /*#__PURE__*/function () {function ge(e) {_classCallCheck(this, ge);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = J(this._envId), this._request = fe(this._envId), this.setUserInfo();}_createClass(ge, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, s;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;s = e.users;return _context10.abrupt("return", (s.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: s, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, s, n, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;s = e.gender;n = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: s, avatarUrl: n, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ge;}();var me = /*#__PURE__*/function () {function me(e) {_classCallCheck(this, me);if (!e) throw new Error("envId is not defined");this._cache = J(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,s = _this$_cache$keys6.accessTokenKey,n = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(s),i = this._cache.getStore(n);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ge(e);}_createClass(me, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === ie.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === ie.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return me;}();var ye = /*#__PURE__*/function (_pe) {_inherits(ye, _pe);var _super5 = _createSuper(ye);function ye() {_classCallCheck(this, ye);return _super5.apply(this, arguments);}_createClass(ye, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, s, n, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;s = this._cache.getStore(e) || void 0;n = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: s, refresh_token: n });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:Z(te);Z(ne, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });_e15 = new me(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("??????????????????");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, s, n, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;s = _this$_cache$keys8.refreshTokenKey;n = this._cache.getStore(t);r = this._cache.getStore(s);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: n, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:Z(re, { env: this.config.env });Z(ne, { loginType: ie.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("??????????????????");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,s = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(s, ie.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ye;}(pe);var _e = /*#__PURE__*/function (_pe2) {_inherits(_e, _pe2);var _super6 = _createSuper(_e);function _e() {_classCallCheck(this, _e);return _super6.apply(this, arguments);}_createClass(_e, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, s;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:s = _context15.sent;if (!s.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(s.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:Z(te);Z(ne, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new me(this.config.env));case 15:throw new Error("?????????????????????");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return _e;}(pe);var we = /*#__PURE__*/function (_pe3) {_inherits(we, _pe3);var _super7 = _createSuper(we);function we() {_classCallCheck(this, we);return _super7.apply(this, arguments);}_createClass(we, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:s = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 5:n = _context16.sent;r = n.refresh_token;o = n.access_token;i = n.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:Z(te);Z(ne, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new me(this.config.env));case 22:throw n.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("??????????????????");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return we;}(pe);var ke = /*#__PURE__*/function (_pe4) {_inherits(ke, _pe4);var _super8 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super8.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));s = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 6:n = _context19.sent;r = n.refresh_token;o = n.access_token_expire;i = n.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:Z(te);Z(ne, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new me(this.config.env));case 23:throw n.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("???????????????????????????");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ke;}(pe);var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);this.config = e, this._cache = J(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(ne, this._onLoginTypeChanged);}_createClass(Se, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ye(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new _e(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new we(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ke(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ye(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new we(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ke(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, s, n, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === ie.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("?????????????????????????????????");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, s = _this$_cache$keys10.accessTokenExpireKey, n = this._cache.getStore(e);if (n) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: n });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(s), Z(te), Z(ne, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;Q(te, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {Q(se, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {Q(oe, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {Q(re, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;Q(ne, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new me(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new _e(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,s = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + s };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,s = _e$data.persistence,n = _e$data.env;n === this.config.env && (this._cache.updatePersistence(s), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ve = function ve(e, t) {t = t || F();var s = fe(this.config.env),n = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: n, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };s.upload({ url: a, data: f, file: r, name: n, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Te = function Te(e, t) {t = t || F();var s = fe(this.config.env),n = e.cloudPath;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Pe = function Pe(_ref5, t) {var e = _ref5.fileList;if (t = t || F(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList????????????????????????" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList????????????????????????????????????" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var s = { fileid_list: e };return fe(this.config.env).send("storage.batchDeleteFile", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ae = function Ae(_ref6, t) {var e = _ref6.fileList;t = t || F(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList????????????????????????" });var s = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _n6 = _step4.value;"object" == typeof _n6 ? (_n6.hasOwnProperty("fileID") && _n6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList????????????????????????fileID???maxAge?????????" }), s.push({ fileid: _n6.fileID, max_age: _n6.maxAge })) : "string" == typeof _n6 ? s.push({ fileid: _n6 }) : t(null, { code: "INVALID_PARAM", message: "fileList???????????????????????????" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var n = { file_list: s };return fe(this.config.env).send("storage.batchGetDownloadUrl", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ie = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, s, n, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ae.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:s = _context29.sent.fileList[0];if (!("SUCCESS" !== s.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(s) : new Promise(function (e) {e(s);}));case 6:n = fe(this.config.env);r = s.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", n.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return n.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ie(_x26, _x27) {return _ref8.apply(this, arguments);};}(),be = function be(_ref9, o) {var e = _ref9.name,t = _ref9.data,s = _ref9.query,n = _ref9.parse,r = _ref9.search;var i = o || F();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("?????????????????????"));var c = { inQuery: s, parse: n, search: r, function_name: e, request_data: a };return fe(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (n) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Ee = { timeout: 15e3, persistence: "session" },Oe = {};var Ue = /*#__PURE__*/function () {function Ue(e) {_classCallCheck(this, Ue);this.config = e || this.config, this.authObj = void 0;}_createClass(Ue, [{ key: "init", value: function init(e) {switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Ee), e), !0) {case this.config.timeout > 6e5:console.warn("timeout?????????????????????[10??????]???????????????????????????"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout?????????????????????[100ms]???????????????????????????"), this.config.timeout = 100;}return new Ue(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || j.adapter.primaryStorage || Ee.persistence;var s;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;z[t] = new W(e), V[t] = new W(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), s = this.config, de[s.env] = new le(s), this.authObj = new Se(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return Q.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ee.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return be.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Pe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ae.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ie.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return ve.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Te.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Oe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var s;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:s = Oe[e];if (s) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return s.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = $(e) || {},t = _ref11.adapter,s = _ref11.runtime;t && (j.adapter = t), s && (j.runtime = s);} }]);return Ue;}();var Ce = new Ue();function xe(e, t, s) {void 0 === s && (s = {});var n = /\?/.test(t),r = "";for (var o in s) {"" === r ? !n && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(s[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var De = /*#__PURE__*/function () {function De() {_classCallCheck(this, De);}_createClass(De, [{ key: "post", value: function post(e) {var t = e.url,s = e.data,n = e.headers;return new Promise(function (e, r) {U.request({ url: xe("https:", t), data: s, method: "POST", header: n, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, s) {var n = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = U.uploadFile({ url: xe("https:", n), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var s = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (s.statusCode = parseInt(o.success_action_status, 10)), t(s);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("????????????????????????????????????????????????????????????????????????????????????????????????????????????"), s(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return De;}();var Re = { setItem: function setItem(e, t) {U.setStorageSync(e, t);}, getItem: function getItem(e) {return U.getStorageSync(e);}, removeItem: function removeItem(e) {U.removeStorageSync(e);}, clear: function clear() {U.clearStorageSync();} };var qe = { genAdapter: function genAdapter() {return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ce.useAdapters(qe);var Fe = Ce,Le = Fe.init;function Ne() {return { token: U.getStorageSync("uni_id_token") || U.getStorageSync("uniIdToken"), tokenExpired: U.getStorageSync("uni_id_token_expired") };}function Me() {if (!u || "h5" !== h) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== p && (uni.setStorageSync("__LAST_DCLOUD_APPID", p), console.warn("?????????????????????????????????????????????????????????????????????????????????uni-id?????????token????????????????????????????????????"), U.removeStorageSync("uni_id_token"), U.removeStorageSync("uniIdToken"), U.removeStorageSync("uni_id_token_expired"));}Fe.init = function (e) {e.env = e.spaceId;var t = Le.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var s = t.auth;return t.auth = function (e) {var t = s.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var $e = /*#__PURE__*/function (_C) {_inherits($e, _C);var _super9 = _createSuper($e);function $e() {_classCallCheck(this, $e);return _super9.apply(this, arguments);}_createClass($e, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var s = "Anonymous_Access_token";_this13.setAccessToken(s), e(s);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };"auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = O.sign(s, this.config.clientSecret);var r = E();n["x-client-info"] = JSON.stringify(r);var _Ne = Ne(),o = _Ne.token;return n["x-client-token"] = o, { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: JSON.parse(JSON.stringify(n)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,s = _ref12.name,n = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "??????????????????" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "??????????????????" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,s = _ref13$fileType === void 0 ? "image" : _ref13$fileType,n = _ref13.onUploadProgress;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath????????????" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name;r = t.result.fileUrl;var c = { url: o, formData: i, name: a, filePath: e, fileType: s };return _this15.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: n }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: r }) : n(new P({ code: "UPLOAD_FAILED", message: "??????????????????" }));});});} }]);return $e;}(C);var je = { init: function init(e) {var t = new $e(e),s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} };var Ke;function Be(_ref14) {var e = _ref14.data;Ke || (Ke = E());var t = JSON.parse(JSON.stringify(e || {}));if (Object.assign(t, { clientInfo: Ke }), !t.uniIdToken) {var _Ne2 = Ne(),_e16 = _Ne2.token;_e16 && (t.uniIdToken = _e16);}return t;}function He(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var s = this.localAddress,n = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(s, ":").concat(n, "/system/check-function"),a = "http://".concat(s, ":").concat(n, "/cloudfunctions/").concat(e);return new Promise(function (t, s) {U.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,s = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: s || "SYS_ERR" };}).then(function (_ref18) {var s = _ref18.code,n = _ref18.message;if (0 !== s) {switch (s) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(n || "?????????????????????uni-clientDB-action??????????????????????????????");break;case "NETWORK_ERROR":{var _e17 = "???????????????????????????????????????????????????????????????????????????????????????";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (e, s) {var n = Be.call(_this16, { data: t });U.request({ method: "POST", url: a, data: { provider: r, platform: h, param: n }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref19.statusCode,n = _ref19.data;return !t || t >= 400 ? s(new P({ code: n.code || "SYS_ERR", message: n.message || "request:fail" })) : e({ result: n });}, fail: function fail(e) {s(new P({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var We = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "????????????[{functionName}]????????????????????????????????????????????????????????????????????????????????????????????????????????????", mode: "append" }];var ze = /[\\^$.*+?()[\]{}|]/g,Ve = RegExp(ze.source);function Je(e, t, s) {return e.replace(new RegExp((n = t) && Ve.test(n) ? n.replace(ze, "\\$&") : n, "g"), s);var n;}function Ye(_ref20) {var e = _ref20.functionName,t = _ref20.result,s = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _n7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(s, "-request]").concat(_n7, "[/").concat(s, "-request]"));}}function Xe(e) {var t = e.callFunction,s = function s(_s4) {var _this17 = this;var n = _s4.name;_s4.data = Be.call(e, { data: _s4.data });var r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, _s4).then(function (e) {return Ye.call(_this17, { functionName: n, result: e, logPvd: r }), Promise.resolve(e);}, function (e) {return Ye.call(_this17, { functionName: n, result: e, logPvd: r }), e && e.message && (e.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,s = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _n8 = 0; _n8 < s.length; _n8++) {var _s$_n = s[_n8],_r3 = _s$_n.rule,_o2 = _s$_n.content,i = _s$_n.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Je(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Je(_c, "{".concat(_e20, "}"), t[_e20]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(_s4.name, "]: ").concat(e.message), formatter: We, extraInfo: { functionName: n } })), Promise.reject(e);});};e.callFunction = function (t) {var n;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = s), n = He.call(this, t)) : n = s.call(this, t), Object.defineProperty(n, "result", { get: function get() {return console.warn("?????????????????????Promise??????????????????????????????result???????????????????????????https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), n;};}var Ge = Symbol("CLIENT_DB_INTERNAL");function Qe(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ge, e.__ob__ = void 0, new Proxy(e, { get: function get(e, s, n) {return s in e || "string" != typeof s ? e[s] : t.get(e, s, n);} });}function Ze(e) {switch (o(e)) {case "array":return e.map(function (e) {return Ze(e);});case "object":return e._internalType === Ge || Object.keys(e).forEach(function (t) {e[t] = Ze(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function et(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var s = {};var n = {};function r(_ref22) {var t = _ref22.action,r = _ref22.command,o = _ref22.multiCommand;return S(v("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: t, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e21 = 0; _e21 < c.length; _e21++) {var _c$_e = c[_e21],_t8 = _c$_e.level,_s5 = _c$_e.message,_n9 = _c$_e.detail,_r4 = console["app-plus" === h && "warn" === _t8 ? "error" : _t8] || console.log;var _o3 = "[System Info]" + _s5;_n9 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_n9)), _r4(_o3);}if (t) {var _e22 = new a(r, t);return n.error && n.error.forEach(function (t) {t(_e22);}), Promise.reject(_e22);}o && i && (!function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref23.token,t = _ref23.tokenExpired;e && U.setStorageSync("uni_id_token", e), t && U.setStorageSync("uni_id_token_expired", t);}({ token: o, tokenExpired: i }), s.refreshToken && s.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs??????????????????????????????inserted/deleted/updated/data.length??????"), u;} }), S(v("database", "success"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB?????????????????????web?????????????????????schema?????????clientDB"), S(v("database", "fail"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = m("_globalUniCloudDatabaseCallback"));var o = /*#__PURE__*/function () {function o(e, t) {_classCallCheck(this, o);this.content = e, this.prevStage = t, this.udb = null;}_createClass(o, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: Ze(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB????????????set??????");} }, { key: "_send", value: function _send(e, t) {var s = this.getAction(),n = this.getCommand();return n.$db.push({ $method: e, $param: Ze(t) }), r({ action: s, command: n });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _s6 = e.content.$method;if ("aggregate" === _s6 || "pipeline" === _s6) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return u({ $method: "count", $param: Ze(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return o;}();var i = ["db.Geo", "db.command", "command.aggregate"];function c(e, t) {return i.indexOf("".concat(e, ".").concat(t)) > -1;}function u(e, t) {return Qe(new o(e, t), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), c(s, t) ? u({ $method: t }, e) : function () {return u({ $method: t, $param: Ze(Array.from(arguments)) }, e);};} });}function l(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var d = { auth: { on: function on(e, t) {s[e] = s[e] || [], s[e].indexOf(t) > -1 || s[e].push(t);}, off: function off(e, t) {s[e] = s[e] || [];var n = s[e].indexOf(t);-1 !== n && s[e].splice(n, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: Qe({}, { get: function get(e, t) {return { $env: t };} }), Geo: Qe({}, { get: function get(e, t) {return l({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv????????????");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return r({ multiCommand: e.map(function (e) {var t = e.getAction(),s = e.getCommand();if ("getTemp" !== s.$db[s.$db.length - 1].$method) throw new Error("multiSend???????????????????????????getTemp");return { action: t, command: s };}) }).then(function (t) {for (var _s7 = 0; _s7 < e.length; _s7++) {var _n10 = e[_s7];_n10.udb && "function" == typeof _n10.udb.setResult && _n10.udb.setResult(t.result.dataList[_s7]);}return Promise.resolve(t);}, function (t) {for (var _s8 = 0; _s8 < e.length; _s8++) {var _n11 = e[_s8];_n11.udb && "function" == typeof _n11.udb.setResult && _n11.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return l({ path: [], method: "serverDate" });}, get RegExp() {return l({ path: [], method: "RegExp" });} },f = Qe(d, { get: function get(e, t) {return c("db", t) ? u({ $method: t }) : function () {return u({ $method: t, $param: Ze(Array.from(arguments)) });};} });return this._database = f, f;};}var tt;var st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",nt = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function rt() {var e = Ne().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var s;try {s = JSON.parse((n = t[1], decodeURIComponent(tt(n).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("?????????????????????????????????????????????????????????" + e.message);}var n;return s.tokenExpired = 1e3 * s.exp, delete s.exp, delete s.iat, s;}tt = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !nt.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var s, n, r = "", o = 0; o < e.length;) {t = st.indexOf(e.charAt(o++)) << 18 | st.indexOf(e.charAt(o++)) << 12 | (s = st.indexOf(e.charAt(o++))) << 6 | (n = st.indexOf(e.charAt(o++))), r += 64 === s ? String.fromCharCode(t >> 16 & 255) : 64 === n ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return r;} : atob;var ot = t(s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var s = "chooseAndUploadFile:ok",n = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, s) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + s + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref25) {var n = _ref25.onChooseFile,r = _ref25.onUploadProgress;return t.then(function (e) {if (n) {var _t9 = n(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: s, tempFilePaths: [], tempFiles: [] } : function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = s;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (s) {for (; a < n;) {c();}function c() {var n = a++;if (n >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && s(t));var u = o[n];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = n, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, n < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, n < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,s = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: s, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", n) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,s = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: s, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var s = t.tempFilePath,n = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [s], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: s, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: n, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", n) });} });});}(t), t) : o(e, function (e) {var t = e.count,s = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: n + " ????????? type ????????????????????????????????? image ??? video???" });i({ type: "all", count: t, extension: s, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", n) });} });});}(t), t);};};}));var it = "manual";function at(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === it) return;var s = !1;var n = [];for (var _r5 = 2; _r5 < e.length; _r5++) {e[_r5] !== t[_r5] && (n.push(e[_r5]), s = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(s, n);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref26$getone = _ref26.getone,e = _ref26$getone === void 0 ? !1 : _ref26$getone,t = _ref26.success,s = _ref26.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (s) {_this19.mixinDatacomLoading = !1;var _s$result = s.result,n = _s$result.data,r = _s$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = n.length < _this19.pageSize;var o = e ? n.length ? n[0] : void 0 : n;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, s && s(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _s9;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var s = e.database(this.spaceInfo);var n = t.action || this.action;n && (s = s.action(n));var r = t.collection || this.collection;s = Array.isArray(r) ? (_s9 = s).collection.apply(_s9, _toConsumableArray(r)) : s.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (s = s.where(o));var i = t.field || this.field;i && (s = s.field(i));var a = t.foreignKey || this.foreignKey;a && (s = s.foreignKey(a));var c = t.groupby || this.groupby;c && (s = s.groupBy(c));var u = t.groupField || this.groupField;u && (s = s.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (s = s.distinct());var h = t.orderby || this.orderby;h && (s = s.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), s = s.skip(d * (l - 1)).limit(d).get(m), s;} } };}function ct(_x30, _x31) {return _ct.apply(this, arguments);}function _ct() {_ct = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var s, _e27, n;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:s = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return n = { url: s, timeout: 500 }, new Promise(function (e, t) {U.request(_objectSpread(_objectSpread({}, n), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e27 = _context32.sent;return _context32.abrupt("return", !(!_e27.data || 0 !== _e27.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ct.apply(this, arguments);}var ut = new ( /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);}_createClass(_class3, [{ key: "init", value: function init(e) {var t = {};var s = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Fe.init(Object.assign(e, { useDebugFunction: s }));break;case "aliyun":t = x.init(Object.assign(e, { useDebugFunction: s }));break;case "private":t = je.init(Object.assign(e, { useDebugFunction: s }));break;default:throw new Error("??????????????????provider??????");}var n = l;u && n && !n.code && (t.debugInfo = n);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (!u) return Promise.resolve();if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e23 = _t$debugInfo.address,_s10 = _t$debugInfo.servePort;return function () {var _ref27 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var s, _n12, _r6;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_n12 = 0;case 1:if (!(_n12 < e.length)) {_context31.next = 11;break;}_r6 = e[_n12];_context31.next = 5;return ct(_r6, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}s = _r6;return _context31.abrupt("break", 11);case 8:_n12++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: s, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref27.apply(this, arguments);};}()(_e23, _s10);}}).then(function () {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref28.address,s = _ref28.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = s;else if (t.debugInfo) {var _e24 = console["app-plus" === h ? "error" : "warn"];var _s11 = "";"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _s11 = "??????????????????HBuilderX????????????????????????????????????????????????????????????HBuilderX??????uniCloud????????????????????????????????????????????????\n- ???????????????uniCloud????????????????????????????????????????????????\n- ????????????uniCloud??????????????????????????????????????????????????????????????????????????????????????????????????????\n- ?????????HBuilderX???????????????????????????????????????????????????HBuilderX?????????\n- ????????????????????????????????????HBuilderX?????????nodejs") : _s11 = "????????????uniCloud????????????????????????????????????????????????????????????????????????????????????\n- ????????????uniCloud??????????????????????????????????????????????????????????????????????????????????????????????????????\n- ?????????HBuilderX???????????????????????????????????????????????????HBuilderX?????????\n- ????????????????????????????????????HBuilderX?????????nodejs", "h5" === h && (_s11 += "\n- ??????????????????????????????????????????????????????????????????????????????????????????????????????"), _e24(_s11);}}).then(function () {Me(), t.isReady = !0;}), Xe(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var s;return s = this.isReady ? Promise.resolve() : this.initUniCloud, s.then(function () {return t.call(_this20, e);});};}(t), et(t), function (e) {e.getCurrentUserInfo = rt, e.chooseAndUploadFile = ot.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return at(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = T(t[e], e));}), t.init = this.init, t;} }]);return _class3;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ut = ut.init(t), ut.isDefault = !0;else {var _t10 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _s12;_s12 = e && e.length > 0 ? "???????????????????????????????????????uniCloud.init????????????????????????????????????" : f ? "????????????????????????????????????uniCloud??????????????????????????????" : "uni-app cli???????????????uniCloud????????????HBuilderX??????????????????????????????????????????uniCloud????????????????????????", _t10.forEach(function (e) {ut[e] = function () {return console.error(_s12), Promise.reject(new P({ code: "SYS_ERR", message: _s12 }));};});}Object.assign(ut, { get mixinDatacom() {return at(ut);} }), ut.addInterceptor = w, ut.removeInterceptor = k, u && "h5" === h && (window.uniCloud = ut);}})();var ht = ut;var _default2 = ht;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 133:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 134);

/***/ }),

/***/ 134:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 135);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 135:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 136:
/*!****************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/pages.json?{"type":"stat"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__572C101" };exports.default = _default;

/***/ }),

/***/ 149:
/*!*******************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/components/uni-swipe-action-item/mpwxs.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _isPC = __webpack_require__(/*! ./isPC */ 150);var _default =
{
  data: function data() {
    return {
      is_show: 'none' };

  },
  watch: {
    show: function show(newVal) {
      this.is_show = this.show;
    } },

  created: function created() {
    this.swipeaction = this.getSwipeAction();
    if (this.swipeaction.children !== undefined) {
      this.swipeaction.children.push(this);
    }
  },
  mounted: function mounted() {
    this.is_show = this.show;
  },
  methods: {
    // wxs ?????????
    closeSwipe: function closeSwipe(e) {
      if (!this.autoClose) return;
      this.swipeaction.closeOther(this);
    },

    change: function change(e) {
      this.$emit('change', e.open);
      if (this.is_show !== e.open) {
        this.is_show = e.open;
      }
    },

    appTouchStart: function appTouchStart(e) {var




      clientX =
      e.changedTouches[0].clientX;
      this.clientX = clientX;
      this.timestamp = new Date().getTime();
    },
    appTouchEnd: function appTouchEnd(e, index, item, position) {var




      clientX =
      e.changedTouches[0].clientX;
      // fixed by xxxx ??????????????????????????? ios 13 ???????????????????????????
      var diff = Math.abs(this.clientX - clientX);
      var time = new Date().getTime() - this.timestamp;
      if (diff < 40 && time < 300) {
        this.$emit('click', {
          content: item,
          index: index,
          position: position });

      }
    },
    onClickForPC: function onClickForPC(index, item, position) {








    } } };exports.default = _default;

/***/ }),

/***/ 150:
/*!******************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/components/uni-swipe-action-item/isPC.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isPC = isPC;function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length - 1; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/***/ }),

/***/ 151:
/*!**********************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/components/uni-swipe-action-item/bindingx.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =









































































































































































































































































































{};exports.default = _default;

/***/ }),

/***/ 152:
/*!*********************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/components/uni-swipe-action-item/mpother.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =































































































































































































































































{};exports.default = _default;

/***/ }),

/***/ 169:
/*!******************************************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/uni_modules/uni-load-more/components/uni-load-more/i18n/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 170));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 171));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 172));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default };exports.default = _default;

/***/ }),

/***/ 170:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/uni_modules/uni-load-more/components/uni-load-more/i18n/en.json ***!
  \*****************************************************************************************************************/
/*! exports provided: uni-load-more.contentdown, uni-load-more.contentrefresh, uni-load-more.contentnomore, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-load-more.contentdown\":\"Pull up to show more\",\"uni-load-more.contentrefresh\":\"loading...\",\"uni-load-more.contentnomore\":\"No more data\"}");

/***/ }),

/***/ 171:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/uni_modules/uni-load-more/components/uni-load-more/i18n/zh-Hans.json ***!
  \**********************************************************************************************************************/
/*! exports provided: uni-load-more.contentdown, uni-load-more.contentrefresh, uni-load-more.contentnomore, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-load-more.contentdown\":\"??????????????????\",\"uni-load-more.contentrefresh\":\"????????????...\",\"uni-load-more.contentnomore\":\"?????????????????????\"}");

/***/ }),

/***/ 172:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/uni_modules/uni-load-more/components/uni-load-more/i18n/zh-Hant.json ***!
  \**********************************************************************************************************************/
/*! exports provided: uni-load-more.contentdown, uni-load-more.contentrefresh, uni-load-more.contentnomore, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-load-more.contentdown\":\"??????????????????\",\"uni-load-more.contentrefresh\":\"????????????...\",\"uni-load-more.contentnomore\":\"?????????????????????\"}");

/***/ }),

/***/ 180:
/*!*******************************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/components/uni-icons/icons.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx ????????????????????? plugins ???????????????????????????????????????????????????????????????????????? copyAugment ??????
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // ?????? externalClass ????????????(????????? externalClass ????????????????????????)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx ?????? hack ??? uni-app ???????????? name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//??????????????? observer ??? setData callback ?????????????????????????????? warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field ????????????
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE ????????? != ????????? !==????????????????????????????????????????????????????????????????????????????????????????????????
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"onStopService","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick ?????? ??? setData ??? setData ??????????????????
    //2.nextTick ???????????? render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"onStopService","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"onStopService","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // ???????????? vm ?????????????????????
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO ??????????????????????????????????????? list=>l0 ??? list ??????????????????????????????????????????
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //????????? data ???????????????
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"onStopService","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']????????????',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js ?????? new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay ???????????? selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO ???????????? string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // ??????????????????????????????????????????
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // ???????????????????????????????????????
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // ???????????????????????????
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // ???????????????????????????
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // ???????????? watch ??????????????????????????????
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // ??????????????????uni ??? uni-i18n ????????????????????????????????? uni????????? global ????????? getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // ?????????????????????
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // ????????????????????????uni-i18n ??? uni ????????????????????????????????? uni ????????? undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // ??????$vm????????????????????????????????????????????????????????????????????????props???default????????????t()????????????uni-goods-nav????????????app???????????????
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // ???????????????
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // ???????????????
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // ????????????????????????
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 52:
/*!******************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/utils/address.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.area = void 0;var area = [{
  "value": "11",
  "text": "?????????",
  "children": [{
    "value": "1101",
    "text": "?????????",
    "children": [{
      "value": "110101",
      "text": "?????????" },
    {
      "value": "110102",
      "text": "?????????" },
    {
      "value": "110105",
      "text": "?????????" },
    {
      "value": "110106",
      "text": "?????????" },
    {
      "value": "110107",
      "text": "????????????" },
    {
      "value": "110108",
      "text": "?????????" },
    {
      "value": "110109",
      "text": "????????????" },
    {
      "value": "110111",
      "text": "?????????" },
    {
      "value": "110112",
      "text": "?????????" },
    {
      "value": "110113",
      "text": "?????????" },
    {
      "value": "110114",
      "text": "?????????" },
    {
      "value": "110115",
      "text": "?????????" },
    {
      "value": "110116",
      "text": "?????????" },
    {
      "value": "110117",
      "text": "?????????" },
    {
      "value": "110118",
      "text": "?????????" },
    {
      "value": "110119",
      "text": "?????????" }] }] },


{
  "value": "12",
  "text": "?????????",
  "children": [{
    "value": "1201",
    "text": "?????????",
    "children": [{
      "value": "120101",
      "text": "?????????" },
    {
      "value": "120102",
      "text": "?????????" },
    {
      "value": "120103",
      "text": "?????????" },
    {
      "value": "120104",
      "text": "?????????" },
    {
      "value": "120105",
      "text": "?????????" },
    {
      "value": "120106",
      "text": "?????????" },
    {
      "value": "120110",
      "text": "?????????" },
    {
      "value": "120111",
      "text": "?????????" },
    {
      "value": "120112",
      "text": "?????????" },
    {
      "value": "120113",
      "text": "?????????" },
    {
      "value": "120114",
      "text": "?????????" },
    {
      "value": "120115",
      "text": "?????????" },
    {
      "value": "120116",
      "text": "????????????" },
    {
      "value": "120117",
      "text": "?????????" },
    {
      "value": "120118",
      "text": "?????????" },
    {
      "value": "120119",
      "text": "?????????" }] }] },


{
  "value": "13",
  "text": "?????????",
  "children": [{
    "value": "1301",
    "text": "????????????",
    "children": [{
      "value": "130102",
      "text": "?????????" },
    {
      "value": "130104",
      "text": "?????????" },
    {
      "value": "130105",
      "text": "?????????" },
    {
      "value": "130107",
      "text": "????????????" },
    {
      "value": "130108",
      "text": "?????????" },
    {
      "value": "130109",
      "text": "?????????" },
    {
      "value": "130110",
      "text": "?????????" },
    {
      "value": "130111",
      "text": "?????????" },
    {
      "value": "130121",
      "text": "?????????" },
    {
      "value": "130123",
      "text": "?????????" },
    {
      "value": "130125",
      "text": "?????????" },
    {
      "value": "130126",
      "text": "?????????" },
    {
      "value": "130127",
      "text": "?????????" },
    {
      "value": "130128",
      "text": "?????????" },
    {
      "value": "130129",
      "text": "?????????" },
    {
      "value": "130130",
      "text": "?????????" },
    {
      "value": "130131",
      "text": "?????????" },
    {
      "value": "130132",
      "text": "?????????" },
    {
      "value": "130133",
      "text": "??????" },
    {
      "value": "130183",
      "text": "?????????" },
    {
      "value": "130184",
      "text": "?????????" },
    {
      "value": "130181",
      "text": "?????????" }] },

  {
    "value": "1302",
    "text": "?????????",
    "children": [{
      "value": "130202",
      "text": "?????????" },
    {
      "value": "130203",
      "text": "?????????" },
    {
      "value": "130204",
      "text": "?????????" },
    {
      "value": "130205",
      "text": "?????????" },
    {
      "value": "130207",
      "text": "?????????" },
    {
      "value": "130208",
      "text": "?????????" },
    {
      "value": "130209",
      "text": "????????????" },
    {
      "value": "130223",
      "text": "??????" },
    {
      "value": "130224",
      "text": "?????????" },
    {
      "value": "130225",
      "text": "?????????" },
    {
      "value": "130227",
      "text": "?????????" },
    {
      "value": "130229",
      "text": "?????????" },
    {
      "value": "130281",
      "text": "?????????" },
    {
      "value": "130283",
      "text": "?????????" }] },

  {
    "value": "1303",
    "text": "????????????",
    "children": [{
      "value": "130302",
      "text": "?????????" },
    {
      "value": "130303",
      "text": "????????????" },
    {
      "value": "130304",
      "text": "????????????" },
    {
      "value": "130306",
      "text": "?????????" },
    {
      "value": "130321",
      "text": "?????????????????????" },
    {
      "value": "130322",
      "text": "?????????" },
    {
      "value": "130324",
      "text": "?????????" }] },

  {
    "value": "1304",
    "text": "?????????",
    "children": [{
      "value": "130402",
      "text": "?????????" },
    {
      "value": "130403",
      "text": "?????????" },
    {
      "value": "130404",
      "text": "?????????" },
    {
      "value": "130406",
      "text": "????????????" },
    {
      "value": "130421",
      "text": "?????????" },
    {
      "value": "130423",
      "text": "?????????" },
    {
      "value": "130424",
      "text": "?????????" },
    {
      "value": "130425",
      "text": "?????????" },
    {
      "value": "130426",
      "text": "??????" },
    {
      "value": "130427",
      "text": "??????" },
    {
      "value": "130428",
      "text": "?????????" },
    {
      "value": "130429",
      "text": "?????????" },
    {
      "value": "130430",
      "text": "??????" },
    {
      "value": "130431",
      "text": "?????????" },
    {
      "value": "130432",
      "text": "?????????" },
    {
      "value": "130433",
      "text": "?????????" },
    {
      "value": "130434",
      "text": "??????" },
    {
      "value": "130435",
      "text": "?????????" },
    {
      "value": "130481",
      "text": "?????????" }] },

  {
    "value": "1305",
    "text": "?????????",
    "children": [{
      "value": "130502",
      "text": "?????????" },
    {
      "value": "130503",
      "text": "?????????" },
    {
      "value": "130521",
      "text": "?????????" },
    {
      "value": "130522",
      "text": "?????????" },
    {
      "value": "130523",
      "text": "?????????" },
    {
      "value": "130524",
      "text": "?????????" },
    {
      "value": "130525",
      "text": "?????????" },
    {
      "value": "130526",
      "text": "??????" },
    {
      "value": "130527",
      "text": "?????????" },
    {
      "value": "130528",
      "text": "?????????" },
    {
      "value": "130529",
      "text": "?????????" },
    {
      "value": "130530",
      "text": "?????????" },
    {
      "value": "130531",
      "text": "?????????" },
    {
      "value": "130532",
      "text": "?????????" },
    {
      "value": "130533",
      "text": "??????" },
    {
      "value": "130534",
      "text": "?????????" },
    {
      "value": "130535",
      "text": "?????????" },
    {
      "value": "130581",
      "text": "?????????" },
    {
      "value": "130582",
      "text": "?????????" }] },

  {
    "value": "1306",
    "text": "?????????",
    "children": [{
      "value": "130602",
      "text": "?????????" },
    {
      "value": "130606",
      "text": "?????????" },
    {
      "value": "130607",
      "text": "?????????" },
    {
      "value": "130608",
      "text": "?????????" },
    {
      "value": "130609",
      "text": "?????????" },
    {
      "value": "130623",
      "text": "?????????" },
    {
      "value": "130624",
      "text": "?????????" },
    {
      "value": "130626",
      "text": "?????????" },
    {
      "value": "130627",
      "text": "??????" },
    {
      "value": "130628",
      "text": "?????????" },
    {
      "value": "130629",
      "text": "?????????" },
    {
      "value": "130630",
      "text": "?????????" },
    {
      "value": "130631",
      "text": "?????????" },
    {
      "value": "130632",
      "text": "?????????" },
    {
      "value": "130633",
      "text": "??????" },
    {
      "value": "130634",
      "text": "?????????" },
    {
      "value": "130635",
      "text": "??????" },
    {
      "value": "130636",
      "text": "?????????" },
    {
      "value": "130637",
      "text": "?????????" },
    {
      "value": "130638",
      "text": "??????" },
    {
      "value": "130681",
      "text": "?????????" },
    {
      "value": "130683",
      "text": "?????????" },
    {
      "value": "130684",
      "text": "????????????" }] },

  {
    "value": "1307",
    "text": "????????????",
    "children": [{
      "value": "130702",
      "text": "?????????" },
    {
      "value": "130703",
      "text": "?????????" },
    {
      "value": "130705",
      "text": "?????????" },
    {
      "value": "130706",
      "text": "????????????" },
    {
      "value": "130708",
      "text": "?????????" },
    {
      "value": "130709",
      "text": "?????????" },
    {
      "value": "130722",
      "text": "?????????" },
    {
      "value": "130723",
      "text": "?????????" },
    {
      "value": "130724",
      "text": "?????????" },
    {
      "value": "130725",
      "text": "?????????" },
    {
      "value": "130726",
      "text": "??????" },
    {
      "value": "130727",
      "text": "?????????" },
    {
      "value": "130728",
      "text": "?????????" },
    {
      "value": "130730",
      "text": "?????????" },
    {
      "value": "130731",
      "text": "?????????" },
    {
      "value": "130732",
      "text": "?????????" }] },

  {
    "value": "1308",
    "text": "?????????",
    "children": [{
      "value": "130802",
      "text": "?????????" },
    {
      "value": "130803",
      "text": "?????????" },
    {
      "value": "130804",
      "text": "??????????????????" },
    {
      "value": "130821",
      "text": "?????????" },
    {
      "value": "130822",
      "text": "?????????" },
    {
      "value": "130823",
      "text": "?????????" },
    {
      "value": "130824",
      "text": "?????????" },
    {
      "value": "130825",
      "text": "?????????" },
    {
      "value": "130826",
      "text": "?????????????????????" },
    {
      "value": "130827",
      "text": "?????????????????????" },
    {
      "value": "130828",
      "text": "??????????????????????????????" }] },

  {
    "value": "1309",
    "text": "?????????",
    "children": [{
      "value": "130902",
      "text": "?????????" },
    {
      "value": "130903",
      "text": "?????????" },
    {
      "value": "130921",
      "text": "??????" },
    {
      "value": "130922",
      "text": "??????" },
    {
      "value": "130923",
      "text": "?????????" },
    {
      "value": "130924",
      "text": "?????????" },
    {
      "value": "130925",
      "text": "?????????" },
    {
      "value": "130926",
      "text": "?????????" },
    {
      "value": "130927",
      "text": "?????????" },
    {
      "value": "130928",
      "text": "?????????" },
    {
      "value": "130929",
      "text": "??????" },
    {
      "value": "130930",
      "text": "?????????????????????" },
    {
      "value": "130981",
      "text": "?????????" },
    {
      "value": "130982",
      "text": "?????????" },
    {
      "value": "130983",
      "text": "?????????" },
    {
      "value": "130984",
      "text": "?????????" }] },

  {
    "value": "1310",
    "text": "?????????",
    "children": [{
      "value": "131002",
      "text": "?????????" },
    {
      "value": "131003",
      "text": "?????????" },
    {
      "value": "131022",
      "text": "?????????" },
    {
      "value": "131023",
      "text": "?????????" },
    {
      "value": "131024",
      "text": "?????????" },
    {
      "value": "131025",
      "text": "?????????" },
    {
      "value": "131026",
      "text": "?????????" },
    {
      "value": "131028",
      "text": "?????????????????????" },
    {
      "value": "131081",
      "text": "?????????" },
    {
      "value": "131082",
      "text": "?????????" }] },

  {
    "value": "1311",
    "text": "?????????",
    "children": [{
      "value": "131102",
      "text": "?????????" },
    {
      "value": "131103",
      "text": "?????????" },
    {
      "value": "131121",
      "text": "?????????" },
    {
      "value": "131122",
      "text": "?????????" },
    {
      "value": "131123",
      "text": "?????????" },
    {
      "value": "131124",
      "text": "?????????" },
    {
      "value": "131125",
      "text": "?????????" },
    {
      "value": "131126",
      "text": "?????????" },
    {
      "value": "131127",
      "text": "??????" },
    {
      "value": "131128",
      "text": "?????????" },
    {
      "value": "131182",
      "text": "?????????" }] },

  {
    "value": "1390",
    "text": "???????????????",
    "children": [{
      "value": "139001",
      "text": "?????????" }] }] },


{
  "value": "14",
  "text": "?????????",
  "children": [{
    "value": "1401",
    "text": "?????????",
    "children": [{
      "value": "140105",
      "text": "?????????" },
    {
      "value": "140106",
      "text": "?????????" },
    {
      "value": "140107",
      "text": "????????????" },
    {
      "value": "140108",
      "text": "????????????" },
    {
      "value": "140109",
      "text": "????????????" },
    {
      "value": "140110",
      "text": "?????????" },
    {
      "value": "140121",
      "text": "?????????" },
    {
      "value": "140122",
      "text": "?????????" },
    {
      "value": "140123",
      "text": "?????????" },
    {
      "value": "140181",
      "text": "?????????" }] },

  {
    "value": "1402",
    "text": "?????????",
    "children": [{
      "value": "140202",
      "text": "??????" },
    {
      "value": "140203",
      "text": "??????" },
    {
      "value": "140211",
      "text": "?????????" },
    {
      "value": "140212",
      "text": "?????????" },
    {
      "value": "140221",
      "text": "?????????" },
    {
      "value": "140222",
      "text": "?????????" },
    {
      "value": "140223",
      "text": "?????????" },
    {
      "value": "140224",
      "text": "?????????" },
    {
      "value": "140225",
      "text": "?????????" },
    {
      "value": "140226",
      "text": "?????????" },
    {
      "value": "140227",
      "text": "?????????" }] },

  {
    "value": "1403",
    "text": "?????????",
    "children": [{
      "value": "140302",
      "text": "??????" },
    {
      "value": "140303",
      "text": "??????" },
    {
      "value": "140311",
      "text": "??????" },
    {
      "value": "140321",
      "text": "?????????" },
    {
      "value": "140322",
      "text": "??????" }] },

  {
    "value": "1404",
    "text": "?????????",
    "children": [{
      "value": "140402",
      "text": "??????" },
    {
      "value": "140411",
      "text": "??????" },
    {
      "value": "140421",
      "text": "?????????" },
    {
      "value": "140423",
      "text": "?????????" },
    {
      "value": "140424",
      "text": "?????????" },
    {
      "value": "140425",
      "text": "?????????" },
    {
      "value": "140426",
      "text": "?????????" },
    {
      "value": "140427",
      "text": "?????????" },
    {
      "value": "140428",
      "text": "?????????" },
    {
      "value": "140429",
      "text": "?????????" },
    {
      "value": "140430",
      "text": "??????" },
    {
      "value": "140431",
      "text": "?????????" },
    {
      "value": "140481",
      "text": "?????????" }] },

  {
    "value": "1405",
    "text": "?????????",
    "children": [{
      "value": "140502",
      "text": "??????" },
    {
      "value": "140521",
      "text": "?????????" },
    {
      "value": "140522",
      "text": "?????????" },
    {
      "value": "140524",
      "text": "?????????" },
    {
      "value": "140525",
      "text": "?????????" },
    {
      "value": "140581",
      "text": "?????????" }] },

  {
    "value": "1406",
    "text": "?????????",
    "children": [{
      "value": "140602",
      "text": "?????????" },
    {
      "value": "140603",
      "text": "?????????" },
    {
      "value": "140621",
      "text": "?????????" },
    {
      "value": "140622",
      "text": "??????" },
    {
      "value": "140623",
      "text": "?????????" },
    {
      "value": "140624",
      "text": "?????????" }] },

  {
    "value": "1407",
    "text": "?????????",
    "children": [{
      "value": "140702",
      "text": "?????????" },
    {
      "value": "140721",
      "text": "?????????" },
    {
      "value": "140722",
      "text": "?????????" },
    {
      "value": "140723",
      "text": "?????????" },
    {
      "value": "140724",
      "text": "?????????" },
    {
      "value": "140725",
      "text": "?????????" },
    {
      "value": "140726",
      "text": "?????????" },
    {
      "value": "140727",
      "text": "??????" },
    {
      "value": "140728",
      "text": "?????????" },
    {
      "value": "140729",
      "text": "?????????" },
    {
      "value": "140781",
      "text": "?????????" }] },

  {
    "value": "1408",
    "text": "?????????",
    "children": [{
      "value": "140802",
      "text": "?????????" },
    {
      "value": "140821",
      "text": "?????????" },
    {
      "value": "140822",
      "text": "?????????" },
    {
      "value": "140823",
      "text": "?????????" },
    {
      "value": "140824",
      "text": "?????????" },
    {
      "value": "140825",
      "text": "?????????" },
    {
      "value": "140826",
      "text": "??????" },
    {
      "value": "140827",
      "text": "?????????" },
    {
      "value": "140828",
      "text": "??????" },
    {
      "value": "140829",
      "text": "?????????" },
    {
      "value": "140830",
      "text": "?????????" },
    {
      "value": "140881",
      "text": "?????????" },
    {
      "value": "140882",
      "text": "?????????" }] },

  {
    "value": "1409",
    "text": "?????????",
    "children": [{
      "value": "140902",
      "text": "?????????" },
    {
      "value": "140921",
      "text": "?????????" },
    {
      "value": "140922",
      "text": "?????????" },
    {
      "value": "140923",
      "text": "??????" },
    {
      "value": "140924",
      "text": "?????????" },
    {
      "value": "140925",
      "text": "?????????" },
    {
      "value": "140926",
      "text": "?????????" },
    {
      "value": "140927",
      "text": "?????????" },
    {
      "value": "140928",
      "text": "?????????" },
    {
      "value": "140929",
      "text": "?????????" },
    {
      "value": "140930",
      "text": "?????????" },
    {
      "value": "140931",
      "text": "?????????" },
    {
      "value": "140932",
      "text": "?????????" },
    {
      "value": "140981",
      "text": "?????????" }] },

  {
    "value": "1410",
    "text": "?????????",
    "children": [{
      "value": "141002",
      "text": "?????????" },
    {
      "value": "141021",
      "text": "?????????" },
    {
      "value": "141022",
      "text": "?????????" },
    {
      "value": "141023",
      "text": "?????????" },
    {
      "value": "141024",
      "text": "?????????" },
    {
      "value": "141025",
      "text": "??????" },
    {
      "value": "141026",
      "text": "?????????" },
    {
      "value": "141027",
      "text": "?????????" },
    {
      "value": "141028",
      "text": "??????" },
    {
      "value": "141029",
      "text": "?????????" },
    {
      "value": "141030",
      "text": "?????????" },
    {
      "value": "141031",
      "text": "??????" },
    {
      "value": "141032",
      "text": "?????????" },
    {
      "value": "141033",
      "text": "??????" },
    {
      "value": "141034",
      "text": "?????????" },
    {
      "value": "141081",
      "text": "?????????" },
    {
      "value": "141082",
      "text": "?????????" }] },

  {
    "value": "1411",
    "text": "?????????",
    "children": [{
      "value": "141102",
      "text": "?????????" },
    {
      "value": "141121",
      "text": "?????????" },
    {
      "value": "141122",
      "text": "?????????" },
    {
      "value": "141123",
      "text": "??????" },
    {
      "value": "141124",
      "text": "??????" },
    {
      "value": "141125",
      "text": "?????????" },
    {
      "value": "141126",
      "text": "?????????" },
    {
      "value": "141127",
      "text": "??????" },
    {
      "value": "141128",
      "text": "?????????" },
    {
      "value": "141129",
      "text": "?????????" },
    {
      "value": "141130",
      "text": "?????????" },
    {
      "value": "141181",
      "text": "?????????" },
    {
      "value": "141182",
      "text": "?????????" }] }] },


{
  "value": "15",
  "text": "?????????",
  "children": [{
    "value": "1501",
    "text": "???????????????",
    "children": [{
      "value": "150102",
      "text": "?????????" },
    {
      "value": "150103",
      "text": "?????????" },
    {
      "value": "150104",
      "text": "?????????" },
    {
      "value": "150105",
      "text": "?????????" },
    {
      "value": "150121",
      "text": "???????????????" },
    {
      "value": "150122",
      "text": "????????????" },
    {
      "value": "150123",
      "text": "???????????????" },
    {
      "value": "150124",
      "text": "????????????" },
    {
      "value": "150125",
      "text": "?????????" }] },

  {
    "value": "1502",
    "text": "?????????",
    "children": [{
      "value": "150202",
      "text": "?????????" },
    {
      "value": "150203",
      "text": "????????????" },
    {
      "value": "150204",
      "text": "?????????" },
    {
      "value": "150205",
      "text": "?????????" },
    {
      "value": "150206",
      "text": "??????????????????" },
    {
      "value": "150207",
      "text": "?????????" },
    {
      "value": "150221",
      "text": "???????????????" },
    {
      "value": "150222",
      "text": "?????????" },
    {
      "value": "150223",
      "text": "???????????????????????????" }] },

  {
    "value": "1503",
    "text": "?????????",
    "children": [{
      "value": "150302",
      "text": "????????????" },
    {
      "value": "150303",
      "text": "?????????" },
    {
      "value": "150304",
      "text": "?????????" }] },

  {
    "value": "1504",
    "text": "?????????",
    "children": [{
      "value": "150402",
      "text": "?????????" },
    {
      "value": "150403",
      "text": "????????????" },
    {
      "value": "150404",
      "text": "?????????" },
    {
      "value": "150421",
      "text": "??????????????????" },
    {
      "value": "150422",
      "text": "????????????" },
    {
      "value": "150423",
      "text": "????????????" },
    {
      "value": "150424",
      "text": "?????????" },
    {
      "value": "150425",
      "text": "???????????????" },
    {
      "value": "150426",
      "text": "????????????" },
    {
      "value": "150428",
      "text": "????????????" },
    {
      "value": "150429",
      "text": "?????????" },
    {
      "value": "150430",
      "text": "?????????" }] },

  {
    "value": "1505",
    "text": "?????????",
    "children": [{
      "value": "150502",
      "text": "????????????" },
    {
      "value": "150521",
      "text": "?????????????????????" },
    {
      "value": "150522",
      "text": "?????????????????????" },
    {
      "value": "150523",
      "text": "?????????" },
    {
      "value": "150524",
      "text": "?????????" },
    {
      "value": "150525",
      "text": "?????????" },
    {
      "value": "150526",
      "text": "????????????" },
    {
      "value": "150581",
      "text": "???????????????" }] },

  {
    "value": "1506",
    "text": "???????????????",
    "children": [{
      "value": "150602",
      "text": "?????????" },
    {
      "value": "150603",
      "text": "????????????" },
    {
      "value": "150621",
      "text": "????????????" },
    {
      "value": "150622",
      "text": "????????????" },
    {
      "value": "150623",
      "text": "???????????????" },
    {
      "value": "150624",
      "text": "????????????" },
    {
      "value": "150625",
      "text": "?????????" },
    {
      "value": "150626",
      "text": "?????????" },
    {
      "value": "150627",
      "text": "???????????????" }] },

  {
    "value": "1507",
    "text": "???????????????",
    "children": [{
      "value": "150702",
      "text": "????????????" },
    {
      "value": "150703",
      "text": "???????????????" },
    {
      "value": "150721",
      "text": "?????????" },
    {
      "value": "150722",
      "text": "?????????????????????????????????" },
    {
      "value": "150723",
      "text": "??????????????????" },
    {
      "value": "150724",
      "text": "?????????????????????" },
    {
      "value": "150725",
      "text": "???????????????" },
    {
      "value": "150726",
      "text": "??????????????????" },
    {
      "value": "150727",
      "text": "??????????????????" },
    {
      "value": "150781",
      "text": "????????????" },
    {
      "value": "150782",
      "text": "????????????" },
    {
      "value": "150783",
      "text": "????????????" },
    {
      "value": "150784",
      "text": "???????????????" },
    {
      "value": "150785",
      "text": "?????????" }] },

  {
    "value": "1508",
    "text": "???????????????",
    "children": [{
      "value": "150802",
      "text": "?????????" },
    {
      "value": "150821",
      "text": "?????????" },
    {
      "value": "150822",
      "text": "?????????" },
    {
      "value": "150823",
      "text": "???????????????" },
    {
      "value": "150824",
      "text": "???????????????" },
    {
      "value": "150825",
      "text": "???????????????" },
    {
      "value": "150826",
      "text": "????????????" }] },

  {
    "value": "1509",
    "text": "???????????????",
    "children": [{
      "value": "150902",
      "text": "?????????" },
    {
      "value": "150921",
      "text": "?????????" },
    {
      "value": "150922",
      "text": "?????????" },
    {
      "value": "150923",
      "text": "?????????" },
    {
      "value": "150924",
      "text": "?????????" },
    {
      "value": "150925",
      "text": "?????????" },
    {
      "value": "150926",
      "text": "?????????????????????" },
    {
      "value": "150927",
      "text": "?????????????????????" },
    {
      "value": "150928",
      "text": "?????????????????????" },
    {
      "value": "150929",
      "text": "????????????" },
    {
      "value": "150981",
      "text": "?????????" }] },

  {
    "value": "1522",
    "text": "?????????",
    "children": [{
      "value": "152201",
      "text": "???????????????" },
    {
      "value": "152202",
      "text": "????????????" },
    {
      "value": "152221",
      "text": "?????????????????????" },
    {
      "value": "152222",
      "text": "?????????????????????" },
    {
      "value": "152223",
      "text": "????????????" },
    {
      "value": "152224",
      "text": "?????????" }] },

  {
    "value": "1525",
    "text": "???????????????",
    "children": [{
      "value": "152501",
      "text": "???????????????" },
    {
      "value": "152502",
      "text": "???????????????" },
    {
      "value": "152522",
      "text": "????????????" },
    {
      "value": "152523",
      "text": "???????????????" },
    {
      "value": "152524",
      "text": "???????????????" },
    {
      "value": "152525",
      "text": "??????????????????" },
    {
      "value": "152526",
      "text": "??????????????????" },
    {
      "value": "152527",
      "text": "????????????" },
    {
      "value": "152528",
      "text": "?????????" },
    {
      "value": "152529",
      "text": "????????????" },
    {
      "value": "152530",
      "text": "?????????" },
    {
      "value": "152531",
      "text": "?????????" }] },

  {
    "value": "1529",
    "text": "????????????",
    "children": [{
      "value": "152921",
      "text": "???????????????" },
    {
      "value": "152922",
      "text": "???????????????" },
    {
      "value": "152923",
      "text": "????????????" }] }] },


{
  "value": "21",
  "text": "?????????",
  "children": [{
    "value": "2101",
    "text": "?????????",
    "children": [{
      "value": "210102",
      "text": "?????????" },
    {
      "value": "210103",
      "text": "?????????" },
    {
      "value": "210104",
      "text": "?????????" },
    {
      "value": "210105",
      "text": "?????????" },
    {
      "value": "210106",
      "text": "?????????" },
    {
      "value": "210111",
      "text": "????????????" },
    {
      "value": "210112",
      "text": "?????????" },
    {
      "value": "210113",
      "text": "????????????" },
    {
      "value": "210114",
      "text": "?????????" },
    {
      "value": "210115",
      "text": "?????????" },
    {
      "value": "210123",
      "text": "?????????" },
    {
      "value": "210124",
      "text": "?????????" },
    {
      "value": "210181",
      "text": "?????????" }] },

  {
    "value": "2102",
    "text": "?????????",
    "children": [{
      "value": "210202",
      "text": "?????????" },
    {
      "value": "210203",
      "text": "?????????" },
    {
      "value": "210204",
      "text": "????????????" },
    {
      "value": "210211",
      "text": "????????????" },
    {
      "value": "210212",
      "text": "????????????" },
    {
      "value": "210213",
      "text": "?????????" },
    {
      "value": "210214",
      "text": "????????????" },
    {
      "value": "210224",
      "text": "?????????" },
    {
      "value": "210281",
      "text": "????????????" },
    {
      "value": "210283",
      "text": "?????????" }] },

  {
    "value": "2103",
    "text": "?????????",
    "children": [{
      "value": "210302",
      "text": "?????????" },
    {
      "value": "210303",
      "text": "?????????" },
    {
      "value": "210304",
      "text": "?????????" },
    {
      "value": "210311",
      "text": "?????????" },
    {
      "value": "210321",
      "text": "?????????" },
    {
      "value": "210323",
      "text": "?????????????????????" },
    {
      "value": "210381",
      "text": "?????????" }] },

  {
    "value": "2104",
    "text": "?????????",
    "children": [{
      "value": "210402",
      "text": "?????????" },
    {
      "value": "210403",
      "text": "?????????" },
    {
      "value": "210404",
      "text": "?????????" },
    {
      "value": "210411",
      "text": "?????????" },
    {
      "value": "210421",
      "text": "?????????" },
    {
      "value": "210422",
      "text": "?????????????????????" },
    {
      "value": "210423",
      "text": "?????????????????????" }] },

  {
    "value": "2105",
    "text": "?????????",
    "children": [{
      "value": "210502",
      "text": "?????????" },
    {
      "value": "210503",
      "text": "?????????" },
    {
      "value": "210504",
      "text": "?????????" },
    {
      "value": "210505",
      "text": "?????????" },
    {
      "value": "210521",
      "text": "?????????????????????" },
    {
      "value": "210522",
      "text": "?????????????????????" }] },

  {
    "value": "2106",
    "text": "?????????",
    "children": [{
      "value": "210602",
      "text": "?????????" },
    {
      "value": "210603",
      "text": "?????????" },
    {
      "value": "210604",
      "text": "?????????" },
    {
      "value": "210624",
      "text": "?????????????????????" },
    {
      "value": "210681",
      "text": "?????????" },
    {
      "value": "210682",
      "text": "?????????" }] },

  {
    "value": "2107",
    "text": "?????????",
    "children": [{
      "value": "210702",
      "text": "?????????" },
    {
      "value": "210703",
      "text": "?????????" },
    {
      "value": "210711",
      "text": "?????????" },
    {
      "value": "210726",
      "text": "?????????" },
    {
      "value": "210727",
      "text": "??????" },
    {
      "value": "210781",
      "text": "?????????" },
    {
      "value": "210782",
      "text": "?????????" }] },

  {
    "value": "2108",
    "text": "?????????",
    "children": [{
      "value": "210802",
      "text": "?????????" },
    {
      "value": "210803",
      "text": "?????????" },
    {
      "value": "210804",
      "text": "????????????" },
    {
      "value": "210811",
      "text": "?????????" },
    {
      "value": "210881",
      "text": "?????????" },
    {
      "value": "210882",
      "text": "????????????" }] },

  {
    "value": "2109",
    "text": "?????????",
    "children": [{
      "value": "210902",
      "text": "?????????" },
    {
      "value": "210903",
      "text": "?????????" },
    {
      "value": "210904",
      "text": "?????????" },
    {
      "value": "210905",
      "text": "????????????" },
    {
      "value": "210911",
      "text": "?????????" },
    {
      "value": "210921",
      "text": "????????????????????????" },
    {
      "value": "210922",
      "text": "?????????" }] },

  {
    "value": "2110",
    "text": "?????????",
    "children": [{
      "value": "211002",
      "text": "?????????" },
    {
      "value": "211003",
      "text": "?????????" },
    {
      "value": "211004",
      "text": "?????????" },
    {
      "value": "211005",
      "text": "????????????" },
    {
      "value": "211011",
      "text": "????????????" },
    {
      "value": "211021",
      "text": "?????????" },
    {
      "value": "211081",
      "text": "?????????" }] },

  {
    "value": "2111",
    "text": "?????????",
    "children": [{
      "value": "211102",
      "text": "????????????" },
    {
      "value": "211103",
      "text": "????????????" },
    {
      "value": "211104",
      "text": "?????????" },
    {
      "value": "211122",
      "text": "?????????" }] },

  {
    "value": "2112",
    "text": "?????????",
    "children": [{
      "value": "211202",
      "text": "?????????" },
    {
      "value": "211204",
      "text": "?????????" },
    {
      "value": "211221",
      "text": "?????????" },
    {
      "value": "211223",
      "text": "?????????" },
    {
      "value": "211224",
      "text": "?????????" },
    {
      "value": "211281",
      "text": "????????????" },
    {
      "value": "211282",
      "text": "?????????" }] },

  {
    "value": "2113",
    "text": "?????????",
    "children": [{
      "value": "211302",
      "text": "?????????" },
    {
      "value": "211303",
      "text": "?????????" },
    {
      "value": "211321",
      "text": "?????????" },
    {
      "value": "211322",
      "text": "?????????" },
    {
      "value": "211324",
      "text": "?????????????????????????????????" },
    {
      "value": "211381",
      "text": "?????????" },
    {
      "value": "211382",
      "text": "?????????" }] },

  {
    "value": "2114",
    "text": "????????????",
    "children": [{
      "value": "211402",
      "text": "?????????" },
    {
      "value": "211403",
      "text": "?????????" },
    {
      "value": "211404",
      "text": "?????????" },
    {
      "value": "211421",
      "text": "?????????" },
    {
      "value": "211422",
      "text": "?????????" },
    {
      "value": "211481",
      "text": "?????????" }] }] },


{
  "value": "22",
  "text": "?????????",
  "children": [{
    "value": "2201",
    "text": "?????????",
    "children": [{
      "value": "220102",
      "text": "?????????" },
    {
      "value": "220103",
      "text": "?????????" },
    {
      "value": "220104",
      "text": "?????????" },
    {
      "value": "220105",
      "text": "?????????" },
    {
      "value": "220106",
      "text": "?????????" },
    {
      "value": "220112",
      "text": "?????????" },
    {
      "value": "220113",
      "text": "?????????" },
    {
      "value": "220122",
      "text": "?????????" },
    {
      "value": "220182",
      "text": "?????????" },
    {
      "value": "220183",
      "text": "?????????" }] },

  {
    "value": "2202",
    "text": "?????????",
    "children": [{
      "value": "220202",
      "text": "?????????" },
    {
      "value": "220203",
      "text": "?????????" },
    {
      "value": "220204",
      "text": "?????????" },
    {
      "value": "220211",
      "text": "?????????" },
    {
      "value": "220221",
      "text": "?????????" },
    {
      "value": "220281",
      "text": "?????????" },
    {
      "value": "220282",
      "text": "?????????" },
    {
      "value": "220283",
      "text": "?????????" },
    {
      "value": "220284",
      "text": "?????????" }] },

  {
    "value": "2203",
    "text": "?????????",
    "children": [{
      "value": "220302",
      "text": "?????????" },
    {
      "value": "220303",
      "text": "?????????" },
    {
      "value": "220322",
      "text": "?????????" },
    {
      "value": "220323",
      "text": "?????????????????????" },
    {
      "value": "220381",
      "text": "????????????" },
    {
      "value": "220382",
      "text": "?????????" }] },

  {
    "value": "2204",
    "text": "?????????",
    "children": [{
      "value": "220402",
      "text": "?????????" },
    {
      "value": "220403",
      "text": "?????????" },
    {
      "value": "220421",
      "text": "?????????" },
    {
      "value": "220422",
      "text": "?????????" }] },

  {
    "value": "2205",
    "text": "?????????",
    "children": [{
      "value": "220502",
      "text": "?????????" },
    {
      "value": "220503",
      "text": "????????????" },
    {
      "value": "220521",
      "text": "?????????" },
    {
      "value": "220523",
      "text": "?????????" },
    {
      "value": "220524",
      "text": "?????????" },
    {
      "value": "220581",
      "text": "????????????" },
    {
      "value": "220582",
      "text": "?????????" }] },

  {
    "value": "2206",
    "text": "?????????",
    "children": [{
      "value": "220602",
      "text": "?????????" },
    {
      "value": "220605",
      "text": "?????????" },
    {
      "value": "220621",
      "text": "?????????" },
    {
      "value": "220622",
      "text": "?????????" },
    {
      "value": "220623",
      "text": "????????????????????????" },
    {
      "value": "220681",
      "text": "?????????" }] },

  {
    "value": "2207",
    "text": "?????????",
    "children": [{
      "value": "220702",
      "text": "?????????" },
    {
      "value": "220721",
      "text": "?????????????????????????????????" },
    {
      "value": "220722",
      "text": "?????????" },
    {
      "value": "220723",
      "text": "?????????" },
    {
      "value": "220781",
      "text": "?????????" }] },

  {
    "value": "2208",
    "text": "?????????",
    "children": [{
      "value": "220802",
      "text": "?????????" },
    {
      "value": "220821",
      "text": "?????????" },
    {
      "value": "220822",
      "text": "?????????" },
    {
      "value": "220881",
      "text": "?????????" },
    {
      "value": "220882",
      "text": "?????????" }] },

  {
    "value": "2224",
    "text": "????????????????????????",
    "children": [{
      "value": "222401",
      "text": "?????????" },
    {
      "value": "222402",
      "text": "?????????" },
    {
      "value": "222403",
      "text": "?????????" },
    {
      "value": "222404",
      "text": "?????????" },
    {
      "value": "222405",
      "text": "?????????" },
    {
      "value": "222406",
      "text": "?????????" },
    {
      "value": "222424",
      "text": "?????????" },
    {
      "value": "222426",
      "text": "?????????" }] }] },


{
  "value": "23",
  "text": "?????????",
  "children": [{
    "value": "2301",
    "text": "????????????",
    "children": [{
      "value": "230102",
      "text": "?????????" },
    {
      "value": "230103",
      "text": "?????????" },
    {
      "value": "230104",
      "text": "?????????" },
    {
      "value": "230108",
      "text": "?????????" },
    {
      "value": "230109",
      "text": "?????????" },
    {
      "value": "230110",
      "text": "?????????" },
    {
      "value": "230111",
      "text": "?????????" },
    {
      "value": "230112",
      "text": "?????????" },
    {
      "value": "230113",
      "text": "?????????" },
    {
      "value": "230123",
      "text": "?????????" },
    {
      "value": "230124",
      "text": "?????????" },
    {
      "value": "230125",
      "text": "??????" },
    {
      "value": "230126",
      "text": "?????????" },
    {
      "value": "230127",
      "text": "?????????" },
    {
      "value": "230128",
      "text": "?????????" },
    {
      "value": "230129",
      "text": "?????????" },
    {
      "value": "230183",
      "text": "?????????" },
    {
      "value": "230184",
      "text": "?????????" }] },

  {
    "value": "2302",
    "text": "???????????????",
    "children": [{
      "value": "230202",
      "text": "?????????" },
    {
      "value": "230203",
      "text": "?????????" },
    {
      "value": "230204",
      "text": "?????????" },
    {
      "value": "230205",
      "text": "????????????" },
    {
      "value": "230206",
      "text": "???????????????" },
    {
      "value": "230207",
      "text": "????????????" },
    {
      "value": "230208",
      "text": "????????????????????????" },
    {
      "value": "230221",
      "text": "?????????" },
    {
      "value": "230223",
      "text": "?????????" },
    {
      "value": "230224",
      "text": "?????????" },
    {
      "value": "230225",
      "text": "?????????" },
    {
      "value": "230227",
      "text": "?????????" },
    {
      "value": "230229",
      "text": "?????????" },
    {
      "value": "230230",
      "text": "?????????" },
    {
      "value": "230231",
      "text": "?????????" },
    {
      "value": "230281",
      "text": "?????????" }] },

  {
    "value": "2303",
    "text": "?????????",
    "children": [{
      "value": "230302",
      "text": "?????????" },
    {
      "value": "230303",
      "text": "?????????" },
    {
      "value": "230304",
      "text": "?????????" },
    {
      "value": "230305",
      "text": "?????????" },
    {
      "value": "230306",
      "text": "????????????" },
    {
      "value": "230307",
      "text": "?????????" },
    {
      "value": "230321",
      "text": "?????????" },
    {
      "value": "230381",
      "text": "?????????" },
    {
      "value": "230382",
      "text": "?????????" }] },

  {
    "value": "2304",
    "text": "?????????",
    "children": [{
      "value": "230402",
      "text": "?????????" },
    {
      "value": "230403",
      "text": "?????????" },
    {
      "value": "230404",
      "text": "?????????" },
    {
      "value": "230405",
      "text": "?????????" },
    {
      "value": "230406",
      "text": "?????????" },
    {
      "value": "230407",
      "text": "?????????" },
    {
      "value": "230421",
      "text": "?????????" },
    {
      "value": "230422",
      "text": "?????????" }] },

  {
    "value": "2305",
    "text": "????????????",
    "children": [{
      "value": "230502",
      "text": "?????????" },
    {
      "value": "230503",
      "text": "?????????" },
    {
      "value": "230505",
      "text": "????????????" },
    {
      "value": "230506",
      "text": "?????????" },
    {
      "value": "230521",
      "text": "?????????" },
    {
      "value": "230522",
      "text": "?????????" },
    {
      "value": "230523",
      "text": "?????????" },
    {
      "value": "230524",
      "text": "?????????" }] },

  {
    "value": "2306",
    "text": "?????????",
    "children": [{
      "value": "230602",
      "text": "????????????" },
    {
      "value": "230603",
      "text": "?????????" },
    {
      "value": "230604",
      "text": "????????????" },
    {
      "value": "230605",
      "text": "?????????" },
    {
      "value": "230606",
      "text": "?????????" },
    {
      "value": "230621",
      "text": "?????????" },
    {
      "value": "230622",
      "text": "?????????" },
    {
      "value": "230623",
      "text": "?????????" },
    {
      "value": "230624",
      "text": "??????????????????????????????" }] },

  {
    "value": "2307",
    "text": "?????????",
    "children": [{
      "value": "230702",
      "text": "?????????" },
    {
      "value": "230703",
      "text": "?????????" },
    {
      "value": "230704",
      "text": "?????????" },
    {
      "value": "230705",
      "text": "?????????" },
    {
      "value": "230706",
      "text": "?????????" },
    {
      "value": "230707",
      "text": "?????????" },
    {
      "value": "230708",
      "text": "?????????" },
    {
      "value": "230709",
      "text": "????????????" },
    {
      "value": "230710",
      "text": "?????????" },
    {
      "value": "230711",
      "text": "????????????" },
    {
      "value": "230712",
      "text": "????????????" },
    {
      "value": "230713",
      "text": "?????????" },
    {
      "value": "230714",
      "text": "????????????" },
    {
      "value": "230715",
      "text": "?????????" },
    {
      "value": "230716",
      "text": "????????????" },
    {
      "value": "230722",
      "text": "?????????" },
    {
      "value": "230781",
      "text": "?????????" }] },

  {
    "value": "2308",
    "text": "????????????",
    "children": [{
      "value": "230803",
      "text": "?????????" },
    {
      "value": "230804",
      "text": "?????????" },
    {
      "value": "230805",
      "text": "?????????" },
    {
      "value": "230811",
      "text": "??????" },
    {
      "value": "230822",
      "text": "?????????" },
    {
      "value": "230826",
      "text": "?????????" },
    {
      "value": "230828",
      "text": "?????????" },
    {
      "value": "230881",
      "text": "?????????" },
    {
      "value": "230882",
      "text": "?????????" },
    {
      "value": "230883",
      "text": "?????????" }] },

  {
    "value": "2309",
    "text": "????????????",
    "children": [{
      "value": "230902",
      "text": "?????????" },
    {
      "value": "230903",
      "text": "?????????" },
    {
      "value": "230904",
      "text": "????????????" },
    {
      "value": "230921",
      "text": "?????????" }] },

  {
    "value": "2310",
    "text": "????????????",
    "children": [{
      "value": "231002",
      "text": "?????????" },
    {
      "value": "231003",
      "text": "?????????" },
    {
      "value": "231004",
      "text": "?????????" },
    {
      "value": "231005",
      "text": "?????????" },
    {
      "value": "231025",
      "text": "?????????" },
    {
      "value": "231081",
      "text": "????????????" },
    {
      "value": "231083",
      "text": "?????????" },
    {
      "value": "231084",
      "text": "?????????" },
    {
      "value": "231085",
      "text": "?????????" },
    {
      "value": "231086",
      "text": "?????????" }] },

  {
    "value": "2311",
    "text": "?????????",
    "children": [{
      "value": "231102",
      "text": "?????????" },
    {
      "value": "231121",
      "text": "?????????" },
    {
      "value": "231123",
      "text": "?????????" },
    {
      "value": "231124",
      "text": "?????????" },
    {
      "value": "231181",
      "text": "?????????" },
    {
      "value": "231182",
      "text": "???????????????" }] },

  {
    "value": "2312",
    "text": "?????????",
    "children": [{
      "value": "231202",
      "text": "?????????" },
    {
      "value": "231221",
      "text": "?????????" },
    {
      "value": "231222",
      "text": "?????????" },
    {
      "value": "231223",
      "text": "?????????" },
    {
      "value": "231224",
      "text": "?????????" },
    {
      "value": "231225",
      "text": "?????????" },
    {
      "value": "231226",
      "text": "?????????" },
    {
      "value": "231281",
      "text": "?????????" },
    {
      "value": "231282",
      "text": "?????????" },
    {
      "value": "231283",
      "text": "?????????" }] },

  {
    "value": "2327",
    "text": "??????????????????",
    "children": [{
      "value": "232721",
      "text": "?????????" },
    {
      "value": "232722",
      "text": "?????????" },
    {
      "value": "232723",
      "text": "?????????" },
    {
      "value": "232701",
      "text": "???????????????" },
    {
      "value": "232702",
      "text": "?????????" },
    {
      "value": "232703",
      "text": "?????????" },
    {
      "value": "232704",
      "text": "?????????" }] }] },


{
  "value": "31",
  "text": "?????????",
  "children": [{
    "value": "3101",
    "text": "?????????",
    "children": [{
      "value": "310101",
      "text": "?????????" },
    {
      "value": "310104",
      "text": "?????????" },
    {
      "value": "310105",
      "text": "?????????" },
    {
      "value": "310106",
      "text": "?????????" },
    {
      "value": "310107",
      "text": "?????????" },
    {
      "value": "310109",
      "text": "?????????" },
    {
      "value": "310110",
      "text": "?????????" },
    {
      "value": "310112",
      "text": "?????????" },
    {
      "value": "310113",
      "text": "?????????" },
    {
      "value": "310114",
      "text": "?????????" },
    {
      "value": "310115",
      "text": "????????????" },
    {
      "value": "310116",
      "text": "?????????" },
    {
      "value": "310117",
      "text": "?????????" },
    {
      "value": "310118",
      "text": "?????????" },
    {
      "value": "310120",
      "text": "?????????" },
    {
      "value": "310151",
      "text": "?????????" }] }] },


{
  "value": "32",
  "text": "?????????",
  "children": [{
    "value": "3201",
    "text": "?????????",
    "children": [{
      "value": "320102",
      "text": "?????????" },
    {
      "value": "320104",
      "text": "?????????" },
    {
      "value": "320105",
      "text": "?????????" },
    {
      "value": "320106",
      "text": "?????????" },
    {
      "value": "320111",
      "text": "?????????" },
    {
      "value": "320113",
      "text": "?????????" },
    {
      "value": "320114",
      "text": "????????????" },
    {
      "value": "320115",
      "text": "?????????" },
    {
      "value": "320116",
      "text": "?????????" },
    {
      "value": "320117",
      "text": "?????????" },
    {
      "value": "320118",
      "text": "?????????" }] },

  {
    "value": "3202",
    "text": "?????????",
    "children": [{
      "value": "320205",
      "text": "?????????" },
    {
      "value": "320206",
      "text": "?????????" },
    {
      "value": "320211",
      "text": "?????????" },
    {
      "value": "320213",
      "text": "?????????" },
    {
      "value": "320214",
      "text": "?????????" },
    {
      "value": "320281",
      "text": "?????????" },
    {
      "value": "320282",
      "text": "?????????" }] },

  {
    "value": "3203",
    "text": "?????????",
    "children": [{
      "value": "320302",
      "text": "?????????" },
    {
      "value": "320303",
      "text": "?????????" },
    {
      "value": "320305",
      "text": "?????????" },
    {
      "value": "320311",
      "text": "?????????" },
    {
      "value": "320312",
      "text": "?????????" },
    {
      "value": "320321",
      "text": "??????" },
    {
      "value": "320322",
      "text": "??????" },
    {
      "value": "320324",
      "text": "?????????" },
    {
      "value": "320381",
      "text": "?????????" },
    {
      "value": "320382",
      "text": "?????????" }] },

  {
    "value": "3204",
    "text": "?????????",
    "children": [{
      "value": "320402",
      "text": "?????????" },
    {
      "value": "320404",
      "text": "?????????" },
    {
      "value": "320411",
      "text": "?????????" },
    {
      "value": "320412",
      "text": "?????????" },
    {
      "value": "320413",
      "text": "?????????" },
    {
      "value": "320481",
      "text": "?????????" }] },

  {
    "value": "3205",
    "text": "?????????",
    "children": [{
      "value": "320505",
      "text": "?????????" },
    {
      "value": "320506",
      "text": "?????????" },
    {
      "value": "320507",
      "text": "?????????" },
    {
      "value": "320508",
      "text": "?????????" },
    {
      "value": "320509",
      "text": "?????????" },
    {
      "value": "320581",
      "text": "?????????" },
    {
      "value": "320582",
      "text": "????????????" },
    {
      "value": "320583",
      "text": "?????????" },
    {
      "value": "320585",
      "text": "?????????" },
    {
      "value": "320571",
      "text": "???????????????" }] },

  {
    "value": "3206",
    "text": "?????????",
    "children": [{
      "value": "320602",
      "text": "?????????" },
    {
      "value": "320611",
      "text": "?????????" },
    {
      "value": "320612",
      "text": "?????????" },
    {
      "value": "320621",
      "text": "?????????" },
    {
      "value": "320623",
      "text": "?????????" },
    {
      "value": "320681",
      "text": "?????????" },
    {
      "value": "320682",
      "text": "?????????" },
    {
      "value": "320684",
      "text": "?????????" }] },

  {
    "value": "3207",
    "text": "????????????",
    "children": [{
      "value": "320703",
      "text": "?????????" },
    {
      "value": "320706",
      "text": "?????????" },
    {
      "value": "320707",
      "text": "?????????" },
    {
      "value": "320722",
      "text": "?????????" },
    {
      "value": "320723",
      "text": "?????????" },
    {
      "value": "320724",
      "text": "?????????" }] },

  {
    "value": "3208",
    "text": "?????????",
    "children": [{
      "value": "320803",
      "text": "?????????" },
    {
      "value": "320804",
      "text": "?????????" },
    {
      "value": "320812",
      "text": "????????????" },
    {
      "value": "320813",
      "text": "?????????" },
    {
      "value": "320826",
      "text": "?????????" },
    {
      "value": "320830",
      "text": "?????????" },
    {
      "value": "320831",
      "text": "?????????" }] },

  {
    "value": "3209",
    "text": "?????????",
    "children": [{
      "value": "320902",
      "text": "?????????" },
    {
      "value": "320903",
      "text": "?????????" },
    {
      "value": "320904",
      "text": "?????????" },
    {
      "value": "320921",
      "text": "?????????" },
    {
      "value": "320922",
      "text": "?????????" },
    {
      "value": "320923",
      "text": "?????????" },
    {
      "value": "320924",
      "text": "?????????" },
    {
      "value": "320925",
      "text": "?????????" },
    {
      "value": "320981",
      "text": "?????????" }] },

  {
    "value": "3210",
    "text": "?????????",
    "children": [{
      "value": "321002",
      "text": "?????????" },
    {
      "value": "321003",
      "text": "?????????" },
    {
      "value": "321012",
      "text": "?????????" },
    {
      "value": "321023",
      "text": "?????????" },
    {
      "value": "321081",
      "text": "?????????" },
    {
      "value": "321084",
      "text": "?????????" }] },

  {
    "value": "3211",
    "text": "?????????",
    "children": [{
      "value": "321102",
      "text": "?????????" },
    {
      "value": "321111",
      "text": "?????????" },
    {
      "value": "321112",
      "text": "?????????" },
    {
      "value": "321181",
      "text": "?????????" },
    {
      "value": "321182",
      "text": "?????????" },
    {
      "value": "321183",
      "text": "?????????" }] },

  {
    "value": "3212",
    "text": "?????????",
    "children": [{
      "value": "321202",
      "text": "?????????" },
    {
      "value": "321203",
      "text": "?????????" },
    {
      "value": "321204",
      "text": "?????????" },
    {
      "value": "321281",
      "text": "?????????" },
    {
      "value": "321282",
      "text": "?????????" },
    {
      "value": "321283",
      "text": "?????????" }] },

  {
    "value": "3213",
    "text": "?????????",
    "children": [{
      "value": "321302",
      "text": "?????????" },
    {
      "value": "321311",
      "text": "?????????" },
    {
      "value": "321322",
      "text": "?????????" },
    {
      "value": "321323",
      "text": "?????????" },
    {
      "value": "321324",
      "text": "?????????" }] }] },


{
  "value": "33",
  "text": "?????????",
  "children": [{
    "value": "3301",
    "text": "?????????",
    "children": [{
      "value": "330102",
      "text": "?????????" },
    {
      "value": "330103",
      "text": "?????????" },
    {
      "value": "330104",
      "text": "?????????" },
    {
      "value": "330105",
      "text": "?????????" },
    {
      "value": "330106",
      "text": "?????????" },
    {
      "value": "330108",
      "text": "?????????" },
    {
      "value": "330109",
      "text": "?????????" },
    {
      "value": "330110",
      "text": "?????????" },
    {
      "value": "330111",
      "text": "?????????" },
    {
      "value": "330122",
      "text": "?????????" },
    {
      "value": "330127",
      "text": "?????????" },
    {
      "value": "330182",
      "text": "?????????" },
    {
      "value": "330185",
      "text": "?????????" }] },

  {
    "value": "3302",
    "text": "?????????",
    "children": [{
      "value": "330203",
      "text": "?????????" },
    {
      "value": "330204",
      "text": "?????????" },
    {
      "value": "330205",
      "text": "?????????" },
    {
      "value": "330206",
      "text": "?????????" },
    {
      "value": "330211",
      "text": "?????????" },
    {
      "value": "330212",
      "text": "?????????" },
    {
      "value": "330225",
      "text": "?????????" },
    {
      "value": "330226",
      "text": "?????????" },
    {
      "value": "330281",
      "text": "?????????" },
    {
      "value": "330282",
      "text": "?????????" },
    {
      "value": "330283",
      "text": "?????????" }] },

  {
    "value": "3303",
    "text": "?????????",
    "children": [{
      "value": "330302",
      "text": "?????????" },
    {
      "value": "330303",
      "text": "?????????" },
    {
      "value": "330304",
      "text": "?????????" },
    {
      "value": "330305",
      "text": "?????????" },
    {
      "value": "330324",
      "text": "?????????" },
    {
      "value": "330326",
      "text": "?????????" },
    {
      "value": "330327",
      "text": "?????????" },
    {
      "value": "330328",
      "text": "?????????" },
    {
      "value": "330329",
      "text": "?????????" },
    {
      "value": "330381",
      "text": "?????????" },
    {
      "value": "330382",
      "text": "?????????" }] },

  {
    "value": "3304",
    "text": "?????????",
    "children": [{
      "value": "330402",
      "text": "?????????" },
    {
      "value": "330411",
      "text": "?????????" },
    {
      "value": "330421",
      "text": "?????????" },
    {
      "value": "330424",
      "text": "?????????" },
    {
      "value": "330481",
      "text": "?????????" },
    {
      "value": "330482",
      "text": "?????????" },
    {
      "value": "330483",
      "text": "?????????" }] },

  {
    "value": "3305",
    "text": "?????????",
    "children": [{
      "value": "330502",
      "text": "?????????" },
    {
      "value": "330503",
      "text": "?????????" },
    {
      "value": "330521",
      "text": "?????????" },
    {
      "value": "330522",
      "text": "?????????" },
    {
      "value": "330523",
      "text": "?????????" }] },

  {
    "value": "3306",
    "text": "?????????",
    "children": [{
      "value": "330602",
      "text": "?????????" },
    {
      "value": "330603",
      "text": "?????????" },
    {
      "value": "330604",
      "text": "?????????" },
    {
      "value": "330624",
      "text": "?????????" },
    {
      "value": "330681",
      "text": "?????????" },
    {
      "value": "330683",
      "text": "?????????" }] },

  {
    "value": "3307",
    "text": "?????????",
    "children": [{
      "value": "330702",
      "text": "?????????" },
    {
      "value": "330703",
      "text": "?????????" },
    {
      "value": "330723",
      "text": "?????????" },
    {
      "value": "330726",
      "text": "?????????" },
    {
      "value": "330727",
      "text": "?????????" },
    {
      "value": "330781",
      "text": "?????????" },
    {
      "value": "330782",
      "text": "?????????" },
    {
      "value": "330783",
      "text": "?????????" },
    {
      "value": "330784",
      "text": "?????????" }] },

  {
    "value": "3308",
    "text": "?????????",
    "children": [{
      "value": "330802",
      "text": "?????????" },
    {
      "value": "330803",
      "text": "?????????" },
    {
      "value": "330822",
      "text": "?????????" },
    {
      "value": "330824",
      "text": "?????????" },
    {
      "value": "330825",
      "text": "?????????" },
    {
      "value": "330881",
      "text": "?????????" }] },

  {
    "value": "3309",
    "text": "?????????",
    "children": [{
      "value": "330902",
      "text": "?????????" },
    {
      "value": "330903",
      "text": "?????????" },
    {
      "value": "330921",
      "text": "?????????" },
    {
      "value": "330922",
      "text": "?????????" }] },

  {
    "value": "3310",
    "text": "?????????",
    "children": [{
      "value": "331002",
      "text": "?????????" },
    {
      "value": "331003",
      "text": "?????????" },
    {
      "value": "331004",
      "text": "?????????" },
    {
      "value": "331021",
      "text": "?????????" },
    {
      "value": "331022",
      "text": "?????????" },
    {
      "value": "331023",
      "text": "?????????" },
    {
      "value": "331024",
      "text": "?????????" },
    {
      "value": "331081",
      "text": "?????????" },
    {
      "value": "331082",
      "text": "?????????" }] },

  {
    "value": "3311",
    "text": "?????????",
    "children": [{
      "value": "331102",
      "text": "?????????" },
    {
      "value": "331121",
      "text": "?????????" },
    {
      "value": "331122",
      "text": "?????????" },
    {
      "value": "331123",
      "text": "?????????" },
    {
      "value": "331124",
      "text": "?????????" },
    {
      "value": "331125",
      "text": "?????????" },
    {
      "value": "331126",
      "text": "?????????" },
    {
      "value": "331127",
      "text": "?????????????????????" },
    {
      "value": "331181",
      "text": "?????????" }] }] },


{
  "value": "34",
  "text": "?????????",
  "children": [{
    "value": "3401",
    "text": "?????????",
    "children": [{
      "value": "340102",
      "text": "?????????" },
    {
      "value": "340103",
      "text": "?????????" },
    {
      "value": "340104",
      "text": "?????????" },
    {
      "value": "340111",
      "text": "?????????" },
    {
      "value": "340121",
      "text": "?????????" },
    {
      "value": "340122",
      "text": "?????????" },
    {
      "value": "340123",
      "text": "?????????" },
    {
      "value": "340124",
      "text": "?????????" },
    {
      "value": "340181",
      "text": "?????????" }] },

  {
    "value": "3402",
    "text": "?????????",
    "children": [{
      "value": "340202",
      "text": "?????????" },
    {
      "value": "340203",
      "text": "?????????" },
    {
      "value": "340207",
      "text": "?????????" },
    {
      "value": "340208",
      "text": "?????????" },
    {
      "value": "340221",
      "text": "?????????" },
    {
      "value": "340222",
      "text": "?????????" },
    {
      "value": "340223",
      "text": "?????????" },
    {
      "value": "340225",
      "text": "?????????" }] },

  {
    "value": "3403",
    "text": "?????????",
    "children": [{
      "value": "340302",
      "text": "????????????" },
    {
      "value": "340303",
      "text": "?????????" },
    {
      "value": "340304",
      "text": "?????????" },
    {
      "value": "340311",
      "text": "?????????" },
    {
      "value": "340321",
      "text": "?????????" },
    {
      "value": "340322",
      "text": "?????????" },
    {
      "value": "340323",
      "text": "?????????" }] },

  {
    "value": "3404",
    "text": "?????????",
    "children": [{
      "value": "340402",
      "text": "?????????" },
    {
      "value": "340403",
      "text": "????????????" },
    {
      "value": "340404",
      "text": "????????????" },
    {
      "value": "340405",
      "text": "????????????" },
    {
      "value": "340406",
      "text": "?????????" },
    {
      "value": "340421",
      "text": "?????????" },
    {
      "value": "340422",
      "text": "??????" }] },

  {
    "value": "3405",
    "text": "????????????",
    "children": [{
      "value": "340503",
      "text": "?????????" },
    {
      "value": "340504",
      "text": "?????????" },
    {
      "value": "340506",
      "text": "?????????" },
    {
      "value": "340521",
      "text": "?????????" },
    {
      "value": "340522",
      "text": "?????????" },
    {
      "value": "340523",
      "text": "??????" }] },

  {
    "value": "3406",
    "text": "?????????",
    "children": [{
      "value": "340602",
      "text": "?????????" },
    {
      "value": "340603",
      "text": "?????????" },
    {
      "value": "340604",
      "text": "?????????" },
    {
      "value": "340621",
      "text": "?????????" }] },

  {
    "value": "3407",
    "text": "?????????",
    "children": [{
      "value": "340705",
      "text": "?????????" },
    {
      "value": "340706",
      "text": "?????????" },
    {
      "value": "340711",
      "text": "??????" },
    {
      "value": "340722",
      "text": "?????????" }] },

  {
    "value": "3408",
    "text": "?????????",
    "children": [{
      "value": "340802",
      "text": "?????????" },
    {
      "value": "340803",
      "text": "?????????" },
    {
      "value": "340811",
      "text": "?????????" },
    {
      "value": "340822",
      "text": "?????????" },
    {
      "value": "340824",
      "text": "?????????" },
    {
      "value": "340825",
      "text": "?????????" },
    {
      "value": "340826",
      "text": "?????????" },
    {
      "value": "340827",
      "text": "?????????" },
    {
      "value": "340828",
      "text": "?????????" },
    {
      "value": "340881",
      "text": "?????????" }] },

  {
    "value": "3410",
    "text": "?????????",
    "children": [{
      "value": "341002",
      "text": "?????????" },
    {
      "value": "341003",
      "text": "?????????" },
    {
      "value": "341004",
      "text": "?????????" },
    {
      "value": "341021",
      "text": "??????" },
    {
      "value": "341022",
      "text": "?????????" },
    {
      "value": "341023",
      "text": "??????" },
    {
      "value": "341024",
      "text": "?????????" }] },

  {
    "value": "3411",
    "text": "?????????",
    "children": [{
      "value": "341102",
      "text": "?????????" },
    {
      "value": "341103",
      "text": "?????????" },
    {
      "value": "341122",
      "text": "?????????" },
    {
      "value": "341124",
      "text": "?????????" },
    {
      "value": "341125",
      "text": "?????????" },
    {
      "value": "341126",
      "text": "?????????" },
    {
      "value": "341181",
      "text": "?????????" },
    {
      "value": "341182",
      "text": "?????????" }] },

  {
    "value": "3412",
    "text": "?????????",
    "children": [{
      "value": "341202",
      "text": "?????????" },
    {
      "value": "341203",
      "text": "?????????" },
    {
      "value": "341204",
      "text": "?????????" },
    {
      "value": "341221",
      "text": "?????????" },
    {
      "value": "341222",
      "text": "?????????" },
    {
      "value": "341225",
      "text": "?????????" },
    {
      "value": "341226",
      "text": "?????????" },
    {
      "value": "341282",
      "text": "?????????" }] },

  {
    "value": "3413",
    "text": "?????????",
    "children": [{
      "value": "341302",
      "text": "?????????" },
    {
      "value": "341321",
      "text": "?????????" },
    {
      "value": "341322",
      "text": "??????" },
    {
      "value": "341323",
      "text": "?????????" },
    {
      "value": "341324",
      "text": "??????" }] },

  {
    "value": "3415",
    "text": "?????????",
    "children": [{
      "value": "341502",
      "text": "?????????" },
    {
      "value": "341503",
      "text": "?????????" },
    {
      "value": "341504",
      "text": "?????????" },
    {
      "value": "341522",
      "text": "?????????" },
    {
      "value": "341523",
      "text": "?????????" },
    {
      "value": "341524",
      "text": "?????????" },
    {
      "value": "341525",
      "text": "?????????" }] },

  {
    "value": "3416",
    "text": "?????????",
    "children": [{
      "value": "341602",
      "text": "?????????" },
    {
      "value": "341621",
      "text": "?????????" },
    {
      "value": "341622",
      "text": "?????????" },
    {
      "value": "341623",
      "text": "?????????" }] },

  {
    "value": "3417",
    "text": "?????????",
    "children": [{
      "value": "341702",
      "text": "?????????" },
    {
      "value": "341721",
      "text": "?????????" },
    {
      "value": "341722",
      "text": "?????????" },
    {
      "value": "341723",
      "text": "?????????" }] },

  {
    "value": "3418",
    "text": "?????????",
    "children": [{
      "value": "341802",
      "text": "?????????" },
    {
      "value": "341821",
      "text": "?????????" },
    {
      "value": "341822",
      "text": "?????????" },
    {
      "value": "341823",
      "text": "??????" },
    {
      "value": "341824",
      "text": "?????????" },
    {
      "value": "341825",
      "text": "?????????" },
    {
      "value": "341881",
      "text": "?????????" }] }] },


{
  "value": "35",
  "text": "?????????",
  "children": [{
    "value": "3501",
    "text": "?????????",
    "children": [{
      "value": "350102",
      "text": "?????????" },
    {
      "value": "350103",
      "text": "?????????" },
    {
      "value": "350104",
      "text": "?????????" },
    {
      "value": "350105",
      "text": "?????????" },
    {
      "value": "350111",
      "text": "?????????" },
    {
      "value": "350121",
      "text": "?????????" },
    {
      "value": "350122",
      "text": "?????????" },
    {
      "value": "350123",
      "text": "?????????" },
    {
      "value": "350124",
      "text": "?????????" },
    {
      "value": "350125",
      "text": "?????????" },
    {
      "value": "350128",
      "text": "?????????" },
    {
      "value": "350181",
      "text": "?????????" },
    {
      "value": "350182",
      "text": "?????????" }] },

  {
    "value": "3502",
    "text": "?????????",
    "children": [{
      "value": "350203",
      "text": "?????????" },
    {
      "value": "350205",
      "text": "?????????" },
    {
      "value": "350206",
      "text": "?????????" },
    {
      "value": "350211",
      "text": "?????????" },
    {
      "value": "350212",
      "text": "?????????" },
    {
      "value": "350213",
      "text": "?????????" }] },

  {
    "value": "3503",
    "text": "?????????",
    "children": [{
      "value": "350302",
      "text": "?????????" },
    {
      "value": "350303",
      "text": "?????????" },
    {
      "value": "350304",
      "text": "?????????" },
    {
      "value": "350305",
      "text": "?????????" },
    {
      "value": "350322",
      "text": "?????????" }] },

  {
    "value": "3504",
    "text": "?????????",
    "children": [{
      "value": "350402",
      "text": "?????????" },
    {
      "value": "350403",
      "text": "?????????" },
    {
      "value": "350421",
      "text": "?????????" },
    {
      "value": "350423",
      "text": "?????????" },
    {
      "value": "350424",
      "text": "?????????" },
    {
      "value": "350425",
      "text": "?????????" },
    {
      "value": "350426",
      "text": "?????????" },
    {
      "value": "350427",
      "text": "??????" },
    {
      "value": "350428",
      "text": "?????????" },
    {
      "value": "350429",
      "text": "?????????" },
    {
      "value": "350430",
      "text": "?????????" },
    {
      "value": "350481",
      "text": "?????????" }] },

  {
    "value": "3505",
    "text": "?????????",
    "children": [{
      "value": "350502",
      "text": "?????????" },
    {
      "value": "350503",
      "text": "?????????" },
    {
      "value": "350504",
      "text": "?????????" },
    {
      "value": "350505",
      "text": "?????????" },
    {
      "value": "350521",
      "text": "?????????" },
    {
      "value": "350524",
      "text": "?????????" },
    {
      "value": "350525",
      "text": "?????????" },
    {
      "value": "350526",
      "text": "?????????" },
    {
      "value": "350581",
      "text": "?????????" },
    {
      "value": "350582",
      "text": "?????????" },
    {
      "value": "350583",
      "text": "?????????" }] },

  {
    "value": "3506",
    "text": "?????????",
    "children": [{
      "value": "350602",
      "text": "?????????" },
    {
      "value": "350603",
      "text": "?????????" },
    {
      "value": "350622",
      "text": "?????????" },
    {
      "value": "350623",
      "text": "?????????" },
    {
      "value": "350624",
      "text": "?????????" },
    {
      "value": "350625",
      "text": "?????????" },
    {
      "value": "350626",
      "text": "?????????" },
    {
      "value": "350627",
      "text": "?????????" },
    {
      "value": "350628",
      "text": "?????????" },
    {
      "value": "350629",
      "text": "?????????" },
    {
      "value": "350681",
      "text": "?????????" }] },

  {
    "value": "3507",
    "text": "?????????",
    "children": [{
      "value": "350702",
      "text": "?????????" },
    {
      "value": "350703",
      "text": "?????????" },
    {
      "value": "350721",
      "text": "?????????" },
    {
      "value": "350722",
      "text": "?????????" },
    {
      "value": "350723",
      "text": "?????????" },
    {
      "value": "350724",
      "text": "?????????" },
    {
      "value": "350725",
      "text": "?????????" },
    {
      "value": "350781",
      "text": "?????????" },
    {
      "value": "350782",
      "text": "????????????" },
    {
      "value": "350783",
      "text": "?????????" }] },

  {
    "value": "3508",
    "text": "?????????",
    "children": [{
      "value": "350802",
      "text": "?????????" },
    {
      "value": "350803",
      "text": "?????????" },
    {
      "value": "350821",
      "text": "?????????" },
    {
      "value": "350823",
      "text": "?????????" },
    {
      "value": "350824",
      "text": "?????????" },
    {
      "value": "350825",
      "text": "?????????" },
    {
      "value": "350881",
      "text": "?????????" }] },

  {
    "value": "3509",
    "text": "?????????",
    "children": [{
      "value": "350902",
      "text": "?????????" },
    {
      "value": "350921",
      "text": "?????????" },
    {
      "value": "350922",
      "text": "?????????" },
    {
      "value": "350923",
      "text": "?????????" },
    {
      "value": "350924",
      "text": "?????????" },
    {
      "value": "350925",
      "text": "?????????" },
    {
      "value": "350926",
      "text": "?????????" },
    {
      "value": "350981",
      "text": "?????????" },
    {
      "value": "350982",
      "text": "?????????" }] }] },


{
  "value": "36",
  "text": "?????????",
  "children": [{
    "value": "3601",
    "text": "?????????",
    "children": [{
      "value": "360102",
      "text": "?????????" },
    {
      "value": "360103",
      "text": "?????????" },
    {
      "value": "360104",
      "text": "????????????" },
    {
      "value": "360105",
      "text": "?????????" },
    {
      "value": "360111",
      "text": "????????????" },
    {
      "value": "360112",
      "text": "?????????" },
    {
      "value": "360121",
      "text": "?????????" },
    {
      "value": "360123",
      "text": "?????????" },
    {
      "value": "360124",
      "text": "?????????" }] },

  {
    "value": "3602",
    "text": "????????????",
    "children": [{
      "value": "360202",
      "text": "?????????" },
    {
      "value": "360203",
      "text": "?????????" },
    {
      "value": "360222",
      "text": "?????????" },
    {
      "value": "360281",
      "text": "?????????" }] },

  {
    "value": "3603",
    "text": "?????????",
    "children": [{
      "value": "360302",
      "text": "?????????" },
    {
      "value": "360313",
      "text": "?????????" },
    {
      "value": "360321",
      "text": "?????????" },
    {
      "value": "360322",
      "text": "?????????" },
    {
      "value": "360323",
      "text": "?????????" }] },

  {
    "value": "3604",
    "text": "?????????",
    "children": [{
      "value": "360402",
      "text": "?????????" },
    {
      "value": "360403",
      "text": "?????????" },
    {
      "value": "360421",
      "text": "?????????" },
    {
      "value": "360423",
      "text": "?????????" },
    {
      "value": "360424",
      "text": "?????????" },
    {
      "value": "360425",
      "text": "?????????" },
    {
      "value": "360426",
      "text": "?????????" },
    {
      "value": "360428",
      "text": "?????????" },
    {
      "value": "360429",
      "text": "?????????" },
    {
      "value": "360430",
      "text": "?????????" },
    {
      "value": "360481",
      "text": "?????????" },
    {
      "value": "360482",
      "text": "????????????" },
    {
      "value": "360483",
      "text": "?????????" },
    {
      "value": "360404",
      "text": "?????????" }] },

  {
    "value": "3605",
    "text": "?????????",
    "children": [{
      "value": "360502",
      "text": "?????????" },
    {
      "value": "360521",
      "text": "?????????" }] },

  {
    "value": "3606",
    "text": "?????????",
    "children": [{
      "value": "360602",
      "text": "?????????" },
    {
      "value": "360622",
      "text": "?????????" },
    {
      "value": "360681",
      "text": "?????????" }] },

  {
    "value": "3607",
    "text": "?????????",
    "children": [{
      "value": "360702",
      "text": "?????????" },
    {
      "value": "360703",
      "text": "?????????" },
    {
      "value": "360721",
      "text": "??????" },
    {
      "value": "360722",
      "text": "?????????" },
    {
      "value": "360723",
      "text": "?????????" },
    {
      "value": "360724",
      "text": "?????????" },
    {
      "value": "360725",
      "text": "?????????" },
    {
      "value": "360726",
      "text": "?????????" },
    {
      "value": "360727",
      "text": "?????????" },
    {
      "value": "360728",
      "text": "?????????" },
    {
      "value": "360729",
      "text": "?????????" },
    {
      "value": "360730",
      "text": "?????????" },
    {
      "value": "360731",
      "text": "?????????" },
    {
      "value": "360732",
      "text": "?????????" },
    {
      "value": "360733",
      "text": "?????????" },
    {
      "value": "360734",
      "text": "?????????" },
    {
      "value": "360735",
      "text": "?????????" },
    {
      "value": "360781",
      "text": "?????????" }] },

  {
    "value": "3608",
    "text": "?????????",
    "children": [{
      "value": "360802",
      "text": "?????????" },
    {
      "value": "360803",
      "text": "?????????" },
    {
      "value": "360821",
      "text": "?????????" },
    {
      "value": "360822",
      "text": "?????????" },
    {
      "value": "360823",
      "text": "?????????" },
    {
      "value": "360824",
      "text": "?????????" },
    {
      "value": "360825",
      "text": "?????????" },
    {
      "value": "360826",
      "text": "?????????" },
    {
      "value": "360827",
      "text": "?????????" },
    {
      "value": "360828",
      "text": "?????????" },
    {
      "value": "360829",
      "text": "?????????" },
    {
      "value": "360830",
      "text": "?????????" },
    {
      "value": "360881",
      "text": "????????????" }] },

  {
    "value": "3609",
    "text": "?????????",
    "children": [{
      "value": "360902",
      "text": "?????????" },
    {
      "value": "360921",
      "text": "?????????" },
    {
      "value": "360922",
      "text": "?????????" },
    {
      "value": "360923",
      "text": "?????????" },
    {
      "value": "360924",
      "text": "?????????" },
    {
      "value": "360925",
      "text": "?????????" },
    {
      "value": "360926",
      "text": "?????????" },
    {
      "value": "360981",
      "text": "?????????" },
    {
      "value": "360982",
      "text": "?????????" },
    {
      "value": "360983",
      "text": "?????????" }] },

  {
    "value": "3610",
    "text": "?????????",
    "children": [{
      "value": "361002",
      "text": "?????????" },
    {
      "value": "361021",
      "text": "?????????" },
    {
      "value": "361022",
      "text": "?????????" },
    {
      "value": "361023",
      "text": "?????????" },
    {
      "value": "361024",
      "text": "?????????" },
    {
      "value": "361025",
      "text": "?????????" },
    {
      "value": "361026",
      "text": "?????????" },
    {
      "value": "361027",
      "text": "?????????" },
    {
      "value": "361028",
      "text": "?????????" },
    {
      "value": "361029",
      "text": "?????????" },
    {
      "value": "361030",
      "text": "?????????" }] },

  {
    "value": "3611",
    "text": "?????????",
    "children": [{
      "value": "361102",
      "text": "?????????" },
    {
      "value": "361103",
      "text": "?????????" },
    {
      "value": "361121",
      "text": "?????????" },
    {
      "value": "361123",
      "text": "?????????" },
    {
      "value": "361124",
      "text": "?????????" },
    {
      "value": "361125",
      "text": "?????????" },
    {
      "value": "361126",
      "text": "?????????" },
    {
      "value": "361127",
      "text": "?????????" },
    {
      "value": "361128",
      "text": "?????????" },
    {
      "value": "361129",
      "text": "?????????" },
    {
      "value": "361130",
      "text": "?????????" },
    {
      "value": "361181",
      "text": "?????????" }] }] },


{
  "value": "37",
  "text": "?????????",
  "children": [{
    "value": "3701",
    "text": "?????????",
    "children": [{
      "value": "370102",
      "text": "?????????" },
    {
      "value": "370103",
      "text": "?????????" },
    {
      "value": "370104",
      "text": "?????????" },
    {
      "value": "370105",
      "text": "?????????" },
    {
      "value": "370112",
      "text": "?????????" },
    {
      "value": "370113",
      "text": "?????????" },
    {
      "value": "370124",
      "text": "?????????" },
    {
      "value": "370125",
      "text": "?????????" },
    {
      "value": "370126",
      "text": "?????????" },
    {
      "value": "370181",
      "text": "?????????" }] },

  {
    "value": "3702",
    "text": "?????????",
    "children": [{
      "value": "370202",
      "text": "?????????" },
    {
      "value": "370203",
      "text": "?????????" },
    {
      "value": "370211",
      "text": "?????????" },
    {
      "value": "370212",
      "text": "?????????" },
    {
      "value": "370213",
      "text": "?????????" },
    {
      "value": "370214",
      "text": "?????????" },
    {
      "value": "370281",
      "text": "?????????" },
    {
      "value": "370282",
      "text": "?????????" },
    {
      "value": "370283",
      "text": "?????????" },
    {
      "value": "370285",
      "text": "?????????" }] },

  {
    "value": "3703",
    "text": "?????????",
    "children": [{
      "value": "370302",
      "text": "?????????" },
    {
      "value": "370303",
      "text": "?????????" },
    {
      "value": "370304",
      "text": "?????????" },
    {
      "value": "370305",
      "text": "?????????" },
    {
      "value": "370306",
      "text": "?????????" },
    {
      "value": "370321",
      "text": "?????????" },
    {
      "value": "370322",
      "text": "?????????" },
    {
      "value": "370323",
      "text": "?????????" }] },

  {
    "value": "3704",
    "text": "?????????",
    "children": [{
      "value": "370402",
      "text": "?????????" },
    {
      "value": "370403",
      "text": "?????????" },
    {
      "value": "370404",
      "text": "?????????" },
    {
      "value": "370405",
      "text": "????????????" },
    {
      "value": "370406",
      "text": "?????????" },
    {
      "value": "370481",
      "text": "?????????" }] },

  {
    "value": "3705",
    "text": "?????????",
    "children": [{
      "value": "370502",
      "text": "?????????" },
    {
      "value": "370503",
      "text": "?????????" },
    {
      "value": "370505",
      "text": "?????????" },
    {
      "value": "370522",
      "text": "?????????" },
    {
      "value": "370523",
      "text": "?????????" }] },

  {
    "value": "3706",
    "text": "?????????",
    "children": [{
      "value": "370602",
      "text": "?????????" },
    {
      "value": "370611",
      "text": "?????????" },
    {
      "value": "370612",
      "text": "?????????" },
    {
      "value": "370613",
      "text": "?????????" },
    {
      "value": "370634",
      "text": "?????????" },
    {
      "value": "370681",
      "text": "?????????" },
    {
      "value": "370682",
      "text": "?????????" },
    {
      "value": "370683",
      "text": "?????????" },
    {
      "value": "370684",
      "text": "?????????" },
    {
      "value": "370685",
      "text": "?????????" },
    {
      "value": "370686",
      "text": "?????????" },
    {
      "value": "370687",
      "text": "?????????" }] },

  {
    "value": "3707",
    "text": "?????????",
    "children": [{
      "value": "370702",
      "text": "?????????" },
    {
      "value": "370703",
      "text": "?????????" },
    {
      "value": "370704",
      "text": "?????????" },
    {
      "value": "370705",
      "text": "?????????" },
    {
      "value": "370724",
      "text": "?????????" },
    {
      "value": "370725",
      "text": "?????????" },
    {
      "value": "370781",
      "text": "?????????" },
    {
      "value": "370782",
      "text": "?????????" },
    {
      "value": "370783",
      "text": "?????????" },
    {
      "value": "370784",
      "text": "?????????" },
    {
      "value": "370785",
      "text": "?????????" },
    {
      "value": "370786",
      "text": "?????????" }] },

  {
    "value": "3708",
    "text": "?????????",
    "children": [{
      "value": "370811",
      "text": "?????????" },
    {
      "value": "370812",
      "text": "?????????" },
    {
      "value": "370826",
      "text": "?????????" },
    {
      "value": "370827",
      "text": "?????????" },
    {
      "value": "370828",
      "text": "?????????" },
    {
      "value": "370829",
      "text": "?????????" },
    {
      "value": "370830",
      "text": "?????????" },
    {
      "value": "370831",
      "text": "?????????" },
    {
      "value": "370832",
      "text": "?????????" },
    {
      "value": "370881",
      "text": "?????????" },
    {
      "value": "370883",
      "text": "?????????" }] },

  {
    "value": "3709",
    "text": "?????????",
    "children": [{
      "value": "370902",
      "text": "?????????" },
    {
      "value": "370911",
      "text": "?????????" },
    {
      "value": "370921",
      "text": "?????????" },
    {
      "value": "370923",
      "text": "?????????" },
    {
      "value": "370982",
      "text": "?????????" },
    {
      "value": "370983",
      "text": "?????????" }] },

  {
    "value": "3710",
    "text": "?????????",
    "children": [{
      "value": "371002",
      "text": "?????????" },
    {
      "value": "371003",
      "text": "?????????" },
    {
      "value": "371082",
      "text": "?????????" },
    {
      "value": "371083",
      "text": "?????????" }] },

  {
    "value": "3711",
    "text": "?????????",
    "children": [{
      "value": "371102",
      "text": "?????????" },
    {
      "value": "371103",
      "text": "?????????" },
    {
      "value": "371121",
      "text": "?????????" },
    {
      "value": "371122",
      "text": "??????" }] },

  {
    "value": "3712",
    "text": "?????????",
    "children": [{
      "value": "371202",
      "text": "?????????" },
    {
      "value": "371203",
      "text": "?????????" }] },

  {
    "value": "3713",
    "text": "?????????",
    "children": [{
      "value": "371302",
      "text": "?????????" },
    {
      "value": "371311",
      "text": "?????????" },
    {
      "value": "371312",
      "text": "?????????" },
    {
      "value": "371321",
      "text": "?????????" },
    {
      "value": "371322",
      "text": "?????????" },
    {
      "value": "371323",
      "text": "?????????" },
    {
      "value": "371324",
      "text": "?????????" },
    {
      "value": "371325",
      "text": "??????" },
    {
      "value": "371326",
      "text": "?????????" },
    {
      "value": "371327",
      "text": "?????????" },
    {
      "value": "371328",
      "text": "?????????" },
    {
      "value": "371329",
      "text": "?????????" }] },

  {
    "value": "3714",
    "text": "?????????",
    "children": [{
      "value": "371402",
      "text": "?????????" },
    {
      "value": "371403",
      "text": "?????????" },
    {
      "value": "371422",
      "text": "?????????" },
    {
      "value": "371423",
      "text": "?????????" },
    {
      "value": "371424",
      "text": "?????????" },
    {
      "value": "371425",
      "text": "?????????" },
    {
      "value": "371426",
      "text": "?????????" },
    {
      "value": "371427",
      "text": "?????????" },
    {
      "value": "371428",
      "text": "?????????" },
    {
      "value": "371481",
      "text": "?????????" },
    {
      "value": "371482",
      "text": "?????????" }] },

  {
    "value": "3715",
    "text": "?????????",
    "children": [{
      "value": "371502",
      "text": "????????????" },
    {
      "value": "371521",
      "text": "?????????" },
    {
      "value": "371522",
      "text": "??????" },
    {
      "value": "371523",
      "text": "?????????" },
    {
      "value": "371524",
      "text": "?????????" },
    {
      "value": "371525",
      "text": "??????" },
    {
      "value": "371526",
      "text": "?????????" },
    {
      "value": "371581",
      "text": "?????????" }] },

  {
    "value": "3716",
    "text": "?????????",
    "children": [{
      "value": "371602",
      "text": "?????????" },
    {
      "value": "371603",
      "text": "?????????" },
    {
      "value": "371621",
      "text": "?????????" },
    {
      "value": "371622",
      "text": "?????????" },
    {
      "value": "371623",
      "text": "?????????" },
    {
      "value": "371625",
      "text": "?????????" },
    {
      "value": "371626",
      "text": "?????????" }] },

  {
    "value": "3717",
    "text": "?????????",
    "children": [{
      "value": "371702",
      "text": "?????????" },
    {
      "value": "371703",
      "text": "?????????" },
    {
      "value": "371721",
      "text": "??????" },
    {
      "value": "371722",
      "text": "??????" },
    {
      "value": "371723",
      "text": "?????????" },
    {
      "value": "371724",
      "text": "?????????" },
    {
      "value": "371725",
      "text": "?????????" },
    {
      "value": "371726",
      "text": "?????????" },
    {
      "value": "371728",
      "text": "?????????" }] }] },


{
  "value": "41",
  "text": "?????????",
  "children": [{
    "value": "4101",
    "text": "?????????",
    "children": [{
      "value": "410102",
      "text": "?????????" },
    {
      "value": "410103",
      "text": "?????????" },
    {
      "value": "410104",
      "text": "???????????????" },
    {
      "value": "410105",
      "text": "?????????" },
    {
      "value": "410106",
      "text": "?????????" },
    {
      "value": "410108",
      "text": "?????????" },
    {
      "value": "410122",
      "text": "?????????" },
    {
      "value": "410181",
      "text": "?????????" },
    {
      "value": "410182",
      "text": "?????????" },
    {
      "value": "410183",
      "text": "?????????" },
    {
      "value": "410184",
      "text": "?????????" },
    {
      "value": "410185",
      "text": "?????????" }] },

  {
    "value": "4102",
    "text": "?????????",
    "children": [{
      "value": "410202",
      "text": "?????????" },
    {
      "value": "410203",
      "text": "???????????????" },
    {
      "value": "410204",
      "text": "?????????" },
    {
      "value": "410205",
      "text": "????????????" },
    {
      "value": "410211",
      "text": "?????????" },
    {
      "value": "410212",
      "text": "?????????" },
    {
      "value": "410221",
      "text": "??????" },
    {
      "value": "410222",
      "text": "?????????" },
    {
      "value": "410223",
      "text": "?????????" },
    {
      "value": "410225",
      "text": "?????????" }] },

  {
    "value": "4103",
    "text": "?????????",
    "children": [{
      "value": "410302",
      "text": "?????????" },
    {
      "value": "410303",
      "text": "?????????" },
    {
      "value": "410304",
      "text": "???????????????" },
    {
      "value": "410305",
      "text": "?????????" },
    {
      "value": "410306",
      "text": "?????????" },
    {
      "value": "410311",
      "text": "?????????" },
    {
      "value": "410322",
      "text": "?????????" },
    {
      "value": "410323",
      "text": "?????????" },
    {
      "value": "410324",
      "text": "?????????" },
    {
      "value": "410325",
      "text": "??????" },
    {
      "value": "410326",
      "text": "?????????" },
    {
      "value": "410327",
      "text": "?????????" },
    {
      "value": "410328",
      "text": "?????????" },
    {
      "value": "410329",
      "text": "?????????" },
    {
      "value": "410381",
      "text": "?????????" }] },

  {
    "value": "4104",
    "text": "????????????",
    "children": [{
      "value": "410402",
      "text": "?????????" },
    {
      "value": "410403",
      "text": "?????????" },
    {
      "value": "410404",
      "text": "?????????" },
    {
      "value": "410411",
      "text": "?????????" },
    {
      "value": "410421",
      "text": "?????????" },
    {
      "value": "410422",
      "text": "??????" },
    {
      "value": "410423",
      "text": "?????????" },
    {
      "value": "410425",
      "text": "??????" },
    {
      "value": "410481",
      "text": "?????????" },
    {
      "value": "410482",
      "text": "?????????" }] },

  {
    "value": "4105",
    "text": "?????????",
    "children": [{
      "value": "410502",
      "text": "?????????" },
    {
      "value": "410503",
      "text": "?????????" },
    {
      "value": "410505",
      "text": "?????????" },
    {
      "value": "410506",
      "text": "?????????" },
    {
      "value": "410522",
      "text": "?????????" },
    {
      "value": "410523",
      "text": "?????????" },
    {
      "value": "410526",
      "text": "??????" },
    {
      "value": "410527",
      "text": "?????????" },
    {
      "value": "410581",
      "text": "?????????" }] },

  {
    "value": "4106",
    "text": "?????????",
    "children": [{
      "value": "410602",
      "text": "?????????" },
    {
      "value": "410603",
      "text": "?????????" },
    {
      "value": "410611",
      "text": "?????????" },
    {
      "value": "410621",
      "text": "??????" },
    {
      "value": "410622",
      "text": "??????" }] },

  {
    "value": "4107",
    "text": "?????????",
    "children": [{
      "value": "410702",
      "text": "?????????" },
    {
      "value": "410703",
      "text": "?????????" },
    {
      "value": "410704",
      "text": "?????????" },
    {
      "value": "410711",
      "text": "?????????" },
    {
      "value": "410721",
      "text": "?????????" },
    {
      "value": "410724",
      "text": "?????????" },
    {
      "value": "410725",
      "text": "?????????" },
    {
      "value": "410726",
      "text": "?????????" },
    {
      "value": "410727",
      "text": "?????????" },
    {
      "value": "410728",
      "text": "?????????" },
    {
      "value": "410781",
      "text": "?????????" },
    {
      "value": "410782",
      "text": "?????????" }] },

  {
    "value": "4108",
    "text": "?????????",
    "children": [{
      "value": "410802",
      "text": "?????????" },
    {
      "value": "410803",
      "text": "?????????" },
    {
      "value": "410804",
      "text": "?????????" },
    {
      "value": "410811",
      "text": "?????????" },
    {
      "value": "410821",
      "text": "?????????" },
    {
      "value": "410822",
      "text": "?????????" },
    {
      "value": "410823",
      "text": "?????????" },
    {
      "value": "410825",
      "text": "??????" },
    {
      "value": "410882",
      "text": "?????????" },
    {
      "value": "410883",
      "text": "?????????" }] },

  {
    "value": "4109",
    "text": "?????????",
    "children": [{
      "value": "410902",
      "text": "?????????" },
    {
      "value": "410922",
      "text": "?????????" },
    {
      "value": "410923",
      "text": "?????????" },
    {
      "value": "410926",
      "text": "??????" },
    {
      "value": "410927",
      "text": "?????????" },
    {
      "value": "410928",
      "text": "?????????" }] },

  {
    "value": "4110",
    "text": "?????????",
    "children": [{
      "value": "411002",
      "text": "?????????" },
    {
      "value": "411023",
      "text": "?????????" },
    {
      "value": "411024",
      "text": "?????????" },
    {
      "value": "411025",
      "text": "?????????" },
    {
      "value": "411081",
      "text": "?????????" },
    {
      "value": "411082",
      "text": "?????????" },
    {
      "value": "411003",
      "text": "?????????" },
    {
      "value": "411071",
      "text": "???????????????????????????" }] },

  {
    "value": "4111",
    "text": "?????????",
    "children": [{
      "value": "411102",
      "text": "?????????" },
    {
      "value": "411103",
      "text": "?????????" },
    {
      "value": "411104",
      "text": "?????????" },
    {
      "value": "411121",
      "text": "?????????" },
    {
      "value": "411122",
      "text": "?????????" }] },

  {
    "value": "4112",
    "text": "????????????",
    "children": [{
      "value": "411202",
      "text": "?????????" },
    {
      "value": "411203",
      "text": "?????????" },
    {
      "value": "411221",
      "text": "?????????" },
    {
      "value": "411224",
      "text": "?????????" },
    {
      "value": "411281",
      "text": "?????????" },
    {
      "value": "411282",
      "text": "?????????" }] },

  {
    "value": "4113",
    "text": "?????????",
    "children": [{
      "value": "411302",
      "text": "?????????" },
    {
      "value": "411303",
      "text": "?????????" },
    {
      "value": "411321",
      "text": "?????????" },
    {
      "value": "411322",
      "text": "?????????" },
    {
      "value": "411323",
      "text": "?????????" },
    {
      "value": "411324",
      "text": "?????????" },
    {
      "value": "411325",
      "text": "?????????" },
    {
      "value": "411326",
      "text": "?????????" },
    {
      "value": "411327",
      "text": "?????????" },
    {
      "value": "411328",
      "text": "?????????" },
    {
      "value": "411329",
      "text": "?????????" },
    {
      "value": "411330",
      "text": "?????????" },
    {
      "value": "411381",
      "text": "?????????" }] },

  {
    "value": "4114",
    "text": "?????????",
    "children": [{
      "value": "411402",
      "text": "?????????" },
    {
      "value": "411403",
      "text": "?????????" },
    {
      "value": "411421",
      "text": "?????????" },
    {
      "value": "411422",
      "text": "??????" },
    {
      "value": "411423",
      "text": "?????????" },
    {
      "value": "411424",
      "text": "?????????" },
    {
      "value": "411425",
      "text": "?????????" },
    {
      "value": "411426",
      "text": "?????????" },
    {
      "value": "411481",
      "text": "?????????" }] },

  {
    "value": "4115",
    "text": "?????????",
    "children": [{
      "value": "411502",
      "text": "?????????" },
    {
      "value": "411503",
      "text": "?????????" },
    {
      "value": "411521",
      "text": "?????????" },
    {
      "value": "411522",
      "text": "?????????" },
    {
      "value": "411523",
      "text": "??????" },
    {
      "value": "411524",
      "text": "?????????" },
    {
      "value": "411525",
      "text": "?????????" },
    {
      "value": "411526",
      "text": "?????????" },
    {
      "value": "411527",
      "text": "?????????" },
    {
      "value": "411528",
      "text": "??????" }] },

  {
    "value": "4116",
    "text": "?????????",
    "children": [{
      "value": "411602",
      "text": "?????????" },
    {
      "value": "411621",
      "text": "?????????" },
    {
      "value": "411622",
      "text": "?????????" },
    {
      "value": "411623",
      "text": "?????????" },
    {
      "value": "411624",
      "text": "?????????" },
    {
      "value": "411625",
      "text": "?????????" },
    {
      "value": "411626",
      "text": "?????????" },
    {
      "value": "411627",
      "text": "?????????" },
    {
      "value": "411628",
      "text": "?????????" },
    {
      "value": "411681",
      "text": "?????????" }] },

  {
    "value": "4117",
    "text": "????????????",
    "children": [{
      "value": "411702",
      "text": "?????????" },
    {
      "value": "411721",
      "text": "?????????" },
    {
      "value": "411722",
      "text": "?????????" },
    {
      "value": "411723",
      "text": "?????????" },
    {
      "value": "411724",
      "text": "?????????" },
    {
      "value": "411725",
      "text": "?????????" },
    {
      "value": "411726",
      "text": "?????????" },
    {
      "value": "411727",
      "text": "?????????" },
    {
      "value": "411728",
      "text": "?????????" },
    {
      "value": "411729",
      "text": "?????????" }] },

  {
    "value": "4190",
    "text": "???????????????",
    "children": [{
      "value": "419001",
      "text": "?????????" }] }] },


{
  "value": "42",
  "text": "?????????",
  "children": [{
    "value": "4201",
    "text": "?????????",
    "children": [{
      "value": "420102",
      "text": "?????????" },
    {
      "value": "420103",
      "text": "?????????" },
    {
      "value": "420104",
      "text": "?????????" },
    {
      "value": "420105",
      "text": "?????????" },
    {
      "value": "420106",
      "text": "?????????" },
    {
      "value": "420107",
      "text": "?????????" },
    {
      "value": "420111",
      "text": "?????????" },
    {
      "value": "420112",
      "text": "????????????" },
    {
      "value": "420113",
      "text": "?????????" },
    {
      "value": "420114",
      "text": "?????????" },
    {
      "value": "420115",
      "text": "?????????" },
    {
      "value": "420116",
      "text": "?????????" },
    {
      "value": "420117",
      "text": "?????????" }] },

  {
    "value": "4202",
    "text": "?????????",
    "children": [{
      "value": "420202",
      "text": "????????????" },
    {
      "value": "420203",
      "text": "????????????" },
    {
      "value": "420204",
      "text": "?????????" },
    {
      "value": "420205",
      "text": "?????????" },
    {
      "value": "420222",
      "text": "?????????" },
    {
      "value": "420281",
      "text": "?????????" }] },

  {
    "value": "4203",
    "text": "?????????",
    "children": [{
      "value": "420302",
      "text": "?????????" },
    {
      "value": "420303",
      "text": "?????????" },
    {
      "value": "420304",
      "text": "?????????" },
    {
      "value": "420322",
      "text": "?????????" },
    {
      "value": "420323",
      "text": "?????????" },
    {
      "value": "420324",
      "text": "?????????" },
    {
      "value": "420325",
      "text": "??????" },
    {
      "value": "420381",
      "text": "????????????" }] },

  {
    "value": "4205",
    "text": "?????????",
    "children": [{
      "value": "420502",
      "text": "?????????" },
    {
      "value": "420503",
      "text": "????????????" },
    {
      "value": "420504",
      "text": "?????????" },
    {
      "value": "420505",
      "text": "?????????" },
    {
      "value": "420506",
      "text": "?????????" },
    {
      "value": "420525",
      "text": "?????????" },
    {
      "value": "420526",
      "text": "?????????" },
    {
      "value": "420527",
      "text": "?????????" },
    {
      "value": "420528",
      "text": "????????????????????????" },
    {
      "value": "420529",
      "text": "????????????????????????" },
    {
      "value": "420581",
      "text": "?????????" },
    {
      "value": "420582",
      "text": "?????????" },
    {
      "value": "420583",
      "text": "?????????" }] },

  {
    "value": "4206",
    "text": "?????????",
    "children": [{
      "value": "420602",
      "text": "?????????" },
    {
      "value": "420606",
      "text": "?????????" },
    {
      "value": "420607",
      "text": "?????????" },
    {
      "value": "420624",
      "text": "?????????" },
    {
      "value": "420625",
      "text": "?????????" },
    {
      "value": "420626",
      "text": "?????????" },
    {
      "value": "420682",
      "text": "????????????" },
    {
      "value": "420683",
      "text": "?????????" },
    {
      "value": "420684",
      "text": "?????????" }] },

  {
    "value": "4207",
    "text": "?????????",
    "children": [{
      "value": "420702",
      "text": "????????????" },
    {
      "value": "420703",
      "text": "?????????" },
    {
      "value": "420704",
      "text": "?????????" }] },

  {
    "value": "4208",
    "text": "?????????",
    "children": [{
      "value": "420802",
      "text": "?????????" },
    {
      "value": "420804",
      "text": "?????????" },
    {
      "value": "420821",
      "text": "?????????" },
    {
      "value": "420822",
      "text": "?????????" },
    {
      "value": "420881",
      "text": "?????????" }] },

  {
    "value": "4209",
    "text": "?????????",
    "children": [{
      "value": "420902",
      "text": "?????????" },
    {
      "value": "420921",
      "text": "?????????" },
    {
      "value": "420922",
      "text": "?????????" },
    {
      "value": "420923",
      "text": "?????????" },
    {
      "value": "420981",
      "text": "?????????" },
    {
      "value": "420982",
      "text": "?????????" },
    {
      "value": "420984",
      "text": "?????????" }] },

  {
    "value": "4210",
    "text": "?????????",
    "children": [{
      "value": "421002",
      "text": "?????????" },
    {
      "value": "421003",
      "text": "?????????" },
    {
      "value": "421022",
      "text": "?????????" },
    {
      "value": "421023",
      "text": "?????????" },
    {
      "value": "421024",
      "text": "?????????" },
    {
      "value": "421081",
      "text": "?????????" },
    {
      "value": "421083",
      "text": "?????????" },
    {
      "value": "421087",
      "text": "?????????" }] },

  {
    "value": "4211",
    "text": "?????????",
    "children": [{
      "value": "421102",
      "text": "?????????" },
    {
      "value": "421121",
      "text": "?????????" },
    {
      "value": "421122",
      "text": "?????????" },
    {
      "value": "421123",
      "text": "?????????" },
    {
      "value": "421124",
      "text": "?????????" },
    {
      "value": "421125",
      "text": "?????????" },
    {
      "value": "421126",
      "text": "?????????" },
    {
      "value": "421127",
      "text": "?????????" },
    {
      "value": "421181",
      "text": "?????????" },
    {
      "value": "421182",
      "text": "?????????" }] },

  {
    "value": "4212",
    "text": "?????????",
    "children": [{
      "value": "421202",
      "text": "?????????" },
    {
      "value": "421221",
      "text": "?????????" },
    {
      "value": "421222",
      "text": "?????????" },
    {
      "value": "421223",
      "text": "?????????" },
    {
      "value": "421224",
      "text": "?????????" },
    {
      "value": "421281",
      "text": "?????????" }] },

  {
    "value": "4213",
    "text": "?????????",
    "children": [{
      "value": "421303",
      "text": "?????????" },
    {
      "value": "421321",
      "text": "??????" },
    {
      "value": "421381",
      "text": "?????????" }] },

  {
    "value": "4228",
    "text": "??????????????????????????????",
    "children": [{
      "value": "422801",
      "text": "?????????" },
    {
      "value": "422802",
      "text": "?????????" },
    {
      "value": "422822",
      "text": "?????????" },
    {
      "value": "422823",
      "text": "?????????" },
    {
      "value": "422825",
      "text": "?????????" },
    {
      "value": "422826",
      "text": "?????????" },
    {
      "value": "422827",
      "text": "?????????" },
    {
      "value": "422828",
      "text": "?????????" }] },

  {
    "value": "4290",
    "text": "???????????????",
    "children": [{
      "value": "429004",
      "text": "?????????" },
    {
      "value": "429005",
      "text": "?????????" },
    {
      "value": "429006",
      "text": "?????????" },
    {
      "value": "429021",
      "text": "???????????????" }] }] },


{
  "value": "43",
  "text": "?????????",
  "children": [{
    "value": "4301",
    "text": "?????????",
    "children": [{
      "value": "430102",
      "text": "?????????" },
    {
      "value": "430103",
      "text": "?????????" },
    {
      "value": "430104",
      "text": "?????????" },
    {
      "value": "430105",
      "text": "?????????" },
    {
      "value": "430111",
      "text": "?????????" },
    {
      "value": "430112",
      "text": "?????????" },
    {
      "value": "430121",
      "text": "?????????" },
    {
      "value": "430124",
      "text": "?????????" },
    {
      "value": "430181",
      "text": "?????????" }] },

  {
    "value": "4302",
    "text": "?????????",
    "children": [{
      "value": "430202",
      "text": "?????????" },
    {
      "value": "430203",
      "text": "?????????" },
    {
      "value": "430204",
      "text": "?????????" },
    {
      "value": "430211",
      "text": "?????????" },
    {
      "value": "430221",
      "text": "?????????" },
    {
      "value": "430223",
      "text": "??????" },
    {
      "value": "430224",
      "text": "?????????" },
    {
      "value": "430225",
      "text": "?????????" },
    {
      "value": "430281",
      "text": "?????????" }] },

  {
    "value": "4303",
    "text": "?????????",
    "children": [{
      "value": "430302",
      "text": "?????????" },
    {
      "value": "430304",
      "text": "?????????" },
    {
      "value": "430321",
      "text": "?????????" },
    {
      "value": "430381",
      "text": "?????????" },
    {
      "value": "430382",
      "text": "?????????" }] },

  {
    "value": "4304",
    "text": "?????????",
    "children": [{
      "value": "430405",
      "text": "?????????" },
    {
      "value": "430406",
      "text": "?????????" },
    {
      "value": "430407",
      "text": "?????????" },
    {
      "value": "430408",
      "text": "?????????" },
    {
      "value": "430412",
      "text": "?????????" },
    {
      "value": "430421",
      "text": "?????????" },
    {
      "value": "430422",
      "text": "?????????" },
    {
      "value": "430423",
      "text": "?????????" },
    {
      "value": "430424",
      "text": "?????????" },
    {
      "value": "430426",
      "text": "?????????" },
    {
      "value": "430481",
      "text": "?????????" },
    {
      "value": "430482",
      "text": "?????????" }] },

  {
    "value": "4305",
    "text": "?????????",
    "children": [{
      "value": "430502",
      "text": "?????????" },
    {
      "value": "430503",
      "text": "?????????" },
    {
      "value": "430511",
      "text": "?????????" },
    {
      "value": "430521",
      "text": "?????????" },
    {
      "value": "430522",
      "text": "?????????" },
    {
      "value": "430523",
      "text": "?????????" },
    {
      "value": "430524",
      "text": "?????????" },
    {
      "value": "430525",
      "text": "?????????" },
    {
      "value": "430527",
      "text": "?????????" },
    {
      "value": "430528",
      "text": "?????????" },
    {
      "value": "430529",
      "text": "?????????????????????" },
    {
      "value": "430581",
      "text": "?????????" }] },

  {
    "value": "4306",
    "text": "?????????",
    "children": [{
      "value": "430602",
      "text": "????????????" },
    {
      "value": "430603",
      "text": "?????????" },
    {
      "value": "430611",
      "text": "?????????" },
    {
      "value": "430621",
      "text": "?????????" },
    {
      "value": "430623",
      "text": "?????????" },
    {
      "value": "430624",
      "text": "?????????" },
    {
      "value": "430626",
      "text": "?????????" },
    {
      "value": "430681",
      "text": "?????????" },
    {
      "value": "430682",
      "text": "?????????" }] },

  {
    "value": "4307",
    "text": "?????????",
    "children": [{
      "value": "430702",
      "text": "?????????" },
    {
      "value": "430703",
      "text": "?????????" },
    {
      "value": "430721",
      "text": "?????????" },
    {
      "value": "430722",
      "text": "?????????" },
    {
      "value": "430723",
      "text": "??????" },
    {
      "value": "430724",
      "text": "?????????" },
    {
      "value": "430725",
      "text": "?????????" },
    {
      "value": "430726",
      "text": "?????????" },
    {
      "value": "430781",
      "text": "?????????" }] },

  {
    "value": "4308",
    "text": "????????????",
    "children": [{
      "value": "430802",
      "text": "?????????" },
    {
      "value": "430811",
      "text": "????????????" },
    {
      "value": "430821",
      "text": "?????????" },
    {
      "value": "430822",
      "text": "?????????" }] },

  {
    "value": "4309",
    "text": "?????????",
    "children": [{
      "value": "430902",
      "text": "?????????" },
    {
      "value": "430903",
      "text": "?????????" },
    {
      "value": "430921",
      "text": "??????" },
    {
      "value": "430922",
      "text": "?????????" },
    {
      "value": "430923",
      "text": "?????????" },
    {
      "value": "430981",
      "text": "?????????" }] },

  {
    "value": "4310",
    "text": "?????????",
    "children": [{
      "value": "431002",
      "text": "?????????" },
    {
      "value": "431003",
      "text": "?????????" },
    {
      "value": "431021",
      "text": "?????????" },
    {
      "value": "431022",
      "text": "?????????" },
    {
      "value": "431023",
      "text": "?????????" },
    {
      "value": "431024",
      "text": "?????????" },
    {
      "value": "431025",
      "text": "?????????" },
    {
      "value": "431026",
      "text": "?????????" },
    {
      "value": "431027",
      "text": "?????????" },
    {
      "value": "431028",
      "text": "?????????" },
    {
      "value": "431081",
      "text": "?????????" }] },

  {
    "value": "4311",
    "text": "?????????",
    "children": [{
      "value": "431102",
      "text": "?????????" },
    {
      "value": "431103",
      "text": "????????????" },
    {
      "value": "431121",
      "text": "?????????" },
    {
      "value": "431122",
      "text": "?????????" },
    {
      "value": "431123",
      "text": "?????????" },
    {
      "value": "431124",
      "text": "??????" },
    {
      "value": "431125",
      "text": "?????????" },
    {
      "value": "431126",
      "text": "?????????" },
    {
      "value": "431127",
      "text": "?????????" },
    {
      "value": "431128",
      "text": "?????????" },
    {
      "value": "431129",
      "text": "?????????????????????" }] },

  {
    "value": "4312",
    "text": "?????????",
    "children": [{
      "value": "431202",
      "text": "?????????" },
    {
      "value": "431221",
      "text": "?????????" },
    {
      "value": "431222",
      "text": "?????????" },
    {
      "value": "431223",
      "text": "?????????" },
    {
      "value": "431224",
      "text": "?????????" },
    {
      "value": "431225",
      "text": "?????????" },
    {
      "value": "431226",
      "text": "?????????????????????" },
    {
      "value": "431227",
      "text": "?????????????????????" },
    {
      "value": "431228",
      "text": "?????????????????????" },
    {
      "value": "431229",
      "text": "???????????????????????????" },
    {
      "value": "431230",
      "text": "?????????????????????" },
    {
      "value": "431281",
      "text": "?????????" }] },

  {
    "value": "4313",
    "text": "?????????",
    "children": [{
      "value": "431302",
      "text": "?????????" },
    {
      "value": "431321",
      "text": "?????????" },
    {
      "value": "431322",
      "text": "?????????" },
    {
      "value": "431381",
      "text": "????????????" },
    {
      "value": "431382",
      "text": "?????????" }] },

  {
    "value": "4331",
    "text": "??????????????????????????????",
    "children": [{
      "value": "433101",
      "text": "?????????" },
    {
      "value": "433122",
      "text": "?????????" },
    {
      "value": "433123",
      "text": "?????????" },
    {
      "value": "433124",
      "text": "?????????" },
    {
      "value": "433125",
      "text": "?????????" },
    {
      "value": "433126",
      "text": "?????????" },
    {
      "value": "433127",
      "text": "?????????" },
    {
      "value": "433130",
      "text": "?????????" }] }] },


{
  "value": "44",
  "text": "?????????",
  "children": [{
    "value": "4401",
    "text": "?????????",
    "children": [{
      "value": "440103",
      "text": "?????????" },
    {
      "value": "440104",
      "text": "?????????" },
    {
      "value": "440105",
      "text": "?????????" },
    {
      "value": "440106",
      "text": "?????????" },
    {
      "value": "440111",
      "text": "?????????" },
    {
      "value": "440112",
      "text": "?????????" },
    {
      "value": "440113",
      "text": "?????????" },
    {
      "value": "440114",
      "text": "?????????" },
    {
      "value": "440115",
      "text": "?????????" },
    {
      "value": "440117",
      "text": "?????????" },
    {
      "value": "440118",
      "text": "?????????" }] },

  {
    "value": "4402",
    "text": "?????????",
    "children": [{
      "value": "440203",
      "text": "?????????" },
    {
      "value": "440204",
      "text": "?????????" },
    {
      "value": "440205",
      "text": "?????????" },
    {
      "value": "440222",
      "text": "?????????" },
    {
      "value": "440224",
      "text": "?????????" },
    {
      "value": "440229",
      "text": "?????????" },
    {
      "value": "440232",
      "text": "?????????????????????" },
    {
      "value": "440233",
      "text": "?????????" },
    {
      "value": "440281",
      "text": "?????????" },
    {
      "value": "440282",
      "text": "?????????" }] },

  {
    "value": "4403",
    "text": "?????????",
    "children": [{
      "value": "440303",
      "text": "?????????" },
    {
      "value": "440304",
      "text": "?????????" },
    {
      "value": "440305",
      "text": "?????????" },
    {
      "value": "440306",
      "text": "?????????" },
    {
      "value": "440307",
      "text": "?????????" },
    {
      "value": "440308",
      "text": "?????????" },
    {
      "value": "440310",
      "text": "?????????" },
    {
      "value": "440309",
      "text": "?????????" }] },

  {
    "value": "4404",
    "text": "?????????",
    "children": [{
      "value": "440402",
      "text": "?????????" },
    {
      "value": "440403",
      "text": "?????????" },
    {
      "value": "440404",
      "text": "?????????" }] },

  {
    "value": "4405",
    "text": "?????????",
    "children": [{
      "value": "440507",
      "text": "?????????" },
    {
      "value": "440511",
      "text": "?????????" },
    {
      "value": "440512",
      "text": "?????????" },
    {
      "value": "440513",
      "text": "?????????" },
    {
      "value": "440514",
      "text": "?????????" },
    {
      "value": "440515",
      "text": "?????????" },
    {
      "value": "440523",
      "text": "?????????" }] },

  {
    "value": "4406",
    "text": "?????????",
    "children": [{
      "value": "440604",
      "text": "?????????" },
    {
      "value": "440605",
      "text": "?????????" },
    {
      "value": "440606",
      "text": "?????????" },
    {
      "value": "440607",
      "text": "?????????" },
    {
      "value": "440608",
      "text": "?????????" }] },

  {
    "value": "4407",
    "text": "?????????",
    "children": [{
      "value": "440703",
      "text": "?????????" },
    {
      "value": "440704",
      "text": "?????????" },
    {
      "value": "440705",
      "text": "?????????" },
    {
      "value": "440781",
      "text": "?????????" },
    {
      "value": "440783",
      "text": "?????????" },
    {
      "value": "440784",
      "text": "?????????" },
    {
      "value": "440785",
      "text": "?????????" }] },

  {
    "value": "4408",
    "text": "?????????",
    "children": [{
      "value": "440802",
      "text": "?????????" },
    {
      "value": "440803",
      "text": "?????????" },
    {
      "value": "440804",
      "text": "?????????" },
    {
      "value": "440811",
      "text": "?????????" },
    {
      "value": "440823",
      "text": "?????????" },
    {
      "value": "440825",
      "text": "?????????" },
    {
      "value": "440881",
      "text": "?????????" },
    {
      "value": "440882",
      "text": "?????????" },
    {
      "value": "440883",
      "text": "?????????" }] },

  {
    "value": "4409",
    "text": "?????????",
    "children": [{
      "value": "440902",
      "text": "?????????" },
    {
      "value": "440904",
      "text": "?????????" },
    {
      "value": "440981",
      "text": "?????????" },
    {
      "value": "440982",
      "text": "?????????" },
    {
      "value": "440983",
      "text": "?????????" }] },

  {
    "value": "4412",
    "text": "?????????",
    "children": [{
      "value": "441202",
      "text": "?????????" },
    {
      "value": "441203",
      "text": "?????????" },
    {
      "value": "441204",
      "text": "?????????" },
    {
      "value": "441223",
      "text": "?????????" },
    {
      "value": "441224",
      "text": "?????????" },
    {
      "value": "441225",
      "text": "?????????" },
    {
      "value": "441226",
      "text": "?????????" },
    {
      "value": "441284",
      "text": "?????????" }] },

  {
    "value": "4413",
    "text": "?????????",
    "children": [{
      "value": "441302",
      "text": "?????????" },
    {
      "value": "441303",
      "text": "?????????" },
    {
      "value": "441322",
      "text": "?????????" },
    {
      "value": "441323",
      "text": "?????????" },
    {
      "value": "441324",
      "text": "?????????" }] },

  {
    "value": "4414",
    "text": "?????????",
    "children": [{
      "value": "441402",
      "text": "?????????" },
    {
      "value": "441403",
      "text": "?????????" },
    {
      "value": "441422",
      "text": "?????????" },
    {
      "value": "441423",
      "text": "?????????" },
    {
      "value": "441424",
      "text": "?????????" },
    {
      "value": "441426",
      "text": "?????????" },
    {
      "value": "441427",
      "text": "?????????" },
    {
      "value": "441481",
      "text": "?????????" }] },

  {
    "value": "4415",
    "text": "?????????",
    "children": [{
      "value": "441502",
      "text": "??????" },
    {
      "value": "441521",
      "text": "?????????" },
    {
      "value": "441523",
      "text": "?????????" },
    {
      "value": "441581",
      "text": "?????????" }] },

  {
    "value": "4416",
    "text": "?????????",
    "children": [{
      "value": "441602",
      "text": "?????????" },
    {
      "value": "441621",
      "text": "?????????" },
    {
      "value": "441622",
      "text": "?????????" },
    {
      "value": "441623",
      "text": "?????????" },
    {
      "value": "441624",
      "text": "?????????" },
    {
      "value": "441625",
      "text": "?????????" }] },

  {
    "value": "4417",
    "text": "?????????",
    "children": [{
      "value": "441702",
      "text": "?????????" },
    {
      "value": "441704",
      "text": "?????????" },
    {
      "value": "441721",
      "text": "?????????" },
    {
      "value": "441781",
      "text": "?????????" }] },

  {
    "value": "4418",
    "text": "?????????",
    "children": [{
      "value": "441802",
      "text": "?????????" },
    {
      "value": "441803",
      "text": "?????????" },
    {
      "value": "441821",
      "text": "?????????" },
    {
      "value": "441823",
      "text": "?????????" },
    {
      "value": "441825",
      "text": "???????????????????????????" },
    {
      "value": "441826",
      "text": "?????????????????????" },
    {
      "value": "441881",
      "text": "?????????" },
    {
      "value": "441882",
      "text": "?????????" }] },

  {
    "value": "4419",
    "text": "?????????",
    "children": [{
      "value": "441900",
      "text": "?????????" }] },

  {
    "value": "4420",
    "text": "?????????",
    "children": [{
      "value": "442000",
      "text": "?????????" }] },

  {
    "value": "4451",
    "text": "?????????",
    "children": [{
      "value": "445102",
      "text": "?????????" },
    {
      "value": "445103",
      "text": "?????????" },
    {
      "value": "445122",
      "text": "?????????" }] },

  {
    "value": "4452",
    "text": "?????????",
    "children": [{
      "value": "445202",
      "text": "?????????" },
    {
      "value": "445203",
      "text": "?????????" },
    {
      "value": "445222",
      "text": "?????????" },
    {
      "value": "445224",
      "text": "?????????" },
    {
      "value": "445281",
      "text": "?????????" }] },

  {
    "value": "4453",
    "text": "?????????",
    "children": [{
      "value": "445302",
      "text": "?????????" },
    {
      "value": "445303",
      "text": "?????????" },
    {
      "value": "445321",
      "text": "?????????" },
    {
      "value": "445322",
      "text": "?????????" },
    {
      "value": "445381",
      "text": "?????????" }] }] },


{
  "value": "45",
  "text": "?????????",
  "children": [{
    "value": "4501",
    "text": "?????????",
    "children": [{
      "value": "450102",
      "text": "?????????" },
    {
      "value": "450103",
      "text": "?????????" },
    {
      "value": "450105",
      "text": "?????????" },
    {
      "value": "450107",
      "text": "????????????" },
    {
      "value": "450108",
      "text": "?????????" },
    {
      "value": "450109",
      "text": "?????????" },
    {
      "value": "450110",
      "text": "?????????" },
    {
      "value": "450123",
      "text": "?????????" },
    {
      "value": "450124",
      "text": "?????????" },
    {
      "value": "450125",
      "text": "?????????" },
    {
      "value": "450126",
      "text": "?????????" },
    {
      "value": "450127",
      "text": "??????" }] },

  {
    "value": "4502",
    "text": "?????????",
    "children": [{
      "value": "450202",
      "text": "?????????" },
    {
      "value": "450203",
      "text": "?????????" },
    {
      "value": "450204",
      "text": "?????????" },
    {
      "value": "450205",
      "text": "?????????" },
    {
      "value": "450206",
      "text": "?????????" },
    {
      "value": "450222",
      "text": "?????????" },
    {
      "value": "450223",
      "text": "?????????" },
    {
      "value": "450224",
      "text": "?????????" },
    {
      "value": "450225",
      "text": "?????????????????????" },
    {
      "value": "450226",
      "text": "?????????????????????" }] },

  {
    "value": "4503",
    "text": "?????????",
    "children": [{
      "value": "450302",
      "text": "?????????" },
    {
      "value": "450303",
      "text": "?????????" },
    {
      "value": "450304",
      "text": "?????????" },
    {
      "value": "450305",
      "text": "?????????" },
    {
      "value": "450311",
      "text": "?????????" },
    {
      "value": "450312",
      "text": "?????????" },
    {
      "value": "450321",
      "text": "?????????" },
    {
      "value": "450323",
      "text": "?????????" },
    {
      "value": "450324",
      "text": "?????????" },
    {
      "value": "450325",
      "text": "?????????" },
    {
      "value": "450326",
      "text": "?????????" },
    {
      "value": "450327",
      "text": "?????????" },
    {
      "value": "450328",
      "text": "?????????????????????" },
    {
      "value": "450329",
      "text": "?????????" },
    {
      "value": "450330",
      "text": "?????????" },
    {
      "value": "450331",
      "text": "?????????" },
    {
      "value": "450332",
      "text": "?????????????????????" }] },

  {
    "value": "4504",
    "text": "?????????",
    "children": [{
      "value": "450403",
      "text": "?????????" },
    {
      "value": "450405",
      "text": "?????????" },
    {
      "value": "450406",
      "text": "?????????" },
    {
      "value": "450421",
      "text": "?????????" },
    {
      "value": "450422",
      "text": "??????" },
    {
      "value": "450423",
      "text": "?????????" },
    {
      "value": "450481",
      "text": "?????????" }] },

  {
    "value": "4505",
    "text": "?????????",
    "children": [{
      "value": "450502",
      "text": "?????????" },
    {
      "value": "450503",
      "text": "?????????" },
    {
      "value": "450512",
      "text": "????????????" },
    {
      "value": "450521",
      "text": "?????????" }] },

  {
    "value": "4506",
    "text": "????????????",
    "children": [{
      "value": "450602",
      "text": "?????????" },
    {
      "value": "450603",
      "text": "?????????" },
    {
      "value": "450621",
      "text": "?????????" },
    {
      "value": "450681",
      "text": "?????????" }] },

  {
    "value": "4507",
    "text": "?????????",
    "children": [{
      "value": "450702",
      "text": "?????????" },
    {
      "value": "450703",
      "text": "?????????" },
    {
      "value": "450721",
      "text": "?????????" },
    {
      "value": "450722",
      "text": "?????????" }] },

  {
    "value": "4508",
    "text": "?????????",
    "children": [{
      "value": "450802",
      "text": "?????????" },
    {
      "value": "450803",
      "text": "?????????" },
    {
      "value": "450804",
      "text": "?????????" },
    {
      "value": "450821",
      "text": "?????????" },
    {
      "value": "450881",
      "text": "?????????" }] },

  {
    "value": "4509",
    "text": "?????????",
    "children": [{
      "value": "450902",
      "text": "?????????" },
    {
      "value": "450903",
      "text": "?????????" },
    {
      "value": "450921",
      "text": "??????" },
    {
      "value": "450922",
      "text": "?????????" },
    {
      "value": "450923",
      "text": "?????????" },
    {
      "value": "450924",
      "text": "?????????" },
    {
      "value": "450981",
      "text": "?????????" }] },

  {
    "value": "4510",
    "text": "?????????",
    "children": [{
      "value": "451002",
      "text": "?????????" },
    {
      "value": "451021",
      "text": "?????????" },
    {
      "value": "451022",
      "text": "?????????" },
    {
      "value": "451023",
      "text": "?????????" },
    {
      "value": "451024",
      "text": "?????????" },
    {
      "value": "451026",
      "text": "?????????" },
    {
      "value": "451027",
      "text": "?????????" },
    {
      "value": "451028",
      "text": "?????????" },
    {
      "value": "451029",
      "text": "?????????" },
    {
      "value": "451030",
      "text": "?????????" },
    {
      "value": "451031",
      "text": "?????????????????????" },
    {
      "value": "451081",
      "text": "?????????" }] },

  {
    "value": "4511",
    "text": "?????????",
    "children": [{
      "value": "451102",
      "text": "?????????" },
    {
      "value": "451103",
      "text": "?????????" },
    {
      "value": "451121",
      "text": "?????????" },
    {
      "value": "451122",
      "text": "?????????" },
    {
      "value": "451123",
      "text": "?????????????????????" }] },

  {
    "value": "4512",
    "text": "?????????",
    "children": [{
      "value": "451202",
      "text": "????????????" },
    {
      "value": "451221",
      "text": "?????????" },
    {
      "value": "451222",
      "text": "?????????" },
    {
      "value": "451223",
      "text": "?????????" },
    {
      "value": "451224",
      "text": "?????????" },
    {
      "value": "451225",
      "text": "????????????????????????" },
    {
      "value": "451226",
      "text": "????????????????????????" },
    {
      "value": "451227",
      "text": "?????????????????????" },
    {
      "value": "451228",
      "text": "?????????????????????" },
    {
      "value": "451229",
      "text": "?????????????????????" },
    {
      "value": "451281",
      "text": "?????????" }] },

  {
    "value": "4513",
    "text": "?????????",
    "children": [{
      "value": "451302",
      "text": "?????????" },
    {
      "value": "451321",
      "text": "?????????" },
    {
      "value": "451322",
      "text": "?????????" },
    {
      "value": "451323",
      "text": "?????????" },
    {
      "value": "451324",
      "text": "?????????????????????" },
    {
      "value": "451381",
      "text": "?????????" }] },

  {
    "value": "4514",
    "text": "?????????",
    "children": [{
      "value": "451402",
      "text": "?????????" },
    {
      "value": "451421",
      "text": "?????????" },
    {
      "value": "451422",
      "text": "?????????" },
    {
      "value": "451423",
      "text": "?????????" },
    {
      "value": "451424",
      "text": "?????????" },
    {
      "value": "451425",
      "text": "?????????" },
    {
      "value": "451481",
      "text": "?????????" }] }] },


{
  "value": "46",
  "text": "?????????",
  "children": [{
    "value": "4601",
    "text": "?????????",
    "children": [{
      "value": "460105",
      "text": "?????????" },
    {
      "value": "460106",
      "text": "?????????" },
    {
      "value": "460107",
      "text": "?????????" },
    {
      "value": "460108",
      "text": "?????????" }] },

  {
    "value": "4602",
    "text": "?????????",
    "children": [{
      "value": "460201",
      "text": "?????????" },
    {
      "value": "460202",
      "text": "?????????" },
    {
      "value": "460203",
      "text": "?????????" },
    {
      "value": "460204",
      "text": "?????????" },
    {
      "value": "460205",
      "text": "?????????" }] },

  {
    "value": "4603",
    "text": "?????????",
    "children": [{
      "value": "460321",
      "text": "????????????" },
    {
      "value": "460322",
      "text": "????????????" },
    {
      "value": "460323",
      "text": "?????????????????????????????????" }] },

  {
    "value": "4604",
    "text": "?????????",
    "children": [] },
  {
    "value": "4690",
    "text": "???????????????????????????",
    "children": [{
      "value": "469001",
      "text": "????????????" },
    {
      "value": "469002",
      "text": "?????????" },
    {
      "value": "469005",
      "text": "?????????" },
    {
      "value": "469006",
      "text": "?????????" },
    {
      "value": "469007",
      "text": "?????????" },
    {
      "value": "469021",
      "text": "?????????" },
    {
      "value": "469022",
      "text": "?????????" },
    {
      "value": "469023",
      "text": "?????????" },
    {
      "value": "469024",
      "text": "?????????" },
    {
      "value": "469025",
      "text": "?????????????????????" },
    {
      "value": "469026",
      "text": "?????????????????????" },
    {
      "value": "469027",
      "text": "?????????????????????" },
    {
      "value": "469028",
      "text": "?????????????????????" },
    {
      "value": "469029",
      "text": "???????????????????????????" },
    {
      "value": "469030",
      "text": "???????????????????????????" }] }] },


{
  "value": "50",
  "text": "?????????",
  "children": [{
    "value": "5001",
    "text": "?????????",
    "children": [{
      "value": "500101",
      "text": "?????????" },
    {
      "value": "500102",
      "text": "?????????" },
    {
      "value": "500103",
      "text": "?????????" },
    {
      "value": "500104",
      "text": "????????????" },
    {
      "value": "500105",
      "text": "?????????" },
    {
      "value": "500106",
      "text": "????????????" },
    {
      "value": "500107",
      "text": "????????????" },
    {
      "value": "500108",
      "text": "?????????" },
    {
      "value": "500109",
      "text": "?????????" },
    {
      "value": "500110",
      "text": "?????????" },
    {
      "value": "500111",
      "text": "?????????" },
    {
      "value": "500112",
      "text": "?????????" },
    {
      "value": "500113",
      "text": "?????????" },
    {
      "value": "500114",
      "text": "?????????" },
    {
      "value": "500115",
      "text": "?????????" },
    {
      "value": "500116",
      "text": "?????????" },
    {
      "value": "500117",
      "text": "?????????" },
    {
      "value": "500118",
      "text": "?????????" },
    {
      "value": "500119",
      "text": "?????????" },
    {
      "value": "500120",
      "text": "?????????" },
    {
      "value": "500151",
      "text": "?????????" },
    {
      "value": "500152",
      "text": "?????????" },
    {
      "value": "500153",
      "text": "?????????" },
    {
      "value": "500154",
      "text": "?????????" }] },

  {
    "value": "5002",
    "text": "???",
    "children": [{
      "value": "500228",
      "text": "?????????" },
    {
      "value": "500229",
      "text": "?????????" },
    {
      "value": "500230",
      "text": "?????????" },
    {
      "value": "500231",
      "text": "?????????" },
    {
      "value": "500232",
      "text": "?????????" },
    {
      "value": "500233",
      "text": "??????" },
    {
      "value": "500235",
      "text": "?????????" },
    {
      "value": "500236",
      "text": "?????????" },
    {
      "value": "500237",
      "text": "?????????" },
    {
      "value": "500238",
      "text": "?????????" },
    {
      "value": "500240",
      "text": "????????????????????????" },
    {
      "value": "500241",
      "text": "??????????????????????????????" },
    {
      "value": "500242",
      "text": "??????????????????????????????" },
    {
      "value": "500243",
      "text": "??????????????????????????????" }] }] },


{
  "value": "51",
  "text": "?????????",
  "children": [{
    "value": "5101",
    "text": "?????????",
    "children": [{
      "value": "510104",
      "text": "?????????" },
    {
      "value": "510105",
      "text": "?????????" },
    {
      "value": "510106",
      "text": "?????????" },
    {
      "value": "510107",
      "text": "?????????" },
    {
      "value": "510108",
      "text": "?????????" },
    {
      "value": "510112",
      "text": "????????????" },
    {
      "value": "510113",
      "text": "????????????" },
    {
      "value": "510114",
      "text": "?????????" },
    {
      "value": "510115",
      "text": "?????????" },
    {
      "value": "510116",
      "text": "?????????" },
    {
      "value": "510121",
      "text": "?????????" },
    {
      "value": "510124",
      "text": "??????" },
    {
      "value": "510129",
      "text": "?????????" },
    {
      "value": "510131",
      "text": "?????????" },
    {
      "value": "510132",
      "text": "?????????" },
    {
      "value": "510181",
      "text": "????????????" },
    {
      "value": "510182",
      "text": "?????????" },
    {
      "value": "510183",
      "text": "?????????" },
    {
      "value": "510184",
      "text": "?????????" },
    {
      "value": "510185",
      "text": "?????????" }] },

  {
    "value": "5103",
    "text": "?????????",
    "children": [{
      "value": "510302",
      "text": "????????????" },
    {
      "value": "510303",
      "text": "?????????" },
    {
      "value": "510304",
      "text": "?????????" },
    {
      "value": "510311",
      "text": "?????????" },
    {
      "value": "510321",
      "text": "??????" },
    {
      "value": "510322",
      "text": "?????????" }] },

  {
    "value": "5104",
    "text": "????????????",
    "children": [{
      "value": "510402",
      "text": "??????" },
    {
      "value": "510403",
      "text": "??????" },
    {
      "value": "510411",
      "text": "?????????" },
    {
      "value": "510421",
      "text": "?????????" },
    {
      "value": "510422",
      "text": "?????????" }] },

  {
    "value": "5105",
    "text": "?????????",
    "children": [{
      "value": "510502",
      "text": "?????????" },
    {
      "value": "510503",
      "text": "?????????" },
    {
      "value": "510504",
      "text": "????????????" },
    {
      "value": "510521",
      "text": "??????" },
    {
      "value": "510522",
      "text": "?????????" },
    {
      "value": "510524",
      "text": "?????????" },
    {
      "value": "510525",
      "text": "?????????" }] },

  {
    "value": "5106",
    "text": "?????????",
    "children": [{
      "value": "510603",
      "text": "?????????" },
    {
      "value": "510623",
      "text": "?????????" },
    {
      "value": "510626",
      "text": "?????????" },
    {
      "value": "510681",
      "text": "?????????" },
    {
      "value": "510682",
      "text": "?????????" },
    {
      "value": "510683",
      "text": "?????????" }] },

  {
    "value": "5107",
    "text": "?????????",
    "children": [{
      "value": "510703",
      "text": "?????????" },
    {
      "value": "510704",
      "text": "?????????" },
    {
      "value": "510705",
      "text": "?????????" },
    {
      "value": "510722",
      "text": "?????????" },
    {
      "value": "510723",
      "text": "?????????" },
    {
      "value": "510725",
      "text": "?????????" },
    {
      "value": "510726",
      "text": "?????????????????????" },
    {
      "value": "510727",
      "text": "?????????" },
    {
      "value": "510781",
      "text": "?????????" }] },

  {
    "value": "5108",
    "text": "?????????",
    "children": [{
      "value": "510802",
      "text": "?????????" },
    {
      "value": "510811",
      "text": "?????????" },
    {
      "value": "510812",
      "text": "?????????" },
    {
      "value": "510821",
      "text": "?????????" },
    {
      "value": "510822",
      "text": "?????????" },
    {
      "value": "510823",
      "text": "?????????" },
    {
      "value": "510824",
      "text": "?????????" }] },

  {
    "value": "5109",
    "text": "?????????",
    "children": [{
      "value": "510903",
      "text": "?????????" },
    {
      "value": "510904",
      "text": "?????????" },
    {
      "value": "510921",
      "text": "?????????" },
    {
      "value": "510922",
      "text": "?????????" },
    {
      "value": "510923",
      "text": "?????????" }] },

  {
    "value": "5110",
    "text": "?????????",
    "children": [{
      "value": "511002",
      "text": "?????????" },
    {
      "value": "511011",
      "text": "?????????" },
    {
      "value": "511024",
      "text": "?????????" },
    {
      "value": "511025",
      "text": "?????????" },
    {
      "value": "511028",
      "text": "?????????" }] },

  {
    "value": "5111",
    "text": "?????????",
    "children": [{
      "value": "511102",
      "text": "?????????" },
    {
      "value": "511111",
      "text": "?????????" },
    {
      "value": "511112",
      "text": "????????????" },
    {
      "value": "511113",
      "text": "????????????" },
    {
      "value": "511123",
      "text": "?????????" },
    {
      "value": "511124",
      "text": "?????????" },
    {
      "value": "511126",
      "text": "?????????" },
    {
      "value": "511129",
      "text": "?????????" },
    {
      "value": "511132",
      "text": "?????????????????????" },
    {
      "value": "511133",
      "text": "?????????????????????" },
    {
      "value": "511181",
      "text": "????????????" }] },

  {
    "value": "5113",
    "text": "?????????",
    "children": [{
      "value": "511302",
      "text": "?????????" },
    {
      "value": "511303",
      "text": "?????????" },
    {
      "value": "511304",
      "text": "?????????" },
    {
      "value": "511321",
      "text": "?????????" },
    {
      "value": "511322",
      "text": "?????????" },
    {
      "value": "511323",
      "text": "?????????" },
    {
      "value": "511324",
      "text": "?????????" },
    {
      "value": "511325",
      "text": "?????????" },
    {
      "value": "511381",
      "text": "?????????" }] },

  {
    "value": "5114",
    "text": "?????????",
    "children": [{
      "value": "511402",
      "text": "?????????" },
    {
      "value": "511403",
      "text": "?????????" },
    {
      "value": "511421",
      "text": "?????????" },
    {
      "value": "511423",
      "text": "?????????" },
    {
      "value": "511424",
      "text": "?????????" },
    {
      "value": "511425",
      "text": "?????????" }] },

  {
    "value": "5115",
    "text": "?????????",
    "children": [{
      "value": "511502",
      "text": "?????????" },
    {
      "value": "511503",
      "text": "?????????" },
    {
      "value": "511521",
      "text": "?????????" },
    {
      "value": "511523",
      "text": "?????????" },
    {
      "value": "511524",
      "text": "?????????" },
    {
      "value": "511525",
      "text": "??????" },
    {
      "value": "511526",
      "text": "??????" },
    {
      "value": "511527",
      "text": "?????????" },
    {
      "value": "511528",
      "text": "?????????" },
    {
      "value": "511529",
      "text": "?????????" }] },

  {
    "value": "5116",
    "text": "?????????",
    "children": [{
      "value": "511602",
      "text": "?????????" },
    {
      "value": "511603",
      "text": "?????????" },
    {
      "value": "511621",
      "text": "?????????" },
    {
      "value": "511622",
      "text": "?????????" },
    {
      "value": "511623",
      "text": "?????????" },
    {
      "value": "511681",
      "text": "?????????" }] },

  {
    "value": "5117",
    "text": "?????????",
    "children": [{
      "value": "511702",
      "text": "?????????" },
    {
      "value": "511703",
      "text": "?????????" },
    {
      "value": "511722",
      "text": "?????????" },
    {
      "value": "511723",
      "text": "?????????" },
    {
      "value": "511724",
      "text": "?????????" },
    {
      "value": "511725",
      "text": "??????" },
    {
      "value": "511781",
      "text": "?????????" }] },

  {
    "value": "5118",
    "text": "?????????",
    "children": [{
      "value": "511802",
      "text": "?????????" },
    {
      "value": "511803",
      "text": "?????????" },
    {
      "value": "511822",
      "text": "?????????" },
    {
      "value": "511823",
      "text": "?????????" },
    {
      "value": "511824",
      "text": "?????????" },
    {
      "value": "511825",
      "text": "?????????" },
    {
      "value": "511826",
      "text": "?????????" },
    {
      "value": "511827",
      "text": "?????????" }] },

  {
    "value": "5119",
    "text": "?????????",
    "children": [{
      "value": "511902",
      "text": "?????????" },
    {
      "value": "511903",
      "text": "?????????" },
    {
      "value": "511921",
      "text": "?????????" },
    {
      "value": "511922",
      "text": "?????????" },
    {
      "value": "511923",
      "text": "?????????" }] },

  {
    "value": "5120",
    "text": "?????????",
    "children": [{
      "value": "512002",
      "text": "?????????" },
    {
      "value": "512021",
      "text": "?????????" },
    {
      "value": "512022",
      "text": "?????????" }] },

  {
    "value": "5132",
    "text": "???????????????????????????",
    "children": [{
      "value": "513201",
      "text": "????????????" },
    {
      "value": "513221",
      "text": "?????????" },
    {
      "value": "513222",
      "text": "??????" },
    {
      "value": "513223",
      "text": "??????" },
    {
      "value": "513224",
      "text": "?????????" },
    {
      "value": "513225",
      "text": "????????????" },
    {
      "value": "513226",
      "text": "?????????" },
    {
      "value": "513227",
      "text": "?????????" },
    {
      "value": "513228",
      "text": "?????????" },
    {
      "value": "513230",
      "text": "?????????" },
    {
      "value": "513231",
      "text": "?????????" },
    {
      "value": "513232",
      "text": "????????????" },
    {
      "value": "513233",
      "text": "?????????" }] },

  {
    "value": "5133",
    "text": "?????????????????????",
    "children": [{
      "value": "513301",
      "text": "?????????" },
    {
      "value": "513322",
      "text": "?????????" },
    {
      "value": "513323",
      "text": "?????????" },
    {
      "value": "513324",
      "text": "?????????" },
    {
      "value": "513325",
      "text": "?????????" },
    {
      "value": "513326",
      "text": "?????????" },
    {
      "value": "513327",
      "text": "?????????" },
    {
      "value": "513328",
      "text": "?????????" },
    {
      "value": "513329",
      "text": "?????????" },
    {
      "value": "513330",
      "text": "?????????" },
    {
      "value": "513331",
      "text": "?????????" },
    {
      "value": "513332",
      "text": "?????????" },
    {
      "value": "513333",
      "text": "?????????" },
    {
      "value": "513334",
      "text": "?????????" },
    {
      "value": "513335",
      "text": "?????????" },
    {
      "value": "513336",
      "text": "?????????" },
    {
      "value": "513337",
      "text": "?????????" },
    {
      "value": "513338",
      "text": "?????????" }] },

  {
    "value": "5134",
    "text": "?????????????????????",
    "children": [{
      "value": "513401",
      "text": "?????????" },
    {
      "value": "513422",
      "text": "?????????????????????" },
    {
      "value": "513423",
      "text": "?????????" },
    {
      "value": "513424",
      "text": "?????????" },
    {
      "value": "513425",
      "text": "?????????" },
    {
      "value": "513426",
      "text": "?????????" },
    {
      "value": "513427",
      "text": "?????????" },
    {
      "value": "513428",
      "text": "?????????" },
    {
      "value": "513429",
      "text": "?????????" },
    {
      "value": "513430",
      "text": "?????????" },
    {
      "value": "513431",
      "text": "?????????" },
    {
      "value": "513432",
      "text": "?????????" },
    {
      "value": "513433",
      "text": "?????????" },
    {
      "value": "513434",
      "text": "?????????" },
    {
      "value": "513435",
      "text": "?????????" },
    {
      "value": "513436",
      "text": "?????????" },
    {
      "value": "513437",
      "text": "?????????" }] }] },


{
  "value": "52",
  "text": "?????????",
  "children": [{
    "value": "5201",
    "text": "?????????",
    "children": [{
      "value": "520102",
      "text": "?????????" },
    {
      "value": "520103",
      "text": "?????????" },
    {
      "value": "520111",
      "text": "?????????" },
    {
      "value": "520112",
      "text": "?????????" },
    {
      "value": "520113",
      "text": "?????????" },
    {
      "value": "520115",
      "text": "????????????" },
    {
      "value": "520121",
      "text": "?????????" },
    {
      "value": "520122",
      "text": "?????????" },
    {
      "value": "520123",
      "text": "?????????" },
    {
      "value": "520181",
      "text": "?????????" }] },

  {
    "value": "5202",
    "text": "????????????",
    "children": [{
      "value": "520201",
      "text": "?????????" },
    {
      "value": "520203",
      "text": "????????????" },
    {
      "value": "520221",
      "text": "?????????" },
    {
      "value": "520222",
      "text": "??????" }] },

  {
    "value": "5203",
    "text": "?????????",
    "children": [{
      "value": "520302",
      "text": "????????????" },
    {
      "value": "520303",
      "text": "?????????" },
    {
      "value": "520304",
      "text": "?????????" },
    {
      "value": "520322",
      "text": "?????????" },
    {
      "value": "520323",
      "text": "?????????" },
    {
      "value": "520324",
      "text": "?????????" },
    {
      "value": "520325",
      "text": "??????????????????????????????" },
    {
      "value": "520326",
      "text": "??????????????????????????????" },
    {
      "value": "520327",
      "text": "?????????" },
    {
      "value": "520328",
      "text": "?????????" },
    {
      "value": "520329",
      "text": "?????????" },
    {
      "value": "520330",
      "text": "?????????" },
    {
      "value": "520381",
      "text": "?????????" },
    {
      "value": "520382",
      "text": "?????????" }] },

  {
    "value": "5204",
    "text": "?????????",
    "children": [{
      "value": "520402",
      "text": "?????????" },
    {
      "value": "520403",
      "text": "?????????" },
    {
      "value": "520422",
      "text": "?????????" },
    {
      "value": "520423",
      "text": "??????????????????????????????" },
    {
      "value": "520424",
      "text": "??????????????????????????????" },
    {
      "value": "520425",
      "text": "??????????????????????????????" }] },

  {
    "value": "5205",
    "text": "?????????",
    "children": [{
      "value": "520502",
      "text": "????????????" },
    {
      "value": "520521",
      "text": "?????????" },
    {
      "value": "520522",
      "text": "?????????" },
    {
      "value": "520523",
      "text": "?????????" },
    {
      "value": "520524",
      "text": "?????????" },
    {
      "value": "520525",
      "text": "?????????" },
    {
      "value": "520526",
      "text": "?????????????????????????????????" },
    {
      "value": "520527",
      "text": "?????????" }] },

  {
    "value": "5206",
    "text": "?????????",
    "children": [{
      "value": "520602",
      "text": "?????????" },
    {
      "value": "520603",
      "text": "?????????" },
    {
      "value": "520621",
      "text": "?????????" },
    {
      "value": "520622",
      "text": "?????????????????????" },
    {
      "value": "520623",
      "text": "?????????" },
    {
      "value": "520624",
      "text": "?????????" },
    {
      "value": "520625",
      "text": "??????????????????????????????" },
    {
      "value": "520626",
      "text": "?????????" },
    {
      "value": "520627",
      "text": "????????????????????????" },
    {
      "value": "520628",
      "text": "?????????????????????" }] },

  {
    "value": "5223",
    "text": "?????????????????????????????????",
    "children": [{
      "value": "522301",
      "text": "?????????" },
    {
      "value": "522322",
      "text": "?????????" },
    {
      "value": "522323",
      "text": "?????????" },
    {
      "value": "522324",
      "text": "?????????" },
    {
      "value": "522325",
      "text": "?????????" },
    {
      "value": "522326",
      "text": "?????????" },
    {
      "value": "522327",
      "text": "?????????" },
    {
      "value": "522328",
      "text": "?????????" }] },

  {
    "value": "5226",
    "text": "??????????????????????????????",
    "children": [{
      "value": "522601",
      "text": "?????????" },
    {
      "value": "522622",
      "text": "?????????" },
    {
      "value": "522623",
      "text": "?????????" },
    {
      "value": "522624",
      "text": "?????????" },
    {
      "value": "522625",
      "text": "?????????" },
    {
      "value": "522626",
      "text": "?????????" },
    {
      "value": "522627",
      "text": "?????????" },
    {
      "value": "522628",
      "text": "?????????" },
    {
      "value": "522629",
      "text": "?????????" },
    {
      "value": "522630",
      "text": "?????????" },
    {
      "value": "522631",
      "text": "?????????" },
    {
      "value": "522632",
      "text": "?????????" },
    {
      "value": "522633",
      "text": "?????????" },
    {
      "value": "522634",
      "text": "?????????" },
    {
      "value": "522635",
      "text": "?????????" },
    {
      "value": "522636",
      "text": "?????????" }] },

  {
    "value": "5227",
    "text": "??????????????????????????????",
    "children": [{
      "value": "522701",
      "text": "?????????" },
    {
      "value": "522702",
      "text": "?????????" },
    {
      "value": "522722",
      "text": "?????????" },
    {
      "value": "522723",
      "text": "?????????" },
    {
      "value": "522725",
      "text": "?????????" },
    {
      "value": "522726",
      "text": "?????????" },
    {
      "value": "522727",
      "text": "?????????" },
    {
      "value": "522728",
      "text": "?????????" },
    {
      "value": "522729",
      "text": "?????????" },
    {
      "value": "522730",
      "text": "?????????" },
    {
      "value": "522731",
      "text": "?????????" },
    {
      "value": "522732",
      "text": "?????????????????????" }] }] },


{
  "value": "53",
  "text": "?????????",
  "children": [{
    "value": "5301",
    "text": "?????????",
    "children": [{
      "value": "530102",
      "text": "?????????" },
    {
      "value": "530103",
      "text": "?????????" },
    {
      "value": "530111",
      "text": "?????????" },
    {
      "value": "530112",
      "text": "?????????" },
    {
      "value": "530113",
      "text": "?????????" },
    {
      "value": "530114",
      "text": "?????????" },
    {
      "value": "530122",
      "text": "?????????" },
    {
      "value": "530124",
      "text": "?????????" },
    {
      "value": "530125",
      "text": "?????????" },
    {
      "value": "530126",
      "text": "?????????????????????" },
    {
      "value": "530127",
      "text": "?????????" },
    {
      "value": "530128",
      "text": "???????????????????????????" },
    {
      "value": "530129",
      "text": "???????????????????????????" },
    {
      "value": "530181",
      "text": "?????????" }] },

  {
    "value": "5303",
    "text": "?????????",
    "children": [{
      "value": "530302",
      "text": "?????????" },
    {
      "value": "530303",
      "text": "?????????" },
    {
      "value": "530321",
      "text": "?????????" },
    {
      "value": "530322",
      "text": "?????????" },
    {
      "value": "530323",
      "text": "?????????" },
    {
      "value": "530324",
      "text": "?????????" },
    {
      "value": "530325",
      "text": "?????????" },
    {
      "value": "530326",
      "text": "?????????" },
    {
      "value": "530381",
      "text": "?????????" }] },

  {
    "value": "5304",
    "text": "?????????",
    "children": [{
      "value": "530402",
      "text": "?????????" },
    {
      "value": "530403",
      "text": "?????????" },
    {
      "value": "530422",
      "text": "?????????" },
    {
      "value": "530423",
      "text": "?????????" },
    {
      "value": "530424",
      "text": "?????????" },
    {
      "value": "530425",
      "text": "?????????" },
    {
      "value": "530426",
      "text": "?????????????????????" },
    {
      "value": "530427",
      "text": "???????????????????????????" },
    {
      "value": "530428",
      "text": "????????????????????????????????????" }] },

  {
    "value": "5305",
    "text": "?????????",
    "children": [{
      "value": "530502",
      "text": "?????????" },
    {
      "value": "530521",
      "text": "?????????" },
    {
      "value": "530523",
      "text": "?????????" },
    {
      "value": "530524",
      "text": "?????????" },
    {
      "value": "530581",
      "text": "?????????" }] },

  {
    "value": "5306",
    "text": "?????????",
    "children": [{
      "value": "530602",
      "text": "?????????" },
    {
      "value": "530621",
      "text": "?????????" },
    {
      "value": "530622",
      "text": "?????????" },
    {
      "value": "530623",
      "text": "?????????" },
    {
      "value": "530624",
      "text": "?????????" },
    {
      "value": "530625",
      "text": "?????????" },
    {
      "value": "530626",
      "text": "?????????" },
    {
      "value": "530627",
      "text": "?????????" },
    {
      "value": "530628",
      "text": "?????????" },
    {
      "value": "530629",
      "text": "?????????" },
    {
      "value": "530630",
      "text": "?????????" }] },

  {
    "value": "5307",
    "text": "?????????",
    "children": [{
      "value": "530702",
      "text": "?????????" },
    {
      "value": "530721",
      "text": "????????????????????????" },
    {
      "value": "530722",
      "text": "?????????" },
    {
      "value": "530723",
      "text": "?????????" },
    {
      "value": "530724",
      "text": "?????????????????????" }] },

  {
    "value": "5308",
    "text": "?????????",
    "children": [{
      "value": "530802",
      "text": "?????????" },
    {
      "value": "530821",
      "text": "??????????????????????????????" },
    {
      "value": "530822",
      "text": "????????????????????????" },
    {
      "value": "530823",
      "text": "?????????????????????" },
    {
      "value": "530824",
      "text": "???????????????????????????" },
    {
      "value": "530825",
      "text": "???????????????????????????????????????" },
    {
      "value": "530826",
      "text": "??????????????????????????????" },
    {
      "value": "530827",
      "text": "????????????????????????????????????" },
    {
      "value": "530828",
      "text": "????????????????????????" },
    {
      "value": "530829",
      "text": "?????????????????????" }] },

  {
    "value": "5309",
    "text": "?????????",
    "children": [{
      "value": "530902",
      "text": "?????????" },
    {
      "value": "530921",
      "text": "?????????" },
    {
      "value": "530922",
      "text": "??????" },
    {
      "value": "530923",
      "text": "?????????" },
    {
      "value": "530924",
      "text": "?????????" },
    {
      "value": "530925",
      "text": "?????????????????????????????????????????????" },
    {
      "value": "530926",
      "text": "???????????????????????????" },
    {
      "value": "530927",
      "text": "?????????????????????" }] },

  {
    "value": "5323",
    "text": "?????????????????????",
    "children": [{
      "value": "532301",
      "text": "?????????" },
    {
      "value": "532322",
      "text": "?????????" },
    {
      "value": "532323",
      "text": "?????????" },
    {
      "value": "532324",
      "text": "?????????" },
    {
      "value": "532325",
      "text": "?????????" },
    {
      "value": "532326",
      "text": "?????????" },
    {
      "value": "532327",
      "text": "?????????" },
    {
      "value": "532328",
      "text": "?????????" },
    {
      "value": "532329",
      "text": "?????????" },
    {
      "value": "532331",
      "text": "?????????" }] },

  {
    "value": "5325",
    "text": "??????????????????????????????",
    "children": [{
      "value": "532501",
      "text": "?????????" },
    {
      "value": "532502",
      "text": "?????????" },
    {
      "value": "532503",
      "text": "?????????" },
    {
      "value": "532504",
      "text": "?????????" },
    {
      "value": "532523",
      "text": "?????????????????????" },
    {
      "value": "532524",
      "text": "?????????" },
    {
      "value": "532525",
      "text": "?????????" },
    {
      "value": "532527",
      "text": "?????????" },
    {
      "value": "532528",
      "text": "?????????" },
    {
      "value": "532529",
      "text": "?????????" },
    {
      "value": "532530",
      "text": "?????????????????????????????????" },
    {
      "value": "532531",
      "text": "?????????" },
    {
      "value": "532532",
      "text": "?????????????????????" }] },

  {
    "value": "5326",
    "text": "???????????????????????????",
    "children": [{
      "value": "532601",
      "text": "?????????" },
    {
      "value": "532622",
      "text": "?????????" },
    {
      "value": "532623",
      "text": "?????????" },
    {
      "value": "532624",
      "text": "????????????" },
    {
      "value": "532625",
      "text": "?????????" },
    {
      "value": "532626",
      "text": "?????????" },
    {
      "value": "532627",
      "text": "?????????" },
    {
      "value": "532628",
      "text": "?????????" }] },

  {
    "value": "5328",
    "text": "???????????????????????????",
    "children": [{
      "value": "532801",
      "text": "?????????" },
    {
      "value": "532822",
      "text": "?????????" },
    {
      "value": "532823",
      "text": "?????????" }] },

  {
    "value": "5329",
    "text": "?????????????????????",
    "children": [{
      "value": "532901",
      "text": "?????????" },
    {
      "value": "532922",
      "text": "?????????????????????" },
    {
      "value": "532923",
      "text": "?????????" },
    {
      "value": "532924",
      "text": "?????????" },
    {
      "value": "532925",
      "text": "?????????" },
    {
      "value": "532926",
      "text": "?????????????????????" },
    {
      "value": "532927",
      "text": "???????????????????????????" },
    {
      "value": "532928",
      "text": "?????????" },
    {
      "value": "532929",
      "text": "?????????" },
    {
      "value": "532930",
      "text": "?????????" },
    {
      "value": "532931",
      "text": "?????????" },
    {
      "value": "532932",
      "text": "?????????" }] },

  {
    "value": "5331",
    "text": "??????????????????????????????",
    "children": [{
      "value": "533102",
      "text": "?????????" },
    {
      "value": "533103",
      "text": "??????" },
    {
      "value": "533122",
      "text": "?????????" },
    {
      "value": "533123",
      "text": "?????????" },
    {
      "value": "533124",
      "text": "?????????" }] },

  {
    "value": "5333",
    "text": "????????????????????????",
    "children": [{
      "value": "533301",
      "text": "?????????" },
    {
      "value": "533323",
      "text": "?????????" },
    {
      "value": "533324",
      "text": "??????????????????????????????" },
    {
      "value": "533325",
      "text": "??????????????????????????????" }] },

  {
    "value": "5334",
    "text": "?????????????????????",
    "children": [{
      "value": "533401",
      "text": "???????????????" },
    {
      "value": "533422",
      "text": "?????????" },
    {
      "value": "533423",
      "text": "????????????????????????" }] }] },


{
  "value": "54",
  "text": "?????????",
  "children": [{
    "value": "5401",
    "text": "?????????",
    "children": [{
      "value": "540102",
      "text": "?????????" },
    {
      "value": "540103",
      "text": "???????????????" },
    {
      "value": "540121",
      "text": "?????????" },
    {
      "value": "540122",
      "text": "?????????" },
    {
      "value": "540123",
      "text": "?????????" },
    {
      "value": "540124",
      "text": "?????????" },
    {
      "value": "540126",
      "text": "?????????" },
    {
      "value": "540127",
      "text": "???????????????" }] },

  {
    "value": "5402",
    "text": "????????????",
    "children": [{
      "value": "540202",
      "text": "????????????" },
    {
      "value": "540221",
      "text": "????????????" },
    {
      "value": "540222",
      "text": "?????????" },
    {
      "value": "540223",
      "text": "?????????" },
    {
      "value": "540224",
      "text": "?????????" },
    {
      "value": "540225",
      "text": "?????????" },
    {
      "value": "540226",
      "text": "?????????" },
    {
      "value": "540227",
      "text": "????????????" },
    {
      "value": "540228",
      "text": "?????????" },
    {
      "value": "540229",
      "text": "?????????" },
    {
      "value": "540230",
      "text": "?????????" },
    {
      "value": "540231",
      "text": "?????????" },
    {
      "value": "540232",
      "text": "?????????" },
    {
      "value": "540233",
      "text": "?????????" },
    {
      "value": "540234",
      "text": "?????????" },
    {
      "value": "540235",
      "text": "????????????" },
    {
      "value": "540236",
      "text": "?????????" },
    {
      "value": "540237",
      "text": "?????????" }] },

  {
    "value": "5403",
    "text": "?????????",
    "children": [{
      "value": "540302",
      "text": "?????????" },
    {
      "value": "540321",
      "text": "?????????" },
    {
      "value": "540322",
      "text": "?????????" },
    {
      "value": "540323",
      "text": "????????????" },
    {
      "value": "540324",
      "text": "?????????" },
    {
      "value": "540325",
      "text": "?????????" },
    {
      "value": "540326",
      "text": "?????????" },
    {
      "value": "540327",
      "text": "?????????" },
    {
      "value": "540328",
      "text": "?????????" },
    {
      "value": "540329",
      "text": "?????????" },
    {
      "value": "540330",
      "text": "?????????" }] },

  {
    "value": "5404",
    "text": "?????????",
    "children": [{
      "value": "540402",
      "text": "?????????" },
    {
      "value": "540421",
      "text": "???????????????" },
    {
      "value": "540422",
      "text": "?????????" },
    {
      "value": "540423",
      "text": "?????????" },
    {
      "value": "540424",
      "text": "?????????" },
    {
      "value": "540425",
      "text": "?????????" },
    {
      "value": "540426",
      "text": "??????" }] },

  {
    "value": "5405",
    "text": "?????????",
    "children": [{
      "value": "540502",
      "text": "?????????" },
    {
      "value": "540521",
      "text": "?????????" },
    {
      "value": "540522",
      "text": "?????????" },
    {
      "value": "540523",
      "text": "?????????" },
    {
      "value": "540524",
      "text": "?????????" },
    {
      "value": "540525",
      "text": "?????????" },
    {
      "value": "540526",
      "text": "?????????" },
    {
      "value": "540527",
      "text": "?????????" },
    {
      "value": "540528",
      "text": "?????????" },
    {
      "value": "540529",
      "text": "?????????" },
    {
      "value": "540530",
      "text": "?????????" },
    {
      "value": "540531",
      "text": "????????????" }] },

  {
    "value": "5424",
    "text": "????????????",
    "children": [{
      "value": "542421",
      "text": "?????????" },
    {
      "value": "542422",
      "text": "?????????" },
    {
      "value": "542423",
      "text": "?????????" },
    {
      "value": "542424",
      "text": "?????????" },
    {
      "value": "542425",
      "text": "?????????" },
    {
      "value": "542426",
      "text": "?????????" },
    {
      "value": "542427",
      "text": "??????" },
    {
      "value": "542428",
      "text": "?????????" },
    {
      "value": "542429",
      "text": "?????????" },
    {
      "value": "542430",
      "text": "?????????" },
    {
      "value": "542431",
      "text": "?????????" }] },

  {
    "value": "5425",
    "text": "????????????",
    "children": [{
      "value": "542521",
      "text": "?????????" },
    {
      "value": "542522",
      "text": "?????????" },
    {
      "value": "542523",
      "text": "?????????" },
    {
      "value": "542524",
      "text": "?????????" },
    {
      "value": "542525",
      "text": "?????????" },
    {
      "value": "542526",
      "text": "?????????" },
    {
      "value": "542527",
      "text": "?????????" }] }] },


{
  "value": "61",
  "text": "?????????",
  "children": [{
    "value": "6101",
    "text": "?????????",
    "children": [{
      "value": "610102",
      "text": "?????????" },
    {
      "value": "610103",
      "text": "?????????" },
    {
      "value": "610104",
      "text": "?????????" },
    {
      "value": "610111",
      "text": "?????????" },
    {
      "value": "610112",
      "text": "?????????" },
    {
      "value": "610113",
      "text": "?????????" },
    {
      "value": "610114",
      "text": "?????????" },
    {
      "value": "610115",
      "text": "?????????" },
    {
      "value": "610116",
      "text": "?????????" },
    {
      "value": "610117",
      "text": "?????????" },
    {
      "value": "610122",
      "text": "?????????" },
    {
      "value": "610124",
      "text": "?????????" },
    {
      "value": "610125",
      "text": "??????" }] },

  {
    "value": "6102",
    "text": "?????????",
    "children": [{
      "value": "610202",
      "text": "?????????" },
    {
      "value": "610203",
      "text": "?????????" },
    {
      "value": "610204",
      "text": "?????????" },
    {
      "value": "610222",
      "text": "?????????" }] },

  {
    "value": "6103",
    "text": "?????????",
    "children": [{
      "value": "610302",
      "text": "?????????" },
    {
      "value": "610303",
      "text": "?????????" },
    {
      "value": "610304",
      "text": "?????????" },
    {
      "value": "610322",
      "text": "?????????" },
    {
      "value": "610323",
      "text": "?????????" },
    {
      "value": "610324",
      "text": "?????????" },
    {
      "value": "610326",
      "text": "??????" },
    {
      "value": "610327",
      "text": "??????" },
    {
      "value": "610328",
      "text": "?????????" },
    {
      "value": "610329",
      "text": "?????????" },
    {
      "value": "610330",
      "text": "??????" },
    {
      "value": "610331",
      "text": "?????????" }] },

  {
    "value": "6104",
    "text": "?????????",
    "children": [{
      "value": "610402",
      "text": "?????????" },
    {
      "value": "610403",
      "text": "?????????" },
    {
      "value": "610404",
      "text": "?????????" },
    {
      "value": "610422",
      "text": "?????????" },
    {
      "value": "610423",
      "text": "?????????" },
    {
      "value": "610424",
      "text": "??????" },
    {
      "value": "610425",
      "text": "?????????" },
    {
      "value": "610426",
      "text": "?????????" },
    {
      "value": "610427",
      "text": "??????" },
    {
      "value": "610428",
      "text": "?????????" },
    {
      "value": "610429",
      "text": "?????????" },
    {
      "value": "610430",
      "text": "?????????" },
    {
      "value": "610431",
      "text": "?????????" },
    {
      "value": "610481",
      "text": "?????????" }] },

  {
    "value": "6105",
    "text": "?????????",
    "children": [{
      "value": "610502",
      "text": "?????????" },
    {
      "value": "610503",
      "text": "?????????" },
    {
      "value": "610522",
      "text": "?????????" },
    {
      "value": "610523",
      "text": "?????????" },
    {
      "value": "610524",
      "text": "?????????" },
    {
      "value": "610525",
      "text": "?????????" },
    {
      "value": "610526",
      "text": "?????????" },
    {
      "value": "610527",
      "text": "?????????" },
    {
      "value": "610528",
      "text": "?????????" },
    {
      "value": "610581",
      "text": "?????????" },
    {
      "value": "610582",
      "text": "?????????" }] },

  {
    "value": "6106",
    "text": "?????????",
    "children": [{
      "value": "610602",
      "text": "?????????" },
    {
      "value": "610603",
      "text": "?????????" },
    {
      "value": "610621",
      "text": "?????????" },
    {
      "value": "610622",
      "text": "?????????" },
    {
      "value": "610623",
      "text": "?????????" },
    {
      "value": "610625",
      "text": "?????????" },
    {
      "value": "610626",
      "text": "?????????" },
    {
      "value": "610627",
      "text": "?????????" },
    {
      "value": "610628",
      "text": "??????" },
    {
      "value": "610629",
      "text": "?????????" },
    {
      "value": "610630",
      "text": "?????????" },
    {
      "value": "610631",
      "text": "?????????" },
    {
      "value": "610632",
      "text": "?????????" }] },

  {
    "value": "6107",
    "text": "?????????",
    "children": [{
      "value": "610702",
      "text": "?????????" },
    {
      "value": "610721",
      "text": "?????????" },
    {
      "value": "610722",
      "text": "?????????" },
    {
      "value": "610723",
      "text": "??????" },
    {
      "value": "610724",
      "text": "?????????" },
    {
      "value": "610725",
      "text": "??????" },
    {
      "value": "610726",
      "text": "?????????" },
    {
      "value": "610727",
      "text": "?????????" },
    {
      "value": "610728",
      "text": "?????????" },
    {
      "value": "610729",
      "text": "?????????" },
    {
      "value": "610730",
      "text": "?????????" }] },

  {
    "value": "6108",
    "text": "?????????",
    "children": [{
      "value": "610802",
      "text": "?????????" },
    {
      "value": "610803",
      "text": "?????????" },
    {
      "value": "610821",
      "text": "?????????" },
    {
      "value": "610822",
      "text": "?????????" },
    {
      "value": "610824",
      "text": "?????????" },
    {
      "value": "610825",
      "text": "?????????" },
    {
      "value": "610826",
      "text": "?????????" },
    {
      "value": "610827",
      "text": "?????????" },
    {
      "value": "610828",
      "text": "??????" },
    {
      "value": "610829",
      "text": "?????????" },
    {
      "value": "610830",
      "text": "?????????" },
    {
      "value": "610831",
      "text": "?????????" }] },

  {
    "value": "6109",
    "text": "?????????",
    "children": [{
      "value": "610902",
      "text": "?????????" },
    {
      "value": "610921",
      "text": "?????????" },
    {
      "value": "610922",
      "text": "?????????" },
    {
      "value": "610923",
      "text": "?????????" },
    {
      "value": "610924",
      "text": "?????????" },
    {
      "value": "610925",
      "text": "?????????" },
    {
      "value": "610926",
      "text": "?????????" },
    {
      "value": "610927",
      "text": "?????????" },
    {
      "value": "610928",
      "text": "?????????" },
    {
      "value": "610929",
      "text": "?????????" }] },

  {
    "value": "6110",
    "text": "?????????",
    "children": [{
      "value": "611002",
      "text": "?????????" },
    {
      "value": "611021",
      "text": "?????????" },
    {
      "value": "611022",
      "text": "?????????" },
    {
      "value": "611023",
      "text": "?????????" },
    {
      "value": "611024",
      "text": "?????????" },
    {
      "value": "611025",
      "text": "?????????" },
    {
      "value": "611026",
      "text": "?????????" }] }] },


{
  "value": "62",
  "text": "?????????",
  "children": [{
    "value": "6201",
    "text": "?????????",
    "children": [{
      "value": "620102",
      "text": "?????????" },
    {
      "value": "620103",
      "text": "????????????" },
    {
      "value": "620104",
      "text": "?????????" },
    {
      "value": "620105",
      "text": "?????????" },
    {
      "value": "620111",
      "text": "?????????" },
    {
      "value": "620121",
      "text": "?????????" },
    {
      "value": "620122",
      "text": "?????????" },
    {
      "value": "620123",
      "text": "?????????" }] },

  {
    "value": "6202",
    "text": "????????????",
    "children": [{
      "value": "620201",
      "text": "?????????" }] },

  {
    "value": "6203",
    "text": "?????????",
    "children": [{
      "value": "620302",
      "text": "?????????" },
    {
      "value": "620321",
      "text": "?????????" }] },

  {
    "value": "6204",
    "text": "?????????",
    "children": [{
      "value": "620402",
      "text": "?????????" },
    {
      "value": "620403",
      "text": "?????????" },
    {
      "value": "620421",
      "text": "?????????" },
    {
      "value": "620422",
      "text": "?????????" },
    {
      "value": "620423",
      "text": "?????????" }] },

  {
    "value": "6205",
    "text": "?????????",
    "children": [{
      "value": "620502",
      "text": "?????????" },
    {
      "value": "620503",
      "text": "?????????" },
    {
      "value": "620521",
      "text": "?????????" },
    {
      "value": "620522",
      "text": "?????????" },
    {
      "value": "620523",
      "text": "?????????" },
    {
      "value": "620524",
      "text": "?????????" },
    {
      "value": "620525",
      "text": "????????????????????????" }] },

  {
    "value": "6206",
    "text": "?????????",
    "children": [{
      "value": "620602",
      "text": "?????????" },
    {
      "value": "620621",
      "text": "?????????" },
    {
      "value": "620622",
      "text": "?????????" },
    {
      "value": "620623",
      "text": "?????????????????????" }] },

  {
    "value": "6207",
    "text": "?????????",
    "children": [{
      "value": "620702",
      "text": "?????????" },
    {
      "value": "620721",
      "text": "????????????????????????" },
    {
      "value": "620722",
      "text": "?????????" },
    {
      "value": "620723",
      "text": "?????????" },
    {
      "value": "620724",
      "text": "?????????" },
    {
      "value": "620725",
      "text": "?????????" }] },

  {
    "value": "6208",
    "text": "?????????",
    "children": [{
      "value": "620802",
      "text": "?????????" },
    {
      "value": "620821",
      "text": "?????????" },
    {
      "value": "620822",
      "text": "?????????" },
    {
      "value": "620823",
      "text": "?????????" },
    {
      "value": "620824",
      "text": "?????????" },
    {
      "value": "620825",
      "text": "?????????" },
    {
      "value": "620826",
      "text": "?????????" }] },

  {
    "value": "6209",
    "text": "?????????",
    "children": [{
      "value": "620902",
      "text": "?????????" },
    {
      "value": "620921",
      "text": "?????????" },
    {
      "value": "620922",
      "text": "?????????" },
    {
      "value": "620923",
      "text": "????????????????????????" },
    {
      "value": "620924",
      "text": "??????????????????????????????" },
    {
      "value": "620981",
      "text": "?????????" },
    {
      "value": "620982",
      "text": "?????????" }] },

  {
    "value": "6210",
    "text": "?????????",
    "children": [{
      "value": "621002",
      "text": "?????????" },
    {
      "value": "621021",
      "text": "?????????" },
    {
      "value": "621022",
      "text": "??????" },
    {
      "value": "621023",
      "text": "?????????" },
    {
      "value": "621024",
      "text": "?????????" },
    {
      "value": "621025",
      "text": "?????????" },
    {
      "value": "621026",
      "text": "??????" },
    {
      "value": "621027",
      "text": "?????????" }] },

  {
    "value": "6211",
    "text": "?????????",
    "children": [{
      "value": "621102",
      "text": "?????????" },
    {
      "value": "621121",
      "text": "?????????" },
    {
      "value": "621122",
      "text": "?????????" },
    {
      "value": "621123",
      "text": "?????????" },
    {
      "value": "621124",
      "text": "?????????" },
    {
      "value": "621125",
      "text": "??????" },
    {
      "value": "621126",
      "text": "??????" }] },

  {
    "value": "6212",
    "text": "?????????",
    "children": [{
      "value": "621202",
      "text": "?????????" },
    {
      "value": "621221",
      "text": "??????" },
    {
      "value": "621222",
      "text": "??????" },
    {
      "value": "621223",
      "text": "?????????" },
    {
      "value": "621224",
      "text": "??????" },
    {
      "value": "621225",
      "text": "?????????" },
    {
      "value": "621226",
      "text": "??????" },
    {
      "value": "621227",
      "text": "??????" },
    {
      "value": "621228",
      "text": "?????????" }] },

  {
    "value": "6229",
    "text": "?????????????????????",
    "children": [{
      "value": "622901",
      "text": "?????????" },
    {
      "value": "622921",
      "text": "?????????" },
    {
      "value": "622922",
      "text": "?????????" },
    {
      "value": "622923",
      "text": "?????????" },
    {
      "value": "622924",
      "text": "?????????" },
    {
      "value": "622925",
      "text": "?????????" },
    {
      "value": "622926",
      "text": "??????????????????" },
    {
      "value": "622927",
      "text": "?????????????????????????????????????????????" }] },

  {
    "value": "6230",
    "text": "?????????????????????",
    "children": [{
      "value": "623001",
      "text": "?????????" },
    {
      "value": "623021",
      "text": "?????????" },
    {
      "value": "623022",
      "text": "?????????" },
    {
      "value": "623023",
      "text": "?????????" },
    {
      "value": "623024",
      "text": "?????????" },
    {
      "value": "623025",
      "text": "?????????" },
    {
      "value": "623026",
      "text": "?????????" },
    {
      "value": "623027",
      "text": "?????????" }] }] },


{
  "value": "63",
  "text": "?????????",
  "children": [{
    "value": "6301",
    "text": "?????????",
    "children": [{
      "value": "630102",
      "text": "?????????" },
    {
      "value": "630103",
      "text": "?????????" },
    {
      "value": "630104",
      "text": "?????????" },
    {
      "value": "630105",
      "text": "?????????" },
    {
      "value": "630121",
      "text": "???????????????????????????" },
    {
      "value": "630122",
      "text": "?????????" },
    {
      "value": "630123",
      "text": "?????????" }] },

  {
    "value": "6302",
    "text": "?????????",
    "children": [{
      "value": "630202",
      "text": "?????????" },
    {
      "value": "630203",
      "text": "?????????" },
    {
      "value": "630222",
      "text": "???????????????????????????" },
    {
      "value": "630223",
      "text": "?????????????????????" },
    {
      "value": "630224",
      "text": "?????????????????????" },
    {
      "value": "630225",
      "text": "????????????????????????" }] },

  {
    "value": "6322",
    "text": "?????????????????????",
    "children": [{
      "value": "632221",
      "text": "?????????????????????" },
    {
      "value": "632222",
      "text": "?????????" },
    {
      "value": "632223",
      "text": "?????????" },
    {
      "value": "632224",
      "text": "?????????" }] },

  {
    "value": "6323",
    "text": "?????????????????????",
    "children": [{
      "value": "632321",
      "text": "?????????" },
    {
      "value": "632322",
      "text": "?????????" },
    {
      "value": "632323",
      "text": "?????????" },
    {
      "value": "632324",
      "text": "????????????????????????" }] },

  {
    "value": "6325",
    "text": "?????????????????????",
    "children": [{
      "value": "632521",
      "text": "?????????" },
    {
      "value": "632522",
      "text": "?????????" },
    {
      "value": "632523",
      "text": "?????????" },
    {
      "value": "632524",
      "text": "?????????" },
    {
      "value": "632525",
      "text": "?????????" }] },

  {
    "value": "6326",
    "text": "?????????????????????",
    "children": [{
      "value": "632621",
      "text": "?????????" },
    {
      "value": "632622",
      "text": "?????????" },
    {
      "value": "632623",
      "text": "?????????" },
    {
      "value": "632624",
      "text": "?????????" },
    {
      "value": "632625",
      "text": "?????????" },
    {
      "value": "632626",
      "text": "?????????" }] },

  {
    "value": "6327",
    "text": "?????????????????????",
    "children": [{
      "value": "632701",
      "text": "?????????" },
    {
      "value": "632722",
      "text": "?????????" },
    {
      "value": "632723",
      "text": "?????????" },
    {
      "value": "632724",
      "text": "?????????" },
    {
      "value": "632725",
      "text": "?????????" },
    {
      "value": "632726",
      "text": "????????????" }] },

  {
    "value": "6328",
    "text": "??????????????????????????????",
    "children": [{
      "value": "632801",
      "text": "????????????" },
    {
      "value": "632802",
      "text": "????????????" },
    {
      "value": "632821",
      "text": "?????????" },
    {
      "value": "632822",
      "text": "?????????" },
    {
      "value": "632823",
      "text": "?????????" }] }] },


{
  "value": "64",
  "text": "?????????",
  "children": [{
    "value": "6401",
    "text": "?????????",
    "children": [{
      "value": "640104",
      "text": "?????????" },
    {
      "value": "640105",
      "text": "?????????" },
    {
      "value": "640106",
      "text": "?????????" },
    {
      "value": "640121",
      "text": "?????????" },
    {
      "value": "640122",
      "text": "?????????" },
    {
      "value": "640181",
      "text": "?????????" }] },

  {
    "value": "6402",
    "text": "????????????",
    "children": [{
      "value": "640202",
      "text": "????????????" },
    {
      "value": "640205",
      "text": "?????????" },
    {
      "value": "640221",
      "text": "?????????" }] },

  {
    "value": "6403",
    "text": "?????????",
    "children": [{
      "value": "640302",
      "text": "?????????" },
    {
      "value": "640303",
      "text": "????????????" },
    {
      "value": "640323",
      "text": "?????????" },
    {
      "value": "640324",
      "text": "?????????" },
    {
      "value": "640381",
      "text": "????????????" }] },

  {
    "value": "6404",
    "text": "?????????",
    "children": [{
      "value": "640402",
      "text": "?????????" },
    {
      "value": "640422",
      "text": "?????????" },
    {
      "value": "640423",
      "text": "?????????" },
    {
      "value": "640424",
      "text": "?????????" },
    {
      "value": "640425",
      "text": "?????????" }] },

  {
    "value": "6405",
    "text": "?????????",
    "children": [{
      "value": "640502",
      "text": "????????????" },
    {
      "value": "640521",
      "text": "?????????" },
    {
      "value": "640522",
      "text": "?????????" }] }] },


{
  "value": "65",
  "text": "?????????",
  "children": [{
    "value": "6501",
    "text": "???????????????",
    "children": [{
      "value": "650102",
      "text": "?????????" },
    {
      "value": "650103",
      "text": "???????????????" },
    {
      "value": "650104",
      "text": "?????????" },
    {
      "value": "650105",
      "text": "????????????" },
    {
      "value": "650106",
      "text": "????????????" },
    {
      "value": "650107",
      "text": "????????????" },
    {
      "value": "650109",
      "text": "?????????" },
    {
      "value": "650121",
      "text": "???????????????" }] },

  {
    "value": "6502",
    "text": "???????????????",
    "children": [{
      "value": "650202",
      "text": "????????????" },
    {
      "value": "650203",
      "text": "???????????????" },
    {
      "value": "650204",
      "text": "????????????" },
    {
      "value": "650205",
      "text": "????????????" }] },

  {
    "value": "6504",
    "text": "????????????",
    "children": [{
      "value": "650402",
      "text": "?????????" },
    {
      "value": "650421",
      "text": "?????????" },
    {
      "value": "650422",
      "text": "????????????" }] },

  {
    "value": "6505",
    "text": "?????????",
    "children": [{
      "value": "650502",
      "text": "?????????" },
    {
      "value": "650521",
      "text": "???????????????????????????" },
    {
      "value": "650522",
      "text": "?????????" }] },

  {
    "value": "6523",
    "text": "?????????????????????",
    "children": [{
      "value": "652301",
      "text": "?????????" },
    {
      "value": "652302",
      "text": "?????????" },
    {
      "value": "652323",
      "text": "????????????" },
    {
      "value": "652324",
      "text": "????????????" },
    {
      "value": "652325",
      "text": "?????????" },
    {
      "value": "652327",
      "text": "???????????????" },
    {
      "value": "652328",
      "text": "????????????????????????" }] },

  {
    "value": "6527",
    "text": "???????????????????????????",
    "children": [{
      "value": "652701",
      "text": "?????????" },
    {
      "value": "652702",
      "text": "???????????????" },
    {
      "value": "652722",
      "text": "?????????" },
    {
      "value": "652723",
      "text": "?????????" }] },

  {
    "value": "6528",
    "text": "???????????????????????????",
    "children": [{
      "value": "652801",
      "text": "????????????" },
    {
      "value": "652822",
      "text": "?????????" },
    {
      "value": "652823",
      "text": "?????????" },
    {
      "value": "652824",
      "text": "?????????" },
    {
      "value": "652825",
      "text": "?????????" },
    {
      "value": "652826",
      "text": "?????????????????????" },
    {
      "value": "652827",
      "text": "?????????" },
    {
      "value": "652828",
      "text": "?????????" },
    {
      "value": "652829",
      "text": "?????????" }] },

  {
    "value": "6529",
    "text": "???????????????",
    "children": [{
      "value": "652901",
      "text": "????????????" },
    {
      "value": "652922",
      "text": "?????????" },
    {
      "value": "652923",
      "text": "?????????" },
    {
      "value": "652924",
      "text": "?????????" },
    {
      "value": "652925",
      "text": "?????????" },
    {
      "value": "652926",
      "text": "?????????" },
    {
      "value": "652927",
      "text": "?????????" },
    {
      "value": "652928",
      "text": "????????????" },
    {
      "value": "652929",
      "text": "?????????" }] },

  {
    "value": "6530",
    "text": "?????????????????????????????????",
    "children": [{
      "value": "653001",
      "text": "????????????" },
    {
      "value": "653022",
      "text": "????????????" },
    {
      "value": "653023",
      "text": "????????????" },
    {
      "value": "653024",
      "text": "?????????" }] },

  {
    "value": "6531",
    "text": "????????????",
    "children": [{
      "value": "653101",
      "text": "?????????" },
    {
      "value": "653121",
      "text": "?????????" },
    {
      "value": "653122",
      "text": "?????????" },
    {
      "value": "653123",
      "text": "????????????" },
    {
      "value": "653124",
      "text": "?????????" },
    {
      "value": "653125",
      "text": "?????????" },
    {
      "value": "653126",
      "text": "?????????" },
    {
      "value": "653127",
      "text": "????????????" },
    {
      "value": "653128",
      "text": "????????????" },
    {
      "value": "653129",
      "text": "?????????" },
    {
      "value": "653130",
      "text": "?????????" },
    {
      "value": "653131",
      "text": "?????????????????????????????????" }] },

  {
    "value": "6532",
    "text": "????????????",
    "children": [{
      "value": "653201",
      "text": "?????????" },
    {
      "value": "653221",
      "text": "?????????" },
    {
      "value": "653222",
      "text": "?????????" },
    {
      "value": "653223",
      "text": "?????????" },
    {
      "value": "653224",
      "text": "?????????" },
    {
      "value": "653225",
      "text": "?????????" },
    {
      "value": "653226",
      "text": "?????????" },
    {
      "value": "653227",
      "text": "?????????" }] },

  {
    "value": "6543",
    "text": "???????????????",
    "children": [{
      "value": "654321",
      "text": "????????????" },
    {
      "value": "654322",
      "text": "?????????" },
    {
      "value": "654323",
      "text": "?????????" },
    {
      "value": "654301",
      "text": "????????????" },
    {
      "value": "654326",
      "text": "????????????" },
    {
      "value": "654325",
      "text": "?????????" },
    {
      "value": "654324",
      "text": "????????????" }] },

  {
    "value": "6590",
    "text": "?????????????????????",
    "children": [{
      "value": "659009",
      "text": "??????" },
    {
      "value": "659008",
      "text": "????????????" },
    {
      "value": "659005",
      "text": "??????" },
    {
      "value": "659006",
      "text": "????????????" },
    {
      "value": "659004",
      "text": "????????????" },
    {
      "value": "659003",
      "text": "???????????????" },
    {
      "value": "659002",
      "text": "????????????" },
    {
      "value": "659001",
      "text": "????????????" },
    {
      "value": "659007",
      "text": "??????" }] },

  {
    "value": "6540",
    "text": "????????????????????????",
    "children": [{
      "value": "654026",
      "text": "?????????" },
    {
      "value": "654022",
      "text": "???????????????????????????" },
    {
      "value": "654021",
      "text": "?????????" },
    {
      "value": "654004",
      "text": "???????????????" },
    {
      "value": "654003",
      "text": "?????????" },
    {
      "value": "654002",
      "text": "?????????" },
    {
      "value": "654023",
      "text": "?????????" },
    {
      "value": "654024",
      "text": "?????????" },
    {
      "value": "654025",
      "text": "?????????" },
    {
      "value": "654028",
      "text": "????????????" },
    {
      "value": "654027",
      "text": "????????????" }] },

  {
    "value": "6542",
    "text": "????????????",
    "children": [{
      "value": "654224",
      "text": "?????????" },
    {
      "value": "654223",
      "text": "?????????" },
    {
      "value": "654221",
      "text": "?????????" },
    {
      "value": "654225",
      "text": "?????????" },
    {
      "value": "654202",
      "text": "?????????" },
    {
      "value": "654201",
      "text": "?????????" },
    {
      "value": "654226",
      "text": "??????????????????????????????" }] }] }];exports.area = area;

/***/ }),

/***/ 53:
/*!*****************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/request/apis.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.addCompany = addCompany;exports.addBusiness = addBusiness;exports.addFinance = addFinance;var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 54));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//????????????
function addCompany(data) {
  return (0, _request.default)('/external_qiyeadd', data, 'GET');
}

//????????????
function addBusiness(data) {
  return (0, _request.default)('/qualifications_form', data, 'POST');
}

//????????????
function addFinance(data) {
  return (0, _request.default)('/external_qiyerongziadd', { params: data }, 'GET');
}

/***/ }),

/***/ 54:
/*!********************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/request/request.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = request;exports.baseUrl = void 0;var baseUrl = 'http://zhimao-test.hnyipeng.cn';exports.baseUrl = baseUrl;
function request() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  uni.showLoading({
    title: '?????????...' });

  return new Promise(function (resolve, reject) {
    uni.request({
      url: baseUrl + '/api' + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json' },

      success: function success(_ref) {var data = _ref.data;
        uni.hideLoading();
        if (data.status == 1) {
          resolve(data.data);
        } else {
          uni.showToast({
            title: '?????????????????????',
            icon: 'none' });

        }
      },
      fail: function fail(err) {
        uni.hideLoading();
        uni.showToast({
          title: '???????????????',
          icon: 'none' });

        reject(err);
      } });

  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 55:
/*!*******************************************************************!*\
  !*** C:/Users/yjy/Desktop/on-stop-service-mini/utils/validate.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.verifyEmail = verifyEmail;
//????????????
function verifyEmail(value) {
  return /^\S+?@\S+?\.\S+?$/.test(value);
}

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map