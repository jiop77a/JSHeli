const Copter = require("./copter");

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
