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

// Temples 

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois, United States",
      dedicated: "2002, June, 27",
      area: 54000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-lds-890728-wallpaper.jpg"
  },
  {
      templeName: "Barranquilla Colombia",
      location: "Barranquilla, Colombia",
      dedicated: "2018, Dec, 09",
      area: 25349,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg"
  }
  ];

  const templeContainer = document.getElementById('temple-container');

  function generateTempleCards(filteredTemples) {
    templeContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';

        templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeContainer.appendChild(templeCard);
    });
  }

// Event listeners for navigation links
document.querySelector('nav ul').addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
      e.preventDefault();
      const filter = e.target.textContent.toLowerCase();
      let filteredTemples = temples;

      if (filter === 'old') {
          filteredTemples = temples.filter(temple => {
              const year = parseInt(temple.dedicated.split(', ')[0]);
              return year < 1900;
          });
      } else if (filter === 'new') {
          filteredTemples = temples.filter(temple => {
              const year = parseInt(temple.dedicated.split(', ')[0]);
              return year >= 2000;
          });
      } else if (filter === 'large') {
          filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (filter === 'small') {
          filteredTemples = temples.filter(temple => temple.area < 10000);
      }

      generateTempleCards(filteredTemples);
  }
});

// Initial display of all temples
generateTempleCards(temples);