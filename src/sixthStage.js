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
let heightObstacleSpeed = 14;
let oddHeightObstacleX = [];
let oddHeightObstacleY = 235;
let evenHeightObstacleX = [];
let evenHeightObstacleY = 235;
let widthObstacleSpeed = 29.8;
let oddWidthObstacleX = 500;
let oddWidthObstacleY = [];
let evenWidthObstacleX = 500;
let evenWidthObstacleY = [];
let point = false;

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
        } // 게임오버 장면
        if (playerX >= 900 && playerX <= 1000 && playerY >= 400 && playerY <= 500 && point == true) {
            location.href = "file:///C:/Users/user/Desktop/World's%20Hardest%20Game/src/seventhStage.html";
        } // 다음 단계 이동
    }
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red';
    ctx.strokeRect(playerX, playerY, 20, 20);
    ctx.fillRect(playerX, playerY, 20, 20); // 플레이어 그리기
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
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(900, 400, 100, 100);
    drawPoint();

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
    } // 장애물 이동

    drawPlayer();
    drawObstacle();
}, 20);

function move() {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(900, 400, 100, 100);
    drawPoint();

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
} // 플레이어 이동
move();

function drawObstacle() {
    for (let i = 0; i < 18; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        evenHeightObstacleX[i] = (i + 2.35) * 45;
        ctx.strokeRect(evenHeightObstacleX[i], evenHeightObstacleY, 20, 20);
        ctx.fillRect(evenHeightObstacleX[i], evenHeightObstacleY, 20, 20);
    }
    for (let i = 1; i < 18; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        oddHeightObstacleX[i] = (i + 2.35) * 45;
        ctx.strokeRect(oddHeightObstacleX[i], oddHeightObstacleY, 20, 20);
        ctx.fillRect(oddHeightObstacleX[i], oddHeightObstacleY, 20, 20);
    }
    for (let i = 0; i < 4; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        evenWidthObstacleY[i] = (i + 1.5) * 80;
        ctx.strokeRect(evenWidthObstacleX, evenWidthObstacleY[i], 20, 20);
        ctx.fillRect(evenWidthObstacleX, evenWidthObstacleY[i], 20, 20);
    }
    for (let i = 1; i < 4; i += 2) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        oddWidthObstacleY[i] = (i + 1.5) * 80;
        ctx.strokeRect(oddWidthObstacleX, oddWidthObstacleY[i], 20, 20);
        ctx.fillRect(oddWidthObstacleX, oddWidthObstacleY[i], 20, 20);
    } // 장애물 그리기
}

function drawPoint() {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(500, 250, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 5;
    if (playerX <= 520 && playerX >= 480 && playerY <= 270 && playerY >= 230 && point == false) {
        point = true;
    }
    if (point >= 1) {
        ctx.strokeStyle = "white";
        ctx.arc(500, 250, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }
}

function reload(event) {
    if (event.key == 'r' || event.key == 'R') {
        location.reload();
    }
} // 재시작

document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);
document.addEventListener('keydown', reload);