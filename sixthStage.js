const canvas = document.getElementById('gameMap');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let heightBounce = true;
let widthBounce = true;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 500)
ctx.lineWidth = 5;

let playerX = 5;
let playerY = 5;
let playerSpeed = 2;
let heightObstacleSpeed = 7;
let oddHeightObstacleX = [];
let oddHeightObstacleY = 235;
let evenHeightObstacleX = [];
let evenHeightObstacleY = 235;
let widthObstacleSpeed = 14.9;
let oddWidthObstacleX = 500;
let oddWidthObstacleY = [];
let evenWidthObstacleX = 500;
let evenWidthObstacleY = [];
let alternately = [];

for (let num = 0; num < 10; num++) {
}

function drawPlayer() {
    if (playerX < 3) playerX = 3;
    if (playerY < 3) playerY = 3;
    if (playerX > 978) playerX = 978;
    if (playerY > 478) playerY = 478;
    for (let i = 0; i < 25; i++) {
        if ((oddHeightObstacleX[i] + 20) >= playerX && (oddHeightObstacleX[i] - 20) <= playerX && oddHeightObstacleY + 20 >= playerY && oddHeightObstacleY - 20 <= playerY) {
            location.href = "gameover.html";
        }
        if ((evenHeightObstacleX[i] + 20) >= playerX && (evenHeightObstacleX[i] - 20) <= playerX && evenHeightObstacleY + 20 >= playerY && evenHeightObstacleY - 20 <= playerY) {
            location.href = "gameover.html";
        }
        if ((oddWidthObstacleX + 20) >= playerX && (oddWidthObstacleX - 20) <= playerX && oddWidthObstacleY[i] + 20 >= playerY && oddWidthObstacleY[i] - 20 <= playerY) {
            location.href = "gameover.html";
        }
        if ((evenWidthObstacleX + 20) >= playerX && (evenWidthObstacleX - 20) <= playerX && evenWidthObstacleY[i] + 20 >= playerY && evenWidthObstacleY[i] - 20 <= playerY) {
            location.href = "gameover.html";
        }
        if (playerX >= 900 && playerX <= 1000 && playerY >= 400 && playerY <= 500) {
            location.href = "";
        }
    }
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red';
    ctx.strokeRect(playerX, playerY, 20, 20);
    ctx.fillRect(playerX, playerY, 20, 20);
}

function start(event) {
    if (event.key == 'a' || event.key == 'A') {
        leftPressed = true;
    }
    else if (event.key == 'd' || event.key == 'D' || event.key == '6') {
        rightPressed = true;
    }
    else if (event.key == 'w' || event.key == 'W' || event.key == '8') {
        upPressed = true;
    }
    else if (event.key == 's' || event.key == 'S' || event.key == '2') {
        downPressed = true;
    }
}

function stop(event) {
    if (event.key == 'a' || event.key == 'A' || event.key == '4') {
        leftPressed = false;
    }
    else if (event.key == 'd' || event.key == 'D' || event.key == '6') {
        rightPressed = false;
    }
    else if (event.key == 'w' || event.key == 'W' || event.key == '8') {
        upPressed = false;
    }
    else if (event.key == 's' || event.key == 'S' || event.key == '2') {
        downPressed = false;
    }
}

setInterval(function () {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(900, 400, 100, 100);

    if (oddHeightObstacleY > 465) {
        heightBounce = false;
    }
    else if (oddHeightObstacleY < 10) {
        heightBounce = true;
    }
    if (oddWidthObstacleX > 978) {
        widthBounce = false;
    }
    else if (oddWidthObstacleX < 10) {
        widthBounce = true;
    }

    if (heightBounce) {
        oddHeightObstacleY += heightObstacleSpeed;
        evenHeightObstacleY -= heightObstacleSpeed;
    }
    else {
        oddHeightObstacleY -= heightObstacleSpeed;
        evenHeightObstacleY += heightObstacleSpeed;
    }
    if (widthBounce) {
        oddWidthObstacleX += widthObstacleSpeed;
        evenWidthObstacleX -= widthObstacleSpeed;
    }
    else {
        oddWidthObstacleX -= widthObstacleSpeed;
        evenWidthObstacleX += widthObstacleSpeed;
    }

    drawPlayer();
    drawObstacle();
}, 20);

function move() {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(900, 400, 100, 100);
    if (leftPressed) {
        playerX -= playerSpeed;
    }
    if (rightPressed) {
        playerX += playerSpeed;
    }
    if (upPressed) {
        playerY -= playerSpeed;
    }
    if (downPressed) {
        playerY += playerSpeed;
    }
    drawPlayer();
    drawObstacle();
    setTimeout(move, 10);
}
move();

function drawObstacle() {
    for (let i = 0; i < 20; i+=2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        evenHeightObstacleX[i] = (i + 2.75) * 40;
        ctx.strokeRect(evenHeightObstacleX[i], evenHeightObstacleY, 20, 20);
        ctx.fillRect(evenHeightObstacleX[i], evenHeightObstacleY, 20, 20);
    }
    for (let i = 1; i < 20; i+=2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        oddHeightObstacleX[i] = (i + 2.75) * 40;
        ctx.strokeRect(oddHeightObstacleX[i], oddHeightObstacleY, 20, 20);
        ctx.fillRect(oddHeightObstacleX[i], oddHeightObstacleY, 20, 20);
    }
    for (let i = 0; i < 7; i+=2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        evenWidthObstacleY[i] = (i + 3) * 40;
        ctx.strokeRect(evenWidthObstacleX, evenWidthObstacleY[i], 20, 20);
        ctx.fillRect(evenWidthObstacleX, evenWidthObstacleY[i], 20, 20);
    }
    for (let i = 1; i < 6; i+=2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        oddWidthObstacleY[i] = (i + 3) * 40;
        ctx.strokeRect(oddWidthObstacleX, oddWidthObstacleY[i], 20, 20);
        ctx.fillRect(oddWidthObstacleX, oddWidthObstacleY[i], 20, 20);
    }
}
document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);