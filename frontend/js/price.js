document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetch prices from API
        const prices = await fetchPrices();
        displayPrices(prices);
    } catch (error) {
        console.error('Failed to load prices:', error);
        displayFallbackPrices();
    }
});

function displayPrices(prices) {
    const productList = document.querySelector('.product-list');

    // Clear existing content
    if (productList) {
        productList.innerHTML = '';

        // Display each price
        prices.forEach(price => {
            const productCard = document.createElement("div");
            productCard.classList.add("product");
            productCard.innerHTML = `
                <h2>${price.crop}</h2>
                <p>Price per 10 kg: ₹${price.pricePer10Kg.toFixed(2)}</p>
                <p>Total Earnings for 100 kg (Quintal): ₹${price.pricePerQuintal.toFixed(2)}</p>
                <p>Market: ${price.market}</p>
                <p>Last Updated: ${new Date(price.lastUpdated).toLocaleDateString()}</p>
            `;
            productList.appendChild(productCard);
        });
    }
}

// Fallback function to display static data if API fails
function displayFallbackPrices() {
    const staticProducts = [
        { crop: "Rice", pricePer10Kg: 204.00, pricePerQuintal: 2040.00 },
        { crop: "Wheat", pricePer10Kg: 298.00, pricePerQuintal: 2994.00 },
        { crop: "Tomatoes", pricePer10Kg: 380.00, pricePerQuintal: 3800.00 },
        { crop: "Carrots", pricePer10Kg: 290.00, pricePerQuintal: 2900.00 },
        { crop: "Potatoes", pricePer10Kg: 400.00, pricePerQuintal: 4000.00 },
        { crop: "Spinach", pricePer10Kg: 300.00, pricePerQuintal: 3400.00 }
    ];

    const productList = document.querySelector('.product-list');

    if (productList) {
        productList.innerHTML = '';

        staticProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product");
            productCard.innerHTML = `
                <h2>${product.crop}</h2>
                <p>Price per 10 kg: ₹${product.pricePer10Kg.toFixed(2)}</p>
                <p>Total Earnings for 100 kg (Quintal): ₹${product.pricePerQuintal.toFixed(2)}</p>
            `;
            productList.appendChild(productCard);
        });
    }
}
