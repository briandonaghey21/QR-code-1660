let attendanceData = []; 
let classList = new Set(); 

async function getAttendance() {
    try {
        const response = await fetch('https://cs1660-database.uc.r.appspot.com/data/cs1660-attendance/all');
        if (!response.ok) 
            throw new Error('Failed to fetch data');

        attendanceData = await response.json();
        populateTable(attendanceData);
        populateClassFilter(attendanceData);
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateTable(data) {
    const tableBody = document.getElementById('attendance-list').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.className}</td>  
            <td>${item.timestamp.split('T')[0]}</td>
        `;
    });
}

function populateClassFilter(data) {
    const classFilter = document.getElementById('class-filter');
    data.forEach(item => {
        classList.add(item.className); 
    });
    classList.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        classFilter.appendChild(option);
    });
}

function filterAttendance() {
    const filterDate = document.getElementById('date-filter').value;
    const filterClass = document.getElementById('class-filter').value;
    let filteredData = attendanceData;
    if (filterDate) {
        filteredData = filteredData.filter(item => {
            const dateOnly = item.timestamp.split('T')[0];
            return dateOnly === filterDate;
        });
    }

    if (filterClass) {
        filteredData = filteredData.filter(item => item.className === filterClass);
    }
    populateTable(filteredData); 
}

getAttendance()