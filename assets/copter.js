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
    let copterTop = this.pos[1];
    let copterBottom = this.pos[1] + 20;
    let copterFront = this.pos[0] + 20;
    let copterRear = this.pos[0];
    //check against borders
    if (copterTop < 50 || copterBottom > 450) {
      return true;
    //check against obstacle
    } else {
        let obstiBottom = obstacle.pos[1] + obstacle.height;
        let obstiFront = obstacle.pos[0];
        let obstiRear = obstacle.pos[0] + obstacle.width;
        if (
            (copterTop < obstiBottom) &&
           !((copterRear > obstiRear) || (copterFront < obstiFront))
            ) {
             return true;
           }
    }
    return false;
  }
}

module.exports = Copter;
