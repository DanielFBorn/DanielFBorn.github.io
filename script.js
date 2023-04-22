// select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// select the popup
const popup = document.querySelector('.popup');

// select the close button
const closeBtn = popup.querySelector('.close');

// select the image inside the popup
const popupImg = popup.querySelector('img');

// select the navigation buttons
const prevBtn = popup.querySelector('.prev-btn');
const nextBtn = popup.querySelector('.next-btn');

// create an array for the images in the gallery
const images = [];
let currentIndex = 0;

// loop through each gallery item to get the image source and add it to the images array
galleryItems.forEach(function(item) {
  images.push(item.querySelector('img').getAttribute('src'));
});

// when a gallery item is clicked, open the popup and show the selected image
galleryItems.forEach(function(item, index) {
  item.addEventListener('click', function() {
    currentIndex = index;
    popupImg.src = images[currentIndex];
    popup.style.display = 'block';
  });
});

// when the close button is clicked, close the popup
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// when the previous button is clicked, show the previous image in the popup
prevBtn.addEventListener('click', function() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  popupImg.src = images[currentIndex];
});

// when the next button is clicked, show the next image in the popup
nextBtn.addEventListener('click', function() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  popupImg.src = images[currentIndex];
});


