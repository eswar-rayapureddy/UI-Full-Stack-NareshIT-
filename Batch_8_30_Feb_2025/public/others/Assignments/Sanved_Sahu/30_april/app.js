
document.addEventListener("DOMContentLoaded", () => {

    var uname = localStorage.getItem('user_name');
    var pass = localStorage.getItem('pass');

    if (uname && pass) {
        document.querySelector("#userName").value = uname;
        document.querySelector("#pass").value = pass;
    }

})

var saveDetails = () => {
    var username = document.querySelector("#userName").value;
    var password = document.querySelector("#pass").value;
    var remember = document.querySelector("#remember").checked;
    if(remember){
        localStorage.setItem('user_name',username);
        localStorage.setItem('pass',password);
    } else {
        localStorage.removeItem('user_name');
        localStorage.removeItem('pass');
    }
    
    welcomeMessage(username);
}

var welcomeMessage = (uname) => {
    setTimeout(() => {
        var msg = `Thanks for Logging In Mr/Mrs. ${uname}`;
        document.querySelector("#welcomeblock").innerText = msg;
        document.querySelector("#welcomeblock").style.display = 'block';
    }, 2000);

        
}
