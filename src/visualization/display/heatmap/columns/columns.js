import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

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
}) => {
  const textOffset = Math.round((cellSize / 2) - (fontSize / 3));
  return (
    <Fragment>
      {contextMenu}
      <g transform="translate(100 0)">
        {
          names.reduce((textElements, name, i) => {
            // 98px is used as the height of the text to give a bit of bottom padding.
            const x = (i * cellSize) + textOffset;
            if (
              search.term
              && search.match
              && search.columns[name.original]
            ) {
              textElements.push(
                <rect
                  data-name={name.original}
                  fill="#4caf50"
                  height="100"
                  key={`${name.original}-match`}
                  onContextMenu={openContextMenu}
                  width={cellSize}
                  x={i * cellSize}
                  y="0"
                />,
              );
            }
            if (reference === name.original) {
              textElements.push(
                <rect
                  data-name={name.original}
                  fill="#90afc5"
                  height="100"
                  key={`${name.original}-reference`}
                  onContextMenu={openContextMenu}
                  width={cellSize}
                  x={i * cellSize}
                  y="0"
                />,
              );
            }
            textElements.push(
              <text
                data-name={name.original}
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
};

export default Columns;
