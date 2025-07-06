const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Optional basic form handling (demo only)
document.querySelector(".contact-form").addEventListener("submit", function () {
  alert("Thank you! Your message has been submitted.");
});

