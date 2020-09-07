let index = 0; 
let fotoListe = ["bimg1", "bimg2", "bimg3", "bimg4"]; 
let nyFoto;
let bigPic = document.querySelector(".main-img");
let leftArrow = document.querySelector("#back");  
leftArrow.addEventListener("click", skift);      
let rightArrow = document.querySelector("#next"); 
rightArrow.addEventListener("click", skift);  
let thumbCollection = document.querySelectorAll(".thumbs img");
let thumbArray = Array.from(thumbCollection);  

for(var i = 0; i < thumbArray.length; i++){  
    thumbArray[i].addEventListener("click", thumbsSkift); 
    thumbArray[index].style.border = "solid 2px #00f";  
}

function skift(e){
    if(e==="back"){
        if(index > 0){
            index--;
        }else{
            index = fotoListe.length-1; 
        }
        
    }else if(e==="next"){
        if(index < fotoListe.length-1){  
            index++;
        }else{
            index = 0; 
        }
        
    }else if(e.target.getAttribute("id")==="back"){
        if(index > 0){
            index--;
        }else{
            index = fotoListe.length-1; 
        }
    }else{
        if(index < fotoListe.length-1){  
            index++;
        }else{
            index = 0;  
        }
    }
    
    nyFoto = fotoListe[index] + ".jpg";
    bigPic.setAttribute("src", nyFoto); 
    for(i = 0; i < thumbArray.length; i++){ 
        thumbArray[i].style.border = "";
    }
    thumbArray[index].style.border = "solid 2px #00f";
}
    
    
function thumbsSkift(e){ 
    nyFoto = fotoListe[thumbArray.indexOf(e.target)] + ".jpg"; 
    bigPic.setAttribute("src", nyFoto);
    index = thumbArray.indexOf(e.target); 
    for(i = 0; i < thumbArray.length; i++){ 
        thumbArray[i].style.borderColor = "";
    }
    thumbArray[index].style.border = "solid 2px #00f";
}
        
    
document.onkeydown = function(e) { 
    if (e.keyCode === 37) {
        skift("back");	
    } else if(e.keyCode === 39) {
        skift("next"); 
    }
};