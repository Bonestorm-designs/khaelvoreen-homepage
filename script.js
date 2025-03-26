const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');

const closedPosition = "77%";
const openPosition = "0%";

toggleArrow.addEventListener("click", function () {
    const currentLeft = getComputedStyle(sidebar).left;

    if (currentLeft === openPosition) {
        sidebar.style.left = closedPosition;
    } else {
        sidebar.style.left = openPosition;
    }
});
