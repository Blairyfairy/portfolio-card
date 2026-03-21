// =========================
// Portfolio Card JS
// =========================

// Follow / Connect button
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("following");

  if (followBtn.classList.contains("following")) {
    btnText.textContent = "Connected ✓";
  } else {
    btnText.textContent = "Connect";
  }
});

// Theme Toggle (BlairPage style)
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  // Toggle dark class on body
  document.body.classList.toggle("dark");

  // Update button text to moon/sun
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // light mode indicator
  } else {
    themeToggle.textContent = "🌙"; // dark mode indicator
  }

  // Optional: smooth gradient & glass background transition
  document.body.style.transition = "background 0.7s ease";
});

// Optional: Persist theme across reloads
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("blairTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }

  // Listen to toggle and save preference
  themeToggle.addEventListener("click", () => {
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("blairTheme", theme);
  });
});
