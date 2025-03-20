document.addEventListener("DOMContentLoaded", function () {
    const fpoApplyForm = document.getElementById("fpoApplyForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const API_URL = 'http://localhost:5000/api';

    fpoApplyForm?.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;
        const crop = document.getElementById("crop").value;

        try {
            // Show loading state
            confirmationMessage.textContent = "Submitting application...";

            // Send data to backend
            const response = await fetch(`${API_URL}/fpo/apply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    phone,
                    location,
                    crop
                })
            });

            const data = await response.json();

            if (response.ok) {
                confirmationMessage.textContent = `Thank you, ${name}! Your application for FPO membership has been submitted successfully.`;
                confirmationMessage.classList.add("success");
                fpoApplyForm.reset();
            } else {
                confirmationMessage.textContent = data.message || 'Failed to submit application. Please try again.';
                confirmationMessage.classList.add("error");
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            confirmationMessage.textContent = 'Network error. Please try again later.';
            confirmationMessage.classList.add("error");
        }
    });
});
