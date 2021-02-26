import { getDataProperty } from '../../selector/visualization/data-selector';

export const FILTER_POINTS = 'FILTER_POINTS';

const filterPointsFromThunk = (values) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: FILTER_POINTS,
  ...values,
});

export const filterPoints = (filter, value) => (
  (dispatch, getState) => {
    const { xFilter, yFilter } = getDataProperty(getState(), 'settings', 'current');

    dispatch(filterPointsFromThunk({
      x: xFilter,
      y: yFilter,
      [filter === 'xFilter' ? 'x' : 'y']: value,
    }));
  }
);
