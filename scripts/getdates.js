// Get the current year and update footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and update footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
