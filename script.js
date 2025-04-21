fetch('sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar-container').innerHTML = html;
    initSidebarToggle(); // 👈 call setup only after loaded
  });

function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const toggleArrow = document.getElementById('sidebar-toggle');
  const starGlow = document.getElementById('toggle-glow-star');

  if (!sidebar || !toggleArrow || !starGlow) return;

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

