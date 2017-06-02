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
