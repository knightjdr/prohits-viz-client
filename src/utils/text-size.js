/* This calculates the width and height of a string */
const textSize = (
  text,
  fontFamily = 'Lato',
  fontSize = '12px',
) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize} ${fontFamily}`;
  return Math.ceil(context.measureText(`${text}`).width);
};

export default textSize;
