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
import {app} from "https://www.unpkg.com/browse/cors@2.8.5/"
let url = 'http://newsapi.org/v2/top-headlines?' +
'sources=bbc-news&' +
'apiKey=f115096e53b34609a1806511cfb64ea8';
let req = new Request(url); 
app.use(cors())
 
app.get(req, function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})/*
fetch(req, {
    "method": "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
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
}).catch(error=> console.error("error: " + error))*/