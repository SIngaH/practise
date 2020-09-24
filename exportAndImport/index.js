import {showThis} from "./second.js"
let h2All = document.querySelectorAll(".h2");
for (let i = 0; i < h2All.length; i++) {
    h2All[i].addEventListener("click", ()=>{
        //tells showThis which h2 was clicked
        showThis(i);
    });
}

