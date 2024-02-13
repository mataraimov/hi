import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Books from './component/Books';
import Footer from './component/Footer';
import EmailForm from './component/Form';
import Header from './component/Header';
import Memes from './component/Memes';
import Cinema from './component/Movies';
import Todos from './component/Todos';
import TodoDetail from './component/Todos/TodoDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Memes />} />
        <Route path="/movies" element={<Cinema />} />
        <Route path="/form" element={<EmailForm />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/detail/:id" element={<TodoDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Books />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
