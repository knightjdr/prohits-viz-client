const isSubset = (arr, possibleSubset) => (
  possibleSubset.every(element => arr.includes(element))
);

export default isSubset;
