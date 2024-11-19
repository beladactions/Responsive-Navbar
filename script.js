// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event to toggle menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
