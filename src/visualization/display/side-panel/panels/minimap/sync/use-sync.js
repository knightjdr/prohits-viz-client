import { useDispatch, useSelector } from 'react-redux';

import orderArrayBySequence from '../../../../../../utils/order-array-by-sequence';
import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
import useFetch from '../../../../../../hooks/fetch/use-fetch';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';
import * as actions from '../../../../../../state/visualization/heatmap/minimap-actions';

const useSync = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector(state => selectActiveTab(state));
  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const fetch = useFetch();

  const {
    abundanceCap,
    edgeColor,
    fillColor,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    secondaryFilter,
  } = settings;

  const syncMinimap = async (updateOriginal = false) => {
    dispatch(actions.synchronizeMinimap(updateOriginal));

    const orderedRows = orderArrayBySequence(rowDB, rowOrder).map(row => ({
      data: orderArrayBySequence(row.data, columnOrder),
      name: row.name,
    }));

    const data = {
      abundanceCap,
      fillColor,
      invertColor,
      minAbundance,
      rows: orderedRows,
      scoreType,
    };

    if (imageType === 'dotplot') {
      data.imageType = 'dotplot';
      data.edgeColor = edgeColor;
      data.primaryFilter = primaryFilter;
      data.secondaryFilter = secondaryFilter;
    } else {
      data.imageType = 'heatmap';
    }

    const options = {
      data,
      method: 'POST',
    };

    const response = await fetch(`/sync/${activeTab}`, options);
    if (response.error) {
      dispatch(actions.synchError());
    }
  };

  return syncMinimap;
};

export default useSync;
