const Copter = require("./copter");

class Board {
  constructor(ctx, copter) {
    this.ctx = ctx;
    this.copter = new Copter(ctx, 50);
    this.firstClick = true;
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

  start() {
    const copter = this.copter;
    this.drawBoard();
    this.drawBorders();
    this.ctx.addEventListener("click", () => {
      if (this.firstClick) {
        copter.draw();
        this.firstClick = false;
      } else {
        copter.bounce();
      }
    });
  }
}

module.exports = Board;
