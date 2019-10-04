import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import columnSelector from '../../../../../../state/selector/visualization/column-selector';
import { filterRows } from '../../../../../../state/visualization/data/rows-actions';
import { stateSelector, stateSelectorProp } from '../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../state/visualization/data/settings-actions';

const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = a => a >= primaryFilter;
  const lte = a => a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

const filterRow = (order, list, filterIndex, scoreType, abundance, primaryFilter) => {
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  if (filterIndex > -1) {
    return order.filter(rowIndex => (
      list[rowIndex].data[filterIndex].value >= abundance
      && scoreCriterion(list[rowIndex].data[filterIndex].score)
    ));
  }
  return order.filter(rowIndex => (
    list[rowIndex].data.some(datam => (
      datam.value >= abundance && scoreCriterion(datam.score)
    ))
  ));
};

/* Filter heatmap by minAbundance and primaryFilter score. */
const useFilter = () => {
  const dispatch = useDispatch();

  const columns = useSelector(state => columnSelector(state));
  const scoreType = useSelector(state => stateSelectorProp(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));
  const rows = useSelector(state => stateSelector(state, 'rows'));

  const {
    list,
    order,
  } = rows;
  const {
    filterBy,
    minAbundance,
    primaryFilter,
  } = settings;

  const filter = useCallback(
    (setting, value) => {
      const newAbundance = setting === 'minAbundance' ? value : minAbundance;
      const newFilterBy = setting === 'filterBy' ? value : filterBy;
      const newPrimaryFilter = setting === 'primaryFilter' ? value : primaryFilter;
      const filterIndex = columns.indexOf(newFilterBy);
      const filteredRowOrder = filterRow(
        order,
        list,
        filterIndex,
        scoreType,
        newAbundance,
        newPrimaryFilter,
      );

      dispatch(updateSetting(setting, value));
      dispatch(filterRows(filteredRowOrder));
    },
    [columns, dispatch, filterBy, list, minAbundance, order, primaryFilter, scoreType],
  );

  return filter;
};

export default useFilter;
