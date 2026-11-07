/**
 * Projects Data for Assad Ullah
 * Focused on: AI Engineering, Agentic AI, Automation, Flutter (Dial for Help), and AI Web Apps
 */
const projectsData = [
  {
    id: "dial-for-help-app",
    title: "Dial for Help - Emergency & Assistance Mobile App",
    category: "flutter",
    categoryLabel: "Flutter Mobile App",
    icon: "fa-solid fa-phone-volume",
    iconColor: "#ef4444",
    shortDescription: "A mission-critical Flutter emergency assistance app featuring direct speed dialing, live GPS coordinates sharing, and Firebase backend.",
    fullDescription: "Dial for Help is Assad Ullah's flagship mobile application built using Flutter & Dart. It allows users to quickly trigger emergency calls, dispatch live GPS locations to designated responders, fetch nearest emergency services (Police, Ambulance, Rescue), and maintain an offline directory of vital helpline contacts.",
    technologies: ["Flutter", "Dart", "Firebase", "Geolocation API", "Direct Call Services", "Provider / Riverpod"],
    liveDemo: "https://github.com/AssadQureshi0925/dial-for-help",
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
    liveDemo: "https://github.com/AssadQureshi0925/agentic-ai-workspace",
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
    liveDemo: "https://github.com/AssadQureshi0925/ai-workflow-automation",
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
    liveDemo: "https://github.com/AssadQureshi0925/smartdoc-ai-web",
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
    liveDemo: "https://github.com/AssadQureshi0925/flutter-ai-companion",
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
    liveDemo: "https://github.com/AssadQureshi0925/autopost-ai",
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
            ${project.liveDemo && project.liveDemo !== project.github ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Live Demo">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Link
            </a>` : ""}
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub Repository">
              <i class="fa-brands fa-github"></i> Code
            </a>
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
      ${project.liveDemo && project.liveDemo !== project.github ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
        <i class="fa-solid fa-external-link"></i> Project Link
      </a>` : ""}
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1;">
        <i class="fa-brands fa-github"></i> View GitHub Code
      </a>
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
