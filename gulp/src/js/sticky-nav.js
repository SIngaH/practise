document.addEventListener("DOMContentLoaded", ()=>{
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
});