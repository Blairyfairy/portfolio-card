// ==============================
// FOLLOW BUTTON TOGGLE
// ==============================
const followBtn = document.getElementById("followBtn");
const btnText = document.querySelector(".btn-text");

if (followBtn && btnText) {
  followBtn.addEventListener("click", () => {
    followBtn.classList.toggle("following");

    if (followBtn.classList.contains("following")) {
      btnText.textContent = "Connected ✓";
    } else {
      btnText.textContent = "Connect";
    }
  });
}

// ==============================
// LIGHT/DARK THEME TOGGLE
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    // Initialize icon based on current theme
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      themeToggle.textContent = isDark ? "☀️" : "🌙";

      // Add smooth transitions to match blog/gallery behavior
      document.querySelectorAll(".top-bar, .profile-card, .theme-btn, .profile-img, .social-links, .follow-btn").forEach(el => {
        el.style.transition = "all 0.5s ease";
      });
    });
  }
});

// ==============================
// OPTIONAL: EXPAND/COLLAPSE JOB/EXPERIENCE LISTS
// ==============================
document.querySelectorAll('.job-details').forEach(job => {
  const title = job.querySelector('h4');
  const ul = job.querySelector('ul');
  if (!title || !ul) return;

  // Always expanded if "Selected Projects"
  if(title.textContent.includes('Selected Projects')){
    ul.style.display = 'block';
    ul.classList.add('expanded');
    return;
  }

  const clickable = document.createElement('div');
  clickable.style.display = 'flex';
  clickable.style.alignItems = 'center';
  clickable.style.cursor = 'pointer';
  clickable.style.padding = '6px 10px';
  clickable.style.borderRadius = '8px';
  clickable.style.background = 'transparent';
  clickable.style.transition = 'background 0.2s ease';
  
  const plus = document.createElement('span');
  plus.textContent = '+';
  plus.style.display = 'inline-flex';
  plus.style.alignItems = 'center';
  plus.style.justifyContent = 'center';
  plus.style.width = '30px';
  plus.style.height = '30px';
  plus.style.border = '1px solid rgba(255,255,255,0.2)';
  plus.style.borderRadius = '8px';
  plus.style.marginRight = '10px';
  plus.style.transition = 'transform 0.25s ease';
  plus.style.fontWeight = '700';
  plus.style.background = 'rgba(255,255,255,0.05)';
  plus.style.color = '#f0eff4';

  title.style.margin = '0';
  title.style.flex = '1';

  clickable.appendChild(plus);
  clickable.appendChild(title);
  ul.parentNode.insertBefore(clickable, ul);
  ul.style.display = 'none';

  clickable.addEventListener('mouseenter', () => {
    clickable.style.background = 'rgba(158,130,156,0.1)';
  });
  clickable.addEventListener('mouseleave', () => {
    if(!ul.classList.contains('expanded')) clickable.style.background = 'transparent';
  });

  clickable.addEventListener('click', () => {
    const isExpanded = ul.classList.toggle('expanded');
    ul.style.display = isExpanded ? 'block' : 'none';
    plus.textContent = isExpanded ? '−' : '+';
    clickable.style.background = isExpanded ? 'rgba(158,130,156,0.1)' : 'transparent';
  });
});
