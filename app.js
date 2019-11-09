// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add('is-danger');
    name.parentElement.nextElementSibling.classList.remove('is-hidden');
  } else {
    name.classList.remove('is-danger');
    name.parentElement.nextElementSibling.classList.add('is-hidden');
  }
}

function validateZipcode() {
  const zipcode = document.getElementById('zipcode');
  const re = /^[0-9]{4}$/;

  if (!re.test(zipcode.value)) {
    zipcode.classList.add('is-danger');
    zipcode.parentElement.nextElementSibling.classList.remove('is-hidden');
  } else {
    zipcode.classList.remove('is-danger');
    zipcode.parentElement.nextElementSibling.classList.add('is-hidden');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-danger');
    email.parentElement.nextElementSibling.classList.remove('is-hidden');
  } else {
    email.classList.remove('is-danger');
    email.parentElement.nextElementSibling.classList.add('is-hidden');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-danger');
    phone.parentElement.nextElementSibling.classList.remove('is-hidden');
  } else {
    phone.classList.remove('is-danger');
    phone.parentElement.nextElementSibling.classList.add('is-hidden');
  }
}