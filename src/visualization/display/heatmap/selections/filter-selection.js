/* Filters a input list based on each items presence in the source
** and target list. However, they are only removed from the target list
** when replace = false. */
const filterSelection = (arr, source, target, replace) => {
  if (replace) {
    return arr.filter(item => source.includes(item) || target.includes(item));
  }
  return arr.filter(item => source.includes(item) && !target.includes(item));
};

export default filterSelection;
