const calculateRadii = (radius, thickness) => ({
  inner: Math.floor(radius - thickness),
  outer: radius,
});

export default calculateRadii;
