/* ==========================================
   FINAL MOBILE RHCE6 POSITION LOCK
   keeps toggle working correctly
   APPEND ONLY
   ========================================== */
(() => {
  const MOBILE_BREAKPOINT = 768;

  function setImp(el, prop, value) {
    if (!el) return;
    el.style.setProperty(prop, value, "important");
  }

  function keepToggleWorking(themeBtn) {
    if (!themeBtn) return;

    const isDark = document.body.classList.contains("dark");

    /* keep exact working size */
    setImp(themeBtn, "width", "48px");
    setImp(themeBtn, "min-width", "48px");
    setImp(themeBtn, "max-width", "48px");
    setImp(themeBtn, "height", "34px");
    setImp(themeBtn, "min-height", "34px");
    setImp(themeBtn, "max-height", "34px");

    /* keep clickability + proper rendering */
    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "padding", "0");
    setImp(themeBtn, "line-height", "34px");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "border-radius", "20px");
    setImp(themeBtn, "position", "relative");
    setImp(themeBtn, "z-index", "101");
    setImp(themeBtn, "pointer-events", "auto");
    setImp(themeBtn, "cursor", "pointer");
    setImp(themeBtn, "flex", "0 0 auto");
    setImp(themeBtn, "transform", "none");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "vertical-align", "middle");
    setImp(themeBtn, "appearance", "none");
    setImp(themeBtn, "-webkit-appearance", "none");
    setImp(themeBtn, "outline", "none");
    setImp(themeBtn, "box-shadow", "none");

    /* preserve correct icon behavior */
    themeBtn.textContent = isDark ? "☀️" : "🌙";

    /* preserve thin border + theme colors */
    if (isDark) {
      setImp(themeBtn, "background", "rgba(8,10,14,0.42)");
      setImp(themeBtn, "border", "1px solid rgba(240,239,244,0.14)");
      setImp(themeBtn, "color", "#f0eff4");
    } else {
      setImp(themeBtn, "background", "rgba(58,62,59,0.15)");
      setImp(themeBtn, "border", "1px solid rgba(240,239,244,0.22)");
      setImp(themeBtn, "color", "#f0eff4");
    }

    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      setImp(themeBtn, "backdrop-filter", "none");
      setImp(themeBtn, "-webkit-backdrop-filter", "none");
    } else {
      setImp(themeBtn, "backdrop-filter", "blur(10px)");
      setImp(themeBtn, "-webkit-backdrop-filter", "blur(10px)");
    }
  }

  function lockRHCE6PositionWithoutBreakingToggle() {
    const credential = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");

    if (!credential || !themeBtn) return;

    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    if (isMobile) {
      /* only nudge RHCE6 block visually */
      setImp(credential, "position", "relative");
      setImp(credential, "top", "6px");
      setImp(credential, "margin", "0 auto");
      setImp(credential, "transform", "none");
      setImp(credential, "z-index", "100");
      setImp(credential, "pointer-events", "auto");

      /* keep toggle untouched in its own layer */
      setImp(themeBtn, "justify-self", "end");
      setImp(themeBtn, "align-self", "start");
    } else {
      setImp(credential, "top", "0");
      setImp(credential, "position", "relative");
      setImp(credential, "transform", "none");
    }

    keepToggleWorking(themeBtn);
  }

  function initRHCE6LockSafe() {
    lockRHCE6PositionWithoutBreakingToggle();

    requestAnimationFrame(lockRHCE6PositionWithoutBreakingToggle);
    setTimeout(lockRHCE6PositionWithoutBreakingToggle, 0);
    setTimeout(lockRHCE6PositionWithoutBreakingToggle, 80);
    setTimeout(lockRHCE6PositionWithoutBreakingToggle, 160);
    setTimeout(lockRHCE6PositionWithoutBreakingToggle, 260);

    window.addEventListener("load", lockRHCE6PositionWithoutBreakingToggle);
    window.addEventListener("resize", lockRHCE6PositionWithoutBreakingToggle);
    window.addEventListener("orientationchange", lockRHCE6PositionWithoutBreakingToggle);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTimeout(lockRHCE6PositionWithoutBreakingToggle, 0);
        setTimeout(lockRHCE6PositionWithoutBreakingToggle, 80);
        setTimeout(lockRHCE6PositionWithoutBreakingToggle, 160);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRHCE6LockSafe);
  } else {
    initRHCE6LockSafe();
  }
})();
