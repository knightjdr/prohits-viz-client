// Order the first array by the element order of the second.
const arrayOrderBy = (arr1, arr2) => (
  arr2.map(index => arr1[index])
);

export default arrayOrderBy;
