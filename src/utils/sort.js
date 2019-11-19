export const sortByNumber = (a, b) => (
  a - b
);

export const sortBySciNotation = (a, b) => (
  Number.parseFloat(a) - Number.parseFloat(b)
);

export const sortByString = (a, b) => (
  (a).localeCompare(b)
);
