import {
  getMatrices,
  getPanOrigin,
  getScale,
  getWheelOrigin,
  getWheelPosition,
} from './utils';

const mouse = {
  handlers: { move: null, up: null },
  move: false,
  start: {},
};

const handleMouseMove = (options) => (e) => {
  if (mouse.down) {
    e.preventDefault();

    const { setTransform, transform, vertex } = options;
    const newOrigin = getPanOrigin(e, { origin: transform.origin, start: mouse.start, vertex });

    setTransform({
      ...transform,
      matrix: getMatrices(transform.scale, newOrigin.x, newOrigin.y),
    });
  }
};

const handleMouseUp = (options) => (e) => {
  e.preventDefault();
  if (mouse.down) {
    const { setTransform, transform, vertex } = options;
    const newOrigin = getPanOrigin(e, { origin: transform.origin, start: mouse.start, vertex });

    mouse.down = false;

    setTransform({
      ...transform,
      origin: newOrigin,
      matrix: getMatrices(transform.scale, newOrigin.x, newOrigin.y),
    });

    window.removeEventListener('mousemove', mouse.handlers.move);
    window.removeEventListener('mouseup', mouse.handlers.up);
  }
};

export const handleMouseDown = (e, options) => {
  e.preventDefault();

  const { pageX, pageY } = e;
  const { setTransform, transform } = options;

  mouse.down = true;
  mouse.start = { x: pageX, y: pageY };

  mouse.handlers.move = handleMouseMove(options);
  mouse.handlers.up = handleMouseUp(options);

  window.addEventListener('mousemove', mouse.handlers.move);
  window.addEventListener('mouseup', mouse.handlers.up);

  setTransform({
    ...transform,
    mouseDown: true,
  });
};

export const handleWheel = (e, options) => {
  e.preventDefault();
  const { setTransform, transform } = options;

  const position = getWheelPosition(e, options);
  const scale = getScale(e, transform.scale);
  const newOrigin = getWheelOrigin(position, scale.zoom, transform.origin);

  setTransform({
    origin: newOrigin,
    scale: scale.scale,
    matrix: getMatrices(scale.scale, newOrigin.x, newOrigin.y),
  });
};

export default {
  pan: handleMouseDown,
  zoom: handleWheel,
};
