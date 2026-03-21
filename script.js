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
// THEME TOGGLE (BLOG STYLE PILL)
// =========================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Toggle dark mode
    document.body.classList.toggle("dark");

    // Update pill icon exactly like blog.html
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
