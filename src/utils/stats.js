import isNumber from './is-number';

const mean = (arr) => {
  let length = 0;
  let sum = 0;
  arr.forEach((x) => {
    if (isNumber(x)) {
      sum += Number(x);
      length += 1;
    }
  });

  if (length === 0) {
    return 0;
  }

  return sum / length;
};

export default {
  mean,
};
