import React, { useCallback, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../utils/action-notification';

import filter from './filter';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../state/selector/general';
import { setColumnOrder } from '../../../../state/visualization/heatmap/columns-actions';
import { setRowOrder } from '../../../../state/visualization/heatmap/rows-actions';
import { updateSetting } from '../../../../state/visualization/settings/settings-actions';

const useFilter = () => {
  const [isFiltering, setFiltering] = useState(false);

  const dispatch = useDispatch();

  const columnDB = useSelector((state) => selectState(state, 'columnDB'));
  const columns = useSelector((state) => selectData(state, 'columns'));
  const scoreType = useSelector((state) => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const rows = useSelector((state) => selectData(state, 'rows'));
  const rowDB = useSelector((state) => selectState(state, 'rowDB'));

  const filterOptions = {
    columnDB,
    columns,
    rowDB,
    rows,
    scoreType,
    settings,
  };

  const filterAndReturn = useCallback(
    (updatedSetting, updatedValue, updatedOrder = {}) => (
      filter(updatedSetting, updatedValue, updatedOrder, filterOptions)
    ),
    [filterOptions],
  );

  const filterAndUpdateState = useCallback(
    (updatedSetting, updatedValue, updatedOrder = {}) => {
      setFiltering(true);

      const newOrder = filter(updatedSetting, updatedValue, updatedOrder, filterOptions);

      batch(() => {
        dispatch(updateSetting(updatedSetting, updatedValue));
        dispatch(setRowOrder(newOrder.rows));
        dispatch(setColumnOrder(newOrder.columns));
      });

      setFiltering(false);
    },
    [dispatch, filterOptions],
  );

  return {
    returnOrder: filterAndReturn,
    updateState: filterAndUpdateState,
    Component: isFiltering
      ? (
        <ActionNotification
          id="heatmap-filtering"
          isOpen={isFiltering}
          text="filtering"
        />
      )
      : null,
  };
};

export default useFilter;
