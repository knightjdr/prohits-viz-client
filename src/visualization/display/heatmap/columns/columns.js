import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Reference from './reference';
import SearchMatch from '../search/search-match';
import SortMatch from './sort-match';
import Tooltip from '../../../../components/tooltip/tooltip-container';

import './columns.css';

const Columns = ({
  cellSize,
  contextMenu,
  dimensions,
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
}) => (
  <>
    {contextMenu}
    {sortingNotification}
    <Tooltip
      isOpen={tooltip.open}
      name="column-tooltip"
      placement={tooltip.placement}
    >
      {tooltip.text}
    </Tooltip>
    <div
      className="heatmap__columns-container"
      style={{ width: dimensions.scrollContainerWidth }}
    >
      {
          names.map((name, i) => {
            const x = i * cellSize;
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
                <div
                  className="heatmap__column"
                  data-name={name.original}
                  data-trimmed={name.trimmed}
                  key={name.original}
                  onClick={handleClick}
                  onContextMenu={openContextMenu}
                  onKeyPress={showTooltip}
                  onMouseEnter={showTooltip}
                  onMouseLeave={hideTooltip}
                  role="button"
                  style={{
                    fontSize,
                    width: cellSize,
                    left: x,
                  }}
                  tabIndex={0}
                >
                  {name.text}
                </div>
              </Fragment>
            );
          })
        }
    </div>
  </>
);

Columns.defaultProps = {
  reference: null,
  sortBy: null,
  sortDirection: null,
  sortingNotification: null,
};

Columns.propTypes = {
  cellSize: PropTypes.number.isRequired,
  contextMenu: PropTypes.node.isRequired,
  dimensions: PropTypes.shape({
    scrollContainerWidth: PropTypes.number,
  }).isRequired,
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
