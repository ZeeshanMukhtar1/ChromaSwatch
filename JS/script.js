// Selecting the container and refresh button elements from the DOM
const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

// Setting the maximum number of color palette boxes to generate
const maxPaletteBoxes = 32;

// Function to generate a new color palette
const generatePalette = () => {
  // Clearing the container
  container.innerHTML = '';

  // Looping through the maximum number of palette boxes to generate
  for (let i = 0; i < maxPaletteBoxes; i++) {
    // Generating a random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, '0')}`;

    // Creating a new 'li' element and inserting it into the container
    const color = document.createElement('li');
    color.classList.add('color');
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;

    // Adding a click event to the current 'li' element to copy the color code
    color.addEventListener('click', () => copyColor(color, randomHex));

    // Adding the new color 'li' element to the container
    container.appendChild(color);
  }
};

// Function to copy the selected color code
const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector('.hex-value');

  // Copying the hex value to the clipboard
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      // Updating the color element text to "Copied"
      colorElement.innerText = 'Copied Code';
      // Changing the text back to the original hex value after 1 second
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert('Failed to copy the color code!')); // Showing an alert if color can't be copied
};

// Generating the initial color palette on page load
generatePalette();

// Adding an event listener to the refresh button to generate a new color palette when clicked
refreshBtn.addEventListener('click', generatePalette);
