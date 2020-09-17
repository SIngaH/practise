let images = document.querySelectorAll(".image");
let progressBoxes = document.querySelectorAll(".events-progress-box");
console.log(progressBoxes)
let index = 0;
for (let i = 0; i < progressBoxes.length; i++) {
    console.log(progressBoxes[i])
    progressBoxes[i].addEventListener("click", ()=>{
        clearInterval(myInterval)
        getImgs(i)
    });
}
/* change img every 3 sec untill one of the little boxes are pressed */
let myInterval = setInterval(() => {
    usingInterval();
}, 3000);

function usingInterval(){
    if(index === 2){
        index = 0;
    }else{
        index++
    }
    getImgs(index);
}

function getImgs(index){
    if(index === 0){
        progressBoxes[0].setAttribute("id", "pink")
        progressBoxes[1].removeAttribute("id", "pink")
        progressBoxes[2].removeAttribute("id", "pink")
        images[0].classList.remove("hide")
        images[1].classList.remove("hide")
        images[2].classList.add("hide")
        images[3].classList.add("hide")
        images[4].classList.add("hide")
        images[5].classList.add("hide")
    }else if(index === 1){
        progressBoxes[0].removeAttribute("id", "pink")
        progressBoxes[1].setAttribute("id", "pink")
        progressBoxes[2].removeAttribute("id", "pink")
        images[0].classList.add("hide")
        images[1].classList.add("hide")
        images[2].classList.remove("hide")
        images[3].classList.remove("hide")
        images[4].classList.add("hide")
        images[5].classList.add("hide")
    }else{
        progressBoxes[0].removeAttribute("id", "pink")
        progressBoxes[1].removeAttribute("id", "pink")
        progressBoxes[2].setAttribute("id", "pink")
        images[0].classList.add("hide")
        images[1].classList.add("hide")
        images[2].classList.add("hide")
        images[3].classList.add("hide")
        images[4].classList.remove("hide")
        images[5].classList.remove("hide")
    }
}