const sortTarget = (arr, sortMap) => {
  if (sortMap) {
    return arr.sort((a, b) => sortMap[a] - sortMap[b]);
  }
  return arr;
};

export default sortTarget;
