const filterPoints = (points, filters) => (
  points.filter((point) => Math.abs(point.x) >= filters.x && Math.abs(point.y) >= filters.y)
);

export default filterPoints;
