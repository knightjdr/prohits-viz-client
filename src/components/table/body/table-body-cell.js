import PropTypes from 'prop-types';
import React from 'react';

const BodyCell = ({
  alignment,
  className,
  content,
}) => (
  <div
    className={`table__body-cell ${className}`}
    style={{ textAlign: alignment }}
  >
    { content }
  </div>
);

BodyCell.defaultProps = {
  alignment: 'center',
};

BodyCell.propTypes = {
  alignment: PropTypes.string,
  className: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default BodyCell;
