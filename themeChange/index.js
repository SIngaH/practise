document.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector("button");
    if(btn == null){
        themeChange();
    }else{ 
        themeChange();
        btn.addEventListener("click", ()=>{
            let check = localStorage.getItem('bgColor');
            if(check === "blueviolet"){
                localStorage.setItem("bgColor", "cyan");
            }else if(check === "cyan"){
                localStorage.setItem("bgColor", "blueviolet");
            }else{
                localStorage.setItem("bgColor", "blueviolet");
            }
            themeChange();
        });
    }
    function themeChange(){
        let check = localStorage.getItem('bgColor');
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