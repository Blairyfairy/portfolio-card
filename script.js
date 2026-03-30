/* ==========================================
   FINAL ABSOLUTE PERFECT LOCK
   keeps exact width/behavior, slightly taller only
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

    /* CORRECT icon direction:
       light page = moon button
       dark page = sun button */
    themeBtn.textContent = isDark ? "☀️" : "🌙";

    /* keep exact left/right size */
    setImp(themeBtn, "width", "46px");
    setImp(themeBtn, "min-width", "46px");
    setImp(themeBtn, "max-width", "46px");

    /* only a tiny up/down increase */
    setImp(themeBtn, "height", "36px");
    setImp(themeBtn, "min-height", "36px");
    setImp(themeBtn, "max-height", "36px");

    setImp(themeBtn, "padding-top", "0");
    setImp(themeBtn, "padding-bottom", "0");
    setImp(themeBtn, "padding-left", "0");
    setImp(themeBtn, "padding-right", "0");
    setImp(themeBtn, "line-height", "36px");

    /* perfect centering */
    setImp(themeBtn, "display", "inline-flex");
    setImp(themeBtn, "align-items", "center");
    setImp(themeBtn, "justify-content", "center");
    setImp(themeBtn, "box-sizing", "border-box");
    setImp(themeBtn, "border-radius", "20px");
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

    /* preserve working colors */
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
