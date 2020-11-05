"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("babel-polyfill");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var VueGoogleMaps = _interopRequireWildcard(require("vue2-google-maps"));

var _vue2Dragula = require("vue2-dragula");

var _vueQuillEditor = _interopRequireDefault(require("vue-quill-editor"));

var _vueWysiwyg = _interopRequireDefault(require("vue-wysiwyg"));

var _vue2Breadcrumbs = _interopRequireDefault(require("vue2-breadcrumbs"));

var _vueResource = _interopRequireDefault(require("vue-resource"));

var _vueNotification = _interopRequireDefault(require("vue-notification"));

var _velocityAnimate = _interopRequireDefault(require("velocity-animate"));

var _nprogress = _interopRequireDefault(require("nprogress"));

var _vueI18n = _interopRequireDefault(require("vue-i18n"));

var _vueTour = _interopRequireDefault(require("vue-tour"));

var _vueFullscreen = _interopRequireDefault(require("vue-fullscreen"));

var _vueInstantsearch = _interopRequireDefault(require("vue-instantsearch"));

var _vueVideoPlayer = _interopRequireDefault(require("vue-video-player"));

var _vueCroppa = _interopRequireDefault(require("vue-croppa"));

var _axios = _interopRequireDefault(require("axios"));

var _globalComponents = _interopRequireDefault(require("./globalComponents"));

var _router = _interopRequireDefault(require("./router"));

var _store = require("./store/store");

require("./firebase");

require("./lib/VuelyCss");

var _lang = _interopRequireDefault(require("./lang"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// src/main.js
window.$ = require('jquery');
window.JQuery = require('jquery'); // global components

_vue["default"].config.productionTip = false; // navigation guards before each

_router["default"].beforeEach(function (to, from, next) {
  _nprogress["default"].start();

  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('user') === null) {
      next({
        path: '/session/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
}); // navigation guard after each


_router["default"].afterEach(function () {
  _nprogress["default"].done();

  setTimeout(function () {
    var contentWrapper = document.querySelector(".v-content__wrap");

    if (contentWrapper !== null) {
      contentWrapper.scrollTop = 0;
    }

    var boxedLayout = document.querySelector('.app-boxed-layout .app-content');

    if (boxedLayout !== null) {
      boxedLayout.scrollTop = 0;
    }

    var miniLayout = document.querySelector('.app-mini-layout .app-content');

    if (miniLayout !== null) {
      miniLayout.scrollTop = 0;
    }
  }, 200);
});

_vue["default"].use(_vueInstantsearch["default"]);

_vue["default"].use(_vueI18n["default"]);

_vue["default"].use(_vueTour["default"]);

_vue["default"].use(_vue2Dragula.Vue2Dragula);

_vue["default"].use(_vueQuillEditor["default"]);

_vue["default"].use(_vueResource["default"]);

_vue["default"].use(_vueWysiwyg["default"], {});

_vue["default"].use(_vue2Breadcrumbs["default"]);

_vue["default"].use(_vueNotification["default"], {
  velocity: _velocityAnimate["default"]
});

_vue["default"].use(_vueFullscreen["default"]);

_vue["default"].use(_globalComponents["default"]);

_vue["default"].use(_vueVideoPlayer["default"]);

_vue["default"].use(_vueCroppa["default"]);

_vue["default"].use(_axios["default"]);

_vue["default"].use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' // Add your here your google map api key

  }
});

var i18n = new _vueI18n["default"]({
  locale: _store.store.getters.selectedLocale.locale,
  // set locale
  messages: _lang["default"] // set locale messages

});
new _vue["default"]({
  store: _store.store,
  i18n: i18n,
  router: _router["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  },
  components: {
    App: _App["default"]
  }
}).$mount('#app');