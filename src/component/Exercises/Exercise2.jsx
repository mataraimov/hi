import React, { useEffect, useState } from 'react';

function Exercise2() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 2</h1>
      <Pagination from={1} to={5} />
    </div>
  );
}
/*
Создать кнопки страниц от указанного числа
в пропсе from до пропса to.
При клике на одну из кнопок, надо сменить номер страницы
в теге p  на соответствующее число.
*/
function Pagination({ from, to }) {
  const [page, setpage] = useState('');
  let arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return (
    <div>
      <p>Страница: {page}</p>
      {arr.map((el) => (
        <button onClick={() => setpage(el)}>{el}</button>
      ))}
    </div>
  );
}

export default Exercise2;
