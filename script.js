// Smooth scrolling and show only the active section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        targetElement.classList.add('active');

        // Scroll to the section
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
