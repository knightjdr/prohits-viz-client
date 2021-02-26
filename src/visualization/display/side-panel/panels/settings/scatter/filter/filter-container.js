import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Filter from './filter';

import defineInputLabels from './define-input-labels';
import { filterPoints } from '../../../../../../../state/visualization/scatter/points-actions';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../../../../../state/selector/visualization/scatter-selector';
import { selectState } from '../../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const { abundanceColumn, analysisType } = useSelector((state) => selectState(state, 'parameters'));
  const { xFilter, yFilter } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const plot = useSelector((state) => selectPlot(state));

  const handleSettingChange = (e, name, value) => {
    batch(() => {
      dispatch(updateSetting(name, value));
      dispatch(filterPoints(name, value));
    });
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
