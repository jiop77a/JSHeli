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
}

module.exports = Copter;
