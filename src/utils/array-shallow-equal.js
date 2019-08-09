// Checks if two arrays have the same elements, regardless of order.
export const arrayShallowEqual = (arr1, arr2) => {
  const len = arr1.length;
  if (arr2.length !== len) {
    return false;
  }
  return arr1.every(item => arr2.includes(item));
};

// Checks if two arrays have the same elements in the same order.
export const arrayShallowEqualExact = (arr1, arr2) => {
  const len = arr1.length;
  if (arr2.length !== len) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
};
