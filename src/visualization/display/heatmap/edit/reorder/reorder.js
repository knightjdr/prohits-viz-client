import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../components/input/text/input-text-container';

import './reorder.css';

const defineClassName = type => (
  type === 'column'
    ? 'heatmap__reorder heatmap__reorder-column'
    : 'heatmap__reorder heatmap__reorder-row'
);

const Reorder = ({
  cellSize,
  fontSize,
  handleBlur,
  handleFocus,
  handleReorder,
  items,
  position,
  type,
}) => (
  <div
    className={defineClassName(type)}
    style={position}
  >
    {
      items.map((item, index) => (
        <span
          className="heatmap__reorder-container"
          key={item}
          style={{
            maxHeight: cellSize,
            maxWidth: cellSize,
          }}
        >
          <Input
            id={`reorder-${index}`}
            max={items.length}
            min={1}
            onChange={handleReorder}
            onBlur={handleBlur}
            onFocus={handleFocus}
            step={1}
            style={{
              fontSize,
              height: cellSize,
              width: cellSize,
            }}
            type="number"
            value={index + 1}
          />
        </span>
      ))
    }
  </div>
);

Reorder.propTypes = {
  cellSize: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleReorder: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  position: PropTypes.shape({
    height: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default Reorder;
