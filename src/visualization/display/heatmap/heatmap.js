import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// import Annotations from './annotations/annotations-container';
// import Canvas from './canvas/canvas-container';
// import Columns from './columns/columns-container';
// import Deletion from './edit/deletion/deletion-container';
// import Markers from './markers/markers-container';
// import NavControls from './nav-controls/nav-controls-container';
// import Reorder from './edit/reorder/reorder-container';
import Rows from './rows/rows-container';
// import Overlay from './overlay/overlay-container';

import './heatmap.css';

const Heatmap = forwardRef((
  {
    // showHorizontalArrows,
    // showVerticalArrows,
    scroll,
    translation,
    wrapper,
  },
  ref,
) => (
  <div
    className="heatmap"
    ref={ref.pageRef}
    style={{
      transform: `translate(${translation}px)`,
    }}
  >
    <div
      style={{
        backgroundColor: 'aqua',
        height: wrapper.height,
        position: 'relative',
        width: wrapper.width,
      }}
    >
      <div
        className="heatmap__scroll-container"
        ref={ref.scrollRef}
        style={{
          backgroundColor: 'green',
          height: scroll.containerHeight,
          transform: 'translate(100px, 100px)',
          width: scroll.containerWidth,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(#e66465, #9198e5)',
            height: scroll.contentHeight,
            width: scroll.contentWidth,
          }}
        />
      </div>
      <Rows />
    </div>
    {/* <svg
      id="svg-main"
      height={wrapperHeight}
      width={wrapperWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Canvas />
      <Columns />
      <Overlay />
      <Markers />
      <Annotations />
    </svg> */}
    {/* <Deletion heatmapRef={ref} />
    <Reorder heatmapRef={ref} />
    <NavControls
      direction="vertical"
      offsetVertical={showHorizontalArrows}
      show={showVerticalArrows}
    />
    <NavControls
      direction="horizontal"
      show={showHorizontalArrows}
    /> */}
  </div>
));

Heatmap.propTypes = {
  // showHorizontalArrows: PropTypes.bool.isRequired,
  // showVerticalArrows: PropTypes.bool.isRequired,
  scroll: PropTypes.shape({
    containerHeight: PropTypes.number,
    containerWidth: PropTypes.number,
    contentHeight: PropTypes.number,
    contentWidth: PropTypes.number,
  }).isRequired,
  translation: PropTypes.number.isRequired,
  wrapper: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

export default Heatmap;
