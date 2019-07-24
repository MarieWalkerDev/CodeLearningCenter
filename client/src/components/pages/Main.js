import React from 'react';
import Instructions from './Instructions';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

const Main = (props) => {
  return (
    <div>
      <Instructions />
      <UserInput />
      <UserOutput />
    </div>
  );
};

export default Main;
