// Get the current year and update footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and update footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Product 1" },
        { name: "Product 2" },
        { name: "Product 3" },
        { name: "Product 4" },
        { name: "Product 5" },
    ];

    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    })});