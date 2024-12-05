
async function displayAttendance() 
{
    const tableBody = document.getElementById('attendance-list').getElementsByTagName('tbody')[0];

    try 
    {
        const response = await fetch('https://cs1660-database.uc.r.appspot.com/data/cs1660-attendance/all');
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        
        // clears rows
        tableBody.innerHTML = '';

        // put into table
        data.forEach(item => 
        {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.className}</td>  
            `; // add
        });

    } 
    catch (error) 
    {
        console.error('Error fetching data:', error);
    }
}
// run function
displayAttendance();
