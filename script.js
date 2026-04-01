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
  setImp(credentialHeader, "bottom", "auto");
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

  setImp(topBar, "position", "absolute");
  setImp(topBar, "top", "0");
  setImp(topBar, "left", "0");
  setImp(topBar, "right", "auto");
  setImp(topBar, "width", "100%");
  setImp(topBar, "height", "56px");
  setImp(topBar, "display", "block");
  setImp(topBar, "padding", "0");
  setImp(topBar, "margin", "0");
  setImp(topBar, "overflow", "visible");
  setImp(topBar, "z-index", "120");
  setImp(topBar, "pointer-events", "auto");
  setImp(topBar, "box-sizing", "border-box");

  credentialHeader.innerHTML = `
    <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.15;">RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect</span>
    <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.15;">Associate (Renewal Scheduled)</span>
  `;

  setImp(credentialHeader, "position", "absolute");
  setImp(credentialHeader, "top", "12px");
  setImp(credentialHeader, "left", "50%");
  setImp(credentialHeader, "right", "auto");
  setImp(credentialHeader, "bottom", "auto");
  setImp(credentialHeader, "transform", "translateX(-50%)");
  setImp(credentialHeader, "width", "auto");
  setImp(credentialHeader, "max-width", "calc(100vw - 110px)");
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

  setImp(themeToggle, "position", "absolute");
  setImp(themeToggle, "top", "12px");
  setImp(themeToggle, "right", "16px");
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
    setImp(container, "padding-top", "5.6rem");
    setImp(container, "box-sizing", "border-box");
  }

  if (profileCard) {
    setImp(profileCard, "margin-top", "0");
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
   APPEND ONLY — MOBILE ONLY
   FORCE RHCE6 TO SAME ROW AS TOGGLE CENTER
   FORCE TOGGLE TO GALLERY/BLOG-LIKE POSITION
   LEAVE DESKTOP/NON-MOBILE ALONE
   ========================================== */

(function () {
  function forceMobileHeaderMatch() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeToggle = document.getElementById("themeToggle");
    const container = document.querySelector(".container");
    const profileCard = document.querySelector(".profile-card");

    if (!topBar || !credentialHeader || !themeToggle) return;
    if (window.innerWidth > 768) return;

    setImp(topBar, "position", "absolute");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "auto");
    setImp(topBar, "width", "100%");
    setImp(topBar, "min-height", "52px");
    setImp(topBar, "height", "52px");
    setImp(topBar, "display", "block");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "120");
    setImp(topBar, "pointer-events", "auto");
    setImp(topBar, "box-sizing", "border-box");

    credentialHeader.innerHTML = `
      <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1;">RHCE6 · AWS Cloud Practitioner ·</span>
      <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1;">AWS Solutions Architect Associate (Renewal Scheduled)</span>
    `;

    setImp(credentialHeader, "position", "absolute");
    setImp(credentialHeader, "top", "10px");
    setImp(credentialHeader, "left", "50%");
    setImp(credentialHeader, "right", "auto");
    setImp(credentialHeader, "bottom", "auto");
    setImp(credentialHeader, "transform", "translateX(-50%)");
    setImp(credentialHeader, "width", "auto");
    setImp(credentialHeader, "max-width", "calc(100vw - 92px)");
    setImp(credentialHeader, "min-width", "0");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "text-align", "center");
    setImp(credentialHeader, "white-space", "normal");
    setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
    setImp(credentialHeader, "font-size", ".5rem");
    setImp(credentialHeader, "font-weight", "400");
    setImp(credentialHeader, "line-height", "1");
    setImp(credentialHeader, "letter-spacing", "0");
    setImp(credentialHeader, "z-index", "121");
    setImp(credentialHeader, "pointer-events", "none");

    setImp(themeToggle, "position", "absolute");
    setImp(themeToggle, "top", "9px");
    setImp(themeToggle, "right", "16px");
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
      setImp(container, "padding-top", "5.6rem");
      setImp(container, "box-sizing", "border-box");
    }

    if (profileCard) {
      setImp(profileCard, "margin-top", "0");
    }
  }

  document.addEventListener("DOMContentLoaded", forceMobileHeaderMatch);
  window.addEventListener("load", forceMobileHeaderMatch);
  window.addEventListener("resize", forceMobileHeaderMatch);
  window.addEventListener("orientationchange", forceMobileHeaderMatch);

  setTimeout(forceMobileHeaderMatch, 0);
  setTimeout(forceMobileHeaderMatch, 80);
  setTimeout(forceMobileHeaderMatch, 160);
  setTimeout(forceMobileHeaderMatch, 300);
})();


/* ==========================================
   APPEND ONLY — MOBILE MENU HARD LOCK
   STOPS HEADER TEXT FROM RESHAPING / MOVING
   MATCHES GALLERY/BLOG MOBILE TOGGLE POSITION
   DESKTOP/NON-MOBILE LEFT ALONE
   ========================================== */

(function () {
  const MOBILE_BREAKPOINT = 768;

  function lockMobileHeaderShape() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeToggle = document.getElementById("themeToggle");
    const container = document.querySelector(".container");
    const profileCard = document.querySelector(".profile-card");

    if (!topBar || !credentialHeader || !themeToggle) return;
    if (window.innerWidth > MOBILE_BREAKPOINT) return;

    /* hard-lock top bar */
    setImp(topBar, "position", "absolute");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "right", "auto");
    setImp(topBar, "width", "100%");
    setImp(topBar, "min-height", "52px");
    setImp(topBar, "height", "52px");
    setImp(topBar, "display", "block");
    setImp(topBar, "padding", "0");
    setImp(topBar, "margin", "0");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "z-index", "120");
    setImp(topBar, "pointer-events", "auto");
    setImp(topBar, "box-sizing", "border-box");
    setImp(topBar, "font-size", "inherit");

    /* exact same 2 rows every time */
    credentialHeader.innerHTML =
      '<span class="mobile-cred-line mobile-cred-line-1" style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.05;">RHCE6 · AWS Cloud Practitioner ·</span>' +
      '<span class="mobile-cred-line mobile-cred-line-2" style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.05;">AWS Solutions Architect Associate (Renewal Scheduled)</span>';

    /* lock header block so it cannot reflow into other shapes */
    setImp(credentialHeader, "position", "absolute");
    setImp(credentialHeader, "top", "8px");
    setImp(credentialHeader, "left", "50%");
    setImp(credentialHeader, "right", "auto");
    setImp(credentialHeader, "bottom", "auto");
    setImp(credentialHeader, "transform", "translateX(-50%)");
    setImp(credentialHeader, "width", "250px");
    setImp(credentialHeader, "min-width", "250px");
    setImp(credentialHeader, "max-width", "250px");
    setImp(credentialHeader, "height", "24px");
    setImp(credentialHeader, "min-height", "24px");
    setImp(credentialHeader, "max-height", "24px");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "text-align", "center");
    setImp(credentialHeader, "white-space", "normal");
    setImp(credentialHeader, "overflow", "hidden");
    setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
    setImp(credentialHeader, "font-size", ".5rem");
    setImp(credentialHeader, "font-weight", "400");
    setImp(credentialHeader, "line-height", "1.05");
    setImp(credentialHeader, "letter-spacing", "0");
    setImp(credentialHeader, "z-index", "121");
    setImp(credentialHeader, "pointer-events", "none");
    setImp(credentialHeader, "visibility", "visible");
    setImp(credentialHeader, "opacity", "1");

    const line1 = credentialHeader.querySelector(".mobile-cred-line-1");
    const line2 = credentialHeader.querySelector(".mobile-cred-line-2");

    if (line1) {
      setImp(line1, "display", "block");
      setImp(line1, "width", "250px");
      setImp(line1, "min-width", "250px");
      setImp(line1, "max-width", "250px");
      setImp(line1, "height", "11px");
      setImp(line1, "min-height", "11px");
      setImp(line1, "max-height", "11px");
      setImp(line1, "margin", "0");
      setImp(line1, "padding", "0");
      setImp(line1, "overflow", "hidden");
      setImp(line1, "white-space", "nowrap");
      setImp(line1, "text-align", "center");
      setImp(line1, "line-height", "1.05");
      setImp(line1, "font-size", ".5rem");
      setImp(line1, "letter-spacing", "0");
    }

    if (line2) {
      setImp(line2, "display", "block");
      setImp(line2, "width", "250px");
      setImp(line2, "min-width", "250px");
      setImp(line2, "max-width", "250px");
      setImp(line2, "height", "11px");
      setImp(line2, "min-height", "11px");
      setImp(line2, "max-height", "11px");
      setImp(line2, "margin", "2px 0 0 0");
      setImp(line2, "padding", "0");
      setImp(line2, "overflow", "hidden");
      setImp(line2, "white-space", "nowrap");
      setImp(line2, "text-align", "center");
      setImp(line2, "line-height", "1.05");
      setImp(line2, "font-size", ".5rem");
      setImp(line2, "letter-spacing", "0");
    }

    /* force gallery/blog-style toggle placement + size */
    setImp(themeToggle, "position", "absolute");
    setImp(themeToggle, "top", "10px");
    setImp(themeToggle, "right", "16px");
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
    setImp(themeToggle, "max-width", "44px");
    setImp(themeToggle, "height", "34px");
    setImp(themeToggle, "min-height", "34px");
    setImp(themeToggle, "max-height", "34px");
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
    setImp(themeToggle, "overflow", "hidden");
    setImp(themeToggle, "backdrop-filter", "none");
    setImp(themeToggle, "-webkit-backdrop-filter", "none");

    if (container) {
      setImp(container, "padding-top", "5.6rem");
      setImp(container, "box-sizing", "border-box");
    }

    if (profileCard) {
      setImp(profileCard, "margin-top", "0");
    }
  }

  function hideThenLockMobileHeader() {
    const credentialHeader = document.querySelector(".credential-header");
    if (credentialHeader && window.innerWidth <= MOBILE_BREAKPOINT) {
      setImp(credentialHeader, "visibility", "hidden");
      setImp(credentialHeader, "opacity", "0");
    }

    lockMobileHeaderShape();

    requestAnimationFrame(() => {
      lockMobileHeaderShape();
      const headerAgain = document.querySelector(".credential-header");
      if (headerAgain && window.innerWidth <= MOBILE_BREAKPOINT) {
        setImp(headerAgain, "visibility", "visible");
        setImp(headerAgain, "opacity", "1");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", hideThenLockMobileHeader);
  window.addEventListener("load", hideThenLockMobileHeader);
  window.addEventListener("resize", hideThenLockMobileHeader);
  window.addEventListener("orientationchange", hideThenLockMobileHeader);

  setTimeout(hideThenLockMobileHeader, 0);
  setTimeout(hideThenLockMobileHeader, 40);
  setTimeout(hideThenLockMobileHeader, 120);
  setTimeout(hideThenLockMobileHeader, 240);
  setTimeout(hideThenLockMobileHeader, 500);
})();

