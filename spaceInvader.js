"use strict";

let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.Height = innerHeight;
let context = canvas.getContext("2d"); 
function drawsquare(x, y, ) {
    context.beginPath();
    context.moveTo (x, y);
    context.lineTo(x + size, y);
    context.lineTo(x + size, y + size)
    context
    context
    context
}

context.fillStyle = '#000000'
context.fillRect(0, 0, 300, 300);
drawsquare(50, 50, 50);

