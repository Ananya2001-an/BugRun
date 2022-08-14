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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/imgs/BugLeft.png":
/*!******************************!*\
  !*** ./src/imgs/BugLeft.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "588e538ee07a475317349e8ee1410d7e.png");

/***/ }),

/***/ "./src/imgs/BugRight.png":
/*!*******************************!*\
  !*** ./src/imgs/BugRight.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8ec34bd593bbc3bec41b2c1f6ce7ac33.png");

/***/ }),

/***/ "./src/imgs/CurrencyApi.png":
/*!**********************************!*\
  !*** ./src/imgs/CurrencyApi.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5a6d1587ef79dc12b4b32e25c0d5df4a.png");

/***/ }),

/***/ "./src/imgs/EmailApi.png":
/*!*******************************!*\
  !*** ./src/imgs/EmailApi.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e91039c3e6017315ed871fadb0a4cde8.png");

/***/ }),

/***/ "./src/imgs/FoodApi.png":
/*!******************************!*\
  !*** ./src/imgs/FoodApi.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dccc658a54698192c8cb85947cbe0239.png");

/***/ }),

/***/ "./src/imgs/SongApi.png":
/*!******************************!*\
  !*** ./src/imgs/SongApi.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "07251b7a1710eb9479aa523074cb0e3d.png");

/***/ }),

/***/ "./src/imgs/SpriteRunLeft.png":
/*!************************************!*\
  !*** ./src/imgs/SpriteRunLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c1e4fb2bce85ce2f07be74a6d13dfbd9.png");

/***/ }),

/***/ "./src/imgs/SpriteRunRight.png":
/*!*************************************!*\
  !*** ./src/imgs/SpriteRunRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6aa083e303960bc7ce33b96954fb9b4.png");

/***/ }),

/***/ "./src/imgs/SpriteStandLeft.png":
/*!**************************************!*\
  !*** ./src/imgs/SpriteStandLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4247c77fcb5bbdebad6b78b4a1ba0dbc.png");

/***/ }),

/***/ "./src/imgs/SpriteStandRight.png":
/*!***************************************!*\
  !*** ./src/imgs/SpriteStandRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a136f3932e2944449b960bf7c87adb7e.png");

/***/ }),

/***/ "./src/imgs/YoutubeApi.png":
/*!*********************************!*\
  !*** ./src/imgs/YoutubeApi.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b32401e3869c52d2f31307f451cdc718.png");

/***/ }),

/***/ "./src/imgs/bg.png":
/*!*************************!*\
  !*** ./src/imgs/bg.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6be0a126b485f90a907822c0e671c9ef.png");

/***/ }),

/***/ "./src/imgs/objects.png":
/*!******************************!*\
  !*** ./src/imgs/objects.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dca300fce1955f10f176c5c2de043f59.png");

/***/ }),

/***/ "./src/imgs/platform.png":
/*!*******************************!*\
  !*** ./src/imgs/platform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b9f5a677ff7ee79c93584bb942717d69.png");

/***/ }),

/***/ "./src/imgs/platformSmallTall.png":
/*!****************************************!*\
  !*** ./src/imgs/platformSmallTall.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3bcb35c845f65f171c0dc6fd0ea3167c.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imgs_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/platform.png */ "./src/imgs/platform.png");
/* harmony import */ var _imgs_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/platformSmallTall.png */ "./src/imgs/platformSmallTall.png");
/* harmony import */ var _imgs_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/bg.png */ "./src/imgs/bg.png");
/* harmony import */ var _imgs_objects_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/objects.png */ "./src/imgs/objects.png");
/* harmony import */ var _imgs_SpriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/SpriteRunRight.png */ "./src/imgs/SpriteRunRight.png");
/* harmony import */ var _imgs_SpriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/SpriteRunLeft.png */ "./src/imgs/SpriteRunLeft.png");
/* harmony import */ var _imgs_SpriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/SpriteStandRight.png */ "./src/imgs/SpriteStandRight.png");
/* harmony import */ var _imgs_SpriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/SpriteStandLeft.png */ "./src/imgs/SpriteStandLeft.png");
/* harmony import */ var _imgs_BugRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/BugRight.png */ "./src/imgs/BugRight.png");
/* harmony import */ var _imgs_BugLeft_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/BugLeft.png */ "./src/imgs/BugLeft.png");
/* harmony import */ var _imgs_YoutubeApi_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/YoutubeApi.png */ "./src/imgs/YoutubeApi.png");
/* harmony import */ var _imgs_FoodApi_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgs/FoodApi.png */ "./src/imgs/FoodApi.png");
/* harmony import */ var _imgs_CurrencyApi_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imgs/CurrencyApi.png */ "./src/imgs/CurrencyApi.png");
/* harmony import */ var _imgs_SongApi_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../imgs/SongApi.png */ "./src/imgs/SongApi.png");
/* harmony import */ var _imgs_EmailApi_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imgs/EmailApi.png */ "./src/imgs/EmailApi.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















 //create HTML image object 

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var skip_btns = document.querySelectorAll('.skip');
var next_btns = document.querySelectorAll('.next');
var back_btns = document.querySelectorAll('.back');
skip_btns.forEach(function (skip_btn) {
  skip_btn.addEventListener('click', function () {
    if (document.querySelector('.tutorial-1').style.display != 'none') {
      document.querySelector('.tutorial-1').style.display = 'none';
    } else if (document.querySelector('.tutorial-2').style.display != 'none') {
      document.querySelector('.tutorial-2').style.display = 'none';
    } else if (document.querySelector('.tutorial-3').style.display != 'none') {
      document.querySelector('.tutorial-3').style.display = 'none';
    } else {
      document.querySelector('.tutorial-4').style.display = 'none';
    }

    document.getElementsByClassName('api-check')[0].style.opacity = 1;
    document.getElementsByClassName('result-class')[0].style.opacity = 1;
    document.querySelector('canvas').style.opacity = 1;
  });
});
next_btns.forEach(function (next_btn) {
  next_btn.addEventListener('click', function () {
    if (document.querySelector('.tutorial-1').style.display != 'none') {
      document.querySelector('.tutorial-1').style.display = 'none';
      document.querySelector('.tutorial-2').style.display = 'block';
    } else if (document.querySelector('.tutorial-2').style.display != 'none') {
      document.querySelector('.tutorial-2').style.display = 'none';
      document.querySelector('.tutorial-3').style.display = 'block';
    } else {
      document.querySelector('.tutorial-3').style.display = 'none';
      document.querySelector('.tutorial-4').style.display = 'block';
    }
  });
});
back_btns.forEach(function (back_btn) {
  back_btn.addEventListener('click', function () {
    if (document.querySelector('.tutorial-2').style.display != 'none') {
      document.querySelector('.tutorial-2').style.display = 'none';
      document.querySelector('.tutorial-1').style.animation = 'none';
      document.querySelector('.tutorial-1').style.display = 'block';
    } else if (document.querySelector('.tutorial-3').style.display != 'none') {
      document.querySelector('.tutorial-3').style.display = 'none';
      document.querySelector('.tutorial-2').style.display = 'block';
    } else {
      document.querySelector('.tutorial-4').style.display = 'none';
      document.querySelector('.tutorial-3').style.display = 'block';
    }
  });
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;
var finalScore = 0;
var paused = false;
var score = document.querySelector('.result');

function updateScore() {
  score.innerHTML = "<p style=\"line-height:2;\">Current score <br> is: ".concat(finalScore, "</p>");
}

updateScore();

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.width = 100;
    this.height = 200;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.speed = 10;
    this.sprites = {
      stand: {
        right: createImage(_imgs_SpriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_imgs_SpriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 170,
        width: 100
      },
      run: {
        right: createImage(_imgs_SpriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        left: createImage(_imgs_SpriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 240,
        width: 140
      }
    };
    this.frames = 0;
    this.frameDirection = 'right';
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 170;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 350, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.frames < 23 && this.frameDirection == 'right') this.frames++;else if (this.frames >= 23) this.frameDirection = 'left';
      if (this.frames > 1 && this.frameDirection == 'left') this.frames--;else if (this.frames <= 1) this.frameDirection = 'right';
      this.draw();
      if (this.position.y + this.velocity.y >= 0) this.position.y += this.velocity.y;else {
        this.velocity.y = 0;
      }
      this.position.x += this.velocity.x;
      if (this.position.y + this.velocity.y + this.height <= canvas.height) this.velocity.y += gravity; //acceleration due to gravity
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      //same as x:x
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObjects = /*#__PURE__*/function () {
  function GenericObjects(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObjects);

    this.position = {
      x: x,
      //same as x:x
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObjects, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObjects;
}();

function changeOpacity() {
  document.querySelector('canvas').style.opacity = 1;
  document.querySelector('.timer').style.display = 'none';
}

function showTimer() {
  document.querySelector('.timer').style.display = 'block';
}

function clearResults() {
  document.querySelector('.api-check').innerHTML = '';
}

var Api = /*#__PURE__*/function () {
  function Api(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        id = _ref3.id,
        real = _ref3.real;

    _classCallCheck(this, Api);

    this.position = {
      x: x,
      y: y
    }, this.id = id, this.real = real;
    this.frames = 0;
    this.frameDirection = 'right';
    this.sprites = {
      1: {
        img: createImage(_imgs_YoutubeApi_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
        cropWidth: 240,
        cropHeight: 170,
        width: 50,
        height: 40
      },
      2: {
        img: createImage(_imgs_FoodApi_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
        cropWidth: 200,
        cropHeight: 190,
        width: 50,
        height: 50
      },
      3: {
        img: createImage(_imgs_CurrencyApi_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
        cropWidth: 180,
        cropHeight: 180,
        width: 50,
        height: 50
      },
      4: {
        img: createImage(_imgs_SongApi_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
        cropWidth: 170,
        cropHeight: 170,
        width: 50,
        height: 50
      },
      5: {
        img: createImage(_imgs_EmailApi_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
        cropWidth: 70,
        cropHeight: 150,
        width: 30,
        height: 40
      }
    };

    if (this.id == 1) {
      this.currentSprite = this.sprites[1].img;
      this.currentCropWidth = this.sprites[1].cropWidth;
      this.currentCropHeight = this.sprites[1].cropHeight;
      this.width = this.sprites[1].width;
      this.height = this.sprites[1].height;
    } else if (this.id == 2) {
      this.currentSprite = this.sprites[2].img;
      this.currentCropWidth = this.sprites[2].cropWidth;
      this.currentCropHeight = this.sprites[2].cropHeight;
      this.width = this.sprites[2].width;
      this.height = this.sprites[2].height;
    } else if (this.id == 3) {
      this.currentSprite = this.sprites[3].img;
      this.currentCropWidth = this.sprites[3].cropWidth;
      this.currentCropHeight = this.sprites[3].cropHeight;
      this.width = this.sprites[3].width;
      this.height = this.sprites[3].height;
    } else if (this.id == 4) {
      this.currentSprite = this.sprites[4].img;
      this.currentCropWidth = this.sprites[4].cropWidth;
      this.currentCropHeight = this.sprites[4].cropHeight;
      this.width = this.sprites[4].width;
      this.height = this.sprites[4].height;
    } else {
      this.currentSprite = this.sprites[5].img;
      this.currentCropWidth = this.sprites[5].cropWidth;
      this.currentCropHeight = this.sprites[5].cropHeight;
      this.width = this.sprites[5].width;
      this.height = this.sprites[5].height;
    }
  }

  _createClass(Api, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, this.currentCropHeight, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.frames < 7 && this.frameDirection == 'right') this.frames++;else if (this.frames >= 7) this.frameDirection = 'left';
      if (this.frames > 1 && this.frameDirection == 'left') this.frames--;else if (this.frames <= 1) this.frameDirection = 'right';
      this.draw();
    } //youtube api

  }, {
    key: "video",
    value: function video() {
      var _this = this;

      var videoContainer = document.querySelector('.api-check');
      var apiKey = 'AIzaSyBPYQHwT-_csUfoTW5VNsq48UT7_QS_bGU';
      videoContainer.innerHTML = '<h5 style="text-align:center;line-height:1.5;">Query the "Youtube" API to see if it\'s real or fake.</h5>\
        <input type="text" \
        required placeholder="Search Video"> \
        <button class="check">Check</button>\
        ';
      var btn = document.getElementsByClassName('check')[0];
      btn.addEventListener('click', function () {
        if (_this.real == 'true') {
          var searchQuery = document.getElementsByTagName('input')[0].value;
          fetch("https://www.googleapis.com/youtube/v3/search?key=".concat(apiKey, "&type=video&part=snippet&q=").concat(searchQuery)).then(function (result) {
            if (result.ok) {
              videoContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:green;">Youtube API worked successfully!!</h5>\
                        <p style="text-align:center;font-size:9px;font-style:italic;font-weight:lighter;">Below are some results fetched with API.</p>';
              finalScore += 200;
              updateScore();
              return result.json();
            } else {
              console.log('Unsuccessful api call');
            }
          }).then(function (data) {
            console.log(data);
            var videos = data.items;

            for (var i = 0; i < 3; i++) {
              videoContainer.innerHTML += "<p style=\"text-align:center;font-size:12px;\">".concat(videos[i].snippet.title, "</p>");
            }
          })["catch"](function (err) {
            videoContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Seems that API calls are exhausted! But don\'t worry!\
                    Since the API was real, hence the score would be increased.</h5>';
            finalScore += 200;
            updateScore();
          });
        } else {
          videoContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Aww Snap! It was a fake!!</h5>';
          finalScore -= 200;
          updateScore();
        }

        paused = false;
        document.querySelector('.wait').style.display = 'none';
        showTimer();
        setTimeout(animate, 5000);
        setTimeout(changeOpacity, 5000);
        setTimeout(clearResults, 5000);
      });
    } //currencyExchange api

  }, {
    key: "currency",
    value: function currency() {
      var _this2 = this;

      var currContainer = document.querySelector('.api-check');
      currContainer.innerHTML = '<h5 style="text-align:center;line-height:1.5;">Query the "CurrencyExchange" API to see if it\'s real or fake.</h5>\
        <input type="text" \
        required class="from" placeholder="From (eg: USD)"> \
        <input type="text" \
        required class="to" placeholder="To (eg: INR)"> \
        <input type="text" \
        required class="amt" placeholder="Enter Amount"> \
        <button class="check">Check</button>\
        ';
      var options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e082dc2589mshb5504557b8fe7b3p173647jsna5744a0ae868',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };
      var btn = document.getElementsByClassName('check')[0];
      btn.addEventListener('click', function () {
        if (_this2.real == 'true') {
          var from = document.querySelector('.from').value;
          var to = document.querySelector('.to').value;
          var amt = document.querySelector('.amt').value;
          fetch("https://currency-exchange.p.rapidapi.com/exchange?from=".concat(from, "&to=").concat(to, "&q=").concat(amt), options).then(function (response) {
            return response.json();
          }).then(function (response) {
            var conversion = response;
            currContainer.innerHTML = "<h5 style=\"text-align:center;line-height:2;color:green;\">CurrencyExchange API worked successfully!!</h5>                    <p style=\"text-align:center;font-size:9px;font-style:italic;font-weight:lighter;\">Below result is fetched with API.</p>                    <p style=\"text-align:center;font-size:12px;\">".concat(amt, " ").concat(from, " is equivalent to ").concat(conversion, " ").concat(to, ".</p>");
            finalScore += 100;
            updateScore();
          })["catch"](function (err) {
            currContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Seems that API calls are exhausted! But don\'t worry!\
                    Since the API was real, hence the score would be increased.</h5>';
            finalScore += 100;
            updateScore();
          });
        } else {
          currContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Aww Snap! It was a fake!!</h5>';
          finalScore -= 100;
          updateScore();
        }

        paused = false;
        document.querySelector('.wait').style.display = 'none';
        showTimer();
        setTimeout(animate, 5000);
        setTimeout(changeOpacity, 5000);
        setTimeout(clearResults, 5000);
      });
    } //deezer songs api

  }, {
    key: "song",
    value: function song() {
      var _this3 = this;

      var songContainer = document.querySelector('.api-check');
      songContainer.innerHTML = '<h5 style="text-align:center;line-height:1.5;">Query the "Deezer" API to see if it\'s real or fake.</h5>\
        <input type="text" \
        required placeholder="Search song/artist/album"> \
        <button class="check">Check</button>\
        ';
      var btn = document.getElementsByClassName('check')[0];
      btn.addEventListener('click', function () {
        if (_this3.real == 'true') {
          var searchQuery = document.getElementsByTagName('input')[0].value;
          var options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e082dc2589mshb5504557b8fe7b3p173647jsna5744a0ae868',
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
          };
          fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(searchQuery), options).then(function (response) {
            return response.json();
          }).then(function (response) {
            songContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:green;">Deezer API worked successfully!!</h5>\
                        <p style="text-align:center;font-size:9px;font-style:italic;font-weight:lighter;">Below are some results fetched with API.</p>';
            var songs = response.data;
            console.log(songs);

            for (var i = 0; i < 3; i++) {
              songContainer.innerHTML += "<p style=\"text-align:center;font-size:12px;\">".concat(songs[i].album.title, " sung by ").concat(songs[i].artist.name, "</p>");
            }

            finalScore += 300;
            updateScore();
          })["catch"](function (err) {
            songContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Seems that API calls are exhausted! But don\'t worry!\
                        Since the API was real, hence the score would be increased.</h5>';
            finalScore += 300;
            updateScore();
          });
        } else {
          songContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Aww Snap! It was a fake!!</h5>';
          finalScore -= 300;
          updateScore();
        }

        paused = false;
        document.querySelector('.wait').style.display = 'none';
        showTimer();
        setTimeout(animate, 5000);
        setTimeout(changeOpacity, 5000);
        setTimeout(clearResults, 5000);
      });
    } //edamam food api

  }, {
    key: "food",
    value: function food() {
      var _this4 = this;

      var foodContainer = document.querySelector('.api-check');
      foodContainer.innerHTML = '<h5 style="text-align:center;line-height:1.5;">Query the "Edamam Food and Grocery Database" API to see if it\'s real or fake.</h5>\
        <input type="text" \
        required placeholder="Search food"> \
        <button class="check">Check</button>\
        ';
      var btn = document.getElementsByClassName('check')[0];
      btn.addEventListener('click', function () {
        if (_this4.real == 'true') {
          var searchQuery = document.getElementsByTagName('input')[0].value;
          var options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e082dc2589mshb5504557b8fe7b3p173647jsna5744a0ae868',
              'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
            }
          };
          fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=".concat(searchQuery), options).then(function (response) {
            return response.json();
          }).then(function (response) {
            foodContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:green;">Edamam API worked successfully!!</h5>\
                        <p style="text-align:center;font-size:9px;font-style:italic;font-weight:lighter;">Below are some results fetched with API.</p>';
            var foods = response.hints;

            for (var i = 0; i < 3; i++) {
              foodContainer.innerHTML += "<p style=\"text-align:center;font-size:12px;\">".concat(foods[i].food.label, " (").concat(foods[i].food.nutrients.ENERC_KCAL, " KCAL)</p>");
            }

            finalScore += 400;
            updateScore();
          })["catch"](function (err) {
            foodContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Seems that API calls are exhausted! But don\'t worry!\
                    Since the API was real, hence the score would be increased. </h5>';
            finalScore += 400;
            updateScore();
          });
        } else {
          foodContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Aww Snap! It was a fake!!</h5>';
          finalScore -= 400;
          updateScore();
        }

        paused = false;
        document.querySelector('.wait').style.display = 'none';
        showTimer();
        setTimeout(animate, 5000);
        setTimeout(changeOpacity, 5000);
        setTimeout(clearResults, 5000);
      });
    } //email verifier

  }, {
    key: "email",
    value: function email() {
      var _this5 = this;

      var mailContainer = document.querySelector('.api-check');
      mailContainer.innerHTML = '<h5 style="text-align:center;line-height:1.5;">Query the "Email verifier" API to see if it\'s real or fake.</h5>\
        <input type="text" \
        required placeholder="Enter email"> \
        <button class="check">Check</button>\
        ';
      var btn = document.getElementsByClassName('check')[0];
      btn.addEventListener('click', function () {
        if (_this5.real == 'true') {
          var searchQuery = document.getElementsByTagName('input')[0].value;
          var options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e082dc2589mshb5504557b8fe7b3p173647jsna5744a0ae868',
              'X-RapidAPI-Host': 'email-verifier-completely-free.p.rapidapi.com'
            }
          };
          fetch("https://email-verifier-completely-free.p.rapidapi.com/email-verification/".concat(searchQuery), options).then(function (response) {
            return response.json();
          }).then(function (response) {
            mailContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:green;">Email Verifier API worked successfully!!</h5>\
                    <p style="text-align:center;font-size:9px;font-style:italic;font-weight:lighter;">Below result is fetched with API.</p>';
            mailContainer.innerHTML += "<p style=\"text-align:center;font-size:12px;\">Format: ".concat(response.response.format, ", Professional: ").concat(response.response.professional, "</p>");
            finalScore += 50;
            updateScore();
          })["catch"](function (err) {
            mailContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Seems that API calls are exhausted! But don\'t worry!\
                    Since the API was real, hence the score would be increased. </h5>';
            finalScore += 50;
            updateScore();
          });
        } else {
          mailContainer.innerHTML = '<h5 style="text-align:center;line-height:2;color:red;">Aww Snap! It was a fake!!</h5>';
          finalScore -= 50;
          updateScore();
        }

        paused = false;
        document.querySelector('.wait').style.display = 'none';
        showTimer();
        setTimeout(animate, 5000);
        setTimeout(changeOpacity, 5000);
        setTimeout(clearResults, 5000);
      });
    }
  }]);

  return Api;
}();

var Bug = /*#__PURE__*/function () {
  function Bug(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        speed = _ref4.speed,
        distance = _ref4.distance,
        direction = _ref4.direction;

    _classCallCheck(this, Bug);

    this.position = {
      x: x,
      y: y
    };
    this.width = 70, this.height = 50;
    this.speed = speed;
    this.distance = distance;
    this.covered = 0;
    this.sprites = {
      right: createImage(_imgs_BugRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
      left: createImage(_imgs_BugLeft_png__WEBPACK_IMPORTED_MODULE_9__["default"])
    };

    if (direction == 'right') {
      this.currentSprite = this.sprites.right;
    } else {
      this.currentSprite = this.sprites.left;
    }
  }

  _createClass(Bug, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, 0, 0, 110, 80, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "move",
    value: function move() {
      this.draw();

      if (this.covered < this.distance && this.currentSprite == this.sprites.right) {
        this.position.x += this.speed;
        this.covered += this.speed;
      } else if (this.covered >= this.distance && this.currentSprite == this.sprites.right) {
        this.currentSprite = this.sprites.left;
        this.covered = 0;
      } else if (this.covered < this.distance && this.currentSprite == this.sprites.left) {
        this.position.x -= this.speed;
        this.covered += this.speed;
      } else if (this.covered >= this.distance && this.currentSprite == this.sprites.left) {
        this.currentSprite = this.sprites.right;
        this.covered = 0;
      }
    }
  }]);

  return Bug;
}();

var scrollOffset = 0; //for finding the winning point

var player = new Player();
var platformImage = createImage(_imgs_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_imgs_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var bgImage = createImage(_imgs_bg_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var objectImage = createImage(_imgs_objects_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ytbImage = createImage(_imgs_YoutubeApi_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
var platforms = [];
var genericObjects = [];
var apis = [];
var bugs = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var bool = ['true', 'false'];

function init() {
  scrollOffset = 0; //for finding the winning point

  player = new Player();
  finalScore = 0;
  updateScore();
  document.querySelector('.api-check').innerHTML = '';
  platformImage = createImage(_imgs_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformSmallTallImage = createImage(_imgs_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  bgImage = createImage(_imgs_bg_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  objectImage = createImage(_imgs_objects_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  ytbImage = createImage(_imgs_YoutubeApi_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
  platforms = [new Platform({
    x: 0,
    y: 487,
    image: platformImage
  }), new Platform({
    x: platformImage.width,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 2 * platformImage.width,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 3 * platformImage.width,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 4 * platformImage.width + 400,
    y: 425,
    image: platformSmallTallImage
  }), new Platform({
    x: 5 * platformImage.width + 800,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 6 * platformImage.width,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 8 * platformImage.width + 200,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 9 * platformImage.width + 200,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 10 * platformImage.width + 200,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 11 * platformImage.width + 200,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 12 * platformImage.width + 200,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 13 * platformImage.width + 800,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 16 * platformImage.width + 1300,
    y: 425,
    image: platformSmallTallImage
  }), new Platform({
    x: 17 * platformImage.width + 1300,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 18 * platformImage.width + 1300,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 19 * platformImage.width + 1400,
    y: 425,
    image: platformSmallTallImage
  }), new Platform({
    x: 21 * platformImage.width + 1400,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 22 * platformImage.width + 1400,
    y: 487,
    image: platformImage
  }), new Platform({
    x: 23 * platformImage.width + 1600,
    y: 425,
    image: platformSmallTallImage
  }), new Platform({
    x: 7 * platformImage.width,
    y: 250,
    image: platformImage
  }), new Platform({
    x: 12 * platformImage.width + 700,
    y: 240,
    image: platformImage
  }), new Platform({
    x: 14 * platformImage.width + 1000,
    y: 300,
    image: platformSmallTallImage
  }), new Platform({
    x: 15 * platformImage.width + 1200,
    y: 250,
    image: platformImage
  }), new Platform({
    x: 20 * platformImage.width + 1300,
    y: 240,
    image: platformImage
  }), new Platform({
    x: 23 * platformImage.width + 1800,
    y: 250,
    image: platformImage
  })];
  genericObjects = [new GenericObjects({
    x: 0,
    y: 0,
    image: bgImage
  }), new GenericObjects({
    x: bgImage.width,
    y: 0,
    image: bgImage
  }), new GenericObjects({
    x: 2 * bgImage.width,
    y: 0,
    image: bgImage
  }), new GenericObjects({
    x: 3 * bgImage.width,
    y: 0,
    image: bgImage
  }), new GenericObjects({
    x: 0,
    y: 180,
    image: objectImage
  }), new GenericObjects({
    x: 6 * platformImage.width + 50,
    y: 180,
    image: objectImage
  })];
  apis = [new Api({
    x: 7 * platformImage.width + 200,
    y: 100,
    id: 1,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 15 * platformImage.width + 1200 + 200,
    y: 150,
    id: 3,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 19 * platformImage.width + 1400 + 200,
    y: 150,
    id: 1,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 9 * platformImage.width + 200 + 200,
    y: 100,
    id: 5,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 19 * platformImage.width + 1400,
    y: 375,
    id: 4,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 22 * platformImage.width + 1400 + 200,
    y: 437,
    id: 2,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 23 * platformImage.width + 1600,
    y: 200,
    id: 3,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 6 * platformImage.width,
    y: 300,
    id: 2,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 11 * platformImage.width + 200 + 200,
    y: 437,
    id: 4,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 17 * platformImage.width + 1300 + 200,
    y: 437,
    id: 1,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 13 * platformImage.width + 800 + 200,
    y: 250,
    id: 3,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 4 * platformImage.width + 400,
    y: 375,
    id: 4,
    real: bool[Math.floor(Math.random() * bool.length)]
  }), new Api({
    x: 2 * platformImage.width + 200,
    y: 375,
    id: 3,
    real: bool[Math.floor(Math.random() * bool.length)]
  })];
  bugs = [new Bug({
    x: 3 * platformImage.width,
    y: 437,
    speed: 5,
    distance: 2 * platformImage.width - 70,
    direction: 'left'
  }), new Bug({
    x: 7 * platformImage.width,
    y: 150,
    speed: 2,
    distance: platformImage.width - 70,
    direction: 'right'
  }), new Bug({
    x: 8 * platformImage.width + 200,
    y: 437,
    speed: 3,
    distance: platformImage.width - 70,
    direction: 'right'
  }), new Bug({
    x: 10 * platformImage.width + 200,
    y: 437,
    speed: 4,
    distance: 2 * platformImage.width - 70,
    direction: 'left'
  }), new Bug({
    x: 15 * platformImage.width + 1200,
    y: 200,
    speed: 3,
    distance: platformImage.width - 70,
    direction: 'right'
  }), new Bug({
    x: 19 * platformImage.width + 1400,
    y: 425,
    speed: 7,
    distance: platformSmallTallImage.width - 70,
    direction: 'right'
  }), new Bug({
    x: 22 * platformImage.width + 1400,
    y: 437,
    speed: 2,
    distance: platformImage.width - 70,
    direction: 'left'
  })];
}

function animate() {
  if (paused == false) {
    requestAnimationFrame(animate);
  }

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (obj) {
    obj.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  apis.forEach(function (api) {
    api.update();
  });
  bugs.forEach(function (bug) {
    bug.move();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed && scrollOffset + 400 < 23 * platformImage.width + 1800 + 200) //orginally player covered some distanc of 400px
      {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        genericObjects.forEach(function (obj) {
          obj.position.x -= player.speed * 0.66; //parallax effect
        });
        apis.forEach(function (api) {
          api.position.x -= player.speed;
        });
        bugs.forEach(function (bug) {
          bug.position.x -= player.speed;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (obj) {
        obj.position.x += player.speed * 0.66; //parallax effect
      });
      apis.forEach(function (api) {
        api.position.x += player.speed;
      });
      bugs.forEach(function (bug) {
        bug.position.x += player.speed;
      });
    }
  } //sprite switching


  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite === player.sprites.run.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite === player.sprites.run.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } //win condition


  if (scrollOffset + 400 >= 23 * platformImage.width + 1800) {
    console.log('you win');
  } //lose condition


  if (player.position.y > canvas.height) {
    init(); //start again
  } //platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //api collision

  for (var i = 0; i < apis.length; i++) {
    if (player.position.y + player.velocity.y >= apis[i].position.y && player.position.y + player.velocity.y <= apis[i].position.y + apis[i].height && player.position.x + player.width >= apis[i].position.x && player.position.x <= apis[i].position.x + apis[i].width || player.position.y + player.height + player.velocity.y >= apis[i].position.y && player.position.y + player.velocity.y <= apis[i].position.y + apis[i].height && player.position.x + player.width >= apis[i].position.x && player.position.x <= apis[i].position.x + apis[i].width) {
      paused = true;
      document.querySelector('canvas').style.opacity = 0.5;
      document.querySelector('.wait').style.display = 'block';

      if (apis[i].id == 1) {
        apis[i].video();
      } else if (apis[i].id == 2) {
        apis[i].food();
      } else if (apis[i].id == 3) {
        apis[i].currency();
      } else if (apis[i].id == 4) {
        apis[i].song();
      } else {
        apis[i].email();
      }

      apis.splice(i, 1);
    }
  } //bug collision


  for (var _i = 0; _i < bugs.length; _i++) {
    if (player.position.y + player.height <= bugs[_i].position.y && player.position.y + player.height + player.velocity.y >= bugs[_i].position.y && player.position.x + player.width >= bugs[_i].position.x && player.position.x <= bugs[_i].position.x + bugs[_i].width) {
      bugs.splice(_i, 1); //kills bug
    } // if(player.position.x + player.width == bugs[i].position.x
    // || player.position.x  == bugs[i].position.x + bugs[i].width)
    // {
    //     init()
    // }

  }
}

init();
animate();
addEventListener('keydown', function (_ref5) {
  var keyCode = _ref5.keyCode;

  switch (keyCode) {
    case 65:
      {
        //key a
        console.log('left');
        keys.left.pressed = true;
        lastKey = 'left';
        break;
      }

    case 68:
      {
        //key d
        console.log('right');
        keys.right.pressed = true;
        lastKey = 'right';
        break;
      }

    case 83:
      {
        //key s
        console.log('down');
        break;
      }

    case 87:
      {
        //key w
        console.log('up');
        player.velocity.y -= 20;
        break;
      }

    case 37:
      {
        //key leftarrow
        console.log('left');
        keys.left.pressed = true;
        lastKey = 'left';
        break;
      }

    case 39:
      {
        //key rightarrow
        console.log('right');
        keys.right.pressed = true;
        lastKey = 'right';
        break;
      }

    case 40:
      {
        //key downarrow
        console.log('down');
        break;
      }

    case 38:
      {
        //key uparrow
        console.log('up');
        player.velocity.y -= 25;
        break;
      }
  }
});
addEventListener('keyup', function (_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 65:
      {
        //key a
        console.log('left');
        keys.left.pressed = false;
        break;
      }

    case 68:
      {
        //key d
        console.log('right');
        keys.right.pressed = false;
        break;
      }

    case 37:
      {
        //key leftarrow
        console.log('left');
        keys.left.pressed = false;
        break;
      }

    case 39:
      {
        //key rightarrow
        console.log('right');
        keys.right.pressed = false;
        break;
      }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map