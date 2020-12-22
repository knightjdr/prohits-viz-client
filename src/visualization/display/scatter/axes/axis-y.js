import PropTypes from 'prop-types';
import React from 'react';

const X_START = 100;

const Yaxis = ({
  axisLength,
  fontSize,
  handleMouseDown,
  handleWheel,
  label,
  scale,
  ticks,
  transform,
}) => {
  const axisLabelY = (axisLength) / 2;
  const tickFontSize = fontSize / scale;
  const tickLabelPosition = 13 / scale;
  const tickLength = 10 / scale;
  const tickStart = X_START / scale;
  const tickWidth = 2 / scale;
  return (
    <g
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
    >
      <defs>
        <clipPath id="plot_yaxis_text_clip">
          <rect
            height={axisLength + 50}
            width={100}
            x={0}
            y={-25}
          />
        </clipPath>
        <clipPath id="plot_yaxis_tick_clip">
          <rect
            height={axisLength + 2}
            width={100}
            x={0}
            y={-1}
          />
        </clipPath>
      </defs>
      <g id="plot_yaxis_wheel">
        <rect
          height={axisLength}
          opacity={0}
          width={100}
          x={0}
          y={0}
        />
      </g>
      <line
        className="scatterplot__axis"
        x1={X_START}
        x2={X_START}
        y1={0}
        y2={axisLength}
      />
      <g clipPath="url(#plot_yaxis_tick_clip)">
        <g transform={transform}>
          {
            ticks.map((tick) => {
              const yPosition = axisLength - tick.y;
              return (
                <g
                  className="scatterplot__tick"
                  key={`y-tick-${tick.key}`}
                >
                  <line
                    strokeWidth={tickWidth}
                    x1={tickStart}
                    x2={tickStart - tickLength}
                    y1={yPosition}
                    y2={yPosition}
                  />
                </g>
              );
            })
          }
        </g>
      </g>
      <g clipPath="url(#plot_yaxis_text_clip)">
        <g transform={transform}>
          {
            ticks.map((tick) => {
              const yPosition = axisLength - tick.y;
              return (
                <g
                  className="scatterplot__tick"
                  key={`y-text-${tick.key}`}
                >
                  <text
                    dominantBaseline="central"
                    fontSize={`${tickFontSize}px`}
                    textAnchor="end"
                    x={tickStart - tickLabelPosition}
                    y={yPosition}
                  >
                    {tick.label}
                  </text>
                </g>
              );
            })
          }
        </g>
      </g>
      <text
        dominantBaseline="central"
        textAnchor="middle"
        transform={`rotate(-90, 10, ${axisLabelY})`}
        x={10}
        y={axisLabelY}
      >
        {label}
      </text>
    </g>
  );
};

Yaxis.propTypes = {
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

export default Yaxis;
