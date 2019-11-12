import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PoiAction from './poi-action';

import defineNewOrderForSelection from './define-new-order-for-selection';
import useCreateSnapshot from '../../../snapshot/use-create-snapshot';
import useFilter from '../../../../../../heatmap/filter/use-filter';
import { selectData, selectDataProperty } from '../../../../../../../../state/selector/visualization/data-selector';
import { updatePOI } from '../../../../../../../../state/visualization/analysis/poi-actions';

const PoiActionContainer = () => {
  const dispatch = useDispatch();
  const [snapshotName, setSnapshotName] = useState('');

  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const poi = useSelector(state => selectData(state, 'poi'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));

  const createSnapshot = useCreateSnapshot();
  const filter = useFilter();

  const defineNewOrder = () => ({
    columns: defineNewOrderForSelection(poi.columns, columnOrder),
    rows: defineNewOrderForSelection(poi.rows, rowOrder),
  });

  const handleApply = async () => {
    const order = defineNewOrder();
    dispatch(updatePOI({ columns: [], row: [] }));
    filter.updateState(null, null, order);
  };

  const handleSnapshot = (e, id, value) => {
    const order = defineNewOrder();
    setSnapshotName(value);
    createSnapshot(value, order);
  };

  return (
    <PoiAction
      filteringComponent={filter.Component}
      handleApply={handleApply}
      handleSnapshot={handleSnapshot}
      snapshotName={snapshotName}
    />
  );
};

export default PoiActionContainer;
