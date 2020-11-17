const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formEl = document.querySelector('#form');

let errorChecked = false;
// Check required fieds
function checkRequired(inputEL) {
  inputEL.forEach((el) => {
    if (el.value === '') {
      showError(el, 'This field cannot be empty');
    } else {
      showSuccess(el);
    }
  });
}

// Error function
function showError(el, message) {
  const smallEl = document.createElement('small');
  smallEl.textContent = message;
  el.classList.add('error');
  const error = el.nextElementSibling;
  if (error) error.remove();
  el.insertAdjacentElement('afterend', smallEl);
  errorChecked = true;
}

// Success function
function showSuccess(el) {
  const error = el.nextElementSibling;
  if (error) error.remove();
  el.classList.add('success');
  errorChecked = false;
}

// Check input value length
function checkLength(input, min, max) {
  input.forEach((input) => {
    if (input.value.length < min && !errorChecked) {
      showError(
        input,
        `The ${getFieldName(input)} must be atleast ${min} characters`
      );
    } else if (input.value.length > max && !errorChecked) {
      showError(
        input,
        `The ${getFieldName(input)} must be atmost ${max} characters`
      );
    }
  });
}

// Get field name
function getFieldName(field) {
  const fieldName = field.previousElementSibling.textContent;
  return fieldName;
}

// Chect mail
function validateEmail(input) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(String(input.value.toLowerCase()));
}

// Check input length
function formSubmit(e) {
  e.preventDefault();
  checkRequired([firstName, lastName, email, message]);
  checkLength([firstName, lastName], 3, 15);
}

// Event listeners
formEl.addEventListener('submit', formSubmit);
