import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SettingsHeatmap from './settings__heatmap';

import selectColumns from '../../../../../../state/selector/visualization/column-selector';
import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
import useRowFilter from '../filter/use-row-filter';
import { resetImage } from '../../../../../../state/visualization/settings/display-actions';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../../../state/selector/general';
import { updateSetting, updateSettings } from '../../../../../../state/visualization/settings/settings-actions';

const SettingsHeatmapContainer = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(state => selectActiveTab(state));
  const columns = useSelector(state => selectColumns(state));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const rowFilter = useRowFilter();

  const handleChange = (e, name, value) => {
    dispatch(updateSetting(activeTab, name, value));
  };

  const handleChangeAbundanceCap = (e, name, value) => {
    const { minAbundance } = settings;
    if (value >= minAbundance) {
      dispatch(updateSetting(activeTab, name, value));
    } else {
      const newSettings = {
        abundanceCap: value,
        minAbundance: value - 0.01,
      };
      dispatch(updateSettings(activeTab, newSettings));
      rowFilter.process('minAbundance', value - 0.01);
    }
  };

  const handleChangeMinAbundance = (e, name, value) => {
    const { abundanceCap } = settings;
    if (value <= abundanceCap) {
      dispatch(updateSetting(activeTab, name, value));
    } else {
      const newSettings = {
        abundanceCap: value + 0.01,
        minAbundance: value,
      };
      dispatch(updateSettings(activeTab, newSettings));
    }
    rowFilter.process('minAbundance', value);
  };

  const handleChangePrimaryFilter = (e, name, value) => {
    const { secondaryFilter } = settings;
    if (
      (scoreType === 'lte' && value <= secondaryFilter)
      || (scoreType === 'gte' && value >= secondaryFilter)
    ) {
      dispatch(updateSetting(activeTab, name, value));
    } else {
      const newSettings = {
        primaryFilter: value,
        secondaryFilter: value,
      };
      dispatch(updateSettings(activeTab, newSettings));
    }
    rowFilter.process('primaryFilter', value);
  };

  const handleChangeSecondaryFilter = (e, name, value) => {
    const { primaryFilter } = settings;
    if (
      (scoreType === 'lte' && value >= primaryFilter)
      || (scoreType === 'gte' && value <= primaryFilter)
    ) {
      dispatch(updateSetting(activeTab, name, value));
    } else {
      const newSettings = {
        primaryFilter: value,
        secondaryFilter: value,
      };
      dispatch(updateSettings(activeTab, newSettings));
      rowFilter.process('primaryFilter', value);
    }
  };

  const handleFilter = (e, name, value) => {
    rowFilter.process(name, value);
  };

  const handleImageReset = () => {
    dispatch(resetImage(activeTab));
  };

  return (
    <SettingsHeatmap
      columns={columns}
      filteringNotification={rowFilter.Component}
      handleChange={handleChange}
      handleChangeAbundanceCap={handleChangeAbundanceCap}
      handleChangeMinAbundance={handleChangeMinAbundance}
      handleChangePrimaryFilter={handleChangePrimaryFilter}
      handleChangeSecondaryFilter={handleChangeSecondaryFilter}
      handleFilter={handleFilter}
      handleImageReset={handleImageReset}
      settings={settings}
    />
  );
};

export default SettingsHeatmapContainer;
