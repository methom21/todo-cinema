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
