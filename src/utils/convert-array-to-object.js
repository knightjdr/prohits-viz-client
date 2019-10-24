const convertArrayToObject = arr => (
  arr.reduce(((accum, item, index) => {
    const newGene = {};
    newGene[item] = index;
    return { ...accum, ...newGene };
  }), {})
);

export default convertArrayToObject;
