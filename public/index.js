let div = document.querySelector("div");
let input = document.querySelector("input");
input.style.width = div.clientWidth - 15 + "px";

input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        div.innerHTML = input.value;
        input.style.opacity = 0;
        input.disabled = true;
    }else{
        div.innerHTML = input.value;
        div.innerHTML += "  <span class='animated infinite bounce '></span>"
    }
    
    
    input.style.width = div.clientWidth - 15 + "px";
    
}, false);