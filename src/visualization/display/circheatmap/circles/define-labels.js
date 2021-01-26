import percToCoord from '../utils/percent-to-coordinate';
import roundNearest from '../../../../utils/round-nearest';
import textLimits from './text-limits';
import textSize from '../../../../utils/text-size';

/* The plot is being rotated -90 in main-circHeatmap-svg, so the "x" and
** and "y" here are reversed. I'm intentionaly leaving it like this
** because it makes calculating the text positions easier. */
const textPosition = (data, radius) => {
  let cumulativePercent = 0;
  const percent = roundNearest(1 / data.length, 0.0001);
  const halfPercent = percent / 2;
  return data.map((datum) => {
    cumulativePercent += percent;
    const textPoint = percToCoord(cumulativePercent - halfPercent, radius);
    const width = textSize(datum, 'Lato', '16px');
    const yOffset = cumulativePercent > 0.5;
    return {
      id: datum,
      string: datum,
      width,
      x: textLimits.x(textPoint[0], radius, 8),
      y: cumulativePercent < 0.25 || cumulativePercent > 0.75
        ? textLimits.y(textPoint[1] - 8, yOffset, radius, width)
        : textLimits.y(textPoint[1] + 8, yOffset, radius, width),
      yOffset,
    };
  });
};

export default textPosition;
