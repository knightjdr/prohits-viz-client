const calculateNewPosition = (e, dimensions) => {
  const rect = e.currentTarget.getBoundingClientRect();
  // Calculate mouse position as percentage of container.
  let x = (e.clientX - rect.left) / rect.width;
  let y = (e.clientY - rect.top) / rect.height;

  /* Move x and y positions so that event click represents center of
  ** new region. Move x by width / 2 and y by height / 2. */
  const {
    columns,
    pageX,
    pageY,
    rows,
  } = dimensions;
  const height = pageY / rows;
  const width = pageX / columns;
  x -= width / 2;
  y -= height / 2;

  // Move x and y positions if they are too close to the edges.
  if (x + width > 1) {
    x = 1 - width;
  } else if (x < 0) {
    x = 0;
  }
  if (y + height > 1) {
    y = 1 - height;
  } else if (y < 0) {
    y = 0;
  }

  // Convert x an y to cell numbers.
  x = Math.round(x * columns);
  y = Math.round(y * rows);
  return [x, y];
};

export default calculateNewPosition;
