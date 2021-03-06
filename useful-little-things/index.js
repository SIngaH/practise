//what site am i on
console.log(window.location.href)
console.log(window.location.href.includes("index"))

//cutting a tex short
let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
/* make text shorter - 50 characters (including spaces) */
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet autem assumenda hic tenetur, quasi magnam tempore et itaque molestiae quisquam optio libero deleniti aut nihil odio iure. Ea, iusto.";
let shortenText = text.slice(0, 50);
h1.innerHTML = shortenText + "...";

/* for each with an index number */
let fruits = ["first","second","third"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  ul.innerHTML += "<li>" + index + ":" + item + "</li>"; 
}

/* set and clear interval (1000 = 1 sec) 
it calls the function every second */
let myInterval = setInterval(thisFunction, 1000);
let h3 = document.querySelector("h3");
let index = 0;
function thisFunction(){
  if(index < 6){
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
    let alert = document.querySelector(".alert");
      
   faCopy.classList.add("link-copied");

    setTimeout(() => {
      faCopy.classList.remove("link-copied")
      alert.setAttribute("id", "alert");
    }, 2000);

    setTimeout(() => {
      alert.removeAttribute("id");
    }, 5000);
    
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
// to push into an array
array.push(2);
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
    return array;
}

//every one exept the current changes
const thisarray = [0, 1, 2, 3, 4];
thisarray.forEach((val, i) => {
  if (i !== 3) thisarray[i] = 9;
});
console.log(thisarray);

//do something once
smtn();
function smtn() {
  var executed = false;
      if (!executed) {
          executed = true;
          console.log("hihi")
      }
}

//do something when the screen is smaller than 500px - you need to refresh the site to see the change
if(screen.width > 500){
  ul.style.display = "flex";
}

//clock
let clock = document.querySelector(".clock p");
setInterval(() => {
  runClock();
}, 1000);

function runClock(){
  let date = new Date();  
  let dateTime = date.getHours();
  let dateMinutes = date.getMinutes();
  let dateSeconds = date.getSeconds();
  if(dateSeconds.length === 1){
    dateSeconds = "0" + dateSeconds
    clock.innerHTML = dateTime + ":" + dateMinutes + ":0" + dateSeconds;
  }else{
    clock.innerHTML = dateTime + ":" + dateMinutes + ":" + dateSeconds;
  }
}

//timer for stuff like music
let timer = document.querySelector(".timer p");
setInterval(() => {
  runTimer();
}, 1000);

let minutes = 0;
let seconds = 0;
function runTimer(){
  seconds++;
  if(seconds > 59){
    minutes++;
    seconds = 0;
  }
  if(seconds < 10 && minutes < 10){
    timer.innerHTML = "0" + minutes + ":0" + seconds;
  }else if(minutes < 10){
    timer.innerHTML = "0" + minutes + ":" + seconds;
  }else if(seconds < 10){
    timer.innerHTML = minutes + ":0" + seconds;
  }else{
    timer.innerHTML = minutes + ":" + seconds;
  }
}