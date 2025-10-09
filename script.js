// Load data from JSON
let portfolioData = {}

// Fetch data from JSON file
async function loadData() {
  try {
    const response = await fetch("data.json")
    portfolioData = await response.json()
    populateContent()
    initScrollAnimations()
  } catch (error) {
    console.error("Error loading data:", error)
    setDefaultData()
  }
}

// Use default data as fallback
function setDefaultData() {
  portfolioData = {
    personal: {
      name: "Your Name",
      title: "Information Engineering Student",
      major: "Information Engineering",
      location: "Surabaya, Indonesia",
      email: "festianaramaya@gmail.com",
      phone: "088217803188",
      whatsapp: "https://wa.me/088217803188",
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/festianaramaya",
      instagram: "https://instagram.com/festiana.rp",
      twitter: "https://x.com/f3cti",
      videoIntro: "https://youtube.com/watch?v=your-video",
      resumePdf: "your-resume.pdf",
    },
    home: {
      welcome: "Welcome to My Portfolio",
      subtitle: "Building the future, one project at a time",
      quote: "The only way to do great work is to love what you do. - Steve Jobs",
    },
    about: {
      bio: "I'm a passionate student at Universitas Airlangga, majoring in Information Engineering. My journey in technology has been driven by curiosity and a desire to create meaningful solutions that make a difference in people's lives.",
      interests: ["Web Development", "UI/UX Design", "Data Science", "Mobile Apps"],
      goals: [
        "Become a full-stack developer",
        "Contribute to open-source projects",
        "Build products that solve real-world problems",
      ],
    },
    reflections: {
      journey:
        "My time at Universitas Airlangga has been transformative. From learning the fundamentals of programming to building complex applications, each project has taught me valuable lessons about problem-solving, teamwork, and perseverance. The challenges I've faced have shaped me into a more resilient and creative thinker.",
      challenges:
        "Balancing multiple projects while maintaining academic excellence, learning new technologies independently, and collaborating effectively in team environments.",
      highlights:
        "Successfully deploying my first full-stack application, presenting at university tech events, and mentoring junior students in programming fundamentals.",
      aspirations:
        "I aim to continue growing as a developer, contribute to meaningful open-source projects, and eventually build technology solutions that positively impact my community.",
    },
    projects: [
      {
        id: 1,
        title: ".feastion - Online Clothing Store (UAS UI)",
        description:
          "An e-commerce website for buying and selling clothes with catalog, shopping cart, and checkout features.",
        image: "img/uas ui.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        fullDescription:
          "Developed as a final project for the User Interface (UI) course. This website is designed to help users browse, select, and purchase clothing online. It provides product catalog, product detail pages, shopping cart, and checkout simulation. On the admin side, products can be managed through a simple dashboard.",
        technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        features: [
          "Product catalog with categories",
          "Product detail page",
          "Shopping cart with automatic calculation",
          "Checkout form and payment simulation",
          "Admin dashboard for product management",
        ],
        links: {
          demo: "https://festianaramaya.github.io/UI_UAS/",
          github: "https://github.com/festianaramaya/UI_UAS",
        },
      },
      {
        id: 2,
        title: "Meowsome - Cat Lovers Website (UTS UI)",
        description:
          "A website dedicated to cat lovers, featuring product collections, care guides, blogs, and community interaction.",
        image: "img/uts ui.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        fullDescription:
          "Developed as a midterm project (UTS) for the User Interface (UI) course. This website is designed for cat enthusiasts to explore collections of cat products, read care guides, enjoy fun cat blogs, and interact with the community. The goal is to provide a delightful and informative platform for cat lovers.",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
          "Cat product collections",
          "Cat care guides and tips",
          "Interactive blog posts about cats",
          "Community testimonial section",
          "Responsive design for various devices",
        ],
        links: {
          demo: "https://festianaramaya.github.io/UI-UTS/",
          github: "https://github.com/festianaramaya/UI-UTS",
        },
      },
      {
        id: 3,
        title: "K3Care - Occupational Safety & Health (Mobile App)",
        description:
          "A mobile application for workplace safety reporting, work hour reminders, and labor law regulations.",
        image: "img/k3care.jpg",
        tags: ["Flutter", "Dart", "Mobile App"],
        fullDescription:
          "Developed as a mobile application project focused on occupational safety and health (K3). The app provides workers with tools to report workplace incidents, receive reminders for work and rest hours, and access labor law regulations. Built using Flutter and Dart, the app supports both Android and iOS platforms.",
        technologies: ["Flutter", "Dart", "Firebase"],
        features: [
          "Workplace incident reporting system",
          "Work hour and break time reminders",
          "Access to labor law and safety regulations",
          "Cross-platform support (Android & iOS)",
          "Simple and user-friendly interface",
        ],
        links: {
          github: "https://github.com/festianaramaya/K3Care",
        },
      },
      {
        id: 4,
        title: "OurCity - Regional Reporting Website (Framework)",
        description: "A web-based platform for reporting and monitoring regional issues and development progress.",
        image: "img/ourcity.jpg",
        tags: ["CSS", "Pug", "JavaScript", "SCSS", "PHP", "Blade"],
        fullDescription:
          "Developed as a collaborative group project, OurCity is a web-based reporting platform that enables citizens to report regional issues directly on an interactive map, such as damaged infrastructure (e.g., broken bridges, potholes). Administrators can submit project updates to inform the public about ongoing or completed regional development and repairs. The system enhances transparency and community participation in regional development.",
        technologies: ["CSS", "Pug", "JavaScript", "SCSS", "PHP", "Blade"],
        features: [
          "User report submission with map integration",
          "Photo and description upload for incidents",
          "Admin project progress updates",
          "Interactive map to visualize reports and projects",
          "Multi-role access (User & Admin)",
        ],
        links: {
          github: "https://github.com/diandrameilaa/ourcity",
        },
      },
      {
        id: 5,
        title: "Personal Portfolio Website (English Midterm Exam)",
        description: "A modern personal portfolio website showcasing my background, skills, and achievements.",
        image: "/portfolio-website.png",
        tags: ["HTML", "CSS", "JavaScript"],
        fullDescription:
          "Developed a responsive personal portfolio website to present my professional journey, projects, and certifications. The design emphasizes clarity and simplicity, combining aesthetic visuals with smooth navigation for a professional online presence.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
        features: [
          "Responsive design for all devices",
          "Interactive navigation menu",
          "Project showcase with detailed descriptions",
          "Certification and resume sections",
          "Contact form with social media links",
        ],
        links: {
          demo: "https://example.com/portfolio", // ganti dengan link demo portfoliomu
          github: "https://github.com/festianaramaya/Portfolio",
        },
      },
    ],

    organizations: [
      {
        name: "Organization A",
        period: "2018 - 2020",
        role: "Member",
        description: "Participated in various projects and events.",
      },
    ],
    committees: [
      {
        event: "Event X",
        period: "2021",
        role: "Organizer",
      },
    ],
    certifications: [
      {
        name: "Certification Y",
        issuer: "Issuer Z",
        year: "2022",
      },
    ],
    skills: {
      soft: ["Communication", "Teamwork", "Problem Solving"],
      hard: ["JavaScript", "React", "Node.js"],
    },
    achievements: ["Achievement 1", "Achievement 2"],
  }
  populateContent()
}

// Populate content from data
function populateContent() {
  const data = portfolioData

  // Home section
  document.getElementById("homeTitle").textContent = data.home.welcome
  document.getElementById("homeSubtitle").textContent = data.home.subtitle
  document.getElementById("homeQuote").textContent = data.home.quote

  // About section
  document.getElementById("aboutName").textContent = `Hi, I'm ${data.personal.name}`
  document.getElementById("aboutMajor").textContent = data.personal.major
  document.getElementById("aboutLocation").textContent = data.personal.location
  document.getElementById("aboutBio").textContent = data.about.bio

  // Interests
  const interestsContainer = document.getElementById("interestsTags")
  interestsContainer.innerHTML = data.about.interests.map((interest) => `<span class="tag">${interest}</span>`).join("")

  // Goals
  const goalsList = document.getElementById("goalsList")
  goalsList.innerHTML = data.about.goals.map((goal) => `<li>${goal}</li>`).join("")

  // Links
  document.getElementById("videoLink").href = data.personal.videoIntro
  document.getElementById("linkedinLink").href = data.personal.linkedin

  // Resume PDF
  if (data.personal.resumePdf && data.personal.resumePdf !== "your-resume.pdf") {
    const resumeIframe = document.getElementById("resumeIframe")
    const pdfPlaceholder = document.getElementById("pdfPlaceholder")
    const downloadBtn = document.getElementById("downloadResumeBtn")

    resumeIframe.src = data.personal.resumePdf
    resumeIframe.style.display = "block"
    pdfPlaceholder.style.display = "none"
    downloadBtn.href = data.personal.resumePdf
  } else {
    const resumeIframe = document.getElementById("resumeIframe")
    const pdfPlaceholder = document.getElementById("pdfPlaceholder")
    const downloadBtn = document.getElementById("downloadResumeBtn")

    resumeIframe.style.display = "none"
    pdfPlaceholder.style.display = "flex"
    downloadBtn.href = "#"
    downloadBtn.onclick = (e) => {
      e.preventDefault()
      alert("Please add your resume PDF file to the public folder and update the resumePdf field in data.json")
    }
  }

  // Organizations
  if (data.organizations) {
    renderOrganizations(data.organizations)
  }

  // Committees
  if (data.committees) {
    renderCommittees(data.committees)
  }

  // Certifications, Skills, and Achievements
  if (data.certifications) {
    renderCertifications(data.certifications)
  }
  if (data.skills) {
    renderSkills(data.skills)
  }
  if (data.achievements) {
    renderAchievements(data.achievements)
  }

  // Reflections
  document.getElementById("reflectionText").textContent = data.reflections.journey
  document.getElementById("challengesText").textContent = data.reflections.challenges
  document.getElementById("highlightsText").textContent = data.reflections.highlights
  document.getElementById("aspirationsText").textContent = data.reflections.aspirations

  // Contact
  document.getElementById("contactEmail").textContent = data.personal.email
  document.getElementById("contactEmail").href = `mailto:${data.personal.email}`
  document.getElementById("contactWhatsapp").href = data.personal.whatsapp

  // Social links
  document.getElementById("socialLinkedin").href = data.personal.linkedin
  document.getElementById("socialGithub").href = data.personal.github
  document.getElementById("socialInstagram").href = data.personal.instagram
  document.getElementById("socialTwitter").href = data.personal.twitter

  // Footer
  document.getElementById("footerName").textContent = data.personal.name

  // Projects
  renderProjects(data.projects)
}

// Render projects
function renderProjects(projects) {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card" onclick="openProjectModal(${project.id})">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                </div>
                <div class="project-links">
                    <span class="project-link">View Details →</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Open project modal
function openProjectModal(projectId) {
  const project = portfolioData.projects.find((p) => p.id === projectId)
  if (!project) return

  const modalBody = document.getElementById("modalBody")
  modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <h2 class="modal-title">${project.title}</h2>
        <div class="project-tags" style="margin-bottom: 1.5rem;">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <p class="modal-description">${project.fullDescription}</p>
        <div class="modal-details">
            <div class="modal-detail-item">
                <h4>Technologies Used</h4>
                <div class="interests-tags">
                    ${project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join("")}
                </div>
            </div>
            <div class="modal-detail-item">
                <h4>Key Features</h4>
                <ul>
                    ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
            </div>
        </div>
        <div class="modal-links">
            ${project.links.demo ? `<a href="${project.links.demo}" class="btn btn-primary" target="_blank">View Demo</a>` : ""}
            ${project.links.github ? `<a href="${project.links.github}" class="btn btn-secondary" target="_blank">View Code</a>` : ""}
            ${project.links.drive ? `<a href="${project.links.drive}" class="btn btn-secondary" target="_blank">View on Drive</a>` : ""}
        </div>
    `

  const modal = document.getElementById("projectModal")
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close modal
function closeModal() {
  const modal = document.getElementById("projectModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Navigation functionality
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const navLinks = document.querySelectorAll(".nav-link")

let lastScroll = 0

// Hide/show navbar on scroll
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("hidden")
  } else {
    navbar.classList.remove("hidden")
  }

  lastScroll = currentScroll

  // Update active nav link
  updateActiveNavLink()
})

// Toggle mobile menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll(".section")
  const scrollPos = window.pageYOffset + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Modal event listeners
document.getElementById("modalClose").addEventListener("click", closeModal)
document.getElementById("modalOverlay").addEventListener("click", closeModal)

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Render organizations
function renderOrganizations(organizations) {
  const organizationsList = document.getElementById("organizationsList")
  organizationsList.innerHTML = organizations
    .map((org) => {
      if (org.link) {
        return `
          <div class="timeline-item fade-in">
            <div class="timeline-marker"></div>
            <a href="${org.link}" target="_blank" rel="noopener noreferrer" class="timeline-card-link">
              <div class="timeline-content">
                  <div class="timeline-header">
                      <h3>${org.name}</h3>
                      <span class="timeline-period">${org.period}</span>
                  </div>
                  <p class="timeline-role">${org.role}</p>
                  <p class="timeline-description">${org.description}</p>
              </div>
            </a>
          </div>
        `
      } else {
        return `
          <div class="timeline-item fade-in">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${org.name}</h3>
                    <span class="timeline-period">${org.period}</span>
                </div>
                <p class="timeline-role">${org.role}</p>
                <p class="timeline-description">${org.description}</p>
            </div>
          </div>
        `
      }
    })
    .join("")
}

// Render committees
function renderCommittees(committees) {
  const committeesList = document.getElementById("committeesList")
  committeesList.innerHTML = committees
    .map((committee) => {
      if (committee.link) {
        return `
          <div class="timeline-item fade-in">
            <div class="timeline-marker"></div>
            <a href="${committee.link}" target="_blank" rel="noopener noreferrer" class="timeline-card-link">
              <div class="timeline-content">
                  <div class="timeline-header">
                      <h3>${committee.event}</h3>
                      <span class="timeline-period">${committee.period}</span>
                  </div>
                  <p class="timeline-role">${committee.role}</p>
              </div>
            </a>
          </div>
        `
      } else {
        return `
          <div class="timeline-item fade-in">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${committee.event}</h3>
                    <span class="timeline-period">${committee.period}</span>
                </div>
                <p class="timeline-role">${committee.role}</p>
            </div>
          </div>
        `
      }
    })
    .join("")
}

// Render certifications
function renderCertifications(certifications) {
  const certificationsList = document.getElementById("certificationsList")
  certificationsList.innerHTML = certifications
    .map(
      (cert) => `
        <div class="certification-card">
            <div class="certification-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
            </div>
            <h3>${cert.name}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <p class="cert-year">${cert.year}</p>
        </div>
    `,
    )
    .join("")
}

// Render skills
function renderSkills(skills) {
  const softSkillsList = document.getElementById("softSkillsList")
  const hardSkillsList = document.getElementById("hardSkillsList")

  softSkillsList.innerHTML = skills.soft.map((skill) => `<span class="tag">${skill}</span>`).join("")
  hardSkillsList.innerHTML = skills.hard.map((skill) => `<span class="tag">${skill}</span>`).join("")
}

// Render achievements
function renderAchievements(achievements) {
  const achievementsList = document.getElementById("achievementsList")
  achievementsList.innerHTML = achievements.map((achievement) => `<li>${achievement}</li>`).join("")
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .scale-in").forEach((el) => {
    observer.observe(el)
  })
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadData()
})
