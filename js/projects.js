/**
 * Projects Data for Assadullah
 * Focused on: AI Engineering, Agentic AI, Automation, Flutter (Dial for Help), and AI Web Apps
 */
const projectsData = [
  {
    id: "simple-todo-app",
    title: "Simple Todo App",
    category: "web",
    categoryLabel: "Web App",
    icon: "fa-solid fa-list-check",
    iconColor: "#6366f1",
    shortDescription: "A working todo app: add tasks, tick them off, filter them, and they stay saved in your browser.",
    fullDescription: "A simple, fully working todo app built with plain HTML, CSS and JavaScript. Add a task, mark it done, delete it, filter by All / Active / Done, and your list is saved in localStorage so it is still there when you come back.",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    liveDemo: "https://assadqureshi0925.github.io/projects/todo-app/",
    github: "https://github.com/AssadQureshi0925/AssadQureshi0925.github.io/tree/main/projects/todo-app"
  },
  {
    id: "focus-timer",
    title: "Focus Timer (Pomodoro)",
    category: "web",
    categoryLabel: "Web App",
    icon: "fa-solid fa-clock",
    iconColor: "#f59e0b",
    shortDescription: "A Pomodoro focus timer: 25 minutes of work, then a 5-minute break, with a session counter.",
    fullDescription: "A simple Pomodoro focus timer built with plain HTML, CSS and JavaScript. Start a 25-minute focus session, take a 5-minute break when it ends, and keep count of completed sessions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://assadqureshi0925.github.io/projects/pomodoro-timer/",
    github: "https://github.com/AssadQureshi0925/AssadQureshi0925.github.io/tree/main/projects/pomodoro-timer"
  },
  {
    id: "dial-for-help-app",
    title: "Dial for Help - Find Skilled Workers Near You",
    category: "flutter",
    categoryLabel: "Flutter Mobile App",
    icon: "fa-solid fa-phone-volume",
    iconColor: "#ef4444",
    shortDescription: "A Flutter home-services app: find a plumber, electrician, mechanic or any skilled worker near you, then call or book them in one tap.",
    fullDescription: "Dial for Help is Assadullah's flagship mobile application built using Flutter & Dart. Need a plumber, electrician, mechanic, carpenter, painter or cleaner? The app shows nearby workers with ratings, jobs done and prices, shares your live GPS location, and lets you call or book a worker in one tap.",
    technologies: ["Flutter", "Dart", "Firebase", "Geolocation API", "Direct Call Services", "Provider / Riverpod"],
    liveDemo: "https://assadqureshi0925.github.io/projects/dial-for-help/",
    github: "https://github.com/AssadQureshi0925/dial-for-help"
  },
  {
    id: "agentic-ai-multiagent",
    title: "Autonomous Agentic AI Multi-Agent System",
    category: "agentic-ai",
    categoryLabel: "Agentic AI",
    icon: "fa-solid fa-robot",
    iconColor: "#6366f1",
    shortDescription: "Multi-agent autonomous collaborative system capable of complex research, planning, code execution, and autonomous decision-making.",
    fullDescription: "Built with CrewAI, LangGraph, and Google Gemini API. This agentic system coordinates specialized autonomous worker agents (Researcher, Coder, Reviewer, and Manager) to autonomously accomplish end-to-end user goals without constant human prompting.",
    technologies: ["Agentic AI", "LangGraph", "CrewAI", "Gemini 1.5 Pro/Flash", "Python", "Tool Calling"],
    liveDemo: "https://assadqureshi0925.github.io/projects/agentic-ai/",
    github: "https://github.com/AssadQureshi0925/agentic-ai-workspace"
  },
  {
    id: "smart-workflow-automation",
    title: "Intelligent Business Workflow Automation",
    category: "automation",
    categoryLabel: "AI Automation",
    icon: "fa-solid fa-wand-magic-sparkles",
    iconColor: "#38bdf8",
    shortDescription: "Automated end-to-end data processing, document parsing, and automated reporting pipeline using Python and AI bots.",
    fullDescription: "An automation pipeline designed to eliminate manual workflows. Integrates with webhooks, OCR, Gmail, and Google Sheets to automatically extract data from invoices and customer inquiries, summarize them with LLMs, and route structured notifications instantly.",
    technologies: ["Python", "FastAPI", "Gemini API", "Make/n8n Automations", "Webhooks", "Google Cloud"],
    liveDemo: "https://assadqureshi0925.github.io/projects/workflow-automation/",
    github: "https://github.com/AssadQureshi0925/ai-workflow-automation"
  },
  {
    id: "ai-knowledge-rag-web",
    title: "SmartDoc AI - Intelligent RAG Knowledge Web Platform",
    category: "web",
    categoryLabel: "AI Web App",
    icon: "fa-solid fa-file-invoice",
    iconColor: "#10b981",
    shortDescription: "Full-stack web app allowing users to chat with enterprise documents, PDFs, and data using vector search and generative AI.",
    fullDescription: "Modern web application crafted with Next.js, React, and Python FastAPI backend. Users can upload various file formats and engage in multimodal question-answering with exact source citations and grounded responses.",
    technologies: ["Next.js", "React", "Python", "FastAPI", "Pinecone Vector DB", "Tailwind CSS"],
    liveDemo: "https://assadqureshi0925.github.io/projects/smartdoc-ai/",
    github: "https://github.com/AssadQureshi0925/smartdoc-ai-web"
  },
  {
    id: "flutter-ai-assistant",
    title: "AI Voice & Chat Companion Flutter App",
    category: "flutter",
    categoryLabel: "Flutter Mobile App",
    icon: "fa-brands fa-flutter",
    iconColor: "#02569B",
    shortDescription: "Real-time AI voice assistant and chat mobile application built with Flutter and Gemini Live multimodal streaming.",
    fullDescription: "A cross-platform iOS and Android app powered by Flutter that provides voice-driven AI interactions, text-to-speech, speech-to-text, and real-time vision understanding through the device camera.",
    technologies: ["Flutter", "Dart", "Gemini API", "Audio Streaming", "REST/WebSockets", "Material 3"],
    liveDemo: "https://assadqureshi0925.github.io/projects/ai-companion/",
    github: "https://github.com/AssadQureshi0925/flutter-ai-companion"
  },
  {
    id: "ai-social-bot-automation",
    title: "AutoPost AI - Content Generation & Scheduling Bot",
    category: "automation",
    categoryLabel: "AI Automation",
    icon: "fa-solid fa-bullhorn",
    iconColor: "#f59e0b",
    shortDescription: "Autonomous social media content generator and scheduler with AI copy and trend analysis.",
    fullDescription: "An automated bot that analyzes trending industry topics, synthesizes engaging multi-platform posts, and schedules publications autonomously with human-in-the-loop review capabilities.",
    technologies: ["Python", "Automation Scripts", "Gemini API", "REST APIs", "Cron Schedulers"],
    liveDemo: "https://assadqureshi0925.github.io/projects/autopost-ai/",
    github: "https://github.com/AssadQureshi0925/autopost-ai"
  }
];

function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  grid.innerHTML = filteredProjects.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-preview">
        <i class="${project.icon} project-preview-icon" style="color: ${project.iconColor};"></i>
        <div class="project-overlay">
          <button class="project-overlay-btn open-modal-btn" data-id="${project.id}" title="View Details" aria-label="View Details">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
      <div class="project-body">
        <span class="project-category-tag">${project.categoryLabel}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDescription}</p>
        <div class="project-tech">
          ${project.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
        <div class="project-footer">
          <div class="project-links">
            <button class="project-link demo-btn" data-url="${project.liveDemo}" data-title="${project.title}" aria-label="Live Demo">
              <i class="fa-solid fa-play"></i> Live Demo
            </button>
          </div>
          <button class="btn btn-ghost btn-sm open-modal-btn" data-id="${project.id}">
            Details &rarr;
          </button>
        </div>
      </div>
    </article>
  `).join("");

  attachModalTriggers();
}

function attachModalTriggers() {
  const modalButtons = document.querySelectorAll(".open-modal-btn");
  modalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openProjectModal(id);
    });
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <i class="${project.icon}" style="font-size: 2.5rem; color: ${project.iconColor};"></i>
      <div>
        <span class="project-category-tag">${project.categoryLabel}</span>
        <h2 style="font-size: 1.75rem; font-weight: 800;">${project.title}</h2>
      </div>
    </div>
    
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-muted); text-transform: uppercase;">Overview</h4>
      <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem;">
        ${project.fullDescription}
      </p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Tech Stack & Integrations</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${project.technologies.map(t => `<span class="skill-pill" style="font-size: 0.85rem;"><i class="fa-solid fa-microchip"></i> ${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
      <button class="btn btn-primary demo-btn" data-url="${project.liveDemo}" data-title="${project.title}" style="flex: 1;">
        <i class="fa-solid fa-play"></i> Try Live Demo
      </button>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

// In-portfolio live demo overlay (iframe, no GitHub visit needed)
function openDemo(url, title) {
  const modal = document.getElementById("demo-modal");
  const frame = document.getElementById("demo-frame");
  const heading = document.getElementById("demo-title");
  if (!modal || !frame) return;
  frame.src = url;
  if (heading) heading.textContent = title || "Live Demo";
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDemo() {
  const modal = document.getElementById("demo-modal");
  const frame = document.getElementById("demo-frame");
  if (!modal) return;
  modal.classList.remove("open");
  if (frame) frame.src = "about:blank";
  document.body.style.overflow = "auto";
}
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".demo-btn");
  if (btn) { closeProjectModal(); openDemo(btn.getAttribute("data-url"), btn.getAttribute("data-title")); }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDemo(); });

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  const modalCloseBtn = document.getElementById("modal-close");
  const modal = document.getElementById("project-modal");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
});
