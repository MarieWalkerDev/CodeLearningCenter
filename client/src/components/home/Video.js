import React from 'react';

import './Home.css';

const Video = (props) => {
  return (
    <div className='video-comp'>
      <iframe title="https://www.youtube.com/embed/THTfhY_6epI" width="350" height="250" src="https://www.youtube.com/embed/THTfhY_6epI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default Video;
