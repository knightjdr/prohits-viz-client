import isObject from '../../../../../../utils/is-object';

export const copyField = (value) => {
  if (Array.isArray(value)) {
    return [...value];
  } if (isObject(value)) {
    return { ...value };
  }
  return value;
};

const copyProperties = (currentState, propertiesToCopy) => (
  Object.entries(currentState).reduce((stateAccum, [key, state]) => (
    propertiesToCopy[key]
      ? {
          ...stateAccum,
          [key]: propertiesToCopy[key].reduce((fieldAccum, field) => ({
            ...fieldAccum,
            [field]: copyField(state[field]),
          }), {}),
        }
      : stateAccum
  ), {})
);

export default copyProperties;
