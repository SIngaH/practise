document.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector("button");
    if(btn == null){
        themeChange();
    }else{ 
        themeChange();
        btn.addEventListener("click", ()=>{
            let check = sessionStorage.getItem('bgColor');
            if(check === "blueviolet"){
                sessionStorage.setItem("bgColor", "cyan");
            }else if(check === "cyan"){
                sessionStorage.setItem("bgColor", "blueviolet");
            }else{
                sessionStorage.setItem("bgColor", "blueviolet");
            }
            themeChange();
        });
    }
    function themeChange(){
        let check = sessionStorage.getItem('bgColor');
        if(check == "blueviolet"){
            document.documentElement.style.setProperty('--bg-color', 'cyan');
            document.documentElement.style.setProperty('--font-color', 'blueviolet');
        }else if(check == "cyan"){
            document.documentElement.style.setProperty('--bg-color', 'blueviolet');
            document.documentElement.style.setProperty('--font-color', 'cyan');
        }else{
            document.documentElement.style.setProperty('--bg-color', 'cyan');
            document.documentElement.style.setProperty('--font-color', 'blueviolet');
        }
    }   
});