import React from 'react';

import Annotations from './annotations/annotation-container';
import Markers from './markers/marker-container';

import './markup.css';

const Markup = () => (
  <div className="panel__markup">
    <Annotations />
    <Markers />
  </div>
);

export default Markup;
