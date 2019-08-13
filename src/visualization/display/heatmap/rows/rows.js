import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import SearchMatch from './search-match';
import Tooltip from '../../../../components/tooltip/tooltip-container';

const Rows = ({
  cellSize,
  contextMenu,
  fontSize,
  handleClick,
  hideTooltip,
  names,
  openContextMenu,
  search,
  showTooltip,
  tooltip,
}) => {
  const textOffset = Math.round((cellSize / 2) - (fontSize / 3));
  return (
    <Fragment>
      {contextMenu}
      <Tooltip
        isOpen={tooltip.open}
        name="row-tooltip"
        placement={{ horizontal: 'right', vertical: 'bottom' }}
        position={tooltip.position}
      >
        {tooltip.text}
      </Tooltip>
      <g transform="translate(0 100)">
        {
          names.reduce((textElements, name, i) => {
            textElements.push(...[
              <SearchMatch
                cellSize={cellSize}
                key={`${name.original}-match`}
                name={name.original}
                openContextMenu={openContextMenu}
                search={search}
                yPosition={i}
              />,
            ]);
            const y = Math.round(((i + 1) * cellSize) - textOffset);
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
                x="98"
                y={y}
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
  search: PropTypes.shape({
    match: PropTypes.bool,
    rows: PropTypes.shape({}),
    term: PropTypes.string,
  }).isRequired,
  showTooltip: PropTypes.func.isRequired,
  tooltip: PropTypes.shape({
    open: PropTypes.bool,
    position: PropTypes.shape({}),
    text: PropTypes.string,
  }).isRequired,
};

export default Rows;