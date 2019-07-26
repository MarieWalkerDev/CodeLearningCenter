import React from 'react';

const Team = (props) => {
  return (
    <div className='teamcards'>
      <div className="ui link cards teamcards">

        <div className="card">
          <div className="image">
            <img src="https://semantic-ui.com/images/avatar2/large/molly.png" />
          </div>
          <div className="content">
            <div className="header">Marie Walker</div>
            <div className="meta">
              <div className="date">dev</div>
            </div>
            <div className="description">
              Marie is a JavaScript deloper living in Mesa, AZ.
            </div>
          </div>
          <div className="extra content">
            <div className="right floated">
              Joined in 2019
            </div>
            <div>
              <i className="user icon"></i>
              10 Apps
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
          </div>
          <div className="content">
            <div className="header">Daniel Wilson</div>
            <div className="meta">
              <a></a>
            </div>
            <div className="description">
              Daniel is a Full Stack Software Developer living in Phoenix, AZ.
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
