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

  // Keep follow button gradient intact — only adjust text color for readability
  if (document.body.classList.contains("dark")) {
    btnText.style.color = "#f0eff4"; // light text in dark mode
  } else {
    btnText.style.color = "#f0eff4"; // maintain original light color in light mode
  }
});
