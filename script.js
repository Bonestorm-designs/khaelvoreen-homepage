document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById('sidebar');
  const toggleArrow = document.getElementById('sidebar-toggle');
  const glow = document.getElementById('glow-outline');
  const burst = document.getElementById('glow-behind-arrow');

  let isOpen = false;

  function updatePositions() {
    if (isOpen) {
      sidebar.classList.add('open');
      sidebar.style.left = "0";
      toggleArrow.style.left = window.innerWidth <= 768 ? "68vw" : "23.5vw";
      glow.style.left = window.innerWidth <= 768 ? "72vw" : "26.5vw";
      burst.style.left = window.innerWidth <= 768 ? "72vw" : "26.5vw";
    } else {
      sidebar.classList.remove('open');
      sidebar.style.left = window.innerWidth <= 768 ? "-70vw" : "-20vw";
      toggleArrow.style.left = "3.5vw";
      glow.style.left = "5vw";
      burst.style.left = "5vw";
    }
  }

  toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    updatePositions();
  });

  window.addEventListener('resize', updatePositions);
  updatePositions(); // initial load
});
