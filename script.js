// Cache DOM
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

// Listen for form submit
form.addEventListener('submit', validateEmail);

// Validate Email
function validateEmail(e) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value.trim())) {
    emailInput.classList.add('error');
    errorMessage.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  }

  e.preventDefault();
}
