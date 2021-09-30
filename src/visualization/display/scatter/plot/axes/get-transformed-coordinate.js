const reMatrix = /matrix\(([-.\d]+), ([-.\d]+), ([-.\d]+), ([-.\d]+), ([-.\d]+), ([-.\d]+)\)/;

const getTransformedCoordinate = (x, y, matrixTransformation) => {
  if (!matrixTransformation) {
    return y;
  }
  const [, a, b, c, d, e, f] = matrixTransformation.match(reMatrix);
  return {
    a,
    b,
    c,
    d,
    e,
    f,
  };
};

export const getTransformedYCoordinate = (x, y, matrixTransformation) => {
  if (!matrixTransformation) {
    return y;
  }
  const { b, d, f } = getTransformedCoordinate(x, y, matrixTransformation);
  return (b * x) + (d * y) + Number(f);
};

export const getTransformedXCoordinate = (x, y, matrixTransformation) => {
  if (!matrixTransformation) {
    return x;
  }
  const { a, c, e } = getTransformedCoordinate(x, y, matrixTransformation);
  return (a * x) + (c * y) + Number(e);
};
