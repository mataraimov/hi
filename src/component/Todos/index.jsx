import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paginate from '../Paginate';
import './Todos.css';
function Todos({ name, children }) {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  async function getTodos() {
    const response = await axios.get('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos');
    const data = await response.data;
    console.log(response);
    setTodos(data);
  }
  useEffect(() => {
    getTodos();
  }, []);
  async function addTask() {
    const obj = {
      title: inputTitle,
      completed: checkBox,
    };
    console.log(obj);
    const response = await axios.post(
      'https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos',
      obj,
    );

    console.log(response);
    getTodos();
  }
  async function changeTaskStatus(id, status) {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: status }),
    });

    console.log(response);
    getTodos();
  }
  async function deleteTask(id) {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
    getTodos();
  }

  function detailPage(id) {
    navigate('/detail/' + id);
  }

  return (
    <div className="container">
      <h1>{name}</h1>
      <>{children}</>
      <div className="create__todo">
        <input
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          type="text"
          name="title"
        />

        <button onClick={addTask}>Добавить</button>
      </div>
      <div className="todos__header">
        <div className="title__id">
          <p>ID</p>
          <p>Название</p>
        </div>
        <p>Сделано</p>
      </div>
      <div className="todos__block">
        {todos.map((el, i) => {
          return (
            <div key={i} className="todo__item">
              <div className="title__id">
                <p className="todo__id">{el.id}</p>
                <p className="todo__title">{el.title}</p>
              </div>
              <div>
                <span className={`todo__completed ${!el.completed && 'notcompleted'}`}>
                  {el.completed == true ? 'Сделано' : 'Еще нет'}
                </span>
                <button
                  className="changeBtn"
                  onClick={() => changeTaskStatus(el.id, !el.completed)}
                >
                  Изменить
                </button>
                <button className="changeBtn" onClick={() => detailPage(el.id)}>
                  Детали
                </button>
                <button className="deleteBtn" onClick={() => deleteTask(el.id)}>
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Paginate />
    </div>
  );
}

export default Todos;
