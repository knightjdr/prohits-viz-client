import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectColumns from '../../../../../../state/selector/visualization/column-selector';
import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
import { filterRows } from '../../../../../../state/visualization/heatmap/rows-actions';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../state/visualization/settings/settings-actions';

const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = a => a >= primaryFilter;
  const lte = a => a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

const filterColumn = (rowDB, rowOrder, scoreType, primaryFilter) => {
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  const filteredColumns = [];
  const numberColumns = rowDB[0].data.length;
  for (let i = 0; i < numberColumns; i += 1) {
    const keep = rowOrder.some(rowIndex => scoreCriterion(rowDB[rowIndex].data[i].score));
    if (keep) {
      filteredColumns.push(i);
    }
  }
  return filteredColumns;
};

const filterRow = (order, rows, filterIndex, scoreType, abundance, primaryFilter) => {
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  if (filterIndex > -1) {
    return order.filter(rowIndex => (
      rows[rowIndex].data[filterIndex].value >= abundance
      && scoreCriterion(rows[rowIndex].data[filterIndex].score)
    ));
  }
  return order.filter(rowIndex => (
    rows[rowIndex].data.some(datam => (
      datam.value >= abundance && scoreCriterion(datam.score)
    ))
  ));
};

/* Filter heatmap by minAbundance and primaryFilter score. */
const useRowFilter = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector(state => selectActiveTab(state));
  const columnDB = useSelector(state => selectColumns(state));
  const defaultColumnOrder = useSelector(state => selectDataProperty(state, 'columns', 'defaultOrder'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const rows = useSelector(state => selectData(state, 'rows'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));

  const {
    defaultOrder,
    sortOrder,
  } = rows;
  const {
    filterBy,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
  } = settings;

  const filter = useCallback(
    (setting, value) => {
      const newAbundance = setting === 'minAbundance' ? value : minAbundance;
      const newFilterBy = setting === 'filterBy' ? value : filterBy;
      const newPrimaryFilter = setting === 'primaryFilter' ? value : primaryFilter;
      const newRemoveEmptyColumns = setting === 'removeEmptyColumns' ? value : removeEmptyColumns;
      const filterIndex = columnDB.indexOf(newFilterBy);
      const rowOrder = setting === 'filterBy' || sortOrder.length === 0 ? defaultOrder : sortOrder;
      const filteredRowOrder = filterRow(
        rowOrder,
        rowDB,
        filterIndex,
        scoreType,
        newAbundance,
        newPrimaryFilter,
      );
      const filteredColumnOrder = newRemoveEmptyColumns
        ? filterColumn(rowDB, filteredRowOrder, scoreType, newPrimaryFilter) : defaultColumnOrder;

      dispatch(updateSetting(activeTab, setting, value));
      dispatch(filterRows(activeTab, filteredRowOrder, filteredColumnOrder));
    },
    [
      activeTab,
      columnDB,
      defaultColumnOrder,
      defaultOrder,
      dispatch,
      filterBy,
      minAbundance,
      removeEmptyColumns,
      rowDB,
      sortOrder,
      primaryFilter,
      scoreType,
    ],
  );

  return filter;
};

export default useRowFilter;
