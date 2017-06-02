const Copter = require("./copter");
const Obstacle = require("./obstacle");

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
