// Add items to target list and remove duplicates.
const addToTarget = (arr, target, replace) => {
  if (replace) {
    return [...new Set(arr)];
  }
  return [...new Set([...target, ...arr])];
};

export default addToTarget;
