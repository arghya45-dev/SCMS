document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStylesheet.setAttribute('href', `${savedTheme}-theme.css`);
        // Set checkbox state based on saved theme
        themeToggleCheckbox.checked = savedTheme === 'dark';
    } else {
        // Set default theme if no saved theme exists
        themeStylesheet.setAttribute('href', 'light-theme.css');
        themeToggleCheckbox.checked = false;
    }

    // Toggle theme on checkbox change
    themeToggleCheckbox.addEventListener('change', () => {
        const newTheme = themeToggleCheckbox.checked ? 'dark' : 'light';
        themeStylesheet.setAttribute('href', `${newTheme}-theme.css`);
        localStorage.setItem('theme', `${newTheme}`);
    });
});
