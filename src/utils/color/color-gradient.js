import HSLtoHex from './hsl-to-hex';
import Round from '../round';
import roundNearest from '../round-nearest';

const twoColor = ['blueYellow', 'blueRed'];

// biDirection creates a two color hex gradient. The starting color is set using the
// hue and the first half of the gradient is populated with colors by increasing the
// lightness from 0.5 to 1. The middle color of the gradient is set to white and
// the remaining portion of the gradient is created for the end color (also
// defined by its hue) by decreasing the lightness from 1 to 0.5.
const biDirection = (colorSpace, numColors) => {
  let hEnd;
  let hStart;
  let s;
  if (colorSpace === 'blueYellow') {
    // Start (HSL value = (225, 100%, 50%).
    // End (HSL value = (60, 100%, 50%).
    hEnd = 60 / 360;
    hStart = 0.625;
    s = 1;
  } else {
    // Default blueRed scale
    // Start (HSL value = (225, 100%, 50%).
    // End (HSL value = (0, 100%, 50%).
    hEnd = 0;
    hStart = 0.625;
    s = 1;
  }
  const halfColors = (numColors - 1) / 2;
  const increment = 1.00 / (numColors - 1);
  let startL = 0.50;
  const gradient = [];
  for (let i = 0; i < halfColors; i += 1) {
    const lightness = roundNearest(startL + (i * increment), 0.0001);
    gradient[i] = HSLtoHex({ h: hStart, s, l: lightness });
  }
  gradient[halfColors] = HSLtoHex({ h: 0, s, l: 1 });
  startL = 1;
  const startIndex = halfColors + 1;
  for (let i = 0; i < halfColors; i += 1) {
    const lightness = roundNearest(startL - ((i + 1) * increment), 0.0001);
    gradient[i + startIndex] = HSLtoHex({ h: hEnd, s, l: lightness });
  }
  return gradient;
};

// monoDirection creates a single direction hex gradient. The color scale is set using the hue
// and saturation components of HSL. The gradient is then defined by changing the lightness
// from 1 (light) to 0 (dark). HSL values are on a 0-1 scale.
// The maximum hue value of 1 equals 360 so all values are relative to that.
const monoDirection = (colorSpace, numColors) => {
  let h;
  let s;
  if (colorSpace === 'green') {
    // Middle HSL value = (120, 100%, 50%).
    h = 120 / 360;
    s = 1;
  } else if (colorSpace === 'greyscale') {
    // Middle HSL value = (0, 0%, 50%).
    h = 0;
    s = 0;
  } else if (colorSpace === 'red') {
    // Middle HSL value = (0, 100%, 50%).
    h = 0;
    s = 1;
  } else if (colorSpace === 'yellow') {
    // Middle HSL value = (60, 100%, 50%).
    h = 60 / 360;
    s = 1;
  } else { // default blue
    // Middle (HSL value = (225, 100%, 50%).
    h = 0.625;
    s = 1;
  }
  const increment = 1 / (numColors - 1);
  const startL = 1;
  const gradient = [];
  for (let i = 0; i < numColors; i += 1) {
    const lightness = Round(startL - (i * increment), 4);
    gradient[i] = HSLtoHex({ h, s, l: lightness });
  }
  return gradient;
};

/* colorGradient defines a color gradient to use for fill values. It defines
** the colors to use via HSL and then converts those to HEX. */

const colorGradient = (colorSpace, numColors, invert) => {
  let gradient;
  if (twoColor.includes(colorSpace)) {
    gradient = biDirection(colorSpace, numColors);
  } else {
    gradient = monoDirection(colorSpace, numColors);
  }

  // Invert gradient if requested.
  if (invert) {
    gradient.reverse();
  }
  return gradient;
};
export default colorGradient;
