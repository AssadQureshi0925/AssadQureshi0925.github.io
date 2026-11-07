/**
 * Main Application Logic for Assadullah
 * AI Engineer, Agentic AI, Automation, Flutter & Web
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypingEffect();
  initMobileMenu();
  initScrollSpy();
  initScrollProgress();
  initContactForm();
  setCurrentYear();
  const demoClose = document.getElementById("demo-close");
  const demoModal = document.getElementById("demo-modal");
  if (demoClose) demoClose.addEventListener("click", () => {
    demoModal.classList.remove("open");
    const f = document.getElementById("demo-frame");
    if (f) f.src = "about:blank";
    document.body.style.overflow = "auto";
  });
  if (demoModal) demoModal.addEventListener("click", (e) => {
    if (e.target === demoModal) {
      demoModal.classList.remove("open");
      const f = document.getElementById("demo-frame");
      if (f) f.src = "about:blank";
      document.body.style.overflow = "auto";
    }
  });
});

/* --------------------------------------------------------------------------
   Scroll Progress Bar
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

/* --------------------------------------------------------------------------
   Theme Switcher (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const activeTheme = savedTheme || (prefersDark ? "dark" : "dark");
  html.setAttribute("data-theme", activeTheme);
  updateThemeIcon(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const icon = btn.querySelector("i");
  if (!icon) return;

  if (theme === "light") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

/* --------------------------------------------------------------------------
   Typing Effect for Hero Title
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const textElement = document.getElementById("typing-text");
  if (!textElement) return;

  const roles = [
    "AI Engineer",
    "Agentic AI Specialist",
    "Flutter App Developer",
    "Creator of 'Dial for Help'",
    "AI Automation Architect",
    "Full-Stack AI Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1600;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 300;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   Mobile Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleBtn.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Spy & Sticky Header
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.style.boxShadow = "var(--shadow-md)";
      } else {
        navbar.style.boxShadow = "none";
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Contact Form Validation & Mock Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;

    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending message...`;
    submitBtn.disabled = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${subject}\n\n${message}`);
    window.location.href = `mailto:assadullah10001@gmail.com?subject=${encodeURIComponent(subject || "New project enquiry")}&body=${body}`;
    submitBtn.innerHTML = originalContent;
    submitBtn.disabled = false;
    feedback.textContent = "Opening your email app \u2014 your message will be sent to Assadullah from there.";
    feedback.className = "form-feedback success";
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   Current Year in Footer
   -------------------------------------------------------------------------- */
function setCurrentYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
