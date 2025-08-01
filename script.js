document.addEventListener('DOMContentLoaded', () => {

    // --- Utility to create safe IDs ---
    function createSafeId(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    }

    // --- Default Data ---
    const defaultAbout = "With a Bachelor's in Computer Science Engineering and a foundational Diploma in Electronics, I possess a unique, end-to-end understanding of how technology works—from the physical components to high-level data abstraction. My passion lies in decoding the stories hidden within data. I leverage powerful tools like Python, Power BI, and SQL to analyze complex information, identify critical trends, and build solutions that drive business decisions. I am driven to become a key contributor in the IT field as a professional analyst and developer, where I can apply my analytical mindset and technical skills to solve real-world challenges.";
    const defaultSkills = [
        { title: "Data Analysis & Programming", skills: ["SQL", "Python (Pandas, NumPy, Scikit-learn)", "DAX", "Advanced Excel & VBA"] },
        { title: "Data Visualization", skills: ["Power BI", "Tableau"] },
        { title: "Tools & Technologies", skills: ["Git & GitHub", "Microsoft Azure", "Database Fundamentals"] },
        { title: "Core Competencies", skills: ["Problem-Solving", "Process Improvement", "Teamwork & Collaboration"] }
    ];
    const defaultProjects = [
        {
            title: "Real-Time Sales Analysis (Blinkit)",
            description: "Architected an end-to-end sales analysis solution. Analyzed over 8,000 sales records to uncover key product performance trends and customer purchasing behaviors. Developed 6+ interactive Power BI dashboards that translated raw data into actionable strategies for inventory management and targeted marketing campaigns.",
            tools: ["Power BI", "SQL", "DAX", "Excel"],
            link: "https://github.com/shivamtiwari1/Real-Time-Sales-Analysis"
        },
        {
            title: "Handwritten Digit Recognition",
            description: "Engineered a machine learning model to recognize handwritten digits with 97% accuracy. Implemented and evaluated multiple supervised learning algorithms and classification models, demonstrating strong capabilities in model training, testing, and performance optimization.",
            tools: ["Python", "Scikit-learn", "NumPy"],
            link: "https://github.com/shivamtiwari1/Handwritten-Digit-Recognition"
        }
    ];
    const defaultJourney = [
        { role: "B.Tech, Computer Science Engineering", company: "United University", date: "2022 - 2025" },
        { role: "HMC Engineer", company: "Dixon Technologies India Limited", date: "2022" },
        { role: "Operational Engineer Trainee", company: "Optiemus Electronics Ltd.", date: "2021 - 2022" },
        { role: "Diploma, Electronics Engineering", company: "Government Polytechnic College", date: "2019 - 2021" },
    ];
    const defaultResumeData = { image: '', file: null, fileName: '' };
    const defaultCoverLetterData = { image: '', file: null, fileName: '' };
    const defaultHeroData = {
        title: 'Shivam Tiwari',
        subtitle: 'Data & Business Analyst',
        comment: 'Bridging data insights with business strategy. I transform complex datasets into actionable narratives using Python, SQL, and Power BI.'
    };
    const defaultProfilePic = 'https://via.placeholder.com/280';


    // --- Generic Data Storage ---
    function getSavedData(key, defaultValue) {
        const dataJSON = localStorage.getItem(key);
        if (dataJSON) {
            try {
                // For objects, we need to handle cases where new properties are added to the default
                const saved = JSON.parse(dataJSON);
                if (typeof defaultValue === 'object' && defaultValue !== null && !Array.isArray(defaultValue)) {
                    return {...defaultValue, ...saved};
                }
                return saved;
            } catch (e) {
                console.error(`Error parsing JSON from localStorage for key "${key}":`, e);
                return defaultValue;
            }
        } else {
            // Save the default value to localStorage for future visits
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    }

    // --- Data Initialization ---
    let aboutData = getSavedData('about', defaultAbout);
    let skillData = getSavedData('skills', defaultSkills);
    let projectData = getSavedData('projects', defaultProjects);
    let certificateData = getSavedData('certificates', []);
    let experienceData = getSavedData('journey', defaultJourney);
    let resumeData = getSavedData('resume', defaultResumeData);
    let coverLetterData = getSavedData('coverLetter', defaultCoverLetterData);
    let heroData = getSavedData('hero', defaultHeroData);
    let profilePicData = getSavedData('profilePic', defaultProfilePic);


    // --- RENDER FUNCTIONS (updates the public page) ---
    function renderHero() {
        document.getElementById('hero-title').textContent = heroData.title;
        document.getElementById('hero-subtitle').textContent = heroData.subtitle;
        document.getElementById('hero-comment').textContent = heroData.comment;
        document.getElementById('profile-pic-content').style.backgroundImage = `url(${profilePicData})`;
    }

    function renderAbout() {
        document.querySelector('#about .about-content p').textContent = aboutData;
    }

    function renderSkills() {
        const grid = document.getElementById('skills-grid');
        grid.innerHTML = skillData.map((category, index) => {
            const safeId = `skill-${createSafeId(category.title)}`;
            return `
            <div class="skill-card" id="${safeId}" data-index="${index}">
                <h3>${category.title}</h3>
                <ul>${category.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>`;
        }).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-container');
        container.innerHTML = projectData.map(project => {
            const safeId = `project-${createSafeId(project.title)}`;
            return `
            <div class="project-card fade-in" id="${safeId}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tools">${project.tools.map(tool => `<span>${tool}</span>`).join('')}</div>
                ${project.link ? `<div class="hero-buttons" style="margin-top: 1.5rem;"><a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a></div>` : ''}
            </div>`;
        }).join('');
    }

    function renderCertificates() {
        const container = document.getElementById('certificates-container');
        if (!container || certificateData.length === 0) {
            if (container) container.innerHTML = '<p>No certificates have been added yet.</p>';
            return;
        }

        const limit = 5;
        let content = certificateData.map((cert, index) => {
            const safeId = `cert-${createSafeId(cert.name)}`;
            const isHidden = index >= limit;
            return `
            <div class="certificate-card ${isHidden ? 'certificate-hidden' : ''}" id="${safeId}">
                <img src="${cert.photo}" alt="${cert.name}">
                <div class="certificate-info">
                    <h3>${cert.name}</h3>
                    <p>${cert.date}</p>
                    ${cert.link ? `<a href="${cert.link}" target="_blank">Verify</a>` : ''}
                </div>
            </div>`;
        }).join('');

        if (certificateData.length > limit) {
            const nextCertImage = certificateData[limit].photo;
            content += `<div class="show-more-card" id="show-more-certs-btn" style="background-image: url('${nextCertImage}')"></div>`;
        }

        container.innerHTML = content;
    }

    function renderJourney() {
        const container = document.getElementById('timeline-container');
        container.innerHTML = experienceData.map((item, index) => `
            <div class="timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} fade-in">
                <div class="timeline-content">
                    <h3>${item.role}</h3>
                    <p>${item.company}</p>
                    <span class="date">${item.date}</span>
                </div>
            </div>`).join('');
    }
    
    function renderResumeAndCoverLetter() {
        const container = document.getElementById('resume-cover-letter-container');
        let content = '';

        if (resumeData.image && resumeData.file) {
            content += `
                <div class="resume-card" id="resume-card">
                    <a href="${resumeData.file}" class="download-icon" download="${resumeData.fileName || 'resume.pdf'}"><i class="fas fa-download"></i></a>
                    <div class="resume-image-container">
                        <img src="${resumeData.image}" alt="Resume Preview">
                    </div>
                    <div class="resume-card-title">Resume</div>
                </div>`;
        }

        if (coverLetterData.image && coverLetterData.file) {
            content += `
                <div class="resume-card" id="cover-letter-card">
                    <a href="${coverLetterData.file}" class="download-icon" download="${coverLetterData.fileName || 'cover-letter.pdf'}"><i class="fas fa-download"></i></a>
                    <div class="resume-image-container">
                        <img src="${coverLetterData.image}" alt="Cover Letter Preview">
                    </div>
                    <div class="resume-card-title">Cover Letter</div>
                </div>`;
        }
        
        container.innerHTML = content || '<p>No resume or cover letter has been added yet.</p>';
    }

    // --- DROPDOWN RENDER FUNCTIONS ---
    function renderSkillsDropdown() {
        const dropdown = document.getElementById('skills-dropdown');
        dropdown.innerHTML = skillData.map(category => {
            const safeId = `skill-${createSafeId(category.title)}`;
            return `<a href="#${safeId}">${category.title}</a>`;
        }).join('');
    }

    function renderProjectsDropdown() {
        const dropdown = document.getElementById('projects-dropdown');
        dropdown.innerHTML = projectData.map(project => {
            const safeId = `project-${createSafeId(project.title)}`;
            return `<a href="#${safeId}">${project.title}</a>`;
        }).join('');
    }

    function renderCertificatesDropdown() {
        const dropdown = document.getElementById('certificates-dropdown');
        if (certificateData.length > 0) {
            dropdown.innerHTML = certificateData.map(cert => {
                const safeId = `cert-${createSafeId(cert.name)}`;
                return `<a href="#${safeId}">${cert.name}</a>`;
            }).join('');
        } else {
            dropdown.innerHTML = '<a href="#certificates">No certificates yet</a>';
        }
    }

    function renderResumeDropdown() {
        const dropdown = document.getElementById('resume-dropdown');
        let content = '';
        if (resumeData.file) {
            content += `<a href="#resume-card">Resume</a>`;
        }
        if (coverLetterData.file) {
            content += `<a href="#cover-letter-card">Cover Letter</a>`;
        }
        dropdown.innerHTML = content || '<a href="#resume">Not available</a>';
    }

    function renderContactDropdown() {
        const dropdown = document.getElementById('contact-dropdown');
        dropdown.innerHTML = `
            <a href="mailto:Shivam230131@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/shivam-tiwari-4239a621b/" target="_blank">LinkedIn</a>
            <a href="https://github.com/shivamtiwari1" target="_blank">GitHub</a>
        `;
    }

    // --- Image Modal ---
    function setupImageModal() {
        const modal = document.getElementById('image-modal');
        if (!modal) return;

        const modalImg = document.getElementById('full-size-image');
        const closeBtn = document.querySelector('.close-image-modal');
        const zoomInBtn = document.getElementById('zoom-in-btn');
        const zoomOutBtn = document.getElementById('zoom-out-btn');
        let currentScale = 1;

        modalImg.style.transition = 'transform 0.2s ease-in-out';

        const resetImageState = () => {
            currentScale = 1;
            modalImg.style.transform = 'scale(1)';
            modalImg.style.width = 'auto';
            modalImg.style.height = 'auto';
            modalImg.style.maxWidth = '100%';
            modalImg.style.maxHeight = '100%';
        };

        document.querySelectorAll('.image-zoom-container').forEach(container => {
            container.addEventListener('click', function(e) {
                if (e.target.tagName === 'IMG') {
                    modal.classList.add('visible');
                    modalImg.src = e.target.src;
                    resetImageState();
                }
            });
        });
        
        const closeAndReset = () => {
            modal.classList.remove('visible');
            setTimeout(resetImageState, 300); 
        };

        closeBtn.addEventListener('click', closeAndReset);
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('image-modal-content-wrapper')) {
                closeAndReset();
            }
        });

        zoomInBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentScale += 0.1;
            modalImg.style.transform = `scale(${currentScale})`;
        });

        zoomOutBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentScale = Math.max(1, currentScale - 0.1);
            modalImg.style.transform = `scale(${currentScale})`;
        });
    }

    // --- Navigation Highlighting and Scrolling ---
    function setupNavHighlighting() {
        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = document.getElementById('sticky-header').offsetHeight + 20;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                    
                    let elementToHighlight = targetElement;
                    if (!elementToHighlight.matches('.skill-card, .project-card, .certificate-card, .resume-card')) {
                        elementToHighlight = targetElement.querySelector('h2');
                    }
                    if (!elementToHighlight) {
                        elementToHighlight = targetElement;
                    }
                    
                    elementToHighlight.classList.add('highlight');
                    elementToHighlight.addEventListener('animationend', () => {
                        elementToHighlight.classList.remove('highlight');
                    }, { once: true });
                }
            }
        });
    }

    // --- Cursor Glow Effect ---
    function setupCursorGlow() {
        const glow = document.getElementById('cursor-glow');
        if (!glow) return;

        document.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    // --- INITIALIZATION ---
    function init() {
        // Render all page content from data
        renderHero();
        renderAbout();
        renderSkills();
        renderProjects();
        renderCertificates();
        renderJourney();
        renderResumeAndCoverLetter();

        // Populate navigation dropdowns
        renderSkillsDropdown();
        renderProjectsDropdown();
        renderCertificatesDropdown();
        renderResumeDropdown();
        renderContactDropdown();

        // Setup interactive UI elements
        setupNavHighlighting();
        setupCursorGlow();
        setupImageModal();

        // Event listener for "Show More" certificates button
        const certsContainer = document.getElementById('certificates-container');
        if (certsContainer) {
            certsContainer.addEventListener('click', (e) => {
                const showMoreBtn = e.target.closest('#show-more-certs-btn');
                if (showMoreBtn) {
                    showMoreBtn.remove();
                    document.querySelectorAll('.certificate-hidden').forEach(cert => {
                        cert.classList.add('visible');
                    });
                }
            });
        }

        // Initialize Vanta.js background
        if (window.VANTA) {
            VANTA.NET({ 
                el: "#hero", 
                mouseControls: true, 
                touchControls: true, 
                gyroControls: false, 
                minHeight: 200.00, 
                minWidth: 200.00, 
                scale: 1.00, 
                scaleMobile: 1.00, 
                color: 0x64ffda, 
                backgroundColor: 0x0a192f, 
                points: 12.00, 
                maxDistance: 25.00, 
                spacing: 18.00 
            });
        }

        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { 
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); 
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(fader => observer.observe(fader));

        // Intersection Observer for staggered skill card animation
        const skillCards = document.querySelectorAll('#skills-grid .skill-card');
        const skillCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const delay = card.getAttribute('data-index') * 150; // 150ms delay between cards
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, delay);
                    observer.unobserve(card); // Animate only once
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });
        skillCards.forEach(card => {
            skillCardObserver.observe(card);
        });

        // Sticky header visibility on scroll
        window.addEventListener('scroll', () => {
            const stickyHeader = document.getElementById('sticky-header');
            const heroSection = document.getElementById('hero');
            if (window.scrollY > heroSection.offsetHeight - 70) {
                stickyHeader.classList.add('visible');
            } else {
                stickyHeader.classList.remove('visible');
            }
        });
    }

    // Run initialization
    init();
});
