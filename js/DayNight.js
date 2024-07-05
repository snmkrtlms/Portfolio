document.addEventListener('DOMContentLoaded', (event) => {
    const toggleThemeCheckbox = document.getElementById('toggle-theme');
    const body = document.body;

    // Charger le thème depuis le localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'night-mode') {
            toggleThemeCheckbox.checked = true;
        }
    }

    toggleThemeCheckbox.addEventListener('change', () => {
        if (toggleThemeCheckbox.checked) {
            body.classList.add('night-mode');
            localStorage.setItem('theme', 'night-mode');
        } else {
            body.classList.remove('night-mode');
            localStorage.setItem('theme', 'day-mode');
        }
    });
});
