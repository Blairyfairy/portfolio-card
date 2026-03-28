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
   force-match blog.html top bar in desktop/mobile
   ========================================== */
(() => {
  const STYLE_ID = 'portfolio-card-final-menu-toggle-exact-match';

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      body.portfolio-card-final-menu-match .top-bar,
      body.portfolio-card-final-menu-match .top-bar *,
      body.portfolio-card-final-menu-match .credential-header,
      body.portfolio-card-final-menu-match #themeToggle,
      body.portfolio-card-final-menu-match .theme-btn{
        transition:none !important;
        font-family:'Segoe UI', sans-serif !important;
      }

      body.portfolio-card-final-menu-match .top-bar{
        display:flex !important;
        justify-content:space-between !important;
        align-items:center !important;
        padding:1rem 2rem !important;
        font-size:.85rem !important;
        position:absolute !important;
        top:0 !important;
        left:0 !important;
        width:100% !important;
        z-index:100 !important;
        box-sizing:border-box !important;
        margin:0 !important;
        letter-spacing:0 !important;
      }

      body.portfolio-card-final-menu-match .credential-header{
        font-size:.85rem !important;
        line-height:1.2 !important;
        font-weight:400 !important;
        letter-spacing:0 !important;
        margin:0 !important;
        padding:0 !important;
        white-space:nowrap !important;
        flex:0 1 auto !important;
      }

      body.portfolio-card-final-menu-match #themeToggle,
      body.portfolio-card-final-menu-match .theme-btn{
        background:var(--glass-bg) !important;
        border:1px solid var(--glass-border) !important;
        border-radius:20px !important;
        padding:.4rem 1rem !important;
        cursor:pointer !important;
        backdrop-filter:blur(10px) !important;
        -webkit-backdrop-filter:blur(10px) !important;
        color:var(--text-light) !important;
        box-shadow:none !important;
        margin:0 !important;
        display:inline-flex !important;
        align-items:center !important;
        justify-content:center !important;
        font-size:.85rem !important;
        font-weight:400 !important;
        line-height:1 !important;
        letter-spacing:0 !important;
        min-width:unset !important;
        min-height:unset !important;
        width:auto !important;
        height:auto !important;
        vertical-align:middle !important;
        appearance:auto !important;
        -webkit-appearance:auto !important;
        flex:0 0 auto !important;
      }

      @media (max-width:900px){
        body.portfolio-card-final-menu-match .top-bar{
          display:flex !important;
          justify-content:space-between !important;
          align-items:center !important;
          width:100% !important;
          left:0 !important;
          top:0 !important;
          box-sizing:border-box !important;
          padding:1rem 2rem !important;
          font-size:.85rem !important;
          position:absolute !important;
        }

        body.portfolio-card-final-menu-match .credential-header{
          font-size:.425rem !important;
          line-height:1.2 !important;
          font-weight:400 !important;
          letter-spacing:0 !important;
          margin:0 !important;
          padding:0 !important;
          white-space:nowrap !important;
          flex:0 1 auto !important;
        }

        body.portfolio-card-final-menu-match #themeToggle,
        body.portfolio-card-final-menu-match .theme-btn{
          background:var(--glass-bg) !important;
          border:1px solid var(--glass-border) !important;
          border-radius:20px !important;
          padding:.4rem 1rem !important;
          cursor:pointer !important;
          backdrop-filter:blur(10px) !important;
          -webkit-backdrop-filter:blur(10px) !important;
          color:var(--text-light) !important;
          box-shadow:none !important;
          margin:0 !important;
          display:inline-flex !important;
          align-items:center !important;
          justify-content:center !important;
          font-size:.85rem !important;
          font-weight:400 !important;
          line-height:1 !important;
          letter-spacing:0 !important;
          min-width:unset !important;
          min-height:unset !important;
          width:auto !important;
          height:auto !important;
          vertical-align:middle !important;
          appearance:auto !important;
          -webkit-appearance:auto !important;
          flex:0 0 auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function syncThemeIcon() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  }

  function applyMatch() {
    document.body.classList.add("portfolio-card-final-menu-match");
    syncThemeIcon();
  }

  function init() {
    ensureStyle();
    applyMatch();

    setTimeout(applyMatch, 0);
    setTimeout(applyMatch, 50);
    setTimeout(applyMatch, 120);
    setTimeout(applyMatch, 220);

    window.addEventListener("resize", applyMatch);
    window.addEventListener("orientationchange", applyMatch);
    window.addEventListener("load", applyMatch);

    const mo = new MutationObserver(() => {
      requestAnimationFrame(applyMatch);
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
