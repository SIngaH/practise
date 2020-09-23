document.addEventListener("DOMContentLoaded", ()=>{
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
  let showPassword = document.querySelector("#passwordSH");
  let showPassword2 = document.querySelector("#passwordSH2");


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
  })

  logInP.addEventListener("click", ()=>{
    signUp.classList.add("hide");
    logIn.classList.remove("hide");
  })

  showPassword.addEventListener("click", ()=>{
    if(password[0].type === "password"){
      password[0].type = "text"
    }else{
      password[0].type = "password"
    }
  })

  showPassword2.addEventListener("click", ()=>{
    if(password[1].type === "password"){
      password[1].type = "text"
      password2.type = "text"
    }else{
      password[1].type = "password"
      password2.type = "password"
    }
  })

  var config = {
    apiKey: "AIzaSyDljgDMQJGynZCPG9QtxU2At1QiOLVIkrU",
    authDomain: "testing-e7472.firebaseapp.com",
    databaseURL: "https://testing-e7472.firebaseio.com",
    projectId: "testing-e7472",
    storageBucket: "testing-e7472.appspot.com",
    messagingSenderId: "1016604727933",
    appId: "1:1016604727933:web:ec4c08f12dde463ca8af14",
    measurementId: "G-5PGHCRFBXP"
  };
  
  firebase.initializeApp(config);
  let firestore = firebase.firestore()
  //const docRef = firestore.doc("testing-e7472/SIH");
  let index = 0;
  let id = index.toString();
  let docRef = firestore.collection("LogInInfo").doc(id);

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
    
    howMany();
    return false;
  })
  
  function howMany(){
    firestore.collection("LogInInfo").get().then(function(doc){
      if(doc && !doc.empty){
        const myData = doc.docs
        let length = myData.length;
        check(length);
      }
    }).catch(function(error){
      console.log(error)
    })
  }
  function check(length){
    for (let i = 0; i < length; i++) {    
      let id = i.toString(); 
      firestore.collection("LogInInfo").doc(id).get().then(function(doc){
        if(doc && doc.exists){
          const myData = doc.data();
          if(name[0].value !== "" && name[0].value !== null && name[0].value !== undefined && myData.name.includes(name[0].value)){
            if(myData.password.includes(password[0].value)){
              loggedIn();
            }else{
              errorElement[0].innerHTML = "Your password is incorrect";
            }
          }else{
            if(errorElement[0].innerHTML !== "Your password is incorrect"){
              errorElement[0].innerHTML = "You have not signed up";
            }
          }
        }
      }).catch(function(error){
        console.log(error)
      })   
    }
  }

  function loggedIn(){
    main.classList.remove("hide");
    logIn.classList.add("hide");
    signUp.classList.add("hide");
    logIn.classList.add("hide");
    errorElement[0].style.display="none";
    sessionStorage.setItem("LoggedIn", "true");
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
      howMany();
    }

    function howMany(){
      firestore.collection("LogInInfo").get().then(function(doc){
        if(doc && !doc.empty){
          const myData = doc.docs
          let length = myData.length;
          check(length);
        }
      }).catch(function(error){
        console.log(error)
      })
    }

    function check(length){
      for (let i = 0; i < length; i++) {    
        sessionStorage.setItem("nameInUse", "no");
        let id = i.toString(); 
        firestore.collection("LogInInfo").doc(id).get().then(function(doc){
          if(doc && doc.exists){
            const myData = doc.data();
            if(name[1].value !== "" && name[1].value !== null && name[1].value !== undefined && myData.name.includes(name[1].value)){
              errorElement[1].innerHTML = "That name is taken";
              sessionStorage.setItem("nameInUse", "yes");
            }
            if(sessionStorage.getItem("nameInUse") === "no"){
             setData(length);
            }
          }
        }).catch(function(error){
          console.log(error)
        })   
      }
    }
    
    function setData(index){
      let id = index.toString();
      let docRef = firestore.collection("LogInInfo").doc(id);
      docRef.set({
        name: name[1].value,
        password: password[1].value
      }).then(()=>{
        loggedIn();
      })
    }
  
    function loggedIn(){
      main.classList.remove("hide");
      logIn.classList.add("hide");
      signUp.classList.add("hide");
      logIn.classList.add("hide");
      errorElement[0].style.display="none";
      sessionStorage.setItem("LoggedIn", "true");
    }
    return false;
  })
});