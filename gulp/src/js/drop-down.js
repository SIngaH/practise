document.addEventListener("DOMContentLoaded", ()=>{
    let showSub = document.querySelector(".nav__ul-show-sub-menu");
    let theSub = document.querySelector(".nav__sub-menu");
    
    showSub.addEventListener("click", ()=>{
        if(theSub.style.display === "none"){
            theSub.style.display = "block";
        }else{
            theSub.style.display = "none";
        }
    });
});