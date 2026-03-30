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
   FIXED ICON DIRECTION
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

    /* FIXED: light first, dark after toggle */
    themeBtn.textContent = isDark ? "🌙" : "☀️";

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

    /* match visual light/dark states */
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

/* ==========================================
   +1px TOGGLE SIZE INCREASE (APPEND ONLY)
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function bumpToggleSize() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;

    /* +1px increase from current perfect values */
    setImp(themeBtn, "min-width", "45px");
    setImp(themeBtn, "min-height", "35px");
    setImp(themeBtn, "width", "45px");
    setImp(themeBtn, "height", "35px");
  }

  function initBump() {
    bumpToggleSize();

    setTimeout(bumpToggleSize, 0);
    setTimeout(bumpToggleSize, 60);
    setTimeout(bumpToggleSize, 140);

    window.addEventListener("load", bumpToggleSize);
    window.addEventListener("resize", bumpToggleSize);
    window.addEventListener("orientationchange", bumpToggleSize);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(bumpToggleSize, 0);
        setTimeout(bumpToggleSize, 60);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBump);
  } else {
    initBump();
  }
})();

/* ==========================================
   +1px HEIGHT ONLY (NO WIDTH CHANGE)
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function adjustToggleHeightOnly() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;

    /* ONLY height increased by 1px */
    setImp(themeBtn, "min-height", "35px");
    setImp(themeBtn, "height", "35px");
  }

  function initHeightFix() {
    adjustToggleHeightOnly();

    setTimeout(adjustToggleHeightOnly, 0);
    setTimeout(adjustToggleHeightOnly, 60);
    setTimeout(adjustToggleHeightOnly, 140);

    window.addEventListener("load", adjustToggleHeightOnly);
    window.addEventListener("resize", adjustToggleHeightOnly);
    window.addEventListener("orientationchange", adjustToggleHeightOnly);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(adjustToggleHeightOnly, 0);
        setTimeout(adjustToggleHeightOnly, 60);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeightFix);
  } else {
    initHeightFix();
  }
})();

/* ==========================================
   FINAL ABSOLUTE PERFECT LOCK
   +2px left and +2px right larger,
   same vertical size, same functionality
   ========================================== */
(() => {
  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function finalPerfectLock() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;

    const isDark = document.body.classList.contains("dark");

    /* preserve correct icon behavior */
    themeBtn.textContent = isDark ? "☀️" : "🌙";

    /* keep height exactly where it already worked */
    setImp(themeBtn, "height", "34px");
    setImp(themeBtn, "min-height", "34px");
    setImp(themeBtn, "max-height", "34px");

    /* force +2px left and +2px right wider */
    setImp(themeBtn, "width", "48px");
    setImp(themeBtn, "min-width", "48px");
    setImp(themeBtn, "max-width", "48px");

    /* keep same vertical footprint and centering */
    setImp(themeBtn, "padding-top", "0");
    setImp(themeBtn, "padding-bottom", "0");
    setImp(themeBtn, "padding-left", "0");
    setImp(themeBtn, "padding-right", "0");
    setImp(themeBtn, "line-height", "34px");

    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "font-family", "'Segoe UI', sans-serif");
    setImp(themeBtn, "font-size", ".85rem");
    setImp(themeBtn, "font-weight", "400");
    setImp(themeBtn, "letter-spacing", "0");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "vertical-align", "middle");
    setImp(themeBtn, "appearance", "none");
    setImp(themeBtn, "-webkit-appearance", "none");
    setImp(themeBtn, "outline", "none");
    setImp(themeBtn, "box-shadow", "none");
    setImp(themeBtn, "cursor", "pointer");
    setImp(themeBtn, "flex", "0 0 auto");

    /* preserve exact working colors */
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

  function initFinalPerfectLock() {
    finalPerfectLock();

    setTimeout(finalPerfectLock, 0);
    setTimeout(finalPerfectLock, 80);
    setTimeout(finalPerfectLock, 160);
    setTimeout(finalPerfectLock, 260);

    window.addEventListener("load", finalPerfectLock);
    window.addEventListener("resize", finalPerfectLock);
    window.addEventListener("orientationchange", finalPerfectLock);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(finalPerfectLock, 0);
        setTimeout(finalPerfectLock, 80);
        setTimeout(finalPerfectLock, 160);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFinalPerfectLock);
  } else {
    initFinalPerfectLock();
  }
})();

/* ==========================================
   FINAL SAFE MOBILE MENU FIX
   keeps everything else intact
   fixes 2-line mobile credential layout
   re-locks toggle to a stable middle size
   no observer / no spin / no endless loop
   ========================================== */
(() => {
  const MOBILE_BREAKPOINT = 768;
  const MOBILE_HTML = `
    <span class="cred-line-1">RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect</span>
    <span class="cred-line-2">Associate (Renewal Scheduled)</span>
  `;
  const DESKTOP_TEXT =
    "RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect Associate (Renewal Scheduled)";

  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function styleMobileLines(credentialHeader) {
    const line1 = credentialHeader.querySelector(".cred-line-1");
    const line2 = credentialHeader.querySelector(".cred-line-2");

    if (line1) {
      setImp(line1, "display", "block");
      setImp(line1, "margin", "0");
      setImp(line1, "padding", "0");
      setImp(line1, "text-align", "center");
      setImp(line1, "line-height", "1.15");
      setImp(line1, "white-space", "nowrap");
    }

    if (line2) {
      setImp(line2, "display", "block");
      setImp(line2, "margin", "0");
      setImp(line2, "padding", "0");
      setImp(line2, "text-align", "center");
      setImp(line2, "line-height", "1.15");
      setImp(line2, "white-space", "nowrap");
    }
  }

  function applySafeMobileMenuFix() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const isDark = document.body.classList.contains("dark");

    if (!topBar || !credentialHeader || !themeBtn) return;

    if (isMobile) {
      if (credentialHeader.dataset.mobileMenuFixed !== "true") {
        credentialHeader.innerHTML = MOBILE_HTML;
        credentialHeader.dataset.mobileMenuFixed = "true";
      }

      setImp(topBar, "display", "grid");
      setImp(topBar, "grid-template-columns", "1fr auto");
      setImp(topBar, "align-items", "start");
      setImp(topBar, "column-gap", "0.75rem");
      setImp(topBar, "row-gap", "0");
      setImp(topBar, "padding", "1rem 2rem");
      setImp(topBar, "width", "100%");
      setImp(topBar, "box-sizing", "border-box");

      setImp(credentialHeader, "display", "block");
      setImp(credentialHeader, "width", "100%");
      setImp(credentialHeader, "max-width", "calc(100% - 58px)");
      setImp(credentialHeader, "min-width", "0");
      setImp(credentialHeader, "margin", "0 auto");
      setImp(credentialHeader, "padding", "0");
      setImp(credentialHeader, "box-sizing", "border-box");
      setImp(credentialHeader, "text-align", "center");
      setImp(credentialHeader, "white-space", "normal");
      setImp(credentialHeader, "overflow", "hidden");
      setImp(credentialHeader, "text-overflow", "clip");
      setImp(credentialHeader, "line-height", "1.15");
      setImp(credentialHeader, "font-size", "0.5rem");
      setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
      setImp(credentialHeader, "font-weight", "400");
      setImp(credentialHeader, "letter-spacing", "0");
      setImp(credentialHeader, "justify-self", "center");
      setImp(credentialHeader, "align-self", "start");
      setImp(credentialHeader, "position", "relative");
      setImp(credentialHeader, "top", "6px");
      setImp(credentialHeader, "transform", "none");
      setImp(credentialHeader, "min-height", "1.2rem");

      styleMobileLines(credentialHeader);

      /* best-fit stable toggle size */
      themeBtn.textContent = isDark ? "☀️" : "🌙";

      setImp(themeBtn, "width", "46px");
      setImp(themeBtn, "min-width", "46px");
      setImp(themeBtn, "max-width", "46px");
      setImp(themeBtn, "height", "34px");
      setImp(themeBtn, "min-height", "34px");
      setImp(themeBtn, "max-height", "34px");
      setImp(themeBtn, "padding", "0");
      setImp(themeBtn, "margin", "0");
      setImp(themeBtn, "line-height", "1");
      setImp(themeBtn, "display", "inline-flex");
      setImp(themeBtn, "align-items", "center");
      setImp(themeBtn, "justify-content", "center");
      setImp(themeBtn, "box-sizing", "border-box");
      setImp(themeBtn, "border-radius", "20px");
      setImp(themeBtn, "font-family", "'Segoe UI', sans-serif");
      setImp(themeBtn, "font-size", ".85rem");
      setImp(themeBtn, "font-weight", "400");
      setImp(themeBtn, "letter-spacing", "0");
      setImp(themeBtn, "vertical-align", "middle");
      setImp(themeBtn, "appearance", "none");
      setImp(themeBtn, "-webkit-appearance", "none");
      setImp(themeBtn, "outline", "none");
      setImp(themeBtn, "box-shadow", "none");
      setImp(themeBtn, "cursor", "pointer");
      setImp(themeBtn, "pointer-events", "auto");
      setImp(themeBtn, "position", "relative");
      setImp(themeBtn, "z-index", "101");
      setImp(themeBtn, "justify-self", "end");
      setImp(themeBtn, "align-self", "start");
      setImp(themeBtn, "backdrop-filter", "none");
      setImp(themeBtn, "-webkit-backdrop-filter", "none");

      if (isDark) {
        setImp(themeBtn, "background", "rgba(8,10,14,0.42)");
        setImp(themeBtn, "border", "1px solid rgba(240,239,244,0.14)");
        setImp(themeBtn, "color", "#f0eff4");
      } else {
        setImp(themeBtn, "background", "rgba(58,62,59,0.15)");
        setImp(themeBtn, "border", "1px solid rgba(240,239,244,0.22)");
        setImp(themeBtn, "color", "#f0eff4");
      }
    } else {
      if (credentialHeader.dataset.mobileMenuFixed === "true") {
        credentialHeader.textContent = DESKTOP_TEXT;
        credentialHeader.dataset.mobileMenuFixed = "false";
      }

      setImp(credentialHeader, "position", "relative");
      setImp(credentialHeader, "top", "0");
      setImp(credentialHeader, "text-align", "left");
      setImp(credentialHeader, "white-space", "nowrap");
    }
  }

  function initSafeMobileMenuFix() {
    applySafeMobileMenuFix();

    setTimeout(applySafeMobileMenuFix, 0);
    setTimeout(applySafeMobileMenuFix, 80);
    setTimeout(applySafeMobileMenuFix, 160);

    window.addEventListener("load", applySafeMobileMenuFix);
    window.addEventListener("resize", applySafeMobileMenuFix);
    window.addEventListener("orientationchange", applySafeMobileMenuFix);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(applySafeMobileMenuFix, 0);
        setTimeout(applySafeMobileMenuFix, 80);
        setTimeout(applySafeMobileMenuFix, 160);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSafeMobileMenuFix);
  } else {
    initSafeMobileMenuFix();
  }
})();
