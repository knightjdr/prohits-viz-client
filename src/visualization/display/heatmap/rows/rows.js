import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import SearchMatch from '../search/search-match';
import Tooltip from '../../../../components/tooltip/tooltip-container';

const Rows = ({
  cellSize,
  contextMenu,
  fontSize,
  handleClick,
  hideTooltip,
  names,
  openContextMenu,
  searchMatches,
  showTooltip,
  tooltip,
}) => {
  const textOffset = Math.round((cellSize / 2) - (fontSize / 3));
  return (
    <>
      {contextMenu}
      <Tooltip
        isOpen={tooltip.open}
        name="row-tooltip"
        placement={tooltip.placement}
      >
        {tooltip.text}
      </Tooltip>
      <g transform="translate(0 100)">
        {
          names.map((name, i) => {
            const y = Math.round(((i + 1) * cellSize) - textOffset);
            return (
              <Fragment key={`row-${name.original}`}>
                <SearchMatch
                  cellSize={cellSize}
                  direction="row"
                  key={`${name.original}-match`}
                  name={name.original}
                  openContextMenu={openContextMenu}
                  searchMatches={searchMatches}
                  position={i}
                />
                <text
                  data-name={name.original}
                  data-trimmed={name.trimmed}
                  fontSize={fontSize}
                  key={name.original}
                  onClick={handleClick}
                  onContextMenu={openContextMenu}
                  onMouseEnter={showTooltip}
                  onMouseLeave={hideTooltip}
                  textAnchor="end"
                  x="98"
                  y={y}
                >
                  {name.text}
                </text>
              </Fragment>
            );
          })
        }
      </g>
    </>
  );
};

Rows.propTypes = {
  cellSize: PropTypes.number.isRequired,
  contextMenu: PropTypes.node.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  hideTooltip: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string,
      text: PropTypes.string,
      trimmed: PropTypes.bool,
    }),
  ).isRequired,
  openContextMenu: PropTypes.func.isRequired,
  searchMatches: PropTypes.shape({}).isRequired,
  showTooltip: PropTypes.func.isRequired,
  tooltip: PropTypes.shape({
    open: PropTypes.bool,
    placement: PropTypes.shape({}),
    text: PropTypes.string,
  }).isRequired,
};

export default Rows;
