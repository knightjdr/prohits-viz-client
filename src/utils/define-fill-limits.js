const defineFillLimits = (abundanceType, minAbundance, abundanceCap) => {
  const limits = {
    max: -Infinity,
    min: Infinity,
  };
  if (abundanceType === 'bidirectional') {
    limits.max = abundanceCap;
    limits.min = -abundanceCap;
  }
  if (abundanceType === 'negative') {
    limits.max = -minAbundance;
    limits.min = -abundanceCap;
  }
  if (abundanceType === 'positive') {
    limits.max = abundanceCap;
    limits.min = minAbundance;
  }
  return limits;
};

export default defineFillLimits;
