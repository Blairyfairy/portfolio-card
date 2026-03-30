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

function setImp(el, prop, value) {
  if (!el) return;
  el.style.setProperty(prop, value, "important");
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
  setImp(topBar, "top", "0");
  setImp(topBar, "left", "0");
  setImp(topBar, "width", "100%");
  setImp(topBar, "z-index", "100");
  setImp(topBar, "box-sizing", "border-box");
  setImp(topBar, "margin", "0");
  setImp(topBar, "font-size", ".85rem");
  setImp(topBar, "letter-spacing", "0");

  // ===== CREDENTIAL TEXT BASE =====
  setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
  setImp(credentialHeader, "font-weight", "400");
  setImp(credentialHeader, "letter-spacing", "0");
  setImp(credentialHeader, "margin", "0");
  setImp(credentialHeader, "padding", "0");
  setImp(credentialHeader, "color", "inherit");

  // ===== TOGGLE BASE =====
  setImp(themeToggle, "display", "inline-flex");
  setImp(themeToggle, "align-items", "center");
  setImp(themeToggle, "justify-content", "center");
  setImp(themeToggle, "box-sizing", "border-box");
  setImp(themeToggle, "border-radius", "20px");
  setImp(
    themeToggle,
    "font-family",
    "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','Segoe UI',sans-serif"
  );
  setImp(themeToggle, "font-size", ".85rem");
  setImp(themeToggle, "font-weight", "400");
  setImp(themeToggle, "letter-spacing", "0");
  setImp(themeToggle, "line-height", "1");
  setImp(themeToggle, "padding", "0");
  setImp(themeToggle, "margin", "0");
  setImp(themeToggle, "appearance", "none");
  setImp(themeToggle, "-webkit-appearance", "none");
  setImp(themeToggle, "outline", "none");
  setImp(themeToggle, "box-shadow", "none");
  setImp(themeToggle, "cursor", "pointer");
  setImp(themeToggle, "text-indent", "0");
  setImp(themeToggle, "white-space", "nowrap");
  setImp(themeToggle, "overflow", "visible");
  setImp(themeToggle, "pointer-events", "auto");

  if (isDark) {
    setImp(themeToggle, "background", "rgba(8,10,14,0.42)");
    setImp(themeToggle, "border", "1px solid rgba(240,239,244,0.14)");
    setImp(themeToggle, "color", "#f0eff4");
  } else {
    setImp(themeToggle, "background", "rgba(58,62,59,0.15)");
    setImp(themeToggle, "border", "1px solid rgba(240,239,244,0.22)");
    setImp(themeToggle, "color", "#f0eff4");
  }

  // ===== DESKTOP =====
  if (!isMobile) {
    setImp(topBar, "position", "absolute");
    setImp(topBar, "display", "flex");
    setImp(topBar, "justify-content", "space-between");
    setImp(topBar, "align-items", "center");
    setImp(topBar, "padding", "1rem 2rem");
    setImp(topBar, "height", "auto");
    setImp(topBar, "right", "auto");
    setImp(topBar, "overflow", "visible");
    setImp(topBar, "pointer-events", "auto");

    credentialHeader.textContent =
      "RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect Associate (Renewal Scheduled)";
    setImp(credentialHeader, "position", "static");
    setImp(credentialHeader, "transform", "none");
    setImp(credentialHeader, "left", "auto");
    setImp(credentialHeader, "top", "auto");
    setImp(credentialHeader, "width", "auto");
    setImp(credentialHeader, "max-width", "none");
    setImp(credentialHeader, "white-space", "nowrap");
    setImp(credentialHeader, "text-align", "left");
    setImp(credentialHeader, "font-size", ".85rem");
    setImp(credentialHeader, "line-height", "1.2");
    setImp(credentialHeader, "pointer-events", "auto");
    setImp(credentialHeader, "z-index", "auto");

    setImp(themeToggle, "position", "static");
    setImp(themeToggle, "top", "auto");
    setImp(themeToggle, "right", "auto");
    setImp(themeToggle, "left", "auto");
    setImp(themeToggle, "bottom", "auto");
    setImp(themeToggle, "transform", "none");
    setImp(themeToggle, "z-index", "101");
    setImp(themeToggle, "width", "44px");
    setImp(themeToggle, "min-width", "44px");
    setImp(themeToggle, "max-width", "44px");
    setImp(themeToggle, "height", "34px");
    setImp(themeToggle, "min-height", "34px");
    setImp(themeToggle, "max-height", "34px");
    setImp(themeToggle, "backdrop-filter", "blur(10px)");
    setImp(themeToggle, "-webkit-backdrop-filter", "blur(10px)");

    if (container) {
      setImp(container, "padding-top", "5.4rem");
      setImp(container, "box-sizing", "border-box");
    }

    if (profileCard) {
      setImp(profileCard, "margin-top", ".5rem");
    }

    applyThemeIcon();
    return;
  }

  // ===== MOBILE =====
  setImp(topBar, "position", "fixed");
  setImp(topBar, "display", "block");
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

  credentialHeader.innerHTML = `
    <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.15;">RHCE6 · AWS Cloud Practitioner · AWS Solutions Architect</span>
    <span style="display:block;white-space:nowrap;margin:0;padding:0;text-align:center;line-height:1.15;">Associate (Renewal Scheduled)</span>
  `;

  setImp(credentialHeader, "position", "fixed");
  setImp(credentialHeader, "left", "50%");
  setImp(credentialHeader, "transform", "translateX(-50%)");
  setImp(credentialHeader, "width", "auto");
  setImp(credentialHeader, "max-width", "calc(100vw - 100px)");
  setImp(credentialHeader, "min-width", "0");
  setImp(credentialHeader, "white-space", "normal");
  setImp(credentialHeader, "text-align", "center");
  setImp(credentialHeader, "font-size", ".5rem");
  setImp(credentialHeader, "line-height", "1.15");
  setImp(credentialHeader, "z-index", "121");
  setImp(credentialHeader, "pointer-events", "none");

  setImp(themeToggle, "position", "fixed");
  setImp(themeToggle, "top", "16px");
  setImp(themeToggle, "right", "32px");
  setImp(themeToggle, "left", "auto");
  setImp(themeToggle, "bottom", "auto");
  setImp(themeToggle, "transform", "none");
  setImp(themeToggle, "z-index", "122");
  setImp(themeToggle, "width", "47px");
  setImp(themeToggle, "min-width", "47px");
  setImp(themeToggle, "max-width", "47px");
  setImp(themeToggle, "height", "35px");
  setImp(themeToggle, "min-height", "35px");
  setImp(themeToggle, "max-height", "35px");
  setImp(themeToggle, "backdrop-filter", "none");
  setImp(themeToggle, "-webkit-backdrop-filter", "none");

  if (container) {
    setImp(container, "padding-top", "4.9rem");
    setImp(container, "box-sizing", "border-box");
  }

  if (profileCard) {
    setImp(profileCard, "margin-top", ".35rem");

    const cardRect = profileCard.getBoundingClientRect();
    const headerHeight = credentialHeader.offsetHeight || 20;
    const targetTop = Math.max(12, Math.round((cardRect.top - headerHeight) / 2));
    setImp(credentialHeader, "top", `${targetTop}px`);
  } else {
    setImp(credentialHeader, "top", "18vh");
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

window.addEventListener("load", applyMenuLayout);
window.addEventListener("resize", applyMenuLayout);
window.addEventListener("orientationchange", applyMenuLayout);
