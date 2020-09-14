document.addEventListener("DOMContentLoaded", ()=>{
    let bgArray = ["blueviolet", "cyan", "greenyellow", "pink", "black"];
    let fontArray = ["cyan", "blueviolet", "green", "black", "white"];
    let check = sessionStorage.getItem('theme');
    if(check == null || check == undefined){
        localStorage.setItem('theme', 0);
    }
    startTheme();
    let btn = document.querySelector("button");
    if(btn !== null){
        btn.addEventListener("click", ()=>{
            let check = sessionStorage.getItem('theme');
            indexCount(check);
        })
    }
    function indexCount(check){
        if(check == bgArray.length-1){
            check = 0;
        }else{
            check++;
        }
        sessionStorage.setItem('theme', check);
        document.documentElement.style.setProperty('--bg-color', bgArray[check]);
        document.documentElement.style.setProperty('--font-color', fontArray[check]);
    }
    function startTheme(){
        let check = sessionStorage.getItem('theme');
        document.documentElement.style.setProperty('--bg-color', bgArray[check]);
        document.documentElement.style.setProperty('--font-color', fontArray[check]);
    }
});