document.addEventListener("DOMContentLoaded", ()=>{
    let bgColor = localStorage.getItem("background");
    if(bgColor == null || bgColor == undefined){
        localStorage.setItem("background", 0);
    }
    let btns = document.querySelectorAll("button");
    let colorArray = ["blueviolet", "lime", "palevioletred", "crimson"];
    let fontArray = ["lime", "crimson", "blueviolet", "palevioletred"];
    startTheme();

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", ()=>{
            changeColor(i)
        })  
    }
    function changeColor(i){
        document.documentElement.style.setProperty('--bg-color', colorArray[i]);
        document.documentElement.style.setProperty('--font-color', fontArray[i]);
        localStorage.setItem("background", i);

    }
    function startTheme(){
        let bgColor = localStorage.getItem("background");
        document.documentElement.style.setProperty('--bg-color', colorArray[bgColor]);
        document.documentElement.style.setProperty('--font-color', fontArray[bgColor]);
    }
});