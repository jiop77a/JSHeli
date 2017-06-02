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
const Obstacle = __webpack_require__(4);

class Board {
  constructor() {
    this.copter = new Copter();
    this.obstacle = new Obstacle();

  }

  draw(ctx) {
    this.drawBoard(ctx);
    this.drawBorders(ctx);
    this.copter.draw(ctx);
    this.obstacle.draw(ctx);
  }

  drawBoard(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 500);
  }

  drawBorders(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 1000, 50);
    ctx.fillRect(0, 450, 1000, 50);
  }

  clickEvent() {
    this.copter.pos[1] -= 30;
  }

  update() {
    this.copter.move();
    this.obstacle.move();
    this.hasCollided();
  }

  hasCollided() {
    if (this.copter.collisionChecker(this.obstacle)) {
      alert("collision!");
    }
  }
}
module.exports = Board;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Copter {
  constructor() {
    this.pos = [100, 50];
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.pos[0], this.pos[1], 20, 20);
  }

  move() {
    this.pos[1] += 1;
  }

  collisionChecker(obstacle) {
    if (this.pos[1] < 50 || this.pos[1] > 430) {
      return true;
    } else if ((this.pos[1] < 170 && obstacle.pos < 120)
              || (this.pos[1] > 150 && obstacle.pos < 120)) {
      return true;
    }
  }
}

module.exports = Copter;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const BoardView = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;
  const ctx = canvasEl.getContext("2d");
  new BoardView(ctx, document).start();
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(0);

class BoardView {
  constructor(ctx, document) {
    this.ctx = ctx;
    this.document = document;
    this.firstClick = true;
    this.game = new Board();
    this.document.addEventListener("click", this.game.clickEvent.bind(this.game));
  }

  start() {

    requestAnimationFrame(this.animate.bind(this));

  }

  animate() {
    this.game.update();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

}

module.exports = BoardView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Obstacle {
  constructor() {
    this.pos = 1000;
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.pos, 50, 50, 100);
    ctx.fillRect(this.pos, 350, 50, 100);
  }

  move() {
    this.pos -= 1;
  }


}

module.exports = Obstacle;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map