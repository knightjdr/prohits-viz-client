const getOptionElements = (parent, node) => {
  const options = parent.querySelectorAll('.select__option');

  let index = -1;
  if (node) {
    for (let i = 0; i < options.length; i += 1) {
      if (node === options[i]) {
        index = i;
        break;
      }
    }
  }

  return {
    elements: options,
    next: index < options.length - 1 ? index + 1 : null,
    previous: index > 0 ? index - 1 : null,
  };
};

export default getOptionElements;
