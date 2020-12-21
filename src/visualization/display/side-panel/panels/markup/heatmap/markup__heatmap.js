import React from 'react';

import Annotations from './annotations/annotation-container';
import Edit from './edit/edit-container';
import Markers from './markers/marker-container';
import Search from './search/search-container';
import Tooltips from './tooltips/tooltips-container';

const Markup = () => (
  <div className="panel panel__markup">
    <Search />
    <Tooltips />
    <Edit />
    <Annotations />
    <Markers />
  </div>
);

export default Markup;
