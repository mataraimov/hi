import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TodoDetail() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  async function getTodos() {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos/' + id);
    const data = await response.json();
    setdata(data);
  }
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      TodoDetail:
      <h3>Title:{data.title}</h3>
      <h4>Price:{data.price}</h4>
      <h4>Completed:{data.completed ? 'Completed' : 'no'}</h4>
    </div>
  );
}

export default TodoDetail;
