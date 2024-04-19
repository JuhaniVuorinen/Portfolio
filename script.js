function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let darkMode = false;

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  darkMode = !darkMode;
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.textContent = darkMode ? '🌞' : '🌙';
}
