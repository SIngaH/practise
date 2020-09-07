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