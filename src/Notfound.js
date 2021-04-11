import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>That Page cannot be found</p>
      <Link to='/'> Back to Homepage... </Link>
    </div>
  );
};

export default Notfound;
