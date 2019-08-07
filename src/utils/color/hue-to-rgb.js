// HuetoRGB converts a hue to rgb.
const HuetoRGB = (p, q, tInput) => {
  let t = tInput;
  if (t < 0) {
    t += 1;
  } else if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + ((q - p) * 6 * t);
  } else if (t < 0.5) {
    return q;
  } else if (t < 2 / 3) {
    return p + ((q - p) * ((2 / 3) - t) * 6);
  }
  return p;
};
export default HuetoRGB;
