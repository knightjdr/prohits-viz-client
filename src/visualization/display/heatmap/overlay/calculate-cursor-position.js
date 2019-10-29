const calculateCursorPosition = (e) => {
  const { clientX, clientY, target } = e;
  const { left, top } = target.getBoundingClientRect();
  return {
    clientX,
    clientY,
    x: clientX - left,
    y: clientY - top,
  };
};

export default calculateCursorPosition;
