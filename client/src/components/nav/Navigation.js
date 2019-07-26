import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div className='container'>
      <div className='brand'>
        <Link style={{textDecoration:"none", color:"#254441"}} to={'./'}>Code Learning Center</Link>
      </div>
      <div className='links-container'>
        <button className='ui orange button'><Link to={'./list'}>Dashboard</Link></button>
        <Link style={{color:"#254441"}} className='links' to={'./list'}>Dashboard</Link>
        <Link style={{color:"#254441"}} className='links' to={'./'}>Home</Link>
      </div>
    </div>
  );
};

export default Navigation;
