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

//copy elements text to clipboard
//https://jsfiddle.net/alvaroAV/a2pt16yq/
document.querySelector("#copy-icon").addEventListener("click", ()=>{
    let faCopy = document.querySelector("#copy-icon");
      
   faCopy.classList.add("link-copied");

    setTimeout(() => {
      faCopy.classList.remove("link-copied")
    }, 2000);
    
    // Create an auxiliary hidden input
    var aux = document.createElement("input");
    // Get the text from the element passed into the input
    aux.setAttribute("value", document.getElementById("copy-try").innerHTML);

    // Append the aux input to the body
    document.body.appendChild(aux);

    // Highlight the content
    aux.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the input from the body
    document.body.removeChild(aux);
})

//saving an array in localStorage
let array = [0, 1, 2, 3, 4, 5, 6];
localStorage.setItem("array", JSON.stringify(array));
let localArray = JSON.parse(localStorage.getItem("array"));
console.log(localArray)

// shuffling an array
let Myarray = [0, 1, 2, 3, 4, 5, 6];
shuffle(Myarray);
function shuffle(array){
    let ctr = array.length, temp, i;
    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        i = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = array[ctr];
        array[ctr] = array[i];
        array[i] = temp;
    }
}