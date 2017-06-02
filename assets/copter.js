class Copter {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.timeoutID = null;
  }

  falling() {
    this.timeoutID = window.setTimeout(this.draw.bind(this), 20);
  }

  draw() {

    window.clearTimeout(this.timeoutID);
    let ctx = this.ctx;
    //clear the column in which the copter could be located
    ctx.clearRect(100, 50, 20, 400);
    //fill in the background
    ctx.fillStyle = "black";
    ctx.fillRect(100, 50, 20, 400);
    //draw the copter
    ctx.fillStyle = "green";
    ctx.fillRect(100, this.pos, 20, 20);
    this.pos += 1;
    console.log(this.pos);
    this.falling();
  }

  bounce() {

    let ctx = this.ctx;
    //clear the column in which the copter could be located
    ctx.clearRect(100, 50, 20, 400);
    //clear the falling timer
    window.clearTimeout(this.timeoutID);
    //adjust the position and redraw
    this.pos -= 30;
    this.falling();

  }
}

module.exports = Copter;
