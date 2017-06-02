const Copter = require("./copter");

class Board {
  constructor() {
    this.copter = new Copter();

  }

  draw(ctx) {
    this.drawBoard(ctx);
    this.drawBorders(ctx);
    this.copter.draw(ctx);
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
    this.copter.pos -= 30;
  }

  update() {
    this.copter.move();
  }
}
module.exports = Board;
