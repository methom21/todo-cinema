const URL = "http://www.omdbapi.com/?apikey=";
const key = "b19732b0";
const inputfield = document.getElementById("search");
const formEl = document.querySelector(".forms");
const movietitleEL = document.querySelector("#movietitle");
const posterEl = document.querySelector("#poster");
const ratedEl = document.querySelector("#rated");
const genreEl = document.querySelector("#genre");
const plotEl = document.querySelector("#plot");
const ratingsEl = document.querySelector("#rating");
const listBtn = document.querySelector("#addtolist");

function movieSearch(e) {
  e.preventDefault();
  fetch("http://www.omdbapi.com/?apikey=b19732b0&t=" + inputfield.value)
    .then(function (foo) {
      return foo.json();
    })
    .then(function (foo) {
      console.log(foo.Title);
      movietitleEL.textContent = foo.Title;
      posterEl.setAttribute("src", foo.Poster);
      ratedEl.textContent = foo.Rated;
      genreEl.textContent = foo.Genre;
      plotEl.textContent = foo.Plot;
      // ratingsEl.textContent = foo.Ratings
      listBtn.classList.remove("hidden");
    });
}

formEl.addEventListener("submit", movieSearch);
function movieToList(e) {
  

}
listBtn.addEventListener("click", )
