const filterPoints = (points, filters) => {
  if (filters.strictAxisFiltering) {
    return points.filter((point) => Math.abs(point.x) >= filters.x && Math.abs(point.y) >= filters.y);
  }
  return points.filter((point) => Math.abs(point.x) >= filters.x || Math.abs(point.y) >= filters.y);
};

export default filterPoints;
