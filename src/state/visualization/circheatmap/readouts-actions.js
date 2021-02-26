import { getDataProperty } from '../../selector/visualization/data-selector';

export const FILTER_READOUTS = 'FILTER_READOUTS';

const filterReadoutsFromThunk = (values) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: FILTER_READOUTS,
  ...values,
});

export const filterAndSortPoints = (settings = {}) => (
  (dispatch, getState) => {
    const state = getState();
    const circles = getDataProperty(state, 'circles', 'order');
    const {
      maxReadouts,
      readoutOrder,
      sortByKnown,
    } = getDataProperty(state, 'settings', 'current');

    dispatch(filterReadoutsFromThunk({
      circles,
      maxReadouts,
      readoutOrder,
      sortByKnown,
      ...settings,
    }));
  }
);
