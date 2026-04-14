/*1st page*/

console("JS LOADED");

function goToStart(){
    window.location.href="start.html";
}

function goToLogin(){
    window.location.href="login.html";
}


function goBack(){
    window.history.back();
}

function googleLogin(){
    alert("Google login comming soon!");
}

/*

function goToDetails(){
    window.location.href="details.html";
}

function goBackToSignup(){
    window.location.href="start.html";
}

function goBackToHome(){
    window.location.href="index.html";
}
*/

/*login page*/

function goNext(){
    /*alert("Function called");*/
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(!name || !email || !password ){
        alert("This fields can't be empty!");
        return;
    }

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if(!nameValue || !emailValue || !passwordValue ){
        alert("This fields can't be empty!");
        return;
    }

    alert("Signup successful");
    window.location.href="details.html"
}


/*loginuser*/

function loginUser(){
    let email = document.getElementById("loginEmail").values;
    let password = document.getElementById("loginPassword").values;

    if(email ===""|| password ===""){
        alert("This fields can't be empty!");
    }
    else{
        alert("Login successful");
    }
}


/*personal details*/

function saveDetails(){
    let age = document.getElementById("age").value.trim();
    let weight = document.getElementById("weight").value.trim();
    let height = document.getElementById("height").value.trim();

    if(!age || !weight || !height){
        alert("This fields can't be empty !");
        return;
    }
    if(age<=0 || weight<=0 || height<=0){
        alert("Please enter valid details !")
        return;
    }
    alert("Details saved successful");
}
