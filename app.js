let images = [
    'image/product2.webp',
    'image/product3.webp',
    'image/product1.webp',
     

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








let uniqueKidsSlideIndex2 = 0;
function showUniqueSlides2(slidesId, index) {
  const slides = document.querySelector(`#${slidesId}`);
  const totalSlides = slides.children.length;

  // Reset index if out of bounds
  if (index < 0) uniqueKidsSlideIndex2 = totalSlides - 1;
  else if (index >= totalSlides) uniqueKidsSlideIndex2 = 0;

  // Calculate and apply transform
  slides.style.transform = `translateX(-${uniqueKidsSlideIndex2 * 33.33}%)`; // Adjust based on visible items
}
function prevUniqueSlide2(section) {
  uniqueKidsSlideIndex2--;
  showUniqueSlides2('unique-kids-slides2', uniqueKidsSlideIndex2);
  
}
function nextUniqueSlide2(section) {
  uniqueKidsSlideIndex2++;
  showUniqueSlides2('unique-kids-slides2', uniqueKidsSlideIndex2);
  
}




// loginpage
// Show/Hide Password
function togglePassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
  // Form submission handler
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert(`Login successful!\nEmail/Phone: ${email}\nPassword: ${password}`);
    } else {
      alert('Please fill out all fields.');
    }
  });




//   signup
// Handle Form Submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    const phoneNumber = document.getElementById('phone-number').value;
    const termsAccepted = document.getElementById('agree-terms').checked;
  
    if (phoneNumber && termsAccepted) {
      alert(`Code sent to: ${phoneNumber}`);
    } else if (!termsAccepted) {
      alert('You must agree to the terms and conditions.');
    } else {
      alert('Please fill out the phone number.');
    }
  });
  


//   foooter
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  });
  
  
