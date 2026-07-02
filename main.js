/* Prespectr — interactions
   - staggered scroll reveals via IntersectionObserver
   - hero reveals fire on load
   - nav gains a backdrop once scrolled
   - current year in footer                                    */

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav backdrop on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Hero reveals fire immediately on load
  document.querySelectorAll('.hero .reveal').forEach((el) => {
    requestAnimationFrame(() => el.classList.add('in'));
  });

  // Scroll-triggered reveals for the rest
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    if (!el.closest('.hero')) observer.observe(el);
  });
});
