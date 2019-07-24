import React from 'react';
import Video from './Video';
import IntroText from './IntroText';

const Header = (props) => {
  return (
    <div className='image'>
      <div className='content'>
        <Video />
        <IntroText />
      </div>
    </div>
  );
};

export default Header;
