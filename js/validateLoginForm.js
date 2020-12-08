//Login Validation
const lNumber = document.getElementById("lNumber");
const lForm = document.getElementById("loginForm");
const error = document.getElementById("error");

//Validate Login form
lForm.addEventListener("submit",(e)=>{
    let messages=[];

    if(lNumber.value === "" || lNumber.value==null){
        messages.push("Number is required");
        error.innerText ="Number is required";
    }

    if(lNumber.value.length < 10){
        messages.push("Number should not be less than 10");
        error.innerText = "Number should not be less than 10";
    }

    if(messages.length >0 ){
        e.preventDefault();
    }
});