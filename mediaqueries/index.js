let heart = document.querySelector(".fa-heart");
let dropDown = document.querySelector("#dropDownIcon");
let ul = document.querySelector("#ul");

/* -----------------------like or dislike----------------------- */
heart.addEventListener("click", ()=>{
    if(heart.classList.contains("far")){
        heart.classList.remove("far")
        heart.classList.add("fas")
    }else{
        heart.classList.add("far")
        heart.classList.remove("fas")
    }
})

/* -----------------------drop down menu----------------------- */
dropDown.addEventListener("click", ()=>{
    if(ul.style.display === "block"){
        ul.style.display = "none";
        dropDown.classList.add("dropDown-rotate");
    }else{
        ul.style.display = "block";
        dropDown.classList.remove("dropDown-rotate");
    }
})

/* If you go to a bigger screen width while dropdown is closed, ul is still display:none */
if(screen.width > 500){
    ul.style.display = "flex";
    console.log(screen.width)

}

if(screen.width < 500){
    console.log(screen.width)
    document.querySelector("header").style.backgroundColor = "red"
}else{
    document.querySelector("header").style.backgroundColor = "cyan"
}