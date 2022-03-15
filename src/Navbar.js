import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Rithvik's Blog</h1>
      <div className='links'>
        <Link className='is-active' to='/'>
          Home
        </Link>
        <Link className='is-active' to='/create'>
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
