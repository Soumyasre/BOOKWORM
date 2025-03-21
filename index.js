// scripts.js

// Fetch products from the server and display them
fetch('/products')
    .then(response => response.json())
    .then(products => {
        const productsContainer = document.getElementById('products');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
                <button>Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    });