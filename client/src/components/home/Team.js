import React from 'react';

const Team = (props) => {
  return (
    <div className='teamcards'>

      <div className="ui link cards" style={{marginTop:"0"}}>

        <div className="card">
          <div className="image" style={{flexGrow:"0"}}>
            <img src="https://semantic-ui.com/images/avatar2/large/molly.png" />
          </div>
          <div className="content" style={{flexGrow:"0"}}>
            <div className="header">Marie Walker</div>
            <div className="meta">
              <div className="date">Full Stack JavaScript Developer</div>
            </div>
            <div className="description">
              Marie is in Mesa, AZ.
            </div>
          </div>
          <div className="extra content" style={{flexGrow:"0"}}>
            <div className="right floated">
              Joined in 2019
            </div>
            <div>
              <i className="user icon"></i>
              10 Apps
            </div>
          </div>
        </div>
      </div>

      <div className="ui link cards" style={{marginTop:"0"}}>

        <div className="card">
          <div className="image">
            <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
          </div>
          <div className="content">
            <div className="header">Daniel Wilson</div>
            <div className="meta">
              <div className="date">Full Stack Software Developer</div>
            </div>
            <div className="description">
              Daniel is in Phoenix, AZ.
            </div>
          </div>
          <div className="extra content">
            <div className="right floated">
              Joined in 2019
            </div>
            <div>
              <i className="user icon"></i>
              11 Apps
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Team;
