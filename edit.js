// Function to open the edit event modal
function openEditModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';

    // Retrieve event details and populate the form (you need to implement this logic)
    const titleInput = document.getElementById('title');
    const dateInput = document.getElementById('date');
    const descriptionInput = document.getElementById('description');

    // Replace the sample values with actual event details
    titleInput.value = 'Sample Event';
    dateInput.value = '2023-10-15';
    descriptionInput.value = 'Sample event description.';
}

// Function to close the edit event modal
function closeEditModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

// Event listener to open the edit event modal
const editButton = document.getElementById('open-edit-modal');
editButton.addEventListener('click', openEditModal);

// Event listener to close the edit event modal
const closeModalButton = document.getElementById('close-modal');
closeModalButton.addEventListener('click', closeEditModal);

// Event listener and function to handle form submission (you need to implement this logic)
const editForm = document.getElementById('edit-form');
editForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve updated event details from the form
    const updatedTitle = document.getElementById('title').value;
    const updatedDate = document.getElementById('date').value;
    const updatedDescription = document.getElementById('description').value;

    // Update the event data with the new values (you need to implement this logic)
    // You can use AJAX requests to update the data on the server if required

    // Close the modal
    closeEditModal();
});
