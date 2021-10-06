const calculateTextGap = (point, customization, scale, defaultRadius) => {
  let radius = point.radius || defaultRadius;
  let textGap = 8;
  if (customization) {
    if (customization.radius) {
      ({ radius } = customization);
      textGap = radius + 4;
    }
  }
  return textGap / scale;
};

const definePointsToLabel = (options) => {
  const {
    axisLength,
    customization,
    fontSize,
    points,
    labels,
    radius,
    scale,
    searchLabels,
  } = options;

  if (Object.keys(labels).length < 1 && Object.keys(searchLabels).length < 1) {
    return [];
  }

  const scaledFontSize = fontSize / scale;

  const pointsWithLabels = [];
  points.forEach((point) => {
    if (searchLabels[point.label]) {
      pointsWithLabels.push({
        dy: (scaledFontSize * 1.2) / 3,
        fontSize: scaledFontSize * 1.2,
        label: point.label,
        style: {
          fontWeight: 'bold',
        },
        x: point.x + calculateTextGap(point, customization, scale, radius),
        y: axisLength - point.y,
      });
    } else if (labels[point.label]) {
      pointsWithLabels.push({
        dy: scaledFontSize / 3,
        fontSize: scaledFontSize,
        label: point.label,
        style: {
          fontWeight: 'normal',
        },
        x: point.x + calculateTextGap(point, customization, scale, radius),
        y: axisLength - point.y,
      });
    }
  });

  return pointsWithLabels;
};

export default definePointsToLabel;
