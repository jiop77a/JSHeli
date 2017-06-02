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

  collisionChecker(obstacle) {
    if (this.pos < 50 || this.pos > 430) {
      return true;
    } else if ((this.pos < 170 && obstacle.pos < 120)
              || (this.pos > 150 && obstacle.pos < 120)){
      return true;
    }
  }
}

module.exports = Copter;
