// ===== FOLLOW BUTTON =====
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

if (followBtn && btnText) {
  followBtn.addEventListener("click", () => {
    // Toggle visual "following" state
    followBtn.classList.toggle("following");
    // Keep button text constant
    btnText.textContent = "Connect";
  });
}

// ===== HERO VIDEO =====
const heroVideo = document.getElementById("heroVideo");
if (heroVideo) {
  heroVideo.addEventListener("click", () => {
    heroVideo.paused ? heroVideo.play() : heroVideo.pause();
  });
}

// ===== LIGHT/DARK THEME TOGGLE =====
const themeToggleBtn = document.getElementById("themeToggle");

if (themeToggleBtn) {
  const applyToggleStyle = () => {
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
      const styles = window.getComputedStyle(profileCard);
      themeToggleBtn.style.backgroundColor = styles.backgroundColor;
      themeToggleBtn.style.border = styles.border;
      themeToggleBtn.style.color = styles.color;
    }
  };

  // Initial sync with card style on page load
  applyToggleStyle();

  themeToggleBtn.addEventListener("click", () => {
    // Toggle dark class on body
    document.body.classList.toggle("dark");

    // Toggle dark class on responsive card to match blog behavior
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
      profileCard.classList.toggle("dark");
    }

    // Update toggle button icon
    themeToggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    // Apply toggle button style to match the card's current state
    applyToggleStyle();
  });
}

// ===== MATRIX CARD TOGGLE =====
document.querySelectorAll('.card-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.matrix-card');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    card.classList.toggle('open');
  });
});
