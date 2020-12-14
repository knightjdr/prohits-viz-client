import convertArrayToObject from '../../../../utils/convert-array-to-object';

const defineAvailableIndices = (suppliedOrder, defaultIndices, storedIndices, deleted) => {
  if (suppliedOrder) {
    return suppliedOrder;
  }

  const deletedIndexLookup = convertArrayToObject(deleted);
  const filteredIndices = defaultIndices.filter((x) => !storedIndices.includes(x));
  const orderedIndices = [...storedIndices, ...filteredIndices];
  return orderedIndices.filter((index) => !deletedIndexLookup[index]);
};

export default defineAvailableIndices;
