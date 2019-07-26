import React from 'react';

import './Home.css';
import Navigation from '../nav/Navigation';
import Header from './Header';
import Features from './Features';
import Team from './Team';
import Footer from '../nav/Footer';

const Home = (props) => {
  return (
    <div className="App">
      <div className='homepage'>
        <Navigation />

        <Header />

        <Features />

        <Team />

      </div>
      <Footer />
    </div>
  );
};

export default Home;
