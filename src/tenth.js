const canvas = document.getElementById('gameMap');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('myAudio');

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
let heightObstacleSpeed = 3.5;
let HeightObstacleX = [];
let HeightObstacleY = 350;
let widthObstacleSpeed = 8.4;
let WidthObstacleX = 500;
let WidthObstacleY = [];
let num = 0.1;
let point1 = false;
let point2 = false;

function drawPlayer() {
    if (playerX < 255) playerX = 255;
    if (playerY < 255) playerY = 255;
    if (playerX > 685) playerX = 685;
    if (playerY > 335) playerY = 335;
    for (let i = 0; i < 25; i++) {
        if ((HeightObstacleX[i] + 10) >= playerX && (HeightObstacleX[i] - 10) <= playerX && HeightObstacleY + 10 >= playerY && HeightObstacleY - 10 <= playerY) {
            location.href = "gameover.html";
        }
        if ((WidthObstacleX + 10) >= playerX && (WidthObstacleX - 10) <= playerX && WidthObstacleY[i] + 10 >= playerY &WidthObstacleY[i] - 10 <= playerY) {
            location.href = "gameover.html";
        } // player1 게임오버 장면
        
        if ((HeightObstacleX[i] + 10) >= playerX && (HeightObstacleX[i] - 10) <= playerX && HeightObstacleY + 10 >= playerY + 100 && HeightObstacleY - 10 <= playerY + 100) {
            location.href = "gameover.html";
        }
        if ((WidthObstacleX + 10) >= playerX && (WidthObstacleX - 10) <= playerX && WidthObstacleY[i] + 10 >= playerY + 100 && WidthObstacleY[i] - 10 <= playerY + 100) {
            location.href = "gameover.html";
        } // player2 게임오버 장면
        if (playerX >= 650 && playerX <= 1000 && playerY + 100 >= 400 && playerY + 100 <= 500) {
            location.href = "file:///C:/Users/user/Desktop/World's%20Hardest%20Game/src/celebration.html";
        } // 다음 페이지 이동
    }
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red';
    ctx.strokeRect(playerX, playerY, 10, 10);
    ctx.fillRect(playerX, playerY, 10, 10);
    ctx.strokeRect(playerX, playerY + 100, 10, 10);
    ctx.fillRect(playerX, playerY + 100, 10, 10); // 플레이어 그리기
    audio.play(); // 오디오 재생
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
    drawMap();
    if (HeightObstacleY > 450) {
        heightBounce = false;
    }
    else if (HeightObstacleY < 250) {
        heightBounce = true;
    }
    if (WidthObstacleX > 728) {
        widthBounce = false;
    }
    else if (WidthObstacleX < 250) {
        widthBounce = true;
    }

    if (heightBounce) {
        HeightObstacleY += heightObstacleSpeed;
    }
    else {
        HeightObstacleY -= heightObstacleSpeed;
    }
    if (widthBounce) {
        WidthObstacleX += widthObstacleSpeed;
    }
    else {
        WidthObstacleX -= widthObstacleSpeed;
    } // 장애물 이동
    if (heightObstacleSpeed < 12.5) {
        heightObstacleSpeed += 0.0035 * 2;
        widthObstacleSpeed += 0.0084 * 2;
    }
    ctx.globalAlpha -= 0.0015;
    // if (num <= 4)
    // num += 0.015;
    drawPoint();
    drawPlayer();
    drawObstacle();
}, 20);

function move() {
    drawMap();
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
    playerX += 0.5; // 바람 표현
    ctx.translate(500, 250); // 맵 중심정하기
    ctx.rotate((Math.PI / 180) * 0.5); // 중심을 기준으로 맵 돌리기
    ctx.translate(-500, -250); // 맵 중심 원위치로 정하기
    drawPoint();
    drawPlayer();
    drawObstacle();
    setTimeout(move, 10);
} // 플레이어 이동
move();

function drawObstacle() {
    for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        HeightObstacleX[i] = (i + 7) * 45;
        ctx.strokeRect(HeightObstacleX[i], HeightObstacleY, 10, 10);
        ctx.fillRect(HeightObstacleX[i], HeightObstacleY, 10, 10);
    }
    for (let i = 0; i < 2; i++) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        WidthObstacleY[i] = (i + 3.1) * 96;
        ctx.strokeRect(WidthObstacleX, WidthObstacleY[i], 10, 10);
        ctx.fillRect(WidthObstacleX, WidthObstacleY[i], 10, 10);
    } // 장애물 그리기
}

function drawPoint() {
    if (point1 == false) {
        ctx.strokeStyle = "black";
        ctx.fillStyle = "yellow";
    }
    else if (point1 == true) {
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
    }
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(500, 300, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 5;
    if (playerX <= 510 && playerX >= 490 && playerY <= 310 && playerY >= 290 && point1 == false) {
        point1 = true;
    } // 포인트1 획득

    if (point2 == false) {
        ctx.strokeStyle = "black";
        ctx.fillStyle = "yellow";
    }
    else if (point2 == true) {
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
    }
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(500, 400, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 5;
    if (playerX <= 510 && playerX >= 490 && playerY + 100 <= 410 && playerY + 100 >= 390 && point2 == false) {
        point2 = true;
    } // 포인트2 획득
} // 포인트 그리기

function reload(event) {
    if (event.key == 'r' || event.key == 'R') {
        location.reload();
    }
} // 재시작

function drawMap() {
    ctx.clearRect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(162, 255, 209)";
    ctx.fillRect(250, 250, 50, 50)
    ctx.fillRect(650, 400, 50, 50)
    ctx.fillRect(250, 350, 50, 50)
    ctx.fillRect(650, 300, 50, 50)
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(250, 350);
    ctx.lineTo(700, 350);
    ctx.stroke();
    ctx.lineWidth = 5;
}

document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);
document.addEventListener('keydown', reload);