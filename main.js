var canvas =-document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = blue;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
