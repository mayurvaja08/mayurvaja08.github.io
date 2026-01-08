/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ================= REVEAL ON SCROLL ================= */
  const revealElements = document.querySelectorAll(
    ".hero-title, .hero-right, .vision-left, .vision-right, .project-row, .skills-list span, .cta-inner"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  /* ================= SCROLL PROGRESS BAR ================= */
  const progressBar = document.createElement("div");
  progressBar.style.position = "fixed";
  progressBar.style.top = "0";
  progressBar.style.left = "0";
  progressBar.style.height = "4px";
  progressBar.style.background = "#ff4d00";
  progressBar.style.width = "0%";
  progressBar.style.zIndex = "9999";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
  });

  /* ================= PARALLAX HERO IMAGE ================= */
  const heroImage = document.querySelector(".hero-image");
  window.addEventListener("scroll", () => {
    if (!heroImage) return;
    heroImage.style.transform = `translateY(${window.scrollY * 0.15}px) scale(1.05)`;
  });

  /* ================= MARQUEE FIX ================= */
  document.addEventListener("visibilitychange", () => {
    const marquee = document.querySelector(".marquee-track");
    if (!marquee) return;
    marquee.style.animation = "none";
    marquee.offsetHeight;
    marquee.style.animation = "";
  });

  /* ================= MAGNET BUTTON ================= */
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px,
                                      ${(e.clientY - r.top - r.height / 2) * 0.15}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0,0)";
    });
  });

//   /* ================= VISION STICKY SCROLL (FIXED PROPERLY) ================= */
//   const visionSection = document.querySelector(".vision");
//   const visionLeft = document.querySelector(".vision-left");

//   if (visionSection && visionLeft) {
//     const headerOffset = 120; // header height
//     const leftRect = visionLeft.getBoundingClientRect();
//     const leftStartY = visionLeft.offsetTop;
//     const leftWidth = leftRect.width;
//     const leftX = leftRect.left;

//     window.addEventListener("scroll", () => {
//       const sectionRect = visionSection.getBoundingClientRect();
//       const sectionTop = sectionRect.top + window.scrollY;
//       const sectionBottom = sectionTop + visionSection.offsetHeight;
//       const scrollY = window.scrollY;

//       if (
//         scrollY + headerOffset >= sectionTop &&
//         scrollY + headerOffset <= sectionBottom - visionLeft.offsetHeight
//       ) {
//         visionLeft.style.position = "fixed";
//         visionLeft.style.top = headerOffset + "px";
//         visionLeft.style.left = leftX + "px";   // 🔑 KEY FIX
//         visionLeft.style.width = leftWidth + "px"; // 🔑 KEY FIX
//       } else {
//         visionLeft.style.position = "relative";
//         visionLeft.style.top = "0";
//         visionLeft.style.left = "0";
//         visionLeft.style.width = "auto";
//       }
//     });
//   }

  /* ================= REVEAL CSS ================= */
  const style = document.createElement("style");
  style.innerHTML = `
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1),
                  transform 0.8s cubic-bezier(0.16,1,0.3,1);
    }
    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

});
