const form = document.querySelector('form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const patronymicInput = document.querySelector('#patronymic');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const paragraph = document.createElement('p');
  paragraph.textContent = `${normalizeInput(lastNameInput.value)} ${normalizeInput(firstNameInput.value)} ${normalizeInput(patronymicInput.value)}`;
  resultsContainer.appendChild(paragraph);

  firstNameInput.value = '';
  lastNameInput.value = '';
  patronymicInput.value = '';
});

const normalizeInput = (input) => {
  const normalizedInput = input.replace(/[^а-яА-ЯёЁ\- ]/g, '');
  const trimmedInput = normalizedInput.trim();
  const normalizedSpaces = trimmedInput.replace(/[ ]{2,}/g, ' ').replace(/[\-]{2,}/g, '-');
  const capitalizedInput = normalizedSpaces.toLowerCase().replace(/(^|\s)[а-яё]/g, (match) => {
    return match.toUpperCase();
  });

  return capitalizedInput;
};

firstNameInput.addEventListener('blur', () => {
  firstNameInput.value = normalizeInput(firstNameInput.value);
});

lastNameInput.addEventListener('blur', () => {
  lastNameInput.value = normalizeInput(lastNameInput.value);
});

patronymicInput.addEventListener('blur', () => {
  patronymicInput.value = normalizeInput(patronymicInput.value);
});
