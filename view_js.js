// Function to display events from local storage
function displayEvents() {
    const eventTableBody = document.getElementById("event-table-body");
    eventTableBody.innerHTML = ""; // Clear existing content

    // Retrieve events from local storage
    let events = JSON.parse(localStorage.getItem("events")) || [];

    events.forEach((event) => {
        const eventRow = document.createElement("tr");
        eventRow.innerHTML = `
            <td>${event.id}</td>
            <td>${event.date}</td>
            <td>${event.name}</td>
            <td>${event.organizer}</td>
            <td>${event.guest}</td>
            <td>${event.audience}</td>
            <td>${event.place}</td>
        `;

        eventTableBody.appendChild(eventRow);
    });
}

// Initial display of events
displayEvents();
