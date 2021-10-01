import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from './filter';

import { filterPoints } from '../../../../../../../state/visualization/scatter/points-actions';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../../../../../state/selector/visualization/scatter-selector';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const { xFilter, yFilter } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { labels } = useSelector((state) => selectPlot(state));

  const handleSettingChange = (e, name, value) => {
    dispatch(filterPoints(name, value));
  };

  return (
    <Filter
      handleSettingChange={handleSettingChange}
      labels={labels}
      xFilter={xFilter}
      yFilter={yFilter}
    />
  );
};

export default FilterContainer;
