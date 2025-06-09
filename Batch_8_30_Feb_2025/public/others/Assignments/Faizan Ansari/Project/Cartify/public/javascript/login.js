var validateUserCredentials = () => {
    userData = {};
    userData.accountID = $('#accntID').val();  
    userData.accountPassword = $('#accntPwd').val();

    console.log(userData);

    // http://localhost:3000/validate/user/credentials

    axios.post('/validate/user/credentials', userData).then((result) => {
        console.log("successfully hit the api and received response frm server");
        console.log(result);

        if(result.data.status == 'Invalid credentials'){
            $('#statusMsg').text("Invalid login credentials").css('color', 'red');
        } else { // Valid credentials
            $('#statusMsg').text("User logged In successfully").css('color', 'green');
            loadSelectedPage("productDetails"); 
            setTimeout(() => {
                LoginModal.hide();                
            }, 300);
        }
    }).catch((error) => {
        console.log(error);
    })
}


var showSignUpModal = () => {
    LoginModal.hide();
    SignupModal.show();
}

var showLoginModal = () => {
    LoginModal.show();
    SignupModal.hide();
}

var LoginModal, SignupModal;
document.addEventListener('DOMContentLoaded', () => {
    LoginModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    SignupModal = new bootstrap.Modal(document.getElementById('signUpModal'), {});
})