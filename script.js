// ===== THEME TOGGLE (MATCH BLOG.HTML) =====
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Toggle dark mode
    document.body.classList.toggle("dark");

    // Keep border/line visible always
    themeToggle.style.border = "1px solid var(--glass-border)";

    // Update icon
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    // Small click scale animation like blog.html
    themeToggle.style.transform = "scale(0.93)";
    setTimeout(() => {
      themeToggle.style.transform = "scale(1)";
    }, 100);
  });
}

// ===== PORTFOLIO CARDS LOADER =====
const container = document.getElementById("portfolioContainer");
let cardNumber = 1;

async function loadCards() {
  while (true) {
    try {
      const response = await fetch(`cards/card${cardNumber}.txt`);
      if (!response.ok) break;
      const text = await response.text();

      const titleMatch = text.match(/<h1>(.*?)<\/h1>/);
      const title = titleMatch ? titleMatch[1] : `Card ${cardNumber}`;

      const previewMatch = text.match(/<p>(.*?)<\/p>/);
      const preview = previewMatch ? previewMatch[1] : "";

      const card = document.createElement("article");
      card.className="portfolio-card";

      card.innerHTML = `
        <div class="card-header">
          <div class="expand-btn">+</div>
        </div>
        <h2>${title}</h2>
        <p class="preview">${preview}</p>
        <div class="card-content">${text}</div>
      `;

      container.appendChild(card);

      const btn = card.querySelector(".expand-btn");

      btn.addEventListener("click", e => {
        e.stopPropagation();
        toggleCard(card, btn);
      });

      card.addEventListener("click", () => {
        toggleCard(card, btn);
      });

      cardNumber++;
    } catch (e) {
      break;
    }
  }
}

function toggleCard(card, btn) {
  if (card.classList.contains("expanded")) {
    card.classList.remove("expanded");
    card.classList.remove("active");
    btn.textContent = "+";
  } else {
    document.querySelectorAll(".portfolio-card").forEach(c => {
      c.classList.remove("expanded");
      c.classList.remove("active");
    });
    card.classList.add("expanded");
    card.classList.add("active");
    btn.textContent = "−";
  }
}

loadCards();
