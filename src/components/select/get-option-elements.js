const getOptionElements = (parent, node) => {
  if (!getOptionElements.optionCache) {
    getOptionElements.optionCache = parent.querySelectorAll('.select__option');
  }

  let index = -1;
  if (node) {
    for (let i = 0; i < getOptionElements.optionCache.length; i += 1) {
      if (node === getOptionElements.optionCache[i]) {
        index = i;
        break;
      }
    }
  }

  return {
    elements: getOptionElements.optionCache,
    next: index < getOptionElements.optionCache.length - 1 ? index + 1 : null,
    previous: index > 0 ? index - 1 : null,
  };
};

export default getOptionElements;
