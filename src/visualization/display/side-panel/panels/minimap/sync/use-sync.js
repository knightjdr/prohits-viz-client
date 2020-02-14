import { useDispatch, useSelector } from 'react-redux';

import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
import useFetch from '../../../../../../hooks/fetch/use-fetch';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';
import * as actions from '../../../../../../state/visualization/heatmap/minimap-actions';

const useSync = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector(state => selectActiveTab(state));
  const columnDB = useSelector(state => selectState(state, 'columnDB'));
  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const fetch = useFetch();

  const syncMinimap = async (updateOriginal = false) => {
    dispatch(actions.synchronizeMinimap(updateOriginal));

    const data = {
      columnDB,
      columnOrder,
      rowDB,
      rowOrder,
      scoreType,
      ...settings,
    };

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
