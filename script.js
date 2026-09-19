// =========================================================
// KRITI GUPTA — LIGHT / DARK MODE
// =========================================================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// Toggle theme
if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        themeToggle.textContent =
            isDark ? "☀" : "☾";

    });

}