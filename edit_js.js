// Function to handle the "Enter" button click
document.getElementById("load-event-button").addEventListener("click", function () {
    const eventId = document.getElementById("event-id").value;
    // Retrieve the event with the given ID from local storage
    let events = JSON.parse(localStorage.getItem("events")) || [];
    const eventToEdit = events.find(event => event.id == eventId);

    // Display the event details for editing
    if (eventToEdit) {
        displayEventDetails(eventToEdit);
        document.getElementById("save-edited-event-button").disabled = false; // Enable the save button
    } else {
        alert("Event not found with the provided ID.");
    }
});

// Function to handle form submission
document.getElementById("save-edited-event-button").addEventListener("click", function (e) {
    e.preventDefault();

    // Get the edited event data
    const editedEvent = {
        id: document.getElementById("event-id").value,
        date: document.getElementById("event-date").value,
        name: document.getElementById("event-name").value,
        organizer: document.getElementById("event-organizer").value,
        guest: document.getElementById("event-guest").value,
        audience: document.getElementById("target-audience").value,
        place: document.querySelector('input[name="event-place"]:checked').value,
    };

    // Update the edited event details on the right side
    document.getElementById("edited-event-id").textContent = editedEvent.id;
    document.getElementById("edited-event-date").textContent = editedEvent.date;
    document.getElementById("edited-event-name").textContent = editedEvent.name;
    document.getElementById("edited-event-organizer").textContent = editedEvent.organizer;
    document.getElementById("edited-event-guest").textContent = editedEvent.guest;
    document.getElementById("edited-target-audience").textContent = editedEvent.audience;
    document.getElementById("edited-event-place").textContent = editedEvent.place;

    // Retrieve existing events from local storage
    let events = JSON.parse(localStorage.getItem("events")) || [];

    // Find the index of the event to edit
    const indexToEdit = events.findIndex(event => event.id == editedEvent.id);

    if (indexToEdit !== -1) {
        // Update the event in the array with the edited data
        events[indexToEdit] = editedEvent;

        // Store the updated events array back in local storage
        localStorage.setItem("events", JSON.stringify(events));
    } else {
        alert("Event not found with the provided ID.");
    }
});

// Function to display event details in the form for editing
function displayEventDetails(event) {
    document.getElementById("event-date").value = event.date;
    document.getElementById("event-name").value = event.name;
    document.getElementById("event-organizer").value = event.organizer;
    document.getElementById("event-guest").value = event.guest;
    document.getElementById("target-audience").value = event.audience;
    document.querySelector(`input[name="event-place"][value="${event.place}"]`).checked = true;
}
