const calculateVertex = (vertex, textPosition, delta, boundaries) => {
  let newPosition = textPosition[vertex] + delta[vertex];
  if (newPosition < boundaries[vertex].min) {
    newPosition = boundaries[vertex].min;
  } else if (newPosition > boundaries[vertex].max) {
    newPosition = boundaries[vertex].max;
  }
  return newPosition;
};

const calculateNewPosition = (textPosition, delta, boundaries) => ({
  x: calculateVertex('x', textPosition, delta, boundaries),
  y: calculateVertex('y', textPosition, delta, boundaries),
});

export default calculateNewPosition;
