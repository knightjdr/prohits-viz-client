import convertArrayToObject from '../../../../../../../utils/convert-array-to-object';

const defineAvailableIndices = (defaultIndices, indices, deleted) => {
  const deletedIndexLookup = convertArrayToObject(deleted);
  const filteredIndices = defaultIndices.filter(x => !indices.includes(x));
  const orderedIndices = [...indices, ...filteredIndices];
  return orderedIndices.filter(index => !deletedIndexLookup[index]);
};

export default defineAvailableIndices;
