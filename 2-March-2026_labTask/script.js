
console.log("External JavaScript is connected successfully!");

let invalidAttempts = 0;

/*Task on HTML and JavaScript: Design a login form that contains email and password fields. 
The email must contain "@", and the password should not be less than 6 characters.
Additionally, the password must contain "#". You have to add form validation using JavaScript. 
If there is an error in the form, you have to display an error message using innerHTML. 
Finally, 
if the user submits an invalid form, you have to show a count on the page of how many times the user has submitted the wrong form.*/
function chkInvalidAttempt() {

    invalidAttempts++;

    let message = document.getElementById("invalidMessage");
    let counter = document.getElementById("invalidCount");

    counter.innerHTML = invalidAttempts;

    message.style.display = "block";
}

function validateForm() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailErr = document.getElementById("emailErr");

    emailErr.innerHTML = "";
    passwordErr.innerHTML = "";

    
    if (!email) {
        emailErr.innerHTML = "Email field cannot be empty";
        chkInvalidAttempt();
        return false;
    }

    
    if (!email.includes("@")) {
        emailErr.innerHTML = "Email must contain @";
        chkInvalidAttempt();
        return false;
    }

   
    if (!password) {
        passwordErr.innerHTML = "Password field cannot be empty";
        chkInvalidAttempt();
        return false;
    }

    
    if (password.length < 6) {
        passwordErr.innerHTML = "Password must be at least 6 characters";
        chkInvalidAttempt();
        return false;
    }

    
    if (!password.includes("#")) {
        passwordErr.innerHTML = "Password must contain #";
        chkInvalidAttempt();
        return false;
    }

     invalidAttempts = 0;
    invalidCount.innerHTML = "0";

    invalidMessage.style.display = "none";

    alert("Form submitted successfully!");

    return true;
}