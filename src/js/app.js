const form = document.getElementById('attendanceForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// API function
async function addData(className, name) {
    const response = await fetch('https://cs1660-database.uc.r.appspot.com/data/cs1660-attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ className, name }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Document successfully added:', data);
        return true;
    } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return false;
    }
}

// Form submission handler
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value.trim();
    const myClass = document.getElementById('class').value.trim();

    if (!name) {
        alert('Please enter your name.');
        return;
    }
    if (!myClass) {
        alert('Please enter a class.');
        return;
    }

    try {
        const success = await addData(myClass, name);
        if (success) {
            confirmationMessage.textContent = `Attendance recorded for ${name}.`;
            form.reset();
        } else {
            confirmationMessage.textContent = `Failed to record attendance for ${name}. Please try again.`;
        }
    } catch (error) {
        console.error('An error occurred:', error);
        confirmationMessage.style.color = 'red';
        confirmationMessage.textContent = error;
    }
});
