const calculatePlotPosition = (position, vertex, length, page, increment) => {
  const newPosition = { ...position };
  newPosition[vertex] += increment;
  if (newPosition[vertex] <= 0) {
    newPosition[vertex] = 0;
  } else if (newPosition[vertex] >= length - page) {
    newPosition[vertex] = length - page;
  }
  return newPosition;
};

export default calculatePlotPosition;
