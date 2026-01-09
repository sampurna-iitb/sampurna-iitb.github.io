(function() {
    const root = document.documentElement;

    // Set year in footer
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Theme toggle (dark/light) with persistence
    const THEME_KEY = "sampurna_theme";
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
        root.setAttribute("data-theme", saved);
    }

    const btn = document.getElementById("themeToggle");
    if (btn) {
        btn.addEventListener("click", () => {
            const current = root.getAttribute("data-theme") || "dark";
            const next = current === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            localStorage.setItem(THEME_KEY, next);
        });
    }

    // Prevent clicks on placeholder links (href="#", aria-disabled="true")
    document.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
        if (a.getAttribute("aria-disabled") === "true") {
            e.preventDefault();
        }
    });
})();