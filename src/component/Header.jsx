import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const link = 'about-us';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <h1>
        <Link to="/">Header</Link>
      </h1>
      <nav>
        <Link to="/about-us">О нас</Link>
      </nav>
    </div>
  );
}

export default Header;
