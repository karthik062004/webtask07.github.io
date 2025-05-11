const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
.dark-mode {
    background: #2C3E50;
    color: white;
}

.dark-mode .course-card {
    background: #34495E;
    color: white;
}

.dark-mode .progress-bar .fill {
    background: #F1C40F;
}
`;
document.head.appendChild(style);