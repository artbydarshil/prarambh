// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = contactForm?.querySelector('.submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Change button state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        // Simulate API call delay
        setTimeout(() => {
            // Hide all form groups
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => group.classList.add('hidden'));
            
            // Hide submit section
            const submitSection = contactForm.querySelector('.form-submit');
            if(submitSection) submitSection.classList.add('hidden');
            
            // Show success message
            formSuccess.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
        }, 1200);
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
