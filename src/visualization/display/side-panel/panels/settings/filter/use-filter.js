import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterRows } from '../../../../../../state/visualization/data/rows-actions';
import { stateSelector, stateSelectorProp } from '../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../state/visualization/data/settings-actions';

const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = a => a >= primaryFilter;
  const lte = a => a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

/* Filter heatmap by minAbundance and primaryFilter score. */
const useFilter = () => {
  const dispatch = useDispatch();

  const scoreType = useSelector(state => stateSelectorProp(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));
  const rows = useSelector(state => stateSelector(state, 'rows'));

  const {
    list,
    order,
  } = rows;
  const {
    minAbundance,
    primaryFilter,
  } = settings;

  const filter = useCallback(
    (setting, value) => {
      const newAbundance = setting === 'minAbundance' ? value : minAbundance;
      const newPrimaryFilter = setting === 'primaryFilter' ? value : primaryFilter;
      const scoreCriterion = defineScoreCriterion(scoreType, newPrimaryFilter);

      const filteredRowOrder = order.filter(rowIndex => (
        list[rowIndex].data.some(datam => (
          datam.value >= newAbundance && scoreCriterion(datam.score)
        ))
      ));

      dispatch(updateSetting(setting, value));
      dispatch(filterRows(filteredRowOrder));
    },
    [minAbundance, order, primaryFilter],
  );

  return filter;
};

export default useFilter;
