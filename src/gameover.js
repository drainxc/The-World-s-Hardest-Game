const before = document.getElementById('before');
const exit = document.getElementById('exit');

exit.addEventListener('click', function() {
    window.open("file:///C:/Users/user/Desktop/World's%20Hardest%20Game/src/main.html",'_self');
}) // 메인메뉴로 돌아가기

before.addEventListener('click', function () {
    location.href = "javascript:history.back();"
}) // 전에 하던 단계로 이동