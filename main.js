// main.js

// Custom Cursor Implementation
const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
cursor.style.pointerEvents = 'none';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Parallax Effects
const parallaxElements = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  parallaxElements.forEach((el) => {
    const speed = el.dataset.speed;
    const offset = window.pageYOffset * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, options);

animatedElements.forEach((el) => {
  observer.observe(el);
});

// Interactive Micro-Interactions
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('hover');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('hover');
  });
});