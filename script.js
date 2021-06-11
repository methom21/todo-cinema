var watchListForm = document.querySelector("watchList-form");
var movieText = document.querySelector("movie-text");
var toWatch = document.querySelector("watchListItems");
var carouselEl = document.querySelector(".carousel");
var movieModal = document.querySelector(".collapsible");
var gladiatorEl = document.querySelector("#gladiatorPlot");
var departedEl = document.querySelector("#departedPlot");
var hot_tubEL = document.querySelector("#hot-tubPlot");
var guardiansEl = document.querySelector("#guardiansPlot");
var jjEl = document.querySelector("#jjPlot");
var shutterEl= document.querySelector("#shutterPlot");

function gladiatorInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt0172495")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  gladiatorEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}

function departedInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt0144048")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  departedEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function hottubInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt1231587")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  hot_tubEL.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function guardiansInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt2015381")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  guardiansEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function jjInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt0068762")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  jjEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function shutterInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt1130884")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  shutterEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
//Here is your key: b19732b0
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b19732b0



movieModal.addEventListener("click", shutterInfo)
movieModal.addEventListener("click", guardiansInfo)
movieModal.addEventListener("click", gladiatorInfo)
movieModal.addEventListener("click", jjInfo)
movieModal.addEventListener("click", hottubInfo)
movieModal.addEventListener("click", departedInfo)
