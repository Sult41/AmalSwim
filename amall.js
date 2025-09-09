// Array of image file names in order
const images = [
  'Amal (1).jpg', 'Amal (2).JPG', 'Amal (3).jpg', 'Amal (4).jpg', 'Amal (5).jpg',
  'Amal (6).jpg', 'Amal (7).jpg', 'Amal.1.jpg', 'Amal (1).PNG'
];

let currentIndex = 0;
const galleryImage = document.getElementById('galleryImage');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

// Function to update the displayed image
function updateImage(index) {
  galleryImage.src = images[index];
  galleryImage.alt = `Swimming ${index + 1}`;
}

// Previous arrow click handler
prevArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage(currentIndex);
  }
});

// Next arrow click handler
nextArrow.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage(currentIndex);
  }
});
