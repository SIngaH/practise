let form = document.querySelectorAll(".form");
let errorElement = document.querySelectorAll(".error-message");
let name = document.querySelectorAll(".form__name");
let password = document.querySelectorAll(".form_password");
let password2 = document.querySelector(".form_password2");
let main = document.querySelector(".main");
let logIn = document.querySelector("#log-in");
let logInP = document.querySelector(".log-in");
let signUp = document.querySelector("#sign-up");
let signUpP = document.querySelector(".sign-up");
let LoggedIn = sessionStorage.getItem("LoggedIn");
let logOut = document.querySelector(".log-out");

if(LoggedIn === "false" || LoggedIn === null){
    main.classList.add("hide");
    logIn.classList.remove("hide");
}else{
    main.classList.remove("hide");
    logIn.classList.add("hide");
    signUp.classList.add("hide");
    logIn.classList.add("hide");
}

logOut.addEventListener("click", ()=>{
    sessionStorage.setItem("LoggedIn", "false");
    main.classList.add("hide");
    logIn.classList.remove("hide");
})

signUpP.addEventListener("click", ()=>{
    logIn.classList.add("hide");
    signUp.classList.remove("hide");
    console.log("here")
})

logInP.addEventListener("click", ()=>{
    signUp.classList.add("hide");
    logIn.classList.remove("hide");
    console.log("there")
})

let border = "solid 1px red";
let borderGone = "solid 1px #000";

form[0].addEventListener("submit", (e) =>{
    e.preventDefault();    
/*--------------------------Name--------------------------------- */
    if(name[0].value === "" || name[0].value == null){
        errorElement[0].style.display="block";
        errorElement[0].innerHTML = "A name is required";
        name[0].focus();
        name[0].style.border = border;
        return false;
    }else{
        name[0].style.border = borderGone;
    }

/*----------------Password-----------------------*/
    if(password[0].value === "" || password[0].value == null){
        errorElement[0].style.display="block";
        errorElement[0].innerHTML = "A password is required";
        password[0].focus();
        password[0].style.border = border;
        return false;
    }else{
        password[0].style.border = borderGone;
    }
    
    getting(name[0].value);
    return false;
})

function getting(theName){
    fetch("passwords.json")
        .then(function(response){
            return response.json()
        }).then(data =>{            
            for (let i = 0; i < data.length; i++) {
                let res = data[i].name.includes(theName);
                if(res === true){
                    passw(i);
                }else{
                    errorElement[0].style.display="block";
                    errorElement[0].innerHTML="Your password is incorrect";
                }
            }
            function passw(i){
                let currentI = data[i].password;
                if(password[0].value == currentI){
                    main.classList.remove("hide");
                    logIn.classList.add("hide");
                    signUp.classList.add("hide");
                    logIn.classList.add("hide");
                    errorElement[0].style.display="none";
                    sessionStorage.setItem("LoggedIn", "true");
                }
            }
        })
}

/*---------------------sign up-----------------------*/
form[1].addEventListener("submit", (e) =>{
    e.preventDefault();    
/*--------------------------Name--------------------------------- */
    if(name[1].value === "" || name[1].value == null){
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "A name is required";
        name[1].focus();
        name[1].style.border = border;
        return false;
    }else{
        name[1].style.border = borderGone;
    }

/*----------------Password-----------------------*/
    let nbr = /[0-9]/;
    let letters = /[a-z]/;
    let Letters = /[A-Z]/;

    if(password[1].value === "" || password[1].value == null){
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "A password is required";
        password[1].focus();
        password[1].style.border = border;
        return false;
    }else{
        password[1].style.border = borderGone;
    }

    if(password[1].value.length < 5){
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "Your password must be longer than five characters";
        password[1].focus();
        password[1].style.border = border;
        return false;
    }else{
        password[1].style.border = borderGone;
    }

    if(!letters.test(password[1].value)) {
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "Password must contain at least one lowercase letter";
        password[1].focus();
        password[1].style.border = border;
        return false;
    }else{
        password[1].style.border = borderGone;
    }

    if(!Letters.test(password[1].value)) {
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "Password must contain at least one uppercase letter";
        password[1].focus();
        password[1].style.border = border;
        return false;
    }else{
        password[1].style.border = borderGone;
    }

    if(!nbr.test(password[1].value)){
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "Your password must contain al least one number";
        password[1].focus();
        password[1].style.border = border;
        return false;
    }else{
        password[1].style.border = borderGone;
    }

    if(password[1].value != password2.value){
        errorElement[1].style.display="block";
        errorElement[1].innerHTML = "The passwords need to match";
        password2.focus();
        password2.style.border = border;
        return false; 
    }else{
        password2.style.border = borderGone;
    }

    errorElement[1].style.display="block";
    main.classList.remove("hide");
    logIn.classList.add("hide");
    signUp.classList.add("hide");
    logIn.classList.add("hide");
    sessionStorage.setItem("LoggedIn", "true");
    return false;
})