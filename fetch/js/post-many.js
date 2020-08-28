let ManyForm = document.querySelector(".multible-posts .contact-form");
let errorElement = document.querySelector(".multible-posts #contact-error-message");
let name = document.querySelector(".multible-posts .form__name");
let ManyEmail = document.querySelector(".multible-posts .form__email");
let website = document.querySelector(".multible-posts .form__website");
let textarea = document.querySelector(".multible-posts .form__comment");
let border = "solid 1px red";
let borderGone = "solid 1px var(--grey)";

/* check if empty - prevent default */
ManyForm.addEventListener("submit", (e) =>{
    e.preventDefault();    
/*--------------------------Name--------------------------------- */
    if(name.value === "" || name.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A name is required";
        name.focus();
        name.style.border = border;
        return false;
    }else{
        name.style.border = borderGone;
    }
/*--------------------------Email--------------------------------- */
    const se = /\S+@\S+\.\S+/;    
    if(ManyEmail.value === "" || ManyEmail.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An email is required";
        ManyEmail.focus();
        ManyEmail.style.border = border;
        return false;
    }else{
        ManyEmail.style.border = borderGone;
    }
    if(se.test(ManyEmail.value) == false){ 
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid email address";
        ManyEmail.focus();	
        ManyEmail.style.border = border;
        return false;
    }else{
        ManyEmail.style.border = borderGone;
    }
/*--------------------------Website--------------------------------- */
    if(website.value === "" || website.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An website is required";
        website.focus();
        website.style.border = border;
        return false
    }else{
        website.style.border = borderGone;
    }
    let dot = website.value.includes(".")
    if(dot == false){
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid website";
        website.focus();
        website.style.border = border;
        return false;
    }else{
        website.style.border = borderGone;
    }
    if(website.value.indexOf(".") == website.value.length -1 || website.value.indexOf(".") == website.value.length -2){
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid website";
        website.focus();
        return false;
    }else{
        website.style.border = borderGone;
    }
    let webstart = website.value.includes("www");
    if(webstart == false){
        website.value = "www." + website.value;
    }else{
        website.style.border = borderGone;
    }
    if(textarea.value === "" || textarea.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "You need to write a comment";
        textarea.focus();
        textarea.style.border = border;
        return false;
    }else{
        textarea.style.border = borderGone;
    }
    post(name.value, email.value, website.value, textarea.value);
    errorElement.innerHTML = "Your information has been sent";
    setTimeout(() => {
        errorElement.style.display="none";
        name.value = "";
        email.value = "";
        website.value = "";
        textarea.value = ""; 
    }, 5000);
})
function post(name, email, website, textarea){
    let data = {name:name, email:email, website:website, message:textarea};
    fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}