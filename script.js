(() => {
  const body = document.body;
  const langButton = document.getElementById('langSwitch');
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  let language = 'en';
  const applyLanguage = (next) => {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-en][data-fr]').forEach((el) => {
      const value = el.getAttribute('data-' + next);
      if (value !== null) el.innerHTML = value;
    });
    langButton.textContent = next === 'en' ? 'FR' : 'EN';
    langButton.setAttribute('aria-label', next === 'en' ? 'Switch to French' : 'Switch to English');
    document.title = next === 'en' ? 'Karim El Askary — Engineering Portfolio' : 'Karim El Askary — Portfolio ingénieur';
  };
  langButton.addEventListener('click', () => applyLanguage(language === 'en' ? 'fr' : 'en'));
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.skill-card,.project-card,.timeline-item,.activity-card').forEach((el) => {
    el.classList.add('reveal');
    reveal.observe(el);
  });
})();