import PropTypes from 'prop-types';
import React from 'react';

import Tooltip from '../../tooltip/tooltip-container';
import { TableBodyTooltip as StyledTableBodyTooltip } from './table-body-style';

const TableTooltip = ({
  minHeight,
  tooltip,
}) => (
  <Tooltip
    isOpen={tooltip.show}
    name="table-tooltip"
    padding={false}
    placement={{
      horizontal: 'left',
      vertical: 'top',
      x: tooltip.x,
      y: tooltip.y,
    }}
  >
    <StyledTableBodyTooltip style={{ minHeight }}>
      {tooltip.content}
    </StyledTableBodyTooltip>
  </Tooltip>
);

TableTooltip.propTypes = {
  minHeight: PropTypes.number.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string,
    show: PropTypes.bool.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default TableTooltip;
