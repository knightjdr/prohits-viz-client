export const validateArray = (testArray, defaultArray = []) => (
  Array.isArray(testArray) ? testArray : defaultArray
);

export const validateBoolean = (testValue, defaultBoolean = false) => (
  typeof testValue === 'boolean' ? testValue : defaultBoolean
);

export const validateNumber = (testValue, defaultNumber = 0) => (
  typeof testValue === 'number' ? testValue : defaultNumber
);

export const validateString = (testValue, defaultString = '') => (
  typeof testValue === 'string' ? testValue : defaultString
);
