const alcBtn = document.getElementById("alc-button")
const nonalcBtn = document.getElementById("non-alc-button")
const directions = document.getElementById("directions")
var drinkName = document.getElementById("drink-name")
var drinkImage = document.getElementById("drink-img")
var drinkIngr = document.getElementById("drink-ingr")
var drinkInst = document.getElementById("drink-inst")
var drinkArray = [];

alcBtn.addEventListener("click", getAlchoholic)
nonalcBtn.addEventListener("click", getNonAlchoholic)

//chooses a random alcoholic drink
function getAlchoholic(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then(function (foo){
            return foo.json();
        })
        .then(function(data){
            var hundredDrinks = data.drinks
            var randomIndex = Math.floor(Math.random() * hundredDrinks.length)
            var randomDrink = hundredDrinks[randomIndex]
            var randomId = randomDrink.idDrink
            fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + randomId)
                .then(function (data){
                    return data.json();
                })
                .then(function(data){
                    var drinkObject = data.drinks[0]
                    //converts the object into an array and splices the ingredients and measurements
                    var bigArray = Object.entries(drinkObject)
                    var ingrSplice = bigArray.splice(17, 15)
                    var measureSplice = bigArray.splice(17, 15)
                    //concats the spliced arrays and removes the ingredient number
                    var ingrArray = [].concat.apply([],ingrSplice)
                    for (i= 0; i <= ingrArray.length; i += 1){
                        ingrArray.splice(i, 1);
                    }
                    var measureArray = [].concat.apply([],measureSplice)
                    for (i= 0; i <= measureArray.length; i += 1){
                        measureArray.splice(i, 1);
                    }
                    displayDrink(drinkObject, measureArray, ingrArray)
                })
        }
    )}
//chooses a random non alcoholic drink
function getNonAlchoholic(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
        .then(function (foo){
            return foo.json();
        })
        .then(function(data){
            var hundredDrinks = data.drinks
            var randomIndex = Math.floor(Math.random() * hundredDrinks.length)
            var randomDrink = hundredDrinks[randomIndex]
            var randomId = randomDrink.idDrink
            fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + randomId)
                .then(function (data){
                    return data.json();
                })
                .then(function(data){
                    var drinkObject = data.drinks[0]
                    //converts the object into an array and splices the ingredients and measurements
                    var bigArray = Object.entries(drinkObject)
                    var ingrSplice = bigArray.splice(17, 15)
                    var measureSplice = bigArray.splice(17, 15)
                    //concats the spliced arrays and removes the ingredient number
                    var ingrArray = [].concat.apply([],ingrSplice)
                    for (i= 0; i <= ingrArray.length; i += 1){
                        ingrArray.splice(i, 1);
                    }
                    var measureArray = [].concat.apply([],measureSplice)
                    for (i= 0; i <= measureArray.length; i += 1){
                        measureArray.splice(i, 1);
                    }
                    displayDrink(drinkObject, measureArray, ingrArray)
                })
        }
    )}

    //drinks the chosen drink
function displayDrink(mainArray, measureArray, ingrArray){
    //erases the the previous drink
    document.querySelector("#drink-name").innerHTML = ""
    document.querySelector("#drink-img").innerHTML = ""
    document.querySelector("#drink-ingr").innerHTML = ""
    document.querySelector("#drink-inst").innerHTML = ""
    //places the drink name
    drinkName.innerText = mainArray.strDrink
    //places drink image
    drinkImage.setAttribute("src", mainArray.strDrinkThumb)
    //places drink measurements and ingredients
     for (i = 0; i <= measureArray.length; i++){
         if (measureArray[i] && ingrArray[i]){
             var list = document.createElement("li")
             list.innerText = measureArray[i] + " " + ingrArray[i]
             document.querySelector("#drink-ingr").appendChild(list)
         }
     }
    //places drink instructions
    drinkInst.innerText = "Directions: " + mainArray.strInstructions
}
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
const firstMovie = document.querySelector("#firstmovie.collection-item")
const secondMovie = document.querySelector("#secondmovie")
const thirdMovie = document.querySelector("#thirdtmovie")
const fourthtMovie = document.querySelector("#fourthmovie")
const fifthMovie = document.querySelector("#fifthmovie")
const sixthMovie = document.querySelector("#sixthmovie")
const firstPlot = document.querySelector("#firstplot")
const firstRated = document.querySelector("#firstrated")
const firstGenre = document.querySelector("#firstgenre")
const firstTitle = document.querySelector("#firsttitle")
const firstPoster = document.querySelector("#firstposter")
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
listBtn.addEventListener("click", function(){
  fetch("http://www.omdbapi.com/?apikey=b19732b0&t=" + inputfield.value)
    .then(function (foo) {
      return foo.json();
    })
    .then(function (foo) {
      console.log(foo.Title);
      firstTitle.textContent= foo.Title
      console.log(foo.Plot)
      firstMovie.append(firstTitle)
      
})

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
})
