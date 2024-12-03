// Get references to form elements
const form = document.getElementById('attendanceForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Form submission handler
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value.trim();

    // Validate input
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Display confirmation message
    confirmationMessage.textContent = `Attendance recorded for ${name} on ${currentDate}.`;

    // Clear the form
    form.reset();
});
