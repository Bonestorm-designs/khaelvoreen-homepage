const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');
const glow = document.getElementById('glow-outline');
const burst = document.getElementById('glow-behind-arrow');

let isOpen = false;

function updatePositions() {
  const isMobile = window.innerWidth <= 768;

  if (isOpen) {
    sidebar.style.left = "0";

    // Adjust the arrow + glow for mobile and desktop
    if (isMobile) {
      toggleArrow.style.left = "80vw";
      glow.style.left = "83vw";
      burst.style.left = "83vw";
    } else {
      toggleArrow.style.left = "23.5%";
      glow.style.left = "26.5%";
      burst.style.left = "26.5%";
    }
  } else {
    sidebar.style.left = "-20%";

    // Closed position
    toggleArrow.style.left = "3.5%";
    glow.style.left = "5%";
    burst.style.left = "5%";
  }
}

// Run on page load
updatePositions();

// Toggle arrow click
toggleArrow.addEventListener("click", () => {
  isOpen = !isOpen;
  updatePositions();
});

// Recalculate on resize
window.addEventListener("resize", updatePositions);
