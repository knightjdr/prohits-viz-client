import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from './filter';

import useFilter from '../../../../../heatmap/filter/use-filter';
import { selectOrderedColumnNames } from '../../../../../../../state/selector/visualization/column-selector';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../../../../state/selector/general';
import { updateSetting, updateSettings } from '../../../../../../../state/visualization/settings/settings-actions';

const FilterSettingsContainer = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => selectOrderedColumnNames(state));
  const scoreType = useSelector((state) => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const rowFilter = useFilter();

  const {
    abundanceCap,
    filterBy,
    imageType,
    minAbundance,
    primaryFilter,
    removeFailingColumns,
    removeFailingRows,
    secondaryFilter,
  } = settings;

  const handleChangeAbundanceCap = (e, name, value) => {
    if (value >= minAbundance) {
      dispatch(updateSetting(name, value));
    } else {
      const newSettings = {
        abundanceCap: value,
        minAbundance: value - 0.01,
      };
      dispatch(updateSettings(newSettings));
      rowFilter.updateState('minAbundance', value - 0.01);
    }
  };

  const handleChangeMinAbundance = (e, name, value) => {
    if (value <= abundanceCap) {
      dispatch(updateSetting(name, value));
    } else {
      const newSettings = {
        abundanceCap: value + 0.01,
        minAbundance: value,
      };
      dispatch(updateSettings(newSettings));
    }
    rowFilter.updateState('minAbundance', value);
  };

  const handleChangePrimaryFilter = (e, name, value) => {
    if (
      (scoreType === 'lte' && value <= secondaryFilter)
      || (scoreType === 'gte' && value >= secondaryFilter)
    ) {
      dispatch(updateSetting(name, value));
    } else {
      const newSettings = {
        primaryFilter: value,
        secondaryFilter: value,
      };
      dispatch(updateSettings(newSettings));
    }
    rowFilter.updateState('primaryFilter', value);
  };

  const handleChangeSecondaryFilter = (e, name, value) => {
    if (
      (scoreType === 'lte' && value >= primaryFilter)
      || (scoreType === 'gte' && value <= primaryFilter)
    ) {
      dispatch(updateSetting(name, value));
    } else {
      const newSettings = {
        primaryFilter: value,
        secondaryFilter: value,
      };
      dispatch(updateSettings(newSettings));
      rowFilter.updateState('primaryFilter', value);
    }
  };

  const handleFilter = (e, name, values) => {
    rowFilter.updateState(name, values);
  };

  return (
    <Filter
      abundanceCap={abundanceCap}
      columns={columns}
      filteringNotification={rowFilter.Component}
      filterBy={filterBy}
      handleChangeAbundanceCap={handleChangeAbundanceCap}
      handleChangeMinAbundance={handleChangeMinAbundance}
      handleChangePrimaryFilter={handleChangePrimaryFilter}
      handleChangeSecondaryFilter={handleChangeSecondaryFilter}
      handleFilter={handleFilter}
      imageType={imageType}
      minAbundance={minAbundance}
      primaryFilter={primaryFilter}
      removeFailingColumns={removeFailingColumns}
      removeFailingRows={removeFailingRows}
      secondaryFilter={secondaryFilter}
    />
  );
};

export default FilterSettingsContainer;
