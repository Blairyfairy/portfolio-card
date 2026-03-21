const portfolioContainer = document.getElementById("portfolioContainer");
let cardNumber = 1;

/* Load sample portfolio cards (mocked) */
function loadPortfolio() {
  while (cardNumber <= 6) { // demo 6 cards
    const card = document.createElement("article");
    card.className = "portfolio-card";

    card.innerHTML = `
      <div class="card-header">
        <div class="expand-btn">+</div>
      </div>
      <h2>Project ${cardNumber}</h2>
      <p class="preview">This is a brief preview for project ${cardNumber}.</p>
      <div class="card-content">
        <p>Full content for project ${cardNumber} goes here.</p>
      </div>
    `;

    portfolioContainer.appendChild(card);

    const btn = card.querySelector(".expand-btn");

    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleCard(card, btn);
    });

    card.addEventListener("click", () => {
      toggleCard(card, btn);
    });

    cardNumber++;
  }
}

/* Toggle card expansion */
function toggleCard(card, btn) {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
    btn.textContent = "+";
  } else {
    document.querySelectorAll(".portfolio-card").forEach(c => {
      c.classList.remove("active");
      c.querySelector(".expand-btn").textContent = "+";
    });
    card.classList.add("active");
    btn.textContent = "−";
  }
}

/* THEME TOGGLE */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* Initialize portfolio */
loadPortfolio();
