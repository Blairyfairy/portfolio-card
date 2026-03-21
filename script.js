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

  // tactile press animation
  themeToggle.style.transform = "scale(0.92)";
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)";
  }, 120);

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
