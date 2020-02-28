import PropTypes from 'prop-types';
import React from 'react';

const BodyCell = ({
  alignment,
  className,
  content,
  showOverflow,
}) => (
  <div
    className={`table__body-cell ${className}`}
    data-overflow={showOverflow}
    style={{ justifyContent: alignment }}
  >
    { content }
  </div>
);

BodyCell.defaultProps = {
  alignment: 'center',
  showOverflow: false,
};

BodyCell.propTypes = {
  alignment: PropTypes.string,
  className: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  showOverflow: PropTypes.bool,
};

export default BodyCell;
