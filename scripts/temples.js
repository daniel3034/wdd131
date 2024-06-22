// Get the current year and update footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and update footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Find the header element
    const header = document.querySelector('header');

    // Create and append the hamburger button
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;'; // Unicode for hamburger icon
    header.appendChild(hamburger);

    // Function to toggle the navigation menu for mobile view
    function toggleMenu() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('active');
    }

    // Toggle hamburger button click event
    hamburger.addEventListener('click', function() {
        toggleMenu();
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = '&#10006;'; // Unicode for close icon
        } else {
            this.innerHTML = '&#9776;'; // Unicode for hamburger icon
        }
    });

    // Function to check screen width and toggle hamburger button visibility
    function checkScreenWidth() {
        if (window.innerWidth > 600) {
            hamburger.style.display = 'none';
            document.querySelector('nav ul').classList.remove('active');
        } else {
            hamburger.style.display = 'block';
        }
    }

    // Initial check on page load
    checkScreenWidth();

    // Listen for resize events to adjust hamburger button visibility
    window.addEventListener('resize', checkScreenWidth);
});

