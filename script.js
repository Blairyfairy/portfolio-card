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
  setImp(credentialHeader, "height", "auto");
  setImp(credentialHeader, "min-height", "0");
  setImp(credentialHeader, "max-height", "none");
  setImp(credentialHeader, "margin", "0");
  setImp(credentialHeader, "padding", "0");
  setImp(credentialHeader, "overflow", "visible");
  setImp(credentialHeader, "text-align", "left");
  setImp(credentialHeader, "white-space", "nowrap");
  setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
  setImp(credentialHeader, "font-size", ".85rem");
  setImp(credentialHeader, "font-weight", "400");
  setImp(credentialHeader, "line-height", "1.2");
  setImp(credentialHeader, "letter-spacing", "0");
  setImp(credentialHeader, "z-index", "auto");
  setImp(credentialHeader, "pointer-events", "auto");
  setImp(credentialHeader, "visibility", "visible");
  setImp(credentialHeader, "opacity", "1");

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

  setImp(credentialHeader, "visibility", "hidden");
  setImp(credentialHeader, "opacity", "0");

  setImp(topBar, "position", "absolute");
  setImp(topBar, "top", "0");
  setImp(topBar, "left", "0");
  setImp(topBar, "right", "auto");
  setImp(topBar, "width", "100%");
  setImp(topBar, "height", "56px");
  setImp(topBar, "min-height", "56px");
  setImp(topBar, "max-height", "56px");
  setImp(topBar, "display", "block");
  setImp(topBar, "padding", "0");
  setImp(topBar, "margin", "0");
  setImp(topBar, "overflow", "visible");
  setImp(topBar, "z-index", "120");
  setImp(topBar, "pointer-events", "auto");
  setImp(topBar, "box-sizing", "border-box");

  credentialHeader.innerHTML = `
    <span class="mobile-cred-line-1" style="display:block;margin:0;padding:0;white-space:nowrap;text-align:center;line-height:1.05;">RHCE6 · AWS Cloud Practitioner ·</span>
    <span class="mobile-cred-line-2" style="display:block;margin:0;padding:0;white-space:nowrap;text-align:center;line-height:1.05;">AWS Solutions Architect Associate (Renewal Scheduled)</span>
  `;

  setImp(credentialHeader, "position", "absolute");
  setImp(credentialHeader, "top", "10px");
  setImp(credentialHeader, "left", "50%");
  setImp(credentialHeader, "right", "auto");
  setImp(credentialHeader, "bottom", "auto");
  setImp(credentialHeader, "transform", "translateX(-50%)");
  setImp(credentialHeader, "width", "252px");
  setImp(credentialHeader, "min-width", "252px");
  setImp(credentialHeader, "max-width", "252px");
  setImp(credentialHeader, "height", "24px");
  setImp(credentialHeader, "min-height", "24px");
  setImp(credentialHeader, "max-height", "24px");
  setImp(credentialHeader, "margin", "0");
  setImp(credentialHeader, "padding", "0");
  setImp(credentialHeader, "overflow", "hidden");
  setImp(credentialHeader, "text-align", "center");
  setImp(credentialHeader, "white-space", "normal");
  setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
  setImp(credentialHeader, "font-size", ".5rem");
  setImp(credentialHeader, "font-weight", "400");
  setImp(credentialHeader, "line-height", "1.05");
  setImp(credentialHeader, "letter-spacing", "0");
  setImp(credentialHeader, "z-index", "121");
  setImp(credentialHeader, "pointer-events", "none");

  const line1 = credentialHeader.querySelector(".mobile-cred-line-1");
  const line2 = credentialHeader.querySelector(".mobile-cred-line-2");

  if (line1) {
    setImp(line1, "display", "block");
    setImp(line1, "width", "252px");
    setImp(line1, "min-width", "252px");
    setImp(line1, "max-width", "252px");
    setImp(line1, "height", "11px");
    setImp(line1, "min-height", "11px");
    setImp(line1, "max-height", "11px");
    setImp(line1, "margin", "0");
    setImp(line1, "padding", "0");
    setImp(line1, "overflow", "hidden");
    setImp(line1, "white-space", "nowrap");
    setImp(line1, "text-align", "center");
    setImp(line1, "font-size", ".5rem");
    setImp(line1, "line-height", "1.05");
    setImp(line1, "letter-spacing", "0");
  }

  if (line2) {
    setImp(line2, "display", "block");
    setImp(line2, "width", "252px");
    setImp(line2, "min-width", "252px");
    setImp(line2, "max-width", "252px");
    setImp(line2, "height", "11px");
    setImp(line2, "min-height", "11px");
    setImp(line2, "max-height", "11px");
    setImp(line2, "margin", "2px 0 0 0");
    setImp(line2, "padding", "0");
    setImp(line2, "overflow", "hidden");
    setImp(line2, "white-space", "nowrap");
    setImp(line2, "text-align", "center");
    setImp(line2, "font-size", ".5rem");
    setImp(line2, "line-height", "1.05");
    setImp(line2, "letter-spacing", "0");
  }

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

  requestAnimationFrame(() => {
    setImp(credentialHeader, "visibility", "visible");
    setImp(credentialHeader, "opacity", "1");
  });
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
