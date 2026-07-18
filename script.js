document.addEventListener("DOMContentLoaded", function () {

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn) {

searchBtn.addEventListener("click", function () {

const searchValue = searchInput.value.trim().toLowerCase();

if (searchValue === "roblox") {

window.location.href = "game.html";

} else if (searchValue === "") {

alert("Please enter a game name.");

} else {

alert("Game not found.");

}

});

}

});
