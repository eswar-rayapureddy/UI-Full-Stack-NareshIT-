
       var validateUserCredentials = () => {
        var userData = {};
        userData.accountId = $("#userAccountId").val();
        userData.password = $("#accountPassword").val();
        var rememberMeChecked = $("#rememberMe").is(":checked");
    
        if (rememberMeChecked) {
            localStorage.setItem("userCredentials", JSON.stringify(userData));
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.removeItem("userCredentials");
            localStorage.setItem("rememberMe", "false");
        }
    
    axios.post('/validate/user/credentials', userData).then((result) => {
        if (result.data.status == 'Invalid') {
            $("#statusMsg").text('Invalid Credentials, please try again...');
        } else {
            jwtToken = result.data.token;
            sessionStorage.setItem('jwtToken', jwtToken);
            $("#statusMsg").text('Valid credentials, please visit product details.....');
            if (userData.rememberMe) {
                localStorage.setItem('accountId', userData.accountId);
                localStorage.setItem('password', userData.password);
            } else {
                localStorage.removeItem('accountId');
                localStorage.removeItem('password');
            }
            loginModal.hide();
            loadSeletedPage('productDetails')
        }
    }).catch((err) => {

    });
    console.log(userData);
}

var showSignupModal = () => {
    loginModal.hide();
    signupModal.show();
}
var loginModal, signupModal;

document.addEventListener("DOMContentLoaded", () => {
        loginModal = new bootstrap.Modal($('#loginModal'), {});
        signupModal = new bootstrap.Modal($('#signupModal'), {});
    
        if (localStorage.getItem("rememberMe") === "true") {
            var storedData = JSON.parse(localStorage.getItem("userCredentials"));
            if (storedData) {
                $("#userAccountId").val(storedData.accountId);
                $("#accountPassword").val(storedData.password);
                $("#rememberMe").prop("checked", true);
            }
        }
    });