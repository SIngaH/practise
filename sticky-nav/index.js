document.addEventListener("DOMContentLoaded", ()=>{
// sticky nav---------------------------------------------
    window.onscroll = function() {myFunction()};

    let navbar = document.querySelector("#nav");
    let sticky = navbar.offsetTop;
// element.offsetTop is the number of pixels from the top of the closest relatively positioned parent element.
    
    function myFunction() {
/* the first line is about when it becomes sticky (when you have scrolled to the top of the sticky element) */
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
// drop down --------------------------------------------
    let showSub = document.querySelector("#nav__ul-show-sub-menu");
    let theSub = document.querySelector("#nav #hide");

    showSub.addEventListener("click", ()=>{
        if(theSub.style.display === "none"){
            theSub.style.display = "flex";  //normally it says display="block"
        }else{
            theSub.style.display = "none";
        }
    });
});