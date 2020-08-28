document.addEventListener("DOMContentLoaded", ()=>{
    let putTheHere = document.querySelector(".multible-get");
    fetch("http://localhost:4000/events", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        let monthArray = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];
        result.forEach(event => {
            let day = (new Date(event.eventDate)).getDate();
            let month = (new Date(event.eventDate)).getMonth();
            let hours = (new Date(event.eventDate)).getHours();
            let min = (new Date(event.eventDate)).getMinutes();
            if(min < 10){
                min = "0" + min
            }
            putTheHere.innerHTML +=`
                <div class="event">
                    <p>` + day + " " + monthArray[month] + " " + hours + ":" + min + `</p>
                    <h1>` + event.eventName + `</h1>
                    <p>` + event.location + `</p>
                    <p>` + event.eventDescription + `</p>
                </div>
            `;
        });
    });
});
/*
putHere.innerHTML = `
            <h1>` + result[0].eventName + `</h1>
            <p>` + result[0].eventDescription + `</p>
            <p>` + result[0].location + `</p>
            <p>` + result[0].asset + ` for no reason</p>
            `;
*/