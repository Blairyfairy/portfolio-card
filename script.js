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
  // Toggle dark class on body
  document.body.classList.toggle("dark");

  // Update toggle button text like blog.html
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  // Remove glass/frosted effect on theme button to match blog.html
  themeToggle.style.background = "none";
  themeToggle.style.border = "1px solid var(--glass-border)";
  themeToggle.style.backdropFilter = "none";
  themeToggle.style.color = "var(--text-light)";

  // Set body dark/light colors exactly like blog.html
  if (document.body.classList.contains("dark")) {
    document.body.style.background = "linear-gradient(135deg, #000000ff 0%, #291528ff 30%, #3a3e3bff 60%, #9e829cff 85%, #f0eff4ff 100%)";
    document.body.style.color = "var(--text-light)";
  } else {
    document.body.style.background = "linear-gradient(135deg, #000000ff 0%, #291528ff 30%, #3a3e3bff 60%, #9e829cff 85%, #f0eff4ff 100%)";
    document.body.style.color = "var(--text-light)";
  }

  // Keep connect button exactly as original (gradient, hover)
  // Only change text color for readability if needed
  btnText.style.color = "#f0eff4"; // matches blog light text
});

// ===== THEME TOGGLE (FORCED CSS CONTROL) =====
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Update icon only
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  // Remove any previous inline style overrides (force CSS control)
  themeToggle.style.background = "" !important;
  themeToggle.style.border = "" !important;
  themeToggle.style.backdropFilter = "" !important;
  themeToggle.style.color = "" !important;

  // Keep follow button text readable
  btnText.style.color = "#f0eff4"; // matches blog light text
});


// ===== THEME TOGGLE FIX (APPEND) =====
const themeToggle = document.getElementById("themeToggle");

// Remove any previous conflicting listeners if necessary
themeToggle.replaceWith(themeToggle.cloneNode(true));
const newThemeToggle = document.getElementById("themeToggle");

newThemeToggle.addEventListener("click", () => {
  // Toggle dark mode class on body
  document.body.classList.toggle("dark");

  // Update the button icon
  newThemeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

