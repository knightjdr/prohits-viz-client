import { nanoid } from 'nanoid';

const validateName = (name, tabs, id, prefix) => {
  if (!name) {
    return `${prefix}-${id}`;
  }

  if (!tabs.includes(name)) {
    return name;
  }

  const nameWithID = `${name}-${id}`;
  if (!tabs.includes(nameWithID)) {
    return nameWithID;
  }

  return `${name}-${nanoid()}`;
};

const defineName = (inputName, tabs, prefix = 'snapshot') => {
  const {
    availableAnalyses,
    availableSnapshots,
  } = tabs;
  const usedTabNames = [...availableAnalyses, ...availableSnapshots];

  const id = tabs[`${prefix}ID`] + 1;
  const name = validateName(inputName, usedTabNames, id, prefix);

  return {
    id,
    name,
  };
};

export default defineName;
