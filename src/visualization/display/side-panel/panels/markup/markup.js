import React from 'react';

import Annotations from './annotations/annotation-container';
import Markers from './markers/marker-container';
import Search from './search/search-container';

import './markup.css';

const Markup = () => (
  <div className="panel__markup">
    <Annotations />
    <Markers />
    <Search />
  </div>
);

export default Markup;
