/*
document.addEventListener("DOMContentLoaded", ()=>{
    let putHere = document.querySelector(".get");
    fetch("http://newsapi.org/v2/top-headlines", {
        "method": "GET",
        headers: {
            "country": "dk",
            "apiKey": ""
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
*/

/*
var url = 'http://newsapi.org/v2/top-headlines?' +
'sources=bbc-news&' +
'apiKey=f115096e53b34609a1806511cfb64ea8';
var req = new Request(url);
fetch(url)
.then(function(response) {
  console.log(response.json());
})*/
let url = 'http://newsapi.org/v2/top-headlines?' +
'sources=bbc-news&' +
'apiKey=f115096e53b34609a1806511cfb64ea8';
let req = new Request(url); 
fetch(req, {
    "method": "GET",
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'Content-Type',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then (function(response){
    return response.json();
})
.then (function(result){
    console.log(result)
}).catch(error=> console.error("error: " +error))