const convertArrayToObject = (arr) => (
  arr.reduce((accum, item) => ({
    ...accum,
    [item]: true,
  }), {})
);

export default convertArrayToObject;
