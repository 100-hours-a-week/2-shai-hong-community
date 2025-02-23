const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const emailError = document.getElementById('error1');
const passwordError = document.getElementById('error2');

let emailCheck = false;
let passwordCheck = false;

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; // 이메일 정규식
  emailCheck = emailPattern.test(emailInput.value);

  if (emailCheck) {
    emailError.classList.remove('error-on');
  } else {
    emailError.classList.add('error-on');
  }

  updateLoginButton();
}

function validatePassword() {
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,20}$/; // 비번정규식
  passwordCheck = passwordPattern.test(passwordInput.value);

  if (passwordCheck) {
    passwordError.classList.remove('error-on');
  } else {
    passwordError.classList.add('error-on');
  }

  updateLoginButton();
}

// 로그인버튼 활성화버튼
function updateLoginButton() {
  if (emailCheck && passwordCheck) {
    loginButton.classList.add('active');
    loginButton.removeAttribute('disabled');
  } else {
    loginButton.classList.remove('active');
    loginButton.setAttribute('disabled', 'true');
  }
}

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (emailCheck && passwordCheck) {
    window.location.replace('../postlist.html');
  }
});
