class Copter {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    let that = this;
    this.falling = window.setTimeout(that.draw(), 20, that.pos);
  }


  draw() {
    let ctx = this.ctx;
    let pos = this.pos;
    //clear the column in which the copter could be located
    ctx.clearRect(50, 50, 20, 400);
    //fill in the background
    ctx.fillStyle = "black";
    ctx.fillRect(50, 50, 20, 400);
    //draw the copter
    ctx.fillStyle = "green";
    ctx.fillRect(100, pos, 20, 20);
    pos += 1;
    this.falling();
  }

  bounce() {
    let ctx = this.ctx;
    let pos = this.pos;
    //clear the column in which the copter could be located
    ctx.clearRect(50, 50, 20, 400);
    //clear the falling timer
    window.clearTimeout(this.falling);
    //adjust the position and redraw
    pos -= 30;
    this.draw();


  }
}
