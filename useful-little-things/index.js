console.log(window.location.href)
console.log(window.location.href.includes("index"))

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h1");
/* make text shorter - 50 characters (including spaces) */
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet autem assumenda hic tenetur, quasi magnam tempore et itaque molestiae quisquam optio libero deleniti aut nihil odio iure. Ea, iusto.";
let shortenText = text.slice(0, 50);
h1.innerHTML = shortenText + "...";

/* for each with an index number */
let fruits = ["first", "second", "third"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  h2.innerHTML += "<br>" + index + ":" + item + "<br>"; 
}

/* set and clear interval (3000 = 3 sec) */
let myInterval = setInterval(thisFunction, 1000);
let h3 = document.querySelector("h3");
let index = 0;
function thisFunction(){
  if(index < 3){
    index ++;
    h3.innerHTML = index;
  }else{
    clearInterval(myInterval);
  }
}
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
document.querySelector(".copy").addEventListener("click", ()=>{

  document.execCommand("copy");
})