function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const toggleArrow = document.getElementById('sidebar-toggle');
  const starGlow = document.getElementById('toggle-glow-star');

  if (!sidebar || !toggleArrow || !starGlow) {
    console.warn("Sidebar toggle elements not found.");
    return;
  }

  let isOpen = localStorage.getItem("sidebarOpen") === "true";

  function updatePositions() {
    sidebar.style.left = isOpen ? "0" : "-25vw";
    toggleArrow.style.left = isOpen ? "23.5vw" : "3.5vw";
    starGlow.style.left = isOpen ? "26.5vw" : "5vw";
    toggleArrow.style.backgroundImage = `url('${isOpen ? 'openside.png' : 'closedside.png'}')`;
  }

  toggleArrow.addEventListener("click", () => {
    isOpen = !isOpen;
    localStorage.setItem("sidebarOpen", isOpen);
    updatePositions();
  });

  updatePositions();
}


