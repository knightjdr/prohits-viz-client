const textLimits = {
  x: (x, radius, width) => {
    if (x < -radius) {
      return -radius;
    } if (x > radius - width) {
      return radius - width;
    }
    return x;
  },
  y: (y, offset, radius, width) => {
    const position = offset ? y - width : y;
    if (position < -radius) {
      return -radius;
    } if (position > radius - width) {
      return radius - width;
    }
    return position;
  },
};

export default textLimits;
