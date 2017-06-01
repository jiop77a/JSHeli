const canvasEl = document.getElementById("myCanvas");
canvasEl.width = 1000;
canvasEl.height = 500;
const ctx = canvasEl.getContext("2d");
var firstClick = true;
let copterPos = 50;
var falling;

const drawBoard = () => {

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 500);
  const Border = ctx;
  Border.fillStyle = "blue";
  Border.fillRect(0, 0, 1000, 50);
  Border.fillRect(0, 450, 1000, 50);
};

const drawCopter = (y = 20) => {
  console.log(y);
  ctx.clearRect(0, 0, 1000, 500);
  drawBoard();
  ctx.fillStyle = "green";
  ctx.fillRect(100, y, 20, 20);
  y += 1;
  copterPos = y;
  falling = window.setTimeout(drawCopter, 20, y);
};

const bounceCopter = () => {
  ctx.clearRect(100, 100, 50, 500);
  window.clearTimeout(falling);
  copterPos -= 30;
  drawCopter(copterPos);
};

document.addEventListener("DOMContentLoaded", () => {
  drawBoard();
});

canvasEl.addEventListener("click", () => {
  if (firstClick) {
    drawCopter();
    firstClick = false;

  } else {
    bounceCopter();
  }
});
