import getScrollbarWidth from '../../../../utils/define-scrollbar-width';

// Pixel dimensions of elements around the plot.
const ARROW_PADDING = 50;
const COL_MARGIN = 100;
const HORIZONTAL_PADDING = 70;
const NAVBAR_HEIGHT = 40;
const PADDING = 2;
const ROW_MARGIN = 100;
const VERT_PADDING = 20;

const scrollbarWidth = getScrollbarWidth();
const SCROLLBAR_SIZE = scrollbarWidth > 0 ? scrollbarWidth : 15;

export const calculateHeight = (cellSize, noRows, windowHeight, removePadding) => {
  let wrapper = windowHeight - NAVBAR_HEIGHT - VERT_PADDING;

  // If horizontal scroll arrows are being shown, remove some more height from wrapper.
  if (removePadding) {
    wrapper -= ARROW_PADDING;
  }

  const heatmap = wrapper - COL_MARGIN;
  const pageY = Math.floor(heatmap / cellSize);

  /* If there are not enough rows to fill available height,
  ** shrink the dimensions to what is needed */
  const height = {};
  if (pageY > noRows) {
    height.arrowsY = false;
    height.heatmap = noRows * cellSize;
    height.pageY = noRows;
    height.rows = noRows;
    height.scrollContainer = height.heatmap;
    height.scrollContent = height.heatmap;
    height.scrollTop = 0;
    height.wrapper = height.heatmap + COL_MARGIN + PADDING;
  } else {
    height.arrowsY = true;
    height.heatmap = pageY * cellSize;
    height.pageY = pageY;
    height.rows = noRows;
    height.scrollContainer = height.heatmap;
    height.scrollContent = noRows * cellSize;
    height.scrollTop = 0;
    height.wrapper = wrapper;
  }
  return height;
};

export const calculateWidth = (cellSize, noCols, windowWidth) => {
  const wrapper = windowWidth - HORIZONTAL_PADDING;
  const heatmap = wrapper - ROW_MARGIN;
  const pageX = Math.floor(heatmap / cellSize);

  const width = {};
  if (pageX > noCols) {
    width.arrowsX = false;
    width.canTranslate = true;
    width.columns = noCols;
    width.heatmap = noCols * cellSize;
    width.pageX = noCols;
    width.scrollContainer = width.heatmap;
    width.scrollContent = width.heatmap;
    width.scrollLeft = 0;
    width.wrapper = width.heatmap + ROW_MARGIN + PADDING;
  } else {
    width.arrowsX = true;
    width.columns = noCols;
    width.canTranslate = false;
    width.heatmap = pageX * cellSize;
    width.pageX = pageX;
    width.scrollContainer = width.heatmap;
    width.scrollContent = noCols * cellSize;
    width.scrollLeft = 0;
    width.wrapper = wrapper;
  }
  return width;
};

const addScrollPadding = (height, width) => ({
  height: {
    ...height,
    scrollContainer: width.arrowsX ? height.scrollContainer + SCROLLBAR_SIZE : height.scrollContainer,
    wrapper: width.arrowsX ? height.wrapper + SCROLLBAR_SIZE : height.wrapper,
  },
  width: {
    ...width,
    scrollContainer: height.arrowsY ? width.scrollContainer + SCROLLBAR_SIZE : width.scrollContainer,
    wrapper: height.arrowsY ? width.wrapper + SCROLLBAR_SIZE : width.wrapper,
  },
});

const updateRelativeToOldDimensions = (newDimensions, previousDimensions, cellSize) => {
  const updatedDimensions = {
    height: {
      ...newDimensions.height,
    },
    width: {
      ...newDimensions.width,
    },
  };

  if (previousDimensions.scrollContentHeight === newDimensions.height.scrollContent) {
    updatedDimensions.height.scrollTop = previousDimensions.scrollTop;
  } if (previousDimensions.scrollContentWidth === newDimensions.width.scrollContent) {
    updatedDimensions.width.scrollLeft = previousDimensions.scrollLeft;
  }

  if (previousDimensions.scrollContentHeight === newDimensions.height.scrollContent + cellSize) {
    updatedDimensions.height.scrollTop = previousDimensions.scrollTop - cellSize;
  } if (previousDimensions.scrollContentWidth === newDimensions.width.scrollContent + cellSize) {
    updatedDimensions.width.scrollLeft = previousDimensions.scrollLeft - cellSize;
  }

  return updatedDimensions;
};

const defineDimensions = ({ cellSize, noCols, noRows, previousDimensions, windowHeight, windowWidth }) => {
  const width = calculateWidth(cellSize, noCols, windowWidth);
  const height = calculateHeight(cellSize, noRows, windowHeight, width.arrowsX);
  const dimensions = addScrollPadding(height, width);
  return updateRelativeToOldDimensions(dimensions, previousDimensions, cellSize);
};

export default defineDimensions;
