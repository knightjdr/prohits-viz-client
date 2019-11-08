import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PoiAction from './poi-action';

import defineNewOrderForSelection from './define-new-order-for-selection';
import useFilter from '../../../../settings/heatmap/filter/use-filter';
import { selectData, selectDataProperty } from '../../../../../../../../state/selector/visualization/data-selector';
import { updatePOI } from '../../../../../../../../state/visualization/analysis/poi-actions';

const PoiActionContainer = () => {
  const dispatch = useDispatch();
  const [snapshotName, setSnapshotName] = useState('');

  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const poi = useSelector(state => selectData(state, 'poi'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));

  const filter = useFilter();

  const handleChangeSnapshotName = (e, id, value) => {
    setSnapshotName(value);
  };

  const handleApply = async () => {
    const order = {
      columns: defineNewOrderForSelection(poi.columns, columnOrder),
      rows: defineNewOrderForSelection(poi.rows, rowOrder),
    };
    dispatch(updatePOI({ columns: [], row: [] }));
    filter.process(null, null, order);
  };

  const handleSnapshot = () => {
    // const snapshot = createSnapshot();
    // dispatch(addSnapshot(name, snapshot));
  };

  return (
    <PoiAction
      filteringComponent={filter.Component}
      handleApply={handleApply}
      handleChangeSnapshotName={handleChangeSnapshotName}
      handleSnapshot={handleSnapshot}
      snapshotName={snapshotName}
    />
  );
};

export default PoiActionContainer;
