import { useSelector } from 'react-redux';

import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';

const useExportData = () => {
  const annotations = useSelector(state => selectData(state, 'annotations'));
  const columnDB = useSelector(state => selectState(state, 'columnDB'));
  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const format = useSelector(state => selectStateProperty(state, 'exporter', 'format'));
  const markers = useSelector(state => selectData(state, 'markers'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const data = {
    format,
    ...settings,
  };

  const exportData = () => {
    switch (settings.imageType) {
      case 'dotplot':
        return {
          ...data,
          annotations,
          columnDB,
          columnOrder,
          markers,
          rowDB,
          rowOrder,
          scoreType,
        };
      case 'heatmap':
        return {
          ...data,
          annotations,
          columnDB,
          columnOrder,
          markers,
          rowDB,
          rowOrder,
          scoreType,
        };
      default:
        return {};
    }
  };

  return exportData;
};

export default useExportData;
