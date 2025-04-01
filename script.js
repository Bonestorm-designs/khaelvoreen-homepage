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
  toggleArrow.style.clipPath = "polygon(100% 20%, 70% 0%, 0% 50%, 70% 100%, 100% 80%, 85% 50%)"; // Flipped left
  toggleArrow.style.transform = "rotate(180deg)";
} else {
  sidebar.style.left = "-20vw";
  toggleArrow.style.left = "3.5vw";
  glow.style.left = "5vw";
  burst.style.left = "5vw";
  toggleArrow.style.clipPath = "polygon(0% 20%, 30% 0%, 100% 50%, 30% 100%, 0% 80%, 15% 50%)"; // Pointing right
  toggleArrow.style.transform = "rotate(0deg)";
}
  
  toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
  });

  window.addEventListener('resize', updatePositions);
  updatePositions(); // initial load
});
