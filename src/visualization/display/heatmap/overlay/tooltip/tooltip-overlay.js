import PropTypes from 'prop-types';
import React from 'react';

import Tooltip from '../../../../../components/tooltip/tooltip-container';

const TooltipOverlay = ({
  tooltip,
}) => (
  <Tooltip
    isOpen={tooltip.open}
    name="cell-tooltip"
    placement={{
      horizontal: 'left',
      vertical: 'center',
      ...tooltip.position,
    }}
  >
    {tooltip.text}
  </Tooltip>
);

TooltipOverlay.propTypes = {
  tooltip: PropTypes.shape({
    open: PropTypes.bool,
    position: PropTypes.shape({}),
    text: PropTypes.node,
  }).isRequired,
};

export default TooltipOverlay;
