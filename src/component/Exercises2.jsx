import React, { useState } from 'react';

function Exercises2() {
  return (
    <>
      <First />
      <Second />
      <Third />
      <Fourth />
      {/* <Fifth /> */}
      <Sixth />
    </>
  );
}
function First() {
  const [symbols, setSymbols] = useState(0);
  function countSymbols(e) {
    const value = e.target.value.trim();
    const clean = value.split(' ').join('');
    setSymbols(clean.length);
  }
  return (
    <section>
      <h2>Задание № 1</h2>
      <input onChange={countSymbols} type="text" id="text-input" />
      <p>
        Количество симловов без пробела:
        <span id="text-count">{symbols}</span>
      </p>
    </section>
  );
}

function Second() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const res = () => {
    return Number(inputValue) + Number(inputValue2);
  };

  return (
    <div>
      <h2>Задание № 2</h2>
      <input type="text" placeholder="Слогаемое" onChange={handleInputChange} />
      <span>+</span>
      <input type="text" placeholder="Слогаемое" onChange={handleInputChange2} />={' '}
      <span>{res()}</span>
    </div>
  );
}

function Third() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  function switchWords() {
    // const w1 = word1;
    setWord1(word2); //word1=text
    setWord2(word1); //text=text
  }
  return (
    <section>
      <h2>Задание № 3</h2>
      <input
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
        type="text"
        id="switch-input-1"
      />
      <button onClick={switchWords} id="switch-btn">
        ←→
      </button>
      <input
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
        type="text"
        id="switch-input-2"
      />
    </section>
  );
}

function Fourth() {
  const [word1, setword1] = useState('');
  const [word2, setword2] = useState('');
  function setFunction1(word) {
    setword1(word);
    setword2(word.split('').reverse('').join(''));
  }
  function setFunction2(word) {
    setword2(word);
    setword1(word.split('').reverse('').join(''));
  }
  return (
    <section>
      <h2>Задание № 4</h2>
      <input
        value={word1}
        onChange={(e) => setFunction1(e.target.value)}
        type="text"
        id="reverse-input-1"
      />
      <input
        value={word2}
        onChange={(e) => setFunction2(e.target.value)}
        type="text"
        id="reverse-input-2"
      />
    </section>
  );
}

// function Fifth() {
//   const [word1, setword1] = useState('');
//   const [word2, setword2] = useState('');
//   const [word3, setword3] = useState('');

//   function createTag() {
//     setword3(`<${word1}>
//     ${word2}
//   <${word1}/>`);
//   }
//   return (
//     <section>
//       <h2>Задание № 5</h2>
//       <input
//         onChange={(e) => setword1(e.target.value)}
//         type="text"
//         id="typeInput"
//         placeholder="Введите тип тега"
//       />
//       <input
//         onChange={(e) => setword2(e.target.value)}
//         type="text"
//         id="textInput"
//         placeholder="Введите текст тега"
//       />
//       <button onClick={createTag} id="createBtn">
//         Создать
//       </button>
//       <div class="tag-parent">{word3}</div>
//     </section>
//   );
// }

function Sixth() {
  const [name, setname] = useState('');
  const [films, setfilms] = useState(['Гарри Поттер и узник Азкабана', 'Бёрдмен']);
  function addFilm() {
    setfilms(() => [...films, name]);
  }

  return (
    <section>
      <h2>Задание № 6</h2>
      <input
        onChange={(e) => setname(e.target.value)}
        type="text"
        id="movieInput"
        placeholder="Название фильма"
      />

      <button onClick={addFilm} id="movieBtn">
        Добавить
      </button>
      <ol className="movie-list">
        {films.map((el) => {
          console.log(el);
          return <li>{el}</li>;
        })}
      </ol>
    </section>
  );
}
export default Exercises2;
