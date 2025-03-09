// 이메일 검증 함수
export function checkemailPattern(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailPattern.test(email);
}

// 비밀번호 검증 함수
export function checkpasswordPattern(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
  return passwordPattern.test(password);
}
