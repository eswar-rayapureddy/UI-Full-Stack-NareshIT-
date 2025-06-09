         document.addEventListener("DOMContentLoaded", () => {
          var username = localStorage.getItem("user_name");
          var password = localStorage.getItem("pass_word");
          var usermail = localStorage.getItem("user_mail");
      
          if (username && password) {
              document.querySelector("#username").value = username;
              document.querySelector("#password").value = password;
              document.querySelector("#usermail").value = usermail;
              document.querySelector("#reminder").checked = true;
          }
      });
      
      var saveDetails = () => {
          var username = document.querySelector("#username").value;
          var password = document.querySelector("#password").value;
          var usermail = document.querySelector("#usermail").value;
          var reminder = document.querySelector("#reminder").checked;
      
          if (reminder) {
              localStorage.setItem("user_name", username);
              localStorage.setItem("pass_word", password);
              localStorage.setItem("user_mail" , usermail);
          } else {
              localStorage.removeItem("user_name");
              localStorage.removeItem("pass_word");
              localStorage.removeItem("user_mail");
          }
      
          welcomeMessage(username);
      };
      
      var welcomeMessage = (username) => {
          setTimeout(() => {
              var msg = `Thanks For Logging Mr/Ms. ${username}`;
              var welcomeBlock = document.querySelector("#welcomeblock");
              welcomeBlock.innerText = msg;
              welcomeBlock.style.display = 'block';
          }, 2000);
      };
      
      
        //  SESSION STORAGE
         
    //   document.addEventListener("DOMContentLoaded", () => {
    //       var username = sessionStorage.getItem("user_name");
    //       var password = sessionStorage.getItem("pass_word");
    //       var usermail = localStorage.getItem("user_mail");
      
    //       if (username && password) {
    //           document.querySelector("#username").value = username;
    //           document.querySelector("#password").value = password;
    //           document.querySelector("#usermail").value = usermail;
    //           document.querySelector("#reminder").checked = true;
    //       }
    //   });
      
    //   var saveDetails = () => {
    //       var username = document.querySelector("#username").value;
    //       var password = document.querySelector("#password").value;
    //       var usermail = document.querySelector("#usermail").value;
    //       var reminder = document.querySelector("#reminder").checked;
      
    //       if (reminder) {
    //           sessionStorage.setItem("user_name", username);
    //           sessionStorage.setItem("pass_word", password);
    //           sessionStorage.setItem("user_mail", usermail);
    //       } else {
    //           sessionStorage.removeItem("user_name");
    //           sessionStorage.removeItem("pass_word");
    //           sessionStorage.removeItem("user_mail");
    //       }
      
    //       welcomeMessage(username);
    //   };
      
    //   var welcomeMessage = (username) => {
    //       setTimeout(() => {
    //           var msg = `Thanks For Logging Mr/Ms. ${username}`;
    //           var welcomeBlock = document.querySelector("#welcomeblock");
    //           welcomeBlock.innerText = msg;
    //           welcomeBlock.style.display = 'block';
    //       }, 2000);
    //   };
      
      