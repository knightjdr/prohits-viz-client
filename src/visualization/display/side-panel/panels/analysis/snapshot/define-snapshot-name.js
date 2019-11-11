import nanoID from 'nanoid';

const validateName = (name, tabs, id) => {
  if (!name) {
    return `snapshot-${id}`;
  }

  if (!tabs.includes(name)) {
    return name;
  }

  const nameWithID = `${name}-${id}`;
  if (!tabs.includes(nameWithID)) {
    return nameWithID;
  }

  return `${name}-${nanoID()}`;
};

const defineSnapshotName = (inputName, tabs) => {
  const { availableAnalysis, availableSnapshots, snapshotID } = tabs;
  const usedTabNames = [...availableAnalysis, ...availableSnapshots];

  const id = snapshotID + 1;
  const name = validateName(inputName, usedTabNames, id);

  return {
    id,
    name,
  };
};

export default defineSnapshotName;
