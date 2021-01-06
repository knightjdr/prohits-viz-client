import { useSelector } from 'react-redux';

import defineNewOrderForSelection from './define-new-order-for-selection';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectPlotLabels } from '../../../../../../state/selector/visualization/plot-selector';
import { selectStateProperty } from '../../../../../../state/selector/general';

const useNewPOI = () => {
  const columnOrder = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const poi = useSelector((state) => selectData(state, 'poi'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));
  const { order: pointOrder } = useSelector((state) => selectPlotLabels(state));

  const defineNewPOI = (canUseUnselected = true) => {
    if (imageType === 'dotplot' || imageType === 'heatmap') {
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
