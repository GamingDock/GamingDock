document.addEventListener("DOMContentLoaded", function () {

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {

const searchValue = searchInput.value.trim().toLowerCase();

const games = document.querySelectorAll(".game-card");

let found = false;

games.forEach(function(game){

const gameName = game.getAttribute("data-game");

if (
searchValue === "" ||
gameName.includes(searchValue)
){

game.style.display = "block";

if(searchValue !== ""){
found = true;
}

}else{

game.style.display = "none";

}

});

if(searchValue === ""){

alert("Please enter a game name.");

}

else if(!found){

alert("Game not found.");

}

});

});
