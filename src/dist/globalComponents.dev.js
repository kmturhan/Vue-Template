"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuePerfectScrollbar = _interopRequireDefault(require("vue-perfect-scrollbar"));

var _AppSectionLoader = _interopRequireDefault(require("Components/AppSectionLoader/AppSectionLoader"));

var _vueLoadingSpinner = require("vue-loading-spinner");

var _DeleteConfirmationDialog = _interopRequireDefault(require("Components/DeleteConfirmationDialog/DeleteConfirmationDialog"));

var _PageTitleBar = _interopRequireDefault(require("Components/PageTitleBar/PageTitleBar"));

var _CryptoSlider = _interopRequireDefault(require("Components/Widgets/CryptoSlider"));

var _AppCard = _interopRequireDefault(require("Components/AppCard/AppCard"));

var _StatsCard = _interopRequireDefault(require("Components/StatsCard/StatsCard"));

var _StatsCardV = _interopRequireDefault(require("Components/StatsCardV2/StatsCardV2"));

var _SectionTooltip = _interopRequireDefault(require("Components/SectionTooltip/SectionTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Vuely Global Components
 */
// delete Confirmation Dialog
// page title bar
//crypto slider
// App Card component
// stats card
// section tooltip
var GlobalComponents = {
  install: function install(Vue) {
    Vue.component('appCard', _AppCard["default"]);
    Vue.component('sectionTooltip', _SectionTooltip["default"]);
    Vue.component('statsCard', _StatsCard["default"]);
    Vue.component('statsCardV2', _StatsCardV["default"]);
    Vue.component('deleteConfirmationDialog', _DeleteConfirmationDialog["default"]);
    Vue.component('vuePerfectScrollbar', _vuePerfectScrollbar["default"]);
    Vue.component('appSectionLoader', _AppSectionLoader["default"]);
    Vue.component('pageTitleBar', _PageTitleBar["default"]);
    Vue.component('rotateSquare2', _vueLoadingSpinner.RotateSquare2);
    Vue.component('cryptoSlider', _CryptoSlider["default"]);
  }
};
var _default = GlobalComponents;
exports["default"] = _default;