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
    });
}


let interval;
let width = 1;
function move(time) {
    let songline = document.querySelector(".songline");
    let ball = document.querySelector(".ball");

    clearInterval(interval);
    interval = setInterval(frame, time);

    function frame() {
        if (width >= 100) {
            width = 1;
            clearInterval(interval);
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