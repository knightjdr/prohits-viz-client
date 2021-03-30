const getCustomPointsFromGroups = (groups) => {
  const points = {};
  groups.forEach((group) => {
    group.points.forEach((point) => {
      points[point] = { color: group.color, radius: group.radius };
    });
  });
  return points;
};

export default getCustomPointsFromGroups;
