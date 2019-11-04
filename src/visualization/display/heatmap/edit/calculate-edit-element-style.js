const getContainerDimensions = () => ({
  width: window.innerWidth,
});

const getPadding = (element, side) => (
  Number.parseFloat(window.getComputedStyle(element, null).getPropertyValue(`padding-${side}`))
);

const getContainerPadding = (container) => {
  const padding = {
    bottom: getPadding(container, 'bottom'),
    left: getPadding(container, 'left'),
    right: getPadding(container, 'right'),
    top: getPadding(container, 'top'),
  };
  return {
    ...padding,
    totalHorizontal: padding.left + padding.right,
    totalVertical: padding.bottom + padding.top,
  };
};

const calculateHalfMargin = (windowSize, padding, wrapper) => (
  (windowSize - padding - wrapper) / 2
);

const calculateEditElementStyle = (svgDimensions, ref) => {
  const {
    height,
    width,
    wrapperWidth,
  } = svgDimensions;
  const containerDimensions = getContainerDimensions();
  const padding = getContainerPadding(ref.current);

  const horizontalMargin = calculateHalfMargin(containerDimensions.width, padding.totalHorizontal, wrapperWidth);

  return {
    column: {
      left: horizontalMargin + padding.left,
      height: 100,
      marginLeft: 100,
      top: padding.top,
      width,
    },
    row: {
      left: horizontalMargin + padding.left,
      height,
      marginTop: 100,
      top: padding.top,
      width: 100,
    },
  };
};

export default calculateEditElementStyle;
