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
    const profilePicUrl = "assets/Profile_Pic_2.png"; 
    
    const heroData = {
        title: "Shivam Tiwari",
        subtitle: "Aspiring Data & Business Analyst",
        description: "Bridging data insights with business strategy. I love simplifying complex data into meaningful stories and visuals-whether it's through a well-crafted dashboard or a clear plot."
    };

    // --- 2. ABOUT ME SECTION ---
    const aboutMeText = "With a recent Bachelor's in Computer Science Engineering and a foundational Diploma in Electronics Engineering, I possess a unique, end-to-end understanding of how technology works—from the physical components to high-level data abstraction. My passion lies in decoding the stories hidden within data. I leverage powerful tools like Python, Power BI, SQL and other's to analyze complex information, identify critical trends, and build solutions that drive business decisions. I am driven to become a key contributor in the IT field as a professional analyst and developer, where I can apply my analytical mindset and technical skills to solve real-world challenges.";

    // --- 3. SKILLS SECTION ---
    const skillsData = [
        { 
            category: "Data Analysis & Programming", 
            skills: ["SQL", "Python (NumPy, Pandas, matplotlib)", " DAX","Advanced Excel",] 
        },
        { 
            category: "Data Visualization & Database Management",
            skills: ["Power BI (DAX)", "Tableau", "MySQL", "PostgreSQL"] 
        },        
        { 
            category: "Technology Stack & Skills", 
            skills: ["Git & GitHub", "Microsoft AI Azure", "Artificial Intelligence &"," Machine Learning (Basic)"] 
        },
        { 
            category: "Platforms & Software", 
            skills: ["Visual Studio Code", "Jupiter Notebook", "Apache Open Office", "Microsoft Office Suite", "Proteus 8 Professional"," +"] 
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
            description: "Architected an end-to-end sales analysis solution. Analyzed over 8,000+ sales records to uncover key product performance trends and customer purchasing behaviors. Developed 6+ interactive Power BI dashboards that translated raw data into actionable strategies for inventory management and targeted marketing campaigns.",
            tools: ["Power BI", "SQL", "DAX", "Excel"],
            link:  "https://github.com/shivamtiwari1/Real-Time-Sales-Analytics-of-Blinkit",
            outcome: "The analysis led to a 15% improvement in inventory turnover and a 10% increase in sales of high-margin products through targeted promotions.",
            certificateId: null, 
            certificateKeyText: "Independent Initiative",
            imageUrl: "assets/Blinkit.png"
        },
        {
            title: " Tata Business Insights Dashboard",
            description: "This Power BI project leverages 541,000+ rows of sales and customer data to create meaningful, interactive visualizations for Tata. The objective was to empower business stakeholders with intuitive insights that support smarter, data-driven decisions. From exploring geographic sales patterns to understanding customer behavior, this dashboard acts as a centralized intelligence hub tailored for executive-level review.",
            tools: ["Power BI", " Advanced Excel", "DAX", "Data Storytelling"],
            link: "https://github.com/shivamtiwari1/Tata-Business-Insights-Dashboard-Power-BI-Project",
            outcome: "This project successfully transformed over 541,000 data rows into an interactive Power BI dashboard for Tata, using DAX to reveal key business insights on revenue, customers, and sales performance. The outcome is a powerful intelligence hub that provides actionable clarity for strategic, data-driven decision-making and demonstrates strong data visualization skills in Power BI.",
            certificateId: 0, 
            certificateKeyText: "View Tata Certificate",
            imageUrl: "assets/Tata.png"
        },
         {
            title: "Factory performance analysis",
            description: "This project presents a performance analysis of telemetry data With 11 fields & 160,000+ rows collected across four international manufacturing facilities of Daikibo, using Tableau. The goal is to uncover patterns in machine breakdowns and identify which factory and device types experienced the most downtime during the month of May 2021 The unified dataset, originally collected from nine machine types reporting every 10 minutes, has been transformed into a JSON file by Daikibo's tech team to streamline analysis.",
            tools: ["Tableau", "JSON", "Dashboard filters & actions"],
            link: "https://github.com/shivamtiwari1/Factory-Performance-Analysis-Tableau-Project",
            outcome: "This analysis empowers stakeholders at Daikibo to Pinpoint operational inefficiencies. Prioritize maintenance strategies. Optimize machine performance across their global manufacturing network.",
            certificateId: 1, 
            certificateKeyText: "View Deloitte Certificate", 
            imageUrl: "assets/Daikibo.png"
        },
         {
            title: "Handwritten Digit Recognition",
            description: "Engineered a machine learning model to recognize handwritten digits with 97% accuracy. Implemented and evaluated multiple supervised learning algorithms and classification models, demonstrating strong capabilities in model training, testing, and performance optimization.",
            tools: ["Python", "Scikit-learn", "NumPy"],
            link: "https://github.com/shivamtiwari1/Handwritten-Digits-Recognition",
            outcome: "The final model can be integrated into applications requiring automated digit recognition, such as postal code scanning or data entry from forms.",
            certificateId: 4, 
            certificateKeyText: "View Microsoft Certificate",
            imageUrl: "assets/Handwritten.png"
        }
    ];

    // --- 5. CERTIFICATES SECTION ---
    const certificatesData = [
        {
            name: "Data Visualization: Empowering Business with Effective Insights",
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
            name: "4-week internship on AI Azure",
            date: "Issued: May 13th 2025 to June 13th 2025",
            imageUrl: "assets/internship.png", 
            verifyLink: "https://www.edunetfoundation.org/certificates/validate",
            organization: "Microsoft"
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
        },
         {
            name: "SEBI Investor Awareness Test",
            date: "Issued: July 10, 2025",
            imageUrl: "assets/Sebi Investor test.png", 
            verifyLink: "https://certifications.nism.ac.in/nismaol/certificate.php",
            organization: "SEBI"
        }
    ];

    // --- 6. MY JOURNEY SECTION (Experience/Education) ---
    const journeyData = [
        { 
            role: "Bachelor of Technology in Computer Science", 
            company: "Shambhunath Institute of Engineering & Technology", 
            date: "2022 - 2025",
            description: null 
        },
        { 
            role: "HMC Engineer", 
            company: "Anand Haldex India Pvt. Ltd.", 
            date: "02/2022 - 08/2022",
            description: ["Apprenticeship focusing on heavy vehicle parts manufacturing.",
                "Implemented methodical approaches including Kaizen, Poka-yoke, and detailed checklists to streamline processes.",
                "Optimized HMC for 10+product Models, improving efficiency and Quality of yield.",
                "Mentored new teammates and follow SOPs to streamline the reporting process."
            ]
        },
        { 
            role: "Trainee Engineer", 
            company: "Oppo India Pvt. Ltd.", 
            date: "07/2021 - 01/2022",
            description: [
                "Apprenticeship focusing on mobile Assembly.",
                "Worked in a Team Collaboration for effective and Quality Production using several productions techniques.",
                "Show qualities like problem solving, collaboration, agile, productivity and Kaizens."
            ]
        },
        { 
            role: "Diploma in Electronics Engineering", 
            company: "Government Polytechnic college", 
            date: "2019 - 2021",
            description: null
        },
    ];

    // --- 7. WHAT I'M WORKING ON SECTION ---
    const workingOnData = [
        "Basics of cloud platforms like Google Cloud and AWS (for data tools).",
        "Exploring machine learning basics to better understand predictive analytics",
        "Building hands-on projects in data visualization, data wrangling, and exploratory data analysis (EDA)"
    ];

    // --- 8. RESUME & COVER LETTER SECTION ---
    const resumeData = {
        previewImageUrl: "assets/Shivam_Tiwari _Analyst_ Resume.jpg", 
        downloadFileUrl: "assets/Shivam_Tiwari _ Resume.pdf",   
        fileName: "Shivam_Tiwari_Analyst_Resume.pdf"
    };

    const coverLetterData = {
        previewImageUrl: "assets/Cover_Letter_Shivam_Tiwari.jpg", 
        downloadFileUrl: "assets/Cover_Letter_Shivam_Tiwari.pdf",
        fileName: "Cover Latter Shivam Tiwari.pdf"
    };  

    // --- 9. GET IN TOUCH SECTION ---
    const contactData = {
        text: "Let's connect! I'm open to new opportunities and collaborations. Feel free to reach out.",
        email: "hi.shivamtiwari01@gmail.com",
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

    // MODIFIED renderProjects FUNCTION
    function renderProjects() {
        const container = document.getElementById('projects-container');
        if (!projectsData || projectsData.length === 0) {
            container.innerHTML = '<p>No projects have been added yet.</p>';
            return;
        }

        const generateProjectHTML = (project, id, isHidden) => {
            const imageSide = id % 2 === 0 ? 'left' : 'right';
            const contentSide = id % 2 === 0 ? 'right' : 'left';
            let secondButtonHtml = '';
            if (project.certificateId !== undefined && project.certificateId !== null) {
                secondButtonHtml = `<button class="project-button-secondary view-certificate-btn" data-certificate-id="${project.certificateId}">${project.certificateKeyText || 'View Certificate'}</button>`;
            } else {
                if (project.certificateKeyText) {
                    secondButtonHtml = `<button class="project-button-secondary">${project.certificateKeyText}</button>`;
                } else {
                    secondButtonHtml = `<button class="project-button-secondary" disabled>Self Project</button>`;
                }
            }

            return `
                <div class="project-item fade-in ${isHidden ? 'hidden-by-default' : ''}" id="project-${id}">
                    <div class="project-image-side project-image-${imageSide}">
                        <div class="project-image-wrapper">
                            <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                        </div>
                    </div>
                    <div class="project-content-side project-content-${contentSide}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <h4 class="project-outcome-title">Outcome:</h4>
                        <p>${project.outcome || 'No outcome specified.'}</p>
                        <div class="project-tools">${project.tools.map(tool => `<span>${tool}</span>`).join('')}</div>
                        <div class="project-buttons-container">
                            ${project.link ? `<a href="${project.link}" class="project-button" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
                            ${secondButtonHtml}
                        </div>
                    </div>
                </div>`;
        };

        let finalHtml = '';
        const visibleCount = 2;

        for (let i = 0; i < projectsData.length; i++) {
            finalHtml += generateProjectHTML(projectsData[i], i, i >= visibleCount);
        }

        if (projectsData.length > visibleCount) {
            finalHtml += `
                <div id="show-more-projects-container" class="fade-in">
                    <button class="project-button">Show More Projects</button>
                </div>
            `;
        }

        container.innerHTML = finalHtml;

        const showMoreButton = document.getElementById('show-more-projects-container');
        if (showMoreButton) {
            showMoreButton.addEventListener('click', () => {
                document.querySelectorAll('.project-item.hidden-by-default').forEach(project => {
                    project.classList.remove('hidden-by-default');
                });
                showMoreButton.remove();
            });
        }
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
                <div class="show-more-container" id="show-more-certificates-container">
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
                    <div id="show-more-certificates-key">See More...</div>
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
        const showMoreCertificatesContainer = document.getElementById('show-more-certificates-container');
        if (showMoreCertificatesContainer) {
            showMoreCertificatesContainer.addEventListener('click', () => {
                const sixthCard = document.getElementById('certificate-5');
                
                // Make the 6th card fully visible and move it out of the container
                sixthCard.style.opacity = '1';
                showMoreCertificatesContainer.parentNode.insertBefore(sixthCard, showMoreCertificatesContainer);
                showMoreCertificatesContainer.remove();
    
                // Show the rest of the cards
                document.querySelectorAll('.certificate-card.hidden-by-default').forEach(cert => {
                    cert.classList.remove('hidden-by-default');
                });
            });
        }
    }

    function renderJourney() {
        const container = document.getElementById('timeline-container');
        container.innerHTML = journeyData.map((item, index) => {
            const isClickable = item.description ? 'clickable' : '';
            const descriptionPrompt = item.description ? '<p class="description-prompt">View Details</p>' : '';
            const dataAttribute = item.description ? `data-journey-index="${index}"` : '';
    
            return `
                <div class="timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} fade-in" id="journey-${index}">
                    <div class="timeline-content ${isClickable}" ${dataAttribute}>
                        <h3>${item.role}</h3>
                        <p>${item.company}</p>
                        <span class="date">${item.date}</span>
                        ${descriptionPrompt}
                    </div>
                </div>`;
        }).join('');
    }
    
    function renderWorkingOn() {
        const container = document.querySelector('#working-on .about-content');
        if (workingOnData && workingOnData.length > 0) {
            const list = document.createElement('ul');
            workingOnData.forEach(itemText => {
                const listItem = document.createElement('li');
                listItem.textContent = itemText;
                list.appendChild(listItem);
            });
            container.innerHTML = ''; // Clear existing content
            container.appendChild(list);
        }
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
        const githubSocial = contactData.socials.find(s => s.name === 'GitHub');
        const linkedinSocial = contactData.socials.find(s => s.name === 'LinkedIn');
        contactDropdown.innerHTML = `
            <a href="mailto:${contactData.email}">Email</a>
            ${githubSocial ? `<a href="${githubSocial.url}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
            ${linkedinSocial ? `<a href="${linkedinSocial.url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}
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
            // Close nav if a link is clicked
            if (e.target.tagName === 'A') {
                document.body.classList.remove('mobile-nav-open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
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
            
        let initialDistance = null;
    
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
    
        const profilePic = document.getElementById('profile-pic-container');
        if (profilePic) {
            profilePic.addEventListener('click', () => {
                openModal(profilePicUrl);
            });
        }
    
        document.querySelectorAll('.image-zoom-container').forEach(container => {
            container.addEventListener('click', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                    openModal(e.target.src);
                }
            });
        });

        document.body.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-certificate-btn')) {
                const certificateId = parseInt(e.target.dataset.certificateId, 10);
                if (!isNaN(certificateId)) {
                    const certificate = certificatesData[certificateId];
                    if (certificate) {
                        openModal(certificate.imageUrl);
                    }
                }
            }
        });
    
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    
        // --- MOUSE CONTROLS ---
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
            const delta = (e.deltaY > 0) ? 0.95 : 1.05;
    
            const newScale = scale * delta;
            
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
    
        // --- TOUCH CONTROLS FOR MOBILE ---
        modalWrapper.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                panning = true;
                startX = e.touches[0].clientX - pointX;
                startY = e.touches[0].clientY - pointY;
            } else if (e.touches.length === 2) {
                panning = false;
                initialDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        }, { passive: true });
        
        modalWrapper.addEventListener('touchend', (e) => {
            panning = false;
            if (e.touches.length < 2) {
                initialDistance = null;
            }
        });
    
        modalWrapper.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (panning && e.touches.length === 1) {
                pointX = e.touches[0].clientX - startX;
                pointY = e.touches[0].clientY - startY;
                setTransform();
            } else if (e.touches.length === 2 && initialDistance) {
                const newDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const delta = newDistance / initialDistance;
                
                const rect = modalImg.getBoundingClientRect();
                const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        
                const xs = (centerX - rect.left) / scale;
                const ys = (centerY - rect.top) / scale;
        
                const newScale = scale * delta;
                
                if (newScale >= 0.5 && newScale <= 15) {
                    pointX += (centerX - rect.left) - (xs * newScale + pointX);
                    pointY += (centerY - rect.top) - (ys * newScale + pointY);
                    scale = newScale;
                    setTransform();
                }
        
                initialDistance = newDistance;
            }
        }, { passive: false });
    }
    
    function setupJourneyModal() {
        const modal = document.getElementById('journey-modal');
        if (!modal) return;
    
        const modalTitle = document.getElementById('journey-modal-title');
        const modalDescription = document.getElementById('journey-modal-description');
        const closeBtn = document.querySelector('.close-journey-modal');
    
        function openModal(index) {
            const item = journeyData[index];
            if (!item || !item.description) return;
    
            modalTitle.innerHTML = `${item.role} at <strong>${item.company}</strong>`;
            
            let descriptionHtml = '';
            let currentList = '';
    
            item.description.forEach(point => {
                if (point.startsWith('<strong>')) {
                    if (currentList) {
                        descriptionHtml += `<ul>${currentList}</ul>`;
                        currentList = '';
                    }
                    descriptionHtml += `<p class="journey-modal-heading">${point}</p>`;
                } else {
                    currentList += `<li>${point}</li>`;
                }
            });
    
            if (currentList) {
                descriptionHtml += `<ul>${currentList}</ul>`;
            }
    
            modalDescription.innerHTML = descriptionHtml;
            modal.classList.add('visible');
        }
    
        function closeModal() {
            modal.classList.remove('visible');
        }
    
        document.body.addEventListener('click', function(e) {
            const clickableCard = e.target.closest('.timeline-content.clickable');
            if (clickableCard) {
                const index = clickableCard.dataset.journeyIndex;
                openModal(index);
            }
        });
    
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    function setupNavHighlighting() {
        document.body.addEventListener('click', function (e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            const isInternalLink = href && href.startsWith('#');

            if (isInternalLink) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));

                if (targetElement) {
                    
                    const isHiddenCertificate = targetElement.matches('.certificate-card.hidden-by-default');
                    const isHiddenProject = targetElement.matches('.project-item.hidden-by-default');

                    if (isHiddenCertificate) {
                        document.getElementById('show-more-certificates-container')?.click();
                    }
                    if (isHiddenProject) {
                        document.getElementById('show-more-projects-container')?.click();
                    }

                    setTimeout(() => {
                        const isCard = targetElement.matches('.project-item, .skill-card, .certificate-card, .resume-card, .timeline-item');

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
                    }, (isHiddenCertificate || isHiddenProject) ? 50 : 0);
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
        renderWorkingOn();
        renderResumeAndCoverLetter();
        renderContact();
        renderAllDropdowns();
        
        setupMobileNav();
        setupDropdowns();
        setupNavHighlighting();
        setupImageModal();
        setupJourneyModal();
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