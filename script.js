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

// ===== THEME TOGGLE =====
const themeToggleBtn = document.getElementById("themeToggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    // Toggle dark class on body
    document.body.classList.toggle("dark");

    // Update sun/moon icon
    themeToggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    // Force toggle button to match responsive element (.profile-card)
    const card = document.querySelector(".profile-card");
    if (card) {
      const computed = window.getComputedStyle(card);
      // Match background color
      themeToggleBtn.style.backgroundColor = computed.backgroundColor;
      // Match border style
      themeToggleBtn.style.border = computed.border;
      // Match text color
      themeToggleBtn.style.color = computed.color;
    }
  });

  // Initial sync to match card on page load
  const card = document.querySelector(".profile-card");
  if (card) {
    const computed = window.getComputedStyle(card);
    themeToggleBtn.style.backgroundColor = computed.backgroundColor;
    themeToggleBtn.style.border = computed.border;
    themeToggleBtn.style.color = computed.color;
  }
}
