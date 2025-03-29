document.addEventListener("DOMContentLoaded", () => {
        // ⌨️ Typing Effect for "About Me"
        const aboutMeText = "Hello! I am a passionate Web Developer skilled in creating modern and responsive web applications. With expertise in full-stack development, I craft efficient and scalable solutions.";
        let i = 0;
        const aboutMeElement = document.querySelector("#about-me p");
    
        function typeWriter() {
            if (i < aboutMeText.length) {
                aboutMeElement.innerHTML += aboutMeText.charAt(i);
                i++;
                setTimeout(typeWriter,30);
            }
        }
        aboutMeElement.innerHTML = ""; // Clear text before animation
        typeWriter(); // Start Typing Effect
    
        // 🏄‍♂️ Smooth Scroll for Navigation
        document.querySelectorAll("nav ul li a").forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
            });
        });
    
        // 🖼️ Profile Picture Hover Effect (Zoom)
        const profilePic = document.getElementById("profile-pic");
        profilePic.addEventListener("mouseover", () => profilePic.style.transform = "scale(1.1)");
        profilePic.addEventListener("mouseout", () => profilePic.style.transform = "scale(1)");
    
        // 📩 Contact Form Handling
        document.getElementById("contact-form").addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
    
            if (name && email && message) {
                document.getElementById("response-message").textContent = "✅ Message Sent Successfully!";
                setTimeout(() => document.getElementById("response-message").textContent = "", 3000);
                this.reset(); // Clear form
            } else {
                document.getElementById("response-message").textContent = "⚠️ Please fill all fields!";
            }
        });
    });
document.addEventListener("DOMContentLoaded", () => {
    // 🌟 Project Data
    const projects = [
        { title: "Weather Forecast App", category: "web", description: "Real-time weather using AI analytics." },
        { title: "Heritage Explorer", category: "web", description: "Interactive website for exploring India's history." },
        { title: "AI Chatbot", category: "ai", description: "Smart chatbot trained on custom datasets." },
        { title: "Big Data Analysis", category: "data", description: "Processing large datasets using Hadoop & Spark." },
    ];

    const projectContainer = document.getElementById("project-container");

    // 🎭 Function to display projects
    function displayProjects(filter) {
        projectContainer.innerHTML = ""; // Clear existing projects
        projects.forEach(project => {
            if (filter === "all" || project.category === filter) {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");
                projectCard.innerHTML = `
                    <h3 class="project-title">${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectContainer.appendChild(projectCard);
            }
        });
    }

    // 🔍 Filter Projects
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", function () {
            displayProjects(this.getAttribute("data-filter"));
        });
    });

    displayProjects("all"); // Show all projects initially
});
