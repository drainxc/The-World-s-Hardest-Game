const before = document.getElementById('before');
const exit = document.getElementById('exit');

exit.addEventListener('click', function() {
    window.open('file:///C:/Users/user/Desktop/Worlds%20Hardest%20Game/src/main.html','_self').self.close();
})

before.addEventListener('click', function () {
    location.href = "javascript:history.back();"
})