export const storageSupport = () => {
  try {
    const test = 'test-storage';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

export const getLocalStorage = (key) => {
  if (storageSupport) {
    return localStorage.getItem(key);
  }
  return undefined;
};

export const setLocalStorage = (key, value) => {
  if (storageSupport) {
    return localStorage.setItem(key, value);
  }
  return undefined;
};
