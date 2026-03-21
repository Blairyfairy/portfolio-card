// =========================
// FOLLOW BUTTON
// =========================
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

// =========================
// THEME TOGGLE (MATCH BLOG.HTML)
// =========================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Toggle dark mode on body
    document.body.classList.toggle("dark");

    // Update icon
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    // Optional: add tiny scale animation like blog.html
    themeToggle.style.transform = "scale(0.92)";
    setTimeout(() => {
      themeToggle.style.transform = "scale(1)";
    }, 120); // matches blog.html subtle active press
  });
}
