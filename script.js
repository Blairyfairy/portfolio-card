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
// THEME TOGGLE (BLOG STYLE)
// =========================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Toggle dark mode on body
    document.body.classList.toggle("dark");

    // Update toggle icon exactly like blog.html
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
