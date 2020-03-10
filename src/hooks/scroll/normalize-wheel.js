// Source
// https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js

// Reasonable defaults
const PIXEL_STEP = 10;
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;

const normalizeWheel = (event) => {
  let spinX = 0;
  let spinY = 0;
  let pixelX = 0;
  let pixelY = 0;

  if ('detail' in event) {
    spinY = event.detail;
  }
  if ('wheelDelta' in event) {
    spinY = -event.wheelDelta / 120;
  }
  if ('wheelDeltaY' in event) {
    spinY = -event.wheelDeltaY / 120;
  }
  if ('wheelDeltaX' in event) {
    spinX = -event.wheelDeltaX / 120;
  }

  // side scrolling on FF with DOMMouseScroll
  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    spinX = spinY;
    spinY = 0;
  }

  pixelX = spinX * PIXEL_STEP;
  pixelY = spinY * PIXEL_STEP;

  if ('deltaY' in event) {
    pixelY = event.deltaY;
  }
  if ('deltaX' in event) {
    pixelX = event.deltaX;
  }

  if ((pixelX || pixelY) && event.deltaMode) {
    if (event.deltaMode === 1) {
      pixelX *= LINE_HEIGHT;
      pixelY *= LINE_HEIGHT;
    } else {
      pixelX *= PAGE_HEIGHT;
      pixelY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pixelX && !spinX) { spinX = (pixelX < 1) ? -1 : 1; }
  if (pixelY && !spinY) { spinY = (pixelY < 1) ? -1 : 1; }

  return {
    spinX,
    spinY,
    pixelX,
    pixelY,
  };
};

export default normalizeWheel;
