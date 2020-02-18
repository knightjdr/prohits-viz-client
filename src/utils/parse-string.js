const ParseString = (string, type) => {
  switch (type) {
    case 'text/plain':
      return string.split('\t');
    case 'text/tab-separated-values':
      return string.split('\t');
    case 'text/csv':
      return string.split(',');
    default:
      return string;
  }
};
export default ParseString;
