import { batch } from 'react-redux';

import { getDataProperty } from '../../selector/visualization/data-selector';
import { updateSetting } from '../settings/settings-actions';

export const FILTER_POINTS = 'FILTER_POINTS';

const filterPointsFromThunk = (values) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: FILTER_POINTS,
  ...values,
});

export const filterPoints = (setting, value) =>
  (dispatch, getState) => {
    const { strictAxisFiltering, xFilter, yFilter } = getDataProperty(getState(), 'settings', 'current');

    batch(() => {
      const newState = {
        strictAxisFiltering,
        x: xFilter,
        y: yFilter,
      };
      if (setting === 'xFilter') {
        newState.x = value;
      } if (setting === 'yFilter') {
        newState.y = value;
      } if (setting === 'strictAxisFiltering') {
        newState.strictAxisFiltering = value;
      }
      dispatch(filterPointsFromThunk(newState));
      dispatch(updateSetting(setting, value));
    });
  }
;
