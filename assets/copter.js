class Copter {
  constructor() {
    this.pos = 50;
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(100, this.pos, 20, 20);
  }

  move() {
    this.pos += 1;
  }

  collisionChecker(Obstacle) {
    if (this.pos < 50 || this.pos > 430) {
      return true;
    }
  }
}

module.exports = Copter;
