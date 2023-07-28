// Get the navbar element
const navbar = document.querySelector('.dynamic-nav')

// Get the height of the hero section
const heroSectionHeight = document.querySelector('.hero').clientHeight;

// Function to toggle the navbar visibility based on scroll position
function toggleNavbar() {
  if (window.pageYOffset >= heroSectionHeight) {
    navbar.style.top = '0'; // Show the navbar when scrolled past the hero section
  } else {
    navbar.style.top = '-80px'; // Hide the navbar when at the top of the page
  }
}

// Attach the toggleNavbar function to the scroll event
window.addEventListener('scroll', toggleNavbar);
