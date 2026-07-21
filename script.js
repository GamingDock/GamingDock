document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const suggestions = document.getElementById("suggestions");

    /* Auto Detect Games */

    function getGamesList() {

        const gameTitles =
        document.querySelectorAll(".game-card h3");

        let games = [];

        gameTitles.forEach(title => {

            games.push(title.textContent.trim());

        });

        return games;

    }

    /* Suggestions */

    searchInput.addEventListener("input", function () {

        const value =
        this.value.trim().toLowerCase();

        suggestions.innerHTML = "";

        if (value === "") return;

        const gamesList = getGamesList();

        gamesList.forEach(game => {

            if (
                game.toLowerCase().includes(value)
            ) {

                const item =
                document.createElement("div");

                item.classList.add("suggestion-item");

                item.textContent = game;

                item.addEventListener("click", function () {

                    searchInput.value = game;

                    suggestions.innerHTML = "";

                });

                suggestions.appendChild(item);

            }

        });

    });

    /* Search */

    function searchGames() {

        const value =
        searchInput.value.trim().toLowerCase();

        const cards =
        document.querySelectorAll(".game-card");

        let found = false;

        cards.forEach(card => {

            const title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

            if (
                value === "" ||
                title.includes(value)
            ) {

                card.style.display = "block";

                if(value !== ""){
                    found = true;
                }

            } else {

                card.style.display = "none";

            }

        });

        if (value === "") {

            cards.forEach(card => {

                card.style.display = "block";

            });

            alert("Please enter a game name.");

        }

        else if (!found) {

            alert("Game not found.");

            cards.forEach(card => {

                card.style.display = "block";

            });

        }

    }

    /* Search Button */

    searchBtn.addEventListener(
        "click",
        searchGames
    );

    /* Enter Key */

    searchInput.addEventListener(
        "keypress",
        function (e) {

            if (e.key === "Enter") {

                e.preventDefault();

                searchGames();

            }

        }
    );

    /* Hide Suggestions */

    document.addEventListener(
        "click",
        function (e) {

            if (
                !searchInput.contains(e.target) &&
                !suggestions.contains(e.target)
            ) {

                suggestions.innerHTML = "";

            }

        }
    );

});
