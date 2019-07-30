import React from 'react';

import GettingStarted from './getting-started/getting-started';
import Landing from './landing/landing-container';

import './home.css';

const Home = () => (
  <div className="home">
    <Landing />
    <GettingStarted />
  </div>
);

export default Home;
