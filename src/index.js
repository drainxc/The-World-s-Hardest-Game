const canvas = document.getElementById('gameMap');
const ctx = canvas.getContext('2d');

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

ctx.lineWidth = 5;

let playerX = 5;
let playerY = 5;
let Speed = 7;

function drawPlayer() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red';
    ctx.strokeRect(playerX, playerY, 20, 20);
    ctx.fillRect(playerX, playerY, 20, 20);
}

function start(event) {
    if (event.key == 'ArrowLeft' || event.key == 'a') {
        leftPressed = true;
    }
    else if (event.key == 'ArrowRight' || event.key == 'd') {
        rightPressed = true;
    }
    else if (event.key == 'ArrowUp' || event.key == 'w') {
        upPressed = true;
    }
    else if (event.key == 'ArrowDown' || event.key == 's') {
        downPressed = true;
    }
    move();
}

function stop(event) {
    if (event.key == 'ArrowLeft' || event.key == 'a') {
        leftPressed = false;
    }
    else if (event.key == 'ArrowRight' || event.key == 'd') {
        rightPressed = false;
    }
    else if (event.key == 'ArrowUp' || event.key == 'w') {
        upPressed = false;
    }
    else if (event.key == 'ArrowDown' || event.key == 's') {
        downPressed = false;
    }
    move();
}

function move() {
    ctx.clearRect(0, 0, 1000, 500);
    if (leftPressed) {
        playerX -= Speed;
    }
    if (rightPressed) {
        playerX += Speed;
    }
    if (upPressed) {
        playerY -= Speed;
    }
    if (downPressed) {
        playerY += Speed;
    }
    drawPlayer();
}

document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);