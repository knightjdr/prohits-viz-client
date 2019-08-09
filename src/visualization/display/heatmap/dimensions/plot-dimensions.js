// Pixel dimensions of elements around the plot.
const ARROW_PADDING = 30;
const COL_MARGIN = 100;
const HORZ_PADDING = 50;
const NAVBAR_HEIGHT = 40;
const PADDING = 2;
const ROW_MARGIN = 100;
const VERT_PADDING = 20;

export const plotHeight = (cellSize, cellHeight, windowHeight, removePadding) => {
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
  if (pageY > cellHeight) {
    height.arrowsY = false;
    height.heatmap = cellHeight * cellSize;
    height.pageY = cellHeight;
    height.rows = cellHeight;
    height.wrapper = height.heatmap + COL_MARGIN + PADDING;
  } else {
    height.arrowsY = true;
    height.heatmap = pageY * cellSize;
    height.pageY = pageY;
    height.rows = cellHeight;
    height.wrapper = wrapper;
  }
  return height;
};

export const plotWidth = (cellSize, cellWidth, windowWidth) => {
  const wrapper = windowWidth - HORZ_PADDING;
  const heatmap = wrapper - ROW_MARGIN;
  const pageX = Math.floor(heatmap / cellSize);

  const width = {};
  if (pageX > cellWidth) {
    width.arrowsX = false;
    width.canTranslate = true;
    width.columns = cellWidth;
    width.heatmap = cellWidth * cellSize;
    width.pageX = cellWidth;
    width.wrapper = width.heatmap + ROW_MARGIN + PADDING;
  } else {
    width.arrowsX = true;
    width.columns = cellWidth;
    width.canTranslate = false;
    width.heatmap = pageX * cellSize;
    width.pageX = pageX;
    width.wrapper = wrapper;
  }
  return width;
};

const plotDimensions = (cellSize, cellHeight, cellWidth, windowHeight, windowWidth) => {
  const width = plotWidth(cellSize, cellWidth, windowWidth);
  const height = plotHeight(cellSize, cellHeight, windowHeight, width.arrowsX);
  return {
    height,
    width,
  };
};

export default plotDimensions;
