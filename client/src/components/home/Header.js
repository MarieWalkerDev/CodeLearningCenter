import React from 'react';
import Video from './Video';
import IntroText from './IntroText';

const Header = (props) => {
  return (
    <div className='headerimage'>
      <div className='contentcard'>
        <Video />
        <IntroText />
      </div>
    </div>
  );
};

export default Header;
