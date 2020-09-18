document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#form-delete");
    let email = document.querySelector("#delete-email");
    let errorMessage = document.querySelector("#error");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();    
        /*--------------------------Email--------------------------------- */
        const se = /\S+@\S+\.\S+/;    
        if(email.value === "" || email.value == null){
            errorMessage.style.display="block";
            errorMessage.innerHTML = "You need to give us an email address";
            email.focus();
            return false;
        }
        if(se.test(email.value) == false){ 
            errorMessage.style.display="block";
            errorMessage.innerHTML = "You need to give us a valid email address";
            email.focus();		
            return false;
        }   
        deleteIt(email.value);
        errorMessage.style.display="block";
        errorMessage.innerHTML= "Your email has been sent!";
        setTimeout(() => {
            errorMessage.style.display="none"; 
        }, 5000);
    })
    
    
    function deleteIt(theEmail){
        let data = {email:theEmail};
        fetch("http://localhost:4000/newsletters", {
            method: "DELETE",
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