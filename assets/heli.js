const BoardView = require("./board_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;
  const ctx = canvasEl.getContext("2d");
  new BoardView(ctx, document).start();
});
