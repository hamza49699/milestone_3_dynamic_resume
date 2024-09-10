// Add event listener for form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertions
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Resume output
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Skills:</strong> ${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        // HTML
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The resume output element is missing.");
        }
    } else {
        console.log("One or more form elements are missing.");
    }
});
