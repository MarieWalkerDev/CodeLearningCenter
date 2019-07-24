import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='container'>
      <div className='brand'>
        <Link style={{textDecoration:"none", color:"#254441"}} to={'./'}>&copy; The Dubs Team, 2019</Link>
      </div>
    </div>
  );
};

export default Footer;
