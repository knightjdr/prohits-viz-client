import { useSelector } from 'react-redux';

import copyProperties from '../copy-properties';
import fillSnapshot from './fill-snapshot';
import propertiesToCopy from './properties-to-copy';
import useFilter from '../../../../../heatmap/filter/use-filter';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';

const useCreateHeatmapSnapshot = () => {
  const annotations = useSelector(state => selectData(state, 'annotations'));
  const display = useSelector(state => selectData(state, 'display'));
  const markers = useSelector(state => selectData(state, 'markers'));
  const settings = useSelector(state => selectData(state, 'settings'));

  const filter = useFilter();

  const newSettings = {
    ...settings.current,
    filterBy: [],
  };

  const currentState = {
    annotations,
    display,
    markers,
    settings: {
      current: newSettings,
      default: settings.default,
    },
  };

  const createSnapshot = (order) => {
    const snapshotState = copyProperties(currentState, propertiesToCopy);
    const filteredOrder = filter.returnOrder(null, null, order);
    return fillSnapshot(snapshotState, filteredOrder);
  };

  return createSnapshot;
};

export default useCreateHeatmapSnapshot;
