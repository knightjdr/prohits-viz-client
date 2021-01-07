import React from 'react';

import Poi from '../analysis/scatter/poi/poi-container';
import PoiCustomization from './poi-customization/poi-customization-container';
import PointList from './point-list/point-list-container';

const Customization = () => (
  <div className="panel panel__customization">
    <Poi />
    <PoiCustomization />
    <PointList />
  </div>
);

export default Customization;
