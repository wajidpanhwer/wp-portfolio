const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.mobile-nav a'); // All menu links

menuBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
});

// ✅ Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
  });
});
  
// Typing Animation
const texts = ["FRONTEND DEVELOPER", "WEB DESIGNER", "PROGRAMER", "FREELANCER"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".typing").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
})();

// Skills Bar Animation
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-fill");

  bars.forEach(bar => {
    let targetWidth = bar.getAttribute("style").match(/--target-width:(\d+%)/)[1];
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.transition = "width 2s ease";
      bar.style.width = targetWidth;
    }, 200);
  });


 
});

 // JavaScript to automatically set the current year
    document.getElementById('current-year').textContent = new Date().getFullYear();




document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thank you, ' + name + '! Your message has been sent successfully.');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});