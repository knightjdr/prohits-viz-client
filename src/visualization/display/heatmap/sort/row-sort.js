import config from '../config';

// If the difference between two pairs is zero, sort by string,
export const sortPairByLocale = (value, a, b) => (
  value !== 0 ? value : a.localeCompare(b, 'en', { sensitivity: 'base' })
);

/* Sort functions for row list. Assumes each row item has a data object with
** a numeric 'value' prop and a 'name' prop for fallback sorting when the
** value of 'a' and 'b' is the same. */
const rowSort = (list, sortBy, direction, ref) => {
  const { sortDelta } = config;
  const order = [...Array(list.length).keys()];

  if (direction === 'asc' && typeof ref === 'number') {
    order.sort((a, b) => {
      // Set reference to a small value to avoid division by zero.
      const refA = list[a].data[ref].value === 0 ? sortDelta : list[a].data[ref].value;
      const refB = list[b].data[ref].value === 0 ? sortDelta : list[b].data[ref].value;
      const sortValue = (list[a].data[sortBy].value / refA) - (list[b].data[sortBy].value / refB);
      return sortPairByLocale(sortValue, list[a].name, list[b].name);
    });
  } else if (direction === 'asc') {
    order.sort((a, b) => {
      const sortValue = list[a].data[sortBy].value - list[b].data[sortBy].value;
      return sortPairByLocale(sortValue, list[a].name, list[b].name);
    });
  } else if (direction === 'desc' && typeof ref === 'number') {
    order.sort((a, b) => {
      // Set reference to a small value to avoid division by zero.
      const refA = list[a].data[ref].value === 0 ? sortDelta : list[a].data[ref].value;
      const refB = list[b].data[ref].value === 0 ? sortDelta : list[b].data[ref].value;
      const sortValue = (list[b].data[sortBy].value / refB) - (list[a].data[sortBy].value / refA);
      return sortPairByLocale(sortValue, list[b].name, list[a].name);
    });
  } else {
    order.sort((a, b) => {
      const sortValue = list[b].data[sortBy].value - list[a].data[sortBy].value;
      return sortPairByLocale(sortValue, list[b].name, list[a].name);
    });
  }

  return order;
};

export default rowSort;
