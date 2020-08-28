document.addEventListener("DOMContentLoaded", ()=>{
   let next = document.querySelector("#next");
   let back = document.querySelector("#back");
   let imageIndex = 0;
/* -------------------arrows------------------- */
    next.addEventListener("click", ()=>{
        clearInterval(myInterval);
        nextImg();
    });

    back.addEventListener("click", ()=>{
        clearInterval(myInterval);
        prevImg();
    });

/* change index so i can call an img from the array */
    function nextImg(){
        if(imageIndex == 2){
            imageIndex = 0;
        }else{
            imageIndex ++;
        }
        newIndex(imageIndex);
    }

    function prevImg(){
        if(imageIndex == 0){
            imageIndex = 2;
        }else{
            imageIndex --;
        }
        newIndex(imageIndex);
    }
/* ---------------------image change--------------------- */
   let image = document.querySelector("#gallery-image"); 
   let images = ["./images/testimonial_1.jpg", "./images/testimonial_2.jpg", "./images/testimonial_3.jpg"]

    function newIndex(imageIndex){
        image.src=images[imageIndex];
    }
/* image changes every 3 sec until arrow is pressed */
    let myInterval = setInterval(nextImg, 3000);
});