displayFallbackSchemes();
function displayFallbackSchemes() {
    const staticSchemes = [
        {
            name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
            description: "Income support scheme for small and marginal farmers across India.",
            eligibility: "All small and marginal farmers with cultivable land.",
            benefits: "Rs. 6,000 per year in three equal installments.",
            applicationUrl: "https://pmkisan.gov.in/"
        },
        {
            name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            description: "Crop insurance scheme for farmers against natural calamities.",
            eligibility: "All farmers growing notified crops in notified areas.",
            benefits: "Insurance coverage and financial support in case of crop failure.",
            applicationUrl: "https://pmfby.gov.in/"
        },
        {
            name: "Kisan Credit Card (KCC)",
            description: "Credit facility for farmers for cultivation and other needs.",
            eligibility: "All farmers, sharecroppers, and oral lessees.",
            benefits: "Short-term loans for crops, working capital for agriculture and allied activities.",
            applicationUrl: "https://www.nabard.org/"
        }
    ];

    const schemeList = document.querySelector('.scheme-list');

    if (schemeList) {
        schemeList.innerHTML = '';

        staticSchemes.forEach(scheme => {
            const schemeCard = document.createElement("div");
            schemeCard.classList.add("scheme");
            schemeCard.innerHTML = `
                <h2>${scheme.name}</h2>
                <p><strong>Description:</strong> ${scheme.description}</p>
                <p><strong>Eligibility:</strong> ${scheme.eligibility}</p>
                <p><strong>Benefits:</strong> ${scheme.benefits}</p>
                <p><a href="${scheme.applicationUrl}" target="_blank" class="apply-button">Apply Now</a></p>
            `;
            schemeList.appendChild(schemeCard);
        });
    }
}
