const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');
const glow = document.getElementById('glow-outline');
const burst = document.getElementById('glow-behind-arrow');

let isOpen = false;

function updatePositions() {
    if (isOpen) {
        sidebar.style.left = "0%";
        toggleArrow.style.left = "25%";
        glow.style.left = "25%";
        burst.style.left = "25%";
    } else {
        sidebar.style.left = "-20%";
        toggleArrow.style.left = "5%";
        glow.style.left = "5%";
        burst.style.left = "5%";
    }
}

toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
});

// Initialize position
updatePositions();
