import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Annotations from './annotations/annotations-container';
import Canvas from './canvas/canvas-container';
import Columns from './columns/columns-container';
import Deletion from './edit/deletion/deletion-container';
import Markers from './markers/markers-container';
import NavControls from './nav-controls/nav-controls-container';
import Reorder from './edit/reorder/reorder-container';
import Rows from './rows/rows-container';
import Overlay from './overlay/overlay-container';

import './heatmap.css';

const Heatmap = forwardRef((
  {
    handleScroll,
    page,
    showHorizontalArrows,
    showVerticalArrows,
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
      className="heatmap__scroll-container"
      style={{
        height: wrapper.height,
        width: wrapper.width,
      }}
    >
      <Columns />
      <Rows />
      <Canvas />
      <div
        className="heatmap__scroll"
        onScroll={handleScroll}
        ref={ref.scrollRef}
        style={{
          height: scroll.containerHeight,
          width: scroll.containerWidth,
        }}
      >
        <div
          style={{
            height: scroll.contentHeight,
            width: scroll.contentWidth,
          }}
        >
          <svg
            className="heatmap__page"
            height={page.height}
            width={page.width}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Overlay />
            <Markers />
            <Annotations />
          </svg>
        </div>
      </div>
    </div>
    <Deletion heatmapRef={ref.pageRef} />
    <Reorder heatmapRef={ref.pageRef} />
    <NavControls
      direction="vertical"
      offsetVertical={showHorizontalArrows}
      show={showVerticalArrows}
    />
    <NavControls
      direction="horizontal"
      show={showHorizontalArrows}
    />
  </div>
));

Heatmap.propTypes = {
  handleScroll: PropTypes.func.isRequired,
  page: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  showHorizontalArrows: PropTypes.bool.isRequired,
  showVerticalArrows: PropTypes.bool.isRequired,
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
