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

window.addEventListener("load", applyMenuLayout);
window.addEventListener("resize", applyMenuLayout);
window.addEventListener("orientationchange", applyMenuLayout);
