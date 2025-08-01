document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================================
    // === EDIT YOUR PORTFOLIO CONTENT HERE ==============================================
    // ===================================================================================
    // To edit your portfolio, change the values in the variables below.
    // Use local paths for your images and downloadable files.
    // For example: 'assets/images/profile.jpg' or 'assets/pdf/resume.pdf'
    // -----------------------------------------------------------------------------------

    // --- 1. HERO SECTION & PROFILE PICTURE ---
    // Replace with the path to your profile picture
    const profilePicUrl = "assets/Photo.png"; 
    
    const heroData = {
        title: "Shivam Tiwari",
        subtitle: "Business Analyst",
        description: "Bridging data insights with business strategy. I transform complex datasets into actionable narratives using Python, SQL, and Power BI."
    };

    // --- 2. ABOUT ME SECTION ---
    const aboutMeText = "With a Bachelor's in Computer Science Engineering and a foundational Diploma in Electronics, I possess a unique, end-to-end understanding of how technology works—from the physical components to high-level data abstraction. My passion lies in decoding the stories hidden within data. I leverage powerful tools like Python, Power BI, and SQL to analyze complex information, identify critical trends, and build solutions that drive business decisions. I am driven to become a key contributor in the IT field as a professional analyst and developer, where I can apply my analytical mindset and technical skills to solve real-world challenges.";

    // --- 3. SKILLS SECTION ---
    const skillsData = [
        { 
            category: "Data Analysis & Programming", 
            skills: ["SQL", "Python (Pandas, NumPy, Scikit-learn)", "DAX", "Advanced Excel & VBA"] 
        },
        { 
            category: "Data Visualization", 
            skills: ["Power BI", "Tableau"] 
        },
        { 
            category: "Tools & Technologies", 
            skills: ["Git & GitHub", "Microsoft Azure", "Database Fundamentals"] 
        },
        { 
            category: "Core Competencies", 
            skills: ["Problem-Solving", "Process Improvement", "Teamwork & Collaboration"] 
        }
    ];

    // --- 4. MY PROJECTS SECTION ---
    const projectsData = [
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

    // --- 5. CERTIFICATES SECTION ---
    // Replace with paths to your certificate images
    const certificatesData = [
        {
            name: "Data Analysis with Python",
            date: "Issued: July 2023",
            imageUrl: "E:\newfolder\Business analysis with excel.jpg", 
            verifyLink: "https://example.com/verify/123"
        },
        {
            name: "Microsoft Power BI Desktop",
            date: "Issued: May 2023",
            imageUrl: "assets/images/powerbi_certificate.jpg", 
            verifyLink: ""
        }
    ];

    // --- 6. MY JOURNEY SECTION (Experience/Education) ---
    const journeyData = [
        { role: "B.Tech, Computer Science Engineering", company: "United University", date: "2022 - 2025" },
        { role: "HMC Engineer", company: "Dixon Technologies India Limited", date: "2022" },
        { role: "Operational Engineer Trainee", company: "Optiemus Electronics Ltd.", date: "2021 - 2022" },
        { role: "Diploma, Electronics Engineering", company: "Government Polytechnic College", date: "2019 - 2021" },
    ];

    // --- 7. RESUME & COVER LETTER SECTION ---
    // Replace with paths to your resume preview image and PDF file
    const resumeData = {
        previewImageUrl: "assets/images/resume_preview.png", 
        downloadFileUrl: "assets/pdf/Shivam_Tiwari_Resume.pdf",   
        fileName: "Shivam_Tiwari_Resume.pdf"
    };

    // Replace with paths to your cover letter preview image and PDF file
    const coverLetterData = {
        previewImageUrl: "assets/images/cover_letter_preview.png", 
        downloadFileUrl: "assets/pdf/Shivam_Tiwari_Cover_Letter.pdf",
        fileName: "Shivam_Tiwari_Cover_Letter.pdf"
    };

    // --- 8. GET IN TOUCH SECTION ---
    const contactData = {
        text: "Let's connect! I'm open to new opportunities and collaborations. Feel free to reach out.",
        email: "Shivam230131@gmail.com",
        socials: [
            { name: "LinkedIn", iconClass: "fab fa-linkedin", url: "https://www.linkedin.com/in/shivam-tiwari-4239a621b/" },
            { name: "GitHub", iconClass: "fab fa-github", url: "https://github.com/shivamtiwari1" }
        ]
    };

    // ===================================================================================
    // === END OF EDITABLE CONTENT =======================================================
    // ===================================================================================


    // --- RENDER FUNCTIONS (These functions build the HTML from your data) ---
    
    function renderHero() {
        document.getElementById('hero-title').textContent = heroData.title;
        document.getElementById('hero-subtitle').textContent = heroData.subtitle;
        document.getElementById('hero-comment').textContent = heroData.description;
        document.getElementById('profile-pic-content').style.backgroundImage = `url(${profilePicUrl})`;
    }

    function renderAbout() {
        document.querySelector('#about .about-content p').textContent = aboutMeText;
    }

    function renderSkills() {
        const grid = document.getElementById('skills-grid');
        grid.innerHTML = skillsData.map((category, index) => `
            <div class="skill-card" data-index="${index}" id="skill-category-${index}">
                <h3>${category.category}</h3>
                <ul>${category.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>`).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-container');
        container.innerHTML = projectsData.map((project, index) => `
            <div class="project-card fade-in" id="project-${index}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tools">${project.tools.map(tool => `<span>${tool}</span>`).join('')}</div>
                ${project.link ? `<div class="hero-buttons" style="margin-top: 1.5rem;"><a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a></div>` : ''}
            </div>`).join('');
    }

    function renderCertificates() {
        const container = document.getElementById('certificates-container');
        if (!certificatesData || certificatesData.length === 0) {
            container.innerHTML = '<p>No certificates have been added yet.</p>';
            return;
        }
        container.innerHTML = certificatesData.map((cert, index) => `
            <div class="certificate-card fade-in" id="certificate-${index}">
                <img src="${cert.imageUrl}" alt="${cert.name} Certificate">
                <div class="certificate-info">
                    <h3>${cert.name}</h3>
                    <p>${cert.date}</p>
                    ${cert.verifyLink ? `<a href="${cert.verifyLink}" target="_blank" rel="noopener noreferrer">Verify</a>` : ''}
                </div>
            </div>`).join('');
    }

    function renderJourney() {
        const container = document.getElementById('timeline-container');
        container.innerHTML = journeyData.map((item, index) => `
            <div class="timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} fade-in" id="journey-${index}">
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

        if (resumeData.previewImageUrl && resumeData.downloadFileUrl) {
            content += `
                <div class="resume-card fade-in" id="resume-card">
                    <a href="${resumeData.downloadFileUrl}" class="download-icon" download="${resumeData.fileName}"><i class="fas fa-download"></i></a>
                    <div class="resume-image-container">
                        <img src="${resumeData.previewImageUrl}" alt="Resume Preview">
                    </div>
                    <div class="resume-card-title">Resume</div>
                </div>`;
        }

        if (coverLetterData.previewImageUrl && coverLetterData.downloadFileUrl) {
            content += `
                <div class="resume-card fade-in" id="cover-letter-card">
                    <a href="${coverLetterData.downloadFileUrl}" class="download-icon" download="${coverLetterData.fileName}"><i class="fas fa-download"></i></a>
                    <div class="resume-image-container">
                        <img src="${coverLetterData.previewImageUrl}" alt="Cover Letter Preview">
                    </div>
                    <div class="resume-card-title">Cover Letter</div>
                </div>`;
        }
        
        container.innerHTML = content || '<p>No resume or cover letter has been added yet.</p>';
    }

    function renderContact() {
        document.getElementById('contact-text').textContent = contactData.text;
        const emailLink = document.getElementById('contact-email-link');
        emailLink.href = `mailto:${contactData.email}`;
        emailLink.textContent = contactData.email;
        const socialContainer = document.getElementById('social-icons-container');
        socialContainer.innerHTML = contactData.socials.map(social => 
            `<a href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.name}"><i class="${social.iconClass}"></i></a>`
        ).join('');
    }

    // --- Dropdown Render Functions ---
    function renderAllDropdowns() {
        // Skills Dropdown
        const skillsDropdown = document.getElementById('skills-dropdown');
        skillsDropdown.innerHTML = skillsData.map((category, index) => 
            `<a href="#skill-category-${index}">${category.category}</a>`
        ).join('');

        // Projects Dropdown
        const projectsDropdown = document.getElementById('projects-dropdown');
        projectsDropdown.innerHTML = projectsData.map((project, index) => 
            `<a href="#project-${index}">${project.title}</a>`
        ).join('');

        // Certificates Dropdown
        const certificatesDropdown = document.getElementById('certificates-dropdown');
        certificatesDropdown.innerHTML = certificatesData.map((cert, index) => 
            `<a href="#certificate-${index}">${cert.name}</a>`
        ).join('');

        // Experience/Journey Dropdown
        const experienceDropdown = document.getElementById('experience-dropdown');
        experienceDropdown.innerHTML = journeyData.map((item, index) => 
            `<a href="#journey-${index}">${item.role}</a>`
        ).join('');

        // Resume Dropdown
        const resumeDropdown = document.getElementById('resume-dropdown');
        let resumeLinks = '';
        if (resumeData.previewImageUrl) resumeLinks += `<a href="#resume-card">Resume</a>`;
        if (coverLetterData.previewImageUrl) resumeLinks += `<a href="#cover-letter-card">Cover Letter</a>`;
        resumeDropdown.innerHTML = resumeLinks;

        // Contact Dropdown
        const contactDropdown = document.getElementById('contact-dropdown');
        contactDropdown.innerHTML = `
            <a href="#contact-email-link">Email</a>
            <a href="#social-icons-container">Socials</a>
        `;
    }


    // --- UI & EVENT LISTENERS ---

    function setupMobileNav() {
        const hamburgerBtn = document.getElementById('hamburger-menu');
        const mainNav = document.getElementById('main-nav');
        
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            document.body.classList.toggle('mobile-nav-open');
        });

        mainNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                if (window.innerWidth <= 768) {
                    // Close all open mobile dropdowns
                    document.querySelectorAll('#main-nav .nav-item.open').forEach(item => item.classList.remove('open'));
                    
                    // If the clicked link is inside a dropdown, close the main nav
                    if (e.target.parentElement.classList.contains('dropdown-content')) {
                        hamburgerBtn.setAttribute('aria-expanded', 'false');
                        document.body.classList.remove('mobile-nav-open');
                    }
                }
            }
        });
    }

    function setupDropdowns() {
        const navItems = document.querySelectorAll('#main-nav .nav-item');

        navItems.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    // Prevent default scroll only for the main nav item link on mobile
                    if (!e.target.parentElement.classList.contains('dropdown-content')) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    
                    const wasOpen = item.classList.contains('open');
                    navItems.forEach(otherItem => otherItem.classList.remove('open'));
                    if (!wasOpen) {
                        item.classList.add('open');
                    }
                }
            });
        });
    }

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

        zoomInBtn.addEventListener('click', (e) => { e.stopPropagation(); currentScale += 0.1; modalImg.style.transform = `scale(${currentScale})`; });
        zoomOutBtn.addEventListener('click', (e) => { e.stopPropagation(); currentScale = Math.max(1, currentScale - 0.1); modalImg.style.transform = `scale(${currentScale})`; });
    }

    // --- MODIFIED FUNCTION ---
    function setupNavHighlighting() {
        document.body.addEventListener('click', function (e) {
            const link = e.target.closest('a');
            if (!link) return;
    
            const href = link.getAttribute('href');
            // Check if it's a valid link that points to an ID
            const isInternalLink = href && href.startsWith('#');
    
            if (isInternalLink) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
    
                if (targetElement) {
                    
                    // --- APPLY CORRECT HIGHLIGHT ---
                    const isCard = targetElement.matches('.project-card, .skill-card, .certificate-card, .resume-card, .timeline-item');

                    if (isCard) {
                        targetElement.classList.add('highlight');
                        targetElement.addEventListener('animationend', () => {
                            targetElement.classList.remove('highlight');
                        }, { once: true });
                    } else {
                        const section = targetElement.closest('section') || targetElement;
                        const heading = section.querySelector('h2');
                        if (heading) {
                            heading.classList.add('heading-highlight');
                            heading.addEventListener('animationend', () => {
                                heading.classList.remove('heading-highlight');
                            }, { once: true });
                        }
                    }

                    // --- NAV TAB BLINK LOGIC (runs for all clicks) ---
                    const parentNavItem = link.closest('.nav-item');
                    let mainNavLink;
    
                    if (parentNavItem) {
                        mainNavLink = parentNavItem.querySelector('a');
                    } else if (link.closest('.hero-buttons')) {
                        mainNavLink = document.querySelector(`#main-nav a[href="${href}"]`);
                    } else if (link.closest('#main-nav')) {
                        mainNavLink = link;
                    }
    
                    if (mainNavLink) {
                        document.querySelectorAll('#main-nav a').forEach(navLink => navLink.classList.remove('active-link'));
                        mainNavLink.classList.add('active-link');
                        mainNavLink.addEventListener('animationend', () => {
                            mainNavLink.classList.remove('active-link');
                        }, { once: true });
                    }
    
                    // Close mobile nav if it's open
                    if (document.body.classList.contains('mobile-nav-open')) {
                        document.getElementById('hamburger-menu').click();
                    }
                    
                    // --- CORRECTED SMOOTH SCROLL LOGIC ---
                    const headerHeight = document.getElementById('sticky-header').offsetHeight;
                    const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 40;
    
                    document.body.style.pointerEvents = 'none';
    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
    
                    setTimeout(() => {
                        document.body.style.pointerEvents = 'auto';
                    }, 1000);
                }
            }
        });
    }

    function setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { 
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); 
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(fader => observer.observe(fader));

        const skillCards = document.querySelectorAll('.skill-card');
        const skillCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const delay = card.getAttribute('data-index') * 150;
                    setTimeout(() => card.classList.add('animate'), delay);
                    observer.unobserve(card);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        skillCards.forEach(card => skillCardObserver.observe(card));
    }
    
    function setupStickyHeader() {
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

    // --- INITIALIZATION ---
    function init() {
        renderHero();
        renderAbout();
        renderSkills();
        renderProjects();
        renderCertificates();
        renderJourney();
        renderResumeAndCoverLetter();
        renderContact();
        renderAllDropdowns();

        setupMobileNav();
        setupDropdowns();
        setupNavHighlighting();
        setupImageModal();
        setupAnimations();
        setupStickyHeader();

        if (window.VANTA) {
            VANTA.NET({ 
                el: "#hero", mouseControls: true, touchControls: true, gyroControls: false, 
                minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, 
                color: 0x64ffda, backgroundColor: 0x0a192f, points: 12.00, 
                maxDistance: 25.00, spacing: 18.00 
            });
        }
    }

    init();
});