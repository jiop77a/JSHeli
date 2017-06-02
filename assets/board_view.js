const Board = require("./board");

class BoardView {
  constructor(ctx, document) {
    this.ctx = ctx;
    this.document = document;
    this.firstClick = true;
    this.game = new Board();
    this.document.addEventListener("click", this.game.clickEvent.bind(this.game));
  }

  start() {

    requestAnimationFrame(this.animate.bind(this));

  }

  animate() {
    this.game.update();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

}

module.exports = BoardView;
