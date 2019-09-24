// Check if the first array contains the second.
const arrayContains = (arr1, arr2) => (
  arr2.every(elem => arr1.includes(elem))
);

export default arrayContains;
