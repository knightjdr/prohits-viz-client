const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = (a) => a === undefined || a >= primaryFilter;
  const lte = (a) => a === undefined || a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

export default defineScoreCriterion;
