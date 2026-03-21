const portfolioContainer = document.getElementById("portfolioContainer");

/* THEME TOGGLE */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* SAMPLE PORTFOLIO CARDS */
const projects = [
  {title:"Project One", desc:"This is the first portfolio project."},
  {title:"Project Two", desc:"Second project description goes here."},
  {title:"Project Three", desc:"Third project example portfolio item."},
  {title:"Project Four", desc:"Fourth portfolio example with short text."}
];

projects.forEach(proj=>{
  const card = document.createElement("div");
  card.className = "portfolio-card";
  card.innerHTML = `<h2>${proj.title}</h2><p>${proj.desc}</p>`;
  portfolioContainer.appendChild(card);
});
