import removeDuplicates from '../../../../../../utils/remove-duplicates';
import orderArrayBySequence from '../../../../../../utils/order-array-by-sequence';

const mergePOI = (poi, columnNames, rowNames) => {
  const poiColumns = orderArrayBySequence(columnNames, poi.columns);
  const poiRows = orderArrayBySequence(rowNames, poi.rows);
  return removeDuplicates([...poiColumns, ...poiRows]);
};
export default mergePOI;
