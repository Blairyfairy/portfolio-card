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

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // tight snap (matches blog behavior)
  themeToggle.style.transform = "scale(0.88)";
  requestAnimationFrame(() => {
    themeToggle.style.transform = "scale(1)";
  });

  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
