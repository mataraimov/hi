import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Memes() {
  const [memes, setmemes] = useState([]);
  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes').then((response) => {
      setmemes(response.data.data.memes);
    });
  }, []);

  return (
    <div>
      <h1>Memes</h1>
      {memes.map((el, i) => (
        <img key={i} src={el.url} />
      ))}
    </div>
  );
}

export default Memes;
