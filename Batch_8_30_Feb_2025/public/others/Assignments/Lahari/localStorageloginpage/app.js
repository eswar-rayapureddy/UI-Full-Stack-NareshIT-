document.addEventListener("DOMContentLoaded", () => {
    var username = localStorage.getItem("user_name");
    var password = localStorage.getItem("user_password");
    var email = localStorage.getItem("user_mail");

    if (username && password && email){
        document.querySelector("#user_name").value = username;
        document.querySelector("#user_password").value = password;
        document.querySelector("#user_mail").value = email;
    }
});


var saveUserDetails = () => {
    var uname = document.querySelector("#user_name").value;
    var pass = document.querySelector("#user_password").value;
    var mail = document.querySelector("#user_mail").value;
    var remember = document.querySelector("#remember").checked;

    if (remember) {
        localStorage.setItem('user_name', uname);
        localStorage.setItem('user_password', pass);
        localStorage.setItem('user_mail', mail);
    } else {
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_password');
        localStorage.removeItem('user_mail');
    }

    welcomeMessage(uname);
};

var welcomeMessage = (uname) => {
    setTimeout(() => {
        var msg = `Thanks for Logging In Mr/Mrs. ${uname}`;
        document.querySelector("#welcomeblock").innerText = msg;
        document.querySelector("#welcomeblock").style.display = 'block';
    }, 2000);
};
