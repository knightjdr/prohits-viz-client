/* Updates a source list by removing items going to another list and
** adding items from the target list if that list is being replaced. */
const updateSource = (list, source, target, newTarget, sortBy, replace) => {
  let newSource = source.filter(gene => !list.includes(gene));
  if (replace) {
    const notInNewTarget = target.filter(item => !newTarget.includes(item));
    newSource = [...newSource, ...notInNewTarget];
  }
  if (sortBy) {
    return newSource.sort((a, b) => sortBy[a] - sortBy[b]);
  }
  return newSource;
};

export default updateSource;
