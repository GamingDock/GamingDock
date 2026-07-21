document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const suggestions = document.getElementById("suggestions");

    const gamesList = [
        "Forza Horizon 4",
        "GTA V",
        "Dark Nightmare"
    ];

    /* SEARCH SUGGESTIONS */

    searchInput.addEventListener("input", function () {

        const value = this.value.trim().toLowerCase();

        suggestions.innerHTML = "";

        if (value === "") {
            return;
        }

        gamesList.forEach(game => {

            if (game.toLowerCase().includes(value)) {

                const item = document.createElement("div");

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

    /* SEARCH FUNCTION */

    function searchGames() {

        const value = searchInput.value.trim().toLowerCase();

        const cards = document.querySelectorAll(".game-card");

        let found = false;

        cards.forEach(card => {

            const gameData =
                card.getAttribute("data-game").toLowerCase();

            if (
                value === "" ||
                gameData.includes(value)
            ) {

                card.style.display = "block";

                if (value !== "") {
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

    /* BUTTON CLICK */

    searchBtn.addEventListener("click", searchGames);

    /* ENTER KEY */

    searchInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            searchGames();

        }

    });

    /* CLICK OUTSIDE */

    document.addEventListener("click", function (e) {

        if (
            !searchInput.contains(e.target) &&
            !suggestions.contains(e.target)
        ) {

            suggestions.innerHTML = "";

        }

    });

});
