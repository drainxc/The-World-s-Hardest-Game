const playGame = document.getElementById('playGame');
const github = document.getElementById('github');
const tutorial = document.getElementById('tutorial');
const selectLevel = document.getElementById('selectLevel');

selectLevel.addEventListener('click', function() {
    location.href = "file:///C:/Users/user/Desktop/World's%20Hardest%20Game/src/level.html";
}) // 레벨 선택

github.addEventListener('click', function () {
    location.href = "https://github.com/eastcopper";
}) // 깃허브 사이트 이동

playGame.addEventListener('click', function() {
    location.href = "file:///C:/Users/user/Desktop/World's%20Hardest%20Game/src/firstStage.html";
}) // 게임시작

tutorial.addEventListener('click', function () {
    location.href = "tutorial.html";
}) // 튜토리얼 사이트