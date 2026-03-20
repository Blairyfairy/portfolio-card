// ===== FOLLOW BUTTON =====
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

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  // Toggle the dark class on <body>
  document.body.classList.toggle("dark");

  // Update the toggle button text exactly like gallery/blog
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  // Optional: if you want to update followBtn colors to match dark/light mode
  // when body toggles, you can do something like this:
  if (document.body.classList.contains("dark")) {
    followBtn.style.background = "var(--glass-bg)"; // same as gallery/blog glass button
    followBtn.style.border = "1px solid var(--glass-border)";
    btnText.style.color = "#f0eff4"; // light text in dark mode
  } else {
    followBtn.style.background = "var(--glass-bg)";
    followBtn.style.border = "1px solid var(--glass-border)";
    btnText.style.color = "#000000"; // dark text in light mode
  }
});
