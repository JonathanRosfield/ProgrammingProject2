const contactForm = document.getElementById('contactForm');
const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const contactList = document.getElementById('contactList');

// Function to handle form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    const contactName = contactNameInput.value.trim();
    const contactPhone = contactPhoneInput.value.trim();

    // Now let's check if both fields have values
    if (contactName && contactPhone) {
        // Create a new list item
        const newListItem = document.createElement('li');

        // Set the content of the list item
        newListItem.textContent = `${contactName}: ${contactPhone}`;

        newListItem.style.fontSize = '18px';         
        
        // Add the new list item to the contact list
        contactList.appendChild(newListItem);
        
        // Clear the input fields
        contactNameInput.value = '';
        contactPhoneInput.value = '';
    }


});