import { useSelector } from 'react-redux';

import defineNewOrderForSelection from './define-new-order-for-selection';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';

const useNewPOI = () => {
  const columnOrder = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const poi = useSelector((state) => selectData(state, 'poi'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));

  const defineNewPOI = (canUseUnselected = true) => ({
    columns: defineNewOrderForSelection(poi.columns, canUseUnselected ? columnOrder : []),
    rows: defineNewOrderForSelection(poi.rows, canUseUnselected ? rowOrder : []),
  });

  return defineNewPOI;
};

export default useNewPOI;
