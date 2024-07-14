// Get the current year and update footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and update footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Function to update and display the review counter
function updateReviewCounter() {
    let reviewsCompleted = localStorage.getItem('reviewsCompleted');
    if (!reviewsCompleted) {
        reviewsCompleted = 0;
    } else {
        reviewsCompleted = parseInt(reviewsCompleted);
    }

    reviewsCompleted++;
    localStorage.setItem('reviewsCompleted', reviewsCompleted);

    // Display the counter (optional)
    console.log(`Reviews completed: ${reviewsCompleted}`);
}

// Call the function to update the counter on page load
document.addEventListener('DOMContentLoaded', function () {
    updateReviewCounter();
});
