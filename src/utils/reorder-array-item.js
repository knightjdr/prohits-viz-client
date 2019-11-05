const reorderArrayItem = (arr, from, to) => {
  const reordered = [...arr];
  reordered.splice(to, 0, reordered.splice(from, 1)[0]);
  return reordered;
};

export default reorderArrayItem;
