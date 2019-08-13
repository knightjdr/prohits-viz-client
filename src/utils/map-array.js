/* Converts an arr to an object with each key's value
** specifying the keys position in the array */
const mapArr = arr => (
  arr.reduce(((accum, gene, index) => {
    const newGene = {};
    newGene[gene] = index;
    return { ...accum, ...newGene };
  }), {})
);

export default mapArr;
