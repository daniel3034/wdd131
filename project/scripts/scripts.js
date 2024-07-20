// Get the current year and update footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and update footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading images
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('img[data-src]');
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px 50px 0px"
        };
    
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, options);
    
        images.forEach(image => {
            imageObserver.observe(image);
        });
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        localStorage.setItem('contactForm', JSON.stringify(Object.fromEntries(formData)));
        alert('Information submitted successfully!');
        contactForm.reset();
    });
});