import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

// import SearchMatch from '../search/search-match';
// import Tooltip from '../../../../components/tooltip/tooltip-container';

const Rows = ({
  cellSize,
  contextMenu,
  dimensions,
  fontSize,
  handleClick,
  hideTooltip,
  names,
  openContextMenu,
  // searchMatches,
  showTooltip,
  // tooltip,
}) => {
  const textOffset = Math.round((cellSize / 2) - (fontSize / 3));
  return (
    <>
      {contextMenu}
      {/* <Tooltip
        isOpen={tooltip.open}
        name="row-tooltip"
        placement={tooltip.placement}
      >
        {tooltip.text}
      </Tooltip> */}
      <div
        style={{
          backgroundColor: 'pink',
          height: dimensions.scrollContainerHeight,
          overflow: 'hidden',
          position: 'absolute',
          top: 100,
          width: 100,
        }}
      >
        <div
          style={{
            height: dimensions.scrollContentHeight,
            position: 'relative',
            top: 0,
            width: 100,
          }}
        >
          {
            names.map((name, i) => {
              const y = Math.round(i * cellSize);
              return (
                <Fragment key={`row-${name.original}`}>
                  {/* <SearchMatch
                    cellSize={cellSize}
                    direction="row"
                    key={`${name.original}-match`}
                    name={name.original}
                    openContextMenu={openContextMenu}
                    searchMatches={searchMatches}
                    position={i}
                  /> */}
                  <div
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
                      alignItems: 'center',
                      display: 'flex',
                      fontSize,
                      height: cellSize,
                      position: 'absolute',
                      right: '2px',
                      top: y,
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
      </div>
    </>
  );
};

Rows.propTypes = {
  cellSize: PropTypes.number.isRequired,
  contextMenu: PropTypes.node.isRequired,
  dimensions: PropTypes.shape({
    scrollContainerHeight: PropTypes.number,
    scrollContentHeight: PropTypes.number,
    scrollTop: PropTypes.number,
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
  searchMatches: PropTypes.shape({}).isRequired,
  showTooltip: PropTypes.func.isRequired,
  /* tooltip: PropTypes.shape({
    open: PropTypes.bool,
    placement: PropTypes.shape({}),
    text: PropTypes.string,
  }).isRequired, */
};

export default Rows;
