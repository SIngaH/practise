let play = document.querySelector(".play-or-pause");
let next = document.querySelector(".next");
let back = document.querySelector(".back");
let shuffle = document.querySelector(".shuffle");
let repeat = document.querySelector(".repeat")
let currentSong = document.querySelector("#song");
let inputJson = document.querySelector(".track-stuff");
let songTime = document.querySelector(".length-of-song");
let songline = document.querySelector(".songline");
let index = 0;
let player = "on";
let shuffler = "off";
let repeater = "off";
window.onload = getTrack();

// shuffling the array for when the shuffle btn is pushed
let localArray = JSON.parse(localStorage.getItem("array"));
if(localArray == null || localArray == undefined){
    let array = [0, 1, 2, 3, 4, 5, 6];
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
    //saving the array in localStorage so i can call it later
    localStorage.setItem("array", JSON.stringify(array));
}

//play btn
play.addEventListener("click", ()=>{
    if(play.classList.contains("fa-pause")){
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        player="off";
        pause();
        stopTime();
        currentSong.pause();
    }else{
        currentSong.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        player="on";
        getTrack("no");
    }
})
//next btn
next.addEventListener("click", ()=>{
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    nextIndex(index);
})
//back btn
back.addEventListener("click", ()=>{
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    prevIndex(index);
})
//repeat btn
repeat.addEventListener("click", ()=>{
    if(repeater == "off"){
        repeater = "on"
        repeat.style.color="greenyellow";
    }else{
        repeater = "off"
        repeat.style.color="black";
    }
})
//shuffle btn
shuffle.addEventListener("click", ()=>{
    if(shuffler == "off"){
        shuffle.style.color="greenyellow";
        shuffler = "on"
    }else{
        shuffler = "off"
        shuffle.style.color="black";
    }
    getTrack();
})
//when next is pressed or if song is over
let getLastIndex = localStorage.getItem("test");
function nextIndex(){
    if(repeater == "on"){
        if(index == getLastIndex){
            index = 0;
        }else{
            index++
        }
    }else{
        if(index == getLastIndex){
            index = getLastIndex;
        }else{
            index++
        }
    }
    getTrack(index, "arrow");
}
//when back is pressed
function prevIndex(){
    if(repeater == "on"){
        if(index == 0){
            index = getLastIndex;
        }else{
            index--;
        }
    }else{
        if(index == 0){
            index = 0;
        }else{
            index--;
        }
    }
    getTrack(index, "arrow");
}
//gets the track with fetch
function getTrack(justPaused, arrow){
    fetch('./json/playlist.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        if(shuffler == "off"){
            inputJson.innerHTML = `
                <h2>` + data[index].songName + `</h2>
                <h2>` + data[index].artists + `</h2>
                <img src="./images/` + data[index].cover + `" alt="` + data[index].coverAlt + `">
            `;
            songTime.innerHTML = data[index].duration;
            let lastIndex = data.length-1;
            if(justPaused == null || justPaused == undefined || arrow == "arrow"){
                move(data[index].progressBarTime, 0);
                moveTime(data[index].duration, 0);
                localStorage.setItem("test", lastIndex);
                currentSong.src = data[index].mp3;
            }else{
                move(data[index].progressBarTime, null);
                moveTime(data[index].duration, null);
                localStorage.setItem("test", lastIndex);
            }
            currentSong.play();
        }else{            
            inputJson.innerHTML = `
                <h2>` + data[localArray[index]].songName + `</h2>
                <h2>` + data[localArray[index]].artists + `</h2>
                <img src="./images/` + data[localArray[index]].cover + `" alt="` + data[localArray[index]].coverAlt + `">
            `;
            songTime.innerHTML = data[localArray[index]].duration;
            let lastIndex = data.length-1;
            if(justPaused == null || justPaused == undefined || arrow == "arrow"){
                move(data[localArray[index]].progressBarTime, 0);
                moveTime(data[localArray[index]].duration, 0);
                localStorage.setItem("test", lastIndex);
                currentSong.src = data[localArray[index]].mp3;
            }else{
                move(data[localArray[index]].progressBarTime, null);
                moveTime(data[localArray[index]].duration, null);
                localStorage.setItem("test", lastIndex);
            }
            currentSong.play();
        }
    });
}
//progress bar
let interval;
let width = 0;
function move(time, theWidth) {
    if(theWidth !== null){
        width = 0
    }
    let songline = document.querySelector(".songline");
    let ball = document.querySelector(".ball");

    clearInterval(interval);
    interval = setInterval(frame, time);

    function frame() {
        if (width >= 100) {
            width = 0;
            clearInterval(interval);
            nextIndex();
            index++;
        } else {
            width++;
            songline.style.width = width + '%';
            ball.style.marginLeft = width + '%';
        }
    }
}
//pause progress bar when pause btn is clicked
function pause() {
    clearInterval(interval);
}

//keeping the time
let theTime;
let timer = 0;
let timer2 = 0;
let end = 0;
let timeStatus = document.querySelector(".time-done");
function moveTime(endTime, startTimes){
    if(startTimes !== null){
        timer = 0;
        timer2 = 0;
        end = 0; 
    }
    clearInterval(theTime);
    theTime = setInterval(timeInterval, 1000)
    function timeInterval(){
        end++
        if(timer2 == 6){
            timer2 = 0;
            timer++;
        }else if(end === 10){
            end = 0;
            timer2++;
        }
        let timeDone = "0" + timer + ":" + timer2 + end;
        timeStatus.innerHTML = timeDone
        if(timeDone === endTime){
            clearInterval(theTime)
            nextIndex();
            timer = 0;
            timer2 = 0;
            end = 0;
        }
    }
}
//pause the time when pause btn is clicked
function stopTime(){
    clearInterval(theTime);
}