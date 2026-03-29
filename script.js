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
    const container = document.querySelector(".container");
    const profileCard = document.querySelector(".profile-card");
    const isMobile = window.innerWidth <= 900;
    const isDark = document.body.classList.contains("dark");

    if (!topBar || !credentialHeader || !themeBtn) return;

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
    setImp(themeBtn, "font-size", "inherit");
    setImp(themeBtn, "font-weight", "400");
    setImp(themeBtn, "line-height", "normal");
    setImp(themeBtn, "letter-spacing", "0");
    setImp(themeBtn, "min-width", "0");
    setImp(themeBtn, "min-height", "0");
    setImp(themeBtn, "width", "auto");
    setImp(themeBtn, "height", "auto");
    setImp(themeBtn, "vertical-align", "middle");
    setImp(themeBtn, "appearance", "none");
    setImp(themeBtn, "-webkit-appearance", "none");
    setImp(themeBtn, "flex", "0 0 auto");
    setImp(themeBtn, "outline", "none");

    /* ===== CARD SPACING BELOW MENU ===== */
    if (container) {
      setImp(container, "padding-top", isMobile ? "4.9rem" : "5.4rem");
      setImp(container, "box-sizing", "border-box");
    }

    if (profileCard) {
      setImp(profileCard, "margin-top", isMobile ? ".35rem" : ".5rem");
    }

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

/* ==========================================
   FINAL TOGGLE SIZE CORRECTION — CLEAN APPEND
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function fixPortfolioToggleSize() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;

    setImp(themeBtn, "padding", ".4rem 1rem");
    setImp(themeBtn, "min-width", "44px");
    setImp(themeBtn, "min-height", "34px");
    setImp(themeBtn, "width", "44px");
    setImp(themeBtn, "height", "34px");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "font-size", ".85rem");
    setImp(themeBtn, "line-height", "1");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "vertical-align", "middle");
  }

  function initToggleSizeFix() {
    fixPortfolioToggleSize();
    setTimeout(fixPortfolioToggleSize, 0);
    setTimeout(fixPortfolioToggleSize, 80);
    setTimeout(fixPortfolioToggleSize, 160);

    window.addEventListener("load", fixPortfolioToggleSize);
    window.addEventListener("resize", fixPortfolioToggleSize);
    window.addEventListener("orientationchange", fixPortfolioToggleSize);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(fixPortfolioToggleSize, 0);
        setTimeout(fixPortfolioToggleSize, 80);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToggleSizeFix);
  } else {
    initToggleSizeFix();
  }
})();


/* ==========================================
   FINAL TOGGLE SIZE / VISUAL LOCK
   APPEND ONLY — preserves existing theme logic
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function applyFinalToggleMatch() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;

    const isDark = document.body.classList.contains("dark");

    /* keep the EXISTING light/dark behavior */
    themeBtn.textContent = isDark ? "☀️" : "🌙";

    /* exact visual match to blog/gallery */
    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "padding", ".4rem 1rem");
    setImp(themeBtn, "min-width", "44px");
    setImp(themeBtn, "min-height", "34px");
    setImp(themeBtn, "width", "44px");
    setImp(themeBtn, "height", "34px");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "font-family", "'Segoe UI', sans-serif");
    setImp(themeBtn, "font-size", ".85rem");
    setImp(themeBtn, "font-weight", "400");
    setImp(themeBtn, "line-height", "1");
    setImp(themeBtn, "letter-spacing", "0");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "vertical-align", "middle");
    setImp(themeBtn, "appearance", "none");
    setImp(themeBtn, "-webkit-appearance", "none");
    setImp(themeBtn, "outline", "none");
    setImp(themeBtn, "box-shadow", "none");
    setImp(themeBtn, "cursor", "pointer");

    /* match the same light-first / dark-after visual system */
    if (isDark) {
      setImp(themeBtn, "background", "rgba(8,10,14,0.42)");
      setImp(themeBtn, "border", "1px solid rgba(240,239,244,0.14)");
      setImp(themeBtn, "color", "#f0eff4");
    } else {
      setImp(themeBtn, "background", "rgba(58,62,59,0.15)");
      setImp(themeBtn, "border", "1px solid rgba(240,239,244,0.22)");
      setImp(themeBtn, "color", "#f0eff4");
    }

    if (window.innerWidth <= 900) {
      setImp(themeBtn, "backdrop-filter", "none");
      setImp(themeBtn, "-webkit-backdrop-filter", "none");
    } else {
      setImp(themeBtn, "backdrop-filter", "blur(10px)");
      setImp(themeBtn, "-webkit-backdrop-filter", "blur(10px)");
    }
  }

  function initFinalToggleMatch() {
    applyFinalToggleMatch();

    setTimeout(applyFinalToggleMatch, 0);
    setTimeout(applyFinalToggleMatch, 60);
    setTimeout(applyFinalToggleMatch, 140);

    window.addEventListener("load", applyFinalToggleMatch);
    window.addEventListener("resize", applyFinalToggleMatch);
    window.addEventListener("orientationchange", applyFinalToggleMatch);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(applyFinalToggleMatch, 0);
        setTimeout(applyFinalToggleMatch, 60);
        setTimeout(applyFinalToggleMatch, 140);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFinalToggleMatch);
  } else {
    initFinalToggleMatch();
  }
})();
