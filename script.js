// script.js
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

