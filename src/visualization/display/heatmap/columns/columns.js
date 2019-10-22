import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Reference from './reference';
import SearchMatch from './search-match';
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
  search,
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
          names.reduce((textElements, name, i) => {
            textElements.push(...[
              <Reference
                cellSize={cellSize}
                key={`${name.original}-reference`}
                name={name.original}
                openContextMenu={openContextMenu}
                reference={reference}
                xPosition={i}
              />,
            ]);
            textElements.push(...[
              <SortMatch
                cellSize={cellSize}
                columnIndex={i}
                key={`${name.original}-sort`}
                name={name.original}
                openContextMenu={openContextMenu}
                sortBy={sortBy}
                sortDirection={sortDirection}
              />,
              <SearchMatch
                cellSize={cellSize}
                key={`${name.original}-match`}
                name={name.original}
                openContextMenu={openContextMenu}
                search={search}
                xPosition={i}
              />,
            ]);
            const x = (i * cellSize) + textOffset;
            textElements.push(
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
                transform={`rotate(90, ${x}, 98)`}
                x={x}
                y="98"
              >
                {name.text}
              </text>,
            );
            return textElements;
          }, [])
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
  search: PropTypes.shape({
    columns: PropTypes.shape({}),
    match: PropTypes.bool,
    term: PropTypes.string,
  }).isRequired,
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
