// =========================
// Portfolio Card JS
// =========================

// --- Follow / Connect button ---
const followBtn = document.getElementById("followBtn");
const btnText = followBtn.querySelector(".btn-text");

followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("following");
  btnText.textContent = followBtn.classList.contains("following") ? "Connected ✓" : "Connect";
});

// --- Theme Toggle (Exact Blog.html Style) ---
const themeToggle = document.getElementById("themeToggle");

// --- Load saved theme from localStorage ---
const savedTheme = localStorage.getItem("blairTheme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

// --- Single click listener for toggle ---
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("blairTheme", isDark ? "dark" : "light");
});

// --- Optional: prevent text shift (blog.html style) ---
// Use same font-family, font-size, line-height as CSS
themeToggle.style.display = "flex";
themeToggle.style.alignItems = "center";
themeToggle.style.justifyContent = "center";
themeToggle.style.fontSize = "1rem"; // Match CSS
themeToggle.style.lineHeight = "1";   // Important for perfect vertical centering
themeToggle.style.padding = "0.4rem 1rem"; // Exact blog.html spacing
