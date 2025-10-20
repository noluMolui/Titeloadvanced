// === 📅 Update Year ===
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// === 📱 Mobile Menu Toggle ===
const toggleMenuBtn = document.getElementById("menu-btn") || document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (toggleMenuBtn && mobileMenu) {
  toggleMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// === ✨ Scroll Reveal / Fade Animations ===
const fadeEls = document.querySelectorAll(".fade-in, .reveal");
if (fadeEls.length > 0) {
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "reveal-visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeEls.forEach((el) => fadeObserver.observe(el));
}

// === 🧮 Industry Counter Animation ===
const counters = document.querySelectorAll(".counter");
const industrySection = document.querySelector("#industry");
let counted = false;

function countUp(el) {
  const target = parseFloat(el.getAttribute("data-target"));
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 2500;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out effect
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function triggerCount() {
  if (!counted) {
    counters.forEach(countUp);
    counted = true;
    console.log("✅ Counter animation triggered");
  }
}

if ("IntersectionObserver" in window && industrySection) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerCount();
          counterObserver.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  counterObserver.observe(industrySection);
} else {
  triggerCount(); // fallback
}

window.addEventListener("load", () => {
  if (industrySection) {
    const rect = industrySection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) triggerCount();
  }
});

// === 💬 Testimonial Form Handler (if exists) ===
const testimonialForm = document.getElementById("testimonialForm");
const formMessage = document.getElementById("formMessage");

if (testimonialForm && formMessage) {
  testimonialForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(testimonialForm.action, {
      method: "POST",
      body: new FormData(testimonialForm),
      headers: { Accept: "application/json" },
    })
      .then(() => {
        formMessage.textContent = "✅ Thank you! Your review has been submitted for approval.";
        testimonialForm.reset();
      })
      .catch(() => {
        formMessage.textContent = "❌ Something went wrong. Please try again.";
      });
  });
}

 