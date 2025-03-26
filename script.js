const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');

let isOpen = false;

function updatePositions() {
    if (isOpen) {
        sidebar.style.left = "0%";
        toggleArrow.style.left = "25%";
    } else {
        sidebar.style.left = "-20%";
        toggleArrow.style.left = "5%";
    }
}

toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
});

// Initialize on page load
updatePositions();
