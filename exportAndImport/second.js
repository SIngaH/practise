export function showThis(i){
    let ulAll = document.querySelectorAll(".ul");
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