const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');

let isOpen = false;

function updatePositions() {
    if (isOpen) {
        sidebar.style.left = "0%";
   toggleArrow.style.left = isOpen ? "25%" : "5%";
document.getElementById('glow-behind-arrow').style.left = isOpen ? "25%" : "5%";
document.getElementById('glow-outline').style.left = isOpen ? "25%" : "5%";

}

toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
});

// Initialize on page load
updatePositions();
