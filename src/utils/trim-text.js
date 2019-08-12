const trimText = (
  text,
  fontFamily = 'Lato',
  fontSize = '12px',
  width = 100,
) => {
  let trimmed = false;
  let trimmedText = text;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize} ${fontFamily}`;
  if (context.measureText(`${trimmedText}`).width > width) {
    trimmed = true;
    do {
      trimmedText = `${trimmedText.slice(0, -1)}`;
    } while (context.measureText(`${trimmedText}...`).width > width);
  }
  return {
    original: text,
    text: trimmed ? `${trimmedText}...` : trimmedText,
    trimmed,
  };
};

export default trimText;
