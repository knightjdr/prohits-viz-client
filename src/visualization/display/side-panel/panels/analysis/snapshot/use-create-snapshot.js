import { useDispatch, useSelector } from 'react-redux';

import defineSnapshotName from './define-snapshot-name';
import useCreateHeatmapSnapshot from './heatmap/use-create-heatmap-snapshot';
import { addHeatmapSnapshot } from '../../../../../../state/visualization/data/snapshot-actions';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';

const useCreateSnapshot = () => {
  const dispatch = useDispatch();

  const imageType = useSelector(state => selectStateProperty(state, 'parameters', 'imageType'));
  const tabs = useSelector(state => selectState(state, 'tabs'));

  const createHeatmapSnapshot = useCreateHeatmapSnapshot();

  const createSnapshot = (snapshotName, order) => {
    let snapshot;
    if (imageType === 'dotplot' || imageType === 'heatmap') {
      snapshot = createHeatmapSnapshot(order);
    }

    const name = defineSnapshotName(snapshotName, tabs);

    dispatch(addHeatmapSnapshot(name.id, name.name, snapshot));
  };

  return createSnapshot;
};

export default useCreateSnapshot;
