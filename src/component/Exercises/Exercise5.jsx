import React, { useState } from 'react';

/*
Достать значения с инпута компонента Search,
и выводить только те названия книг, которые содержат
введенный порядок символов.
Например: пр -> Преступление и наказание, 12 правил жизни
Подсказка: воспользуйтесь методами includes и filter
Примечания:
1. Поиск должен быть живой, то есть результат
должен сразу меняться во время ввода
2. Поиск не должен учитывать регистр букв.
*/

const books = [
  '12 правил жизни',
  'Символы человека',
  'Преступление и наказание',
  'Падение',
  'Эгоистичный ген',
];

function Exercise5() {
  const [filteredBooks, setfilteredBooks] = useState([]);
  function setSearchValue(event) {
    const value = event.target.value;
    setfilteredBooks(books.filter((el) => el.toLowerCase().includes(value.toLowerCase())));
  }
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 5</h1>
      <Search onStart={setSearchValue} />
      <ul>
        {filteredBooks.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

function Search({ onStart }) {
  return <input onChange={onStart} type="text" />;
}

export default Exercise5;
