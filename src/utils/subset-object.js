const subsetObject = (source, keys) => (
  keys.reduce((accum, key) => {
    const newProp = {};
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      newProp[key] = source[key];
    }
    return {
      ...accum,
      ...newProp,
    };
  }, {})
);

export default subsetObject;
