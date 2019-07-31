import React from 'react';

import Footer from './footer/footer';
import GettingStarted from './getting-started/getting-started';
import Landing from './landing/landing-container';
import Spotlight from './spotlight/spotlight-container';

import './home.css';

const Home = () => (
  <div className="home">
    <Landing />
    <GettingStarted />
    <Spotlight />
    <Footer />
  </div>
);

export default Home;
