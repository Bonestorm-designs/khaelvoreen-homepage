const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');

// Match this to the peeking position in your CSS (e.g. -70%)
const closedPosition = "-77%";
const openPosition = "0%";

toggleArrow.addEventListener('click', function () {
    if (sidebar.style.left === openPosition) {
        sidebar.style.left = closedPosition;
    } else {
        sidebar.style.left = openPosition;
    }
});
