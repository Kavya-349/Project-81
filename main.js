var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.strokeStyle = "black"; 
ctx.lineWidth = 2; 
ctx.rect(150,123,415,200); 
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 4; 
ctx.arc(250, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "black"; 
ctx.lineWidth = 4; 
ctx.arc(350, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "red"; 
ctx.lineWidth = 4; 
ctx.arc(450, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "yellow"; 
ctx.lineWidth = 4; 
ctx.arc(300, 240, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "green"; 
ctx.lineWidth = 4; 
ctx.arc(400, 240, 40 ,0 , 2*Math.PI); 
ctx.stroke();