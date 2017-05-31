const canvasEl = document.getElementById("myCanvas");
canvasEl.width = 1000;
canvasEl.height = 500;
const ctx = canvasEl.getContext("2d");

const drawBoard = () => {

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 500);
  const Border = ctx;
  Border.fillStyle = "blue";
  Border.fillRect(0, 0, 1000, 50);
  Border.fillRect(0, 450, 1000, 50);
};

const drawCopter = (x, y) => {
  ctx.clearRect(0, 0, 1000, 500);
  drawBoard();
  ctx.fillStyle = "green";
  ctx.fillRect(x, y, 20, 20);
  y += 1;
  window.setTimeout(drawCopter, 20, x, y);
};


document.addEventListener("DOMContentLoaded", drawBoard);

canvasEl.addEventListener("click", drawCopter(20,20));
