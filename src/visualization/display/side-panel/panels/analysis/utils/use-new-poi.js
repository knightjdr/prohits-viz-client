import { useSelector } from 'react-redux';

import defineNewOrderForSelection from './define-new-order-for-selection';
import { selectCircHeatmapLabels } from '../../../../../../state/selector/visualization/circheatmap-selector';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectScatterLabels } from '../../../../../../state/selector/visualization/scatter-selector';
import { selectStateProperty } from '../../../../../../state/selector/general';

const useNewPOI = () => {
  const columnOrder = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const poi = useSelector((state) => selectData(state, 'poi'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));
  const { order: readoutIDs } = useSelector((state) => selectCircHeatmapLabels(state));
  const { order: pointOrder } = useSelector((state) => selectScatterLabels(state));

  const defineNewPOI = (canUseUnselected = true) => {
    if (imageType === 'circheatmap') {
      return {
        readouts: defineNewOrderForSelection(poi.readouts, canUseUnselected ? readoutIDs : []),
      };
    } if (imageType === 'dotplot' || imageType === 'heatmap') {
      return {
        columns: defineNewOrderForSelection(poi.columns, canUseUnselected ? columnOrder : []),
        rows: defineNewOrderForSelection(poi.rows, canUseUnselected ? rowOrder : []),
      };
    } if (imageType === 'scatter') {
      return {
        points: defineNewOrderForSelection(poi.points, canUseUnselected ? pointOrder : []),
      };
    }
    return {};
  };

  return defineNewPOI;
};

export default useNewPOI;
