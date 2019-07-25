import React from 'react';

import './Home.css';
import Navigation from '../nav/Navigation';
import Header from './Header';
import Features from './Features';
import Footer from '../nav/Footer';

const Home = (props) => {
  return (
    <div className="App">

      <Navigation />

      <Header />

      <Features />

      <Footer />
    </div>
  );
};

export default Home;
