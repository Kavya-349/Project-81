var canvas =-document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var width = 10;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctz.arc(300, 260, 40, 0, 2 * Math.PI);
ctx.stroke();