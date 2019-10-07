import { useDispatch, useSelector } from 'react-redux';

import addToTarget from './add-to-target';
import filterSelection from './filter-selection';
import sortTarget from './sort-target';
import updateSource from './update-source';
import { selectState } from '../../../../state/selector/general';
import { updateSelections } from '../../../../state/visualization/data/selection-actions';

/* useSelections will remove any of the specified arr items that are not in the
** source list or that are in the target list. It will add the remaining to target list
** and remove from the source list. */
const useSelections = () => {
  const dispatch = useDispatch();

  const selection = useSelector(state => selectState(state, 'selection'));

  const setSelections = (arr, source, target, replace = false, sortBy) => {
    const newLists = {};
    const filteredArr = filterSelection(arr, selection[source], selection[target], replace);
    newLists[target] = addToTarget(filteredArr, selection[target], replace);
    newLists[target] = sortTarget(newLists[target], selection[sortBy]);
    newLists[source] = updateSource(
      filteredArr,
      selection[source],
      selection[target],
      newLists[target],
      selection[sortBy],
      replace,
    );
    dispatch(updateSelections(newLists));
  };

  return setSelections;
};

export default useSelections;
