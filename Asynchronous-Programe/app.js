// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     }, delay)
// }

//THIS IS CALL-BACK HELL SITUATION
// changeColor("red", 3000, ()=>{
//     changeColor("green", 2000, ()=>{
//         changeColor("blue", 1000, ()=>{
//             let a = prompt("Enter a value for a");
//             let b = prompt("Enter a value for b");
//             a = Number(a);
//             b = Number(b);
//             let c = (a, b)=>{
//                 return (a + b);
//             }
//             let sum = c(a, b);
//             h1.innerText = `${sum}`;
//         })
//     })
// });

// function saveToDb(data){
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if(speed >= 4)
//     console.log("Your data saved", data);
//     else
//     console.log("Conection slow");
// }

// saveToDb("Madhab");

// function saveToDb(data, sucess, failed) {
//   let speed = Math.floor(Math.random() * 10) + 1;
//   if (speed >= 4) sucess();
//   else failed();
// }

// saveToDb(
//   "Madhab",
//   () => {
//     console.log("datam1 stored");
//     saveToDb(
//       "Mondal",
//       () => {
//         console.log("Data 2 is saved");
//         saveToDb(
//           "Utta Asda",
//           () => {
//             console.log("Data 3 is saved");
//           },
//           () => {
//             console.log("Connection Week!");
//           }
//         );
//       },
//       () => {
//         console.log("Connection week!");
//       }
//     );
//   },
//   () => {
//     console.log("Connection week!");
//   }
// );

// EXAMPLE OF PROMISE
// function saveToDb(data) {
//   return new Promise((sucess, failure) => {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed >= 5) {
//       sucess();
//       console.log("Sucess");
//     } else {
//       failure();
//       console.log("Failed");
//     }
//   });
// }

// let res = saveToDb("Madhab");
// res.then(()=>{
//   console.log("Sucesfully saved!");
//   return saveToDb("Mondal");
// })
// .then(()=>{
//   console.log("2nd sucessfully saved!");
//   return saveToDb("Uttar Asda")
// })
// .then(()=>{
//   console.log("3rd sucessfully saved!");
// })
// .catch(()=>{
//   console.log("Error to save!");
// })
function displayimg(res){
  let div = document.querySelector(".card");
   div.style.backgroundImage = `url(${res})`;
   
}

let url = "https://api.thecatapi.com/v1/images/search";
function fetchCatimg(){
  fetch(url)
.then((res)=>{
  let r = res.json(res)
  .then((res)=>{
    if (res.length > 0) {
      displayimg(res[0].url); // Extract the `url` field from the first object
    } else {
      console.error("No image found in the response");
    }
  })
})
}


function addtext(txt){
  let h3 = document.querySelector(".text");
  h3.innerText = txt;
}
async function catfact() {
  let url ="https://catfact.ninja/fact";
  let res = await fetch(url);
  let result = await res.json();
  addtext(result.fact);
}
let btn = document.querySelector(".Ref");

btn.addEventListener("click",()=>{
  catfact();
  fetchCatimg();
});
catfact();
fetchCatimg();


// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color+"70";
}

// Function to fetch a random color (simulated API)
async function fetchRandomColor() {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getRandomColor());
    }, 500); // Simulating delay
  });
}

// Function to update the background color
async function updateBackgroundColor() {
  const color = await fetchRandomColor(); // Fetch the random color
  document.body.style.backgroundColor = color; // Apply the color
  console.log("Background color changed to:", color); // Log the color
}

// Add event listener to the button
let btn1 = document.querySelector(".Ref");
btn.addEventListener("click", updateBackgroundColor);
updateBackgroundColor();ss

