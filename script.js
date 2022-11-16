let quote = document.querySelector("#text")
function loadData(){
 let Author = "";
 let text = "";
  fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
.then(response => response.json())
.then(data =>{
  
  Author = data.data[0].quoteAuthor;
  text = data.data[0].quoteText;
  author.innerHTML = Author;
  quote.innerHTML = text;
})
}
button.addEventListener('click', loadData);









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