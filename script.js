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


    // --- Data Initialization ---
    let aboutData = getSavedData('about', defaultAbout);
    let skillData = getSavedData('skills', defaultSkills);
    let projectData = getSavedData('projects', defaultProjects);
    let certificateData = getSavedData('certificates', []);
    let experienceData = getSavedData('journey', defaultJourney);
    let feedbackData = getSavedData('feedback', []);
    let resumeData = getSavedData('resume', defaultResumeData);
    let coverLetterData = getSavedData('coverLetter', defaultCoverLetterData);
    let heroData = getSavedData('hero', defaultHeroData);


    // --- Generic Data Storage ---
    function getSavedData(key, defaultValue) {
        const dataJSON = localStorage.getItem(key);
        if (dataJSON) {
            try {
                return JSON.parse(dataJSON);
            } catch (e) {
                console.error(`Error parsing JSON from localStorage for key "${key}":`, e);
                return defaultValue;
            }
        } else {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    }
    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }


    // --- RENDER FUNCTIONS (updates the public page) ---
    function renderHero() {
        document.getElementById('hero-title').textContent = heroData.title;
        document.getElementById('hero-subtitle').textContent = heroData.subtitle;
        document.getElementById('hero-comment').textContent = heroData.comment;
    }
    function renderAbout() {
        document.querySelector('#about .about-content p').textContent = aboutData;
    }
    function renderSkills() {
        const grid = document.getElementById('skills-grid');
        grid.innerHTML = skillData.map((category, index) => {
            const safeId = `skill-${createSafeId(category.title)}`;
            // MODIFIED: Removed 'fade-in' and added 'data-index' for staggering
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
        const projectSelect = document.getElementById('project-select');
        const firstOption = projectSelect.options[0];
        projectSelect.innerHTML = '';
        projectSelect.appendChild(firstOption);
        projectData.forEach(project => {
            const option = document.createElement('option');
            option.value = project.title;
            option.textContent = project.title;
            projectSelect.appendChild(option);
        });
    }
    function renderCertificates() {
        const container = document.getElementById('certificates-container');
        if (certificateData.length === 0) {
            container.innerHTML = '<p>No certificates have been added yet.</p>';
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
    function renderFeedback() {
        const feedbackList = document.getElementById('feedback-list');
        const displaySection = document.getElementById('feedback-display-section');
        if (feedbackData.length > 0) {
            displaySection.style.display = 'block';
            feedbackList.innerHTML = feedbackData.map((item, index) => `<div class="feedback-card" data-id="${item.date}"><div class="feedback-controls"><span class="drag-handle" title="Drag to reorder">☰</span><button class="delete-feedback-btn" data-index="${index}" title="Delete feedback">&times;</button></div><p>"${item.text}"</p><div class="feedback-author">${item.name} <span>on ${item.project}</span></div></div>`).join('');
        } else {
            displaySection.style.display = 'none';
        }
        if (document.body.classList.contains('is-admin')) {
            new Sortable(feedbackList, {
                handle: '.drag-handle', animation: 150, onEnd: (evt) => {
                    const [movedItem] = feedbackData.splice(evt.oldIndex, 1);
                    feedbackData.splice(evt.newIndex, 0, movedItem);
                    saveData('feedback', feedbackData);
                    renderFeedback();
                }
            });
        }
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


    // --- MANAGEMENT MODAL SETUP ---
    function setupAboutModal() {
        const manageBtn = document.getElementById('manage-about-dropdown');
        const modal = document.getElementById('about-form-modal');
        const form = document.getElementById('about-form');
        const cancelBtn = document.getElementById('cancel-about-form-btn');

        manageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('about-text').value = aboutData;
            modal.classList.add('visible');
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            aboutData = document.getElementById('about-text').value;
            saveData('about', aboutData);
            renderAbout();
            modal.classList.remove('visible');
        });

        cancelBtn.addEventListener('click', () => modal.classList.remove('visible'));
    }
    function setupSkillModals() {
        const manageSkillsBtn = document.getElementById('manage-skills-dropdown');
        const skillTreeModal = document.getElementById('skill-tree-modal');
        const skillFormModal = document.getElementById('skill-form-modal');

        const renderSkillTree = () => {
            const container = document.getElementById('skill-tree-container');
            container.innerHTML = `<ul id="skill-category-list"></ul>`;
            const list = document.getElementById('skill-category-list');
            skillData.forEach((category, catIndex) => {
                const categoryItem = document.createElement('li');
                categoryItem.dataset.catIndex = catIndex;
                categoryItem.innerHTML = `
                    <div class="skill-tree-category-header">
                        <span class="drag-handle">☰</span>
                        <span class="category-title">${category.title}</span>
                        <button class="add-skill-to-category-btn" title="Add skill">+</button>
                    </div>
                    <ul class="skill-item-list" data-cat-index="${catIndex}">${category.skills.map((skill, skillIndex) => `
                        <li class="skill-tree-item" data-skill-index="${skillIndex}">
                            <span class="drag-handle">☰</span>
                            <span>${skill}</span>
                            <div class="card-controls">
                                <button class="menu-btn">...</button>
                                <ul class="popup-menu">
                                    <li class="edit-skill-btn">Edit</li>
                                    <li class="delete-skill-btn delete-option">Delete</li>
                                </ul>
                            </div>
                        </li>`).join('')}
                    </ul>`;
                list.appendChild(categoryItem);
            });
            new Sortable(list, { handle: '.drag-handle', animation: 150, onEnd: (evt) => {
                const [movedItem] = skillData.splice(evt.oldIndex, 1);
                skillData.splice(evt.newIndex, 0, movedItem);
                saveData('skills', skillData);
                renderSkills();
                renderSkillTree();
                renderSkillsDropdown();
            }});
            document.querySelectorAll('.skill-item-list').forEach(skillList => {
                new Sortable(skillList, { handle: '.drag-handle', animation: 150, ghostClass: 'sortable-ghost', onEnd: (evt) => {
                    const fromCatIndex = evt.from.dataset.catIndex;
                    const oldSkillIndex = evt.oldIndex;
                    const newSkillIndex = evt.newIndex;
                    const [movedSkill] = skillData[fromCatIndex].skills.splice(oldSkillIndex, 1);
                    skillData[fromCatIndex].skills.splice(newSkillIndex, 0, movedSkill);
                    saveData('skills', skillData);
                    renderSkills();
                    renderSkillTree();
                }});
            });
        };
        const openSkillFormModal = (catIndex = null, skillIndex = null) => {
            const form = document.getElementById('skill-form');
            form.reset();
            document.getElementById('skill-category-index').value = '';
            document.getElementById('skill-item-index').value = '';
            const categoryInput = document.getElementById('skill-category');
            if (catIndex !== null) {
                categoryInput.value = skillData[catIndex].title;
                categoryInput.disabled = true;
                document.getElementById('skill-category-index').value = catIndex;
                if (skillIndex !== null) {
                    document.getElementById('skill-form-modal-title').textContent = 'Edit Skill';
                    document.getElementById('skill-name').value = skillData[catIndex].skills[skillIndex];
                    document.getElementById('skill-item-index').value = skillIndex;
                } else {
                    document.getElementById('skill-form-modal-title').textContent = `Add Skill to "${skillData[catIndex].title}"`;
                }
            } else {
                document.getElementById('skill-form-modal-title').textContent = 'Add New Skill Category';
                categoryInput.disabled = false;
            }
            skillFormModal.classList.add('visible');
        };
        manageSkillsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderSkillTree();
            skillTreeModal.classList.add('visible');
        });
        document.getElementById('cancel-skill-tree-btn').addEventListener('click', () => skillTreeModal.classList.remove('visible'));
        document.getElementById('add-new-skill-btn').addEventListener('click', () => openSkillFormModal());
        document.getElementById('cancel-skill-form-btn').addEventListener('click', () => skillFormModal.classList.remove('visible'));
        document.getElementById('skill-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const categoryName = document.getElementById('skill-category').value.trim();
            const skillName = document.getElementById('skill-name').value.trim();
            const catIndex = document.getElementById('skill-category-index').value;
            const skillIndex = document.getElementById('skill-item-index').value;
            if (!categoryName || !skillName) return;
            if (catIndex !== '' && skillIndex !== '') {
                skillData[catIndex].skills[skillIndex] = skillName;
            } else if (catIndex !== '') {
                skillData[catIndex].skills.push(skillName);
            } else {
                let category = skillData.find(c => c.title.toLowerCase() === categoryName.toLowerCase());
                if (category) category.skills.push(skillName);
                else skillData.push({ title: categoryName, skills: [skillName] });
            }
            saveData('skills', skillData);
            renderSkills();
            renderSkillTree();
            renderSkillsDropdown();
            skillFormModal.classList.remove('visible');
        });
        document.getElementById('skill-tree-container').addEventListener('click', e => {
            const target = e.target;
            const catHeader = target.closest('.skill-tree-category-header');
            const skillItem = target.closest('.skill-tree-item');
            if (target.classList.contains('add-skill-to-category-btn')) {
                openSkillFormModal(catHeader.parentElement.dataset.catIndex);
            } else if (skillItem) {
                const catIndex = skillItem.parentElement.dataset.catIndex;
                const skillIndex = skillItem.dataset.skillIndex;
                if (target.classList.contains('menu-btn')) {
                    const popup = target.nextElementSibling;
                    popup.classList.toggle('visible');
                    e.stopPropagation();
                } else if (target.classList.contains('edit-skill-btn')) {
                    openSkillFormModal(catIndex, skillIndex);
                } else if (target.classList.contains('delete-skill-btn')) {
                    if (confirm('Are you sure you want to delete this skill?')) {
                        skillData[catIndex].skills.splice(skillIndex, 1);
                        if (skillData[catIndex].skills.length === 0 && confirm('This category is empty. Delete it?')) {
                            skillData.splice(catIndex, 1);
                        }
                        saveData('skills', skillData);
                        renderSkills();
                        renderSkillTree();
                        renderSkillsDropdown();
                    }
                }
            }
        });
    }
    function setupProjectModals() {
        const manageBtn = document.getElementById('manage-projects-dropdown');
        const listModal = document.getElementById('project-list-modal');
        const formModal = document.getElementById('project-form-modal');

        const renderProjectList = () => {
            const container = document.getElementById('project-list-container');
            container.innerHTML = `<ul id="project-list"></ul>`;
            const list = document.getElementById('project-list');
            projectData.forEach((project, index) => {
                const item = document.createElement('li');
                item.className = 'project-list-item';
                item.dataset.index = index;
                item.innerHTML = `
                    <span class="drag-handle">☰</span>
                    <span>${project.title}</span>
                    <div class="card-controls">
                        <button class="menu-btn">...</button>
                        <ul class="popup-menu">
                            <li class="edit-project-btn">Edit</li>
                            <li class="delete-project-btn delete-option">Delete</li>
                        </ul>
                    </div>`;
                list.appendChild(item);
            });
            new Sortable(list, {
                handle: '.drag-handle', animation: 150, onEnd: (evt) => {
                    const [movedItem] = projectData.splice(evt.oldIndex, 1);
                    projectData.splice(evt.newIndex, 0, movedItem);
                    saveData('projects', projectData);
                    renderProjects();
                    renderProjectList();
                    renderProjectsDropdown();
                }
            });
        };
        const openProjectForm = (index = null) => {
            const form = document.getElementById('project-form');
            form.reset();
            document.getElementById('edit-project-index').value = '';
            if (index !== null) {
                const project = projectData[index];
                document.getElementById('project-form-modal-title').textContent = 'Edit Project';
                document.getElementById('edit-project-index').value = index;
                document.getElementById('project-title').value = project.title;
                document.getElementById('project-description').value = project.description;
                document.getElementById('project-tools').value = project.tools.join(', ');
                document.getElementById('project-link').value = project.link || '';
            } else {
                document.getElementById('project-form-modal-title').textContent = 'Add New Project';
            }
            formModal.classList.add('visible');
        };
        manageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderProjectList();
            listModal.classList.add('visible');
        });
        document.getElementById('cancel-project-list-btn').addEventListener('click', () => listModal.classList.remove('visible'));
        document.getElementById('add-new-project-btn').addEventListener('click', () => openProjectForm());
        document.getElementById('cancel-project-form-btn').addEventListener('click', () => formModal.classList.remove('visible'));
        document.getElementById('project-list-container').addEventListener('click', e => {
            const target = e.target;
            const item = target.closest('.project-list-item');
            if (!item) return;
            const index = item.dataset.index;
            if (target.classList.contains('menu-btn')) {
                target.nextElementSibling.classList.toggle('visible');
                e.stopPropagation();
            } else if (target.classList.contains('edit-project-btn')) {
                openProjectForm(index);
            } else if (target.classList.contains('delete-project-btn')) {
                if (confirm('Are you sure you want to delete this project?')) {
                    projectData.splice(index, 1);
                    saveData('projects', projectData);
                    renderProjects();
                    renderProjectList();
                    renderProjectsDropdown();
                }
            }
        });
        document.getElementById('project-form').addEventListener('submit', e => {
            e.preventDefault();
            const index = document.getElementById('edit-project-index').value;
            const project = {
                title: document.getElementById('project-title').value,
                description: document.getElementById('project-description').value,
                tools: document.getElementById('project-tools').value.split(',').map(s => s.trim()),
                link: document.getElementById('project-link').value,
            };
            if (index !== '') {
                projectData[index] = project;
            } else {
                projectData.push(project);
            }
            saveData('projects', projectData);
            renderProjects();
            renderProjectList();
            renderProjectsDropdown();
            formModal.classList.remove('visible');
        });
    }
    function setupCertificateModals() {
        const manageBtn = document.getElementById('manage-certificates-dropdown');
        const listModal = document.getElementById('certificate-list-modal');
        const formModal = document.getElementById('certificate-form-modal');

        const renderCertificateList = () => {
            const container = document.getElementById('certificate-list-container');
            container.innerHTML = `<ul id="certificate-list"></ul>`;
            const list = document.getElementById('certificate-list');
            certificateData.forEach((cert, index) => {
                const certItem = document.createElement('li');
                certItem.className = 'certificate-list-item';
                certItem.dataset.index = index;
                certItem.innerHTML = `
                    <span class="drag-handle">☰</span>
                    <span>${cert.name}</span>
                    <div class="card-controls">
                        <button class="menu-btn">...</button>
                        <ul class="popup-menu">
                            <li class="edit-cert-btn">Edit</li>
                            <li class="delete-cert-btn delete-option">Delete</li>
                        </ul>
                    </div>`;
                list.appendChild(certItem);
            });
            new Sortable(list, { handle: '.drag-handle', animation: 150, onEnd: (evt) => {
                const [movedItem] = certificateData.splice(evt.oldIndex, 1);
                certificateData.splice(evt.newIndex, 0, movedItem);
                saveData('certificates', certificateData);
                renderCertificates();
                renderCertificateList();
                renderCertificatesDropdown();
            }});
        };
        const openCertificateFormModal = (index = null) => {
            const form = document.getElementById('certificate-form');
            form.reset();
            document.getElementById('edit-cert-index').value = '';
            const currentPhoto = document.getElementById('edit-cert-current-photo');
            const photoInput = document.getElementById('cert-photo');
            currentPhoto.style.display = 'none';
            photoInput.required = true;
            if (index !== null) {
                document.getElementById('certificate-form-modal-title').textContent = 'Edit Certificate';
                const cert = certificateData[index];
                document.getElementById('edit-cert-index').value = index;
                document.getElementById('cert-name').value = cert.name;
                document.getElementById('cert-date').value = cert.date;
                document.getElementById('cert-link').value = cert.link || '';
                currentPhoto.src = cert.photo;
                currentPhoto.style.display = 'block';
                photoInput.required = false;
            } else {
                document.getElementById('certificate-form-modal-title').textContent = 'Add New Certificate';
            }
            formModal.classList.add('visible');
        };
        manageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderCertificateList();
            listModal.classList.add('visible');
        });
        document.getElementById('cancel-certificate-list-btn').addEventListener('click', () => listModal.classList.remove('visible'));
        document.getElementById('add-new-certificate-btn').addEventListener('click', () => openCertificateFormModal());
        document.getElementById('cancel-certificate-form-btn').addEventListener('click', () => formModal.classList.remove('visible'));
        document.getElementById('certificate-list-container').addEventListener('click', e => {
            const target = e.target;
            const certItem = target.closest('.certificate-list-item');
            if (!certItem) return;
            const index = certItem.dataset.index;
            if (target.classList.contains('menu-btn')) {
                target.nextElementSibling.classList.toggle('visible');
                e.stopPropagation();
            } else if (target.classList.contains('edit-cert-btn')) {
                openCertificateFormModal(index);
            } else if (target.classList.contains('delete-cert-btn')) {
                if (confirm('Are you sure you want to delete this certificate?')) {
                    certificateData.splice(index, 1);
                    saveData('certificates', certificateData);
                    renderCertificates();
                    renderCertificateList();
                    renderCertificatesDropdown();
                }
            }
        });
        document.getElementById('certificate-form').addEventListener('submit', e => {
            e.preventDefault();
            const index = document.getElementById('edit-cert-index').value;
            const photoFile = document.getElementById('cert-photo').files[0];
            const handleSave = (photoData) => {
                const updatedCert = {
                    id: index !== '' ? certificateData[index].id : Date.now(),
                    name: document.getElementById('cert-name').value,
                    date: document.getElementById('cert-date').value,
                    link: document.getElementById('cert-link').value,
                    photo: photoData,
                };
                if (index !== '') {
                    certificateData[index] = updatedCert;
                } else {
                    certificateData.push(updatedCert);
                }
                saveData('certificates', certificateData);
                renderCertificates();
                renderCertificateList();
                renderCertificatesDropdown();
                formModal.classList.remove('visible');
            };
            if (photoFile) {
                const reader = new FileReader();
                reader.onload = (e) => handleSave(e.target.result);
                reader.readAsDataURL(photoFile);
            } else if (index !== '') {
                handleSave(certificateData[index].photo);
            } else {
                alert('Please select an image for the new certificate.');
            }
        });
    }
    function setupJourneyModals() {
        const manageBtn = document.getElementById('manage-journey-dropdown');
        const listModal = document.getElementById('journey-list-modal');
        const formModal = document.getElementById('journey-form-modal');

        const renderJourneyList = () => {
            const container = document.getElementById('journey-list-container');
            container.innerHTML = `<ul id="journey-list"></ul>`;
            const list = document.getElementById('journey-list');
            experienceData.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'journey-list-item';
                listItem.dataset.index = index;
                listItem.innerHTML = `
                    <span class="drag-handle">☰</span>
                    <span>${item.role} at ${item.company}</span>
                    <div class="card-controls">
                        <button class="menu-btn">...</button>
                        <ul class="popup-menu">
                            <li class="edit-journey-btn">Edit</li>
                            <li class="delete-journey-btn delete-option">Delete</li>
                        </ul>
                    </div>`;
                list.appendChild(listItem);
            });
            new Sortable(list, {
                handle: '.drag-handle', animation: 150, onEnd: (evt) => {
                    const [movedItem] = experienceData.splice(evt.oldIndex, 1);
                    experienceData.splice(evt.newIndex, 0, movedItem);
                    saveData('journey', experienceData);
                    renderJourney();
                    renderJourneyList();
                }
            });
        };
        const openJourneyForm = (index = null) => {
            const form = document.getElementById('journey-form');
            form.reset();
            document.getElementById('edit-journey-index').value = '';
            if (index !== null) {
                const item = experienceData[index];
                document.getElementById('journey-form-modal-title').textContent = 'Edit Journey Item';
                document.getElementById('edit-journey-index').value = index;
                document.getElementById('journey-role').value = item.role;
                document.getElementById('journey-company').value = item.company;
                document.getElementById('journey-date').value = item.date;
            } else {
                document.getElementById('journey-form-modal-title').textContent = 'Add New Journey Item';
            }
            formModal.classList.add('visible');
        };
        manageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderJourneyList();
            listModal.classList.add('visible');
        });
        document.getElementById('cancel-journey-list-btn').addEventListener('click', () => listModal.classList.remove('visible'));
        document.getElementById('add-new-journey-btn').addEventListener('click', () => openJourneyForm());
        document.getElementById('cancel-journey-form-btn').addEventListener('click', () => formModal.classList.remove('visible'));
        document.getElementById('journey-list-container').addEventListener('click', e => {
            const target = e.target;
            const item = target.closest('.journey-list-item');
            if (!item) return;
            const index = item.dataset.index;
            if (target.classList.contains('menu-btn')) {
                target.nextElementSibling.classList.toggle('visible');
                e.stopPropagation();
            } else if (target.classList.contains('edit-journey-btn')) {
                openJourneyForm(index);
            } else if (target.classList.contains('delete-journey-btn')) {
                if (confirm('Are you sure you want to delete this journey item?')) {
                    experienceData.splice(index, 1);
                    saveData('journey', experienceData);
                    renderJourney();
                    renderJourneyList();
                }
            }
        });
        document.getElementById('journey-form').addEventListener('submit', e => {
            e.preventDefault();
            const index = document.getElementById('edit-journey-index').value;
            const item = {
                role: document.getElementById('journey-role').value,
                company: document.getElementById('journey-company').value,
                date: document.getElementById('journey-date').value
            };
            if (index !== '') {
                experienceData[index] = item;
            } else {
                experienceData.push(item);
            }
            saveData('journey', experienceData);
            renderJourney();
            renderJourneyList();
            formModal.classList.remove('visible');
        });
    }
    function setupResumeAndCoverLetterModal() {
        const manageBtn = document.getElementById('manage-resume-cover-letter-dropdown');
        const modal = document.getElementById('resume-cover-letter-modal');
        const form = document.getElementById('resume-cover-letter-form');
        const cancelBtn = document.getElementById('cancel-resume-cover-letter-btn');
        const resumeImagePreview = document.getElementById('resume-image-preview');
        const coverLetterImagePreview = document.getElementById('cover-letter-image-preview');

        manageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            resumeImagePreview.src = resumeData.image || '';
            resumeImagePreview.style.display = resumeData.image ? 'block' : 'none';
            document.getElementById('current-resume-file').textContent = resumeData.fileName ? `Current: ${resumeData.fileName}` : 'No PDF uploaded.';
            
            coverLetterImagePreview.src = coverLetterData.image || '';
            coverLetterImagePreview.style.display = coverLetterData.image ? 'block' : 'none';
            document.getElementById('current-cover-letter-file').textContent = coverLetterData.fileName ? `Current: ${coverLetterData.fileName}` : 'No PDF uploaded.';
            
            modal.classList.add('visible');
        });

        cancelBtn.addEventListener('click', () => modal.classList.remove('visible'));

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const filesToProcess = { count: 0 };
            
            const onFileProcessed = () => {
                filesToProcess.count--;
                if (filesToProcess.count === 0) {
                    saveData('resume', resumeData);
                    saveData('coverLetter', coverLetterData);
                    renderResumeAndCoverLetter();
                    renderResumeDropdown();
                    modal.classList.remove('visible');
                }
            };
            
            const processFile = (file, dataObject, type) => {
                if (file) {
                    filesToProcess.count++;
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        dataObject[type] = event.target.result;
                        if (type === 'file') dataObject.fileName = file.name;
                        onFileProcessed();
                    };
                    reader.readAsDataURL(file);
                }
            };

            processFile(document.getElementById('resume-image').files[0], resumeData, 'image');
            processFile(document.getElementById('resume-file').files[0], resumeData, 'file');
            processFile(document.getElementById('cover-letter-image').files[0], coverLetterData, 'image');
            processFile(document.getElementById('cover-letter-file').files[0], coverLetterData, 'file');

            if (filesToProcess.count === 0) {
                 saveData('resume', resumeData);
                 saveData('coverLetter', coverLetterData);
                 renderResumeAndCoverLetter();
                 renderResumeDropdown();
                 modal.classList.remove('visible');
            }
        });
    }

    function setupTitleModal() {
        const manageBtn = document.getElementById('manage-title-dropdown');
        const modal = document.getElementById('title-modal');
        const form = document.getElementById('title-form');
        const cancelBtn = document.getElementById('cancel-title-btn');

        manageBtn.addEventListener('click', e => {
            e.preventDefault();
            document.getElementById('manage-title-input').value = heroData.title;
            document.getElementById('manage-subtitle-input').value = heroData.subtitle;
            document.getElementById('manage-comment-input').value = heroData.comment;
            modal.classList.add('visible');
        });

        cancelBtn.addEventListener('click', () => modal.classList.remove('visible'));

        form.addEventListener('submit', e => {
            e.preventDefault();
            heroData.title = document.getElementById('manage-title-input').value;
            heroData.subtitle = document.getElementById('manage-subtitle-input').value;
            heroData.comment = document.getElementById('manage-comment-input').value;
            saveData('hero', heroData);
            renderHero();
            modal.classList.remove('visible');
        });
    }

    // --- Image Modal (UPDATED) ---
    function setupImageModal() {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('full-size-image');
        const closeBtn = document.querySelector('.close-image-modal');
        const zoomInBtn = document.getElementById('zoom-in-btn');
        const zoomOutBtn = document.getElementById('zoom-out-btn');
        let currentScale = 1;

        // Add a CSS transition for smooth scaling
        modalImg.style.transition = 'transform 0.2s ease-in-out';

        const resetImageState = () => {
            currentScale = 1;
            modalImg.style.transform = 'scale(1)';
            // These properties are for the initial state
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
            // Delay resetting the image state until after the closing animation
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
            // Increment the scale and apply the transform
            currentScale += 0.1; // Zooms in by 10% each click
            modalImg.style.transform = `scale(${currentScale})`;
        });

        zoomOutBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Decrement the scale, but not below the original size
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

    // --- Feedback and General Setup ---
    function setupFeedbackForm() {
        const form = document.getElementById('feedback-form');
        const thankYouModal = document.getElementById('thank-you-modal');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newFeedback = {
                name: e.target.name.value,
                project: e.target.project.value,
                text: e.target.feedback.value,
                date: new Date().toISOString()
            };
            feedbackData.push(newFeedback);
            saveData('feedback', feedbackData);
            renderFeedback();
            thankYouModal.classList.add('visible');
            form.reset();
            document.getElementById('feedback-form-container').classList.remove('visible');
        });
        document.getElementById('close-thank-you-modal-btn').addEventListener('click', () => {
            thankYouModal.classList.remove('visible');
        });
        document.getElementById('feedback-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-feedback-btn')) {
                const index = event.target.dataset.index;
                if (confirm('Are you sure you want to delete this feedback?')) {
                    feedbackData.splice(index, 1);
                    saveData('feedback', feedbackData);
                    renderFeedback();
                }
            }
        });
    }
    
    function setupProfilePic() {
        const profilePicContent = document.getElementById('profile-pic-content');
        const fileInput = document.getElementById('file-input');
        const managePicBtn = document.getElementById('manage-profile-pic-dropdown');
        const cropModal = document.getElementById('crop-image-modal');
        const imageToCrop = document.getElementById('image-to-crop');
        const saveCropBtn = document.getElementById('save-crop-btn');
        const cancelCropBtn = document.getElementById('cancel-crop-btn');
        let cropper;

        const savedPic = localStorage.getItem('profilePic');
        if (savedPic) {
            profilePicContent.style.backgroundImage = `url(${savedPic})`;
        } else {
            profilePicContent.style.backgroundImage = `url('https://via.placeholder.com/280')`;
        }
        
        const openFileSelector = (e) => {
            e.preventDefault();
            fileInput.click();
        };

        managePicBtn.addEventListener('click', openFileSelector);

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageToCrop.src = e.target.result;
                    cropModal.classList.add('visible');
                    cropper = new Cropper(imageToCrop, {
                        aspectRatio: 1,
                        viewMode: 1,
                        background: false,
                        autoCropArea: 0.8,
                        responsive: true,
                        cropBoxResizable: true,
                        cropBoxMovable: true,
                    });
                };
                reader.readAsDataURL(file);
            }
        });

        saveCropBtn.addEventListener('click', () => {
            const canvas = cropper.getCroppedCanvas({
                width: 256,
                height: 256,
            });
            const croppedImageUrl = canvas.toDataURL('image/png');
            profilePicContent.style.backgroundImage = `url(${croppedImageUrl})`;
            localStorage.setItem('profilePic', croppedImageUrl);
            cropper.destroy();
            cropModal.classList.remove('visible');
        });

        cancelCropBtn.addEventListener('click', () => {
            cropper.destroy();
            cropModal.classList.remove('visible');
        });
    }

    function closeAllPopups() {
        document.querySelectorAll('.popup-menu.visible').forEach(menu => {
            menu.classList.remove('visible');
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
        renderFeedback();
        renderResumeAndCoverLetter();

        renderSkillsDropdown();
        renderProjectsDropdown();
        renderCertificatesDropdown();
        renderResumeDropdown();
        renderContactDropdown();

        if (true) {
            document.body.classList.add('is-admin');
            setupProfilePic();
            setupAboutModal();
            setupSkillModals();
            setupProjectModals();
            setupCertificateModals();
            setupJourneyModals();
            setupResumeAndCoverLetterModal();
            setupTitleModal();
            setupFeedbackForm();
        }

        setupNavHighlighting();
        setupCursorGlow();
        setupImageModal();

        document.getElementById('certificates-container').addEventListener('click', (e) => {
            const showMoreBtn = e.target.closest('#show-more-certs-btn');
            if (showMoreBtn) {
                showMoreBtn.remove();
                document.querySelectorAll('.certificate-hidden').forEach(cert => {
                    cert.classList.add('visible');
                });
            }
        });

        document.getElementById('toggle-feedback-form-btn').addEventListener('click', () => {
             document.getElementById('feedback-form-container').classList.toggle('visible');
        });

        VANTA.NET({ el: "#hero", mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, color: 0x64ffda, backgroundColor: 0x0a192f, points: 12.00, maxDistance: 25.00, spacing: 18.00 });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(fader => observer.observe(fader));

        // --- NEW: Intersection Observer for Skill Card Animation ---
        const skillCards = document.querySelectorAll('#skills-grid .skill-card');
        const skillCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // When a card enters the viewport
                if (entry.isIntersecting) {
                    const card = entry.target;
                    // Create a delay based on the card's index for a nice stagger effect
                    const delay = card.getAttribute('data-index') * 150; // 150ms delay between cards

                    setTimeout(() => {
                        // Add the 'animate' class to trigger the CSS transition
                        card.classList.add('animate');
                    }, delay);

                    // Stop observing the card so the animation only happens once
                    observer.unobserve(card);
                }
            });
        }, { 
            threshold: 0.1, // Trigger when 10% of the card is visible
            rootMargin: "0px 0px -50px 0px" // Trigger animation slightly before it's fully in view
        });

        // Tell the observer to watch each of the skill cards
        skillCards.forEach(card => {
            skillCardObserver.observe(card);
        });

        window.addEventListener('scroll', () => {
            const stickyHeader = document.getElementById('sticky-header');
            const heroSection = document.getElementById('hero');
            if (window.scrollY > heroSection.offsetHeight - 70) stickyHeader.classList.add('visible');
            else stickyHeader.classList.remove('visible');
        });

        window.addEventListener('click', (e) => {
            if (!e.target.closest('.card-controls')) {
                 closeAllPopups();
            }
        });
    }

    init();
});
