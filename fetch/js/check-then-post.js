document.addEventListener("DOMContentLoaded", ()=>{
    let theForm = document.querySelector(".check-then-post #form");
    let checkErrorMessage = document.querySelector(".check-then-post #error-message");
    let checkEmail = document.querySelector(".check-then-post #newsletter-email");
    
    // validation - email
    theForm.addEventListener("submit", (e)=>{
        e.preventDefault(); 
        const se = /\S+@\S+\.\S+/;    
        if(checkEmail.value === "" || checkEmail.value == null){
            checkErrorMessage.style.display="block";
            checkErrorMessage.innerHTML = "You need to give us an email address";
            checkEmail.focus();
            return false;
        }
        if(se.test(checkEmail.value) == false){ 
            checkErrorMessage.style.display="block";
            checkErrorMessage.innerHTML = "You need to give us a valid email address";
            checkEmail.focus();		
            return false;
        }   
        checkErrorMessage.style.display="block";
        getting(checkEmail.value);
        return false;
    });   

    // check the api, if email exists message else post email to api
    function getting(email){
        fetch("http://localhost:4000/newsletters", {
            "method": "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then (function(response){
            return response.json();
        })
        .then (function(result){
            let myArray = [];
            for (let index = 0; index < result.length; index++) {
                let res = result[index].email.includes(email);
                myArray.push(res);
            }
            if(!myArray.includes(true)){
                checkErrorMessage.innerHTML= "Your email has been sent!";
                posting(email);
            }else{
                checkErrorMessage.innerHTML = "You are already subscribed to our newsletter!"
            }            
        });
    }

    // post to api
    function posting(email){
        console.log("posing")
        let data = {email:email};
        fetch("http://localhost:4000/newsletters", {
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
});