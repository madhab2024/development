let para = document.createElement("p");
para.innerText = "Hello world";
document.querySelector("body").append(para);

para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I am H3";
document.querySelector("body").append(h3);

h3.classList.add("blue")


let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "this is Div";
p.innerText = "this is paaragaph......"
document.querySelector("body").append(div);
div.append(h1);
div.append(p);
div.classList.add("info");

let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me!";
inp.placeholder = "Enter Your name";
btn.id = "btn";
document.querySelector("body").append(inp);
document.querySelector("body").append(btn);

let btn2 = document.querySelector("#btn");
btn2.style.backgroundColor = "red";

function say_hello(){
    console.log("HEllo Guys");
}

btn.onclick.say_hello();