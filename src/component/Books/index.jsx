import React from 'react';
import { useState } from 'react';
import './Books.css';
function Books() {
  const [books, setBooks] = useState([
    'Падение',
    '12 правил жизни',
    'Эгоистичный ген',
    'Квантовая психология',
    'Человек и его симловы',
    'Самое грандиозное шоу на земле',
    'Удовольствие от X',
    'Преступление и наказание',
  ]);
  const [oldBooks, setOldBooks] = useState([]);
  function readDone(name) {
    //Падение
    setOldBooks((oldState) => [...oldState, name]);
    setBooks((oldArr) => oldArr.filter((el) => name !== el)); //Падение!==Падение
  }
  function readUnDone(name) {
    //Падение
    setBooks((newState) => [...newState, name]);
    setOldBooks((oldArr) => oldArr.filter((el) => name !== el)); //Падение!==Падение
  }
  return (
    <>
      <h1>Книги</h1>
      <div className="books">
        <section className="books__column books-todo">
          <h1>Новые</h1>
          {books.map((el, i) => (
            <button key={i} onClick={() => readDone(el)} className="book">
              {el}
            </button>
          ))}
        </section>
        <section className="books__column books-done">
          <h1>Прочитанные</h1>
          {oldBooks.map((el, i) => (
            <button key={i} onClick={() => readUnDone(el)} className="book book--old">
              {el}
            </button>
          ))}
          {/* <button class="book book--old">12 Правил Жизни</button> */}
        </section>
      </div>
    </>
  );
}

export default Books;
