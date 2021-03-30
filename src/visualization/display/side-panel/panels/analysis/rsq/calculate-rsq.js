import stats from '../../../../../../utils/stats';

const calculateRSQ = (x, y) => {
  const mean = {
    x: stats.mean(x),
    y: stats.mean(y),
  };

  let numerator = 0;
  let denominatorA = 0;
  let denominatorB = 0;
  x.forEach((value, i) => {
    numerator += (value - mean.x) * (y[i] - mean.y);
    denominatorA += (value - mean.x) ** 2;
    denominatorB += (y[i] - mean.y) ** 2;
  });

  // In the case of one variable have zero variance, the correlation is meaningless and 0/0
  // or NaN will be returned. These cases are returned as 0 instead.
  if (denominatorA === 0 || denominatorB === 0) {
    return 0;
  }

  const corr = numerator / (Math.sqrt(denominatorA) * Math.sqrt(denominatorB));
  return corr ** 2;
};

export default calculateRSQ;
