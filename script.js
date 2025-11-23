const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let r of reveals) {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      r.classList.add('active');
    }
  }
});
