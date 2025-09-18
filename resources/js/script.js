
//Part 2: Adding interactive button to hide or show my headshot. As per the directions, I used getElementById
// to select the button and the photo container. I then wrote a listener function that carries out our toggling logic
// based on the current state of the headshot.
const button = document.getElementById('toggle-photo');
const photoContainer = document.getElementById('photo-container');

button.addEventListener('click', () => {
    if (photoContainer.style.display === 'none') {
        photoContainer.style.display = 'block';
        button.textContent = 'Hide My Face!';
    } else {
        photoContainer.style.display = 'none';
        button.textContent = 'Reveal My Face!';
    }
});


//Part 4: Dynamic Artist List. This code was taken directly from the pdf.
const addArtistButton = document.getElementById('add-artist');
addArtistButton.addEventListener('click', function () {

    const interest = prompt("Enter one of your artists:");
    if (interest && interest.trim() !== '') {
        // Create new paragraph element (same as Lab 3)
        const artistElement = document.createElement('p');
        artistElement.textContent = '- ' + interest;
        // Style it a bit
        artistElement.style.backgroundColor = '#f0f8ff';
        artistElement.style.padding = '5px';
        artistElement.style.margin = '5px 0';
        artistElement.style.borderRadius = '3px';
        // Append to container (same concept as Lab 3)
        const container = document.getElementById('artists-container');
        container.appendChild(artistElement);
    }
});