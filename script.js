// Gaming Dock Script

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    const categories = document.querySelectorAll(".category");

    // Search Button
    if (searchBtn) {
        searchBtn.addEventListener("click", () => {

            const searchText = searchInput.value.trim();

            if (searchText === "") {
                alert("Please enter a game name.");
                return;
            }

            alert(`Search feature is ready.\nYou searched for: ${searchText}`);
        });
    }

    // Category Buttons
    categories.forEach(category => {

        category.addEventListener("click", () => {

            const categoryName = category.textContent.trim();

            alert(`${categoryName} category selected.\nGames will appear here when added.`);
        });

    });

    console.log("Gaming Dock Loaded Successfully");

});
