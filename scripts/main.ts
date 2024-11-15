// scripts/main.ts
// Dynamically populate the Skills section
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js"];

function displaySkills(): void {
  const skillsList = document.getElementById("skillsList")!;
  skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");
}

// Handle form submission
const contactForm = document.getElementById("contactForm") as HTMLFormElement;

contactForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  alert(`Thank you, ${name}! We will get in touch with you at ${email}.`);
});

// Handle Contact Me button click
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  });
}

// Initialize page features
displaySkills();

const projects = [
    {
      title: "Project 1: Web App",
      description: "This is a web application built with React and Node.js. It helps users track tasks and manage deadlines.",
      imageUrl: "images/project1.png",
      link: "https://github.com/username/project1"
    },
    {
      title: "Project 2: E-commerce Website",
      description: "An e-commerce website using Next.js, Tailwind CSS, and Stripe for payments. Users can browse products and make purchases.",
      imageUrl: "images/project2.png",
      link: "https://github.com/username/project2"
    },
    {
      title: "Project 3: Blog Platform",
      description: "A blogging platform built with TypeScript and MongoDB. Users can create, read, and share blog posts.",
      imageUrl: "images/project3.png",
      link: "https://github.com/username/project3"
    },
    {
      title: "Project 4: Portfolio Website",
      description: "A personal portfolio website built with HTML, CSS, and JavaScript. It showcases my skills and projects.",
      imageUrl: "images/project4.png",
      link: "https://github.com/username/project4"
    }
  ];
  
  function renderProjects() {
    const projectContainer = document.querySelector("#projects .container")!;
    
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      
      projectElement.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
        <div class="project-details">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
      
      projectContainer.appendChild(projectElement);
    });
  }
  
  // Run the function to render projects
  renderProjects();
  