const navbar = document.querySelector('.navbar');
const button = document.querySelector('.burguer');

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
