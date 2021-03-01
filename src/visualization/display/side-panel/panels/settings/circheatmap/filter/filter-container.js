import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Filter from './filter';

import { filterAndSortReadouts } from '../../../../../../../state/visualization/circheatmap/readouts-actions';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../../../../../state/selector/visualization/circheatmap-selector';
import { selectStateProperty } from '../../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const FilterContainer = () => {
  const dispatch = useDispatch();

  const plot = useSelector((state) => selectPlot(state));
  const readoutName = useSelector((state) => selectStateProperty(state, 'parameters', 'readoutColumn'));
  const { maxReadouts } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const handleMaxReadoutChange = (e, name, value) => {
    batch(() => {
      dispatch(updateSetting('maxReadouts', value));
      dispatch(filterAndSortReadouts({ maxReadouts: value }));
    });
  };

  const maxReadoutValue = maxReadouts === Infinity ? plot.readouts.length : maxReadouts;

  return (
    <Filter
      handleMaxReadoutChange={handleMaxReadoutChange}
      maxReadouts={maxReadoutValue}
      readoutName={readoutName}
    />
  );
};

export default FilterContainer;
