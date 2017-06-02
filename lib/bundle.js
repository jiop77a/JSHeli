/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Copter = __webpack_require__(1);

class Board {
  constructor(ctx, canvasEl) {
    this.ctx = ctx;
    this.copter = new Copter(this.ctx, 50);
    this.firstClick = true;
    this.canvasEl = canvasEl;
  }

  drawBoard() {
    let ctx = this.ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 500);
  }

  drawBorders() {
    let ctx = this.ctx;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 1000, 50);
    ctx.fillRect(0, 450, 1000, 50);
  }

  clickEvent() {
    if (this.firstClick) {
      this.copter.draw();
      this.firstClick = false;
    } else {
      this.copter.bounce();
    }

  }
  start() {
    const copter = this.copter;
    const canvasEl = this.canvasEl;

    this.drawBoard();
    this.drawBorders();
    canvasEl.addEventListener("click", this.clickEvent.bind(this));
  }
}
module.exports = Board;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Copter {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.timeoutID = null;
  }

  falling() {
    this.timeoutID = window.setTimeout(this.draw.bind(this), 20);
  }

  draw() {

    window.clearTimeout(this.timeoutID);
    let ctx = this.ctx;
    //clear the column in which the copter could be located
    ctx.clearRect(100, 50, 20, 400);
    //fill in the background
    ctx.fillStyle = "black";
    ctx.fillRect(100, 50, 20, 400);
    //draw the copter
    ctx.fillStyle = "green";
    ctx.fillRect(100, this.pos, 20, 20);
    this.pos += 1;
    console.log(this.pos);
    this.falling();
  }

  bounce() {

    let ctx = this.ctx;
    //clear the column in which the copter could be located
    ctx.clearRect(100, 50, 20, 400);
    //clear the falling timer
    window.clearTimeout(this.timeoutID);
    //adjust the position and redraw
    this.pos -= 30;
    this.falling();

  }
}

module.exports = Copter;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(0);


// var firstClick = true;
// let copterPos = 50;
// var falling;

// const drawBoard = () => {
//
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, 1000, 500);
//   const Border = ctx;
//   Border.fillStyle = "blue";
//   Border.fillRect(0, 0, 1000, 50);
//   Border.fillRect(0, 450, 1000, 50);
// // };
//
// const drawCopter = (y = 20) => {
//   console.log(y);
//   ctx.clearRect(0, 0, 1000, 500);
//   drawBoard();
//   ctx.fillStyle = "green";
//   ctx.fillRect(100, y, 20, 20);
//   y += 1;
//   copterPos = y;
//   falling = window.setTimeout(drawCopter, 20, y);
// };
//
// const bounceCopter = () => {
//   ctx.clearRect(100, 100, 50, 500);
//   window.clearTimeout(falling);
//   copterPos -= 30;
//   drawCopter(copterPos);
// };

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;
  const ctx = canvasEl.getContext("2d");
  new Board(ctx, canvasEl).start();
});

// canvasEl.addEventListener("click", () => {
//   if (firstClick) {
//     drawCopter();
//     firstClick = false;
//
//   } else {
//     bounceCopter();
//   }
// });


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map