// Typewriter effect for the hero terminal
const roles = [
  "computer_science_graduate",
  "data_analytics_enthusiast",
  "cloud_&_devops_learner",
  "machine_learning_hobbyist"
];

const el = document.getElementById('typewriter');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (el) {
  if (reduceMotion) {
    el.textContent = roles[0];
  } else {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }
}

// Nav link active-section highlight (progressive enhancement)
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav__links a');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--accent-teal)' : '';
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(section => observer.observe(section));
}
