// Order the first array by the element order of the second.
const arrayOrderBy = (arr1, arr2) => {
  const orderedArr = [];
  arr2.forEach((orderIndex, index) => {
    orderedArr[index] = arr1[orderIndex];
  });

  return orderedArr;
};

export default arrayOrderBy;
