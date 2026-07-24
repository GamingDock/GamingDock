function addFavorite(game){

const loggedIn =
localStorage.getItem("loggedIn");

if(loggedIn !== "true"){

alert("Please login first.");
return;

}

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

if(!favorites.includes(game)){

favorites.push(game);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

alert(game + " added to favorites ❤️");

}
else{

alert("Already in favorites ❤️");

}

}
