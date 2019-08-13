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
    ? (
      <rect
        data-name={name}
        fill="#ffee58"
        height="100"
        onContextMenu={openContextMenu}
        width={cellSize}
        x={xPosition * cellSize}
        y="0"
      />
    )
    : null
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
