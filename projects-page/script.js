const projects = [
  {
    id: 1,
    name: "Bike Management Showroom",
    image: "project1.png",
    description:
      "A complete Bike Showroom Management platform with admin panel, Firebase integration, live contest management, and lve test drive booking system.",
    tech: "Flutter, Firebase, React",
    date: "August 2025",
    link:"https://mayurvaja08.github.io/velocity-motors/",
  },
  {
    id: 2,
    name: "Portfolio Generator",
    image: "project2.png",
    description:
      "A website that generates portfolio code dynamically based on user inputs and theme selection.",
    tech: "React, Tailwind, JavaScript",
    date: "December 2025",
    link: "https://mayurvaja08.github.io/make-my-portfolio/",
  },
  {
    id: 3,
    name: "Esports Tournament App",
    image: "project3.jpg",
    description:
      "A complete esports tournament platform with admin panel, Firebase integration, and live contest management.",
    tech: "Flutter, Firebase, React",
    date: "August 2025",
    link: "#",
  },

];

const grid = document.getElementById("projectsGrid");

projects.forEach((p, index) => {
  const card = document.createElement("a");
  card.href = "#";
  card.className = "project-card reveal";

  card.innerHTML = `
    <a href="${p.link}"><div class="project-image">
      <img src="${p.image}" alt="${p.name}" />
    </div>

    <h2 class="project-title">${p.name}</h2>
    <p class="project-desc">${p.description}</p>

    <div class="tech-list">
      ${p.tech
        .split(",")
        .map((t) => `<span class="tech">${t.trim()}</span>`)
        .join("")}
    </div>

    <div class="project-date">${p.date}</div>

    <div class="view-link">
      VIEW PROJECT DETAILS →
    </div></a>
  `;

  grid.appendChild(card);
});

/* SCROLL REVEAL (Framer Motion jaisa) */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".project-card, .hero").forEach((el) => {
  observer.observe(el);
});
