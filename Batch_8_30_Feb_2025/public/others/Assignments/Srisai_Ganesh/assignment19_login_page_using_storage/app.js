document.addEventListener('DOMContentLoaded', () => {
    var uname = localStorage.getItem('user_name');
    var pass = localStorage.getItem('u_pass');

    if (uname && pass) {
        showWelcomeMsg(uname);
    } else {
        document.querySelector('#welcomeBlock').innerText = 'Please login to continue.';
        document.querySelector('#welcomeBlock').style.display = 'block';
    }
})

var login = () => {
    var username = document.querySelector('#userName').value;
    localStorage.setItem('user_name', username);
    var password = document.querySelector('#pass').value;
    localStorage.setItem('u_pass', password);
    showWelcomeMsg(username);
};

var showWelcomeMsg = (uname) => {
    var msg = `Welcome Mr.${uname}`;
    document.querySelector('#welcomeBlock').innerText = msg;
    document.querySelector('#welcomeBlock').style.display = 'block';
};