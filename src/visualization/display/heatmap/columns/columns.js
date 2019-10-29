import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Reference from './reference';
import SearchMatch from '../search/search-match';
import SortMatch from './sort-match';
import Tooltip from '../../../../components/tooltip/tooltip-container';

const Columns = ({
  cellSize,
  contextMenu,
  fontSize,
  handleClick,
  hideTooltip,
  names,
  openContextMenu,
  reference,
  searchMatches,
  showTooltip,
  sortBy,
  sortDirection,
  sortingNotification,
  tooltip,
}) => {
  const textOffset = Math.round((cellSize / 2) - (fontSize / 3));
  return (
    <Fragment>
      {contextMenu}
      {sortingNotification}
      <Tooltip
        isOpen={tooltip.open}
        name="column-tooltip"
        placement={tooltip.placement}
      >
        {tooltip.text}
      </Tooltip>
      <g transform="translate(100 0)">
        {
          names.map((name, i) => {
            const x = (i * cellSize) + textOffset;
            return (
              <Fragment key={`column-${name.original}`}>
                <SearchMatch
                  cellSize={cellSize}
                  direction="column"
                  name={name.original}
                  openContextMenu={openContextMenu}
                  searchMatches={searchMatches}
                  position={i}
                />
                <Reference
                  cellSize={cellSize}
                  name={name.original}
                  openContextMenu={openContextMenu}
                  reference={reference}
                  xPosition={i}
                />
                <SortMatch
                  cellSize={cellSize}
                  columnIndex={i}
                  name={name.original}
                  openContextMenu={openContextMenu}
                  sortBy={sortBy}
                  sortDirection={sortDirection}
                />
                <text
                  data-name={name.original}
                  data-trimmed={name.trimmed}
                  fontSize={fontSize}
                  onClick={handleClick}
                  onContextMenu={openContextMenu}
                  onMouseEnter={showTooltip}
                  onMouseLeave={hideTooltip}
                  textAnchor="end"
                  transform={`rotate(90, ${x}, 98)`}
                  x={x}
                  y="98"
                >
                  {name.text}
                </text>
              </Fragment>
            );
          })
        }
      </g>
    </Fragment>
  );
};

Columns.defaultProps = {
  reference: null,
  sortBy: null,
  sortDirection: null,
  sortingNotification: null,
};

Columns.propTypes = {
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
  reference: PropTypes.string,
  searchMatches: PropTypes.shape({}).isRequired,
  showTooltip: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
  sortingNotification: PropTypes.node,
  tooltip: PropTypes.shape({
    open: PropTypes.bool,
    placement: PropTypes.shape({}),
    text: PropTypes.string,
  }).isRequired,
};

export default Columns;
