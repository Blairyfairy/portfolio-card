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
    // toggle theme
    document.body.classList.toggle("dark");

    // update icon
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
