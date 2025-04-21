window.addEventListener("DOMContentLoaded", () => {
  const waitForSidebar = setInterval(() => {
    const sidebar = document.getElementById('sidebar');
    const toggleArrow = document.getElementById('sidebar-toggle');
    const starGlow = document.getElementById('toggle-glow-star');

    if (sidebar && toggleArrow && starGlow) {
      clearInterval(waitForSidebar);

      // Load saved state from localStorage
      let isOpen = localStorage.getItem("sidebarOpen") === "true";

      function updatePositions() {
        if (isOpen) {
          sidebar.style.left = "0";
          toggleArrow.style.left = "23.5vw";   // aligns with sidebar width
          starGlow.style.left = "26.5vw";      // positioned just past the toggle
          toggleArrow.style.backgroundImage = "url('openside.png')";
        } else {
          sidebar.style.left = "-25vw";        // matches full sidebar width
          toggleArrow.style.left = "3.5vw";    // floats to the edge
          starGlow.style.left = "5vw";         // glow centered near toggle
          toggleArrow.style.backgroundImage = "url('closedside.png')";
        }
      }

      // Handle toggle click
      toggleArrow.addEventListener("click", () => {
        isOpen = !isOpen;
        localStorage.setItem("sidebarOpen", isOpen);
        updatePositions();
      });

      updatePositions(); // initial load
    }
  }, 50);
});

