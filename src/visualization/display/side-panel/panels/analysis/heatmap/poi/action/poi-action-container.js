import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PoiAction from './poi-action';

import useCreateSnapshot from '../../../snapshot/use-create-snapshot';
import useFilter from '../../../../../../heatmap/filter/use-filter';
import useNewPOI from '../../../utils/use-new-poi';
import { updatePOI } from '../../../../../../../../state/visualization/analysis/poi-actions';

const PoiActionContainer = () => {
  const dispatch = useDispatch();
  const [snapshotName, setSnapshotName] = useState('');

  const createSnapshot = useCreateSnapshot();
  const defineNewOrder = useNewPOI();
  const filter = useFilter();

  const handleApply = async () => {
    const order = defineNewOrder();
    dispatch(updatePOI({ columns: [], rows: [] }));
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
