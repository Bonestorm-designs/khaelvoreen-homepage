const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');
const glow = document.getElementById('glow-outline');
const burst = document.getElementById('glow-behind-arrow');

let isOpen = false;

function updatePositions() {
  if (isOpen) {
    sidebar.style.left = "0";
    toggleArrow.style.left = "23.5vw";
    glow.style.left = "26.5vw";
    burst.style.left = "26.5vw";
  } else {
    sidebar.style.left = "-20vw";
    toggleArrow.style.left = "3.5vw";
    glow.style.left = "5vw";
    burst.style.left = "5vw";
  }
}

toggleArrow.addEventListener("click", () => {
  isOpen = !isOpen;
  updatePositions();
});

// Init
updatePositions();
