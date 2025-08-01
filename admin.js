/**
 * admin.js
 * * This file demonstrates how client-side admin functionality could be structured.
 * In a real-world application, these functions would be called by an admin interface
 * (e.g., forms, buttons) that is only visible to authenticated users.
 * * Authentication could be handled by:
 * 1. A login page that sets a secure, HTTP-only cookie or a token in localStorage.
 * 2. On page load, `script.js` would check for this cookie/token.
 * 3. If valid, it would add a class like `is-admin` to the `<body>`.
 * 4. CSS rules (`.is-admin .edit-button { display: block; }`) would then reveal admin controls.
 * 5. Clicks on these controls would invoke the functions below.
 * 6. Changes would be sent to a backend server via API calls (e.g., fetch POST/PUT/DELETE) to persist them in a database.
 * * For this demo, these functions only modify the in-memory arrays. Re-rendering the page
 * would be required to see the changes.
 */

// These functions assume 'skillData', 'projectData', and 'experienceData' are globally accessible
// from script.js. In a more robust setup, you might pass the data arrays as arguments.

function addSkill(categoryTitle, newSkill) {
    const category = skillData.find(c => c.title === categoryTitle);
    if (category) {
        category.skills.push(newSkill);
        console.log(`Added skill '${newSkill}' to '${categoryTitle}'. Re-render to see changes.`);
        // In a real app: renderSkills(); and send update to server
    } else {
        console.error(`Category '${categoryTitle}' not found.`);
    }
}

function removeSkill(categoryTitle, skillToRemove) {
    const category = skillData.find(c => c.title === categoryTitle);
    if (category) {
        category.skills = category.skills.filter(s => s !== skillToRemove);
        console.log(`Removed skill '${skillToRemove}' from '${categoryTitle}'. Re-render to see changes.`);
        // In a real app: renderSkills(); and send update to server
    } else {
        console.error(`Category '${categoryTitle}' not found.`);
    }
}

function addProject(projectObject) {
    projectData.push(projectObject);
    console.log(`Added project: '${projectObject.title}'. Re-render to see changes.`);
    // In a real app: renderProjects(); and send update to server
}

function removeProject(projectTitle) {
    const initialLength = projectData.length;
    projectData = projectData.filter(p => p.title !== projectTitle);
    if (projectData.length < initialLength) {
        console.log(`Removed project: '${projectTitle}'. Re-render to see changes.`);
        // In a real app: renderProjects(); and send update to server
    } else {
        console.error(`Project '${projectTitle}' not found.`);
    }
}

// Example of how you might use these from the browser console:
// addProject({ title: 'New Test Project', description: 'This is a test.', tools: ['JS', 'HTML'] });
// To see the result, you'd then have to manually call renderProjects() in the console.
