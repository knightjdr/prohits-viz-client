import PropTypes from 'prop-types';
import React from 'react';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../../components/buttons/icon/button';

import './deletion.css';

const defineClassName = (type) => (
  type === 'column'
    ? 'heatmap__deletion heatmap__deletion-column'
    : 'heatmap__deletion heatmap__deletion-row'
);

const Deletion = ({
  cellSize,
  fontSize,
  handleDelete,
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
          className="heatmap__deletion-button-container"
          key={item}
          style={{
            fontSize,
            height: cellSize,
            width: cellSize,
          }}
        >
          <IconButton
            data-index={index}
            icon={faTimes}
            kind="warning"
            onClick={handleDelete}
          />
        </span>
      ))
    }
  </div>
);

Deletion.propTypes = {
  cellSize: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
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

export default Deletion;
