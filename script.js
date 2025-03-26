const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');

const openPosition = "0%";      // Fully slid in
const closedPosition = "77%";   // Docked on the right

toggleArrow.addEventListener('click', function () {
    const currentLeft = getComputedStyle(sidebar).left;

    if (currentLeft === openPosition) {
        sidebar.style.left = closedPosition;
    } else {
        sidebar.style.left = openPosition;
    }
});
