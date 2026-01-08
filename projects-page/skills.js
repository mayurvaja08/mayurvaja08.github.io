/* DUMMY SKILLS DATA (API ki jagah) */
const skills = [
  {
    skillName: "React",
    category: "Frontend",
    proficiencyLevel: "Advanced",
    description: "Building modern SPAs and reusable components",
    yearsExperience: 2,
    isKeySkill: true,
  },
  {
    skillName: "JavaScript",
    category: "Frontend",
    proficiencyLevel: "Advanced",
    description: "ES6+, async programming, DOM manipulation",
    yearsExperience: 2,
    isKeySkill: true,
  },
  {
    skillName: "Node.js",
    category: "Backend",
    proficiencyLevel: "Intermediate",
    description: "REST APIs and backend logic",
    yearsExperience: 1,
    isKeySkill: false,
  },
  {
    skillName: "Firebase",
    category: "Backend",
    proficiencyLevel: "Intermediate",
    description: "Auth, Firestore, hosting",
    yearsExperience: 2,
    isKeySkill: true,
  },
];

/* KEY SKILLS */
const keySkills = skills.filter(s => s.isKeySkill);
const keyGrid = document.getElementById("keySkillsGrid");

keySkills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "key-skill reveal";
  div.innerHTML = `
    ${skill.skillName}<br/>
    <small>${skill.yearsExperience} years</small>
  `;
  keyGrid.appendChild(div);
});

/* CATEGORIES */
const categories = ["All", ...new Set(skills.map(s => s.category))];
const filterContainer = document.getElementById("categoryButtons");

let selectedCategory = "All";

categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.className = cat === "All" ? "active" : "";
  btn.onclick = () => {
    selectedCategory = cat;
    document.querySelectorAll(".filter-buttons button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills();
  };
  filterContainer.appendChild(btn);
});

/* RENDER SKILLS */
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = "";

  const filtered =
    selectedCategory === "All"
      ? skills
      : skills.filter(s => s.category === selectedCategory);

  const grouped = {};
  filtered.forEach(s => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  Object.entries(grouped).forEach(([category, list]) => {
    const section = document.createElement("div");
    section.className = "skill-category reveal";

    section.innerHTML = `<h3>${category}</h3>`;

    list.forEach(skill => {
      const div = document.createElement("div");
      div.className = "skill";

      div.innerHTML = `
        <div class="skill-title">
          ${skill.skillName}
          ${skill.isKeySkill ? "⭐" : ""}
        </div>
        <div class="badge">${skill.proficiencyLevel}</div>
        <p class="skill-desc">${skill.description}</p>
        <p class="skill-exp">${skill.yearsExperience} years of experience</p>
      `;
      section.appendChild(div);
    });

    container.appendChild(section);
  });

  observe();
}

renderSkills();

/* SCROLL ANIMATION */
function observe() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

observe();
