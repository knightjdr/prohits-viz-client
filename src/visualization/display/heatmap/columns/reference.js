import PropTypes from 'prop-types';
import React from 'react';

const Reference = ({
  cellSize,
  name,
  openContextMenu,
  reference,
  xPosition,
}) => (
  reference === name
  && (
    <div
      className="heatmap__column-reference"
      data-name={name}
      onContextMenu={openContextMenu}
      style={{
        left: xPosition * cellSize,
        width: cellSize,
      }}
    />
  )
);

Reference.defaultProps = {
  reference: null,
};

Reference.propTypes = {
  cellSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  openContextMenu: PropTypes.func.isRequired,
  reference: PropTypes.string,
  xPosition: PropTypes.number.isRequired,
};

export default Reference;
