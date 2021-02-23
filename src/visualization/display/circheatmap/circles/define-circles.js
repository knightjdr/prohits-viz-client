const defineCircles = (readouts) => {
  const attributes = Object.keys(readouts[0].segments);
  const circles = attributes.reduce((accum, attribute) => ({ ...accum, [attribute]: [] }), {});
  const segmentNames = [];
  readouts.forEach((readout) => {
    segmentNames.push(readout.label);
    Object.entries(readout.segments).forEach(([attribute, value]) => {
      circles[attribute].push(value);
    });
  });

  return {
    circles,
    segmentNames,
  };
};

export default defineCircles;
