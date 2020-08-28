document.addEventListener("DOMContentLoaded", ()=>{
    let putAllHere = document.querySelector(".many-to-one");
    fetch("http://localhost:4000/blog-posts", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        result.forEach(blogPost => {
            let description = blogPost.content.slice(0, 100) + "...";
            putAllHere.innerHTML +=`
                <div class="blog-post">
                    <h1><a href="single.html?number=` + blogPost.id + `">` + blogPost.title + `</a></h1>
                    <h2>` + blogPost.author + `</h2>
                    <p>` + description + `</p>
                </div>

            `;
        });
    });

});