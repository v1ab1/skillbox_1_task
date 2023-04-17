const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    btn.style.right = '20px';
  } else {
    btn.style.right = '-80px';
  }
}, { passive: true });

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
