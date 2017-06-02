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
