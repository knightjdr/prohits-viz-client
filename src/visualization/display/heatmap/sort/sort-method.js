import config from '../config';

// If the difference between two pairs is zero, sort by string,
export const sortPairByLocale = (value, a, b) => (
  value !== 0 ? value : a.localeCompare(b, 'en', { sensitivity: 'base' })
);

/* Sort methods for row list. Assumes each row item has a data object with
** a numeric 'value' prop and a 'name' prop for fallback sorting when the
** value of 'a' and 'b' is the same. */
const sortMethod = (sortBy, direction, ref) => {
  const { sortDelta } = config;
  if (direction === 'asc' && typeof ref === 'number') {
    return (a, b) => {
      // Set reference to a small value to avoid division by zero.
      const refA = a.data[ref].value === 0 ? sortDelta : a.data[ref].value;
      const refB = b.data[ref].value === 0 ? sortDelta : b.data[ref].value;
      const sortValue = (a.data[sortBy].value / refA) - (b.data[sortBy].value / refB);
      return sortPairByLocale(sortValue, a.name, b.name);
    };
  } if (direction === 'asc') {
    return (a, b) => {
      const sortValue = a.data[sortBy].value - b.data[sortBy].value;
      return sortPairByLocale(sortValue, a.name, b.name);
    };
  } if (direction === 'desc' && typeof ref === 'number') {
    return (a, b) => {
      // Set reference to a small value to avoid division by zero.
      const refA = a.data[ref].value === 0 ? sortDelta : a.data[ref].value;
      const refB = b.data[ref].value === 0 ? sortDelta : b.data[ref].value;
      const sortValue = (b.data[sortBy].value / refB) - (a.data[sortBy].value / refA);
      return sortPairByLocale(sortValue, b.name, a.name);
    };
  }
  return (a, b) => {
    const sortValue = b.data[sortBy].value - a.data[sortBy].value;
    return sortPairByLocale(sortValue, b.name, a.name);
  };
};

export default sortMethod;
