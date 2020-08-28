let form = document.querySelector(".form");
let errorElement = document.querySelector(".error-message");
let name = document.querySelector(".form__name");
let email = document.querySelector(".form__email");
let email2 = document.querySelector(".form__email2");
let phoneNumber = document.querySelector(".form__phone_number");
let website = document.querySelector(".form__website");
let number = document.querySelector(".form__number");
let age = document.querySelector(".form__age");
let textarea = document.querySelector(".form__comment");
let female = document.querySelector(".form__radio_female");
let male = document.querySelector(".form__radio_male");
let agree = document.querySelector(".form__checkbox");
let select = document.querySelector(".form__select");
let zipCode = document.querySelector(".form__zip");
let date = document.querySelector(".form__date");
let border = "solid 1px red";
let borderGone = "solid 1px #000";

/* check if empty - prevent default */
form.addEventListener("submit", (e) =>{
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
    if(email.value === "" || email.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An email is required";
        email.focus();
        email.style.border = border;
        return false;
    }else{
        email.style.border = borderGone;
    }
    if(se.test(email.value) == false){ 
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid email address";
        email.focus();	
        email.style.border = border;
        return false;
    }else{
        email.style.border = borderGone;
    }
    if(email.value != email2.value){
        errorElement.style.display="block";
        errorElement.innerHTML = "The emails need to match";
        email2.focus();
        email2.style.border = border;
        return false
    }else{
        email2.style.border = borderGone;
    }
/*--------------------------Phone number--------------------------------- */
    if(phoneNumber.value === "" || phoneNumber.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An phone number is required";
        phoneNumber.focus();
        phoneNumber.style.border = border;
        return false
    }else{
        phoneNumber.style.border = borderGone;
    }
    if(isNaN(phoneNumber.value) || phoneNumber.value.length != 8){
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid phone number";
        phoneNumber.focus();
        phoneNumber.style.border = border;
        return false;
    }else{
        phoneNumber.style.border = borderGone;
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
    if(dot == false || website.value.indexOf(".") == website.value.length -1 || website.value.indexOf(".") == website.value.length -2){
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid website";
        website.focus();
        website.style.border = border;
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
/*--------------------------Number--------------------------------- */
    if(number.value === "" || number.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A number is required";
        number.focus();
        number.style.border = border;
        return false
    }else{
        number.style.border = borderGone;
    }
    if(isNaN(number.value) ||number.value < 1 || number.value > 5){
        errorElement.style.display="block";
        errorElement.innerHTML = "A number between 1 and 5 is required";
        number.focus();
        number.style.border = border;
        return false;
    }else{
        number.style.border = borderGone;
    }
/*--------------------------Age--------------------------------- */
    if(age.value === "" || age.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An age is required";
        age.focus();
        age.style.border = border;
        return false
    }else{
        age.style.border = borderGone;
    }
    if(isNaN(age.value) || age.value.length > 2){
        errorElement.style.display="block";
        errorElement.innerHTML = "Input your actual age in numbers";
        age.focus();
        age.style.border = border;
        return false;
    }else{
        age.style.border = borderGone;
    }
    if(age.value < 17){ 
        errorElement.style.display="block";
        errorElement.innerHTML = "You need to be 18 or older"; 
        age.focus();	
        age.style.border = border;
        return false; 
    }else{
        age.style.border = borderGone;
    }
/*-----------------------textarea-------------------------------------*/
    if(textarea.value === "" || textarea.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "You need to write a message"; 
        textarea.focus();	
        textarea.style.border = border;
        return false; 
    }else{
        textarea.style.border = borderGone;
    }
/*------------------------radio--------------------------------------*/
    let femaleL = document.querySelector(".radio__label_female");
    let maleL = document.querySelector(".radio__label_male");
    if(female.checked === false && male.checked === false){
        errorElement.style.display="block";
        errorElement.innerHTML = "You need to choose a gender"; 
        femaleL.style.textDecoration ="underline 2px red";
        maleL.style.textDecoration ="underline 2px red";
        return false;
    }else{
        femaleL.style.textDecoration ="none";
        maleL.style.textDecoration ="none";
    }
/*------------------------checkbox--------------------------------------*/
    let checkLabel = document.querySelector(".form__checkbox_label")
    if(agree.checked === false){
        errorElement.style.display="block";
        errorElement.innerHTML = "You need to agree"; 
        checkLabel.style.textDecoration ="underline 2px red";
        return false;
    }else{        
        checkLabel.style.textDecoration ="none";
    }
/* ------------------------select------------------------ */
    if(select.value === "choose"){
        select.style.border = border;
        errorElement.style.display="block";
        errorElement.innerHTML = "You need to choose a car"; 
        select.focus();
        return false;
    }else{
        select.style.border = borderGone;
    }

/* ------------------------zip code------------------------ */
    if(zipCode.value == "" || zipCode.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A zip code is required";
        zipCode.focus();
        zipCode.style.border = border;
        return false;
    }else{
        zipCode.style.border = borderGone;
    }
    if(isNaN(zipCode.value) || zipCode.value.length < 4){
        errorElement.style.display="block";
        errorElement.innerHTML = "A zip code is 4 numbers";
        zipCode.focus();
        zipCode.style.border = border;
        return false;
    }else{
        zipCode.style.border = borderGone;
    }
/* --------------------------------date-------------------------------- */
    if(date.value == "" || date.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A date is required";
        date.focus();
        date.style.border = border;
        return false;
    }else{
        date.style.border = borderGone;
    }

    errorElement.style.display="block";
    errorElement.innerHTML = "You have filled out the form correctly"; 
    
    setTimeout(() => {
        errorElement.style.display="none";
        name.value = "";
        email.value = "";
        email2.value = "";
        phoneNumber.value = "";
        website.value = "";
        number.value = "";
        age.value = "";
        textarea.value = "";
        female.checked = false;
        male.checked = false;
        agree.checked = false;
        select.value = "choose";
        zipCode.value = "";
    }, 5000);
})