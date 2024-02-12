import React, { useState } from 'react';
/*
Сделать валидацию формы ввода.
border тега input должен стать
зеленым, если переданная валидация истинна,
иначе должен стать красным.
Валидация должна проверяться при каждом вводе
*/

function Exercise4() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 4</h1>
      <TextValidate validate={(value) => value.length > 5} />
    </div>
  );
}

function TextValidate({ validate }) {
  const [colorBoard, setcolorBoard] = useState('red');

  function inpValidate(e) {
    const value = e.target.value;
    if (validate(value)) {
      setcolorBoard('green');
    } else {
      setcolorBoard('red');
    }
  }
  return (
    <div>
      <input style={{ color: colorBoard }} onChange={inpValidate} type="text" />
    </div>
  );
}

export default Exercise4;
