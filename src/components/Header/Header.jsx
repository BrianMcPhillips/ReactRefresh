import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Hey Arnold</h1>
    <Link to="/">Home</Link>
  </header>
);

export default Header;
