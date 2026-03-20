// ==============================
// FOLLOW BUTTON TOGGLE
// ==============================
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

if (followBtn && btnText) {
  followBtn.addEventListener("click", () => {
    followBtn.classList.toggle("following");

    if (followBtn.classList.contains("following")) {
      btnText.textContent = "Connected ✓";
    } else {
      btnText.textContent = "Connect";
    }
  });
}

// ==============================
// LIGHT/DARK THEME TOGGLE MATCHING BLOG/GALLERY
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  // Set initial icon based on body class
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    // Toggle button icon
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    // Smooth transition for elements
    document.querySelectorAll(
      ".top-bar, .profile-card, .theme-btn, .profile-img, .social-links, .follow-btn"
    ).forEach(el => {
      el.style.transition = "all 0.5s ease";
    });
  });
});
