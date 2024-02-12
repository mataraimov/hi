import React, { useState } from 'react';

function EmailForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValid, setemailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  function setEmail(event) {
    setEmailValue(event.target.value);
    changeValid();
  }
  function changeValid() {
    setemailValid(emailValue.length >= 6 && emailValue.includes('@'));
  }
  function setPassword(em) {
    setPasswordValue(em.target.value);
    changeValidPass();
  }
  function changeValidPass() {
    setPasswordValid(
      passwordValue.length > 6 &&
        passwordValue.match(/[? ! . _ /]/) &&
        passwordValue.match(/[A-Z]/),
    );
  }

  return (
    <div>
      <input onChange={setEmail} value={emailValue} type="email" name="email" id="e" />
      {emailValid && <span style={{ color: 'red' }}>*Введите корректную почту!</span>}
      <br />
      <input onChange={setPassword} value={passwordValue} type="password" name="password" id="p" />
      {passwordValid && <span style={{ color: 'red' }}>*Введите корректный пароль!</span>}
    </div>
  );
}
export default EmailForm;
