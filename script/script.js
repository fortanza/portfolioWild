////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Scrolling navbar

document
  .querySelector('.navbar__links')
  .addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('smooth-page')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });