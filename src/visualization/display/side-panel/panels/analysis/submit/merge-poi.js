import removeDuplicates from '../../../../../../utils/remove-duplicates';
import orderArrayBySequence from '../../../../../../utils/order-array-by-sequence';

const mergePOI = (poi, names) => {
  const arr = [];
  Object.entries(names).forEach(([key, values]) => {
    arr.push(...orderArrayBySequence(values, poi[key]));
  });
  return removeDuplicates(arr);
};

export default mergePOI;
