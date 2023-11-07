var context = document.getElementById("canvas").getContext("2d");
const x = 250;
const y = 250;
const radius = 75;
const width = 60;
const pacmanColor = "yellow";
const pacmanStrokeColor = pacmanColor;
const ghostColor = "red";
const ghostStrokeColor = ghostColor;

context.beginPath();

// dibujar Pacman 
// context.arc(x,y,radius,0.514872,5.7683135.253441);
// context.fillStyle = pacmanColor;
// context.strokeStyle = pacmanStrokeColor;
// context.stroke();
// context.fill();

// dibujar Ghost
context.moveTo(x + radius,y)
context.arc(x,y,radius,Math.PI,0)
context.lineTo(x + radius,(y + 0.75))
// context.lineTo((x + 0.5)   ,(y + 0.75) * width)
context.fillStyle = ghostColor;
context.strokeStyle = ghostStrokeColor;
context.stroke();
context.fill();

