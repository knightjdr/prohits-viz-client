const getPointsPassingFC = (fc, points) => {
  const selectedPoints = [];
  if (Math.sign(fc) === 1) {
    points.forEach((point, index) => {
      if (point.x / point.y >= fc) {
        selectedPoints.push(index);
      }
    });
  } else {
    const cutoff = Math.abs(fc);
    points.forEach((point, index) => {
      if (point.y / point.x >= cutoff) {
        selectedPoints.push(index);
      }
    });
  }
  return selectedPoints;
};

export default getPointsPassingFC;
