"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _app = _interopRequireDefault(require("firebase/app"));

var _nprogress = _interopRequireDefault(require("nprogress"));

var _router = _interopRequireDefault(require("../../../router"));

var _firebase = require("../../../firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Auth Module
 */
var state = {
  user: localStorage.getItem('user'),
  isUserSigninWithAuth0: Boolean(localStorage.getItem('isUserSigninWithAuth0'))
}; // getters

var getters = {
  getUser: function getUser(state) {
    return state.user;
  },
  isUserSigninWithAuth0: function isUserSigninWithAuth0(state) {
    return state.isUserSigninWithAuth0;
  }
}; // actions

var actions = {
  signinUserInFirebase: function signinUserInFirebase(context, payload) {
    var user = payload.user;
    context.commit('loginUser');

    _app["default"].auth().signInWithEmailAndPassword(user.email, user.password).then(function (user) {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('loginUserSuccess', user);
      }, 500);
    })["catch"](function (error) {
      context.commit('loginUserFailure', error);
    });
  },
  logoutUserFromFirebase: function logoutUserFromFirebase(context) {
    _nprogress["default"].start();

    _app["default"].auth().signOut().then(function () {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('logoutUser');
      }, 500);
    })["catch"](function (error) {
      context.commit('loginUserFailure', error);
    });
  },
  signinUserWithFacebook: function signinUserWithFacebook(context) {
    context.commit('loginUser');

    _app["default"].auth().signInWithPopup(_firebase.facebookAuthProvider).then(function (result) {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('loginUserSuccess', result.user);
      }, 500);
    })["catch"](function (error) {
      context.commit('loginUserFailure', error);
    });
  },
  signinUserWithGoogle: function signinUserWithGoogle(context) {
    context.commit('loginUser');

    _app["default"].auth().signInWithPopup(_firebase.googleAuthProvider).then(function (result) {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('loginUserSuccess', result.user);
      }, 500);
    })["catch"](function (error) {
      context.commit('loginUserFailure', error);
    });
  },
  signinUserWithTwitter: function signinUserWithTwitter(context) {
    context.commit('loginUser');

    _app["default"].auth().signInWithPopup(_firebase.twitterAuthProvider).then(function (result) {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('loginUserSuccess', result.user);
      }, 500);
    })["catch"](function (error) {
      context.commit('loginUserFailure', error);
    });
  },
  signinUserWithGithub: function signinUserWithGithub(context) {
    context.commit('loginUser');

    _app["default"].auth().signInWithPopup(_firebase.githubAuthProvider).then(function (result) {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('loginUserSuccess', result.user);
      }, 500);
    })["catch"](function (error) {
      context.commit('loginUserFailure', error);
    });
  },
  signupUserInFirebase: function signupUserInFirebase(context, payload) {
    var userDetail = payload.userDetail;
    context.commit('signUpUser');

    _app["default"].auth().createUserWithEmailAndPassword(userDetail.email, userDetail.password).then(function () {
      _nprogress["default"].done();

      setTimeout(function () {
        context.commit('signUpUserSuccess', userDetail);
      }, 500);
    })["catch"](function (error) {
      context.commit('signUpUserFailure', error);
    });
  },
  signInUserWithAuth0: function signInUserWithAuth0(context, payload) {
    context.commit('signInUserWithAuth0Success', payload);
  },
  signOutUserFromAuth0: function signOutUserFromAuth0(context) {
    context.commit('signOutUserFromAuth0Success');
  }
}; // mutations

var mutations = {
  loginUser: function loginUser() {
    _nprogress["default"].start();
  },
  loginUserSuccess: function loginUserSuccess(state, user) {
    state.user = user;
    localStorage.setItem('user', user);
    state.isUserSigninWithAuth0 = false;

    _router["default"].push("/default/dashboard/crm");

    setTimeout(function () {
      _vue["default"].notify({
        group: 'loggedIn',
        type: 'success',
        text: 'User Logged In Success!'
      });
    }, 1500);
  },
  loginUserFailure: function loginUserFailure(state, error) {
    _nprogress["default"].done();

    _vue["default"].notify({
      group: 'loggedIn',
      type: 'error',
      text: error.message
    });
  },
  logoutUser: function logoutUser(state) {
    state.user = null;
    localStorage.removeItem('user');

    _router["default"].push("/session/login");
  },
  signUpUser: function signUpUser() {
    _nprogress["default"].start();
  },
  signUpUserSuccess: function signUpUserSuccess(state, user) {
    state.user = localStorage.setItem('user', user);

    _router["default"].push("/default/dashboard/crm");

    _vue["default"].notify({
      group: 'loggedIn',
      type: 'success',
      text: 'Account Created!'
    });
  },
  signUpUserFailure: function signUpUserFailure(state, error) {
    _nprogress["default"].done();

    _vue["default"].notify({
      group: 'loggedIn',
      type: 'error',
      text: error.message
    });
  },
  signInUserWithAuth0Success: function signInUserWithAuth0Success(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    state.isUserSigninWithAuth0 = true;
  },
  signOutUserFromAuth0Success: function signOutUserFromAuth0Success(state) {
    state.user = null;
    localStorage.removeItem('user');
  }
};
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
exports["default"] = _default;