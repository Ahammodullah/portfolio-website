let images = [
    'image/product1.webp',
    'image/product2.webp',
    'image/product3.webp',
    // Add more images as needed
];
let currentIndex = 0;

function updateImage() {
    const sliderImage = document.getElementById('slider-img');
    sliderImage.src = images[currentIndex];
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

window.onload = updateImage;
