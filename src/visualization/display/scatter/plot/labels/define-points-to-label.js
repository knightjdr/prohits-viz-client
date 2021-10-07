import round from '../../../../../utils/round';

const calculateTextGap = (point, customization, scale, defaultRadius) => {
  const radius = point.radius || defaultRadius;
  let textGap = radius + 4;
  if (customization) {
    if (customization.radius) {
      textGap = customization.radius + 4;
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
        dy: round((scaledFontSize * 1.2) / 3, 2),
        fontSize: round(scaledFontSize * 1.2, 2),
        label: point.label,
        style: {
          fontWeight: 'bold',
        },
        x: point.x + calculateTextGap(point, customization[point.label], scale, radius),
        y: axisLength - point.y,
      });
    } else if (labels[point.label]) {
      pointsWithLabels.push({
        dy: round(scaledFontSize / 3, 2),
        fontSize: scaledFontSize,
        label: point.label,
        style: {
          fontWeight: 'normal',
        },
        x: point.x + calculateTextGap(point, customization[point.label], scale, radius),
        y: axisLength - point.y,
      });
    }
  });

  return pointsWithLabels;
};

export default definePointsToLabel;
