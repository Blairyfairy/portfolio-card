// =========================
// Portfolio Card JS
// =========================

// Follow / Connect button
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

if (followBtn && btnText) {
  followBtn.addEventListener("click", () => {
    followBtn.classList.toggle("following");

    if (followBtn.classList.contains("following")) {
      btnText.textContent = "Connected ✓";
      window.open("mailto:blairpagedrakemccoy@gmail.com", "_self");
    } else {
      btnText.textContent = "Connect";
    }
  });
}

// Theme Toggle Button
const themeToggle = document.getElementById("themeToggle");

function setImp(el, prop, value) {
  if (!el) return;
  el.style.setProperty(prop, value, "important");
}

function applyThemeIcon() {
  if (!themeToggle) return;
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function applyToggleColors() {
  if (!themeToggle) return;

  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    setImp(themeToggle, "background", "rgba(8,10,14,0.42)");
    setImp(themeToggle, "border", "1px solid rgba(240,239,244,0.14)");
    setImp(themeToggle, "color", "#f0eff4");
  } else {
    setImp(themeToggle, "background", "rgba(58,62,59,0.15)");
    setImp(themeToggle, "border", "1px solid rgba(240,239,244,0.22)");
    setImp(themeToggle, "color", "#f0eff4");
  }
}

function applyDesktopLayout(topBar, credentialHeader, container, profileCard) {
  if (!topBar || !credentialHeader || !themeToggle) return;

  setImp(topBar, "position", "absolute");
  setImp(topBar, "top", "0");
  setImp(topBar, "left", "0");
  setImp(topBar, "right", "auto");
  setImp(topBar, "width", "100%");
  setImp(topBar, "height", "auto");
  setImp(topBar, "display", "flex");
  setImp(topBar, "justify-content", "space-between");
  setImp(topBar, "align-items", "center");
  setImp(topBar, "padding", "1rem 2rem");
  setImp(topBar, "margin", "0");
  setImp(topBar, "overflow", "visible");
  setImp(topBar, "z-index", "100");
  setImp(topBar, "pointer-events", "auto");
  setImp(topBar, "box-sizing", "border-box");
  setImp(topBar, "font-size", ".85rem");
  setImp(topBar, "letter-spacing", "0");

  credentialHeader.textContent =
    "RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect Associate (Renewal Scheduled)";
  setImp(credentialHeader, "position", "static");
  setImp(credentialHeader, "top", "auto");
  setImp(credentialHeader, "left", "auto");
  setImp(credentialHeader, "right", "auto");
  setImp(credentialHeader, "transform", "none");
  setImp(credentialHeader, "width", "auto");
  setImp(credentialHeader, "max-width", "none");
  setImp(credentialHeader, "min-width", "0");
  setImp(credentialHeader, "margin", "0");
  setImp(credentialHeader, "padding", "0");
  setImp(credentialHeader, "text-align", "left");
  setImp(credentialHeader, "white-space", "nowrap");
  setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
  setImp(credentialHeader, "font-size", ".85rem");
  setImp(credentialHeader, "font-weight", "400");
  setImp(credentialHeader, "line-height", "1.2");
  setImp(credentialHeader, "letter-spacing", "0");
  setImp(credentialHeader, "z-index", "auto");
  setImp(credentialHeader, "pointer-events", "auto");

  setImp(themeToggle, "position", "static");
  setImp(themeToggle, "top", "auto");
  setImp(themeToggle, "right", "auto");
  setImp(themeToggle, "left", "auto");
  setImp(themeToggle, "bottom", "auto");
  setImp(themeToggle, "transform", "none");
  setImp(themeToggle, "margin", "0");
  setImp(themeToggle, "z-index", "101");
  setImp(themeToggle, "pointer-events", "auto");
  setImp(themeToggle, "display", "inline-flex");
  setImp(themeToggle, "align-items", "center");
  setImp(themeToggle, "justify-content", "center");
  setImp(themeToggle, "width", "auto");
  setImp(themeToggle, "min-width", "44px");
  setImp(themeToggle, "max-width", "none");
  setImp(themeToggle, "height", "auto");
  setImp(themeToggle, "min-height", "34px");
  setImp(themeToggle, "max-height", "none");
  setImp(themeToggle, "padding", ".4rem 1rem");
  setImp(themeToggle, "border-radius", "20px");
  setImp(themeToggle, "box-sizing", "border-box");
  setImp(themeToggle, "font-family", "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','Segoe UI',sans-serif");
  setImp(themeToggle, "font-size", ".85rem");
  setImp(themeToggle, "font-weight", "400");
  setImp(themeToggle, "line-height", "1");
  setImp(themeToggle, "letter-spacing", "0");
  setImp(themeToggle, "appearance", "none");
  setImp(themeToggle, "-webkit-appearance", "none");
  setImp(themeToggle, "outline", "none");
  setImp(themeToggle, "box-shadow", "none");
  setImp(themeToggle, "cursor", "pointer");
  setImp(themeToggle, "text-indent", "0");
  setImp(themeToggle, "white-space", "nowrap");
  setImp(themeToggle, "overflow", "visible");
  setImp(themeToggle, "backdrop-filter", "blur(10px)");
  setImp(themeToggle, "-webkit-backdrop-filter", "blur(10px)");

  if (container) {
    setImp(container, "padding-top", "5.4rem");
    setImp(container, "box-sizing", "border-box");
  }

  if (profileCard) {
    setImp(profileCard, "margin-top", ".5rem");
  }
}

function applyMobileLayout(topBar, credentialHeader, container, profileCard) {
  if (!topBar || !credentialHeader || !themeToggle) return;

  setImp(topBar, "position", "fixed");
  setImp(topBar, "top", "0");
  setImp(topBar, "left", "0");
  setImp(topBar, "right", "0");
  setImp(topBar, "width", "100%");
  setImp(topBar, "height", "0");
  setImp(topBar, "display", "block");
  setImp(topBar, "padding", "0");
  setImp(topBar, "margin", "0");
  setImp(topBar, "overflow", "visible");
  setImp(topBar, "z-index", "120");
  setImp(topBar, "pointer-events", "none");
  setImp(topBar, "box-sizing", "border-box");

  credentialHeader.innerHTML = `
    <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.15;">RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect</span>
    <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.15;">Associate (Renewal Scheduled)</span>
  `;

  setImp(credentialHeader, "position", "fixed");
  setImp(credentialHeader, "left", "50%");
  setImp(credentialHeader, "right", "auto");
  setImp(credentialHeader, "bottom", "auto");
  setImp(credentialHeader, "transform", "translateX(-50%)");
  setImp(credentialHeader, "width", "auto");
  setImp(credentialHeader, "max-width", "calc(100vw - 100px)");
  setImp(credentialHeader, "min-width", "0");
  setImp(credentialHeader, "margin", "0");
  setImp(credentialHeader, "padding", "0");
  setImp(credentialHeader, "text-align", "center");
  setImp(credentialHeader, "white-space", "normal");
  setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
  setImp(credentialHeader, "font-size", ".5rem");
  setImp(credentialHeader, "font-weight", "400");
  setImp(credentialHeader, "line-height", "1.15");
  setImp(credentialHeader, "letter-spacing", "0");
  setImp(credentialHeader, "z-index", "121");
  setImp(credentialHeader, "pointer-events", "none");

  setImp(themeToggle, "position", "fixed");
  setImp(themeToggle, "top", "16px");
  setImp(themeToggle, "right", "32px");
  setImp(themeToggle, "left", "auto");
  setImp(themeToggle, "bottom", "auto");
  setImp(themeToggle, "transform", "none");
  setImp(themeToggle, "margin", "0");
  setImp(themeToggle, "z-index", "122");
  setImp(themeToggle, "pointer-events", "auto");
  setImp(themeToggle, "display", "inline-flex");
  setImp(themeToggle, "align-items", "center");
  setImp(themeToggle, "justify-content", "center");
  setImp(themeToggle, "width", "auto");
  setImp(themeToggle, "min-width", "44px");
  setImp(themeToggle, "max-width", "none");
  setImp(themeToggle, "height", "auto");
  setImp(themeToggle, "min-height", "34px");
  setImp(themeToggle, "max-height", "none");
  setImp(themeToggle, "padding", ".4rem 1rem");
  setImp(themeToggle, "border-radius", "20px");
  setImp(themeToggle, "box-sizing", "border-box");
  setImp(themeToggle, "font-family", "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','Segoe UI',sans-serif");
  setImp(themeToggle, "font-size", ".85rem");
  setImp(themeToggle, "font-weight", "400");
  setImp(themeToggle, "line-height", "1");
  setImp(themeToggle, "letter-spacing", "0");
  setImp(themeToggle, "appearance", "none");
  setImp(themeToggle, "-webkit-appearance", "none");
  setImp(themeToggle, "outline", "none");
  setImp(themeToggle, "box-shadow", "none");
  setImp(themeToggle, "cursor", "pointer");
  setImp(themeToggle, "text-indent", "0");
  setImp(themeToggle, "white-space", "nowrap");
  setImp(themeToggle, "overflow", "visible");
  setImp(themeToggle, "backdrop-filter", "none");
  setImp(themeToggle, "-webkit-backdrop-filter", "none");

  if (container) {
    setImp(container, "padding-top", "4.9rem");
    setImp(container, "box-sizing", "border-box");
  }

  if (profileCard) {
    setImp(profileCard, "margin-top", ".35rem");
  } else {
    setImp(credentialHeader, "top", "18vh");
  }
}

function applyMenuLayout() {
  const topBar = document.querySelector(".top-bar");
  const credentialHeader = document.querySelector(".credential-header");
  const container = document.querySelector(".container");
  const profileCard = document.querySelector(".profile-card");
  const isMobile = window.innerWidth <= 768;

  if (!topBar || !credentialHeader || !themeToggle) return;

  if (isMobile) {
    applyMobileLayout(topBar, credentialHeader, container, profileCard);
  } else {
    applyDesktopLayout(topBar, credentialHeader, container, profileCard);
  }

  applyThemeIcon();
  applyToggleColors();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    applyThemeIcon();
    applyToggleColors();

    themeToggle.style.transition = "background 0.4s ease, color 0.4s ease";
    document.body.style.transition = "background 0.7s ease";

    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("blairTheme", theme);

    setTimeout(applyMenuLayout, 0);
    setTimeout(applyMenuLayout, 80);
  });
}

// Persist theme + layout
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("blairTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  applyThemeIcon();
  applyToggleColors();
  applyMenuLayout();

  setTimeout(applyMenuLayout, 0);
  setTimeout(applyMenuLayout, 80);
  setTimeout(applyMenuLayout, 160);
});

window.addEventListener("load", applyMenuLayout);
window.addEventListener("resize", applyMenuLayout);
window.addEventListener("orientationchange", applyMenuLayout);

/* ==========================================
   FINAL MOBILE FREEZE LOCK
   freezes menu text + toggle exactly in place
   after initial placement, never moves on scroll
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

  function freezeMobileMenu() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");
    const profileCard = document.querySelector(".profile-card");

    if (!topBar || !credentialHeader || !themeBtn) return;

    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const isDark = document.body.classList.contains("dark");

    if (!isMobile) {
      credentialHeader.textContent = DESKTOP_TEXT;

      setImp(topBar, "position", "absolute");
      setImp(topBar, "top", "0");
      setImp(topBar, "left", "0");
      setImp(topBar, "right", "auto");
      setImp(topBar, "width", "100%");
      setImp(topBar, "height", "auto");
      setImp(topBar, "display", "flex");
      setImp(topBar, "justify-content", "space-between");
      setImp(topBar, "align-items", "center");
      setImp(topBar, "padding", "1rem 2rem");
      setImp(topBar, "margin", "0");
      setImp(topBar, "overflow", "visible");
      setImp(topBar, "z-index", "100");
      setImp(topBar, "pointer-events", "auto");

      setImp(credentialHeader, "position", "static");
      setImp(credentialHeader, "top", "auto");
      setImp(credentialHeader, "left", "auto");
      setImp(credentialHeader, "right", "auto");
      setImp(credentialHeader, "bottom", "auto");
      setImp(credentialHeader, "transform", "none");
      setImp(credentialHeader, "width", "auto");
      setImp(credentialHeader, "max-width", "none");
      setImp(credentialHeader, "text-align", "left");
      setImp(credentialHeader, "white-space", "nowrap");
      setImp(credentialHeader, "pointer-events", "auto");

      setImp(themeBtn, "position", "static");
      setImp(themeBtn, "top", "auto");
      setImp(themeBtn, "right", "auto");
      setImp(themeBtn, "left", "auto");
      setImp(themeBtn, "bottom", "auto");
      setImp(themeBtn, "transform", "none");
      setImp(themeBtn, "width", "auto");
      setImp(themeBtn, "min-width", "44px");
      setImp(themeBtn, "max-width", "none");
      setImp(themeBtn, "height", "auto");
      setImp(themeBtn, "min-height", "34px");
      setImp(themeBtn, "max-height", "none");
      setImp(themeBtn, "padding", ".4rem 1rem");

      return;
    }

    /* top bar itself is fixed and inert */
    setImp(topBar, "position", "fixed");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "0");
    setImp(topBar, "width", "100%");
    setImp(topBar, "height", "0");
    setImp(topBar, "display", "block");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "120");
    setImp(topBar, "pointer-events", "none");

    /* lock 2-line text */
    credentialHeader.innerHTML = MOBILE_HTML;
    setImp(credentialHeader, "position", "fixed");
    setImp(credentialHeader, "top", "18vh");
    setImp(credentialHeader, "left", "50%");
    setImp(credentialHeader, "right", "auto");
    setImp(credentialHeader, "bottom", "auto");
    setImp(credentialHeader, "transform", "translateX(-50%)");
    setImp(credentialHeader, "width", "auto");
    setImp(credentialHeader, "max-width", "calc(100vw - 100px)");
    setImp(credentialHeader, "min-width", "0");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "text-align", "center");
    setImp(credentialHeader, "white-space", "normal");
    setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
    setImp(credentialHeader, "font-size", ".5rem");
    setImp(credentialHeader, "font-weight", "400");
    setImp(credentialHeader, "line-height", "1.15");
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

    /* exact blog/gallery-style right lock */
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
    setImp(themeBtn, "width", "auto");
    setImp(themeBtn, "min-width", "44px");
    setImp(themeBtn, "max-width", "none");
    setImp(themeBtn, "height", "auto");
    setImp(themeBtn, "min-height", "34px");
    setImp(themeBtn, "max-height", "none");
    setImp(themeBtn, "padding", ".4rem 1rem");
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
    setImp(themeBtn, "text-indent", "0");
    setImp(themeBtn, "white-space", "nowrap");
    setImp(themeBtn, "overflow", "visible");
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

  function initFreezeMobileMenu() {
    freezeMobileMenu();

    setTimeout(freezeMobileMenu, 0);
    setTimeout(freezeMobileMenu, 80);
    setTimeout(freezeMobileMenu, 160);

    window.addEventListener("load", freezeMobileMenu);
    window.addEventListener("resize", freezeMobileMenu);
    window.addEventListener("orientationchange", freezeMobileMenu);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn && !themeBtn.dataset.freezeMenuBound) {
      themeBtn.dataset.freezeMenuBound = "true";
      themeBtn.addEventListener("click", () => {
        setTimeout(freezeMobileMenu, 0);
        setTimeout(freezeMobileMenu, 80);
        setTimeout(freezeMobileMenu, 160);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFreezeMobileMenu);
  } else {
    initFreezeMobileMenu();
  }
})();

/* ==========================================
   FINAL STATIC MOBILE MENU LOCK
   kills scroll drift by reasserting fixed coordinates
   ========================================== */
(() => {
  const MOBILE_BP = 768;

  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function lockMobileMenuStatic() {
    if (window.innerWidth > MOBILE_BP) return;

    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle") || document.querySelector(".theme-btn");

    if (!topBar || !credentialHeader || !themeBtn) return;

    /* freeze shell */
    setImp(topBar, "position", "fixed");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "0");
    setImp(topBar, "width", "100%");
    setImp(topBar, "height", "0");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "display", "block");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "9999");
    setImp(topBar, "pointer-events", "none");
    setImp(topBar, "transform", "none");
    setImp(topBar, "-webkit-transform", "none");

    /* freeze text exactly in place */
    setImp(credentialHeader, "position", "fixed");
    setImp(credentialHeader, "top", "18vh");
    setImp(credentialHeader, "left", "50%");
    setImp(credentialHeader, "right", "auto");
    setImp(credentialHeader, "bottom", "auto");
    setImp(credentialHeader, "transform", "translateX(-50%)");
    setImp(credentialHeader, "-webkit-transform", "translateX(-50%)");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "max-width", "calc(100vw - 110px)");
    setImp(credentialHeader, "z-index", "10000");
    setImp(credentialHeader, "pointer-events", "none");

    /* freeze toggle exactly in place */
    setImp(themeBtn, "position", "fixed");
    setImp(themeBtn, "top", "16px");
    setImp(themeBtn, "right", "32px");
    setImp(themeBtn, "left", "auto");
    setImp(themeBtn, "bottom", "auto");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "transform", "none");
    setImp(themeBtn, "-webkit-transform", "none");
    setImp(themeBtn, "z-index", "10001");
    setImp(themeBtn, "pointer-events", "auto");
    setImp(themeBtn, "visibility", "visible");
    setImp(themeBtn, "opacity", "1");
  }

  function initStaticLock() {
    lockMobileMenuStatic();

    setTimeout(lockMobileMenuStatic, 0);
    setTimeout(lockMobileMenuStatic, 80);
    setTimeout(lockMobileMenuStatic, 160);
    setTimeout(lockMobileMenuStatic, 260);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initStaticLock);
  } else {
    initStaticLock();
  }

  window.addEventListener("load", initStaticLock);
  window.addEventListener("resize", initStaticLock);
  window.addEventListener("orientationchange", initStaticLock);

  const themeBtn = document.getElementById("themeToggle") || document.querySelector(".theme-btn");
  if (themeBtn && !themeBtn.dataset.staticMenuLockBound) {
    themeBtn.dataset.staticMenuLockBound = "true";
    themeBtn.addEventListener("click", () => {
      setTimeout(lockMobileMenuStatic, 0);
      setTimeout(lockMobileMenuStatic, 80);
      setTimeout(lockMobileMenuStatic, 160);
    });
  }
})();

/* ==========================================
   ABSOLUTE FINAL MOBILE MENU PIN
   forces fixed coordinates on load/resize/scroll
   ========================================== */
(() => {
  const MOBILE_BP = 768;

  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function hardPinMobileMenu() {
    if (window.innerWidth > MOBILE_BP) return;

    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn =
      document.getElementById("themeToggle") ||
      document.querySelector(".theme-btn");

    if (!topBar || !credentialHeader || !themeBtn) return;

    /* top shell */
    setImp(topBar, "position", "fixed");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "0");
    setImp(topBar, "width", "100%");
    setImp(topBar, "height", "0");
    setImp(topBar, "min-height", "0");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "display", "block");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "2147483000");
    setImp(topBar, "pointer-events", "none");
    setImp(topBar, "transform", "none");
    setImp(topBar, "-webkit-transform", "none");

    /* text */
    setImp(credentialHeader, "position", "fixed");
    setImp(credentialHeader, "top", "18vh");
    setImp(credentialHeader, "left", "50%");
    setImp(credentialHeader, "right", "auto");
    setImp(credentialHeader, "bottom", "auto");
    setImp(credentialHeader, "transform", "translateX(-50%)");
    setImp(credentialHeader, "-webkit-transform", "translateX(-50%)");
    setImp(credentialHeader, "width", "auto");
    setImp(credentialHeader, "max-width", "calc(100vw - 110px)");
    setImp(credentialHeader, "min-width", "0");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "z-index", "2147483001");
    setImp(credentialHeader, "pointer-events", "none");

    /* toggle */
    setImp(themeBtn, "position", "fixed");
    setImp(themeBtn, "top", "16px");
    setImp(themeBtn, "right", "32px");
    setImp(themeBtn, "left", "auto");
    setImp(themeBtn, "bottom", "auto");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "transform", "none");
    setImp(themeBtn, "-webkit-transform", "none");
    setImp(themeBtn, "z-index", "2147483002");
    setImp(themeBtn, "pointer-events", "auto");
    setImp(themeBtn, "visibility", "visible");
    setImp(themeBtn, "opacity", "1");
  }

  function runPin() {
    hardPinMobileMenu();
    setTimeout(hardPinMobileMenu, 0);
    setTimeout(hardPinMobileMenu, 50);
    setTimeout(hardPinMobileMenu, 120);
    setTimeout(hardPinMobileMenu, 220);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runPin);
  } else {
    runPin();
  }

  window.addEventListener("load", runPin);
  window.addEventListener("resize", runPin);
  window.addEventListener("orientationchange", runPin);
})();
