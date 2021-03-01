import { batch } from 'react-redux';

import { getDataProperty } from '../../selector/visualization/data-selector';
import { updateSetting } from '../settings/settings-actions';

export const FILTER_POINTS = 'FILTER_POINTS';

const filterPointsFromThunk = (values) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: FILTER_POINTS,
  ...values,
});

export const filterPoints = (filter, value) => (
  (dispatch, getState) => {
    const { xFilter, yFilter } = getDataProperty(getState(), 'settings', 'current');

    batch(() => {
      dispatch(filterPointsFromThunk({
        x: xFilter,
        y: yFilter,
        [filter === 'xFilter' ? 'x' : 'y']: value,
      }));
      dispatch(updateSetting(filter, value));
    });
  }
);
