// team mates
const TEAM_MEMBERS = [
  {
    name: "Nitish",
    project: "Kanban Board",
    avatar: "https://ui-avatars.com/api/?name=N&background=0ab5f6&color=fff&size=100",
    github: "https://github.com/#"
  },
  {
    name: "Aditya",
    project: "Quiz App",
    avatar: "https://ui-avatars.com/api/?name=A&background=0ab5f6&color=fff&size=100",
    github: "https://github.com/#"
  },
  {
    name: "Shahul",
    project: "Live News Feed",
    avatar: "https://ui-avatars.com/api/?name=S&background=0ab5f6&color=fff&size=100",
    github: "https://github.com/#"
  },
  {
    name: "Zinnah",
    project: "GitHub Explorer",
    avatar: "https://ui-avatars.com/api/?name=$&background=0ab5f6&color=fff&size=100",
    github: "https://github.com/#"
  },
  {
    name: "Harsh",
    project: "Expense Tracker",
    avatar: "https://ui-avatars.com/api/?name=H&background=0ab5f6&color=fff&size=100",
    github: "https://github.com/#"
  }
];

const PROJECTS = [
  {
    title: "Team Agency Portfolio",
    description: "A data-driven landing page introducing the team members and showcasing our core projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoLink: "#placeholder-repo-link",
    liveLink: "#placeholder-live-link"
  },
  {
    title: "Interactive Quiz App",
    description: "A multiple-choice quiz tracking running scores and managing application state.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoLink: "#placeholder-repo-link",
    liveLink: "#placeholder-live-link"
  },
  {
    title: "Expense Tracker",
    description: "An application to log income and expenses with full CRUD and localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoLink: "#placeholder-repo-link",
    liveLink: "#placeholder-live-link"
  },
  {
    title: "Live News Feed",
    description: "A news aggregator fetching live data from NewsAPI with search and category filters.",
    tech: ["HTML", "CSS", "Async/Await"],
    repoLink: "#placeholder-repo-link",
    liveLink: "#placeholder-live-link"
  },
  {
    title: "GitHub Developer Explorer",
    description: "A tool utilizing the public GitHub REST API to view profiles, stats, and repositories.",
    tech: ["REST API", "JavaScript", "DOM"],
    repoLink: "#placeholder-repo-link",
    liveLink: "#placeholder-live-link"
  },
  {
    title: "Kanban Task Board",
    description: "A Trello-style board with HTML5 Drag and Drop API and complex state management.",
    tech: ["Drag & Drop", "LocalStorage", "JS"],
    repoLink: "#placeholder-repo-link",
    liveLink: "#placeholder-live-link"
  }
];


// RENDER FUNCTIONS

function renderTeamCards() {
  const teamGrid = document.getElementById("team-grid");
  teamGrid.innerHTML = "";

  // Overriding the grid styling to center the single card
  teamGrid.className = "";
  teamGrid.style.display = "flex";
  teamGrid.style.justifyContent = "center";

  const card = document.createElement("div");
  card.className = "card fade-up";
  card.style.width = "100%";
  card.style.maxWidth = "600px";
  card.style.padding = "16px 32px";

  let listHTML = `<ul style="list-style: none; padding: 0; margin: 0;">`;

  TEAM_MEMBERS.forEach((member, i) => {
    const borderStyle = i === TEAM_MEMBERS.length - 1 ? "" : "border-bottom: 1px solid var(--border);";
    listHTML += `
      <li style="padding: 16px 0; display: flex; justify-content: space-between; align-items: center; ${borderStyle}">
        <div style="display: flex; align-items: center; gap: 16px;">
          <img src="${member.avatar}" alt="${member.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.8); box-shadow: 0 4px 12px rgba(0, 180, 255, 0.1);">
          <span style="font-weight: 600; font-size: 18px; color: var(--text-primary);">${member.name}</span>
        </div>
        <a href="${member.github}" target="_blank" rel="noopener noreferrer">
          <span style="color: var(--accent); font-weight: 600; font-size: 15px;">${member.project}&nbsp;<i class="bi bi-github"></i></span>
        </a>
      </li>
    `;
  });

  listHTML += `</ul>`;
  card.innerHTML = listHTML;

  teamGrid.appendChild(card);
}

function renderProjectCards() {
  const projectGrid = document.getElementById("project-grid");
  projectGrid.innerHTML = "";

  PROJECTS.forEach((project, i) => {
    const card = document.createElement("div");
    card.className = "card project-card fade-up";
    card.style.animationDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <h3>${project.title}</h3>
      <br>
      <p>${project.description}</p>
      <br>
      <div class="project-links">
        <a href="${project.liveLink}" target="_blank" class="btn-primary" style="flex: 1; text-align: center;">Link</a>
        <a href="${project.repoLink}" target="_blank" class="btn-outline" style="flex: 1; text-align: center;">Code</a>
      </div>
    `;

    projectGrid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTeamCards();
  renderProjectCards();
});
