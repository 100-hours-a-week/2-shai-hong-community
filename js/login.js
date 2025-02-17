const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

function validateForm() {
  const emailPattern = /^(?=.*@).{6,}$/;
  const isEmailValid = emailPattern.test(emailInput.value);
  const isPasswordValid = passwordInput.value.length >= 8;

  if (isEmailValid && isPasswordValid) {
    loginButton.classList.add('active');
    loginButton.removeAttribute('disabled');
  } else {
    loginButton.classList.remove('active');
    loginButton.setAttribute('disabled', 'true');
  }
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  window.location.replace('../postlist.html');
});
