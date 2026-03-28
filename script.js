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
   force-match blog.html desktop + mobile
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
    const isMobile = window.innerWidth <= 900;
    const isDark = document.body.classList.contains("dark");

    if (!topBar || !credentialHeader || !themeBtn) return;

    document.body.classList.add("portfolio-card-final-menu-match");

    /* ===== TOP BAR — exact blog layout ===== */
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
    setImp(topBar, "box-sizing", "border-box");
    setImp(topBar, "margin", "0");
    setImp(topBar, "letter-spacing", "0");

    /* ===== RHCE6 HEADER TEXT — exact blog sizing ===== */
    setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
    setImp(credentialHeader, "font-size", isMobile ? ".425rem" : ".85rem");
    setImp(credentialHeader, "line-height", "1.2");
    setImp(credentialHeader, "font-weight", "400");
    setImp(credentialHeader, "letter-spacing", "0");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "white-space", "nowrap");
    setImp(credentialHeader, "flex", "0 1 auto");

    /* ===== TOGGLE — exact blog shape/colors/blur ===== */
    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "background", isDark ? "rgba(8,10,14,0.42)" : "rgba(58,62,59,0.15)");
    setImp(themeBtn, "border", isDark ? "1px solid rgba(240,239,244,0.14)" : "1px solid rgba(240,239,244,0.22)");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "padding", ".4rem 1rem");
    setImp(themeBtn, "cursor", "pointer");
    setImp(themeBtn, "backdrop-filter", "blur(10px)");
    setImp(themeBtn, "-webkit-backdrop-filter", "blur(10px)");
    setImp(themeBtn, "color", "#f0eff4");
    setImp(themeBtn, "box-shadow", "none");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "font-family", "'Segoe UI', sans-serif");
    setImp(themeBtn, "font-size", ".85rem");
    setImp(themeBtn, "font-weight", "400");
    setImp(themeBtn, "line-height", "1");
    setImp(themeBtn, "letter-spacing", "0");
    setImp(themeBtn, "min-width", "unset");
    setImp(themeBtn, "min-height", "unset");
    setImp(themeBtn, "width", "auto");
    setImp(themeBtn, "height", "auto");
    setImp(themeBtn, "vertical-align", "middle");
    setImp(themeBtn, "appearance", "auto");
    setImp(themeBtn, "-webkit-appearance", "auto");
    setImp(themeBtn, "flex", "0 0 auto");
    setImp(themeBtn, "outline", "none");

    syncThemeIcon();
  }

  function init() {
    applyExactMatch();

    setTimeout(applyExactMatch, 0);
    setTimeout(applyExactMatch, 50);
    setTimeout(applyExactMatch, 120);
    setTimeout(applyExactMatch, 220);
    setTimeout(applyExactMatch, 400);

    window.addEventListener("resize", applyExactMatch);
    window.addEventListener("orientationchange", applyExactMatch);
    window.addEventListener("load", applyExactMatch);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(applyExactMatch, 0);
        setTimeout(applyExactMatch, 60);
        setTimeout(applyExactMatch, 140);
      });
    }

    const mo = new MutationObserver(() => {
      requestAnimationFrame(applyExactMatch);
    });

    mo.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"]
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
