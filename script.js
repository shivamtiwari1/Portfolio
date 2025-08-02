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
        subtitle: "Data & Business Analyst",
        description: "Bridging data insights with business strategy. I transform complex datasets into actionable narratives using Python, SQL, and Power BI."
    };

    // --- 2. ABOUT ME SECTION ---
    const aboutMeText = "With a Bachelor's in Computer Science Engineering and a foundational Diploma in Electronics, I possess a unique, end-to-end understanding of how technology works—from the physical components to high-level data abstraction. My passion lies in decoding the stories hidden within data. I leverage powerful tools like Python, Power BI, and SQL to analyze complex information, identify critical trends, and build solutions that drive business decisions. I am driven to become a key contributor in the IT field as a professional analyst and developer, where I can apply my analytical mindset and technical skills to solve real-world challenges.";

    // --- 3. SKILLS SECTION ---
    const skillsData = [
        { 
            category: "Data Analysis & Programming", 
            skills: ["SQL", "Python (Pandas, NumPy, matplotlib)", "Advanced Excel & VBA"] 
        },
        { 
            category: "Data Visualization", 
            skills: ["Power BI", "Tableau","DAX", "Data Storytelling"] 
        },        
        { 
            category: "Database Management", 
            skills: [ "MySQL", "PostgreSQL",] 
        },
        { 
            category: "Tools & Technologies", 
            skills: ["Git & GitHub", "Microsoft Azure", "Microsoft Office Suite"] 
        },
        { 
            category: "Core Competencies", 
            skills: ["Problem-Solving", "Process Improvement", "Teamwork & Collaboration","Effective Communication"] 
        },
        { 
            category: "Languages", 
            skills: ["English", "(Advanced)" , "Hindi", "(Native)" ] 
        }
    ];

    // --- 4. MY PROJECTS SECTION ---
    const projectsData = [
        {
            title: "Real-Time Sales Analysis (Blinkit)",
            description: "Architected an end-to-end sales analysis solution. Analyzed over 8,000 sales records to uncover key product performance trends and customer purchasing behaviors. Developed 6+ interactive Power BI dashboards that translated raw data into actionable strategies for inventory management and targeted marketing campaigns.",
            tools: ["Power BI", "SQL", "DAX", "Excel"],
            link:  "https://github.com/shivamtiwari1/Real-Time-Sales-Analytics-of-Blinkit",
            outcome: "The analysis led to a 15% improvement in inventory turnover and a 10% increase in sales of high-margin products through targeted promotions."
        },
        {
            title: "Handwritten Digit Recognition",
            description: "Engineered a machine learning model to recognize handwritten digits with 97% accuracy. Implemented and evaluated multiple supervised learning algorithms and classification models, demonstrating strong capabilities in model training, testing, and performance optimization.",
            tools: ["Python", "Scikit-learn", "NumPy"],
            link: "https://github.com/shivamtiwari1/Handwritten-Digits-Recognition",
            outcome: "The final model can be integrated into applications requiring automated digit recognition, such as postal code scanning or data entry from forms."
        }
    ];

    // --- 5. CERTIFICATES SECTION ---
    // Replace with paths to your certificate images
    const certificatesData = [
        {
            name: "Data Visualisation: Empowering Business with Effective Insights",
            date: "Issued: June 25th, 2025",
            imageUrl: "assets/Tata data visuilation.png", 
            verifyLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_86t2AqKszTbhYX7sP_1750851686482_completion_certificate.pdf",
            organization: "TATA Forage"
        },
         {
            name: "Data Analytics Job Simulation",
            date: "Issued: July 2nd, 2025",
            imageUrl: "assets/Deloitte.png", 
            verifyLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_86t2AqKszTbhYX7sP_1751460404210_completion_certificate.pdf",
            organization: "Deloitte"
        },
        {
            name: "Master Data Management for Beginners",
            date: "Issued: Jan 12, 2025",
            imageUrl: "assets/Master data management tcs.png", 
            verifyLink: "https://www.tcsion.com/LX/vcgrade_categories/download_certificate_hub.attachment?LaunchFrom=iHUB&c_id=master-data-management-batch-01&course_id=71279&file_type=pdf&type=master-data-management-batch-01",
            organization: "TCS iON"
        },
         {
            name: "Geodata Processing using Python and Machine Learning",
            date: "Issued: March 13, 2025",
            imageUrl: "assets/ISRO.png", 
            verifyLink: "https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php?contextid=1049408",
            organization: "ISRO"
        },
        {
            name: "4-week internship on Al Azure",
            date: "Issued: May 13th 2025 to June 13th 2025",
            imageUrl: "assets/internship.png", 
            verifyLink: "https://www.edunetfoundation.org/certificates/validate",
            organization: "Microsoft"
        },
        {
            name: "SEBI Investor Awareness Test",
            date: "Issued: July 10, 2025",
            imageUrl: "assets/Sebi Investor test.png", 
            verifyLink: "https://certifications.nism.ac.in/nismaol/certificate.php",
            organization: "SEBI"
        },
         {
            name: "Business Analytics with Excel",
            date: "Issued: June 21st, 2025",
            imageUrl: "assets/Business analysis with excel.jpg", 
            verifyLink: "https://www.simplilearn.com/",
            organization: "Simplilearn"
        },
        {
            name: "Introduction to MS Excel",
            date: "Issued: June 15th, 2025",
            imageUrl: "assets/Introduction to excel.jpg", 
            verifyLink: "https://drive.google.com/file/d/1HYuh3qqvZPgAVG3-hp_2NImSZRkPOIMW/view?usp=drive_link",
            organization: "Simplilearn"
        },
        {
            name: "30-Days Power BI Micro Course",
            date: "Issued: July 15, 2025",
            imageUrl: "assets/Power BI.png", 
            verifyLink: "https://skillcourse.in",
            organization: "SkillCourse"
        },
        {
            name: "Introduction to Numpy",
            date: "Issued: June 22nd, 2025",
            imageUrl: "assets/Numpy.jpg", 
            verifyLink: "https://www.simplilearn.com",
            organization: "Simplilearn"
        }
    ];

    // --- 6. MY JOURNEY SECTION (Experience/Education) ---
    const journeyData = [
        { role: "Bachelor of Technology in Computer Science", company: "Shambhunath Institute of Engineering & Technology", date: "2022 - 2025" },
        { role: "HMC Engineer", company: "Anand Haldex India Pvt. Ltd.", date: "02/2022 - 08/2022" },
        { role: "Trainee Engineer", company: "Oppo India Pvt. Ltd.", date: "07/2021 - 01/2022" },
        { role: "Diploma in Electronics Engineering", company: "Government Polytechnic college", date: "2019 - 2021" },
    ];

    // --- 7. RESUME & COVER LETTER SECTION ---
    // Replace with paths to your resume preview image and PDF file
    const resumeData = {
        previewImageUrl: "assets/Shivam_Tiwari_Data_Analyst_Resume_1.jpg", 
        downloadFileUrl: "assets/Shivam_Tiwari_Data_Analyst_Resume.pdf",   
        fileName: "Shivam_Tiwari_Data_Analyst_Resume.pdf"
    };

    // Replace with paths to your cover letter preview image and PDF file
    const coverLetterData = {
        previewImageUrl: "assets/Cover Latter Shivam Tiwari_1.jpg", 
        downloadFileUrl: "assets/Cover Latter Shivam Tiwari.pdf",
        fileName: "Cover Latter Shivam Tiwari.pdf"
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
                <h4 class="project-outcome-title">Outcome:</h4>
                <p>${project.outcome || 'No outcome specified.'}</p>
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
    
        let html = '';
        const visibleCount = 5;
    
        // Add the first 5 certificates
        for (let i = 0; i < visibleCount && i < certificatesData.length; i++) {
            const cert = certificatesData[i];
            html += `
                <div class="certificate-card fade-in" id="certificate-${i}">
                    <img src="${cert.imageUrl}" alt="${cert.name} Certificate">
                    <div class="certificate-info">
                        <h3>${cert.name}</h3>
                        <p>Issued by: ${cert.organization}</p>
                        <p>${cert.date}</p>
                        <div class="certificate-verification">
                        ${cert.verifyLink ? `<a href="${cert.verifyLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Verify</a>` : ''}
                        </div>
                    </div>
                </div>`;
        }
    
        // Handle the 6th certificate and the "Show More" key
        if (certificatesData.length > visibleCount) {
            const sixthCert = certificatesData[visibleCount];
            html += `
                <div class="show-more-container" id="show-more-container">
                    <div class="certificate-card fade-in" id="certificate-${visibleCount}">
                        <img src="${sixthCert.imageUrl}" alt="${sixthCert.name} Certificate">
                        <div class="certificate-info">
                            <h3>${sixthCert.name}</h3>
                            <p>Issued by: ${sixthCert.organization}</p>
                            <p>${sixthCert.date}</p>
                            <div class="certificate-verification">
                            ${sixthCert.verifyLink ? `<a href="${sixthCert.verifyLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Verify</a>` : ''}
                            </div>
                        </div>
                    </div>
                    <div id="show-more-key">See More...</div>
                </div>
            `;
        }
    
        // Add the rest of the certificates as hidden
        for (let i = visibleCount + 1; i < certificatesData.length; i++) {
            const cert = certificatesData[i];
            html += `
                <div class="certificate-card fade-in hidden-by-default" id="certificate-${i}">
                    <img src="${cert.imageUrl}" alt="${cert.name} Certificate">
                    <div class="certificate-info">
                        <h3>${cert.name}</h3>
                        <p>Issued by: ${cert.organization}</p>
                        <p>${cert.date}</p>
                        <div class="certificate-verification">
                        ${cert.verifyLink ? `<a href="${cert.verifyLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Verify</a>` : ''}
                        </div>
                    </div>
                </div>`;
        }
    
        container.innerHTML = html;
    
        // Add event listener after the container is in the DOM
        const showMoreContainer = document.getElementById('show-more-container');
        if (showMoreContainer) {
            showMoreContainer.addEventListener('click', () => {
                const sixthCard = document.getElementById('certificate-5');
                
                // Make the 6th card fully visible and move it out of the container
                sixthCard.style.opacity = '1';
                showMoreContainer.parentNode.insertBefore(sixthCard, showMoreContainer);
                showMoreContainer.remove();
    
                // Show the rest of the cards
                document.querySelectorAll('.hidden-by-default').forEach(cert => {
                    cert.classList.remove('hidden-by-default');
                });
            });
        }
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

        // Resume Dropdown - Add the new class here
        const resumeDropdown = document.getElementById('resume-dropdown');
        resumeDropdown.classList.add('dropdown-fit-content'); // Add this line
        let resumeLinks = '';
        if (resumeData.previewImageUrl) resumeLinks += `<a href="#resume-card">Resume</a>`;
        if (coverLetterData.previewImageUrl) resumeLinks += `<a href="#cover-letter-card">Cover Letter</a>`;
        resumeDropdown.innerHTML = resumeLinks;

        // Contact Dropdown - Add the new class here
        const contactDropdown = document.getElementById('contact-dropdown');
        contactDropdown.classList.add('dropdown-fit-content'); // Add this line
        contactDropdown.innerHTML = `
            <a href="mailto:${contactData.email}">Email</a>
            <a href="${contactData.socials.find(s => s.name === 'GitHub').url}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="${contactData.socials.find(s => s.name === 'LinkedIn').url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
        const modalWrapper = document.querySelector('.image-modal-content-wrapper');
        const closeBtn = document.querySelector('.close-image-modal');
    
        let scale = 1,
            panning = false,
            pointX = 0,
            pointY = 0,
            startX = 0,
            startY = 0;
    
        function setTransform() {
            modalImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
        }
    
        function resetTransform() {
            scale = 1;
            pointX = 0;
            pointY = 0;
            setTransform();
        }
    
        function openModal(src) {
            modal.classList.add('visible');
            modalImg.src = src;
            resetTransform();
        }
    
        function closeModal() {
            modal.classList.remove('visible');
        }
    
        document.querySelectorAll('.image-zoom-container').forEach(container => {
            container.addEventListener('click', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                    openModal(e.target.src);
                }
            });
        });
    
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    
        modalWrapper.addEventListener('mousedown', (e) => {
            e.preventDefault();
            panning = true;
            startX = e.clientX - pointX;
            startY = e.clientY - pointY;
        });
    
        modalWrapper.addEventListener('mouseup', () => {
            panning = false;
        });
    
        modalWrapper.addEventListener('mouseleave', () => {
            panning = false;
        });
    
        modalWrapper.addEventListener('mousemove', (e) => {
            if (!panning) return;
            e.preventDefault();
            pointX = e.clientX - startX;
            pointY = e.clientY - startY;
            setTransform();
        });
    
        modalWrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            const rect = modalImg.getBoundingClientRect();
            const xs = (e.clientX - rect.left) / scale;
            const ys = (e.clientY - rect.top) / scale;
            const delta = (e.deltaY > 0) ? 0.95 : 1.05; // Slower, more controlled zoom speed
    
            const newScale = scale * delta;
            
            // Limit zoom levels
            if (newScale < 0.5 || newScale > 15) return;
            
            pointX += (e.clientX - rect.left) - (xs * newScale + pointX);
            pointY += (e.clientY - rect.top) - (ys * newScale + pointY);
            
            scale = newScale;
    
            setTransform();
        });
    
        modalWrapper.addEventListener('dblclick', (e) => {
            e.preventDefault();
            resetTransform();
        });
    }

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
                    
                    // --- NEW LOGIC FOR HIDDEN CERTIFICATES ---
                    const isHiddenCertificate = targetElement.classList.contains('certificate-card') && targetElement.classList.contains('hidden-by-default');
                    if (isHiddenCertificate) {
                        const showMoreContainer = document.getElementById('show-more-container');
                        if (showMoreContainer) {
                            showMoreContainer.click();
                        }
                    }

                    // Use a timeout to allow the DOM to update, especially after revealing hidden certificates
                    setTimeout(() => {
                        // --- APPLY CORRECT HIGHLIGHT ---
                        const isCard = targetElement.matches('.project-card, .skill-card, .certificate-card, .resume-card, .timeline-item');

                        if (isCard) {
                            setTimeout(() => {
                                targetElement.classList.add('highlight');
                                targetElement.addEventListener('animationend', () => {
                                    targetElement.classList.remove('highlight');
                                }, { once: true });
                            }, 160);
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

                        // --- HORIZONTAL SCROLL FOR SKILLS ---
                        if (targetElement.classList.contains('skill-card')) {
                            const skillsGrid = document.getElementById('skills-grid');
                            const cardLeft = targetElement.offsetLeft;
                            const cardWidth = targetElement.offsetWidth;
                            const gridWidth = skillsGrid.offsetWidth;

                            const scrollLeft = cardLeft - (gridWidth / 2) + (cardWidth / 2);

                            skillsGrid.scrollTo({
                                left: scrollLeft,
                                behavior: 'smooth'
                            });
                        }
                    }, isHiddenCertificate ? 50 : 0); // Add a small delay if cards were revealed
                }
            }
        });
    }

    function setupAnimations() {
        const animationDelay = 150; 

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        if(entry.target.classList.contains('skill-card') && window.innerWidth > 768){
                             entry.target.classList.add('animate');
                        } else {
                             entry.target.classList.add('visible');
                        }
                    }, animationDelay);
                } else {
                     if(entry.target.classList.contains('skill-card') && window.innerWidth > 768){
                         entry.target.classList.remove('animate');
                     } else {
                         entry.target.classList.remove('visible');
                     }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(fader => observer.observe(fader));
        
        if (window.innerWidth > 768) {
            document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));
        }
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

    function setupSkillSwiper() {
        if (window.innerWidth > 768) return; 

        const skillsGrid = document.getElementById('skills-grid');
        const skillCards = skillsGrid.querySelectorAll('.skill-card');
        let currentIndex = 0;
        let touchstartX = 0;
        let touchendX = 0;

        function updateCardPositions() {
            skillCards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next', 'hidden-left', 'hidden-right');

                if (index === currentIndex) {
                    card.classList.add('active');
                } else if (index === currentIndex - 1) {
                    card.classList.add('prev');
                } else if (index === currentIndex + 1) {
                    card.classList.add('next');
                } else if (index < currentIndex) {
                    card.classList.add('hidden-left');
                } else {
                    card.classList.add('hidden-right');
                }
            });
        }

        function handleGesture() {
            if (touchendX < touchstartX) { // Swiped left
                if (currentIndex < skillCards.length - 1) {
                    currentIndex++;
                    updateCardPositions();
                }
            }
            if (touchendX > touchstartX) { // Swiped right
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCardPositions();
                }
            }
        }

        skillsGrid.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        }, { passive: true });

        skillsGrid.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleGesture();
        });

        updateCardPositions();
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
        setupSkillSwiper(); 

        if (window.VANTA) {
            const isMobile = window.innerWidth <= 768;
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
                points: isMobile ? 6.00 : 12.00, 
                maxDistance: 25.00, 
                spacing: isMobile ? 20.00 : 18.00
            });
        }
    }

    init();
});