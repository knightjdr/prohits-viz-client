const parseString = (string, type) => {
  if (type === 'text/csv') {
    return string.split(',');
  }
  return string.split('\t');
};

export default parseString;
