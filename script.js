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

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Toggle dark mode class
    document.body.classList.toggle("dark");

    // Update icon
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    // Force toggle button to match responsive card colors
    const card = document.querySelector(".profile-card");
    if (card) {
      const style = window.getComputedStyle(card);
      themeToggle.style.backgroundColor = style.backgroundColor;
      themeToggle.style.border = style.border;
      themeToggle.style.color = style.color;
    }
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
  let isDown = false,
      startX,
      scrollLeft;

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
