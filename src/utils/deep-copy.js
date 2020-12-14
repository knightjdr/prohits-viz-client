const deepCopy = (obj) => (
  obj ? JSON.parse(JSON.stringify(obj)) : null
);

export default deepCopy;
