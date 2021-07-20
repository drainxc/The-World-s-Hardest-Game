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

let playerX = 255;
let playerY = 255;
let playerSpeed = 1;
let heightObstacleSpeed = 7;
let oddHeightObstacleX = [];
let oddHeightObstacleY = 350;
let evenHeightObstacleX = [];
let evenHeightObstacleY = 350;
let widthObstacleSpeed = 16.5;
let oddWidthObstacleX = 500;
let oddWidthObstacleY = [];
let evenWidthObstacleX = 500;
let evenWidthObstacleY = [];
let num = 0.1;

function drawPlayer() {
    if (playerX < 255) playerX = 255;
    if (playerY < 255) playerY = 255;
    if (playerX > 685) playerX = 685;
    if (playerY > 435) playerY = 435;
    for (let i = 0; i < 25; i++) {
        if ((oddHeightObstacleX[i] + 10) >= playerX && (oddHeightObstacleX[i] - 10) <= playerX && oddHeightObstacleY + 10 >= playerY && oddHeightObstacleY - 10 <= playerY) {
            location.href = "gameover.html";
        }
        if ((evenHeightObstacleX[i] + 10) >= playerX && (evenHeightObstacleX[i] - 10) <= playerX && evenHeightObstacleY + 10 >= playerY && evenHeightObstacleY - 10 <= playerY) {
            location.href = "gameover.html";
        }
        if ((oddWidthObstacleX + 10) >= playerX && (oddWidthObstacleX - 10) <= playerX && oddWidthObstacleY[i] + 10 >= playerY && oddWidthObstacleY[i] - 10 <= playerY) {
            location.href = "gameover.html";
        }
        if ((evenWidthObstacleX + 10) >= playerX && (evenWidthObstacleX - 10) <= playerX && evenWidthObstacleY[i] + 10 >= playerY && evenWidthObstacleY[i] - 10 <= playerY) {
            location.href = "gameover.html";
        } // 게임오버 장면
        if (playerX >= 650 && playerX <= 1000 && playerY >= 400 && playerY <= 500) {
            location.href = "file:///C:/Users/user/Desktop/World's%20Hardest%20Game/src/eighthStage.html";
        } // 다음 단계 이동
    }
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red';
    ctx.strokeRect(playerX, playerY, 10, 10);
    ctx.fillRect(playerX, playerY, 10, 10); // 플레이어 그리기
}

function start(event) {
    if (event.key == 'a' || event.key == 'A' || event.key == '4') {
        leftPressed = true;
    }
    else if (event.key == 'd' || event.key == 'D' || event.key == '6') {
        rightPressed = true;
    }
    else if (event.key == 'w' || event.key == 'W' || event.key == '8') {
        upPressed = true;
    }
    else if (event.key == 's' || event.key == 'S' || event.key == '2' || event.key == '5') {
        downPressed = true;
    } //플레이어 이동
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
    else if (event.key == 's' || event.key == 'S' || event.key == '2' || event.key == '5') {
        downPressed = false;
    }//플레이어 스탑
}

setInterval(function () {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(250, 250, 50, 50)
    ctx.fillRect(650, 400, 50, 50)

    if (oddHeightObstacleY > 450) {
        heightBounce = false;
    }
    else if (oddHeightObstacleY < 250) {
        heightBounce = true;
    }
    if (oddWidthObstacleX > 728) {
        widthBounce = false;
    }
    else if (oddWidthObstacleX < 250) {
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
    } // 장애물 이동
    if (num <= 4)
    num += 0.015;
    drawPlayer();
    drawObstacle();
}, 20);

function move() {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(250, 250, 50, 50)
    ctx.fillRect(650, 400, 50, 50)

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
    ctx.translate(500, 250);
    ctx.rotate((Math.PI / 180) * num);
    ctx.translate(-500, -250);
    drawPlayer();
    drawObstacle();
    setTimeout(move, 10);
} // 플레이어 이동
move();

function drawObstacle() {
    for (let i = 0; i < 16; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        evenHeightObstacleX[i] = (i + 16) * 20;
        ctx.strokeRect(evenHeightObstacleX[i], evenHeightObstacleY, 10, 10);
        ctx.fillRect(evenHeightObstacleX[i], evenHeightObstacleY, 10, 10);
    }
    for (let i = 1; i < 16; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        oddHeightObstacleX[i] = (i + 16) * 20;
        ctx.strokeRect(oddHeightObstacleX[i], oddHeightObstacleY, 10, 10);
        ctx.fillRect(oddHeightObstacleX[i], oddHeightObstacleY, 10, 10);
    }
    for (let i = 0; i < 4; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        evenWidthObstacleY[i] = (i + 12.3) * 25;
        ctx.strokeRect(evenWidthObstacleX, evenWidthObstacleY[i], 10, 10);
        ctx.fillRect(evenWidthObstacleX, evenWidthObstacleY[i], 10, 10);
    }
    for (let i = 1; i < 4; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        oddWidthObstacleY[i] = (i + 12.3) * 25;
        ctx.strokeRect(oddWidthObstacleX, oddWidthObstacleY[i], 10, 10);
        ctx.fillRect(oddWidthObstacleX, oddWidthObstacleY[i], 10, 10);
    } // 장애물 그리기
}

function reload(event) {
    if (event.key == 'r' || event.key == 'R') {
        location.reload();
    }
} // 재시작

document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);
document.addEventListener('keydown', reload);