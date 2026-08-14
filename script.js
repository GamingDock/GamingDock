document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       GAME COUNT
    ========================= */

    const games = document.querySelectorAll(".game-card");
    const gameCount = document.getElementById("gameCount");

    if (gameCount) {
        gameCount.textContent = games.length;
    }


    /* =========================
       SEARCH ELEMENTS
    ========================= */

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const suggestions = document.getElementById("suggestions");


    /* =========================
       AUTO DETECT GAMES
    ========================= */

    function getGamesList() {

        const gameTitles =
            document.querySelectorAll(".game-card h3");

        let gamesList = [];

        gameTitles.forEach(title => {

            gamesList.push(
                title.textContent.trim()
            );

        });

        return gamesList;
    }


    /* =========================
       SEARCH SUGGESTIONS
    ========================= */

    if (searchInput && suggestions) {

        searchInput.addEventListener("input", function () {

            const value =
                this.value.trim().toLowerCase();

            suggestions.innerHTML = "";

            if (value === "") {
                return;
            }

            const gamesList = getGamesList();

            gamesList.forEach(game => {

                if (
                    game.toLowerCase().includes(value)
                ) {

                    const item =
                        document.createElement("div");

                    item.classList.add(
                        "suggestion-item"
                    );

                    item.textContent = game;

                    item.addEventListener(
                        "click",
                        function () {

                            searchInput.value = game;

                            suggestions.innerHTML = "";

                        }
                    );

                    suggestions.appendChild(item);

                }

            });

        });

    }


    /* =========================
       SEARCH FUNCTION
    ========================= */

    function searchGames() {

        if (!searchInput) return;

        const value =
            searchInput.value.trim().toLowerCase();

        const cards =
            document.querySelectorAll(".game-card");

        let found = false;


        cards.forEach(card => {

            const titleElement =
                card.querySelector("h3");

            if (!titleElement) return;

            const title =
                titleElement.textContent
                .trim()
                .toLowerCase();


            if (
                value === "" ||
                title.includes(value)
            ) {

                card.style.display = "block";

                if (value !== "") {
                    found = true;
                }

            }

            else {

                card.style.display = "none";

            }

        });


        /* Empty Search */

        if (value === "") {

            cards.forEach(card => {

                card.style.display = "block";

            });

            alert("Please enter a game name.");

        }


        /* Game Not Found */

        else if (!found) {

            alert("Game not found.");

            cards.forEach(card => {

                card.style.display = "block";

            });

        }

    }


    /* =========================
       SEARCH BUTTON
    ========================= */

    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchGames
        );

    }


    /* =========================
       ENTER KEY SEARCH
    ========================= */

    if (searchInput) {

        searchInput.addEventListener(
            "keypress",
            function (e) {

                if (e.key === "Enter") {

                    e.preventDefault();

                    searchGames();

                }

            }
        );

    }


    /* =========================
       HIDE SUGGESTIONS
    ========================= */

    document.addEventListener(
        "click",
        function (e) {

            if (
                searchInput &&
                suggestions &&
                !searchInput.contains(e.target) &&
                !suggestions.contains(e.target)
            ) {

                suggestions.innerHTML = "";

            }

        }
    );


    /* =========================
       LANGUAGE
    ========================= */

    const languageSelect =
        document.getElementById("languageSelect");


    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                const lang = this.value;


                /* Urdu */

                if (lang === "ur") {

                    const navHome =
                        document.getElementById("navHome");

                    const navGames =
                        document.getElementById("navGames");

                    const navCategories =
                        document.getElementById("navCategories");

                    const navNews =
                        document.getElementById("navNews");

                    const navAbout =
                        document.getElementById("navAbout");

                    const heroTitle =
                        document.getElementById("heroTitle");

                    const heroText =
                        document.getElementById("heroText");


                    if (navHome)
                        navHome.textContent = "ہوم";

                    if (navGames)
                        navGames.textContent = "گیمز";

                    if (navCategories)
                        navCategories.textContent = "کیٹیگریز";

                    if (navNews)
                        navNews.textContent = "نیوز";

                    if (navAbout)
                        navAbout.textContent =
                            "ہمارے بارے میں";


                    if (heroTitle)
                        heroTitle.textContent =
                            "حتمی گیمنگ دنیا میں خوش آمدید";


                    if (heroText)
                        heroText.textContent =
                            "ایپک ایڈونچرز، ریسنگ تجربات، ہارر کہانیاں اور نئی نسل کا گیمنگ مواد دریافت کریں.";

                }


                /* English */

                else {

                    const navHome =
                        document.getElementById("navHome");

                    const navGames =
                        document.getElementById("navGames");

                    const navCategories =
                        document.getElementById("navCategories");

                    const navNews =
                        document.getElementById("navNews");

                    const navAbout =
                        document.getElementById("navAbout");

                    const heroTitle =
                        document.getElementById("heroTitle");

                    const heroText =
                        document.getElementById("heroText");


                    if (navHome)
                        navHome.textContent = "Home";

                    if (navGames)
                        navGames.textContent = "Games";

                    if (navCategories)
                        navCategories.textContent =
                            "Categories";

                    if (navNews)
                        navNews.textContent = "News";

                    if (navAbout)
                        navAbout.textContent = "About";


                    if (heroTitle)
                        heroTitle.textContent =
                            "ENTER THE ULTIMATE GAMING WORLD";


                    if (heroText)
                        heroText.textContent =
                            "Discover epic adventures, racing experiences, horror stories and next-generation gaming content.";

                }

            }
        );

    }


    /* =========================
       LOGIN
    ========================= */

    const loginBtn =
        document.getElementById("loginBtn");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const savedUsername =
        localStorage.getItem("username");

    const loggedIn =
        localStorage.getItem("loggedIn");


    if (
        loginBtn &&
        loggedIn === "true" &&
        savedUsername
    ) {

        loginBtn.innerText =
            "👤 " + savedUsername;

        loginBtn.removeAttribute("onclick");

        loginBtn.onclick = function () {

            window.location.href =
                "profile.html";

        };

    }


    /* =========================
       LOGOUT BUTTON
    ========================= */

    if (
        logoutBtn &&
        loggedIn === "true" &&
        savedUsername
    ) {

        logoutBtn.style.display =
            "inline-block";

    }


    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "loggedIn"
                );

                localStorage.removeItem(
                    "username"
                );

                localStorage.removeItem(
                    "email"
                );

                location.reload();

            }
        );

    }

});


/* =========================
   CATEGORY FILTER
========================= */

function filterGames(category) {

    const games =
        document.querySelectorAll(".game-card");


    games.forEach(game => {

        if (category === "all") {

            game.style.display = "block";

        }

        else {

            if (
                game.dataset.category === category
            ) {

                game.style.display = "block";

            }

            else {

                game.style.display = "none";

            }

        }

    });

                }
