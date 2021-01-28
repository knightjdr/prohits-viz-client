import PropTypes from 'prop-types';
import React from 'react';

const Text = ({
  hoveredText,
  labels,
}) => (
  <g transform="scale(0.95)">
    <filter id="dropshadow" height="130%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
      <feOffset dx="1" dy="2" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    {
      labels.map((label) => (
        <text
          className="circheatmap__text"
          fontSize={16}
          key={label.id}
          style={label.style}
          transform={`rotate(90 ${label.x} ${label.y})`}
          x={label.x + 2}
          y={label.y}
        >
          {`${label.string}`}
        </text>
      ))
    }
    {
      hoveredText
      && (
        <g
          className="circheatmap__text_hovered"
          key={`hovered-${hoveredText.id}`}
          transform={`rotate(90 ${hoveredText.x} ${hoveredText.y})`}
        >
          <rect
            fill="#fff"
            height="24"
            rx="2"
            ry="2"
            style={{ filter: 'url(#dropshadow)' }}
            x={hoveredText.x}
            y={hoveredText.y - 17}
            width={hoveredText.width}
          />
          <text
            fontSize="16px"
            x={hoveredText.x + 2}
            y={hoveredText.y}
          >
            {`${hoveredText.string}`}
          </text>
        </g>
      )
    }
  </g>
);

Text.defaultProps = {
  hoveredText: null,
};

Text.propTypes = {
  hoveredText: PropTypes.shape({
    id: PropTypes.string,
    string: PropTypes.string,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      string: PropTypes.string,
      width: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default Text;
