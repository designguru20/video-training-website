function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('sticky-navbar');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('sticky-navbar');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
