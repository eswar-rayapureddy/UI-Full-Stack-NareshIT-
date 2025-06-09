
var resetFormData = () => {
    $("#s_accountId").val('');
    $("#s_password").val('');
    $("#accountMailid").val('');
    $("#s_rpassword").val('');
}

var doUserSignup = () => {
    var userDetails = {};
    userDetails.accountId = $("#s_accountId").val();
    userDetails.password = $("#s_password").val();
    userDetails.mailId = $("#accountMailid").val();

    axios.post('/newUserSignup/register', userDetails).then((result) => {
        $("#signupMsg").show();
        console.log(result);
        if (result.data.msg == 'Done') {
            $("#signupMsg span").text("Signedup Successfly");
            resetFormData();
        } else {
            $("#signupMsg span").text("Error while doing signup");
        }
    }).catch((err) => {
        
    });
}