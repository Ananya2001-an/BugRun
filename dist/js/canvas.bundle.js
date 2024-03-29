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

/***/ "./src/imgs/flag.png":
/*!***************************!*\
  !*** ./src/imgs/flag.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ac2d4ae5b2fd20865052534023b23a28.png");

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
/* harmony import */ var _imgs_flag_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/flag.png */ "./src/imgs/flag.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }












//create HTML image object 
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var skip_btns = document.querySelectorAll('.skip');
skip_btns.forEach(function (skip_btn) {
  skip_btn.addEventListener('click', function () {
    if (document.querySelector('.tutorial').style.display != 'none') {
      document.querySelector('.tutorial').style.display = 'none';
    }
    document.querySelector('canvas').style.opacity = 1;
  });
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;
var paused = false;
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
var Bug = /*#__PURE__*/function () {
  function Bug(_ref3) {
    var x = _ref3.x,
      y = _ref3.y,
      speed = _ref3.speed,
      distance = _ref3.distance,
      direction = _ref3.direction;
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
function init() {
  document.querySelector('.restart').style.display = 'none';
  scrollOffset = 0; //for finding the winning point
  player = new Player();
  platformImage = createImage(_imgs_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformSmallTallImage = createImage(_imgs_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  bgImage = createImage(_imgs_bg_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  objectImage = createImage(_imgs_objects_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
  bugs = [new Bug({
    x: 3 * platformImage.width,
    y: 437,
    speed: 5,
    distance: 2 * platformImage.width - 70,
    direction: 'left'
  }), new Bug({
    x: 7 * platformImage.width,
    y: 200,
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
    y: 375,
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
    if (keys.right.pressed && scrollOffset + 400 < 23 * platformImage.width + 1800 + 200)
      //orginally player covered some distanc of 400px
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
  }

  //sprite switching
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
  }

  //win condition
  if (scrollOffset + 400 >= 23 * platformImage.width + 1800) {
    document.querySelector('.restart').style.display = 'block';
    document.querySelector('.restart-button').addEventListener('click', function () {
      init();
    });
  }

  //lose condition
  if (player.position.y > canvas.height) {
    init(); //start again
  }

  //platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  //bug collision
  for (var i = 0; i < bugs.length; i++) {
    if (player.position.y + player.height <= bugs[i].position.y && player.position.y + player.height + player.velocity.y >= bugs[i].position.y && player.position.x + player.width >= bugs[i].position.x && player.position.x <= bugs[i].position.x + bugs[i].width) {
      bugs.splice(i, 1); //kills bug
    }

    // if(player.position.x + player.width == bugs[i].position.x
    // || player.position.x  == bugs[i].position.x + bugs[i].width)
    // {
    //     init()
    // }
  }
}

init();
animate();
addEventListener('keydown', function (_ref4) {
  var keyCode = _ref4.keyCode;
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
addEventListener('keyup', function (_ref5) {
  var keyCode = _ref5.keyCode;
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