document.addEventListener("DOMContentLoaded", ()=>{
    let params = new URLSearchParams(document.location.search);
    let number = params.get("number");
    let singleHere = document.querySelector(".single-get");
    fetch("http://localhost:4000/blog-posts/" + number, {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        singleHere.innerHTML = `
            <div class="blog-post">
                <h1>` + result.title + `</h1>
                <h2>` + result.author + `</h2>
                <p>` + result.content + `</p>
            </div>
        `;

    });
});