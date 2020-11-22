"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * App Config File
 */
var _default = {
  appLogo: '/static/img/labrus-logo-standart-1.png',
  // App Logo,
  darkLogo: '/static/img/site-dark-logo.png',
  // dark logo
  appLogo2: '/static/img/labrus-logo-standart-1.png',
  // App Logo 2 For Login & Signup Page
  brand: 'Labrus',
  // Brand Name
  copyrightText: 'Labrus © 2020 All Rights Reserved.',
  // Copyright Text
  enableUserTour: process.env.NODE_ENV === 'production' ? true : false,
  // Enable User Tour
  weatherApiId: 'b1b15e88fa797225412429c1c50c122a1',
  // weather API Id
  weatherApiKey: '69b72ed255ce5efad910bd946685883a' // weather APi key

};
exports["default"] = _default;