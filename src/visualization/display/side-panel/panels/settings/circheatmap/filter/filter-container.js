import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from './filter';

import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../../../../../state/selector/visualization/plot-selector';
import { selectStateProperty } from '../../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const FilterContainer = () => {
  const dispatch = useDispatch();

  const plot = useSelector((state) => selectPlot(state));
  const readoutName = useSelector((state) => selectStateProperty(state, 'parameters', 'readoutColumn'));
  const { maxReadouts } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const handleSettingChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  const maxReadoutValue = maxReadouts === Infinity ? plot.readouts.length : maxReadouts;

  return (
    <Filter
      handleSettingChange={handleSettingChange}
      maxReadouts={maxReadoutValue}
      readoutName={readoutName}
    />
  );
};

export default FilterContainer;
