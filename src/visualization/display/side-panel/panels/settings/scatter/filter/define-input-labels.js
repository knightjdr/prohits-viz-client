const defineInputLabels = (analysisType, abundanceColumn, axisLabels) => {
  if (analysisType === 'condition-condition') {
    return {
      x: `${axisLabels.x} - ${abundanceColumn}`,
      y: `${axisLabels.y} - ${abundanceColumn}`,
    };
  } if (analysisType === 'specificity') {
    return {
      x: abundanceColumn,
      y: 'specificity',
    };
  }
  return {
    x: 'x',
    y: 'y',
  };
};

export default defineInputLabels;
