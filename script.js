// ===== FOLLOW BUTTON =====
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

if (followBtn && btnText) {
  followBtn.addEventListener("click", () => {
    followBtn.classList.toggle("following");
    btnText.textContent = "Connect"; // keep button text constant
  });
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
const profileCard = document.querySelector(".profile-card");

function syncToggleButton() {
  if (!themeToggle || !profileCard) return;

  // Determine if dark mode is active
  const isDark = document.body.classList.contains("dark");

  // Update icon
  themeToggle.textContent = isDark ? "☀️" : "🌙";

  // Match toggle button background and border to profile card
  const cardStyles = window.getComputedStyle(profileCard);
  themeToggle.style.background = cardStyles.backgroundColor;
  themeToggle.style.border = cardStyles.border;
  themeToggle.style.color = cardStyles.color;
}

// Initialize toggle button state on page load
syncToggleButton();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Toggle dark mode class on body and profile card
    document.body.classList.toggle("dark");
    if (profileCard) profileCard.classList.toggle("dark");

    // Sync the toggle button to match card immediately
    syncToggleButton();
  });
}

// ===== HERO VIDEO =====
const heroVideo = document.getElementById("heroVideo");
if (heroVideo) {
  heroVideo.addEventListener("click", () => {
    heroVideo.paused ? heroVideo.play() : heroVideo.pause();
  });
}

// ===== LOAD IMAGES =====
const carousel = document.getElementById("galleryCarousel");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

if (carousel && lightbox && lightboxImg) {
  fetch('images.json')
    .then(res => res.json())
    .then(images => {
      const shuffled = images.sort(() => Math.random() - 0.5);
      shuffled.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => {
          lightboxImg.src = src;
          lightbox.classList.add("show");
        };
        carousel.appendChild(img);
      });
    });

  // ===== LIGHTBOX CLICK =====
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  // ===== DRAG SCROLL =====
  let isDown = false, startX, scrollLeft;

  carousel.addEventListener('mousedown', e => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // ===== TOUCH EVENTS =====
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // ===== ARROWS =====
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  if (arrowLeft) {
    arrowLeft.addEventListener("click", () => {
      carousel.scrollBy({ left: -220, behavior: 'smooth' });
    });
  }

  if (arrowRight) {
    arrowRight.addEventListener("click", () => {
      carousel.scrollBy({ left: 220, behavior: 'smooth' });
    });
  }
}
