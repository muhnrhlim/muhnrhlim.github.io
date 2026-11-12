document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.navbar .nav-link').forEach(link => link.addEventListener('click', () => {
  const nav = document.getElementById('nav');
  if (nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
}));
