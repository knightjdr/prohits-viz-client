import convertHuetoRGB from './convert-hue-to-rgb';
import convertRGBtoHex from './convert-rgb-to-hex';

// convertHSLtoHex converts hsl colors to rgb to hex. Takes HSL values between 0 - 1 and
// converts to range from 0 - 255, then converts to hex.
const convertHSLtoHex = (hsl) => {
  let r;
  let g;
  let b;

  if (hsl.s === 0) { // Achromatic.
    r = hsl.l;
    g = hsl.l;
    b = hsl.l;
  } else {
    let q;
    if (hsl.l < 0.5) {
      q = hsl.l * (1 + hsl.s);
    } else {
      q = (hsl.l + hsl.s) - (hsl.l * hsl.s);
    }
    const p = (2 * hsl.l) - q;
    r = convertHuetoRGB(p, q, hsl.h + (1 / 3));
    g = convertHuetoRGB(p, q, hsl.h);
    b = convertHuetoRGB(p, q, hsl.h - (1 / 3));
  }
  const rgb = {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
  return convertRGBtoHex(rgb.r, rgb.g, rgb.b);
};

export default convertHSLtoHex;
