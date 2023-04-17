document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.js-open-dropdown');
  const dropdown = document.querySelector(button.dataset.target);

  dropdown.style.display = 'none';

  button.addEventListener('click', () => {
    if (dropdown.style.display !== 'none') {
      return;
    }
    dropdown.style.display = 'block';
    setTimeout(() => {
      dropdown.style.transform = 'translateY(30px)';
      dropdown.style.opacity = 1;
    }, 50);
  });

  dropdown.addEventListener('click', event => {
    event._isClickWithinDropdown = true;
  });

  document.body.addEventListener('click', event => {
    if (event._isClickWithinDropdown) {
      return;
    }
    dropdown.style.transform = 'translateY(0px)';
    dropdown.style.opacity = 0;
    setTimeout(() => {
      if (dropdown.style.opacity == 0) {
        dropdown.style.display = 'none';
      }
    }, 501);
  });
});
