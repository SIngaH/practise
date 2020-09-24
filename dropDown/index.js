let h2All = document.querySelectorAll(".h2");
let ulAll = document.querySelectorAll(".ul");
for (let i = 0; i < h2All.length; i++) {
    h2All[i].addEventListener("click", ()=>{
        //tells showThis which h2 was clicked
        showThis(i);
    });
}

function showThis(i){
    //closes the open ones before opening another
    for (let index = 0; index < ulAll.length; index++) {
        //only the ones that have not just been clicked (so you can close it again by clicking the h2)
        if(i !== index){
            ulAll[index].classList.add("hide")
        }
    }
    //opens the ul you clicked on
    if(ulAll[i].classList.contains("hide")){
        ulAll[i].classList.remove("hide")   
    }else{
        ulAll[i].classList.add("hide")   
    }
}

//single drop down
let h2 = document.querySelector(".other-h2");
let ul = document.querySelector(".other-ul");
h2.addEventListener("click", ()=>{
    if(ul.classList.contains("hide")){
        ul.classList.remove("hide")   
    }else{
        ul.classList.add("hide")   
    }
})