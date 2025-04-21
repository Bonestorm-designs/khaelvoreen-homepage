function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const toggleArrow = document.getElementById('sidebar-toggle');
  const starGlow = document.getElementById('toggle-glow-star');

  if (!sidebar || !toggleArrow || !starGlow) {
    console.warn("Sidebar toggle elements not found.");
    return;
  }

  // Sidebar and toggle sizes
  const SIDEBAR_WIDTH = 25;        // in vw
  const TOGGLE_LEFT_CLOSED = 3.5;  // in vw
  const ALIGN_OFFSET = 2.1;        // 👈 nudged to visually center sidebar edge to toggle

  let isOpen = localStorage.getItem("sidebarOpen") === "true";

  function updatePositions() {
    if (isOpen) {
      sidebar.style.left = "0";
      toggleArrow.style.left = `${SIDEBAR_WIDTH - 1.5}vw`; // 23.5vw
      starGlow.style.left = `${SIDEBAR_WIDTH + 1.5}vw`;    // 26.5vw
      toggleArrow.style.backgroundImage = "url('openside.png')";
    } else {
      // Shift sidebar a little more right to align edge with toggle center
      const closedLeft = -(SIDEBAR_WIDTH - TOGGLE_LEFT_CLOSED - ALIGN_OFFSET);
      sidebar.style.left = `${closedLeft}vw`;              // ≈ -19.4vw
      toggleArrow.style.left = `${TOGGLE_LEFT_CLOSED}vw`;  // 3.5vw
      starGlow.style.left = "5vw";
      toggleArrow.style.backgroundImage = "url('closedside.png')";
    }
  }

  toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    localStorage.setItem("sidebarOpen", isOpen);
    updatePositions();
  });

  updatePositions(); // On load
}
