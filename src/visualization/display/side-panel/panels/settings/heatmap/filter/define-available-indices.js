import convertArrayToObject from '../../../../../../../utils/convert-array-to-object';

const defineAvailableIndices = (indices, deleted) => {
  const deletedIndexLookup = convertArrayToObject(deleted);
  return indices.filter(index => !deletedIndexLookup[index]);
};

export default defineAvailableIndices;
