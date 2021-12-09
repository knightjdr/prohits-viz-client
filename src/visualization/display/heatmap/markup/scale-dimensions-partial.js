const scaleDimensions = (imageDimensions) =>
  (markerDimensions) => ({
    height: markerDimensions.height * imageDimensions.height,
    width: markerDimensions.width * imageDimensions.width,
    x: markerDimensions.x * imageDimensions.width,
    y: markerDimensions.y * imageDimensions.height,
  })
;

export default scaleDimensions;
