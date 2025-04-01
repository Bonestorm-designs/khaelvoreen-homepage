document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById('sidebar');
  const toggleArrow = document.getElementById('sidebar-toggle');
  const glow = document.getElementById('glow-outline');
  const burst = document.getElementById('glow-behind-arrow');

  let isOpen = false;

function updatePositions() {
    if (isOpen) {
        sidebar.style.left = "0vw";
        toggleArrow.style.left = "23.5vw";
        glow.style.left = "26.5vw";
        burst.style.left = "26.5vw";
        toggleArrow.style.clipPath = "polygon(100% 0%, 20% 50%, 100% 100%)"; // ⬅️ left
    } else {
        sidebar.style.left = "-20vw";
        toggleArrow.style.left = "3.5vw";
        glow.style.left = "5vw";
        burst.style.left = "5vw";
        toggleArrow.style.clipPath = "polygon(0% 0%, 80% 50%, 0% 100%)"; // ➡️ right
    }
}
  
  toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
  });

  window.addEventListener('resize', updatePositions);
  updatePositions(); // initial load
});
