import { useDispatch, useSelector } from 'react-redux';

import orderArrayBySequence from '../../../../../../utils/order-array-by-sequence';
import fetch from '../../../../../../utils/fetch';
import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
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
  const session = useSelector(state => selectState(state, 'session'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

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
    dispatch(actions.synchronizeMinimap(activeTab, updateOriginal));

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
      headers: {
        session,
      },
      method: 'POST',
    };

    const response = await fetch(`/sync/${activeTab}`, options);
    if (response.error) {
      dispatch(actions.synchError(activeTab));
    }
  };

  return syncMinimap;
};

export default useSync;
