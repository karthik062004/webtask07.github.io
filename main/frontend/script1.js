function suggestObjective() {
    const suggestions = [
        "To leverage my skills in a challenging environment.",
        "To contribute effectively to the team's success.",
        "To enhance my knowledge and grow within the company.",
        "To utilize my expertise in a meaningful way."
    ];
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    document.getElementById('suggestion').innerText = suggestions[randomIndex];
}

function suggestSkills() {
    const skills = [
        "Ability to gather and analyze information",
        "Attention to Detail",
        "Leadership skills",
        "Time Management",
        "Project Management", 
        "Data Analysis", 
        "Problem Solving", 
        "Teamwork", 
        "Communication"
    ];
    const randomIndex = Math.floor(Math.random() * skills.length);
    document.getElementById('skill-suggestion').innerText = skills[randomIndex];
}

function suggestTechnicalSkills() {
    const technicalSkills = [
        "JavaScript", 
        "Python", 
        "HTML & CSS", 
        "React", 
        "Node.js", 
        "Django", 
        "SQL", 
        "Git & GitHub", 
        "RESTful APIs", 
        "Machine Learning", 
        "Cloud Computing"
    ];
    const randomIndex = Math.floor(Math.random() * technicalSkills.length);
    document.getElementById('technical-skill-suggestion').innerText = technicalSkills[randomIndex];
}

