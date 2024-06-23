document.addEventListener("DOMContentLoaded", function() {
    // Function to display current year and last modified date
    function displayFooterInfo() {
        // Current year
        const currentYearElement = document.getElementById('currentyear');
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;

        // Last modified date
        const lastModifiedElement = document.getElementById('lastModified');
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate;
    }

    // Function to calculate windchill factor
    function calculateWindChill(temperature, windSpeed, units) {
        if (
            (units === 'metric' && temperature <= 10 && windSpeed > 4.8) ||
            (units === 'imperial' && temperature <= 50 && windSpeed > 3)
        ) {
            // Calculate windchill factor
            if (units === 'metric') {
                // Formula for metric units (°C)
                return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
            } else if (units === 'imperial') {
                // Formula for imperial units (°F)
                return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
            }
        } else {
            return 'N/A'; // Not applicable if conditions are not met
        }
    }

    const temperature = 18; // temperature in °C
    const windSpeed = 10; // wind speed in km/h
    const units = 'metric'; // units (metric or imperial)

    // Display windchill factor in the Weather section
    const weatherSection = document.getElementById('Weather');
    const windchill = calculateWindChill(temperature, windSpeed, units);
    const windchillElement = document.createElement('p');
    windchillElement.innerHTML = `<strong>Windchill Factor:</strong> ${windchill} ${units === 'metric' ? '°C' : '°F'}`;
    weatherSection.appendChild(windchillElement);

    // Call function to display footer information
    displayFooterInfo();
});
