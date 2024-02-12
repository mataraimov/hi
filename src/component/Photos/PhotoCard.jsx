import React from 'react';

function PhotoCard({ link, title }) {
  return (
    <figure className="photo">
      <img style={{ width: 500, height: 300 }} src={link} alt="" />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default PhotoCard;
