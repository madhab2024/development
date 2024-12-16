let btn = document.querySelector(".btn");
let inp = document.querySelector("input");

function showValue(){
    let value = inp.value;
    console.log(value, "Added");
    let li = document.createElement("li");
    li.innerText = (value);
    let ul = document.querySelector("ul");
    li.style.backgroundColor = randomColour();
    ul.appendChild(li);
    inp.value = "";
}

function randomColour(){
    let letters = "123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


btn.onclick = showValue;

inp.addEventListener("keydown", (event)=>{
    if(event.key == "Enter"){
        showValue();
    }
});