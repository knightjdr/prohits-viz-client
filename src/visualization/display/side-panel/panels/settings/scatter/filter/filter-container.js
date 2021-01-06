import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from './filter';

import defineInputLabels from './define-input-labels';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../../../../../state/selector/visualization/plot-selector';
import { selectState } from '../../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const { abundanceColumn, analysisType } = useSelector((state) => selectState(state, 'parameters'));
  const { xFilter, yFilter } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const plot = useSelector((state) => selectPlot(state));

  const handleSettingChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  const inputLabels = defineInputLabels(analysisType, abundanceColumn, plot.labels);

  return (
    <Filter
      handleSettingChange={handleSettingChange}
      inputLabels={inputLabels}
      xFilter={xFilter}
      yFilter={yFilter}
    />
  );
};

export default FilterContainer;
