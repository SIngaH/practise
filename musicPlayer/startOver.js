let play = document.querySelector(".play-or-pause");
let currentSong = document.querySelector("#song");
let inputJson = document.querySelector(".track-stuff");
let songTime = document.querySelector(".length-of-song");
let songline = document.querySelector(".songline");

let index = 0;
let player = "on";
window.onload = getTrack();
play.addEventListener("click", ()=>{
    if(play.classList.contains("fa-pause")){
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        player="off";
        pause();
        stopTime();
    }else{
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        player="on";
        getTrack();
    }
})

function getTrack(){
    fetch('./json/playlist.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        inputJson.innerHTML = `
            <h2>` + data[index].songName + `</h2>
            <h2>` + data[index].artists + `</h2>
            <img src="./images/` + data[index].cover + `" alt="` + data[index].coverAlt + `">
        `;
        songTime.innerHTML = data[index].duration
        move(data[index].duration_s);
        moveTime(data[index].duration, data[index].duration_s)
    });
}

// fix this - number in json too samll
let interval;
let width = 0;
function move(time) {
    let songline = document.querySelector(".songline");
    let ball = document.querySelector(".ball");

    clearInterval(interval);
    interval = setInterval(frame, 167000);

    function frame() {
        if (width >= 100) {
            width = 0;
            clearInterval(interval);
            index++;
        } else {
            width++;
            songline.style.width = width + '%';
            ball.style.marginLeft = width + '%';
        }
    }
}
function pause() {
    clearInterval(interval);
}

let theTime;
let timer = 0;
let timer2 = 0;
let end = 0;
let timeStatus = document.querySelector(".time-done");
function moveTime(endTime, seconds){
    clearInterval(theTime);
    theTime = setInterval(timeInterval, seconds)
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
        }
    }
}
function stopTime(){
    clearInterval(theTime);
}