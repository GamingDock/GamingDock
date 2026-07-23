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
const languageSelect =
document.getElementById("languageSelect");

languageSelect.addEventListener("change", function () {

    const lang = this.value;

    if (lang === "ur") {

        document.getElementById("navHome").textContent = "ہوم";
        document.getElementById("navGames").textContent = "گیمز";
        document.getElementById("navCategories").textContent = "کیٹیگریز";
        document.getElementById("navNews").textContent = "نیوز";
        document.getElementById("navAbout").textContent = "ہمارے بارے میں";

        document.getElementById("heroTitle").textContent =
        "حتمی گیمنگ دنیا میں خوش آمدید";

        document.getElementById("heroText").textContent =
        "ایپک ایڈونچرز، ریسنگ تجربات، ہارر کہانیاں اور نئی نسل کا گیمنگ مواد دریافت کریں۔";

    }

    else {

        document.getElementById("navHome").textContent = "Home";
        document.getElementById("navGames").textContent = "Games";
        document.getElementById("navCategories").textContent = "Categories";
        document.getElementById("navNews").textContent = "News";
        document.getElementById("navAbout").textContent = "About";

        document.getElementById("heroTitle").textContent =
        "ENTER THE ULTIMATE GAMING WORLD";

        document.getElementById("heroText").textContent =
        "Discover epic adventures, racing experiences, horror stories and next-generation gaming content.";

    }

});
const loginBtn =
document.getElementById("loginBtn");

const savedUsername =
localStorage.getItem("username");

if(savedUsername && loginBtn){

    loginBtn.innerHTML =
    "👤 " + savedUsername;

}
document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    const username = localStorage.getItem("username");
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true" && username) {

        loginBtn.innerText = username;
        loginBtn.removeAttribute("onclick");

        logoutBtn.style.display = "inline-block";

    }

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("email");

        location.reload();

    });

});
