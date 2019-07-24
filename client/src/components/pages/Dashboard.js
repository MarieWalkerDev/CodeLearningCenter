import React from 'react';
import Navigation from '../nav/Navigation';
import Main from './Main';
import Footer from '../nav/Footer';

const Dashboard = (props) => {
  return (
    <div>
      <Navigation />

      <Main />

      <Footer />
    </div>
  );
};

export default Dashboard;
