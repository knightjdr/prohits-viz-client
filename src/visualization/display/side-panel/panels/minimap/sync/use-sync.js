import { useDispatch, useSelector } from 'react-redux';

import fetch from '../../../../../../utils/fetch';
import { rowSelector } from '../../../../../../state/selector/visualization/row-selector';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';
import * as actions from '../../../../../../state/visualization/heatmap/minimap-actions';

const useSync = () => {
  const dispatch = useDispatch();

  const rows = useSelector(state => rowSelector(state));
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

  const data = {
    abundanceCap,
    fillColor,
    invertColor,
    minAbundance,
    rows,
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

  const syncMinimap = async (updateOriginal = false) => {
    dispatch(actions.synchronizeMinimap(updateOriginal));

    const response = await fetch('/sync', options);
    if (response.error) {
      dispatch(actions.synchError());
    }
  };

  return syncMinimap;
};

export default useSync;
