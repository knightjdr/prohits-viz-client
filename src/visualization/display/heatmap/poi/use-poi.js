import { useDispatch, useSelector } from 'react-redux';

import removeDuplicates from '../../../../utils/remove-duplicates';
import { selectOrderedColumnNames } from '../../../../state/selector/visualization/column-selector';
import selectRows from '../../../../state/selector/visualization/row-selector';
import { selectData } from '../../../../state/selector/visualization/data-selector';
import { updatePOI } from '../../../../state/visualization/analysis/poi-actions';

const findIndex = (item, arr) => (
  Number.isInteger(item) ? item : arr.indexOf(item)
);

const findIndices = (items, arr) => {
  const itemArr = Array.isArray(items) ? items : [items];
  const indices = itemArr.reduce((accum, item) => {
    const index = findIndex(item, arr);
    if (index >= 0) {
      return [...accum, index];
    }
    return accum;
  }, []);
  return [...new Set(indices)];
};

const usePOI = (poiType) => {
  const dispatch = useDispatch();
  const columnNames = useSelector(state => selectOrderedColumnNames(state));
  const poi = useSelector(state => selectData(state, 'poi'));
  const rowNames = useSelector(state => selectRows(state));

  const names = {
    columns: columnNames,
    rows: rowNames,
  };

  const append = (items, appendType) => {
    const type = poiType || appendType;
    const targetList = poi[type];
    const indices = findIndices(items, names[type]);
    if (indices.length > 0) {
      const updatedPOI = {
        [type]: removeDuplicates([...targetList, ...indices]),
      };
      dispatch(updatePOI(updatedPOI));
    }
  };

  const replace = (items, replaceType) => {
    const type = poiType || replaceType;
    const indices = findIndices(items, names[type]);
    if (indices.length > 0) {
      const updatedPOI = {
        [type]: removeDuplicates(indices),
      };
      dispatch(updatePOI(updatedPOI));
    }
  };

  return {
    append,
    replace,
  };
};

export default usePOI;
