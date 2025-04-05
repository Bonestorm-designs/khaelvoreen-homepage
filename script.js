const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');
const starGlow = document.getElementById('toggle-glow-star');

let isOpen = false;

function updatePositions() {
  if (isOpen) {
    sidebar.style.left = "0";
    toggleArrow.style.left = "23.5vw";
   starGlow.style.left = isOpen ? "26.5vw" : "5vw";
    toggleArrow.style.backgroundImage = "url('openside.png')";
  } else {
    sidebar.style.left = "-20vw";
    toggleArrow.style.left = "3.5vw";
    starGlow.style.left = "5vw";
    toggleArrow.style.backgroundImage = "url('closedside.png')";
  }
}

toggleArrow.addEventListener("click", () => {
  isOpen = !isOpen;
  updatePositions();
});

window.addEventListener("DOMContentLoaded", updatePositions);
