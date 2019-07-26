import React from 'react';

import './Home.css';

const IntroText = (props) => {
  return (
    <div className='intro-text'>
      <h1 style={{margin:"15px 0 0 0"}}>Why Learn JavaScript?</h1>
      <p style={{margin:"15px 30px"}}>Not to be confused with Java, JavaScript allows you to build interactive websites. JavaScript has become an essential web technology along with HTML and CSS, as most browsers implement JavaScript. Thus, You must learn JavaScript if you want to get into web development, and you must learn it well if you're planning on being a front-end developer or on using JavaScript for backend development.</p>
    </div>
  );
};

export default IntroText;
