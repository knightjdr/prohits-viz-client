import PropTypes from 'prop-types';
import React from 'react';

const AxisX = ({
  axisLength,
  fontSize,
  handleMouseDown,
  handleWheel,
  label,
  scale,
  ticks,
  transform,
}) => {
  const tickFontSize = fontSize / scale;
  const tickLabelPosition = 28 / scale;
  const tickLength = 10 / scale;
  const tickWidth = 2 / scale;
  return (
    <g
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      transform={`translate(100 ${axisLength})`}
    >
      <defs>
        <clipPath id="plot_xaxis_text_clip">
          <rect
            height={100}
            width={axisLength + 26}
            x={-13}
            y={0}
          />
        </clipPath>
        <clipPath id="plot_xaxis_tick_clip">
          <rect
            height={100}
            width={axisLength + 2}
            x={-1}
            y={0}
          />
        </clipPath>
      </defs>
      <g id="plot_xaxis_wheel">
        <rect
          height={100}
          opacity={0}
          width={axisLength}
          x={0}
          y={0}
        />
      </g>
      <line
        className="scatterplot__axis"
        x1={0}
        x2={axisLength}
        y1={0}
        y2={0}
      />
      <g clipPath="url(#plot_xaxis_tick_clip)">
        <g transform={transform}>
          {
            ticks.map((tick) => (
              <g
                className="scatterplot__tick"
                key={`x-tick-${tick.key}`}
              >
                <line
                  strokeWidth={tickWidth}
                  x1={tick.x}
                  x2={tick.x}
                  y1={0}
                  y2={tickLength}
                />
              </g>
            ))
          }
        </g>
      </g>
      <g clipPath="url(#plot_xaxis_text_clip)">
        <g transform={transform}>
          {
            ticks.map((tick) => (
              <g
                className="scatterplot__tick"
                key={`x-text-${tick.key}`}
              >
                <text
                  fontSize={`${tickFontSize}px`}
                  textAnchor="middle"
                  x={tick.x}
                  y={tickLabelPosition}
                >
                  {tick.label}
                </text>
              </g>
            ))
          }
        </g>
      </g>
      <text
        textAnchor="middle"
        x={(axisLength / 2)}
        y={70}
      >
        {label}
      </text>
    </g>
  );
};

AxisX.propTypes = {
  axisLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleWheel: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
  ticks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.number,
      x: PropTypes.number,
    }),
  ).isRequired,
  transform: PropTypes.string.isRequired,
};

export default AxisX;
