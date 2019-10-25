import React from 'react';

import Annotations from './annotations/annotation-container';
import Markers from './markers/marker-container';
import Search from './search/search-container';
import Tooltips from './tooltips/tooltips-container';

import './markup.css';

const Markup = () => (
  <div className="panel__markup">
    <Annotations />
    <Markers />
    <Tooltips />
    <Search />
  </div>
);

export default Markup;
