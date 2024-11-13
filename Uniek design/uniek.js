"use strict"; 

function getRandomColor() {
    const colors = ['#ADD8E6' , '#87CEEB' , '#B0E06' , '#5F9EA0']; // kleurenpallet van soorten lichtblauw
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomPosition(maxWidth, maxHeight) {
    return {
        x: Math.random() * maxWidth,
        y: Math.random() * maxHeight,
        size: Math.random() * (maxWidth /10) + 20 
    };
}

function drawCircle (context, x, y, size, color) {
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}
 window.onload = function() {
    const canvas = document.createElement('canvas') // check
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const context = canvas.getContext('2d');
 }

// achtergrond instellen
context.fillStyle = 'rgb(50, 50, 50)';
context.fillRect(0, 0, canvas.width, canvas.height);

for (let i= 0; i < 50; i++) {
   const { x, y, size} = getRandomPosition(canvas.width, canvas.height);
   const color = getRandomColor();
   drawCircle(context, x, y, size, color);
};
