import React from 'react';

import SidePanel from './side-panel/side-panel-container';
import Tab from './tab/tab-container';

import './display.css';

const Display = () => (
  <div className="display">
    <Tab />
    <SidePanel />
  </div>
);

export default Display;
