window.addEventListener("DOMContentLoaded", () => {
  const waitForSidebar = setInterval(() => {
    const sidebar = document.getElementById('sidebar');
    const toggleArrow = document.getElementById('sidebar-toggle');
    const starGlow = document.getElementById('toggle-glow-star');

    if (sidebar && toggleArrow && starGlow) {
      clearInterval(waitForSidebar);

      // Load state from localStorage
      let isOpen = localStorage.getItem("sidebarOpen") === "true";

      function updatePositions() {
        if (isOpen) {
          sidebar.style.left = "0";
          toggleArrow.style.left = "23.5vw";
          starGlow.style.left = "26.5vw";
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
        localStorage.setItem("sidebarOpen", isOpen); // 💾 Save preference
        updatePositions();
      });

      updatePositions();
    }
  }, 50);
});
