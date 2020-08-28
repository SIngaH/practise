document.addEventListener("DOMContentLoaded", ()=>{
    let putHere = document.querySelector(".get");
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
        putHere.innerHTML = `
            <h1>` + result[0].eventName + `</h1>
            <p>` + result[0].eventDescription + `</p>
            <p>` + result[0].location + `</p>
            <p>` + result[0].asset + ` for no reason</p>
        `;
    });
});
/* this one worked before but not there is no longer anything on this address on the api */
// document.addEventListener("DOMContentLoaded", ()=>{
//     let putHere = document.querySelector(".get");
//     fetch("http://localhost:4000/events", {
//         "method": "GET",
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//     .then (function(response){
//         return response.json();
//     })
//     .then (function(result){
//         console.log(result);
//         putHere.innerHTML = `
//             <h1>` + result.eventName + `</h1>
//             <p>` + result.eventDescription + `</p>
//             <p>` + result.location + `</p>
//             <p>` + result.asset + ` for no reason</p>
//             `;
//     });
// });