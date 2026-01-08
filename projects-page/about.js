/* DUMMY PROFILE DATA (API ki jagah) */
const profile = {
  fullName: "Mayur Vaja",
  professionalTitle: "Full Stack Developer",
  tagline: "Building modern web experiences with clean code and creativity.",
  introductoryText:
    "I am a passionate and driven Full Stack Developer with a background in Computer Engineering and a strong focus on building scalable, elegant, and meaningful digital solutions.\n\nAs a fresher, I bring a fresh perspective, a strong learning mindset, and the discipline required to grow consistently in a fast-evolving tech industry.\n\nMy journey in development is driven by curiosity and a genuine love for solving problems. I enjoy working on challenging projects that push my limits, encourage deeper thinking, and help me grow both technically and creatively. For me, difficult problems are opportunities to learn, not obstacles to avoid.\n\nI work across the full stack, developing clean and responsive user interfaces while also designing reliable backend systems. I believe that a great product is created when logic, performance, and user experience are aligned. My approach to development focuses on writing clean, readable code, building scalable architectures, and delivering interfaces that feel intuitive and polished.\n\nConsistency and self-learning are the core strengths I bring to every project. I actively explore new technologies, experiment with real-world projects, and continuously refine my skills to stay relevant and effective. Rather than limiting myself to one role, I aim to understand the complete lifecycle of an application — from idea to deployment.\n\nI am open to working in multiple environments, including full-time roles, freelancing, startups, agencies, and product-based teams. My long-term vision is to build impactful digital products, contribute to meaningful projects, and grow into a developer known for reliability, adaptability, and quality work.\n\nWhen I am not coding, I enjoy learning new tools, improving my problem-solving approach, and thinking about how technology can simplify real-world challenges. I believe in steady progress, strong fundamentals, and building things that truly matter.",
  profilePicture: "portfolio image.jpg",
  cvFileUrl: "cv.pdf",
};

/* SET DATA */
document.getElementById("fullName").textContent = profile.fullName;
document.getElementById("title").textContent = profile.professionalTitle;
document.getElementById("tagline").textContent = profile.tagline;
document.getElementById("story").textContent = profile.introductoryText;

const img = document.getElementById("profileImage");
img.src = profile.profilePicture;

const cvBtn = document.getElementById("cvBtn");
cvBtn.href = profile.cvFileUrl;

/* SCROLL ANIMATION */
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

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right")
  .forEach((el) => observer.observe(el));
