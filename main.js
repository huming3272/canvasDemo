let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let draw = false;
let last;
var isTouchDevice = "ontouchstart" in document.documentElement;
setSize();
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.lineCap = "round";

// window.onresize = () => {
//   setSize();
// };
console.log(isTouchDevice);

if (isTouchDevice) {
  canvas.ontouchstart = (e) => {
    draw = true;
    last = [e.touches[0].clientX, e.touches[0].clientY];
  };

  canvas.ontouchmove = (e) => {
    drawLine(last[0], last[1], e.touches[0].clientX, e.touches[0].clientY);
    last = [e.touches[0].clientX, e.touches[0].clientY];
    console.log(e);
  };
//   canvas.ontouchend = (e) => {
//     draw = false;
//   };
}

canvas.onmousedown = (e) => {
  draw = true;
  last = [e.clientX, e.clientY];
};

canvas.onmousemove = (e) => {
  if (draw === true) {
    // ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI)
    drawLine(last[0], last[1], e.clientX, e.clientY);
    last = [e.clientX, e.clientY];

    console.log(ctx.lineWidth);
  }
};

canvas.onmouseup = (e) => {
  draw = false;
};

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function setSize() {
  canvas.width = document.documentElement.clientWidth - 5;
  canvas.height = document.documentElement.clientHeight - 8;
}
