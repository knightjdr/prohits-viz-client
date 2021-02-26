const filterPoints = (points, filters) => (
  points.filter((point) => point.x >= filters.x && point.y >= filters.y)
);

export default filterPoints;
