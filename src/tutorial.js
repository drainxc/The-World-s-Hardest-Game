const canvas = document.getElementById('gameMap');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('myAudio');

canvas.width = 1000;
canvas.height = 500;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let bounce = true;
let point = false;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 500)
ctx.lineWidth = 5;

let playerX = 5;
let playerY = 5;
let playerSpeed = 2;
let obstacleSpeed = 14;
let obstacleX = [];
let obstacleY = 235;

function drawPlayer() {
    if (playerX < 3) playerX = 3;
    if (playerY < 3) playerY = 3;
    if (playerX > 978) playerX = 978;
    if (playerY > 478) playerY = 478;
    for (let i = 0; i < 25; i++) {
        if ((obstacleX[i] + 20) >= playerX && (obstacleX[i] - 20) <= playerX && obstacleY + 20 >= playerY && obstacleY - 20 <= playerY) {
            location.href="gameover.html";
        }
        if ((250 + 20) >= playerX && (250 - 20) <= playerX && 250 + 20 >= playerY && 250 - 20 <= playerY) {
            location.href="gameover.html"
        }
    } // 게임오버 장면
    if (playerX >= 900 && playerX <= 1000 && playerY >= 400 && playerY <= 500 && point == true) {
        location.href="main.html";
    } // 다음 단계 이동
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
    ctx.fillRect(0, 0, 100, 100)
    ctx.fillRect(900, 400, 100, 100)
    if (bounce) {
        if (obstacleY > 465) {
            bounce = false;
        }
        obstacleY += obstacleSpeed;
    }
    else {
        if (obstacleY < 10) {
            bounce = true;
        }
        obstacleY -= obstacleSpeed;
    } // 장애물 이동
    drawPoint()
    drawPlayer();
    drawObstacle();
}, 20);

function move() {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(0, 0, 100, 100)
    ctx.fillRect(900, 400, 100, 100)
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
    drawPoint()
    drawPlayer();
    drawObstacle();
    setTimeout(move, 10);
} // 플레이어 이동
move();



function drawObstacle() {
    for (let i = 0; i < 1; i++) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        ctx.strokeRect(250, 250, 20, 20);
        ctx.fillRect(250, 250, 20, 20);
    }
    for (let i = 0; i < 1; i++) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        obstacleX[i] = 500
        ctx.strokeRect(obstacleX[i], obstacleY, 20, 20);
        ctx.fillRect(obstacleX[i], obstacleY, 20, 20);
    } // 장애물 그리기
}

function drawPoint() {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(750, 250, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 5;
    if (playerX <= 770 && playerX >= 730 && playerY <= 270 && playerY >= 230 && point == false) {
        point = true;
    } // 포인트 획득
    if (point >= 1) {
        ctx.strokeStyle = "white";
        ctx.arc(750, 250, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }
} // 포인트 그리기

function reload(event) {
    if (event.key == 'r' || event.key == 'R') {
        location.reload();
    }
} // 재시작

document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);
document.addEventListener('keydown', reload);