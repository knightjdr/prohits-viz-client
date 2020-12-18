export const ADD_SNAPSHOT = 'ADD_SNAPSHOT';
export const REMOVE_SNAPSHOT = 'REMOVE_SNAPSHOT';

export const addSnapshot = (id, name, content) => ({
  ...content,
  id,
  name,
  type: ADD_SNAPSHOT,
});

export const removeSnapshot = (name) => ({
  name,
  type: REMOVE_SNAPSHOT,
});
