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

function applyThemeIcon() {
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function applyMenuLayout() {
  const topBar = document.querySelector(".top-bar");
  const credentialHeader = document.querySelector(".credential-header");
  const container = document.querySelector(".container");
  const profileCard = document.querySelector(".profile-card");
  const isMobile = window.innerWidth <= 768;
  const isDark = document.body.classList.contains("dark");

  if (!topBar || !credentialHeader || !themeToggle) return;

  // ===== TOP BAR BASE =====
  topBar.style.setProperty("position", "absolute", "important");
  topBar.style.setProperty("top", "0", "important");
  topBar.style.setProperty("left", "0", "important");
  topBar.style.setProperty("width", "100%", "important");
  topBar.style.setProperty("z-index", "100", "important");
  topBar.style.setProperty("box-sizing", "border-box", "important");
  topBar.style.setProperty("margin", "0", "important");
  topBar.style.setProperty("padding", "1rem 2rem", "important");
  topBar.style.setProperty("font-size", ".85rem", "important");
  topBar.style.setProperty("letter-spacing", "0", "important");

  // ===== CREDENTIAL TEXT BASE =====
  credentialHeader.style.setProperty("font-family", "'Segoe UI', sans-serif", "important");
  credentialHeader.style.setProperty("font-weight", "400", "important");
  credentialHeader.style.setProperty("letter-spacing", "0", "important");
  credentialHeader.style.setProperty("margin", "0", "important");
  credentialHeader.style.setProperty("padding", "0", "important");
  credentialHeader.style.setProperty("color", "inherit", "important");

  // ===== TOGGLE BASE =====
  themeToggle.style.setProperty("display", "inline-flex", "important");
  themeToggle.style.setProperty("align-items", "center", "important");
  themeToggle.style.setProperty("justify-content", "center", "important");
  themeToggle.style.setProperty("box-sizing", "border-box", "important");
  themeToggle.style.setProperty("border-radius", "20px", "important");
  themeToggle.style.setProperty("font-family", "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','Segoe UI',sans-serif", "important");
  themeToggle.style.setProperty("font-size", ".85rem", "important");
  themeToggle.style.setProperty("font-weight", "400", "important");
  themeToggle.style.setProperty("letter-spacing", "0", "important");
  themeToggle.style.setProperty("line-height", "1", "important");
  themeToggle.style.setProperty("padding", "0", "important");
  themeToggle.style.setProperty("margin", "0", "important");
  themeToggle.style.setProperty("appearance", "none", "important");
  themeToggle.style.setProperty("-webkit-appearance", "none", "important");
  themeToggle.style.setProperty("outline", "none", "important");
  themeToggle.style.setProperty("box-shadow", "none", "important");
  themeToggle.style.setProperty("cursor", "pointer", "important");
  themeToggle.style.setProperty("text-indent", "0", "important");
  themeToggle.style.setProperty("white-space", "nowrap", "important");
  themeToggle.style.setProperty("overflow", "visible", "important");
  themeToggle.style.setProperty("pointer-events", "auto", "important");

  if (isDark) {
    themeToggle.style.setProperty("background", "rgba(8,10,14,0.42)", "important");
    themeToggle.style.setProperty("border", "1px solid rgba(240,239,244,0.14)", "important");
    themeToggle.style.setProperty("color", "#f0eff4", "important");
  } else {
    themeToggle.style.setProperty("background", "rgba(58,62,59,0.15)", "important");
    themeToggle.style.setProperty("border", "1px solid rgba(240,239,244,0.22)", "important");
    themeToggle.style.setProperty("color", "#f0eff4", "important");
  }

  // ===== DESKTOP =====
  if (!isMobile) {
    topBar.style.setProperty("display", "flex", "important");
    topBar.style.setProperty("justify-content", "space-between", "important");
    topBar.style.setProperty("align-items", "center", "important");

    credentialHeader.innerHTML =
      "RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect Associate (Renewal Scheduled)";
    credentialHeader.style.setProperty("position", "static", "important");
    credentialHeader.style.setProperty("transform", "none", "important");
    credentialHeader.style.setProperty("left", "auto", "important");
    credentialHeader.style.setProperty("top", "auto", "important");
    credentialHeader.style.setProperty("width", "auto", "important");
    credentialHeader.style.setProperty("max-width", "none", "important");
    credentialHeader.style.setProperty("white-space", "nowrap", "important");
    credentialHeader.style.setProperty("text-align", "left", "important");
    credentialHeader.style.setProperty("font-size", ".85rem", "important");
    credentialHeader.style.setProperty("line-height", "1.2", "important");
    credentialHeader.style.setProperty("pointer-events", "auto", "important");

    themeToggle.style.setProperty("position", "static", "important");
    themeToggle.style.setProperty("top", "auto", "important");
    themeToggle.style.setProperty("right", "auto", "important");
    themeToggle.style.setProperty("left", "auto", "important");
    themeToggle.style.setProperty("z-index", "101", "important");
    themeToggle.style.setProperty("width", "44px", "important");
    themeToggle.style.setProperty("min-width", "44px", "important");
    themeToggle.style.setProperty("max-width", "44px", "important");
    themeToggle.style.setProperty("height", "34px", "important");
    themeToggle.style.setProperty("min-height", "34px", "important");
    themeToggle.style.setProperty("max-height", "34px", "important");
    themeToggle.style.setProperty("backdrop-filter", "blur(10px)", "important");
    themeToggle.style.setProperty("-webkit-backdrop-filter", "blur(10px)", "important");

    if (container) {
      container.style.setProperty("padding-top", "5.4rem", "important");
      container.style.setProperty("box-sizing", "border-box", "important");
    }

    if (profileCard) {
      profileCard.style.setProperty("margin-top", ".5rem", "important");
    }

    applyThemeIcon();
    return;
  }

  // ===== MOBILE =====
  topBar.style.setProperty("display", "block", "important");
  topBar.style.setProperty("min-height", "0", "important");

  credentialHeader.innerHTML = `
    <span style="display:block;white-space:nowrap;">RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect</span>
    <span style="display:block;white-space:nowrap;">Associate (Renewal Scheduled)</span>
  `;

  credentialHeader.style.setProperty("position", "fixed", "important");
  credentialHeader.style.setProperty("left", "50%", "important");
  credentialHeader.style.setProperty("transform", "translateX(-50%)", "important");
  credentialHeader.style.setProperty("width", "auto", "important");
  credentialHeader.style.setProperty("max-width", "calc(100vw - 96px)", "important");
  credentialHeader.style.setProperty("min-width", "0", "important");
  credentialHeader.style.setProperty("white-space", "normal", "important");
  credentialHeader.style.setProperty("text-align", "center", "important");
  credentialHeader.style.setProperty("font-size", ".5rem", "important");
  credentialHeader.style.setProperty("line-height", "1.15", "important");
  credentialHeader.style.setProperty("z-index", "101", "important");
  credentialHeader.style.setProperty("pointer-events", "none", "important");

  themeToggle.style.setProperty("position", "fixed", "important");
  themeToggle.style.setProperty("top", "16px", "important");
  themeToggle.style.setProperty("right", "32px", "important");
  themeToggle.style.setProperty("left", "auto", "important");
  themeToggle.style.setProperty("z-index", "102", "important");
  themeToggle.style.setProperty("width", "47px", "important");
  themeToggle.style.setProperty("min-width", "47px", "important");
  themeToggle.style.setProperty("max-width", "47px", "important");
  themeToggle.style.setProperty("height", "35px", "important");
  themeToggle.style.setProperty("min-height", "35px", "important");
  themeToggle.style.setProperty("max-height", "35px", "important");
  themeToggle.style.setProperty("backdrop-filter", "none", "important");
  themeToggle.style.setProperty("-webkit-backdrop-filter", "none", "important");

  if (container) {
    container.style.setProperty("padding-top", "4.9rem", "important");
    container.style.setProperty("box-sizing", "border-box", "important");
  }

  if (profileCard) {
    profileCard.style.setProperty("margin-top", ".35rem", "important");

    const cardRect = profileCard.getBoundingClientRect();
    const headerHeight = credentialHeader.offsetHeight || 20;
    const targetTop = Math.max(10, Math.round((cardRect.top - headerHeight) / 2));
    credentialHeader.style.setProperty("top", `${targetTop}px`, "important");
  } else {
    credentialHeader.style.setProperty("top", "18vh", "important");
  }

  applyThemeIcon();
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  applyThemeIcon();

  // Smooth transition for background
  themeToggle.style.transition = "background 0.4s ease, color 0.4s ease";
  document.body.style.transition = "background 0.7s ease";

  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("blairTheme", theme);

  setTimeout(applyMenuLayout, 0);
  setTimeout(applyMenuLayout, 80);
});

// Persist theme + layout
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("blairTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  applyThemeIcon();
  applyMenuLayout();

  setTimeout(applyMenuLayout, 0);
  setTimeout(applyMenuLayout, 80);
  setTimeout(applyMenuLayout, 160);
});

/* ==========================================
   FINAL MOBILE EXACT TOGGLE MATCH
   blog/gallery top-right lock
   APPEND ONLY
   ========================================== */
(() => {
  const MOBILE_BREAKPOINT = 768;
  const MOBILE_HTML = `
    <span class="cred-line-1">RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect</span>
    <span class="cred-line-2">Associate (Renewal Scheduled)</span>
  `;

  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function forceExactMobileMenuMatch() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");

    if (!topBar || !credentialHeader || !themeBtn) return;
    if (window.innerWidth > MOBILE_BREAKPOINT) return;

    const isDark = document.body.classList.contains("dark");

    /* top area locked to viewport */
    setImp(topBar, "position", "fixed");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "0");
    setImp(topBar, "width", "100%");
    setImp(topBar, "height", "0");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "120");
    setImp(topBar, "pointer-events", "none");

    /* credential text fixed and centered */
    credentialHeader.innerHTML = MOBILE_HTML;
    setImp(credentialHeader, "position", "fixed");
    setImp(credentialHeader, "top", "14px");
    setImp(credentialHeader, "left", "50%");
    setImp(credentialHeader, "right", "auto");
    setImp(credentialHeader, "transform", "translateX(-50%)");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "width", "auto");
    setImp(credentialHeader, "max-width", "calc(100vw - 96px)");
    setImp(credentialHeader, "text-align", "center");
    setImp(credentialHeader, "white-space", "normal");
    setImp(credentialHeader, "font-size", ".5rem");
    setImp(credentialHeader, "line-height", "1.15");
    setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
    setImp(credentialHeader, "font-weight", "400");
    setImp(credentialHeader, "letter-spacing", "0");
    setImp(credentialHeader, "z-index", "121");
    setImp(credentialHeader, "pointer-events", "none");

    const line1 = credentialHeader.querySelector(".cred-line-1");
    const line2 = credentialHeader.querySelector(".cred-line-2");

    if (line1) {
      setImp(line1, "display", "block");
      setImp(line1, "margin", "0");
      setImp(line1, "padding", "0");
      setImp(line1, "white-space", "nowrap");
      setImp(line1, "text-align", "center");
      setImp(line1, "line-height", "1.15");
    }

    if (line2) {
      setImp(line2, "display", "block");
      setImp(line2, "margin", "0");
      setImp(line2, "padding", "0");
      setImp(line2, "white-space", "nowrap");
      setImp(line2, "text-align", "center");
      setImp(line2, "line-height", "1.15");
    }

    /* EXACT blog/gallery-style top-right placement */
    themeBtn.textContent = isDark ? "☀️" : "🌙";

    setImp(themeBtn, "position", "fixed");
    setImp(themeBtn, "top", "16px");
    setImp(themeBtn, "right", "32px");
    setImp(themeBtn, "left", "auto");
    setImp(themeBtn, "bottom", "auto");
    setImp(themeBtn, "transform", "none");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "z-index", "122");
    setImp(themeBtn, "pointer-events", "auto");

    /* same mobile size/shape */
    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "width", "47px");
    setImp(themeBtn, "min-width", "47px");
    setImp(themeBtn, "max-width", "47px");
    setImp(themeBtn, "height", "35px");
    setImp(themeBtn, "min-height", "35px");
    setImp(themeBtn, "max-height", "35px");
    setImp(themeBtn, "padding", "0");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "font-family", "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','Segoe UI',sans-serif");
    setImp(themeBtn, "font-size", ".85rem");
    setImp(themeBtn, "font-weight", "400");
    setImp(themeBtn, "line-height", "1");
    setImp(themeBtn, "letter-spacing", "0");
    setImp(themeBtn, "appearance", "none");
    setImp(themeBtn, "-webkit-appearance", "none");
    setImp(themeBtn, "outline", "none");
    setImp(themeBtn, "box-shadow", "none");
    setImp(themeBtn, "cursor", "pointer");
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
  }

  function initExactMobileMatch() {
    forceExactMobileMenuMatch();

    setTimeout(forceExactMobileMenuMatch, 0);
    setTimeout(forceExactMobileMenuMatch, 80);
    setTimeout(forceExactMobileMenuMatch, 160);

    window.addEventListener("load", forceExactMobileMenuMatch);
    window.addEventListener("resize", forceExactMobileMenuMatch);
    window.addEventListener("orientationchange", forceExactMobileMenuMatch);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn && !themeBtn.dataset.exactMobileMatchBound) {
      themeBtn.dataset.exactMobileMatchBound = "true";
      themeBtn.addEventListener("click", () => {
        setTimeout(forceExactMobileMenuMatch, 0);
        setTimeout(forceExactMobileMenuMatch, 80);
        setTimeout(forceExactMobileMenuMatch, 160);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExactMobileMatch);
  } else {
    initExactMobileMatch();
  }
})();


window.addEventListener("load", applyMenuLayout);
window.addEventListener("resize", applyMenuLayout);
window.addEventListener("orientationchange", applyMenuLayout);


/* ==========================================
   FINAL MOBILE FIXED TEXT + TOGGLE LOCK
   text and toggle stay glued on scroll
   text sits halfway between top and card
   APPEND ONLY
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

  function styleLines(header) {
    const line1 = header.querySelector(".cred-line-1");
    const line2 = header.querySelector(".cred-line-2");

    if (line1) {
      setImp(line1, "display", "block");
      setImp(line1, "margin", "0");
      setImp(line1, "padding", "0");
      setImp(line1, "text-align", "center");
      setImp(line1, "white-space", "nowrap");
      setImp(line1, "line-height", "1.15");
    }

    if (line2) {
      setImp(line2, "display", "block");
      setImp(line2, "margin", "0");
      setImp(line2, "padding", "0");
      setImp(line2, "text-align", "center");
      setImp(line2, "white-space", "nowrap");
      setImp(line2, "line-height", "1.15");
    }
  }

  function lockToggle(themeBtn) {
    if (!themeBtn) return;

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark ? "☀️" : "🌙";

    setImp(themeBtn, "position", "fixed");
    setImp(themeBtn, "top", "16px");
    setImp(themeBtn, "right", "32px");
    setImp(themeBtn, "left", "auto");
    setImp(themeBtn, "bottom", "auto");
    setImp(themeBtn, "transform", "none");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "z-index", "122");
    setImp(themeBtn, "pointer-events", "auto");

    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "width", "47px");
    setImp(themeBtn, "min-width", "47px");
    setImp(themeBtn, "max-width", "47px");
    setImp(themeBtn, "height", "35px");
    setImp(themeBtn, "min-height", "35px");
    setImp(themeBtn, "max-height", "35px");
    setImp(themeBtn, "padding", "0");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "font-family", "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','Segoe UI',sans-serif");
    setImp(themeBtn, "font-size", ".85rem");
    setImp(themeBtn, "font-weight", "400");
    setImp(themeBtn, "line-height", "1");
    setImp(themeBtn, "letter-spacing", "0");
    setImp(themeBtn, "appearance", "none");
    setImp(themeBtn, "-webkit-appearance", "none");
    setImp(themeBtn, "outline", "none");
    setImp(themeBtn, "box-shadow", "none");
    setImp(themeBtn, "cursor", "pointer");
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
  }

  function lockFixedMobileHeader() {
    const topBar = document.querySelector(".top-bar");
    const header = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");
    const card = document.querySelector(".profile-card");

    if (!topBar || !header || !themeBtn) return;

    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    if (!isMobile) {
      header.innerHTML = DESKTOP_TEXT;

      setImp(topBar, "position", "absolute");
      setImp(topBar, "top", "0");
      setImp(topBar, "left", "0");
      setImp(topBar, "right", "auto");
      setImp(topBar, "width", "100%");
      setImp(topBar, "height", "auto");
      setImp(topBar, "padding", "1rem 2rem");
      setImp(topBar, "margin", "0");
      setImp(topBar, "overflow", "visible");
      setImp(topBar, "pointer-events", "auto");

      setImp(header, "position", "static");
      setImp(header, "top", "auto");
      setImp(header, "left", "auto");
      setImp(header, "transform", "none");
      setImp(header, "text-align", "left");
      setImp(header, "white-space", "nowrap");
      setImp(header, "pointer-events", "auto");

      return;
    }

    header.innerHTML = MOBILE_HTML;

    /* keep the top bar itself out of layout motion */
    setImp(topBar, "position", "fixed");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "0");
    setImp(topBar, "width", "100%");
    setImp(topBar, "height", "0");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "120");
    setImp(topBar, "pointer-events", "none");

    styleLines(header);
    lockToggle(themeBtn);

    /* true midpoint between top of viewport and top of card */
    let targetTop = 14;
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const headerHeight = header.offsetHeight || 20;
      targetTop = Math.max(12, Math.round((cardRect.top - headerHeight) / 2));
    }

    setImp(header, "position", "fixed");
    setImp(header, "top", `${targetTop}px`);
    setImp(header, "left", "50%");
    setImp(header, "right", "auto");
    setImp(header, "bottom", "auto");
    setImp(header, "transform", "translateX(-50%)");
    setImp(header, "width", "auto");
    setImp(header, "max-width", "calc(100vw - 100px)");
    setImp(header, "min-width", "0");
    setImp(header, "margin", "0");
    setImp(header, "padding", "0");
    setImp(header, "text-align", "center");
    setImp(header, "white-space", "normal");
    setImp(header, "font-size", ".5rem");
    setImp(header, "line-height", "1.15");
    setImp(header, "font-family", "'Segoe UI', sans-serif");
    setImp(header, "font-weight", "400");
    setImp(header, "letter-spacing", "0");
    setImp(header, "z-index", "121");
    setImp(header, "pointer-events", "none");
  }

  function initFixedHeaderLock() {
    lockFixedMobileHeader();

    requestAnimationFrame(lockFixedMobileHeader);
    setTimeout(lockFixedMobileHeader, 0);
    setTimeout(lockFixedMobileHeader, 80);
    setTimeout(lockFixedMobileHeader, 160);

    window.addEventListener("load", lockFixedMobileHeader);
    window.addEventListener("resize", lockFixedMobileHeader);
    window.addEventListener("orientationchange", lockFixedMobileHeader);
    window.addEventListener("scroll", lockFixedMobileHeader, { passive: true });

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn && !themeBtn.dataset.fixedHeaderLockBound2) {
      themeBtn.dataset.fixedHeaderLockBound2 = "true";
      themeBtn.addEventListener("click", () => {
        setTimeout(lockFixedMobileHeader, 0);
        setTimeout(lockFixedMobileHeader, 80);
        setTimeout(lockFixedMobileHeader, 160);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFixedHeaderLock);
  } else {
    initFixedHeaderLock();
  }
})();

