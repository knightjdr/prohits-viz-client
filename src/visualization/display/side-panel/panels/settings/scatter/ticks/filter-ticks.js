import isNumber from '../../../../../../../utils/is-number';
import removeDuplicates from '../../../../../../../utils/remove-duplicates';
import sort from '../../../../../../../utils/sort';
import splitStringByCommaAndWhiteSpace from '../../../../../../../utils/split-comma-white-space';

const filterTicks = (field, value, options) => {
  const { logBase, logX, logY } = options;
  const log = { x: logX, y: logY };

  const arr = Array.isArray(value) ? value : splitStringByCommaAndWhiteSpace(value);
  let newTicks = arr
    .filter((tick) => isNumber(tick))
    .map((tick) => Number(tick));

  newTicks = removeDuplicates(newTicks);

  if (logBase !== 'none' && log[field.charAt(0)]) {
    newTicks = newTicks.filter((tick) => tick !== 0);
  }

  newTicks.sort(sort.numeric);
  return newTicks;
};

export default filterTicks;
