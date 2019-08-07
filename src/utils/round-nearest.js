const roundNearest = (value, round) => (
  Math.round(value / round) * round
);

export default roundNearest;
