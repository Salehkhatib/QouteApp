let quote = document.querySelector("#text");
function loadData() {
  let Author = "";
  let text = "";
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      Author = data.data[0].quoteAuthor;
      text = data.data[0].quoteText;
      author.innerHTML = Author;
      quote.innerHTML = text;
    });
  updateLocalStorage();
}
button.addEventListener("click", loadData);

function getQoute() {
  if (localStorage.getItem("qoute")) {
    const qouteElement = localStorage.getItem("qoute");
    todos = JSON.parse(qouteElement);
  }
}
getQoute();
loadData();

let images = document.querySelector("#pics");
function loadpictures() {
  let pics = "";

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      pics = data.data[0].pictures;
      pics.innerHTML = pics;
    });
  updateLocalStorage();
}
button.addEventListener("click", loadpictures);
function getImages() {
  if (localStorage.getItem("images")) {
    const qouteElement = localStorage.getItem("images");
    todos = JSON.parse(qouteElement);
  }
}
loadpictures();
getImages();

/*function fetchPics() {
  let catsImgDiv = document.querySelector(".catsImgDiv");
  catsImgDiv.innerHTML = "";
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catsImgUrl = data[0].url;
      let catImgEl = document.createElement("img");
      catImgEl.setAttribute("src", `${catsImgUrl}`);
      catImgEl.classList.add("showcase");
      let catsImgDiv = document.querySelector(".catsImgDiv");
      catsImgDiv.appendChild(catImgEl);
    })
    .catch((err) => console.log(err));
}
button.addEventListener("click", fetchPics);
/*
let req = new XMLHttpRequest();
const button = document.querySelector('button');


req.addEventListener("load", function(){
  const data = JSON.parse(this.responseText);
  document.body.append(document.createTextNode(data.data));
});

req.open("GET", "https://quote-garden.herokuapp.com/api/v3/quotes/random");
req.send();
*/

// const p = new Promise(function(resolve, reject){
//     const n = Math.random();
//     if(n >= .5){
//       resolve("yeah"); ///wurde erfolgreich ausgeführt
//     }else{
//       reject("no") /// war nicht erfolgreich // wenn etwas außerhalb des webservers nicht funktioniert// passiert selten
//     }
//   });

//   p.then(
//     (data)
//     (err)
//   );

//   const p = fetch("https://krautipsum.com/api/noun");

//   p.then((response) => {
//     response.status; ///200
//     response.ok; //true
//     return response.json()
//   })
//   .then((data) =>{
//     (data)
//   });
