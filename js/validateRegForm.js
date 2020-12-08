//Register validation
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const mobileNumber = document.getElementById("mobileNumber");
const form = document.getElementById("regForm");
const error = document.getElementById("error");

form.addEventListener("submit",(e) => {
    let messages = [];

    for(let i=0;i<form.elements.length; i++){
        if(form.elements[i].value === '' || form.elements[i].value == null)
        {
            messages.push("Please enter all values");
            error.innerText = messages[8];
        }
    }

    if(!validateNull(fname)){
        messages.push("First name cannot be null");
        error.innerText = messages[0];
    }
    if(!validateNull(lname)){
        messages.push("Last name cannot be null");
        error.innerText = messages[1];
    }
    if(!validateNull(email)){
        messages.push("Email name cannot be null");
        error.innerText = messages[2];
    }
    if(!validateNull(password)){
        messages.push("Password name cannot be null");
        error.innerText = messages[3];
    }
    if(!validateNull(confirmPassword)){
        messages.push("confirmPassword name cannot be null");
        error.innerText = messages[4];
    }
    if(!validateNull(mobileNumber)){
        messages.push("mobileNumber name cannot be null");
        error.innerText = messages[5];
    }
    
    if(!validatePassword(password)){
        messages.push("Password length cannot be less than 6");
        error.innerText = messages[6];
    }

    if(!validateConfirmPassword(password)){
        messages.push("Passwords do not match");
        error.innerText = messages[7];
    }

    if(messages.length > 0 ){
        e.preventDefault();
    }
});

function validateNull(input){
    if(input.value === '' || input.value == null )
     return false;
}

function validatePassword(password){
    if(password.value < 6)
     return false;
    else return true;
}

function validateConfirmPassword(password,confirmPassword){
    if(password.value !== confirmPassword)
    return false;
    else return true;
}