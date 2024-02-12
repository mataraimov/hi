import React, { useEffect, useState } from 'react';
import PhotoCard from './PhotoCard';

function Photos() {
  const [data, setdata] = useState([]);

  const [isLoading, setisLoading] = useState(true);
  async function fetchData() {
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();
    setdata(data);
    setisLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="photo-list">
      {isLoading ? (
        <img src="https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
      ) : (
        data.map((el) => {
          return <PhotoCard key={el.id} title={el.author} link={el.download_url} />;
        })
      )}
    </div>
  );
}

export default Photos;
