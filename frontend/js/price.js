document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { crop: "Rice", pricePer10Kg: "₹204.00", earningsPer100Kg: "₹2,040.00" },
        { crop: "Wheat", pricePer10Kg: "₹298.00", earningsPer100Kg: "₹2,994.00" },
        { crop: "Tomatoes", pricePer10Kg: "₹380.00", earningsPer100Kg: "₹3,800.00" },
        { crop: "Carrots", pricePer10Kg: "₹290.00", earningsPer100Kg: "₹2,900.00" },
        { crop: "Potatoes", pricePer10Kg: "₹400.00", earningsPer100Kg: "₹4,000.00" },
        { crop: "Spinach", pricePer10Kg: "₹300.00", earningsPer100Kg: "₹3,400.00" }
    ];

    const productList = document.getElementById("priceList");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <h2>${product.crop}</h2>
            <p>Price per 10 kg: ${product.pricePer10Kg}</p>
            <p>Total Earnings for 100 kg (Quintal): ${product.earningsPer100Kg}</p>
        `;
        productList.appendChild(productCard);
    });

    const backButton = document.createElement("button");
    backButton.textContent = "Back to Home";
    backButton.classList.add("go-back-button");
    backButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    productList.appendChild(backButton);
});