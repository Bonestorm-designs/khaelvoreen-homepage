const sidebar = document.getElementById('sidebar');
const toggleArrow = document.getElementById('sidebar-toggle');
const glow = document.getElementById('glow-outline');
const burst = document.getElementById('glow-behind-arrow');

let isOpen = false;

function updatePositions() {
  const isMobile = window.innerWidth <= 768;

  if (isOpen) {
    sidebar.style.left = "0%";
    toggleArrow.style.left = isMobile ? "75%" : "23.5%";
    glow.style.left = isMobile ? "78%" : "26.5%";
    burst.style.left = isMobile ? "78%" : "26.5%";
  } else {
    sidebar.style.left = "-20%";
    toggleArrow.style.left = isMobile ? "3%" : "3.5%";
    glow.style.left = isMobile ? "5%" : "5%";
    burst.style.left = isMobile ? "5%" : "5%";
  }
}

// Recalculate on resize
window.addEventListener("resize", updatePositions);

// Toggle open/close
toggleArrow.addEventListener("click", () => {
  isOpen = !isOpen;
  updatePositions();
});

// Initialize on load
updatePositions();
