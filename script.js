const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');

let isOpen = false;

function updatePositions() {
    if (isOpen) {
        sidebar.style.left = "0%";
        toggleArrow.style.left = "25%"; // Moves arrow with the sidebar
    } else {
        sidebar.style.left = "-75%";
        toggleArrow.style.left = "0"; // Resets arrow to edge
    }
}

toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
});

// Initialize on page load
updatePositions();
