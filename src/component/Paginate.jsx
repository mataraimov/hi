import React, { useState } from 'react';

function Paginate() {
  const [pages, setpages] = useState([1, 2, 3, 4]);
  return (
    <div>
      {pages.map((el) => (
        <span>{el}</span>
      ))}
    </div>
  );
}

export default Paginate;
