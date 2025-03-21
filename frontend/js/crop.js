document.addEventListener("DOMContentLoaded", function () {
    const cropForm = document.getElementById("cropForm");
    const cropList = document.getElementById("cropList");
    const API_URL = 'http://localhost:5000/api';

// function to laod crop plan
    async function loadCropPlans() {
        try {
            cropList.innerHTML = '<p>Loading crop plans...</p>';

            const response = await fetch(`${API_URL}/crops`);
            const result = await response.json();

            if (response.ok) {
                cropList.innerHTML = '';

                if (result.data.length === 0) {
                    cropList.innerHTML = '<p>No crop plans found. Add your first crop plan above.</p>';
                    return;
                }

                result.data.forEach(crop => {
                    const plantingDate = new Date(crop.plantingDate).toLocaleDateString();
                    const harvestDate = new Date(crop.harvestDate).toLocaleDateString();

                    const cropItem = document.createElement("div");
                    cropItem.classList.add("crop-item");
                    cropItem.setAttribute('data-id', crop._id);

                    cropItem.innerHTML = `
                        <strong>${crop.cropName}</strong><br>
                        Planted on: ${plantingDate}<br>
                        Expected harvest: ${harvestDate}<br>
                        Quantity: ${crop.quantity} kg
                        <button class="delete-btn" data-id="${crop._id}">Delete</button>
                    `;

                    cropList.appendChild(cropItem);
                });

                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', deleteCropPlan);
                });
            } else {
                cropList.innerHTML = `<p>Error: ${result.message || 'Failed to load crop plans'}</p>`;
            }
        } catch (error) {
            console.error('Error loading crop plans:', error);
            cropList.innerHTML = '<p>Network error. Please refresh the page to try again.</p>';
        }
    }

    // Function to delete a crop plan
    async function deleteCropPlan(e) {
        const id = e.target.getAttribute('data-id');

        try {
            const response = await fetch(`${API_URL}/crops/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                const cropItem = document.querySelector(`.crop-item[data-id="${id}"]`);
                if (cropItem) {
                    cropItem.remove();
                }

                if (cropList.children.length === 0) {
                    cropList.innerHTML = '<p>No crop plans found. Add your first crop plan above.</p>';
                }
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to delete crop plan');
            }
        } catch (error) {
            console.error('Error deleting crop plan:', error);
            alert('Network error. Please try again.');
        }
    }

    // Handle form submission
    cropForm?.addEventListener("submit", async function (e) {
        e.preventDefault();

        const cropName = document.getElementById("cropName").value;
        const plantingDate = document.getElementById("plantingDate").value;
        const harvestDate = document.getElementById("harvestDate").value;
        const quantity = document.getElementById("quantity").value;

        try {
            // Send data to backend
            const response = await fetch(`${API_URL}/crops`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cropName,
                    plantingDate,
                    harvestDate,
                    quantity
                })
            });

            const data = await response.json();

            if (response.ok) {
                cropForm.reset();

                loadCropPlans();
            } else {
                alert(data.message || 'Failed to add crop plan. Please try again.');
            }
        } catch (error) {
            console.error('Error adding crop plan:', error);
            alert('Network error. Please try again later.');
        }
    });

    loadCropPlans();
});
