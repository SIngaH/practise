const articles = document.querySelector(".articles");
const testArticle = document.querySelector(".test-article");

const options = {
    rootMArgin: "0px 0px 150px 0px",
    threshold: "0"
}

const testArticleObserver = new IntersectionObserver (entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting == true){
            articles.classList.add("change");
        }
    })
}, options)

testArticleObserver.observe(testArticle);

//adding animation class to my box
let footer = document.querySelector("footer");
let btn = document.querySelector("button");

footer.addEventListener("mouseover", ()=>{
    footer.classList.add("hover");
    btn.classList.add("btn-hover")
});

footer.addEventListener("mouseout", ()=>{
    footer.classList.remove("hover");
    btn.classList.remove("btn-hover")
});