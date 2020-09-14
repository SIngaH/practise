document.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector("button");
    let alert = document.querySelector(".alert");
    btn.addEventListener("click", ()=>{
        alert.setAttribute("id", "alert");
      
        setTimeout(() => {
            alert.removeAttribute("id");
        }, 5000);
    });
});