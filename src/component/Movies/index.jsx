import React, { useState } from 'react';
import Movie from './Movie';
import styles from './Movies.module.css';
const initialMovies = [
  {
    id: 123,
    title: 'Великий Гэтсби',
    release: new Date('2013-05-01'),
    poster: 'https://st.kp.yandex.net/images/film_iphone/iphone360_463724.jpg',
  },
  {
    id: 234,
    title: 'Дневник баскетболиста',
    release: new Date('1995-04-21'),
    poster: 'https://www.kinopoisk.ru/images/film_big/6175.jpg',
  },
  {
    id: 175,
    title: 'Авиатор',
    release: new Date('2004-12-14'),
    poster:
      'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/TheAviatorPoster.jpg/211px-TheAviatorPoster.jpg',
  },
  {
    id: 131,
    title: 'Поймай меня, если сможешь',
    release: new Date('2002-12-15'),
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/360',
  },
  {
    id: 355,
    title: 'Настоящий детектив',
    release: new Date('2014-01-12'),
    poster: 'https://i.pinimg.com/originals/6f/51/73/6f5173a19bc4647296b4760df30ec681.jpg',
  },
  {
    id: 441,
    title: 'Интерстеллар',
    release: new Date('2014-10-26'),
    poster: 'https://b1.filmpro.ru/c/258954.jpg',
  },
  {
    id: 382,
    title: 'Джентльмены',
    release: new Date('2020-01-01'),
    poster: 'https://www.film.ru/sites/default/files/movies/posters/41159194-1137169.jpg',
  },
  {
    id: 501,
    title: 'Начало',
    release: new Date('2010-07-08'),
    poster: 'https://st.kp.yandex.net/im/poster/1/3/1/kinopoisk.ru-Inception-1310268.jpg',
  },
  {
    id: 662,
    title: 'Выживший',
    release: new Date('2016-01-06'),
    poster: 'https://b1.filmpro.ru/c/349985.jpg',
  },
  {
    id: 431,
    title: 'Тёмный рыцарь: Возрождение легенды',
    release: new Date('2012-07-06'),
    poster: 'https://st.kp.yandex.net/im/poster/7/9/7/kinopoisk.ru-The-Dark-Knight-797796.jpg',
  },
];
function Cinema() {
  const [inpName, setInpName] = useState('');
  const [movies, setMovies] = useState(initialMovies);

  function movieFilter() {
    if (inpName) {
      setMovies((prevData) =>
        prevData.filter((movie) => movie.title.toLowerCase().includes(inpName.toLowerCase())),
      );
    } else {
      setMovies(initialMovies);
    }
  }

  return (
    <main>
      <h1 className={styles.title}>Поиск фильмов</h1>
      <section className={styles.search}>
        <input
          onChange={(e) => setInpName(e.target.value)}
          type="text"
          placeholder="Введите название или год фильма"
        />
        <button onClick={movieFilter}>Поиск</button>
      </section>
      <section className={styles.movie_list}>
        {/* {options=='clothes'?{clothesmap}:options==='gadget'?{gadgetmap}:{phonesmap}} */}
        {movies.map((movie) => {
          const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
          const formattedDate = movie.release.toLocaleDateString('ru-RU', options);
          return (
            <Movie key={movie.id} name={movie.title} poster={movie.poster} date={formattedDate} />
          );
        })}
      </section>
    </main>
  );
}

export default Cinema;
