const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formEl = document.querySelector('#form');

let errorChecked = false;
// Check required fieds
function checkRequired(fieldArray) {
  fieldArray.forEach((input) => {
    input.value == ''
      ? state(input, 'error', 'cannot be empty')
      : state(input, 'success');
  });
}

// Success/Error funtion
function state(input, type, message = 1) {
  if (type == 'success') {
    input.className = type;
  } else {
    const el = document.createElement('small');
    input.className = type;
    const fieldName = input.previousElementSibling.textContent;
    el.innerText = `${fieldName} ${message}`;
    input.insertAdjacentElement('afterend', el);
    //   Remove Error message after a given time
    // setTimeout(() => {
    //   const message = input.nextElementSibling;
    //   message.remove();
    // }, 3000);
    errorChecked = true;
  }
}

// Check input length
function formSubmit(e) {
  e.preventDefault();
  if (!errorChecked) checkRequired([firstName, lastName, email, message]);
}
