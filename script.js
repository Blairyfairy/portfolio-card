/* ==========================================
   FINAL HARD-LOCK MOBILE CREDENTIAL HEADER
   NO JUMP / NO FLICKER / APPEND ONLY
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

  function applyLineStyles(scope) {
    const line1 = scope.querySelector(".cred-line-1");
    const line2 = scope.querySelector(".cred-line-2");

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

  function applyMobileLayout(topBar, credentialHeader, themeBtn) {
    /* top bar stays stable */
    setImp(topBar, "display", "grid");
    setImp(topBar, "grid-template-columns", "1fr auto");
    setImp(topBar, "align-items", "start");
    setImp(topBar, "column-gap", "0.75rem");
    setImp(topBar, "row-gap", "0");
    setImp(topBar, "padding", "1rem 2rem");
    setImp(topBar, "width", "100%");
    setImp(topBar, "box-sizing", "border-box");
    setImp(topBar, "position", "absolute");
    setImp(topBar, "top", "0");
    setImp(topBar, "left", "0");
    setImp(topBar, "z-index", "100");
    setImp(topBar, "overflow", "visible");

    /* credential block hard lock */
    setImp(credentialHeader, "display", "block");
    setImp(credentialHeader, "width", "100%");
    setImp(credentialHeader, "max-width", "calc(100% - 60px)");
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
    setImp(credentialHeader, "transform", "none");
    setImp(credentialHeader, "min-height", "1.2rem");

    /* toggle remains anchored */
    setImp(themeBtn, "justify-self", "end");
    setImp(themeBtn, "align-self", "start");
    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "position", "relative");
    setImp(themeBtn, "z-index", "101");

    applyLineStyles(credentialHeader);
  }

  function applyDesktopLayout(topBar, credentialHeader, themeBtn) {
    setImp(topBar, "display", "flex");
    setImp(topBar, "justify-content", "space-between");
    setImp(topBar, "align-items", "center");
    setImp(topBar, "padding", "1rem 2rem");
    setImp(topBar, "width", "100%");
    setImp(topBar, "box-sizing", "border-box");

    setImp(credentialHeader, "display", "block");
    setImp(credentialHeader, "width", "auto");
    setImp(credentialHeader, "max-width", "none");
    setImp(credentialHeader, "min-width", "0");
    setImp(credentialHeader, "margin", "0");
    setImp(credentialHeader, "padding", "0");
    setImp(credentialHeader, "box-sizing", "border-box");
    setImp(credentialHeader, "text-align", "left");
    setImp(credentialHeader, "white-space", "nowrap");
    setImp(credentialHeader, "overflow", "visible");
    setImp(credentialHeader, "line-height", "1.2");
    setImp(credentialHeader, "font-size", "0.85rem");
    setImp(credentialHeader, "font-family", "'Segoe UI', sans-serif");
    setImp(credentialHeader, "font-weight", "400");
    setImp(credentialHeader, "letter-spacing", "0");
    setImp(credentialHeader, "justify-self", "auto");
    setImp(credentialHeader, "align-self", "center");
    setImp(credentialHeader, "min-height", "0");

    setImp(themeBtn, "margin", "0");
    setImp(themeBtn, "position", "relative");
    setImp(themeBtn, "z-index", "101");
  }

  function ensureCorrectContent(credentialHeader, isMobile) {
    const currentMode = credentialHeader.dataset.credMode || "";

    if (isMobile) {
      if (currentMode !== "mobile") {
        credentialHeader.innerHTML = MOBILE_HTML;
        credentialHeader.dataset.credMode = "mobile";
      }
      applyLineStyles(credentialHeader);
    } else {
      if (currentMode !== "desktop") {
        credentialHeader.textContent = DESKTOP_TEXT;
        credentialHeader.dataset.credMode = "desktop";
      }
    }
  }

  function lockCredentialHeader() {
    const topBar = document.querySelector(".top-bar");
    const credentialHeader = document.querySelector(".credential-header");
    const themeBtn = document.getElementById("themeToggle");

    if (!topBar || !credentialHeader || !themeBtn) return;

    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    ensureCorrectContent(credentialHeader, isMobile);

    if (isMobile) {
      applyMobileLayout(topBar, credentialHeader, themeBtn);
    } else {
      applyDesktopLayout(topBar, credentialHeader, themeBtn);
    }
  }

  function initCredentialHardLock() {
    lockCredentialHeader();

    requestAnimationFrame(lockCredentialHeader);
    setTimeout(lockCredentialHeader, 0);
    setTimeout(lockCredentialHeader, 80);
    setTimeout(lockCredentialHeader, 160);
    setTimeout(lockCredentialHeader, 260);
    setTimeout(lockCredentialHeader, 420);

    window.addEventListener("load", lockCredentialHeader, { passive: true });
    window.addEventListener("resize", lockCredentialHeader, { passive: true });
    window.addEventListener("orientationchange", lockCredentialHeader, { passive: true });

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        requestAnimationFrame(lockCredentialHeader);
        setTimeout(lockCredentialHeader, 0);
        setTimeout(lockCredentialHeader, 80);
        setTimeout(lockCredentialHeader, 160);
      });
    }

    const mo = new MutationObserver(() => {
      requestAnimationFrame(lockCredentialHeader);
    });

    mo.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"]
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCredentialHardLock);
  } else {
    initCredentialHardLock();
  }
})();
