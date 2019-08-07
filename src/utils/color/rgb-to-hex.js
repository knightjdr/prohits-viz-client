// Convert a and rgb tuple to hex;

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const RGBtoHex = (r, g, b) => (
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
);
export default RGBtoHex;
