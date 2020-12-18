import round from '../../../../utils/round';

export const getDelta = (e, start) => {
  const { pageX, pageY } = e;
  return {
    x: pageX - start.x,
    y: pageY - start.y,
  };
};

export const getMatrix = (scale, x, y) => (
  `matrix(${scale}, 0, 0, ${scale}, ${x}, ${y})`
);

export const getMatrices = (scale, x, y) => ({
  plot: getMatrix(scale, x, y),
  xAxis: getMatrix(scale, x, 0),
  yAxis: getMatrix(scale, 0, y),
});

export const getMouseStart = (e, start, vertex) => {
  if (vertex === 'x') {
    return {
      ...start,
      y: e.pageY,
    };
  } if (vertex === 'y') {
    return {
      ...start,
      x: e.pageX,
    };
  }
  return start;
};

export const getPanOrigin = (e, options) => {
  const start = getMouseStart(e, options.start, options.vertex);
  const delta = getDelta(e, start);

  return {
    x: options.origin.x + delta.x,
    y: options.origin.y + delta.y,
  };
};

export const getScale = (e, scale) => {
  const { deltaY } = e;
  const zoom = Math.exp(-Math.sign(deltaY) * 0.05);
  return {
    scale: round(scale * zoom, 5),
    zoom,
  };
};

export const getWheelOrigin = (position, zoom, origin) => ({
  x: round(position.x - (position.x - origin.x) * zoom, 5),
  y: round(position.y - (position.y - origin.y) * zoom, 5),
});

export const getWheelPosition = (e, options) => {
  const { currentTarget, pageX, pageY } = e;
  const { id, vertex } = options;
  const rect = currentTarget.querySelector(id).getBoundingClientRect();

  if (vertex === 'center') {
    return {
      x: rect.width / 2,
      y: rect.height / 2,
    };
  } if (vertex === 'x') {
    return {
      x: pageX - rect.left,
      y: rect.width / 2,
    };
  } if (vertex === 'y') {
    return {
      x: rect.height / 2,
      y: pageY - window.pageYOffset - rect.top,
    };
  }
  return {
    x: pageX - rect.left,
    y: pageY - window.pageYOffset - rect.top,
  };
};
