document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const icon = document.querySelector('#toggle-btn i');
    const content = document.querySelector('.content');
    
    // Toggle the visibility of the sidebar
    sidebar.classList.toggle('visible');
    content.classList.toggle('has-sidebar');  // Add or remove the margin from content
    
    // Change the icon based on whether the sidebar is visible
    if (sidebar.classList.contains('visible')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-minus');
        document.body.classList.add('sidebar-visible');  // Hide scrollbar
    } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-bars');
        document.body.classList.remove('sidebar-visible');  // Show scrollbar again
    }
});

function scrollToSection() {
    const aboutSection = document.getElementById('about');

    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const imageContainer = document.querySelector(".image-container");
const images = imageContainer.querySelectorAll("img");
let currentIndex = 0; // Start with the first image

// Function to update the carousel based on currentIndex
function updateCarousel() {
    const offset = -currentIndex * 100; // Offset for sliding images
    imageContainer.style.transform = `translateX(${offset}%)`; // Move the image container
}

// Event listener for the left arrow (previous image)
leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Loop back to last image
    }
    updateCarousel();
});

// Event listener for the right arrow (next image)
rightArrow.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to first image
    }
    updateCarousel();
});

// Initialize carousel on page load
updateCarousel();

// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);


