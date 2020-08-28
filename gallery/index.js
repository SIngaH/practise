document.addEventListener("DOMContentLoaded", ()=>{
    let boxes = document.querySelectorAll(".progress-box");
    let testimonials = document.querySelector(".testimonials-api-info");
    
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].addEventListener("click", ()=>{
            fetcher(index);
            boxColor(index);
            clearInterval(galleryMove)
        });
    }

    let MoveIndex = 0;
    let galleryMove = setInterval(galleryMoves, 3000);
    function galleryMoves(){
        if(MoveIndex == 0){
            MoveIndex = 1
        }else if(MoveIndex == 1){
            MoveIndex = 2
        }else{
            MoveIndex = 0
        }
        boxColor(MoveIndex);
        fetcher(MoveIndex);
    }

    let box1 = document.querySelector("#testimonials .box1"); 
    let box2 = document.querySelector("#testimonials .box2"); 
    let box3 = document.querySelector("#testimonials .box3");

    function boxColor(index){
        if(index == 0){
            box1.setAttribute("id", "pink");
            box2.removeAttribute("id", "pink");
            box3.removeAttribute("id", "pink");
        }else if(index == 1){
            box1.removeAttribute("id", "pink");
            box2.setAttribute("id", "pink");
            box3.removeAttribute("id", "pink");
        }else{
            box1.removeAttribute("id", "pink");
            box2.removeAttribute("id", "pink");
            box3.setAttribute("id", "pink");
        }
    }
    fetcher(0);

    function fetcher(index){
        fetch("http://localhost:4000/testemonials", {
            "method": "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then (function(response){
            return response.json();
        })
        .then (function(result){
            let index2 = index + 1;
            testimonials.innerHTML=`
                <img src="./images/testimonial_` + index2 + `.jpg" alt="` + result[index].name + `">
                <h4>` + result[index].name + `</h4>
                <p>` + result[index].content + `</p>
                <ul>
                    <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://myaccount.google.com/"><i class="fab fa-google-plus-g"></i></a></li>
                </ul>
            `;

        });
    }
});