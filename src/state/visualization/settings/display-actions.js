import { batch } from 'react-redux';

import { getDataProperty } from '../../selector/visualization/data-selector';
import { updateSetting } from './settings-actions';

export const CHANGE_CIRCHEATMAP_PLOT = 'CHANGE_CIRCHEATMAP_PLOT';
export const CHANGE_SCATTER_PLOT = 'CHANGE_SCATTER_PLOT';
export const RESET_CIRCHEATMAP = 'RESET_CIRCHEATMAP';
export const RESET_HEATMAP = 'RESET_HEATMAP';
export const RESET_SCATTER = 'RESET_SCATTER';
export const RESET_SCATTER_TRANSFORMATIONS = 'RESET_SCATTER_TRANSFORMATIONS';
export const UPDATE_DISPLAY_SETTING = 'UPDATE_DISPLAY_SETTING';

const changeCircHeatmapFromThunk = (value, readouts, settings) => ({
  ...settings,
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  value,
  readouts,
  setting: 'selectedPlot',
  type: CHANGE_CIRCHEATMAP_PLOT,
});

const changeScatterFromThunk = (value, points, filters) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  filters,
  value,
  points,
  setting: 'selectedPlot',
  type: CHANGE_SCATTER_PLOT,
});

const resetCircheatmapFromThunk = (settings) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_CIRCHEATMAP,
  ...settings,
});

export const resetHeatmap = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_HEATMAP,
});

export const resetScatter = (value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_SCATTER,
  value,
});

export const resetScatterTransformations = (value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_SCATTER_TRANSFORMATIONS,
  value,
});

export const updateDisplaySetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_DISPLAY_SETTING,
  value,
});

export const changeCircHeatmapPlot = (index) => (
  (dispatch, getState) => {
    const state = getState();
    const selectedPlot = getDataProperty(state, 'display', 'selectedPlot');

    if (index !== selectedPlot) {
      const { plots } = state;

      const circles = getDataProperty(state, 'circles', 'order');
      const { sortByKnown } = getDataProperty(state, 'settings', 'current');
      batch(() => {
        dispatch(changeCircHeatmapFromThunk(
          index,
          plots[index].readouts,
          {
            circles,
            sortByKnown,
          },
        ));
        dispatch(updateSetting('maxReadouts', plots[index].readouts.length));
      });
    }
  }
);

export const changeScatterPlot = (index) => (
  (dispatch, getState) => {
    const state = getState();
    const selectedPlot = getDataProperty(state, 'display', 'selectedPlot');

    if (index !== selectedPlot) {
      const { plots } = state;
      const { xFilter, yFilter } = getDataProperty(state, 'settings', 'current');
      const filters = { x: xFilter, y: yFilter };
      dispatch(changeScatterFromThunk(index, plots[index].points, filters));
    }
  }
);

export const resetCircheatmap = () => (
  (dispatch, getState) => {
    const state = getState();
    const circles = getDataProperty(state, 'circles', 'defaultOrder');
    const {
      maxReadouts,
      readoutIDs,
      sortByKnown,
    } = getDataProperty(state, 'settings', 'default');

    dispatch(resetCircheatmapFromThunk({
      circles,
      maxReadouts,
      readoutIDs,
      sortByKnown,
    }));
  }
);
