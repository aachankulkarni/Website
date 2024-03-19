// Function to generate a random 4-digit EventID
function generateEventID() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Function to handle form submission
document.getElementById("add-event-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from form inputs
    const eventID = generateEventID(); // Generate EventID
    const eventDate = document.getElementById("event-date").value;
    const eventName = document.getElementById("event-name").value;
    const eventOrganizer = document.getElementById("event-organizer").value;
    const eventGuest = document.getElementById("event-guest").value;
    const targetAudience = document.getElementById("target-audience").value;
    const eventPlace = document.querySelector('input[name="event-place"]:checked').value;

    // Display event details on the right side
    document.getElementById("event-id-display").textContent = eventID;
    document.getElementById("event-date-display").textContent = eventDate;
    document.getElementById("event-name-display").textContent = eventName;
    document.getElementById("event-organizer-display").textContent = eventOrganizer;
    document.getElementById("event-guest-display").textContent = eventGuest;
    document.getElementById("target-audience-display").textContent = targetAudience;
    document.getElementById("event-place-display").textContent = eventPlace;

    // Create an object for the event
    const event = {
        id: eventID,
        date: eventDate,
        name: eventName,
        organizer: eventOrganizer,
        guest: eventGuest,
        audience: targetAudience,
        place: eventPlace
    };

    // Retrieve existing events from local storage or initialize as an empty array
    let events = JSON.parse(localStorage.getItem("events")) || [];

    // Add the new event to the array
    events.push(event);

    // Store the updated events array back in local storage
    localStorage.setItem("events", JSON.stringify(events));

    // Reset the form
    this.reset();
});
