import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import removeDuplicates from '../../../../../../utils/remove-duplicates';

const calculateHeight = (customizations, legend) => {
  const points = customizations.length + legend.length;
  return points * 30;
};

const getCustomColors = (customizations) => {
  const colors = removeDuplicates(Object.values(customizations).map((point) => point.color));
  return colors.map((color, index) => ({ color, text: `custom group ${index + 1}` }));
};

const ScatterLegend = ({
  customizations,
  legend,
}) => {
  const customizationColors = getCustomColors(customizations);
  const height = calculateHeight(customizationColors, legend);
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="200"
      viewBox={`0 0 200 ${height}`}
    >
      {
        [...legend, ...customizationColors].map((dot, index) => {
          const y = (index * 30) + 15;
          return (
            <Fragment key={dot.color}>
              <circle
                cx={20}
                cy={y}
                fill={dot.color}
                r={6}
              />
              <text
                dominantBaseline="middle"
                x={35}
                y={y + 1}
              >
                {dot.text}
              </text>
            </Fragment>
          );
        })
      }
    </svg>
  );
};

ScatterLegend.propTypes = {
  customizations: PropTypes.shape({}).isRequired,
  legend: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default ScatterLegend;
