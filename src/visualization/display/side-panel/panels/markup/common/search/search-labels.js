const createRegex = (searchTerm) => (
  new RegExp(searchTerm, 'i')
);

const searchArray = (regex, arr) => (
  arr.reduce((accum, item) => {
    if (regex.test(item)) {
      return {
        ...accum,
        [item]: true,
      };
    }
    return accum;
  }, {})
);

const searchLabels = (labels, searchTerm) => {
  if (searchTerm === '') {
    return {
      labels: {},
      match: false,
    };
  }

  const searchRegex = createRegex(searchTerm);
  const matches = searchArray(searchRegex, labels);
  return {
    labels: matches,
    match: Object.keys(matches).length > 0,
  };
};

export default searchLabels;
