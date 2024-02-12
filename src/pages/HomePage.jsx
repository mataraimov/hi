import React from 'react';
import { Link } from 'react-router-dom';
import Photos from '../component/Photos';
import ScrollToAnchor from '../component/Scroll';

function HomePage() {
  return (
    <div>
      <ScrollToAnchor />
      HomePage
      <Link to="/about-us#myheadline">Press Link to get to headline</Link>
      <Photos />
    </div>
  );
}

export default HomePage;
