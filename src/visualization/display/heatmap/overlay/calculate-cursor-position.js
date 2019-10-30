const calculateCursorPosition = (e, ref) => {
  const { clientX, clientY } = e;
  const { left, top } = ref.getBoundingClientRect();
  return {
    clientX,
    clientY,
    x: clientX - left,
    y: clientY - top,
  };
};

export default calculateCursorPosition;
