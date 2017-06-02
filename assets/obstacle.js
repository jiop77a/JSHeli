class Obstacle {
  constructor() {
    this.pos = [1000, 50];
    this.width = 50;
    this.height = 100;
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    // ctx.fillRect(this.pos[0], 500 - (50 + this.height), this.width, this.height);
  }

  move() {
    this.pos[0] -= 1;
  }


}

module.exports = Obstacle;
