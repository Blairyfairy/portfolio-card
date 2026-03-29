// =========================
// Portfolio Card JS
// =========================

// Follow / Connect button
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("following");

  if (followBtn.classList.contains("following")) {
    btnText.textContent = "Connected ✓";
    window.open("mailto:blairpagedrakemccoy@gmail.com", "_self");
  } else {
    btnText.textContent = "Connect";
  }
});

// Theme Toggle Button
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Icon switches
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  // Smooth transition for background
  themeToggle.style.transition = "background 0.4s ease, color 0.4s ease";
  document.body.style.transition = "background 0.7s ease";
});

// Persist theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("blairTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("blairTheme", theme);
  });
});

/* ==========================================
   FINAL — PORTFOLIO CARD MENU / TOGGLE MATCH
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function syncThemeIcon() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  }

  function applyExactMatch() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");
    const container = document.querySelector(".container");
    const profileCard = document.querySelector(".profile-card");
    const isMobile = window.innerWidth <= 900;
    const isDark = document.body.classList.contains("dark");

    if (!topBar || !credentialHeader || !themeBtn) return;

    setImp(topBar, "display", "flex");
    setImp(topBar, "justify-content", "space-between");
    setImp(topBar, "align-items", "center");
    setImp(topBar, "padding", "1rem 2rem");
    setImp(topBar, "font-size", ".85rem");
    setImp(topBar, "position", "absolute");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "width", "100%");
    setImp(topBar, "z-index", "100");

    setImp(credentialHeader, "font-size", isMobile ? ".425rem" : ".85rem");

    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "padding", ".4rem 1rem");

    if (container) {
      setImp(container, "padding-top", isMobile ? "4.9rem" : "5.4rem");
    }

    if (profileCard) {
      setImp(profileCard, "margin-top", isMobile ? ".35rem" : ".5rem");
    }

    syncThemeIcon();
  }

  function init() {
    applyExactMatch();
    setTimeout(applyExactMatch, 0);
    setTimeout(applyExactMatch, 120);

    window.addEventListener("resize", applyExactMatch);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(applyExactMatch, 0);
      });
    }
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();

/* ==========================================
   🔥 FINAL PIXEL PERFECT LOCK (ONLY ADDITION)
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function lockPerfectToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    const isDark = document.body.classList.contains("dark");

    /* correct icon direction */
    btn.textContent = isDark ? "🌙" : "☀️";

    /* EXACT SIZE */
    setImp(btn, "width", "44px");
    setImp(btn, "height", "35px");

    /* remove vertical drift */
    setImp(btn, "padding-top", "0");
    setImp(btn, "padding-bottom", "0");
    setImp(btn, "line-height", "35px");

    /* perfect centering */
    setImp(btn, "display", "flex");
    setImp(btn, "align-items", "center");
    setImp(btn, "justify-content", "center");

    /* preserve style */
    setImp(btn, "padding-left", "1rem");
    setImp(btn, "padding-right", "1rem");
    setImp(btn, "border-radius", "20px");
    setImp(btn, "font-size", ".85rem");

    if (isDark) {
      setImp(btn, "background", "rgba(8,10,14,0.42)");
      setImp(btn, "border", "1px solid rgba(240,239,244,0.14)");
    } else {
      setImp(btn, "background", "rgba(58,62,59,0.15)");
      setImp(btn, "border", "1px solid rgba(240,239,244,0.22)");
    }
  }

  function init() {
    lockPerfectToggle();

    setTimeout(lockPerfectToggle, 0);
    setTimeout(lockPerfectToggle, 80);
    setTimeout(lockPerfectToggle, 160);

    window.addEventListener("resize", lockPerfectToggle);

    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", () => {
        setTimeout(lockPerfectToggle, 0);
      });
    }
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
