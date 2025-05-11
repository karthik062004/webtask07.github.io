// Function to toggle menu visibility
function toggleMenu() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

// Theme toggle function
const themeToggle = document.getElementById('theme-toggle');

// Check the user's preference from localStorage (if it exists)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Event listener for the toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});