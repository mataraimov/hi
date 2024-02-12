import React from 'react';
import styles from './Movies.module.css';
function Movie({ name, poster, date }) {
  return (
    <article className={styles.movie}>
      <img src={poster} className={styles.movie__poster} />
      <h1>{name}</h1>
      <p>{date}</p>
    </article>
  );
}

export default Movie;
